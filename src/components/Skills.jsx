import React from 'react'
import styled from 'styled-components'
import Skill from './Skill'

function Skills() {
    return (
        <Container id='skills'>
            <Skill title="HTML" bgcol="background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);" linecol="#000000" percent="75" />

            <Skill title="CSS" bgcol="background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);" linecol="#000000" percent="80" />

            <Skill title="Bootstrap" bgcol="background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);" linecol="#000000" percent="70" />

            <Skill title="Tailwind Css" bgcol="background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);" linecol="#000000" percent="50" />

            <Skill title="JavaScript" bgcol="background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);" linecol="#000000" percent="65" />

            <Skill title="React JS" bgcol="background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);" linecol="#000000" percent="60" />

            <Skill title="Node JS" bgcol="background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);" linecol="#000000" percent="55" />

            <Skill title="Express JS" bgcol="background-image: linear-gradient( 135deg, #FFE985 10%, #FA742B 100%);" linecol="#000000" percent="40" />

            <Skill title="Mongo DB" bgcol="background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );" linecol="#000000" percent="40" />

            <Skill title="MySQL" bgcol="background-image: linear-gradient( 117deg,  rgba(123,216,96,1) 39.2%, rgba(255,255,255,1) 156.2% );" linecol="#000000" percent="50" />

            <Skill title="PHP" bgcol="background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);" linecol="#000000" percent="60" />

            <Skill title="UI / UX" bgcol="background: linear-gradient(to right, #cac531, #f3f9a7);" linecol="#000000" percent="60" />

        </Container>
    )
}

export default Skills

const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 480px){
        grid-template-columns: 100%;
    }
`