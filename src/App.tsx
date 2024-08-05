import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import Footer from "./component/Footer";
import IndexHome from "./pages/home/Home";
import SignIn from "./pages/Login/Signin";
import SignUp from "./pages/Login/Signup";
import IdSearch from "./pages/Login/IdSearch";
import PasswordSearch from "./pages/Login/PasswordSearch";
import MyPage from "./pages/MyPage/MyPageMain";
import CustomerMenu from "./component/CustomerBar";
import FrequentlyQuestion from "./pages/CustomerService/FrequentlyQuestion";
import InquiryCRUD from "./pages/CustomerService/InquiryCRUD";
import styled from "styled-components";
import Notification from "./pages/CustomerService/Notification";
import InquiryHistory from "./pages/CustomerService/InquiryHistory";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 페이지 높이를 100vh로 설정 */
`;

const MainContent = styled.main`
  flex: 1; /* 가능한 모든 공간을 차지하도록 설정 */
`;


function App() {
  const location = useLocation();

  const noFooterRoutes = ["/SignUp", "/IdSearch", "/PasswordSearch"];
  const showFooter = !noFooterRoutes.includes(location.pathname);
  
  const noSearchBar = ["/Notification", "/InquiryCRUD", "/FrequentlyQuestion", "/InquiryHistory"];
  const showSearch = !noSearchBar.includes(location.pathname);
  
  const CustomerLine = ["/Notification", "/InquiryCRUD", "/FrequentlyQuestion", '/InquiryHistory'];
  const showCustomer = CustomerLine.includes(location.pathname);


  return (
    <>
    <AppContainer>
      <Header />
      {showSearch && <SearchBar />}
      {showCustomer && <CustomerMenu />}
      <MainContent>

      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/IdSearch" element={<IdSearch />} />
        <Route path="/PasswordSearch" element={<PasswordSearch />} />

        <Route path="/FrequentlyQuestion" element={<FrequentlyQuestion />} />
        <Route path="/InquiryCRUD" element={<InquiryCRUD />} />
        <Route path="/InquiryHistory" element={<InquiryHistory />} />
        <Route path="/Notification" element={<Notification />} />
      </Routes>
      </MainContent>

      {showFooter && <Footer />}
    </AppContainer>
    </>
  );
}

export default App;
