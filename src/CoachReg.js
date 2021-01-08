import React, { useState } from "react";
import axios from "axios";
import { Input, Form, Upload, message , Select} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { GiSoccerBall } from "react-icons/gi";

const { Option } = Select;
const { Dragger } = Upload;


const SectionBoxes = () => {
    const [isPlayer, setisPlayer] = useState(false);
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
        fd.append("VideoUpload", null);
        fd.append("Type", Coach);
        fd.append('Nationality', Nationality)
        fd.append("age", Age);

        // headers: {"Access-Control-Allow-Origin": "*"}

        axios.defaults.headers = {
            "Content-Type": "application/json",
        };
        axios.post(endpoint, fd).then((res) => {
            if (res.status === 200) {
                message.success("Registration Successfully");

            } else {
                message.error("Registration Failed ");
            }
            // window.location.replace('https://ava-sigma.vercl.app')
        }).catch((e) => {
            console.log(e)
        })

    }


    return (
        <>
            <div className="container">
                <div className="">
                    <div className="">
                        <p className="generalHeading">
                            Sign Up As a Coach
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

                        <Form.Item rules={[{ required: true }]} name="Phone">
                            <Input size="large" placeholder="Phone Number?" enterButton />
                        </Form.Item>

                        <Form.Item rules={[{ required: true }]} name="Nationality">
                            <Input size="large" placeholder="Nationality?" enterButton />
                        </Form.Item>

                        <Form.Item name="Gender">
                            <Select
                                placeholder="Your Gender"
                                size="large" >
                                <Option value="jack">Male</Option>
                                <Option value="lucy">Female</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item rules={[{ required: true }]} name="Age">
                            <Input size="large" placeholder="Age?" enterButton />
                        </Form.Item>

                        <div>
                            <button
                                type="submit"
                                htmltype="submit"
                                className="registerbtn"
                            >
                                Sign Up
                            </button>
                        </div>


                    </Form>
                </div>
            </div>

        </>
    );
};

export default function CoachRegistration() { 
    return (
        <>
            {/* <NavbarTwo /> */}
            <div className="playSignUp-container">
                <div className="playSignUp-form-fields">
                    <SectionBoxes />
                </div>
            </div>
        </>
    );
}
