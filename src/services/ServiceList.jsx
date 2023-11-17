import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl:weatherImg,
        title:"Plan Tours",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
        imgUrl:guideImg,
        title:"Flights",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
        imgUrl:customizationImg,
        title:"Hotels",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
]

const ServiceList = () => {
  return (
  <>
  {
    serviceData.map((item,index) => (
        <Col lg='3' key = { item }>
            <ServiceCard item={item} />
        </Col>
    ))
  }
    
  </>
  );
}

export default ServiceList