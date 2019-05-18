import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    background: #C9356B;
    padding: 10px 20px;
    border-bottom: 5px solid #130C5C;
`
export const Link = styled(NavLink)`
    color: #EBE9F0;
    text-decoration:none;
    font-weight:bold;
    font-size: 26px;
`