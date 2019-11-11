import React from "react";
import { Avatar } from "antd";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import { Button, Card, Form, Icon, Input, Spin, message, Checkbox, Row, Col } from "antd";
// import cloudinary from 'cloudinary-core';
import axios from 'axios'
import './pageSortable.css'


const FormItem = Form.Item;
const { TextArea } = Input


var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dtkgel6hd/image/upload';
var CLOUDINARY_UPLOAD_PRESET = 'iwywbsrs'

// var cl = new cloudinary.Cloudinary({cloud_name: "caz1twur", secure: true});


const DragHandle = SortableHandle(() =>
    <span className="gx-draggable-icon gx-pt-2">
        <i className="icon icon-expand" style={{ fontSize: 20 }} />
    </span>);

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
};

class PageCell extends React.Component {

    onDeleteContact = (contact) => {
        this.setState({ addContactState: false });
        this.props.onDeleteContact(contact);
    };

    constructor() {
        super();
        this.state = {
            // addContactState: false,
        }
    }

    _setChange(value, k, index) {
        const { handleChange } = this.props

        handleChange(value, k, index)

    }

    remove(key, index) {
        const { removeKey } = this.props

        removeKey(key, index)
    }

    addImage(file, k, index) {
        this.setState({ loader: true })
        var imageFile = document.getElementsByName('myfile')[0].files[0];

        var formData = new FormData
        formData.append('file', imageFile)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            // headers: {
            //     'Content_Type': 'application/x-www-form-urlencoded'
            // },
            data: formData
        }).then((res) => {
            console.log(res, 'response here')
            if (res.status == 200) {
                this.setState({ loader: false })
                if (res.data) {
                    const { handleChange } = this.props
                    message.success('Image successfully Uploaded')
                    handleChange(res.data.secure_url, k, index, 'imageUrl')
                }
            }
        }).catch((err) => {
            console.log(err, 'error uploading')
            this.setState({ loader: false })
        })


    }

    render() {
        const { keys, index, ItemIndex } = this.props;
        const k = keys;
        const { loader } = this.state


        return (

            <div style={{ display: 'flex', width: '100%' }} >
                <div style={{ width: '5%', paddingTop: '10px' }}>
                    <DragHandle />
                </div>
                <div style={{ width: '95%' }}>
                    <FormItem
                        {...(formItemLayout)}
                        label={k.name == 'title' ? 'Title' : k.name == 'link' ? 'Link' : k.name == 'points' ? 'Check Lists' : k.name == 'nestedpoints' ? 'Nested List' : k.name == 'image' ? 'Image/Link' : 'Content'}
                        required={false}
                        key={k}
                        style={{ marginLeft: '3px' }}
                    >
                        {
                            (
                                k.name == 'title' ?
                                    <Input value={k.value} onChange={(e) => this._setChange(e.target.value, k, ItemIndex)} placeholder="Add Title..." style={{ width: '80%' }} />
                                    :
                                    k.name == 'link'
                                        ?
                                        <Input value={k.value} onChange={(e) => this._setChange(e.target.value, k, ItemIndex)} placeholder="Add Link..." style={{ width: '80%' }} />
                                        :
                                        k.name == 'points' ?
                                            <Input value={k.value} onChange={(e) => this._setChange(e.target.value, k, ItemIndex)} placeholder="Add Check Lists / Points ..." style={{ width: '80%' }} />
                                            :
                                            k.name == 'nestedpoints' ?
                                                <Input value={k.value} onChange={(e) => this._setChange(e.target.value, k, ItemIndex)} placeholder="Add Nested Points ..." style={{ width: '70%' }} />
                                                :
                                                k.name == 'image' ?
                                                    <>
                                                        <div class="upload-btn-wrapper">
                                                            <button class="btn">
                                                                <Icon style={{ marginRight: '10px' }} type="upload" />
                                                                {'Upload a Image'}</button>
                                                            <input type="file" name="myfile" onChange={(file) => this.addImage(file, k, ItemIndex)} />
                                                            {
                                                                loader &&
                                                                <Spin size='small' />
                                                            }
                                                        </div>

                                                        {/* <input type='file' style={{ backgroundColor: 'white', padding: '2px' }} name='file' onChange={(file) => this.addImage(file, k, ItemIndex)} /> */}
                                                        <Input value={k.value} onChange={(e) => this._setChange(e.target.value, k, ItemIndex)} placeholder="Add Link..." style={{ width: '80%', marginRight: '2px' }} />
                                                    </>
                                                    :
                                                    <TextArea value={k.value} onChange={(e) => this._setChange(e.target.value, k, ItemIndex)} rows={4} placeholder="Add Content..." style={{ width: '80%' }} />
                            )
                        }
                        <span style={{ marginLeft: '5px' }}>
                            <Icon
                                className="dynamic-delete-button"
                                type="minus-circle-o"
                                // disabled={keys.length === 1}
                                onClick={() => this.remove(k, ItemIndex)}
                            />
                        </span>
                    </FormItem>
                </div>
            </div>

        )
    }
}

export default SortableElement(PageCell);
