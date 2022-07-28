import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { useScroll } from './useScroll'
import { navAnimation } from './animation'
import { NavLink } from 'react-router-dom';

function Header() {

    const [element, controls] = useScroll();

    const links = [
        {
            id: 1,
            name: "home",
            to: "#home"
        },
        {
            id: 2,
            name: "about",
            to: "#about"
        },
        {
            id: 3,
            name: "skills",
            to: "#skills"
        },
        {
            id: 4,
            name: "journey",
            to: "#journey"
        },
        {
            id: 5,
            name: "work",
            to: "#work"
        },
        {
            id: 6,
            name: "contact",
            to: "#contact"
        }
    ]

    return (
        <Container ref={element}>
            <ul id='navbar'>
                {
                    links.map((link) => {
                        return (
                            <motion.div
                                variants={navAnimation}
                                transition={{
                                    delay: 0.1,
                                    type: "spring"
                                }}
                                animate={controls}>
                                <NavLink activeClass="activeClass" key={link.id}
                                    to={link.to}
                                >
                                    {link.name}
                                </NavLink>
                            </motion.div>
                        )
                    })
                }
            </ul>
        </Container>
    )
}

export default Header

const Container = styled(motion.div)`
    /* position: fixed; */
    /* background-color: red; */
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    z-index: 100;

    .header__links{
        display: flex;
    }

    ul{
        display: flex;
        /* width: 35%; */
        justify-content: space-between;
        align-items: center;
        padding: 2px 50px;
        margin-top: 10px;
        background-color: #000000;
        /* box-shadow: 0 0 1px #ffffff; */
        border-radius: 50px;
    }

    a{
        /* background-color: blue; */
        padding: 0;
        margin: 0 15px;
        text-decoration: none;
        font-weight: 600;
        font-size: medium;
        color: #fff;
        padding: 10px 15px;
        text-transform: uppercase;
    }

    .activeClass{
        color: red;
    }
`