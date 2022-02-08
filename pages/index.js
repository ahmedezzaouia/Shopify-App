import { Heading, Page } from "@shopify/polaris";
import GET_PRODUCTS from "../graphql/get_products";
import { useQuery } from "react-apollo";
import React, { useState, useEffect } from "react";

const Index = () => {
  console.log("index start");
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (!data || data === null) return <div>loading...</div>;

  console.log("data", data?.products?.edges);
  const FormatedProducts = data?.products?.edges.map((item) => {
    return {
      title: item?.node?.title,
      description: item?.node?.description,
      quantity: item?.node?.totalInventory,
      image: item?.node.small_image?.edges[0]?.node?.src,
    };
  });

  const filterProducts = (isAnvailable) => {
    if (isAnvailable === 0) {
      const filtered = FormatedProducts.filter((item) => item.quantity === 0);
      setProducts(filtered);
    } else {
      const filtered = FormatedProducts.filter(
        (item) => item.quantity >= 1 && item.quantity <= 4
      );
      setProducts(filtered);
    }
  };

  return (
    <Page>
      <Heading>
        Manage Your Products With <br />
        This Inventory Tracker App
      </Heading>
      <div className="status">
        <div className="status_button" onClick={() => filterProducts(0)}>
          unavailable Products
        </div>
        <div className="status_button" onClick={() => filterProducts(1)}>
          Nearly unavailable
        </div>
      </div>

      <div className="productsList">
        {products?.length === 0 || products === null ? (
          <div className="emptyState">
            Click on The Two Buttons Above To show which Products is Anvailable
            or Nearly to finish
          </div>
        ) : (
          products.map((item) => (
            <div className="productCard">
              <div className="productCard_image">
                <img src={item.image} height="100" alt="" />
              </div>
              <div className="product_content">
                <h5>{item.title} </h5>
                <p>{item.description} </p>
              </div>
              <div className="product_price">{item.quantity}</div>
            </div>
          ))
        )}
      </div>
    </Page>
  );
};

export default Index;
