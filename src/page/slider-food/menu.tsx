import React from 'react'

type Props = {
  activeId:number,
  food:{name:string,id:number,select:boolean}[],
  change:(id:number) => void,
  select:(id:number) => void
}
export default function Menu(props:Props){
  return(
    <div className="menu_wrapper">
      {props.food.map((item, i) => (
        <div
          className={`cursor_p menu_item ${item.select ? 'selected' : ''} ${props.activeId == item.id ? 'active' : ''}`}
          onClick={()=>{ props.change(item.id)}} onDoubleClick={()=> props.select(item.id)} key={i}>
          <p className="cursor_p">{item.name}</p>
        </div>
      ))}
    </div>
  )
}
