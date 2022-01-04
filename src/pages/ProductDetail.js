import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import ProductService from "../services/productService";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getProductById(id).then((result) => setProduct(result.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{product.userName}</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
