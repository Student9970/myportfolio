import React from 'react'
import styled from 'styled-components'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { skillAnimation } from './animation';

function Skill(props) {

    const [element, controls] = useScroll();

    return (
        <SkillContainer bcol={props.bgcol} ref={element} >
            <h3>{props.title}</h3>
            <Level gradient={props.linecol} percentage={props.percent}>
                <motion.span
                    variants={skillAnimation}
                    animate={controls}
                    transition={{
                        duration: 0.8,
                        type: "tween"
                    }}
                ></motion.span>
            </Level>
        </SkillContainer >
    )
}

export default Skill

const SkillContainer = styled.div`
    ${props => `${props.bcol}`}
    position: relative;
    padding: 25px 20px;
    border-radius: 25px;
    margin: 10px;

    h3{
        font-size: 25px;
        font-weight: 500;
        color: #000;
    }
`

const Level = styled.div`
    height: 15px;
    margin: 10px auto;
    margin-bottom: 10px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 50px;
    margin-top: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;

    span{
        display: block;
        height: 100%;
        width: ${props => `${props.percentage}`}%;
        border-radius: 50px;
        background: ${props => `${props.gradient}`};

    }
`