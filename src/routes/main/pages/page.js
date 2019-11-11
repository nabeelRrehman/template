import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Button, Card, Form, Icon, Input, Modal, message, Checkbox, Row, Col } from "antd";
import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import './page.less'
import DynamicForm from "../../../components/DynamicForm/dynamicForm";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import { arrayMove, SortableContainer } from "react-sortable-hoc";
import PageCell from './pageSortable'
const FormItem = Form.Item;
const DragHandle = SortableHandle(() =>
    <span className="gx-draggable-icon gx-pt-2">
        <i className="icon icon-expand" style={{ fontSize: 20 }} />
    </span>);

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

const Data = SortableContainer(({ keys, removeKey, handleChange }) => {
    return (
        <Row>
            <Col span={24}>
                {
                    keys.map((Item, index) => {
                        return (
                            <PageCell key={index} handleChange={handleChange} index={index} ItemIndex={index} removeKey={removeKey} keys={Item} />
                        )
                    })
                }
            </Col>
        </Row>
    );
})

class Page extends Component {
    constructor() {
        super()

        this.state = {
            keys: [],
            visible: false
        }
    }

    remove(k, index) {
        const { keys } = this.state

        if (keys.length > 1) {

            keys.splice(index, 1)
            this.setState({ keys })

        } else {

            this.setState({ keys: [], render: false })

        }

    }

    componentWillMount() {
        const { content, name, title, back } = this.props


        if (content && !back) {
            if (content[name] && content[name][title]) {
                this.setState({
                    keys: content[name][title].content,
                    render: true
                })
            }
        } else {
            if (content && content[name]) {
                this.setState({
                    keys: content[name],
                    render: true
                })
            }
        }
    }

    componentWillReceiveProps(props) {
        const { content, name, title, back } = props

        if (content && !back) {
            if (content[name] && content[name][title]) {
                this.setState({
                    keys: content[name][title].content,
                    render: true
                })
            }
        } else {
            if (content && content[name]) {
                this.setState({
                    keys: content[name],
                    render: true
                })
            }
        }
    }

    _setChange(value, key, index, state) {
        const { keys } = this.state

        if (state) {
            keys[index][state] = value
        } else {
            keys[index].value = value
        }

        this.setState({ keys })

    }

    _renderInput(data) {
        const { keys } = this.state

        keys.push(data)

        this.setState({
            keys
        })
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            keys: arrayMove(this.state.keys, oldIndex, newIndex),
        });
    };

    handleOk() {
        const { keys } = this.state
        const { getData } = this.props

        if (keys && keys.length) {
            var count = 0
            keys.map((key, index) => {
                if (!key.value) {
                    count++
                }
                if (index == keys.length - 1) {
                    if (count) {
                        // alert('please fill empty field or delete this field')
                        message.error('Please fill empty field or remove the field')
                    } else {
                        getData(keys)
                        console.log(keys, 'keys here')
                        this.setState({ render: true, visible: false })
                    }
                }
            })
        } else {
            message.error('Please add atleast one field')
        }
        console.log(keys, 'keysddd')
    }

    goBack() {
        const { goBack } = this.props

        goBack()
    }

    render() {
        const { title, data, back } = this.props
        const { keys, render } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '95%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {
                        !back ?
                            <div onClick={() => this.goBack()} className={'back-btn'}>
                                <Icon style={{ fontSize: '18px' }} type="arrow-left" />
                            </div>
                            :
                            null
                    }
                    <div style={{ fontSize: '20px', marginLeft: '20px' }}>
                        {title}
                    </div>
                </div>

                <div style={{ width: '100%', padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ width: '50%' }} className="gx-card" title={title}>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            {
                                render ?
                                    keys.map((item) => {
                                        return (
                                            item.name == 'title' ?
                                                <div style={{ fontWeight: '600', fontSize: '13px', margin: '3px 0px' }}>
                                                    {item.value}
                                                </div>
                                                :
                                                item.name == 'link' ?
                                                    <a href={item.value} target={'_blank'}>
                                                        <div style={{ margin: '3px 0px', color: '#fe6600', cursor: 'pointer', textDecorationLine: 'underline' }}>
                                                            {item.value}
                                                        </div>
                                                    </a>
                                                    :
                                                    item.name == 'points' ?
                                                        <div style={{ margin: '3px 0px' }}>
                                                            {
                                                                this.props.lists ?
                                                                    <ul><li>{item.value}</li></ul>
                                                                    :
                                                                    <Checkbox>{item.value}</Checkbox>
                                                            }
                                                        </div>
                                                        :
                                                        item.name == 'nestedpoints' ?
                                                            <div style={{ margin: '3px 15px' }}>
                                                                {
                                                                    this.props.lists ?
                                                                        <ul style={{ listStyleType: 'circle' }}><li>{item.value}</li></ul>
                                                                        :
                                                                        <Checkbox>{item.value}</Checkbox>
                                                                }
                                                            </div>
                                                            :
                                                            item.name == 'image' ?
                                                                <div style={{ margin: '10px 0px' }}>
                                                                    <img src={item.imageUrl} />
                                                                </div>
                                                                :
                                                                <div style={{ margin: '3px 0px' }}>
                                                                    {item.value}
                                                                </div>
                                        )

                                    })
                                    :
                                    <div style={{ margin: '3px 0px' }}>
                                        {'no content available'}
                                    </div>
                            }
                        </div>

                    </Card>
                </div>

                {/* Fab Icon */}
                <nav className="fabContainer"
                    tooltip={`Add ${title}`}
                >
                    {
                        <div onClick={() => this.handleToggle()} className='fabbuttons'>
                            <Icon type="plus" style={{ color: 'white', fontSize: '20px' }} />
                        </div>
                    }
                </nav>


                <Modal
                    title={`Add ${title}`}
                    visible={this.state.visible}
                    onOk={() => this.handleOk()}
                    okText={'Submit'}
                    onCancel={() => this.handleToggle()}
                >
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'scroll', maxHeight: '300px', }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {
                                    data.title &&
                                    <span style={{ width: '30%' }}>
                                        <DynamicForm title={'Add Title'} name={'title'} formItems={(data) => this._renderInput(data)} />
                                    </span>
                                }
                                {
                                    data.content &&
                                    <span style={{ width: '35%' }}>
                                        <DynamicForm title={'Add Content'} name={'content'} formItems={(data) => this._renderInput(data)} />
                                    </span>
                                }
                                {
                                    data.links &&
                                    <span style={{ width: '30%' }}>
                                        <DynamicForm title={'Add Links'} name={'link'} formItems={(data) => this._renderInput(data)} />
                                    </span>
                                }
                                {
                                    data.checkList &&
                                    <span style={{ width: '40%' }}>
                                        <DynamicForm title={'Add Check-List'} name={'points'} formItems={(data) => this._renderInput(data)} />
                                    </span>
                                }
                                {
                                    data.checkList &&
                                    <span style={{ width: '43%' }}>
                                        <DynamicForm title={'Add Nested-List'} name={'nestedpoints'} formItems={(data) => this._renderInput(data)} />
                                    </span>
                                }
                                {
                                    data.image &&
                                    <span style={{ width: '43%' }}>
                                        <DynamicForm title={'Add Image / Link'} name={'image'} formItems={(data) => this._renderInput(data)} />
                                    </span>
                                }
                            </div>



                            {
                                keys && keys.length ?
                                    <Data keys={keys} handleChange={(value, k, index, state) => this._setChange(value, k, index, state)} removeKey={(k, index) => this.remove(k, index)} onSortEnd={this.onSortEnd} useDragHandle={true} />
                                    :
                                    null
                            }

                        </div>
                    </div>
                </Modal>


            </div>
        )
    }
}




const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, content } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, content }
};

const FormComponent = connect(
    mapStateToProps,
    { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange },

)(Page)

export default Form.create()(FormComponent);
