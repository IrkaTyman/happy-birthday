import React,{useState} from 'react'
import Menu from './menu'
import './slider-food.css'

type Props = {
  food: {
    name:string,shortName:string,
    restoran:string,description:string,
    kitchen:string,select:boolean,
    img:string}[],
  select: (select:boolean,id:number) => void,
  countSelect:number,
  save:()=>void
}

export default function SliderFood(props:Props){
  const [activeId, setActiveId] = useState(0)

  function nextFood(){
    setActiveId((prevId) => (prevId+1)%11)
  }

  function prevFood(){
    setActiveId((prevId) => (10+prevId)%11)
  }

  function select(id:number){
    props.select(!props.food[id].select,id)
  }

  return(
    <div className="slider_food__wrapper">
        <Menu
          select={select}
          activeId={activeId}
          change={setActiveId}
          food={props.food.map((item,id) =>{
            return {name:item.shortName,id,select:item.select}})}
        />
        <div className="slide_food__wrapper">

          <div className="slide_food__name">
            <h1>{props.food[activeId].name}</h1>
            <p className="fs19">{props.food[activeId].restoran}</p>
          </div>

          <div className="slide_food__description">
            <h1>Описание блюда</h1>
            <p className="fs19">{props.food[activeId].description}</p>
          </div>

          <div className="food_img">
            <div>
              <img  src={props.food[activeId].img}/>
            </div>
          </div>

          <div className="arrow left-arrow" onClick={prevFood}>
            <p className="cursor_p">{props.food[(10+activeId)%11].shortName}</p>
            <img className="cursor_p" src={require('../../image/right-arrow.png')}/>
          </div>

          <div className="arrow right-arrow" onClick={nextFood}>
            <p className="cursor_p">{props.food[(activeId+1)%11].shortName}</p>
            <img className="cursor_p" src={require('../../image/right-arrow.png')}/>
          </div>

          <img src={require('../../image/list1.png')} className="list list1"/>
          <img src={require('../../image/list2.png')} className="list list2"/>
          <img src={require('../../image/list3.png')} className="list list3"/>
          <img src={require('../../image/list4.png')} className="list list4"/>
          <img src={require('../../image/list5.png')} className="list list5"/>

          <div className={`btn_save ${props.countSelect == 3 ? 'cursor_p' : ''}`} onClick={props.countSelect == 3 ? props.save : () => {}}>
            <h2 className={props.countSelect == 3 ? 'cursor_p' : ''}>{props.countSelect < 3 ? 'Выбери еще' : props.countSelect > 3 ? 'Убери' : 'Выбрать'}</h2>
            <div className={`btn_save__circle ${props.countSelect == 3 ? 'cursor_p' : ''}`}>
              {props.countSelect == 3 ?
                <img className={props.countSelect == 3 ? 'cursor_p' : ''} src={require('../../image/save.png')}/> : <p>{Math.abs(props.countSelect-3)}</p>}
            </div>
          </div>
        </div>
    </div>
  )
}
