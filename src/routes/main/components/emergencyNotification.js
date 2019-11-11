import React, { Component } from "react";
import { connect } from "react-redux";

// import MainApp from "./MainApp";
// import SignIn from "../SignIn";
// import SignUp from "../SignUp";
import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Card, Table, Switch, Radio, message } from "antd";
import NotificationModal from './notificationModal'
import { getAllUsers } from '../../../appRedux/actions/Setting'
import EmergencyNotifyModal from "./emergencyNotifyModal";


class Notification extends Component {
    constructor() {
        super()

        this.state = {
            data: null,
            columns: [
                { title: 'Users', width: 120, dataIndex: 'name', key: 'name', fixed: 'left' },
                // { title: 'Title', dataIndex: 'title', key: 'title' },
                // { title: 'Body', dataIndex: 'body', key: 'body' },
                {
                    title: 'Send',
                    key: 'operation',
                    // fixed: 'right',
                    width: 120,
                    render: (user) => <span onClick={() => this.sendMsg(user)} style={{ color: '#038fde', cursor: 'pointer', textDecorationLine: 'underline' }}>Send</span>,
                },
            ],
            columns2: [
                { title: 'Name', width: 120, dataIndex: 'name', key: 'name', fixed: 'left' },
                { title: 'Title', width: 150, dataIndex: 'title', key: 'title' },
                { title: 'Body', width: 200, dataIndex: 'body', key: 'body' },
                {
                    title: 'Status',
                    key: 'status',
                    dataIndex: 'status',
                    fixed: 'right',
                    width: 120,
                },
            ],
            data2: null,
            users: null,
        }
    }

    setUsers(users) {
        if (users && users.length) {
            let data = [];
            const { notificationData } = this.state
            users.map((item, index) => {
                var obj = {
                    key: index + 1,
                    name: item.name,
                    id: item._id,
                    title: notificationData && notificationData[0].data.title,
                    body: notificationData && notificationData[0].data.body,
                    token: item.token,
                }
                data.push(obj)
            })
            this.setState({
                data
            })
        }
    }

    setLogs(logs) {
        if (logs && logs.length) {
            let data2 = [];
            logs.map((items, index) => {
                let item = items.logs
                var obj = {
                    key: index + 1,
                    name: item.name,
                    id: items._id,
                    title: item.title,
                    body: item.body,
                    token: item.token,
                    status: 'Sent'
                }
                data2.push(obj)
            })
            this.setState({
                data2
            })
        }
    }

    getNotificationLogs() {
        fetch(`https://cequred.herokuapp.com/notification/logs/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            response.json().then((result) => {
                console.log(result, 'notification logs')
                this.setLogs(result)

            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
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
                    this.setUsers(result)
                    this.getNotificationLogs()
                    getAllUsers(result)
                }
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })

    }

    setData(notifyData) {

        this.setState({
            notificationData: notifyData,
        })
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    setNotificationLogs(token, title, body, name) {

        var obj = {
            token,
            title,
            body,
            name
        }

        fetch(`https://cequred.herokuapp.com/notification/logs/add`, {
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

    send(token, title, body, name) {
        fetch(`https://node-push-notify.herokuapp.com/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
                title,
                body
            })
        }).then((response) => {
            response.json().then((result) => {
                message.success('Emergency message sent');
                this.setNotificationLogs(token, title, body, name)
                this.setState({
                    visible: false
                })
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
    }

    sendMsg(selectedUser) {
        const { notificationData } = this.state

        if (notificationData) {
            var token = selectedUser.token
            var name = selectedUser.name
            var title = notificationData[0].data.title
            var body = notificationData[0].data.body

            this.send(token, title, body, name)

        }


    }

    sendToAll(notificationData) {
        const { data } = this.state

        if (notificationData) {
            var token = []
            var title = notificationData[0].data.title
            var body = notificationData[0].data.body

            if (data && data.length) {
                data.map((item, index) => {
                    if (item.token) {
                        token.push(item.token)
                    }
                })
            }
            // console.log(token, 'tokens')

            this.send(token, title, body)

        }
    }

    render() {
        const { data, columns, columns2, data2 } = this.state
        const { language } = this.props
        return (
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {/* {language.dashboard} */}


                <div style={{ width: '70%', flexBasis: '100%', padding: '10px 0px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Card style={{ width: '30%' }} className="gx-card" title={language.emerMail}>
                        <div style={{ display: 'flex', paddingRight: '5%' }}>
                            <div style={{ color: '#038fde', cursor: 'pointer', marginRight: '15px', textDecorationLine: 'underline' }} onClick={() => this.handleToggle()}>
                                {'Create New'}
                            </div>
                            {/* <div onClick={() => this.sendToAll()} style={{ color: '#038fde', cursor: 'pointer', textDecorationLine: 'underline' }}>
                                {'Send to All'}
                            </div> */}
                        </div>
                        {/* <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <Table columns={columns} dataSource={data} scroll={{ x: 100 }} />
                        </div> */}
                    </Card>
                </div>

                <div style={{ width: '100%', flexBasis: '100%', padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ width: '70%' }} className="gx-card" title={language.notifylogs}>
                        <div style={{ display: 'flex', padding: '20px' }}>
                            <Table columns={columns2} dataSource={data2} scroll={{ x: 500 }} />
                        </div>
                    </Card>
                </div>

                <EmergencyNotifyModal notificationData={(data) => this.setData(data)} sendToAll={(data) => this.sendToAll(data)} modal={this.state.visible} />

            </div>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, getAllUsers })(Notification);
