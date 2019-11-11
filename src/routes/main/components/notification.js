import React, { Component } from "react";
import { connect } from "react-redux";

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Card, Table, Switch, Radio, Modal, Spin } from "antd";
import NotificationModal from './notificationModal'
import { getAllUsers } from '../../../appRedux/actions/Setting'


class Notification extends Component {
    constructor() {
        super()

        this.state = {
            data: null,
            columns: [
                { title: '', width: 200, dataIndex: 'name', key: 'name', fixed: 'left' },
                { title: 'Title', width: 150, dataIndex: 'title', key: 'title' },
                { title: 'Body', width: 220, dataIndex: 'body', key: 'body' },
                { title: 'Date and Time', width: 170, dataIndex: 'date', key: 'date' },
                // { title: 'Link', width: 150, dataIndex: 'link', key: 'link' },
                // { title: 'Activate / Pause', width: 150, dataIndex: 'activate', fixed: 'right', key: 'activate' },
            ],
            columns2: [
                // { title: '', width: 200, dataIndex: 'name', key: 'name', fixed: 'left' },
                { title: 'Title', width: 150, dataIndex: 'title', key: 'title' },
                { title: 'Body', width: 220, dataIndex: 'body', key: 'body' },
                { title: 'Date and Time', width: 170, dataIndex: 'date', key: 'date' },
                // { title: 'Status', width: 150, dataIndex: 'status', fixed: 'right', key: 'status' },
            ],
            data2: null,
            users: null,
            modal: false,
            openModal: false
        }
    }

    setUsers = async (users) => {
        if (users && users.length) {
            let data = [];
            await users.map((item, index) => {
                var obj = {
                    key: index + 1,
                    name: item.name,
                    title: item.data.title,
                    body: item.data.body,
                    date: item.date,
                    // link: item.data.link,
                    // activate: <Switch defaultChecked={item.activate} onChange={(sw) => this.onChange(item, 'panic', sw)} />,
                }
                data.push(obj)
            })

            return await data

        }
    }


    setLogs = async (logs) => {
        if (logs && logs.length) {
            let data = [];
            await logs.map((item, index) => {
                var obj = {
                    key: index + 1,
                    // name: item.name,
                    title: item.title,
                    body: item.body,
                    date: item.date,
                    status: Date.now() > new Date(item.date).getTime() ? 'Sent' : 'Pending'
                }
                data.push(obj)
            })

            return await data

        }
    }

    onChange(item, type, sw) {

        let { notificationData } = this.state

        if (notificationData && notificationData.length) {
            notificationData.map((notify, index) => {
                if (item.name == notify.name) {
                    notify.activate = notify.activate != null ? !notify.activate : true
                }
            })


            fetch(`https://cequred.herokuapp.com/notification/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'notification',
                    data: notificationData
                })
            }).then((response) => {
                response.json().then((result) => {

                })
            }).catch((err) => {
                console.log(err, 'err here')

            })
        }

    }


    componentDidMount() {
        fetch(`https://cequred.herokuapp.com/user/getUsers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        }).then((response) => {
            response.json().then((result) => {
                console.log(result, 'all users')
                if (result) {
                    const { getAllUsers } = this.props
                    getAllUsers(result)
                }
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })


    }

    componentWillReceiveProps(props) {
        const { notification } = props

        if (notification && notification.logs) {
            var logs = notification.logs ? notification.logs : []
            this.setLogs(logs).then((mydata) => {
                this.setState({
                    data2: mydata
                })
            })
        }
    }

    setData(data) {
        this.setUsers(data).then((mydata) => {
            this.setState({
                notificationData: data,
                data: mydata
            })
        })

    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleModalToggle(user) {
        this.setState({
            selectedUser: user,
            openModal: !this.state.openModal,
            visible: false
        })
    }

    render() {
        const { data, columns, columns2, data2 } = this.state
        const { language } = this.props
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {/* {language.dashboard} */}
                <div style={{ width: '100%', padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ width: '85%' }} className="gx-card" title={language.autoMail}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <div onClick={() => this.handleToggle()} style={{ display: 'flex', paddingRight: '5%', justifyContent: 'flex-end', color: '#038fde', cursor: 'pointer', textDecorationLine: 'underline' }}>
                                {'Edit'}
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <Table columns={columns} dataSource={data} scroll={{ x: 600 }} />
                        </div>
                    </Card>
                </div>

                <div style={{ width: '100%', padding: '10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ width: '85%' }} className="gx-card" title={language.notifylogs}>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <Table columns={columns2} dataSource={data2} scroll={{ x: 500 }} />
                        </div>
                    </Card>
                </div>

                <NotificationModal notificationData={(data) => this.setData(data)} modal={this.state.visible} />


            </div >
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language, allUsers, notification } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language, allUsers, notification }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, getAllUsers })(Notification);
