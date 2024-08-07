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
  @media (max-width: 768px) {
    /* flex-direction: column; */
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
  background-color: #fafafa;
  border-radius: 10px;
  width: 80%;
  max-width: 1000px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
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
`;

export const ReserVationProductImgDiv = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 20px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;


export const ReservationMainInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ReserVationDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  justify-content: space-around;
  height: 100%;
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
`;

export const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 10px;
  width: 120px;
  max-width: 120px;
  padding: 5px 0;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
`;
export const Person = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eee;
  margin-bottom: 10px;
  width: 120px;
  max-width: 120px;
  padding: 5px 0;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const PersonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;


