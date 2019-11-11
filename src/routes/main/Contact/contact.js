import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Button, Card, Form, Icon, Input, Modal, message } from "antd";
import './contact.less'
import { getContentData } from '../../../appRedux/actions/Setting'

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import DynamicForm from "../../../components/DynamicForm/dynamicForm";
import { invoke } from "q";
import Page from "../pages/page";


class Contact extends Component {
    constructor() {
        super()

        this.state = {
            keys: [],
            visible: false,

        }
    }

    getContent(locale) {

        const { language } = this.props

        let contact = language.contact

        fetch(`https://cequred.herokuapp.com/data/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        }).then((response) => {
            response.json().then((result) => {
                if (result) {
                    const { getContentData } = this.props

                    getContentData(result.languages[locale.locale])
                }
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
    }

    componentWillMount() {
        const { language, locale } = this.props
        console.log(language, 'language data herre')

        this.setState({
            language,
            title: language.contact,
            data: {
                title: true,
                content: true,
                // checkList: true,
                links: true,
            }
        })

        this.getContent(locale)

    }

    componentWillReceiveProps(props) {
        if (props.language) {
            this.setState({
                language: props.language,
                title: props.language.contact,
                data: {
                    title: true,
                    content: true,
                    // checkList: true,
                    links: true,
                }
            })
        }

        this.getContent(props.locale)

    }

    getData(data) {

        const { locale, language } = this.props

        let contact = language.contact

        fetch(`https://cequred.herokuapp.com/data/add/${contact}`, {
            method: 'POST',
            body: JSON.stringify({
                language: locale.locale,
                data,
            }),
            headers: {
                'Content-Type': 'application/json',
            }

        }).then((response) => {
            response.json().then((result) => {
                console.log(result, 'result here')

            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
    }


    render() {
        const { match, location, layoutType, navStyle, locale, authUser, initURL } = this.props;
        const { keys, render, language, title, data } = this.state
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
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Page
                    title={title}
                    data={data}
                    back={true}
                    lists={true}
                    name={language['contact']}
                    getData={(data) => this.getData(data)}
                />
            </div>
        )
    }
}




const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType, language } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL, language }
};

const FormComponent = connect(
    mapStateToProps,
    { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, getContentData },

)(Contact)

export default Form.create()(FormComponent);
