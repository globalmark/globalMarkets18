import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";

import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";

const ElectrodomesticoPage: NextPage = () => {
  const { products, isLoading } = useProducts(
    "/products?gender=electrodomestico"
  );

  return (
    <ShopLayout
      title={"Global-Market -electrodomestico"}
      pageDescription={
        "Encuentra los mejores productos de Global Market para su hogar"
      }>
      <Typography variant="h1" component="h1">
        electrodomestico
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para hogar
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default ElectrodomesticoPage;