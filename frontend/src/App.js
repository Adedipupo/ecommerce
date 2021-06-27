import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Homepage from './pages/Homepage.js';
import Productpage from './pages/Productpage.js'
import Cartpage from './pages/Cartpage.js'
import Loginpage from './pages/Loginpage.js';
import Registerpage from './pages/Registerpage.js';
import Profilepage from './pages/Profilepage.js';
import Shippingpage from './pages/Shippingpage.js';
import Paymentpage from './pages/Paymentpage.js';
import Placeorderpage from './pages/Placeorderpage.js';
import Orderpage from './pages/Orderpage.js';
import UserListpage from './pages/UserListpage.js';
import UserEditpage from './pages/UserEditpage.js';
import ProductListpage from './pages/ProductListpage.js';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={Orderpage} />
          <Route path='/shipping' component={Shippingpage} />
          <Route path='/payment' component={Paymentpage} />
          <Route path='/placeorder' component={Placeorderpage} />
          <Route path='/login' component={Loginpage} />
          <Route path='/register' component={Registerpage} />
          <Route path='/profile' component={Profilepage} />
          <Route path='/product/:id' component={Productpage} />
          <Route path='/cart/:id?' component={Cartpage} />
          <Route path='/admin/userlist' component={UserListpage} />
          <Route path='/admin/user/:id' component={UserEditpage} />
          <Route path='/admin/productlist' component={ProductListpage} />
          <Route path='/' component={Homepage} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
