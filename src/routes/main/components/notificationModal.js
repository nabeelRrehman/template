import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Col, Row } from "antd";
import IconWithTextCard from "components/Metrics/IconWithTextCard";

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Card, Collapse, Modal, Form, Input } from "antd";
import DynamicForm from "../../../components/DynamicForm/dynamicForm";
import { DatePicker, TimePicker, Spin, message, Button } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
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


class NotificationModal extends Component {
    constructor() {
        super()

        this.state = {
            visible: false,
            date: new Date(),
            collapse: [
                {
                    name: 'Monthly checklists',
                    value: 'monthlycheck',
                    date: '',
                    data: {
                        title: '',
                        body: ''
                    }
                }
            ],
            loader: false,
            addPrevent: ''
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
                    collapse: result.notification,
                })
                this.props.notificationData(result.notification)

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

    sendLogs(data) {
        fetch(`https://cequred.herokuapp.com/notification/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'logs',
                data
            })
        }).then((response) => {
            response.json().then((result) => {
                console.log(result, 'result')
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
    }

    RequestSendApi(type, obj) {

        obj.type = type

        fetch(`https://node-push-notify.herokuapp.com/push/schedule`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }).then((response) => {
            response.json().then((result) => {
                console.log(result, 'change here')

            })
        }).catch((err) => {
            console.log(err, 'err here')

        })

    }

    sendNotification(token, notificationData) {

        const { notification } = this.props
        if (notificationData) {
            var notify = notificationData
            var notificationLogs = notification.logs
            // var logs = notificationLogs ? notificationLogs : []
            var logs = []
            notify.map((item, index) => {

                var obj = {
                    title: item.data.title,
                    body: item.data.body,
                    date: item.date ? item.date : new Date().getTime() + 10000,
                    token,
                    link: item.name,
                }

                if (item.activate) {
                    logs.push(obj)
                    this.RequestSendApi(item.value, obj)
                }

                if (index == notify.length - 1) {
                    this.sendLogs(logs)
                }
            })

        }

    }


    sendSchedule(notification) {
        const { allUsers } = this.props
        if (allUsers && allUsers.length && notification) {
            var tokens = []
            allUsers.map((item, index) => {
                if (item.token) {
                    tokens.push(item.token)
                }
                if (index == allUsers.length - 1) {



                    this.sendNotification(tokens, notification)
                }
            })
        }

    }

    handleOk() {

        const { collapse } = this.state

        if (collapse && collapse.length) {

            this.setState({ loader: true })

            fetch(`https://cequred.herokuapp.com/notification/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'notification',
                    data: collapse
                })
            }).then((response) => {
                response.json().then((result) => {
                    message.success('Data successfully updated');
                    this.setState({
                        visible: false,
                        loader: false
                    })
                    this.sendSchedule(collapse)
                })
            }).catch((err) => {
                console.log(err, 'err here')
                this.setState({
                    visible: false,
                    loader: false
                })

            })

        } else {

            message.warning('Please add atleast one Prevention');

        }

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

    setDate(value, index, text) {

        let { collapse } = this.state

        collapse[index][text] = value

        this.setState({
            collapse
        })
    }

    onOk(value) {
        console.log('onOk: ', moment(value));
    }


    _renderInput(data) {
        const { addPrevent, collapse } = this.state

        if (addPrevent) {

            var obj = {
                name: addPrevent,
                value: 'monthlycheck',
                date: new Date(),
                data: {
                    title: '',
                    body: ''
                },
                activate: true
            }

            console.log(obj, 'data here')
            collapse.push(obj)

            this.setState({
                collapse,
                addPrevent: ''
            })

        } else {
            message.warning('Please add Prevention link')
        }


    }

    delete(item, index) {
        const { collapse } = this.state

        if (collapse && collapse.length) {
            collapse.splice(index, 1)
            this.setState({ collapse })
        }
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

                <FormItem
                    {...(formItemLayout)}
                    label={'Date'}
                    required={false}
                    key={1}
                    style={{ marginLeft: '3px' }}
                >
                    {
                        (
                            <DatePicker showTime placeholder="Select Date/Time" defaultValue={item.date ? moment(item.date) : ''} onChange={(time, timechange) => this.setDate(timechange, index, 'date')} onOk={(value) => this.onOk(value)} />
                        )
                    }
                </FormItem>
                <FormItem
                    {...(formItemLayout)}
                    label={'Delete'}
                    required={false}
                    key={1}
                    style={{ marginLeft: '3px' }}
                >
                    {
                        (
                            <Button onClick={() => this.delete(item, index)} type="danger" size={'large'}>
                                {'Delete'}
                            </Button>
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
                    title={`Manage Notification`}
                    visible={this.state.visible}
                    onOk={() => this.handleOk()}
                    okText={'Update'}
                    onCancel={() => this.handleToggle()}
                >
                    <div style={{ width: '100%', display: 'flex' }}>
                        <span style={{ width: '70%' }}>
                            <FormItem
                                {...(formItemLayout)}
                                label={'Link'}
                                required={false}
                                key={1}
                                style={{ marginLeft: '3px' }}
                            >
                                {
                                    (
                                        <Input value={this.state.addPrevent} onChange={(e) => this.setState({ addPrevent: e.target.value })} placeholder="Add Prevention..." style={{ width: '100%' }} />
                                    )
                                }
                            </FormItem>
                        </span>
                        <span style={{ width: '30%' }}>
                            <DynamicForm title={'Add'} name={'Prevent'} formItems={(data) => this._renderInput(data)} />
                        </span>
                    </div>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'scroll', maxHeight: '300px', }}>
                            <Collapse style={{ width: '100%' }} onChange={() => this.callBack()}>

                                {
                                    collapse &&
                                    collapse.map((item, index) => {
                                        return this._renderContent(item, index)
                                    })
                                }

                            </Collapse>
                        </div>
                        {
                            loader &&
                            <div style={{ position: 'absolute', bottom: '50%', left: '45%' }}>
                                <Spin size="large" />
                            </div>
                        }
                    </div>
                </Modal>

            </div >
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language, allUsers, notification } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language, allUsers, notification }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange })(NotificationModal);
