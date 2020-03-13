import React from 'react';
import styled from 'styled-components';
import StyledButton from './Button';
import { StylesProvider } from '@material-ui/styles';

const SectionWrap = styled.div`
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Section = props => (
    <StylesProvider injectFirst>
        <SectionWrap>
            <StyledButton variant="contained" href="/page-2/">
                Hello World
            </StyledButton>
        </SectionWrap>
    </StylesProvider>

)

export default Section