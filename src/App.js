
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import OurStore from './Pages/OurStore'
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import MainProduct from './Pages/MainProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path='checkout' element={<Checkout/>}/>
              <Route path='product' element={<OurStore/>}/>
              <Route path='product/:id' element={<MainProduct/>}/>
              <Route path='blogs' element={<Blog/>}/>
              <Route path='blogs/:id' element={<SingleBlog/>}/>
              <Route path='comapre-products' element={<CompareProduct/>}/>
              <Route path='wishlist' element={<Wishlist/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<Signup/>}/>
              <Route path='forgot-password' element={<ForgotPassword/>}/>
              <Route path='reset-password' element={<Resetpassword/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
