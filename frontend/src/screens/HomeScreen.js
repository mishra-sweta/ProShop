import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product.js";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import Paginate from "../components/Paginate.js";
import ProductsCarousel from "../components/ProductsCarousel.js";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductsCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
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
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
