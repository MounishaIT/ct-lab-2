import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import LoginPage from './components/Footer/Loginpage';
import Aboutus from './components/Footer/Aboutus';
import Feedback from './components/Footer/Feedback';
import Profile from './components/Footer/Profile';

import SignUpPage from './components/Footer/Signuppage';
import Contact from './components/Footer/Contact';
import Login from "./components/Header/Checkoutform";
import PaymentPage from './components/Header/Paymentpage';
function App() {
  return (
    <>
      <Header />
      <main>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/Aboutus" element={<Aboutus />} />

          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PaymentPage"element={<PaymentPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Connect />
     
      <Footer />
    </>
  );
}

export default App;