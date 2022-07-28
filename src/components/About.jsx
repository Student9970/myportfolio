import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useScroll } from './useScroll'
import { introAnimation } from './animation'
import { HashLink } from 'react-router-hash-link'

function About() {
    const [element, controls] = useScroll();

    return (

        <Content id="about">

            <p ref={element}>
                <motion.div
                    variants={introAnimation}
                    transition={{ duration: 0.6, type: 'tween' }}
                    animate={controls}
                >
                    I’m a MERN Stack Developer located in Mumbai, India. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences
                </motion.div>

                <br />

                <motion.div
                    variants={introAnimation}
                    transition={{ delay: 0.1, duration: 0.6, type: 'tween' }}
                    animate={controls}
                >
                    Well-organised person, problem solver, independent employee with high attention to detail. Student of Sinhgad Institute of Technology, Lonavala. Fan of Sci-fi movies, outdoor activities and English literature
                </motion.div>

                <br />

                <motion.div
                    variants={introAnimation}
                    transition={{ delay: 0.2, duration: 0.6, type: 'tween' }}
                    animate={controls}
                >
                    Interested in the entire full stack spectrum and working on ambitious projects with positive people
                </motion.div>

                <br />

                <motion.a
                    href='#contact'
                    variants={introAnimation}
                    transition={{ delay: 0.4, duration: 0.9, type: 'tween' }}
                    animate={controls}
                >Let’s make something special</motion.a>

            </p>

        </Content>
    )
}

export default About

const Content = styled.div`
    padding: 200px;
    font-size: 20px;

    span{
        color: #F0CB35;
        font-weight: 600;
    }

    a{
        color: #F0CB35;
        text-decoration: none;
        cursor: pointer;
    }

    p{
        position: relative;
        z-index: -1;
    }

    @media screen and (max-width: 480px){
        padding: 20px 20px;
        margin: 20px 0;
    }
`