import React from "react";
import { useEffect, useState } from "react";
import "../styles/Home.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [activeCompany, setActiveCompany] = useState("AMZ");
  const getData = async (Company) => {
    try {
      const config = {
        headers: {
          Authorization: ` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNTMyNzIzLCJpYXQiOjE3MTE1MzI0MjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYzMGFkNTJkLWRmMGQtNGVhZC1hMGU5LTQwZTcyMThkZmE0ZSIsInN1YiI6IjIxMTAzMTU2QG1haWwuamlpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiZjMwYWQ1MmQtZGYwZC00ZWFkLWEwZTktNDBlNzIxOGRmYTRlIiwiY2xpZW50U2VjcmV0IjoiYm1hbEhydHdGdUtRZkdzZSIsIm93bmVyTmFtZSI6IkRlZXB0aSIsIm93bmVyRW1haWwiOiIyMTEwMzE1NkBtYWlsLmppaXQuYWMuaW4iLCJyb2xsTm8iOiIyMTEwMzE1NiJ9.svKfk_c535b0LC-ZLp-QmNCb81fiPQMo3AA7StsfHfw`,
        },
      };
      const response = await axios.get(
        `http://20.244.56.144/test/companies/${Company}/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
        config
      );
      console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData("AMZ");
  }, []);

  return (
    <>
      <div className="companies-names">
        <Button onClick={() => getData("AMZ")}>AMZ</Button>
        <Button onClick={() => getData("FLP")}>FLP</Button>
        <Button onClick={() => getData("SNP")}>SNP</Button>
        <Button onClick={() => getData("MYN")}>MYN</Button>
        <Button onClick={() => getData("AZO")}>AZO</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Discount</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((index, ele) => {
            return (
              <tr key={ele}>
                <td>activeCompany</td>
                <td>{index.productName}</td>
                <td>{index.rating}</td>
                <td>{index.discount}</td>
                <td>{index.availability}</td>
                <td>{index.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
