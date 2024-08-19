import styled from "styled-components";
import theme from "../theme";

export const AllDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5% 10%;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const ProductNameDiv = styled.div``;

export const ProductName = styled.h2`
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const ProductImgDiv = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LeftImgDiv = styled.div`
  width: 50%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;
  padding-right: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  &:hover {
    opacity: 0.7;
  }
`;

export const RightImgDiv = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
`;

export const RightInnerImgDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; 
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative; 
  padding-bottom: 220px; 
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 60%;
  margin-right: 30px;
  min-width: 700px;
`;

export const FacilityDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #d9d9d9;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

export const FacilityItem = styled.div`
  background-color: ${theme.palette.primary.light};
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  min-width: 91px;
  
  &:hover {
    background-color: ${theme.palette.primary.main};
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionItem = styled.div``;

export const GroupName = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 50px 0;
`;

export const ReservationBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  z-index: 1000; 
`;

export const ReservationBar = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
  padding: 10px; 
`;
