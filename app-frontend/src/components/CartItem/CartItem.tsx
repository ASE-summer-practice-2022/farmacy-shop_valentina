import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";

import { useStore } from "../../hooks";
import { ICartItem } from "../../models";

function CartItem({ id, product, amount, quantity }: ICartItem) {
  const { cartStore } = useStore();

  const updateQty = (value: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const dQty = Number(value.currentTarget.value);
    cartStore.updateCartItem(id, { productId: product.id, quantity: dQty, amount: product.price * dQty });
  };

  const deleteItem = () => cartStore.removeCartItem(id);

  return (
    <Card>
      <Stack direction="row" spacing={3} alignItems="center">
        <Typography variant="h1" align="center">
          {product.name}
        </Typography>
        <Typography align="center" flex={1}>
          {product.description}
        </Typography>
        <Typography variant="h1" align="center">
          {product.price} ₽
        </Typography>
        <Typography variant="h1" align="center">
          {amount}
        </Typography>
        <TextField type="number" value={quantity} onChange={updateQty} />
        <Button variant="contained" onClick={deleteItem}>
          Удалить
        </Button>
      </Stack>
    </Card>
  );
}

export default observer(CartItem);
