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

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/shipping' component={Shippingpage} />
          <Route path='/login' component={Loginpage} />
          <Route path='/register' component={Registerpage} />
          <Route path='/profile' component={Profilepage} />
          <Route path='/product/:id' component={Productpage} />
          <Route path='/cart/:id?' component={Cartpage} />
          <Route path='/' component={Homepage} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
