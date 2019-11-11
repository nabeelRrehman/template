import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Col, Row } from "antd";
import IconWithTextCard from "components/Metrics/IconWithTextCard";

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Card, Table } from "antd";


class UserInfo extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        const { allUsers, language } = this.props
        const totalUsers = allUsers && allUsers.length ? allUsers.length : '0'
        return (
            <div>
                <div style={{ width: '95%', padding: '10px 0px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
                        <IconWithTextCard icon="user" iconColor="geekblue" title={totalUsers} subTitle={language.users} />
                    </Col>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange })(UserInfo);
