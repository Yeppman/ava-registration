import React, { useState } from "react";
import axios from "axios";


import Footer from './section/footer'
import Navbar from './section/Navbar'

import { Input, Form, Upload, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { GiSoccerBall } from "react-icons/gi";
import { countriesArr } from './countries'

const { Option } = Select;
const { Dragger } = Upload;


const SectionBoxes = () => {
    const [isPlayer, setisPlayer] = useState(true);
    const [registeringCategory, setRegisteringCategory] = useState("Player");
    const [videoFile, setVideo] = useState([])
    const Coach = "Coach";
    const Scout = "Scout";

    function userIsPlayer() {
        setisPlayer(true);
        setRegisteringCategory("Player");
        console.log(isPlayer)
    }

    function dontUserPlayer(Val) {
        setisPlayer(false);
        setRegisteringCategory(Val);
        console.log(Val);
    }

    const sendData = async (values) => {

        // const host = "https://avalanche-backend.herokuapp.com";
        // const host = 'http://127.0.0.1:5000'
        const host = 'https://avalanche-node.herokuapp.com'
        const endpoint = host + `/core/reg-user/`;

        const fName = values['fName']
        const lName = values['lName']
        const email = values['Email']
        const Position = values['Position']
        const Nationality = values['Nationality']
        const Phone = values['Phone']

        let VideoUpload = videoFile
        let Age = 0;

        if (registeringCategory === Coach || registeringCategory === Scout) {
        } else {
            // VideoUpload = e.target.elements.playerVideo.files;
            // Age = e.target.elements.age.value;
        }
        const Category = registeringCategory;

        console.log(fName, lName, email, Phone, VideoUpload, Category);

        let fd = new FormData();
        fd.append("fName", fName);
        fd.append("lName", lName);
        fd.append("Email", email);
        fd.append("Phone", Phone);
        fd.append('Position', Position)
        fd.append("VideoUpload", VideoUpload);
        fd.append("Type", 'Player');
        fd.append('Nationality', Nationality)
        fd.append("age", Age);

        // headers: {"Access-Control-Allow-Origin": "*"}

        axios.defaults.headers = {
            "Content-Type": "application/json",
        };
        axios.post(endpoint, fd).then((res) => {
            if (res.status === 200) {
                // message.success("Registration Successfully");
                window.location.replace('/success')
            } else {
                message.error("Registration Failed ");
            }
            // window.location.replace('https://ava-sigma.vercl.app')
        }).catch((e) => {
            console.log(e)
        })

    }

    // Video

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://avalanche-node.herokuapp.com',
        onChange(info) {
            const { status } = info.file;
            console.log(info.file)
            if (status !== 'uploading') {
                console.log('the file', info.file);
                setVideo(info.fileList[0].originFileObj)
                console.log('file list', info.fileList[0].originFileObj)
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                // message.error(`${info.file.name} file upload failed.`);
            }
        },
    };



    return (
        <>
     
            <div className="container">
                <div className="">
                    <div className="">
                        <p className="generalHeading">
                            Sign Up As Player
                      </p>
                    </div>
                    <Form
                        className=""
                        onFinish={sendData}
                    >
                        <Form.Item rules={[{ required: true }]} name="fName">
                            <Input
                                size="large"
                                placeholder="Your First Name?"
                                enterButton
                            />
                        </Form.Item>
                        <Form.Item rules={[{ required: true }]} name="lName">
                            <Input
                                size="large"
                                placeholder="Your Last Name?"
                                enterButton
                            />
                        </Form.Item>

                        <Form.Item rules={[{ required: true }]} name="Email">
                            <Input size="large" placeholder="Your Email?" enterButton />
                        </Form.Item>
{/* 
                        <Form.Item rules={[{ required: true }]} name="Phone">
                            <Input size="large" placeholder="Phone Number?" enterButton />
                        </Form.Item>

                        <Form.Item rules={[{ required: true }]} name="Gender">
                            <Input size="large" placeholder="Gender (Please Specify) " enterButton />
                        </Form.Item> */}


                        {/* <Form.Item
                            rules={[{ required: true }]} name="Nationality"
                        >
                            <Select 
                            placeholder="Nationality"
                            size="large">
                                {
                                    countriesArr.map(i => (
                                        <>
                                            <Option value={i}> {i} </Option>
                                        </>
                                    ))
                                }
                            </Select>
                        </Form.Item> */}


{/* 
                        <Form.Item rules={[{ required: true }]} name="Age">
                            <Input size="large" placeholder="Age?" enterButton />
                        </Form.Item>


                        <Form.Item rules={[{ required: true }]} name="Position">
                            <Input
                                size="large"
                                placeholder="Playing Position"

                            />
                        </Form.Item> */}

                            <p 
                            style={{fontSize:14}}
                            className="">
                                Please upload a video 
                            of you doing something interesting
                               with a ball (Video should not be more than 5MB)
                            
                            </p>

                        <Form.Item
                        >
                            <div >
                                {isPlayer ? (
                                    <>
                                        <Dragger
                                        style={{marginTop:15}}
                                        {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">
                                                Click or drag file to this area to upload
                        </p>
                                            <p className="ant-upload-hint">
                                            
                        </p>
                                        </Dragger>


                                    </>
                                ) : (
                                        <></>
                                    )}
                            </div>
                        </Form.Item>


                        <div>
                            <button
                                type="submit"
                                htmltype="submit"
                                className="registerbtn"
                            >
                                Sign  Up
                            </button>
                        </div>


                    </Form>
                </div>
            </div>

        </>
    );
};

export default function PlayerRegistration() {
    return (
        <>

                <Navbar/>
            {/* <NavbarTwo /> */}
            <div className="playSignUp-container">
                <div className="playSignUp-form-fields">
                    <SectionBoxes />
                </div>
            </div>
            <Footer/>
        </>
    );
}
