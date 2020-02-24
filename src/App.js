import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import classList from './classes';
import NavBar from './components/NavBar';
import useModal from './custom-hooks/useModal';

const App = () => {
  const [ classes, setClasses ] = useState([]);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    setClasses(classList)
  }, [])
  
  const addClasses = (classItem) => {
    classItem.id = classes.length + 1;
    setClasses([...classes, classItem]);
  };

  const deleteClasses = id => {
    setClasses(classes.filter(el => el.id !== id));
  };

  return (
    <Wrapper>
      <NavBar isShowing={isShowing} toggle={toggle} addClasses={addClasses}/>
      <h1>Welcome to RookieCookie!</h1>
      <Cards>{classes.map(klass => <ClassCard deleteClasses={deleteClasses} key={klass.id} content={klass}/>)}</Cards>
    </Wrapper>
  )
};

export default App

const ClassCard = ({ content, deleteClasses }) => (
  <div>
    <ClassCardWrapper>
      <img height="50%" width="100%" src={content.featureImage} alt='' />
      <h4 className="content">{content.title}</h4>
      <h5 className="content">{content.instructor}</h5>
      <h5 className="content">{content.description}</h5>
      <h5 className="content">{content.duration} min</h5>
    </ClassCardWrapper>
    <DeleteButton onClick={() => deleteClasses(content.id)}>
      <img height="25rem" width="20rem" src="https://image.flaticon.com/icons/svg/1214/1214926.svg" alt="Trash Icon"/>
    </DeleteButton>
  </div>
)

const Wrapper = styled.div `
  text-align: center;
`

const ClassCardWrapper = styled.div`
  height: 25rem;
  width: 100%;
  border-radius: 5px;
  overflow: scroll;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const DeleteButton = styled.button`
  border-radius: 50%;
  margin: 1rem;

  &:hover {
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    background-color: red;
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-flow: rows;
  grid-gap: 3rem;
  margin: 3rem;
`