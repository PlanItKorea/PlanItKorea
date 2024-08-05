import styled from "styled-components";
import theme from "./theme";

export const BtnCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const InquiryBtn = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 40px;
  &:hover {
    background-color: #ddd;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
`;

export const SelectCategoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
`;
export const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
`;
export const ImageFile = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
`;

export const InquiryTitle = styled.div`
  padding: 5px 0;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-right: 1px solid #ccc;

`;

export const InputBox = styled.div`
  padding: 5px 20px;
  width: 80%;
  
`;

export const InquiryTitleName = styled.p`
  font-weight: bold;
`;

export const Select = styled.select`
  padding: 5px 20px;
  border: 1px solid #ddd;
`;

export const InputTitle = styled.input`
  padding: 5px 20px;
  background-color: #eee;
  width: 100%;
`;

export const InputBody = styled.textarea`
  padding: 5px 20px;
  background-color: #eee;
  width: 100%;
  height: 300px;
  resize: none;
`;

export const InputFile = styled.input`
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  border: none;
  background-color: ${theme.palette.primary.main};
  border-radius: 15px;
  height: 40px;
  width: 150px;
  margin-bottom: 0px;
  color: white;
  margin-top: 15px;
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;