import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
  return (
    // <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </>

    // </Router>
  );
};

export default App;

// {
//   "companyName": "goMart",
//   "clientID": "f30ad52d-df0d-4ead-a0e9-40e7218dfa4e",
//   "clientSecret": "bmalHrtwFuKQfGse",
//   "ownerName": "Deepti",
//   "ownerEmail": "21103156@mail.jiit.ac.in",
//   "rollNo": "21103156"
// }

// {
//   "token_type": "Bearer",
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNTMyNzIzLCJpYXQiOjE3MTE1MzI0MjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYzMGFkNTJkLWRmMGQtNGVhZC1hMGU5LTQwZTcyMThkZmE0ZSIsInN1YiI6IjIxMTAzMTU2QG1haWwuamlpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiZjMwYWQ1MmQtZGYwZC00ZWFkLWEwZTktNDBlNzIxOGRmYTRlIiwiY2xpZW50U2VjcmV0IjoiYm1hbEhydHdGdUtRZkdzZSIsIm93bmVyTmFtZSI6IkRlZXB0aSIsIm93bmVyRW1haWwiOiIyMTEwMzE1NkBtYWlsLmppaXQuYWMuaW4iLCJyb2xsTm8iOiIyMTEwMzE1NiJ9.svKfk_c535b0LC-ZLp-QmNCb81fiPQMo3AA7StsfHfw",
//   "expires_in": 1711532723
// }
