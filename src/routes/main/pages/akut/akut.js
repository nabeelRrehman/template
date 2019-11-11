import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Button, Card, Form, Icon, Input, Modal, message } from "antd";
import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";
import './akut.less'
import { getContentData } from '../../../../appRedux/actions/Setting'

import prevent from '../assets/tabTwo/firered.png'
import person from '../assets/tabTwo/firstaidred.png'
import emegencyill from '../assets/tabTwo/emegencyillred.png'
import trafficaccident from '../assets/tabTwo/trafficaccidentred.png'
import burglary from '../assets/tabTwo/burglaryred.png'
import theft from '../assets/tabTwo/theftred.png'
import violance from '../assets/tabTwo/violancered.png'
import robbery from '../assets/tabTwo/robberyred.png'
import computer from '../assets/tabTwo/computerred.png'
import waterdamage from '../assets/tabTwo/waterdamagered.png'
import electricaccident from '../assets/tabTwo/electricaccidentred.png'
import drowning from '../assets/tabTwo/drowningred.png'
import lostperson from '../assets/tabTwo/lostpersonred.png'
import naturaldisasters from '../assets/tabTwo/naturaldisastersred.png'
import terrorism from '../assets/tabTwo/terrorismred.png'
import garbagesorting from '../assets/tabTwo/garbagesortingred.png'


import Page from '../page'


class Akut extends Component {
    constructor() {
        super()

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
                }
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
            // content: true,
            checkList: true,
            links: true,
        }

        this.setState({
            page: true,
            title: item.name,
            data: obj
        })
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
                title: language['akut'],
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
                console.log(result, 'result here')

            })
        }).catch((err) => {
            console.log(err, 'err here')

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

    render() {
        const { lists, page, title, data } = this.state
        const { match, location, language, layoutType, navStyle, locale, authUser, initURL } = this.props;
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
                            data={data}
                            lists={true}
                            name={language['akut']}
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

)(Akut)

export default Form.create()(FormComponent);
