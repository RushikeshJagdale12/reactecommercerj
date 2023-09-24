import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import About from './component/about';
import Contact from './component/contact';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/cart';
import Login from './component/login';
import Register from './component/register';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/about' Component={About} />
    <Route exact path='/contact' Component={Contact} />
    <Route exact path='/cart' Component={Cart} />
    <Route exact path='/login' Component={Login} />
    <Route exact path='/register' Component={Register} />


    <Route exact path='/products' Component={Products} />
    <Route exact path='/products/:id' Component={Product} />

    </Routes>
    </>
  );
}

export default App;
