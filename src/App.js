import './App.css';
import './Adaptive.css'
import Header from './components/Header/Header'
import TopSection from './components/TopSection/TopSection'
import MiddleSection from './components/MiddleSeciton/MiddleSection'
import BottomSection from './components/BottomSection/BottomSection'
import Footer from './components/Footer/Footer'

function App(props) {
  return (
    
    <form id = 'app' >
      <div className='app-container'>
        <Header/>
        <TopSection/>
        <MiddleSection/>
        <BottomSection/>
        <Footer/>
      </div>
    </form>
  );
}

export default App;
