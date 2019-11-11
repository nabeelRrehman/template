import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";

// import MainApp from "./MainApp";
// import SignIn from "../SignIn";
// import SignUp from "../SignUp";
import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Button, Card, Form, Icon, Input, Modal, message, Checkbox, Row, Col } from "antd";
import EmergencyNotification from "../../components/emergencyNotification";



class EmergencyPush extends Component {
    constructor() {
        super()

        this.state = {
            users: null
        }
    }

    componentWillReceiveProps(props) {
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
                {/* {language.dashboard} */}
                <EmergencyNotification />
                
            </div>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language, allUsers } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language, allUsers }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange })(EmergencyPush);
