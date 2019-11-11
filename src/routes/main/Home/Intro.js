import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import { Button, Card, Form, Icon, Input, Modal, message, Checkbox, Row, Col } from "antd";
import IntlMessages from "../../../util/IntlMessages";


class WebIntro extends Component {
    constructor() {
        super()

        this.state = {
        }
    }


    render() {
        const { language } = this.props
        return (
            <div>
                <div style={{ width: '100%', padding: '10px 0px', display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ width: '90%' }} className="gx-card" title={language.welcomeNote}>

                        <div style={{ margin: '13px 0px' }}>
                            <IntlMessages id={language.selectFunc} />
                        </div>

                        <div style={{ margin: '13px 0px' }}>
                            <IntlMessages id={language.supportContact} />
                        </div>

                        <div style={{ margin: '4px 0px' }}>
                            <IntlMessages id={language.epost} />
                            <em style={{ color: '#fe6600', cursor: 'pointer', textDecorationLine: 'underline' }}>
                                {' support@cequred.se'}
                            </em>
                        </div>

                        <div style={{ margin: '4px 0px' }}>
                            <IntlMessages id={language.tel} />
                            <span style={{ color: '#fe6600', cursor: 'pointer', textDecorationLine: 'underline' }}>
                                {' 018 44 44 600'}
                            </span>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language, allUsers } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language, allUsers }
};
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange })(WebIntro);
