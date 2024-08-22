import React, { ChangeEvent, useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BerthProduct } from "../../types/type";
import {
  Address,
  AllDiv,
  CloseBtn,
  DescriptionDiv,
  DescriptionItem,
  Detail,
  FacilityDiv,
  FacilityItem,
  GroupName,
  HeaderDiv,
  Image,
  ImgButton,
  LeftImgDiv,
  MainDiv,
  MapDiv,
  ModalDiv,
  ModalHeader,
  ModalOverlay,
  PersonBar,
  PersonDiv,
  PersonInput,
  PriceBar,
  ProductImgDiv,
  ProductName,
  ProductNameDiv,
  ReservationBar,
  ReservationBarDiv,
  RightImgDiv,
  RightInnerImgDiv,
} from "../../styles/product/Detail";
import MapIcon from "@mui/icons-material/Map";
import DatePicker from "react-datepicker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faWonSign } from "@fortawesome/free-solid-svg-icons";
import { GroupLine } from "../../styles/customer/customer";
import { Button } from "../../styles/Sign";
import ImageSlider from "./sliderImg/ImageSlider";
import NaverMap from "../../component/NaverMap";
import useSearchStore from "../../stores/useSearchStore";

export default function DetailProduct() {
  //! 전역 상태 받아오기
  const { searchData } = useSearchStore(state => ({
    searchData: state.searchData
  }));


  const { productId } = useParams<string>();
  const [product, setProduct] = useState<BerthProduct | null>(null);

  const [startDate, setStartDate] = useState<Date | undefined>(searchData.startDay);
  const [endDate, setEndDate] = useState<Date | undefined>(searchData.endDay);

  const [person, setPerson] = useState<number | undefined>(searchData.personCount);

  

  const personValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    setPerson(value)
  }
  const today = new Date();

  const calculateDays = (start: Date | undefined, end: Date | undefined) => {
    if (!start || !end) return 0;
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const days = calculateDays(startDate, endDate);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/BerthProduct/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error");
    }
  };

  

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  function strToNum(str: string | undefined): number {
    if (!str) return 0;

    const numPrice = parseInt(str.replace(/[^0-9]/g, ""), 10);
    return numPrice;
  }
  const numberPrice = strToNum(product?.price);
  const totalPrice = numberPrice * days;

  function numPriceToStr(num: number): string {
    return num.toLocaleString("ko-KR")
  }

  const strPrice = numPriceToStr(totalPrice);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  
  return (
    <>
    <AllDiv>
      <HeaderDiv>
        <ProductNameDiv>
          <ProductName>{product?.name}</ProductName>
        </ProductNameDiv>
        <ProductImgDiv onClick={openModal}>
          <LeftImgDiv>
            <Image src={product?.img[0]} />
          </LeftImgDiv>
          <RightImgDiv >
            <RightInnerImgDiv>
              <Image src={product?.img[1]} />
            </RightInnerImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[2]} />
            </RightInnerImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[3]} />
            </RightInnerImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[4]} />
              <ImgButton onClick={openModal}>사진 모두보기</ImgButton>
            </RightInnerImgDiv>
          </RightImgDiv>
        </ProductImgDiv>
      </HeaderDiv>
      <MainDiv>
        <Detail>
          <ProductName>
            <MapIcon sx={{ marginRight: "10px" }} />
            {product?.city} - {product?.accommodationCategory}
          </ProductName>
          <Address>{product?.address}</Address>
          <MapDiv>
        {product?.point &&(
        <NaverMap point={product?.point}></NaverMap>
        )}
      </MapDiv>
          <GroupName>숙소 시설</GroupName>
          <FacilityDiv>
            {product?.facility.map((item, index) => (
              <FacilityItem key={index}>{item}</FacilityItem>
            ))}
          </FacilityDiv>
          <DescriptionDiv>
          
            <GroupName>숙소 이용 정보</GroupName>
            <DescriptionItem>{product?.description}</DescriptionItem>
          </DescriptionDiv>
          
        </Detail>
        
        <ReservationBarDiv>
          <ReservationBar>
            <ProductName>{product?.name}</ProductName>
            <div
              style={{
                zIndex: 10,
                width: "100%",
              }}
            >
              <div
                className="box-border p-4 border border-cyan-200 rounded-lg flex items-center space-x-2"
                style={{ border: "none" }}
              >
                <div className="relative flex-1">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) =>
                      setStartDate(date ?? undefined)
                    }
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="w-full p-2 border border-cyan-400 rounded-l-lg"
                    placeholderText="Start Date"
                    isClearable={false}
                    minDate={today}
                  />
                </div>
                <div className="relative flex-1">
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) =>
                      setEndDate(date ?? undefined)
                    }
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate || today}
                    className="w-full p-2 border border-cyan-400 rounded-r-lg"
                    placeholderText="End Date"
                    isClearable={false}
                  />
                </div>
              </div>
            </div>

            {/* 인원 수 */}
            <PersonDiv>
              <PersonInput type="number" value={person} placeholder="인원 수" onChange={personValue} min={1}></PersonInput>
            </PersonDiv>
            <PriceBar>
              <FontAwesomeIcon style={{ margin: "0 5px" }} icon={faWonSign} />
              {product?.price}
            </PriceBar>
            <PersonBar>
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ margin: "0 7px 0 6px" }}
              />
              {days} 박
            </PersonBar>
            <GroupLine style={{marginBottom:'5px'}}/>
            <PriceBar>
            <div>
              총 합계
            </div>
            <div>
              <FontAwesomeIcon style={{ margin: "0 5px" }} icon={faWonSign} />
              {strPrice}
            </div>
            </PriceBar>
            <Button style={{width:"90%"}}>예약 하기</Button>
          </ReservationBar>
        </ReservationBarDiv>
      </MainDiv>
    </AllDiv>



    {isModalOpen && (
        <>
            <ModalOverlay >
            <ModalDiv>
                <ModalHeader>
                <CloseBtn onClick={closeModal}>X</CloseBtn>
                </ModalHeader>
                
                <ImageSlider images={product?.img}></ImageSlider>
                </ModalDiv>
            </ModalOverlay>
        </>
      )}
    </>
    
  );
}
