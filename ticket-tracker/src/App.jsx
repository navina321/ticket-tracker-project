import './App.scss';
import { useState } from 'react'
import team from './data/team';
import CardContainer from './components/CardContainer/CardContainer';
import Nav from './components/Nav/Nav';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [employees, setEmployees] = useState(team)
   
  
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput)
        const filteredTeam = team.filter(member => {
            if(member.name.toLowerCase().includes(searchInput)){
                return true;
            } else {
                return false
            }
        })
       setEmployees(filteredTeam)
    };

  return (
    
    <div className="App">
      <section>
        <Nav handleSearch={handleSearch}/>
      </section>

      <section>
        <CardContainer team = {employees}/>
      </section>
    </div>
  );
}

export default App;
