import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';
import Nav from './components/Nav/Nav';

function App() {

  return (
    
    <div className="App">
      <section>
        <Nav/>
      </section>
      
      <section>
        <CardContainer/>
      </section>
    </div>
  );
}

export default App;
