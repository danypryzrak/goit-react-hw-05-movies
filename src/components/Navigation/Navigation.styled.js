import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLi = styled(NavLink)`
color: black;
font-size: x-large;
text-decoration: none;

&.active{
    color: orange;
    text-decoration: underline;
}
`

export const NavUl = styled.ul`
list-style: none;
display: flex;
gap: 20px;
`