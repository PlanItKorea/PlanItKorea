import React, { useState } from "react";
import house1 from "../../assets/images/house/house1.jpg";
import { GroupLine } from "../../styles/Sign";
import {
  AllDiv,
  AllProductDiv,
  Category,
  FilterDiv,
  FilterHeader,
  GroupTitle,
  PriceDiv,
  ProductDetail,
  ProductDiv,
  ProductImg,
  ProductName,
  ResetButton,
} from "../../styles/product/AllProduct";
import { accommodations } from "../../mocks";
import { PageDiv } from "../../styles/product/AllProduct";
import ReactPaginate from "react-paginate";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Accommodation, Facilities } from "../../types/type";

const ITEMS_PER_PAGE = 9;

export default function AllProductPage() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [accommodationType, setAccommodationType] = useState<Accommodation | null>(null);
  const [facilities, setFacilities] = useState<Facilities[]>([])

  const handleReset = () => {
    setAccommodationType(null); 
    setFacilities([]);
  };

  const handleChangeAccommodation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccommodationType(e.target.value as Accommodation);
  };

  
  const handleChangeFacilities = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFacilities((prevFacilities) => {
      if (checked) {
        // 체크된 경우 배열에 추가
        return [...prevFacilities, value as Facilities];
      } else {
        // 체크 해제된 경우 배열에서 제거
        return prevFacilities.filter((facility) => facility !== value);
      }
    });
  };
  
  console.log(facilities);
  
  

  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const indexOfLastItem = (currentPage + 1) * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = accommodations.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <GroupLine />

      <AllDiv>
        <FilterDiv>
          <FilterHeader>
            <GroupTitle>숙소 필터</GroupTitle>
            <ResetButton onClick={handleReset}>초기화</ResetButton>
          </FilterHeader>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ fontWeight: "bold", fontSize: "18px", color: "#000" }}
            >
              숙소별
            </FormLabel>
            <RadioGroup
              sx={{paddingBottom: "40px", borderBottom:"1px solid #D9D9D9"}}
              value={accommodationType || ''}
              name="radio-buttons-group"
              onChange={handleChangeAccommodation}
            >
              <FormControlLabel
                value=""
                control={<Radio />}
                label="전체"
                />
              <FormControlLabel
                value="호텔&리조트"
                control={<Radio />}
                label="호텔 & 리조트"
                />
              <FormControlLabel
                value="펜션&풀빌라"
                control={<Radio />}
                label="펜션 & 풀빌라"
                />
              <FormControlLabel
                value="캠핑&글램핑"
                control={<Radio />}
                label="캠핑 & 글램핑"
              />
            </RadioGroup>
            <FormLabel
        id="facilities-filter"
        sx={{ fontWeight: "bold", fontSize: "18px", color: "#000", paddingTop: "40px" }}
      >
        편의 시설
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          value="사우나"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="사우나"
        />
        <FormControlLabel
          value="수영장"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="수영장"
        />
        <FormControlLabel
          value="바베큐"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="바베큐"
        />
        <FormControlLabel
          value="세탁 가능"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="세탁 가능"
        />
        <FormControlLabel
          value="스파/월풀"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="스파/월풀"
        />
        <FormControlLabel
          value="와이파이"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="와이파이"
        />
        <FormControlLabel
          value="에어컨"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="에어컨"
        />
        <FormControlLabel
          value="욕실용품"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="욕실용품"
        />
        <FormControlLabel
          value="샤워실"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="샤워실"
        />
        <FormControlLabel
          value="조식포함"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="조식포함"
        />
        <FormControlLabel
          value="무료주차"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="무료주차"
        />
        <FormControlLabel
          value="반려견 동반"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="반려견 동반"
        />
        <FormControlLabel
          value="객실 내 취사"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="객실 내 취사"
        />
        <FormControlLabel
          value="OTT"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="OTT"
        />
        <FormControlLabel
          value="매진숙소 제외"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="매진숙소 제외"
        />
        <FormControlLabel
          value="객실 내 흡연"
          control={<Checkbox onChange={handleChangeFacilities} />}
          label="객실 내 흡연"
        />
      </FormGroup>
          </FormControl>
                
        </FilterDiv>{" "}
        {/* 필터 박스 div */}
        <AllProductDiv>
          {currentItems.map((accommodations) => (
            <ProductDiv key={accommodations.id}>
              <ProductImg src={accommodations.img} />
              <ProductDetail>
                <Category>
                  {accommodations.city} - {accommodations.accommodationCategory}
                </Category>
                <ProductName>{accommodations.name}</ProductName>
              </ProductDetail>
              <PriceDiv>{accommodations.price} 원</PriceDiv>
            </ProductDiv>
          ))}
          <PageDiv>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(accommodations.length / ITEMS_PER_PAGE)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </PageDiv>
        </AllProductDiv>
      </AllDiv>
    </>
  );
}
