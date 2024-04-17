import About from "../components/About";
import MainLayout from "../layout/MainLayout";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
// import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProudctDetail";
// import ShowProductDetails from "../pages/ShowProuductDetails";
const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetail />,
      },
      {
        path: "product/edit/:id",
        element: <EditProduct />,
      },
    ],
  },
];

export default mainRoutes;
