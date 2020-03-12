import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

const SectionWrap = styled.div`
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Section = props => (
    <SectionWrap>
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    </SectionWrap>

)

export default Section