import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { AuthContextProvider } from "./context/AutContext";
import NewProductPage from "../src/pages/NewProductPage";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sign-up" element={<SignUpPage/>} />
          <Route path="/sign-in" element={<SignInPage/>} />
          <Route path="/products/:id" element={<ProductPage/>} />
          <Route path="/products/new" element={<NewProductPage/>} />
        </Routes>
      </BrowserRouter>    
    </AuthContextProvider>
  );
};

export default App;
