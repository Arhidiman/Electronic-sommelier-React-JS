import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Background from './components/Background'
function App() {
  
  return (
    <div className="App">
      <Background
          height={'1200px'}
          name = 'фон'
          width='900px'
          backgroundColor={'#041E3E'}
      />
    </div>
  );
}

export default App;
