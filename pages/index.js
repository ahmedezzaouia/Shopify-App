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
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
            height="100"
            alt=""
          />
        </div>
        <div className="product_content">
          <h5>Product title</h5>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available. Wikipedia
            .
          </p>
        </div>
        <div className="product_price">15 </div>
      </div>
    </div>
  </Page>
);

export default Index;
