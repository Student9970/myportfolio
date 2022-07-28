import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function WorkContainer(props) {
    return (
        <Container href={props.url} target='_blank' img={props.image}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            transition={{
                type: "spring"
            }}
        >

            <div className="text">
                <h2 className='title'>{props.name}</h2>
            </div>

        </Container>
    )
}

export default WorkContainer

const Container = styled(motion.a)`
    border-radius: 30px;
    width: 30%;
    height: 320px;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    background: url(${props => props.img});
    background-size: cover;
    background-position: center;


    .text{
        color: #fff;
        background: rgba(0,0,0,0.5); 
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* &:hover{
        background-size: 200%;
    } */

    &:hover .text{
        background: rgba(0,0,0,0.8);
        letter-spacing: 5px;
        transition: ease 0.3s;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        margin: 20px 0;
    }
`;