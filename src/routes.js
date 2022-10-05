import Home from "./Pages/Home/Home";
import NewFeature from "./Pages/NewFeature/NewFeature";
import NewProduct from "./Pages/NewProduct/NewProduct";
import NewUser from "./Pages/NewUser/NewUser";
import Product from "./Pages/product/Product";
import Products from "./Pages/Products/Products";
import UsersList from "./Pages/Users/UsersList";


let routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <UsersList /> },
    { path: '/newUser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
    { path: '/product/:productID', element: <Product /> },
    { path: '/newFeature', element: <NewFeature /> },
    { path: '/newProduct', element: <NewProduct /> },

]

export default routes;