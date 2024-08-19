import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BerthProduct } from "../../types/type";
import {
  AllDiv,
  DescriptionDiv,
  DescriptionItem,
  Detail,
  FacilityDiv,
  FacilityItem,
  GroupName,
  HeaderDiv,
  Image,
  LeftImgDiv,
  MainDiv,
  ProductImgDiv,
  ProductName,
  ProductNameDiv,
  ReservationBar,
  ReservationBarDiv,
  RightImgDiv,
  RightInnerImgDiv,
} from "../../styles/product/Detail";
import MapIcon from "@mui/icons-material/Map";

export default function DetailProduct() {
  const { productId } = useParams<string>();
  const [product, setProduct] = useState<BerthProduct | null>(null);

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

  return (
    <AllDiv>
      <HeaderDiv>
        <ProductNameDiv>
          <ProductName>{product?.name}</ProductName>
        </ProductNameDiv>
        <ProductImgDiv>
          <LeftImgDiv>
            <Image src={product?.img[0]} />
          </LeftImgDiv>
          <RightImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[1]} />
            </RightInnerImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[2]} />
            </RightInnerImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[2]} />
            </RightInnerImgDiv>
            <RightInnerImgDiv>
              <Image src={product?.img[0]} />
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
            <ReservationBar></ReservationBar>
        </ReservationBarDiv>
      </MainDiv>
    </AllDiv>
  );
}
