import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";

const Homescreen = () => {
  const dispatch = useDispatch();
  // from reducer.
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest PRoducts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Card className='my-3 p-3 rounded'>
                  <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant='top' />
                  </Link>

                  <Card.Body>
                    <Link to={`product/${product._id}`}>
                      <Card.Title as='div'>
                        <strong>{product.name}</strong>
                      </Card.Title>
                    </Link>
                    <Card.Text as='div'>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </Card.Text>
                    <Card.Text as='h3'>${product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
