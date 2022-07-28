import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContent>
            <p>Handcrafted by me ©️ 2022</p>
            <p className='myName' style={{ margin: "10px auto", marginBottom: "20px" }}>Usama Ansari</p>
        </FooterContent >
    )
}

export default Footer

const FooterContent = styled.div`

    padding-bottom: 30px;

    p{
        color: grey;
        margin: 0 auto;
        width: max-content;
        cursor: default;
        letter-spacing: 2px;
    }

    @keyframes nameAnimation {
        0%, 18%, 30%, 50%{
            color: #9c9c9c;
            text-shadow: 0 0 1px #fff;
        }
        17%, 25%, 70%, 90%, 100%{
            color: #fff;
        }
    }
    
    .myName{
        animation: nameAnimation 1s ease-in-out infinite;
    }
`