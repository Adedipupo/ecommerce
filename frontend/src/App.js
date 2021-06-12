import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage';
import Productpage from './pages/Productpage'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homepage} exact />
          <Route path='/product/:id' component={Productpage}  />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
