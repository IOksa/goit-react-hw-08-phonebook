import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import css from './AuthNav.module.css';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color:#0b5394;;

  &.active {
    color: #e84a5f;
  }
`;


export const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};