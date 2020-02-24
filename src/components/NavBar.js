import React from 'react';
import styled from 'styled-components';
import ClassModal from './ClassModal';

const NavBar = ({ toggle, isShowing, addClasses }) => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          RookieCookie
          <Button onClick={toggle}>Create A Class</Button>
          <ClassModal
            addClasses={addClasses}
            isShowing={isShowing}
            hide={toggle}
          />
        </HeaderItem>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #00c4ff;
  height: 50px;
  box-shadow: 0 0 5px 0 gray;
`
const HeaderMenu = styled.div`
  margin-top: 0px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
`
const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px 0 10px;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;
  font-size: 1.3rem;
`
const Button = styled.button`
  outline: none;
  float: right;
  color: #0c7b93;
  border: 2px solid #0c7b93;
  border-radius: 5px;
  transition: 0.3s;
  font-size: 1rem;

  &:hover {
    border: 2px solid white;
    background-color: #00c4ff;
    color: white;
  }
`