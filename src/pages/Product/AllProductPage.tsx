import React, { useEffect, useState } from "react";
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
import { Accommodation, BerthProduct, Facilities } from "../../types/type";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import useSearchStore from "../../stores/useSearchStore";
import axios from "axios";

const ITEMS_PER_PAGE = 9;

export default function AllProductPage() {
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [accommodationType, setAccommodationType] = useState<Accommodation | null>(null);
  const [facilities, setFacilities] = useState<Facilities[]>([]);
  const [userWishList, setUserWishList] = useState<number[]>([]);
  const [products, setProducts] = useState<BerthProduct[]>([]);

  const navigate = useNavigate();

  const { searchData } = useSearchStore();

  //! 찜
  const toggleWishlist = (id: number) => {
    setUserWishList((prevList) =>
      prevList.includes(id) ? prevList.filter(item => item !== id) : [...prevList, id]
    );
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  //! 카테고리 리셋
  const handleReset = () => {
    setAccommodationType(null); 
    setFacilities([]);
  };

  //! 숙소타입 핸들러
  const handleChangeAccommodation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccommodationType(e.target.value as Accommodation);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/BerthProduct');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  //! 편의시설 핸들러
  const handleChangeFacilities = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFacilities((prevFacilities) => {
      if (checked) {
        return [...prevFacilities, value as Facilities];
      } else {
        return prevFacilities.filter((facility) => facility !== value);
      }
    });
  };

  //! 카테고리 필터링
  const filterProducts = products.filter((product) => {
    const matchAccommodationType =
      !accommodationType || product.accommodationCategory.includes(accommodationType as Accommodation);

    const matchFacilities = facilities.length === 0 || facilities.every((facility) =>
      product.facility.includes(facility)
    );

    const matchCity = !searchData.city || product.city === searchData.city;
    const matchCategory = !category || product.accommodationCategory.some((cat) => cat === category);

    return matchAccommodationType && matchFacilities && matchCity &&matchCategory;
  });

  //! 페이지네이션
  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const indexOfLastItem = (currentPage + 1) * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filterProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleProductClick = (id: number) => {
    navigate(`/detailProduct/${id}`);
  };

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
              sx={{ paddingBottom: "40px", borderBottom: "1px solid #D9D9D9" }}
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
            <FormGroup sx={{zIndex:10}}>
              <FormControlLabel
                value="사우나"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('사우나')} />}
                label="사우나"
              />
              <FormControlLabel
                value="수영장"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('수영장')} />}
                label="수영장"
              />
              <FormControlLabel
                value="바베큐"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('바베큐')} />}
                label="바베큐"
              />
              <FormControlLabel
                value="세탁 가능"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('세탁 가능')} />}
                label="세탁 가능"
              />
              <FormControlLabel
                value="스파/월풀"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('스파/월풀')} />}
                label="스파/월풀"
              />
              <FormControlLabel
                value="와이파이"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('와이파이')} />}
                label="와이파이"
              />
              <FormControlLabel
                value="에어컨"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('에어컨')} />}
                label="에어컨"
              />
              <FormControlLabel
                value="욕실용품"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('욕실용품')} />}
                label="욕실용품"
              />
              <FormControlLabel
                value="샤워실"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('샤워실')} />}
                label="샤워실"
              />
              <FormControlLabel
                value="조식포함"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('조식포함')} />}
                label="조식포함"
              />
              <FormControlLabel
                value="무료주차"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('무료주차')} />}
                label="무료주차"
              />
              <FormControlLabel
                value="반려견 동반"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('반려견 동반')} />}
                label="반려견 동반"
              />
              <FormControlLabel
                value="객실 내 취사"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('객실 내 취사')} />}
                label="객실 내 취사"
              />
              <FormControlLabel
                value="OTT"
                control={<Checkbox onChange={handleChangeFacilities} checked={facilities.includes('OTT')} />}
                label="OTT"
              />
            </FormGroup>
          </FormControl>
        </FilterDiv>

        <AllProductDiv>
          {currentItems.map((product) => (
            <ProductDiv key={product.id} onClick={() => handleProductClick(product.id)}>
                <ProductImg src={product.img[0]} />
              <ProductDetail>
                <Category>
                  {product.city} - {product.accommodationCategory}
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder sx={{ color: '#DD1162' }} />}
                    checkedIcon={<Favorite sx={{ color: '#DD1162' }} />}
                    checked={userWishList.includes(product.id)}
                    onChange={() => toggleWishlist(product.id)}
                  />
                </Category>
                <ProductName>{product.name}</ProductName>
                <PriceDiv>₩ {product.price.toLocaleString()}</PriceDiv>
              </ProductDetail>
            </ProductDiv>
          ))}
        <PageDiv>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.ceil(filterProducts.length / ITEMS_PER_PAGE)}
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
