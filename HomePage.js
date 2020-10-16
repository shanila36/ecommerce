import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import Products from './Products'
import {Button} from "antd";
import Product from "./Product";
import './HomePage.css'

function HomePage() {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        duration: 1000,
        slidesToShow: 5,
        swipe: false
      };
    return (
        <div>
            <img className='first_image' src='https://i.ibb.co/q9NNvC0/HNH-banner.jpg'></img>
            <img className='second_image' src='https://i.ibb.co/k46Sck8/ADS-Google-Large-Leaderboard-970x90px.png'></img>
            <div>
        <Slider { ...settings }>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2857656/6ec7a754626cf3e7ddbf0c75a608ffa6/lipsy-data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos'  src='https://www.next.co.uk/nxtcms/resource/blob/2828464/791dc5980d69efea320b2f69a4d584af/superdry-data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2858366/ca9cd410c651d34580439c3d20603558/regatta--1--data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2839894/d0c3606ed1d9b70e54151c21dc6e5fbe/f-and-f-bw-data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2839896/ac3d60aee701d447e3a89c8cafb9b78d/fatface-01-c-data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2849038/b729676335b96f3dcc077677eecbbf72/levis-data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/3580202/6100a2485fb3f87031ba694586096c2f/aramni-beautyartboard-1-data.jpg'></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2828458/5a8f61a99d2de8697cf896cea552808f/-0008-nike-black-data.jpg'></img>
          </div>
          
        </Slider>
      </div>
      
      <div className="homepage__row">
          <Product
            id="0001"
            title="Khaki Zip Neck Fleece"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75"
            rating={5}
          />
          <Product
            id="0002"
            title="
            Brushed Flannel Check Long Sleeve Shirt"
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F265210.jpg?alt=media&token=0265a3cf-4c06-4bee-a32d-ed8c0f56a35b"
            rating={5}
          />
          <Product
            id="0003"
            title="Brown Faux Shearling Flight Jacket"
            price={375}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F291558.jpg?alt=media&token=c4db1e73-f7b0-4ccd-974b-9a56a1c02831"
            rating={5}
          />
          <Product
            id="0004"
            title="Check Cosy Cuffed Pyjama Set"
            price={2500}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F583408.jpg?alt=media&token=66558eb9-baaf-4b99-88ce-7609ba8dbe9d"
            rating={5}
          />
        </div>
        <div className="home__row_mobile">
          <Product
            id="0001"
            title="Khaki Zip Neck Fleece"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75"
            rating={5}
          />
          <Product
            id="0002"
            title="
            Brushed Flannel Check Long Sleeve Shirt"
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F265210.jpg?alt=media&token=0265a3cf-4c06-4bee-a32d-ed8c0f56a35b"
            rating={5}
          />
          </div>
          
        <div >
          <img className='fourth_images' src='https://i.ibb.co/N1sN5HP/GA-19-FASHION-SALE-Large-Leaderboard.jpg'></img>
        </div>
      
            
        </div>
    )
}

export default HomePage
