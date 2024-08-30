import styled from "styled-components";
import theme from "../theme";

export const AllDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 30px auto;
  width: 80%;
  padding: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fafafa;
  padding: 20px;
  width: 20%;
  max-width: 180px;
  min-width: 120px;
  margin-right: 20px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0;
  }
`;

export const NavInnerDiv = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const AllProductDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 10px 120px 10px;
  position: relative;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NavTitle = styled.li`
  font-size: 18px;
  font-weight: 700;
  margin: 30px 20px;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100px;
  }
`;

export const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const WishInner = styled.div`
display: flex;
flex-direction: row;
align-items: start;
padding: 20px;
border-radius: 10px;
width: 100%;
box-sizing: border-box;
gap: 25px;
`;


export const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 40px;
`;

export const IdInput = styled.input`
  background-color: #e4e4e4;
  width: 100%;
  min-width: 0;
  height: 45px;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid #ccc;
  cursor: ${({ contentEditable }) => (contentEditable ? 'text' : 'not-allowed')};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #aaa;
  margin-bottom: 5px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 330px;
  box-sizing: border-box;
`;

export const Error = styled.h2`
  color: ${theme.palette.error.dark};
  font-weight: bold;
`;

export const Loading = styled.h2`
  color: ${theme.palette.primary.main};
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WithdrawalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin: 20px 0;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const WithdrawalInput = styled.input`
  background-color: #e4e4e4;
  width: 100%;
  min-width: 0;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid #ccc;
`;

export const WithDrawalButton = styled.button`
  border: none;
  background-color: ${theme.palette.error.main};
  border-radius: 15px;
  height: 47px;
  width: 100%;
  padding-left: 5%;
  margin-bottom: 20px;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: ${theme.palette.error.dark};
  }
`;

export const GroupLine = styled.span`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  border: 1px solid ${theme.palette.primary.main};
`;

export const ReserVationProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto; 
  min-width: 0;
  cursor: pointer;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ReserVationProductImgDiv = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 300px;
  margin: 20px;
  transition: transform 0.2s ease-in-out;
  flex: 1 1 auto; 
  max-width: 300px;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 850px) {
    width: 100%;
    max-width: 500px;
  }
`;


export const ReservationMainInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ReserVationDetail = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  cursor: pointer;
`;

export const ReservationNumber = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;
export const ProductName = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const DateDivWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; 
  min-width: 0;
`;

export const DetailLabel = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eee;
  width: 150px;
  max-width: 80px;
  padding: 5px 0;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
`;
export const Person = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eee;
  width: 80px;
  max-width: 120px;
  padding: 5px 0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const PersonDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  flex: 1 1 auto; 
  min-width: 0; 
  padding: 10px;
  @media (max-width: 850px) {
    flex-direction: row-reverse;
    width: 100%;
  }
`;

export const PriceBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  width: 120px;
  max-width: 120px;
  padding: 5px 0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;




export const CancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.error.main};
  border-radius: 10px;
  height: 40px;
  width: 30%;
  max-width: 100px;
  min-width: 71px;
  color: white;
  &:hover {
    background-color: ${theme.palette.error.dark};
  }
`;

export const MapUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  
`;

export const MainLi = styled.li`
  display: flex;
  flex-direction: row;
  background-color: #fafafa;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DetailLabelRe = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #a9a9a9;
  display: flex;
  align-self: flex-start;
`;

