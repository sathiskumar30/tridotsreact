import React from 'react'
import './index.css';
import {PiDotFill} from 'react-icons/pi'



const data=[
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_TiUxHEdFQfbw3uAo_SmQuH4BCj7JPdHyw&usqp=CAU",
      detail : "Fashion Brand icons: Shailesh Chaturvedi of Arvind Fashions"
    },{
      img:"https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg",
      detail : "DLF creating new retail space in Delhi for France's Galeries Lafaytte"
    },{
      img:"https://img.forconstructionpros.com/files/base/acbm/fcp/image/2022/11/Stock_fleet_of_trucks.635ac468da689.6377d88e2593d.png?auto=format%2Ccompress&fit=crop&h=288&q=70&w=512",
      detail : "Pe firm Carlyle offloads entirem Carfyle through Rs special-purpose"
    },{
      img:"https://dxminds.com/wp-content/uploads/2019/03/HOW-MUCH-DOES-IT-COST-TO-SET-UP-AN-AI-STORE-LIKE-AMAZON-GO.jpg",
      detail : "How AI is enhancing stores How AI is enhancing stores "
    },{
      img:"https://www.thespruceeats.com/thmb/r7ATFrsdTIPEy6EGZv9xMJeEuXw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peanut-butter-milkshake-4588295-hero-01-05ed2b41de474b4e96eb97c0c687402d.jpg",
      detail : "Shilpa Shetty Kundra invests Kisankonnject is at Rs 120 crore"
    }
  ]


const Section1 = () => {
    return (
        <div className="container">
          <p>Web Specials</p>
          <div className='top-head'>
              <div className='img-1'>
                <p>Rahul Gandhi in Manipur Chopper Ride After Women Protesters Surround </p>
                <p>Rahul Gandhi</p>
              </div>
              <div className='mid-con'>
                <p><PiDotFill style={{fontSize:30,color:"rgb(235, 62, 62)"}}/>Cinema industry welcomes lowering GST rates</p>
                <p><PiDotFill style={{fontSize:30,color:"rgb(235, 62, 62)"}}/>patanjali Ayurved to sell 7% stake in patanjali</p>
                <p><PiDotFill style={{fontSize:30,color:"rgb(235, 62, 62)"}}/>Select Citywalk opens 4 new stores in june</p>
                <p><PiDotFill style={{fontSize:30,color:"rgb(235, 62, 62)"}}/>Govt imposes import restrictins on certain gold</p>
                <p><PiDotFill style={{fontSize:30,color:"rgb(235, 62, 62)"}}/>joom Marketplace offers a global window for sellers</p>
              </div>
              <div className='ad-con'>
    
              </div>
          </div>
          <div className='bottom-con'>
              {data.map(item=><Contents item={item}/>)}
          </div>
        </div>
      );
}



function Contents({item}){
    return<div className='item'>
          <img src={item.img}/>
          <p>{item.detail}</p>
    </div>
  }

export default Section1