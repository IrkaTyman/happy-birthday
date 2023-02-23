import React,{useState, useRef,useEffect} from 'react';
import './App.css';
import {food as state} from './constants/defaultFoodState'
import SliderFood from './page/slider-food'
import {Routes,Route, useNavigate} from 'react-router-dom'
import SavePage from './page/save-page'

function App() {
  const [food,setFood] = useState(state)
  const countSelect = useRef(0)
  const [height,setHeight] = useState(0)
  const nav = useNavigate()

  useEffect(()=>{
    setHeight(document.body.clientHeight)
  },[])

  function selectFood(select:boolean,id:number){
    let newFoodList = Array.from(food)
    newFoodList[id].select = select
    countSelect.current+= select ? 1 : -1
    setFood(newFoodList)
  }

  function save(){
    nav('/save')
  }

  return (
    <div className="App" style={{height:height ? height+'px' : '100vh'}}>
      <Routes>
          <Route
            path="/"
            element = {<SliderFood food={food} save={save} select={selectFood} countSelect={countSelect.current}/>}
          />
          <Route path="/save" element = {<SavePage saved={food.filter(item => item.select)}/>}/>
        </Routes>
    </div>
  );
}

export default App;
