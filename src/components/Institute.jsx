import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useScroll } from './useScroll'
import { jTitleAnimation, jParaAnimation, iconn } from './animation'

function Institute(props) {

    const [element, controls] = useScroll();


    return (

        <Container ref={element}>

            <div className="texts">

                <motion.div
                    variants={jTitleAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "tween"
                    }}
                >
                    <h2 className='title'>{props.title}</h2>
                </motion.div>

                <motion.div
                    variants={jParaAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.8,
                        duration: 0.3
                    }}
                >
                    <p className='institution'>{props.institution}</p>
                    <p className='tenure'>{props.tenure}</p>
                    <p className='result'>{props.result}</p>
                </motion.div>

            </div>

            <motion.div className="icon"
                variants={iconn}
                animate={controls}
                transition={{
                    delay: 0.3,
                    duration: 0.5
                }}
            >
                {props.icon}
            </motion.div>

        </Container>
    )
}

export default Institute

const Container = styled.div`
    /* background: rgba(20, 20, 20, 1); */
    border: solid 1px skyblue;
    color: #fff;
    border-radius: 50px;
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;

    .texts{
        width: 70%;
        padding: 40px;
    }
    
    .icon{
        width: 30%;
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: skyblue;
        border-radius: 50px;
    }

    .mui-iconn{
        font-size: 80px;
        color: #000;
    }

    .title{
        margin-bottom: 20px;
        color: skyblue;
        position: relative;
        z-index: -1;
    }

    p{
        margin: 5px 0;
    }

    @media screen and (max-width: 480px){
        flex-direction: column-reverse;
        margin: 30px 0;
        border-radius: 50px;

        .texts{
            width: 100%;
        }

        .icon{
            width: 100%;
        }
    }
`