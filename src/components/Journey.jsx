import React from 'react'
import Institute from './Institute'
import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';

function Journey() {
    return (
        <>

            <Journeys id="journey">
                <Institute title="Bachelor of Engineering (B.E), Computer Science" institution="Sinhgad Institute Of Technology And Science (SITS)" tenure="2019 - 2023" result="CGPA: 9.01" icon={<SchoolIcon className='mui-iconn' />} />

                <Institute title="Senior Secondary (XII), Science" institution="Swami Vivekanand English High School And Junior College (HSC board)" tenure="Year of completion: 2019" result="Percentage: 66.00%" icon={<MenuBookIcon className='mui-iconn' />} />

                <Institute title="Secondary (X)" institution="Dr. Omprakash Agarwal English High School (SSC board)" tenure="Year of completion: 2017" result="Percentage: 85.00%" icon={<EditIcon className='mui-iconn' />} />
            </Journeys>

        </>
    )
}

export default Journey

const Journeys = styled.div`
    padding: 40px;
`