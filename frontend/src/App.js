import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage';
import Productpage from './pages/Productpage'
import Cartpage from './pages/Cartpage'
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/login' component={Loginpage} />
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
