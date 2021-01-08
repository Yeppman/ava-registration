import React, { useState } from "react";
import axios from "axios";
import { Input, Form, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { GiSoccerBall } from "react-icons/gi";
import {   Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from './routes'

export default function SignUpForm() {
    return ( 
        <>
            {/* <NavbarTwo /> */}
            <div className="">
                <div className="">
                       <Router>
                           <BaseRouter/>
                     </Router>
                   
                </div>
            </div>
        </>
    );
}
