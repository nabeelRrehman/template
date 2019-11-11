import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Col, Row } from "antd";
import IconWithTextCard from "components/Metrics/IconWithTextCard";
import { onLayoutTypeChange, onNavStyleChange, setThemeType, getAllNotification } from "appRedux/actions/Setting";
import { setInitUrl } from "appRedux/actions/Auth";
import { Card, Table } from "antd";
import Notification from "../../components/notification";


class AutomaticPush extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    RequestApi = async (url) => {

        return await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            return res.json()
        }).then((result) => {
            return result
        })
    }

    componentDidMount() {

        this.RequestApi('https://cequred.herokuapp.com/notification/get').then((users) => {
            const { getAllNotification } = this.props
            getAllNotification(users)
        })

    }




    render() {
        return (
            <div>
                {
                    <Notification />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language, allUsers, notification } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language, allUsers, notification }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, getAllNotification })(AutomaticPush);
