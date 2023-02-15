import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai' //importuinf react icons
import { WiHumidity } from 'react-icons/wi' //importuinf react icons
import { BiWind } from "react-icons/bi";
import { GiSensuousness } from 'react-icons/gi'
import './Description.css'
import { GiWindSlap } from 'react-icons/gi'

function Description(props) {
  return (
    <div className='section section_description'>
      <div className='card'>
        <div className='description_card-icon'>
          <AiOutlineArrowDown /> {/*using react icons */}
          <small>MIN</small>
          <h2> : {props.Min}°{props.units==="metric"?"C":"F"}</h2>
        </div>
      </div>
      <div className='card'>
        <div className='description_card-icon'>
          <AiOutlineArrowUp /> {/*using react icons */}
          <small>MAX</small>
          <h2> : {props.Max}°{props.units==="metric"?"C":"F"} </h2>
        </div>
      </div>
      <div className='card'>
        <div className='description_card-icon'>
          <BiWind /> {/*using react icons */}
          <small>PRESSURE</small>
          <h2> : {props.Pressure} {props.units==="metric"?"Pa":"PSI"}</h2>
        </div>
      </div>
      <div className='card'id='myhumidity'>
        <div className='description_card-icon' >
          <WiHumidity /> {/*using react icons */}
          <small>HUMIDITY</small>
          <h2> : {props.Humidity} g.m-3</h2>
        </div>
      </div>
      <div className='card' id='my feelslike'>
        <div className='description_card-icon' id='my feelslike'>
          <GiSensuousness /> {/*using react icons */}
          <small>FEELS LIKE</small>
          <h2> : {props.FeelsLike}°{props.units==="metric"?"C":"F"}</h2>
        </div>
      </div>
      <div className='card' id='speed'>
        <div className='description_card-icon' >
          <GiWindSlap /> {/*using react icons */}
          <small>WIND SPEED</small>
          <h2> : {props.speed} {props.units==="metric"?"m/s":"mile/hour"}</h2>
        </div>
      </div>
    </div>
  )
}

export default Description