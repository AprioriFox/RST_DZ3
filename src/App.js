import './App.css';
import FirstClassComponent from './pages/classComponent/firstComponent/firstComponent';
import SecondClassComponent from './pages/classComponent/secondComponent/secondComponent';
import FuncComponent from './pages/funcComponent/funcComponent';



function App() {

  const user = {name: "Anna", age: 19} 

  return (
    <div className="App">
      <FirstClassComponent user= {user}/>
      <SecondClassComponent user={user}/>
      <FuncComponent />
    </div>
  );
}

export default App;
