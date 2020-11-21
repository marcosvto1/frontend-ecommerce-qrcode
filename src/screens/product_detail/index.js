import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductService from "../../services/product";

const ProductDetailScreen = () => {
  const [product, setProduct] = useState();

  async function loadProductDetail() {
    try {
      const response = await ProductService.findById(1);
      setProduct(response.data[0]);
    } catch (error) {
      alert("Ops! Algo deu errado");
    }
  }

  useEffect(() => {
    loadProductDetail();
  }, []);

  return (
    <>
      <Header />
      {product && <h1> {product.name}</h1>}
    </>
  );
};

export default ProductDetailScreen;
