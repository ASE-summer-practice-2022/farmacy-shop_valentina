import { DeleteSweep } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";

import { CartItem } from "../../components";
import { useStore } from "../../hooks";

function Cart() {
  const { cartStore } = useStore();
  const cartItems = cartStore.cartItems.map((item) => <CartItem key={item.id} {...item} />);

  const clearAll = () => cartStore.clearAll();

  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Stack direction="row">
        <Typography flex={1} variant="h1" align="center">
          Корзина
        </Typography>
        {!!cartStore.cartItems.length && <DeleteSweep fontSize="large" sx={{ cursor: "pointer" }} onClick={clearAll} />}
      </Stack>
      <Stack mt={4} gap={3}>
        {cartItems}
      </Stack>
    </Container>
  );
}

export default observer(Cart);
