import styled from "styled-components";
import theme from "../theme";

export const AllDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 100px 50px;
  margin-right: 80px;
`;

export const AllProductDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  width: 70%;
  padding: 100px 0;
  position: relative;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductDiv = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  &:hover{
    opacity: 0.7;
  }
`;
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const Category = styled.span`
  color: #555;
  font-size: 12px;
`;

export const ProductName = styled.h3`
    font-size: 16px;
    font-weight: 700;
`;

export const PriceDiv = styled.div`
  padding-top: 10px;
  font-weight: bold;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute; 
  bottom: 20px;
  width: 100%;
`;

export const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #D9D9D9;
  margin-bottom: 30px;
`;

export const GroupTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  height: 10px;
`;

export const ResetButton = styled.button`
    border: none;
  background-color: ${theme.palette.primary.main};
  border-radius: 10px;
  height: 35px;
  max-width: 1500px;
  width: 80px;
  margin-bottom: 0px;
  color: white;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;