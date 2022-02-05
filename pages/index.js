import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page>
    <Heading>Manage Your Products With This Inventory Tracker</Heading>
    <div className="status">
      <div className="status_button">
        Anvailable Products <br /> <span>{26}</span>
      </div>
      <div className="status_button">
        Nearly Anvailable <br />
        <span>{10}</span>
      </div>
    </div>
    <div className="emptyState">
      Click on The Two Buttons Above To show which Products is Anvailable or
      Nearly to finish
    </div>
    <div className="productsList">
      <div className="productCard">
        <div className="productCard_image">
          <img src="" alt="" />
          image
        </div>
        <div className="product_content">
          <h5>Product title</h5>
          <p>Product Description....</p>
        </div>
        <div className="product_price">15.05$</div>
      </div>
    </div>
  </Page>
);

export default Index;
