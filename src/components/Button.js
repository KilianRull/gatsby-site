import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
    padding: 8px 24px;
    height: 64px;
    background-color: blue;
    color: white;
`

export default function StyledComponents() {
    return (
      <div>
        <Button>Default</Button>
        <StyledButton>Customized Yeah</StyledButton>
      </div>
    );
  }