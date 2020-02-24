/**
 * ************************************
 *
 * @module ClassModal
 * @description Modal Component that uses react's createPortal to render Components over
 *              the main root DOM heirarchy without losing context of previously rendered
 *              Components;
 *
 * ************************************
 */

import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ClassForm from './ClassForm';

const ClassModal = ({ isShowing, hide, addClasses }) => isShowing ? createPortal(
  <Fragment>
    <ModalOverlay />
    <ModalWrapper>
      <Modal>
        <ModalHeader>
          <CloseButton onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </CloseButton>
        </ModalHeader>
        <h1>Create Your Class</h1>
        <ClassForm hide={hide} addClasses={addClasses} />
      </Modal>
    </ModalWrapper>
  </Fragment>, document.body
) : null;

//MODAL STYLED COMPONENTS :

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
  outline: none;
`

export default ClassModal;