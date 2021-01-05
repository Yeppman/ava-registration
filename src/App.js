import React, { useState, useEffect } from "react";
import { GiSoccerBall } from "react-icons/gi";
import axios from "axios";
// import NavbarTwo from "../components/navbar-two";
import { Input, Form, Select, Upload, Tabs, message } from "antd";
const { TabPane } = Tabs;

import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const { Option } = Select;

const SectionBoxes = () => {
  const [isPlayer, setisPlayer] = useState(false);
  const [registeringCategory, setRegisteringCategory] = useState("Player");
  const [videoFile ,setVideo] = useState([])
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
    const host = 'http://127.0.0.1:8000'
    const endpoint = host + `/core/reg-upload/`;

    const fName =  values['fName']
    const lName =  values['lName']
    const email =  values['Email']
    const Position = values['Position']
    const Phone = values['Phone']

    let videoUpload = videoFile
    let Age = 0;

    if (registeringCategory == Coach || registeringCategory == Scout) {
    } else {
      // videoUpload = e.target.elements.playerVideo.files;
      // Age = e.target.elements.age.value;
    }
    const Category = registeringCategory;

    console.log(fName, lName, email, Phone, videoUpload, Category);

    let fd = new FormData();
    fd.append("fName", fName);
    fd.append("lName", lName);
    fd.append("email", email); 
    fd.append("phone", Phone);
    fd.append('Position',Position)
    fd.append("videoUpload", videoUpload);
    fd.append("category", Category);
    fd.append("age", Age);

    axios.post(endpoint, fd).then((res) => {
      if (res.status == 200) {
        message.success("Registration Successfully");
      } else {
        message.error("Registration Failed ");
      }
    });
  };

  // Video
  
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    console.log(info.file)
    if (status !== 'uploading') {
      console.log('the file',info.file);
      setVideo(info.fileList[0].originFileObj)
      console.log('file list' ,info.fileList[0].originFileObj )
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
                      Sign Up Today 
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
                  <Input size="large" placeholder="Your Email?" enterButton />
                </Form.Item>

                <Form.Item rules={[{ required: true }]} name="Nationality">
                  <Input size="large" placeholder="Nationality?" enterButton />
                </Form.Item>

                <Form.Item rules={[{ required: true }]} name="Position">
                  <Input
                    size="large"
                    placeholder="Playing Position"
                    enterButton
                  />
                </Form.Item>
                
                {/* <Form.Item
                    rules={[{ required: true }]}
                    name="State"
                    hasFeedback
                  >
                    <Select size="large" placeholder="Select Your Role">
                    <Option
                    onSelect={()=>{userIsPlayer()}}
                    value='Player'>
                      Player
                    </Option>
                    <Option
                      onSelect={() => {
                        dontUserPlayer(Coach);
                      }}
                    value='Coach'>
                      Coach
                    </Option>
                    <Option
                    onSelect={() => {
                      dontUserPlayer(Scout);
                    }}
                    value='Scout'>
                      Scout
                    </Option>
                      
                    </Select>
                  </Form.Item> */}

                <Form.Item>
                  <div className="reg-category-container">
                    <h3 className="reg-category-heading">
                      
                      </h3>
                    <ul className="reg-category-list">
                      <li onClick={userIsPlayer} className="reg-category-item">
                        <div className="reg-category-icon">
                          <GiSoccerBall />
                        </div>
                        <p className="reg-category-text">Player</p>
                      </li>

                      <li
                        onClick={() => {
                          dontUserPlayer(Coach);
                        }}
                        className="reg-category-item"
                      >
                        <div className="reg-category-icon">
                          <GiSoccerBall />
                        </div>
                        <p className="reg-category-text">Scout</p>
                      </li>

                      <li
                        onClick={() => {
                          dontUserPlayer(Scout);
                        }}
                        className="reg-category-item"
                      >
                        <div className="reg-category-icon">
                          <GiSoccerBall />
                        </div>
                        <p className="reg-category-text">Coach</p>
                        
                      </li>
                    </ul>
                  </div>

                  {isPlayer ? (
                    <>
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </Dragger>
                    ]
                 
                    </>
                  ) : (
                    <></>
                  )}
                  <button
                    type="submit"
                    htmltype="submit"
                    className="registerbtn"
                  >
                    Sign Up
                  </button>
                </Form.Item>
              </Form>
            </div>
      </div>
     
    </>
  );
};

export default function signUpForm() {
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
