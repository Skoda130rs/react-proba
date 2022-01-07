import './App.css';
import ButtonListWithMap from './buttonListWithMap';
import Profile from './profile';
import Profile2 from './profile2';
import Profile3 from './profile3';
import Profile4 from './profile4';
function App() {
  return (
    <div className="App">
      <header className="Appp header">
        <ButtonListWithMap/>
      </header>
      <Profile/>
      <Profile2/>
      <Profile3/>
      <Profile4/>
    </div>
  );
}

export default App;
