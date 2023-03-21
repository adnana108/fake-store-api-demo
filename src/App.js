import { Route, Routes, useNavigate} from 'react-router-dom';
import { useRef, useState, useEffect } from "react";

import NavBar from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import LoginForm from './pages/loginPage/loginPage';
import SearchBar from './pages/searchPage/Search';
import { login } from './services/LoginService';
import { PrivateRoute } from './services/PrivateRoute';
import { ProductPage } from './pages/productPage/productPage';

import './App.css';


function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loginErrorMessage, setLoginErrorMessage] = useState(null);
  let [productDetails, setProductDetails] = useState("");
  let [loginDescription, setLoginDescription] = useState(null);

  let usernameRef = useRef(null);
  let passRef = useRef(null);
  let navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    login(usernameRef.current.value, passRef.current.value)
      .then(res => {
        if (res.token) {
          setIsLoggedIn(true);
          setLoginErrorMessage(null);
          sessionStorage.setItem('accessToken', res.token);
          navigate("/");
        } else {
          setLoginErrorMessage(res.apiError);
        }
      })
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutIfNecessary = () => {
    if (isLoggedIn) {
      sessionStorage.clear();
      setIsLoggedIn(false);
    }
  };


  const showLoginDescription = () =>{
    if(!isLoggedIn){
      setLoginDescription("Please login to acces your page")
    };
  };

  return (
    <div>
      <NavBar 
        onClickRoute={showLoginDescription} 
        isLoggedIn={isLoggedIn} 
        logoutIfNecessary={logoutIfNecessary} 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/searchPage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <SearchBar setProductDetails={setProductDetails} />
            </PrivateRoute>
          }
        />
        <Route
          path="/loginForm"
          element={<LoginForm
          description={loginDescription}
          isLoggedIn={isLoggedIn}
          passRef={passRef}
          usernameRef={usernameRef}
          onClick={handleClick}
          errorMessage={loginErrorMessage} />}
        />
        <Route
          path="/productPage"
          element={<ProductPage 
            image={productDetails.image} 
            title={productDetails.title} 
            price={productDetails.price}
            description={productDetails.description}
            category={productDetails.category}
            // rating={productDetails.rating.rate}
            // TODO: fix rating call result
            />}
        />
      </Routes>
    </div>
  );
}

export default App;
