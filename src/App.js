import logo from './logo.svg';
import './App.css';
import Functcomp from './components/Functcomp';
import Classcomp from './components/Classcomp';
import State from './components/State';
import Count from './components/Count';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentsComp from './components/ParentsComp';
import IfEles from './components/IfEles';
import MapList from './components/MapList';
import ObjMap from './components/ObjMap';
import Css from './components/Css';
import Forms from './components/Forms';
import Conditional from './components/Conditional';
import MountA from './components/MountA';
import UpdateA from './components/UpdateA';
import Fragment from './components/Fragment';
import ParentComp from './ParentComp';
import RefDemo from './RefDemo';
import ChildProps from './components/ChildProps';
import Mode from './components/Mode';
import Lab from './components/Lab';
import State2 from './State2';
import DessertsList from './components/DessertsList';




const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];



function App() {

  return (
    <div className="App">
     {/* props */}
      {/* <Functcomp name="functional components" heroName="Gorave khatri">
        <p>this is paragraph</p>
        </Functcomp>
      <Functcomp name="functional components" >
      <button>action</button>
      </Functcomp>
       <Classcomp name="Class component" heroName="Heera Lal khatri"/>
       

      <Classcomp name="Class component"/> */}
      {/* <State gorave="Ram Kumar"/>
      <Count total = "gorave" /> */}
      {/* <FunctionClick/>
      <EventBind/> */}
      {/* <ParentsComp/> */}
      {/* <IfEles/> */}
      {/* <MapList/> */}
      {/* <ObjMap/> */}
      {/* <Css name ={false}/> */}
      {/* <Forms/> */}
      {/* <Conditional/> */}
      {/* <MountA/> */}
      {/* <UpdateA/> */}
      {/* <Fragment/> */}
      {/* <ParentComp/> */}
      {/* <RefDemo/> */}
      {/* <ChildProps children={<h2>gorave</h2>}/> */}
      {/* <Mode/> */}
      {/* <Lab/> */}
      {/* <State2/> */}
      <h2>List of low calorie desserts:</h2>
      {/* <DessertsList data={desserts} /> */}
      <ul>
      <DessertsList data={desserts}/>
      <input type="button"></input>

      </ul>
    
      
    </div>
  );
}

export default App;
