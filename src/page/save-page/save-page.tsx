import React,{useRef} from 'react'
import './save-page.css'
import ReactToPrint from 'react-to-print';

type Props = {
  saved:{name:string,shortName:string,
  restoran:string,description:string,
  kitchen:string,select:boolean,
  img:string}[],
}
export default function SavePage(props:Props){
  const componentRef = useRef(null);
  return (
    <div>
    <div className="save_page__wrapper">

      <div className="save_page__great">
        <h1>Рада, что ты определилась)</h1>
        <p className="fs19">
        Тут текст поздравления, который выклыдвать я не буду)) Но можешь прочиать этот стих Маяковского:
        <br/>Не смоют любовь
        <br/>ни ссоры,
        <br/>ни версты.
        <br/>Продумана,
        <br/>выверена,
        <br/>проверена.
        <br/>Подъемля торжественно стих стокоперстый,
        <br/>клянусь —
        <br/>люблю
        <br/>неизменно и верно!
        </p>
      </div>

      <img src={require('../../image/list1.png')} className="list list1"/>
      <img src={require('../../image/list2.png')} className="list list2"/>
      <img src={require('../../image/list3.png')} className="list list3"/>
      <img src={require('../../image/list4.png')} className="list list4"/>
      <img src={require('../../image/list5.png')} className="list list5"/>
      <img src={require('../../image/list5.png')} className="list list6"/>
      <img src={require('../../image/list2.png')} className="list list7"/>
      <img src={require('../../image/list3.png')} className="list list8"/>
      <img src={require('../../image/list3.png')} className="list list9"/>

      <div className="save_page__menu">
        <h1>Твое меню на день:</h1>
        {props.saved.map((item,i)=>(
          <div className="saved_menu__item">
          <p key={i} className="fs19">{item.name + ' - ' + item.restoran}</p>
          <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
