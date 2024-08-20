import React, { ChangeEvent, useState } from "react";
import { ContentDiv } from "../../styles/customer/customer";
import { ModalText } from "../../styles/Sign";
import { Inquiry, InquiryType } from "../../types/type";
import Modal, { ModalButton, Overlay } from "../../component/Modal";
import { NavLink } from "react-router-dom";
import {
  BodyDiv,
  BtnCategory,
  Button,
  ButtonBox,
  FormDiv,
  ImageFile,
  InputBody,
  InputBox,
  InputFile,
  InputTitle,
  InquiryBtn,
  InquiryTitle,
  InquiryTitleName,
  Select,
  SelectCategoryDiv,
  TitleDiv,
} from "../../styles/customer/Inquiry";
import { useStore } from "zustand";
import axios from "axios";

export default function InquiryCRUD() {
  const [preview, setPreview] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [inquiry, setInquiry] = useState<Inquiry>({
    id: "",
    category: "결제",
    title: "",
    content: "",
    image: undefined,
  });

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      category: e.target.value as InquiryType,
    }));
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      title: e.target.value,
    }));
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      content: e.target.value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgString = reader.result as string;
        setInquiry((prevInquiry) => ({
          ...prevInquiry,
          image: imgString,
        }));
        setPreview(imgString);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setInquiry((prevInquiry) => ({
      ...prevInquiry,
      image: undefined,
    }));
    setPreview(null);
  };

  const handleReset = () => {
    setInquiry({
      id: "",
      category: "결제",
      title: "",
      content: "",
      image: undefined,
    });
    setPreview(null);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let valid = true;

    if (!inquiry.category) {
      valid = false;
    } else if (!inquiry.title) {
      valid = false;
    } else if (!inquiry.content) {
      valid = false;
    }

    if (valid) {
      try {
        await axios.post("http://localhost:3001/inquiry", inquiry);

        setIsModalOpen(true);

        setInquiry({
          id: "",
          category: "결제",
          title: "",
          content: "",
          image: undefined,
        });
        setPreview(null);
      } catch (error) {
        console.error("Error submitting inquiry:", error);
      }
    }
  };

  return (
    <>
      <ContentDiv>
        <BtnCategory>
          <NavLink to={"/inquiryCRUD"}>
            <InquiryBtn style={{ backgroundColor: "#ddd" }}>
              문의하기
            </InquiryBtn>
          </NavLink>
          <NavLink to={"/inquiryHistory"}>
            <InquiryBtn>문의내역</InquiryBtn>
          </NavLink>
        </BtnCategory>
        <FormDiv>
          <form action="">
            <SelectCategoryDiv>
              <InquiryTitle>
                <InquiryTitleName>문의 유형</InquiryTitleName>
              </InquiryTitle>
              <InputBox>
                <Select
                  name="Category"
                  value={inquiry.category}
                  onChange={handleCategory}
                >
                  <option value="결제">결제</option>
                  <option value="취소">취소</option>
                  <option value="환불">환불</option>
                </Select>
              </InputBox>
            </SelectCategoryDiv>
            <TitleDiv>
              <InquiryTitle>
                <InquiryTitleName>제목</InquiryTitleName>
              </InquiryTitle>
              <InputBox>
                <InputTitle
                  placeholder="제목"
                  value={inquiry.title}
                  required
                  onChange={handleTitleChange}
                />
              </InputBox>
            </TitleDiv>
            <BodyDiv>
              <InquiryTitle>
                <InquiryTitleName>내용</InquiryTitleName>
              </InquiryTitle>
              <InputBox>
                <InputBody
                  placeholder="내용"
                  value={inquiry.content}
                  onChange={handleBodyChange}
                  required
                />
              </InputBox>
            </BodyDiv>
            <ImageFile>
              <InquiryTitle>
                <InquiryTitleName>사진 첨부</InquiryTitleName>
              </InquiryTitle>
              <InputBox>
                <InputFile
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
                {preview && (
                  <div>
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <button
                      type="button"
                      onClick={handleImageRemove}
                      style={{ backgroundColor: "#eee", padding: "0 5px" }}
                    >
                      X
                    </button>
                  </div>
                )}
              </InputBox>
            </ImageFile>
            <ButtonBox>
              <Button style={{ marginRight: "15px" }} onClick={handleSubmit}>
                저장
              </Button>
              <Button onClick={handleReset}>초기화</Button>
            </ButtonBox>
          </form>
        </FormDiv>
      </ContentDiv>

      {isModalOpen && (
        <>
          <Overlay />
          <Modal isOpen={isModalOpen}>
            <ModalText>질문이 등록되었습니다!</ModalText>
            <NavLink to="/inquiryHistory">
              <ModalButton onClick={() => setIsModalOpen(false)}>
                확인
              </ModalButton>
            </NavLink>
          </Modal>
        </>
      )}
    </>
  );
}
