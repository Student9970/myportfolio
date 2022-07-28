import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { introAnimation } from './animation';

function Intro() {

    return (
        <Container>

            <ContentContainer>
                <IntroText>

                    <motion.div
                        variants={introAnimation}
                        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
                    >
                        <h1>Hi, I'm Usama</h1>
                    </motion.div>

                    <motion.div
                        variants={introAnimation}
                        transition={{ delay: 0.5, duration: 0.6, type: 'tween' }}
                    >
                        <p>I am a MERN Stack Developer</p>
                    </motion.div>

                </IntroText>
            </ContentContainer>
        </Container >
    )
}

export default Intro

const ContentContainer = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    margin: 0;
    /* height: 100vh; */
    background-color: rgba(0,0,0,0.9);
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

const IntroText = styled.div`
    /* width: 50%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: coral; */
    /* border-right: 0.5px dashed black; */

    h1{
        /* color: #fff; */
        background: linear-gradient(to right, #3c93df, #3d61a3, #932ac0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 100;
        font-size: 80px;
        text-align: center;
    }
    
    p{
        color: #fff;
        font-weight: lighter;
        font-size: x-large;
        text-align: center;
    }
    
    @media screen and (max-width: 480px) {
        h1{
            font-size: 50px;
        }
        p{
            font-size: 20px;
        }
    }
`;

const ImgContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: skyblue; */
`;

const Image = styled.img`
    width: 25vw;
    height: 25vw;
    border-radius: 500px;
`
