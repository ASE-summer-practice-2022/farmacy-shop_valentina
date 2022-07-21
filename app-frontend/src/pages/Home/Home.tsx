import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import { ProductCard } from "../../components";
import { useStore } from "../../hooks";
import { Product } from "../../models";

function Home() {
  const { productStore } = useStore();
  const productCards = productStore.products.map((product: Product) => <ProductCard key={product.id} {...product} />);

  useEffect(() => {
    async function loadPage() {
      await productStore.getProducts();
    }
    loadPage();
  }, []);

  return (
    <Container maxWidth="lg">
      <Stack direction="row" mt={4} gap={3} flexWrap="wrap">
        {productCards}
      </Stack>
    </Container>
  );
}

export default observer(Home);
