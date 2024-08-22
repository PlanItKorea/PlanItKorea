import React, { ChangeEvent, useEffect, useRef, useState } from "react";
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
  ErrorBox,
  ErrorDiv,
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
import useAuthStore from "../../stores/useAuthStore";
import { Error } from "../../styles/myPage/Main";
import useIdStore from "../../stores/useNexIdStore";

export default function InquiryCRUD() {
  const [previews, setPreviews] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //! 유저 전역상태정보
  const user = useAuthStore((state) => state.user);
  const isLoggedin = useAuthStore((state) => state.isLoggedIn);

  //! 문의내역 id 전역
  const { id, incrementId } = useIdStore((state) => ({
    id: state.id,
    incrementId: state.incrementId,
  }));


  const [inquiry, setInquiry] = useState<Inquiry>({
    id: id,
    userId: user.id,
    category: "결제",
    title: "",
    content: "",
    image: undefined,
  });

  useEffect(() => {
    setInquiry(prevInquiry => ({
      ...prevInquiry,
      id: id,
    }));
  }, [id]);

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
    const files = e.target.files;
    if (files) {
        const fileArray = Array.from(files);
        
        const readerPromises = fileArray.map((file) => {
            return new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result as string);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(readerPromises)
            .then((base64Strings) => {
                setPreviews((prevPreviews) => prevPreviews.concat(base64Strings));
                setInquiry((prevInquiry) => ({
                    ...prevInquiry,
                    image: (prevInquiry.image || []).concat(base64Strings),
                }));
            })
            .catch((error) => {
                console.error("Error reading files:", error);
            });
    }
};
  

  const handleImageRemove = (index: number) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setInquiry({
      id: id,
      userId: user.id,
      category: "결제",
      title: "",
      content: "",
      image: undefined,
    });
    setPreviews([]);
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
      console.log(inquiry);
      try {
        await axios.post("http://localhost:3001/inquiry", inquiry);
        setIsModalOpen(true);
        incrementId();
        setInquiry({
          id: id + 1,
          userId: user.id,
          category: "결제",
          title: "",
          content: "",
          image: undefined,
        });
        setPreviews([]);
      } catch (error) {
        console.error("Error submitting inquiry:", error);
      }
    }
  };

  return (
    <>
      {isLoggedin ? (
        <ContentDiv>
          <BtnCategory>
            <NavLink to={"/inquiryCRUD"}>
              <InquiryBtn style={{ backgroundColor: "#ddd" }}>문의하기</InquiryBtn>
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
                  <Select name="Category" value={inquiry.category} onChange={handleCategory}>
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
                  <InputFile type="file" name="image" multiple onChange={handleImageChange} />
                  <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    {previews.map((preview, index) => (
                      <div key={index}>
                        <img
                          src={preview}
                          alt={`preview-${index}`}
                          style={{ width: "100px", height: "100px" }}
                        />
                        <button
                          type="button"
                          onClick={() => handleImageRemove(index)}
                          style={{ backgroundColor: "#eee", padding: "0 5px", display: "block" }}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
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
      ) : (
        <ErrorDiv>
          <ErrorBox>
            <Error>로그인이 필요한 시스템입니다.</Error>
          </ErrorBox>
        </ErrorDiv>
      )}

      {isModalOpen && (
        <>
          <Overlay />
          <Modal isOpen={isModalOpen}>
            <ModalText>질문이 등록되었습니다!</ModalText>
            <NavLink to="/inquiryHistory">
              <ModalButton onClick={() => setIsModalOpen(false)}>확인</ModalButton>
            </NavLink>
          </Modal>
        </>
      )}
    </>
  );
}
