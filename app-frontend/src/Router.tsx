import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./components";
import { Header } from "./layouts";
import { Cart, Home, PageNotFound, Product } from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
