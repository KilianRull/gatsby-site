import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { colors } from './../utils/variables';

const StyledButton = styled(Button)`
    padding: 16px 32px;
    min-width: 180px;
    background-color: ${colors.primary};
`

export default StyledButton