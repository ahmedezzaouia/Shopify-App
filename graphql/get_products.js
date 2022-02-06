import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  {
    products(first: 100) {
      edges {
        node {
          description
          id
          title
          status
          totalInventory
          tracksInventory
          small_image: images(first: 1, maxWidth: 360) {
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCTS;
