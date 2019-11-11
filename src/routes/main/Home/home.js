import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";

// import MainApp from "./MainApp";
// import SignIn from "../SignIn";
// import SignUp from "../SignUp";
import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType, getAllUsers } from "appRedux/actions/Setting";
import { Button, Card, Form, Icon, Input, Modal, message, Checkbox, Row, Col } from "antd";
import Notification from "../components/notification";
import UserInfo from "../components/userInfo";
import Intro from "./Intro";


const RestrictedRoute = ({ component: Component, authUser, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }}
                />}
    />;


class Home extends Component {
    constructor() {
        super()

        this.state = {
            users: null
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
        console.log(props.allUsers, 'users here')
        if (props.allUsers) {
            this.setState({
                users: props.allUsers
            })
        }
    }

    render() {
        const { users } = this.state
        const { match, location, language, navStyle, locale, authUser, initURL } = this.props;

        if (location.pathname === '/') {
            if (authUser === null) {
                return (<Redirect to={'/signin'} />);
            } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
                return (<Redirect to={'/main/dashboard'} />);
            } else {
                return (<Redirect to={initURL} />);
            }
        }
        return (
            <div>
                {
                    <UserInfo allUsers={users} />
                }
                {
                    <Intro />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language, allUsers } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language, allUsers }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, getAllUsers })(Home);
