import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion'
import { contactAnimation } from './animation'
import { useScroll } from './useScroll'

const Contact = () => {

    const focusIn = (element_class) => {
        document.getElementsByClassName(element_class)[0].style.borderBottom = '2px solid #ff0000';
    }

    const focusOut = (element_class) => {
        document.getElementsByClassName(element_class)[0].style.borderBottom = '1px solid darkred';
    }

    const [element, controls] = useScroll();

    return (
        <>
            <Container ref={element} id="contact">

                <Socials
                    variants={contactAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "spring"
                    }}
                >

                    <h1>Contact Information</h1>
                    <p>Fill up the form and my Team will get back to you within 24 hours</p>

                    <div className="info">
                        <PhoneIcon className='small_icons' />
                        <a href="tel:+919021599825">+91 9021599825</a>
                    </div>

                    <div className="info">
                        <EmailIcon className='small_icons' />
                        <a href="mailto:student9970@gmail.com">student9970@gmail.com</a>
                    </div>

                    <div className="info">
                        <LocationOnIcon className='small_icons' />
                        <a href="https://goo.gl/maps/kLEdodshrR8NYAFy6" target="_blank">Bhiwandi, Maharashtra</a>
                    </div>

                    <div className="socialMedia">
                        <a href="https://twitter.com/dreaminstudent" target="_blank" >
                            <TwitterIcon />
                        </a>

                        <a href="https://www.instagram.com/ansari_usamaa/" target="_blank" >
                            <InstagramIcon />
                        </a>

                        <a href="https://www.linkedin.com/in/usama-ansari-13b06421b/" target="_blank" >
                            <LinkedInIcon />
                        </a>
                    </div>

                    <div className="circle1"></div>
                    <div className="circle2"></div>

                </Socials>

                <Form autocomplete="off" action='https://formsubmit.co/au9970@gmail.com' method='POST'>

                    <div className="contact_info">

                        <div className="form_element first_name" style={{ marginTop: 0, paddingTop: 0 }}>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name='FirstName' onFocus={() => {
                                focusIn('first_name');
                            }} onBlur={() => {
                                focusOut('first_name');
                            }} />
                        </div>

                        <div className="form_element last_name" style={{ marginTop: 0, paddingTop: 0 }}>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name='LastName' onFocus={() => {
                                focusIn('last_name');
                            }} onBlur={() => {
                                focusOut('last_name');
                            }} />
                        </div>

                    </div>

                    <div className="contact_info">

                        <div className="form_element mail">
                            <label htmlFor="mail">Mail</label>
                            <input type="text" id="mail" name='Mail' onFocus={() => {
                                focusIn('mail');
                            }} onBlur={() => {
                                focusOut('mail');
                            }} />
                        </div>

                        <div className="form_element phone">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" name='Phone' onFocus={() => {
                                focusIn('phone');
                            }} onBlur={() => {
                                focusOut('phone');
                            }} />
                        </div>

                    </div>

                    <div className="form_element services">
                        <label htmlFor="name">What type of service do you need?</label>

                        <div className='radioButtons'>
                            <div className='btn'>
                                <input type="radio" id="web_design" name="service" value="web_design" />
                                <label for="web_design">Web Design</label>
                            </div>

                            <div className='btn'>
                                <input type="radio" id="web_development" name="service" value="web_development" />
                                <label for="web_development">Web Development</label>
                            </div>

                            <div className='btn'>
                                <input type="radio" id="web_development" name="service" value="web_development" />
                                <label for="web_development">Motion Graphics</label>
                            </div>

                            <div className='btn'>
                                <input type="radio" id="other" name="service" value="other" />
                                <label for="other">Other</label>
                            </div>
                        </div>

                    </div>

                    <div className="form_element message" style={{ width: "100%" }} >
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="3" onFocus={() => {
                            focusIn('message');
                        }} onBlur={() => {
                            focusOut('message');
                        }}></textarea>
                    </div>

                    <div id='submit'>
                        <input type="submit" value="Submit" />
                    </div>

                </Form>

            </Container>
        </>
    )
}

export default Contact

const Container = styled.div`
    /* background: linear-gradient(to right, #0f2027, #203a43, #2c5364); */
    background: #5454541f;
    margin: 150px auto;
    width: 80%;
    border-radius: 30px;
    padding: 20px;
    display: flex;

    @media screen and (max-width: 480px){
        flex-direction: column;
        background: transparent;
        width: 100%;
    }
`
const Socials = styled(motion.div)`
    width: 35%;
    background-color: #4444a4;
    border-radius: 30px;
    padding: 50px;
    position: relative;
    overflow: hidden;

    h1{
        padding: 0 0 5px 0;
        font-size: 30px;
    }

    p{
        padding: 0 0 5px 0;
        margin: 15px 0 80px 0;
        font-size: 20px;
        font-weight: lighter;
    }

    .info{
        /* background-color: yellowgreen; */
        margin: 50px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: max-content;

        .small_icons{
            margin-right: 20px;
            font-size: 25px;
            color: #ff97a8;
        }

        a{
            text-decoration: none;
            color: #fff;
            font-size: 20px;
        }
    }

    .socialMedia{
        /* background-color: black; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 30px;
        width: 35%;
        z-index: 10;
        
        a{
            color: #fff;
            padding: 10px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        a:hover{
            background-color: #ff97a8;
            transition: 1s;
        }
    }

    .circle1{
        position: absolute;
        height: 500px;
        width: 500px;
        background-color: #ff97a8;
        border-radius: 50%;
        bottom: -220px;
        right: -250px;
    }

    .circle2{
        position: absolute;
        height: 180px;
        width: 180px;
        background-color: #da5fff69;
        border-radius: 50%;
        bottom: 70px;
        right: 120px;
    }

    @media screen and (max-width: 480px){
        width: 100%;

        .circle1{
            z-index: -1;
        }
        
        .circle2{
            z-index: -1;
        }
    }
`

const Form = styled.form`
    width: 65%;
    padding: 0 50px;
    padding-top: 50px;

    .form_element{
        border-bottom: 1px solid darkred;
        width: 45%;
        padding: 20px 0;
        margin: 15px 0;
        display: flex;
        flex-direction: column;

        label{
            font-size: 20px;
            margin: 8px 0;
            color: grey;
        }

        input{
            padding: 5px 0;
            background: transparent;
            border: none;
            outline: none;
            color: #fff;
            font-size: 25px;
        }
    }

    .contact_info{
        display: flex;
        justify-content: space-between;
    }

    .services{
        border: none;
        width: 100%;
    }

    .radioButtons{
        display: flex;
        justify-content: space-between;
        width: 100%;

        label{
            font-size: 20px !important;
        }

        input{
            margin: 0 8px 0 0;
            border: solid 1px red;
            border-radius: 50px;
            margin: 0 8px 0 0;
            height: 20px;
            width: 20px;
            vertical-align: middle;
            width: 20px;
            height: 20px;   
            border-radius: 10px;
            background: none;
            border: 0;
            box-shadow: inset 0 0 0 1px #9F9F9F;
            box-shadow: inset 0 0 0 1.5px #9F9F9F;
            appearance: none;
            padding: 0;
            transition: box-shadow 150ms cubic-bezier(.95,.15,.5,1.25);
            /* pointer-events: none; */
  
            &:focus{
                outline: none;
            }
    
            &:checked{
                box-shadow: inset 0 0 0 6px red;
        }
    }

        input:checked + label{
            color: #fff;
        }

        label{
            font-size: 22px;
        }
    }

    .btn{
        display: flex;
        align-items: center;
        padding: 0px 10px;
        border-radius: 50px;
    }

    textarea{
        /* border-bottom: 1px solid darkred; */
        background: transparent;
        outline: none;
        border: none;
        width: 100%;
        padding: 20px 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        resize: none;
        color: #fff;
        font-size: 20px;

        ::-webkit-scrollbar {
            background: transparent;
            width: 3px;
        }       

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: red;
            border-radius: 50px;
        }

    }

    #submit{
        /* background-color: red; */
        padding: 0;
        display: flex;
        justify-content: flex-end;

        input{
            margin: 0;
            padding: 15px 35px;
            border: none;
            outline: none;
            border-radius: 50px;
            color: grey;
            background-color: black;

            &:hover{
                color: #fff;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 480px){
        width: 100%;
        padding: 0;
        margin: 20px 0;

        .contact_info{
            display: flex;
            flex-direction: column;
            /* background-color: red; */
        }

        .form_element{
            width: 100%;
        }

        .radioButtons{
            flex-direction: column;
            padding: 0;
            margin: 0;
        }

        #submit{
            input{
                background-color: #e6e6e6;
                color: #000;
            }
        }
    }
`