import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch } from "react-router-dom";
import { Button, Card, Form, Icon, Input } from "antd";
import './dynamicForm.less'

import { setInitUrl } from "appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "appRedux/actions/Setting";


const FormItem = Form.Item;
let uuid = 0;

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

class DynamicFormComponent extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    add = () => {
        const { name, formItems } = this.props

        var obj
        if (name == 'title') {

            obj = {
                name: 'title',

            }

        }
        else if (name == 'link') {

            obj = {
                name: 'link',

            }

        }
        else if (name == 'points') {

            obj = {
                name: 'points',
            }

        }
        else if (name == 'nestedpoints') {

            obj = {
                name: 'nestedpoints',
            }

        }
        else if(name == 'Prevent') {

            obj = {
                name: 'prevent'
            }
            
        }
        else if(name == 'image') {

            obj = {
                name: 'image'
            }
            
        }
        else {
            obj = {
                name: 'Content'
            }
        }

        formItems(obj)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    render() {
        const { title } = this.props;

        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                {/* {this.props.formItems(formItems)} */}
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
                        <Icon type="plus" /> {title}
                    </Button>
                </FormItem>
                {/* <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem> */}
            </Form>
        )
    }
}

const mapStateToProps = ({ settings, auth }) => {
    const { locale, navStyle, layoutType } = settings;
    const { authUser, initURL } = auth;
    return { locale, navStyle, layoutType, authUser, initURL }
};

const FormComponent = connect(
    mapStateToProps,
    { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange },

)(DynamicFormComponent)

export default Form.create()(FormComponent);
