import Inquiry from "../pages/MyPage/Inquiry";

//! 유저 타입
export interface User {
  id: string;
  password: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
}

//! 예약확인 타입
export interface Reservation {
  id: string;
  name: string;
  phoneNumber: string;
  reservationNumber: number
}

//! 숙소 검색 바
export interface SearchBarFilter {
  city: Location;
  date: string;
  person: number;
} 

//! 공지사항 
export type Announcement = {
  id: number
  title: string;
  content: string;
  author: string;
  useFade: boolean;
}

//! 문의 사항
export type Inquiry = {
  id: string;
  category: InquiryType
  title: string;
  content: string;
  image: File | null
}

//! 문의사항 유형 선택
export type InquiryType = 
  | 'payment' 
  | 'cancellation' 
  | 'refund'

//! 여행지 타입
export type Location =
  | '서울'
  | '부산'
  | '경주'
  | '제주도'
  | '가평'
  | '강릉'
  | '여수'
  | '전주'
  | '해남'
  | '대구';

//! 숙소 타입
export type Accommodation =
  | '호텔&리조트'
  | '펜션&풀빌라'
  | '캠핑&글램핑';

//! 레저 & 티켓 타입
export type Ticket =
  | '관광'
  | '테마파크'
  | '레저스포츠'
  | '전시&공연';
  
  export type Facilities =
  | '사우나'
  | '수영장'
  | '바베큐'
  | '세탁 가능'
  | '스파/월풀'
  | '와이파이'
  | '에어컨'
  | '욕실용품'
  | '샤워실'
  | '조식포함'
  | '무료주차'
  | '반려견 동반'
  | '객실 내 취사'
  | 'OTT'
  | '매진숙소 제외'
  | '객실 내 흡연';


  //! 숙소 상품 타입
  export interface BerthProduct {
    id: number;
    img: string;
    name: string;
    price: string;
    //? 지역 카테고리
    city: Location
    //? 숙소 카테고리
    accommodationCategory: Accommodation[];
    //? 편의시설 카테고리
    facility: Facilities[];
  }

  //! 티켓 상품 타입
  export interface TicketProduct {
    id: number;
    img: string;
    name: string;
    price: string;
    //? 지역 카테고리
    city: Location
    //? 티켓 카테고리
    TicketCategory: Ticket;

  }