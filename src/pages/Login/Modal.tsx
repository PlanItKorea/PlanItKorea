import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

// 모달 배경 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

const ModalContent = styled.div`
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const ModalBody = styled.div`
  margin-top: 20px;
`;


interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
          <ModalHeader>
          </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;