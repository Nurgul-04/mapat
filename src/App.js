import './App.css';
import Confirm from './comfirum/Confirm';

const array =[
  {
    name:'Nurgul',
    age:23
  },
  {
    name:'Nurgu',
    age:23
  },
  {
    name:'Nurg',
    age:22
  },
  {
    name:'Nur',
    age:21
  },
  {
    name:'gul',
    age:20
  },
]

function App() {
  return (
    <div className="App">
   {
    array.map((el)=>{
      return <Confirm key={el.age} name={el.name} age={el.age} />
    })
   }
    </div>
  );
}

export default App;
