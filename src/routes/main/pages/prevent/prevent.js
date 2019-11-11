import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Button, Card, Form, Icon, Input, Modal, message } from "antd";
import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import './prevent.less'
import { getContentData } from '../../../../appRedux/actions/Setting'

import prevent from '../assets/tabOne/fire.png'
import person from '../assets/tabOne/firstaid.png'
import emegencyill from '../assets/tabOne/emegencyill.png'
import trafficaccident from '../assets/tabOne/trafficaccident.png'
import burglary from '../assets/tabOne/burglary.png'
import theft from '../assets/tabOne/theft.png'
import violance from '../assets/tabOne/violance.png'
import robbery from '../assets/tabOne/robbery.png'
import computer from '../assets/tabOne/computer.png'
import waterdamage from '../assets/tabOne/waterdamage.png'
import electricaccident from '../assets/tabOne/electricaccident.png'
import drowning from '../assets/tabOne/drowning.png'
import lostperson from '../assets/tabOne/lostperson.png'
import naturaldisasters from '../assets/tabOne/naturaldisasters.png'
import terrorism from '../assets/tabOne/terrorism.png'
import garbagesorting from '../assets/tabOne/garbagesorting.png'
import worksafety from '../assets/tabOne/worksafety.png'
import travelsecurity from '../assets/tabOne/travelsecurity.png'
import crisispreparing from '../assets/tabOne/crisispreparing.png'
import seasons from '../assets/tabOne/seasons.png'

import Page from '../page'

class Prevent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: false
        }
    }

    setLanguage(language) {
        this.setState({
            lists: [
                {
                    name: language.prevent,
                    image: prevent,
                },
                {
                    name: language.person,
                    image: person,
                },
                {
                    name: language.emegencyill,
                    image: emegencyill,
                },
                {
                    name: language.trafficaccident,
                    image: trafficaccident,
                },
                {
                    name: language.burglary,
                    image: burglary
                },
                {
                    name: language.theft,
                    image: theft
                },
                {
                    name: language.violance,
                    image: violance
                },
                {
                    name: language.robbery,
                    image: robbery
                },
                {
                    name: language.computer,
                    image: computer
                },
                {
                    name: language.waterdamage,
                    image: waterdamage
                },
                {
                    name: language.electricaccident,
                    image: electricaccident
                },
                {
                    name: language.drowning,
                    image: drowning
                },
                {
                    name: language.lostperson,
                    image: lostperson
                },
                {
                    name: language.naturaldisasters,
                    image: naturaldisasters
                },
                {
                    name: language.terrorism,
                    image: terrorism
                },
                {
                    name: language.garbagesorting,
                    image: garbagesorting
                },
                {
                    name: language.worksafety,
                    image: worksafety
                },
                {
                    name: language.travelsecurity,
                    image: travelsecurity
                },
                {
                    name: language.crisispreparing,
                    image: crisispreparing
                },
                {
                    name: language.seasons,
                    image: seasons
                },
            ],
        })
    }

    getContent(locale) {


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
                console.log(result.languages[locale.locale], 'get language data here')
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
    }

    componentDidMount() {
        const { language, locale } = this.props

        this.setLanguage(language)

        this.getContent(locale)
    }

    componentWillReceiveProps(props) {
        if (props.language) {

            let language = props.language

            this.setLanguage(language)
            this.getContent(props.locale)

        }
    }

    _cardAction(item, index) {

        let obj = {
            title: true,
            content: true,
            checkList: true,
            links: true,
            image: true
        }

        this.setState({
            page: true,
            title: item.name,
            data: obj
        })
    }

    _renderCards(item, index) {
        return (
            <div onClick={() => this._cardAction(item, index)} key={index} className={'card'}>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    {item.name}
                </div>
            </div>
        )
    }

    goBack() {
        this.setState({
            page: false
        })
    }

    getData(content) {

        const { locale, language } = this.props
        const { title } = this.state

        fetch('https://cequred.herokuapp.com/data/add', {
            method: 'POST',
            body: JSON.stringify({
                language: locale.locale,
                title: language['forebygga'],
                name: title,
                data: {
                    content
                }
            }),
            headers: {
                'Content-Type': 'application/json',
            }

        }).then((response) => {
            response.json().then((result) => {

                console.log(result, 'data here')
            })
        }).catch((err) => {
            console.log(err, 'err here')

        })
    }

    render() {
        const { lists, page, title, data } = this.state
        const { language, location, authUser, initURL } = this.props;
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
                {
                    !page ?
                        < div className={'main-card'}>
                            {
                                lists &&
                                lists.map((items, index) => {
                                    return (
                                        this._renderCards(items, index)
                                    )
                                })
                            }
                        </div>
                        :
                        <Page
                            title={title}
                            name={language['forebygga']}
                            data={data}
                            getData={(data) => this.getData(data)}
                            goBack={() => this.goBack()}
                        />
                }
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

)(Prevent)

export default Form.create()(FormComponent);
