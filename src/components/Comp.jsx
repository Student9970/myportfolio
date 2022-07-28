import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { introAnimation, titleAnimation } from './animation'
import { useScroll } from './useScroll'


function Comp(props) {
    const [element, controls] = useScroll();

    return (
        <Wrap>

            <Title bcol={props.bgCol} col={props.col} style={{ overflow: "hidden" }}>

                <div ref={element}>

                    <motion.div
                        variants={introAnimation}
                        transition={{ duration: 0.6, type: 'spring' }}
                        animate={controls}
                    >
                        <p>{props.emphasised_text}</p>
                    </motion.div>

                    <motion.div
                        variants={titleAnimation}
                        transition={{ duration: 0.6, type: 'tween' }}
                        animate={controls}
                    >
                        <h1>{props.title}</h1>
                    </motion.div>

                </div>

            </Title>

            <Content>
                {props.content}
            </Content>

        </Wrap>
    )
}

export default Comp

const Wrap = styled.div`
    display: flex;
    background: transparent;
    padding: 0;
    margin: 150px 0;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        margin: 100px 0;
    }
`
const Title = styled.div`
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: ${props => `${props.bcol}`};
    background-position: center;
    background-size: cover;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 75px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${props => `${props.col}`};;
        /* text-shadow: 0 0 100px black; */
        /* text-shadow: 2px 2px 10px #ffffff; */
    }

    p{
        font-style: italic;
        font-weight: lighter;
        font-size: 16px;
        margin-bottom: -20px;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 80%;
        border-radius: 25px;
        margin: 0 auto;
        padding: 50px 0;

        h1{
            font-size: 45px;
        }
        p{
        margin-bottom: -15px;
        }
    }
`
const Content = styled.div`
    width: 50%;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`