import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/Product.js";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import Paginate from "../components/Paginate.js";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

const HomeScreen = () => {
  const {pageNumber} = useParams();
  const { data, isLoading, error } = useGetProductsQuery({pageNumber});

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div>
          <h1>Latest Products</h1>
          <Row>
            {data.products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
          pages={data.pages}
          page={data.page} />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
