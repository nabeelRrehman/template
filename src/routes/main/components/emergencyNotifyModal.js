import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Col, Row } from "antd";
import IconWithTextCard from "components/Metrics/IconWithTextCard";

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Card, Collapse, Modal, Form, Input, message, Spin } from "antd";
import DynamicForm from "../../../components/DynamicForm/dynamicForm";

const { Panel } = Collapse
const FormItem = Form.Item;
const { TextArea } = Input
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
};


class EmergencyNotificationModal extends Component {
    constructor() {
        super()

        this.state = {
            visible: false,
            collapse: [
                {
                    name: 'Emergency Notification',
                    value: 'emergencyNotify',
                    data: {
                        title: '',
                        body: ''
                    }
                },
            ],
            loader: false
        }
    }


    componentDidMount() {

        fetch(`https://cequred.herokuapp.com/notification/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            response.json().then((result) => {
                this.setState({
                    collapse: result.emergencyNotification,
                })
                this.props.notificationData(result.emergencyNotification)

            })
        }).catch((err) => {
            console.log(err, 'err here')

        })

    }

    componentWillReceiveProps(props) {
        this.setState({
            visible: props.modal
        })
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleOk() {

        const { collapse } = this.state

        this.setState({ loader: true })

        fetch(`https://cequred.herokuapp.com/notification/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'emergencyNotification',
                data: collapse
            })
        }).then((response) => {
            response.json().then((result) => {
                // message.success('Notification Sent');
                this.props.sendToAll(collapse)
                this.setState({
                    visible: false,
                    loader: false
                })
            })
        }).catch((err) => {
            this.setState({
                visible: false,
                loader: false
            })
            console.log(err, 'err here')

        })

    }

    callBack() {



    }

    _setChange(value, index, text) {

        let { collapse } = this.state

        collapse[index].data[text] = value

        this.setState({
            collapse
        })

    }


    _renderContent(item, index) {

        return (
            <Panel header={item.name} key={index}>
                <FormItem
                    {...(formItemLayout)}
                    label={'Title'}
                    required={false}
                    key={1}
                    style={{ marginLeft: '3px' }}
                >
                    {
                        (
                            <Input value={item.data.title} onChange={(e) => this._setChange(e.target.value, index, 'title')} placeholder="Add Title..." style={{ width: '80%' }} />
                        )
                    }
                </FormItem>

                <FormItem
                    {...(formItemLayout)}
                    label={'Body'}
                    required={false}
                    key={1}
                    style={{ marginLeft: '3px' }}
                >
                    {
                        (
                            <TextArea value={item.data.body} onChange={(e) => this._setChange(e.target.value, index, 'body')} rows={4} placeholder="Add Content..." style={{ width: '80%' }} />
                        )
                    }
                </FormItem>
            </Panel>
        )

    }

    render() {
        const { collapse, loader } = this.state
        return (
            <div>
                <Modal
                    title={`Create Notification`}
                    visible={this.state.visible}
                    onOk={() => this.handleOk()}
                    okText={'Send'}
                    onCancel={() => this.handleToggle()}
                >
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'scroll', maxHeight: '300px', }}>
                            <Collapse style={{ width: '100%' }} defaultActiveKey={['0']} onChange={() => this.callBack()}>

                                {
                                    collapse &&
                                    collapse.map((item, index) => {
                                        return this._renderContent(item, index)
                                    })
                                }

                            </Collapse>
                        </div>
                    </div>

                    {
                        loader &&
                        <div style={{ position: 'absolute', bottom: '50%', left: '45%' }}>
                            <Spin size="large" />
                        </div>
                    }
                </Modal>
            </div >
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange })(EmergencyNotificationModal);
