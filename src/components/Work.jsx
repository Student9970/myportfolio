import React from 'react'
import WorkContainer from './WorkContainer'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useScroll } from './useScroll'
import { introAnimation, titleAnimation } from './animation'

function Work(props) {

    const [element, controls] = useScroll();

    const sites = [
        {
            name: 'Tesla Clone',
            url: 'https://student9970.github.io/tesla-clone/',
            image: './images/teslaclone.png'
        },
        {
            name: 'Gazal Ansari',
            url: 'https://student9970.github.io/gazal.github.io/',
            image: './images/gazalansari.png'
        },
        {
            name: 'US Tech',
            url: 'https://techus.herokuapp.com/',
            image: './images/ustech.png'
        },
        {
            name: 'Bubere\'s Cake Studio',
            url: 'https://github.com/Student9970/buberescakestudio',
            image: './images/buberescakeshop.png'
        },
        {
            name: 'Old Portfolio',
            url: 'https://student9970.github.io/demo-portfolio.github.io/',
            image: './images/oldportfolio.png'
        },
        {
            name: 'Eid Mubarak',
            url: 'https://student9970.github.io/eid-mubarak/',
            image: './images/eidmubarak.png'
        }
    ]

    return (
        <>
            <Title bcol={props.bgCol} col={props.col} ref={element} id="work">

                <div>
                    <motion.div
                        variants={introAnimation}
                        animate={controls}
                        transition={{
                            duration: 0.8,
                            type: "tween"
                        }}
                    >
                        <p>Things I did</p>
                    </motion.div>

                    <motion.div
                        variants={titleAnimation}
                        animate={controls}
                        transition={{
                            duration: 0.8,
                            type: "tween"
                        }}
                    >
                        <h1>Work</h1>
                    </motion.div>
                </div>
            </Title>

            <Works>
                {sites.map((site, index) => {
                    return <WorkContainer name={site.name} url={site.url} image={site.image} />
                })}
            </Works>
        </>
    )
}

export default Work

const Title = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    margin: 0 auto;
    margin-bottom: 40px;
    border-radius: 30px;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

    h1{
        font-size: 75px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${props => `${props.col}`};
    }

    p{
        font-style: italic;
        font-weight: lighter;
        font-size: 16px;
        margin-bottom: -20px;
    }

`

const Works = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`