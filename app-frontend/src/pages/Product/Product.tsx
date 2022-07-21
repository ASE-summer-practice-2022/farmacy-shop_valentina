import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";

import { useStore } from "../../hooks";

function Product() {
  const { productStore, cartStore, userStore } = useStore();
  const { id } = useParams();

  const addToCart = () => {
    const quantity = 1;
    const amount = productStore.currentProduct.price * quantity;
    cartStore.createCartItem({ productId: Number(id), quantity, amount });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Card>
        <Stack direction="row" alignItems="center" gap={3}>
          <Typography align="center" variant="h1">
            {productStore.currentProduct.name}
          </Typography>
          <Typography flex={1} align="center">
            {productStore.currentProduct.description}
          </Typography>
          <Typography align="center" variant="h1">
            {productStore.currentProduct.price} ₽
          </Typography>
          {userStore.isAuthorized && (
            <Button variant="contained" onClick={addToCart}>
              В корзину
            </Button>
          )}
        </Stack>
      </Card>
    </Container>
  );
}

export default observer(Product);
