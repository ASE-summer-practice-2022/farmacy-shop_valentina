import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "../../hooks";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

function ProductCard({ id, name, description, price }: ProductCardProps) {
  const navigate = useNavigate();
  const { productStore, userStore, cartStore } = useStore();

  const navCard = () => {
    productStore.setCurrentProduct(id);
    navigate(`/product/${id}`);
  };

  const addToCart = () => {
    const quantity = 1;
    const amount = productStore.currentProduct.price * quantity;
    cartStore.createCartItem({ productId: Number(id), quantity, amount });
  };

  return (
    <Box flex={1} flexBasis={300}>
      <Card>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h1" align="center">
            {name}
          </Typography>
          <Typography align="center">{description}</Typography>
          <Typography variant="h1" align="center">
            {price} ₽
          </Typography>
          <Stack direction="row" gap={2}>
            {userStore.isAuthorized && (
              <Button variant="contained" onClick={addToCart}>
                В корзину
              </Button>
            )}
            <Button variant="contained" onClick={navCard}>
              Подробнее
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export default observer(ProductCard);
