import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { AuthContextProvider } from "./context/AutContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sign-up" element={<SignUpPage/>} />
          <Route path="/sign-in" element={<SignInPage/>} />
        </Routes>
      </BrowserRouter>    
    </AuthContextProvider>
  );
};

export default App;
