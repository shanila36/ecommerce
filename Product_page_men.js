import React from 'react'
import './Product_page_men.css'
import Slider from 'infinite-react-carousel';
import {Button} from "antd";
import {Link} from "react-router-dom";

function Product_page_men() {
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
            <Link to="/mens-new">
            <img className='upper_image'  src='https://www.next.co.uk/nxtcms/resource/blob/3559056/706c06d16f863b9e83f6c2f4fbc32b4c/shop-mens-new-collection-dtv2-data.jpg'></img>
            </Link>
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
        <div className='card_container'>
            <div className='container'>
            <div className="home__row">
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>

                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886928/1d042692b3fd37b84f844b218eeba15d/knitwear-data.jpg'></img>
                    <h1 className='row_title'>New In</h1>
                    
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    
                    </div>
                    </Link>
                    
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886924/178420a13bd9fe7267cae2b82ed85ddc/jackets---coats-data.jpg'></img>
                    <h1 className='row_title'>Trending</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886926/1a2c0901232256f0d565400e6e304ed4/jeans---trousers-data.jpg'></img>
                    <h1 className='row_title'>Clothing</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886936/9dda6502f7fde47fd16955dbaf22a03e/tailoring-data.jpg'></img>
                    <h1 className='row_title'>Suits and Formalwear</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
            </div>
            <div className="home__row">
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2891202/portrait_ratio2x3/320/480/bef2c839c71ec6b41eaaf521609756b/BI/kids-g24-637551.jpg'></img>
                    <h1 className='row_title'>Footwear</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886930/eeb724387f08c3f057cee012f1cc236c/loungewear---pyjamas-data.jpg'></img>
                    <h1 className='row_title'>Accessories</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886934/4ccde2127d01c50a2a928bf8916f29c4/t-shirts---polos-data.jpg'></img>
                    <h1 className='row_title'>Shop by Brands</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
            </div>
            </div>
            </div>
            <div className='mob_card_container'>
            <div className='container'>
            <div className="home__row">
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>

                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886928/1d042692b3fd37b84f844b218eeba15d/knitwear-data.jpg'></img>
                    <h1 className='row_title'>New In</h1>
                    
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    
                    </div>
                    </Link>
                    
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886924/178420a13bd9fe7267cae2b82ed85ddc/jackets---coats-data.jpg'></img>
                    <h1 className='row_title'>Trending</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
            </div>
            <div className="home__row">
            <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886926/1a2c0901232256f0d565400e6e304ed4/jeans---trousers-data.jpg'></img>
                    <h1 className='row_title'>Clothing</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886936/9dda6502f7fde47fd16955dbaf22a03e/tailoring-data.jpg'></img>
                    <h1 className='row_title'>Suits and Formalwear</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
                
                
            </div>
            <div className="home__row">
            <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2891202/portrait_ratio2x3/320/480/bef2c839c71ec6b41eaaf521609756b/BI/kids-g24-637551.jpg'></img>
                    <h1 className='row_title'>Footwear</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886930/eeb724387f08c3f057cee012f1cc236c/loungewear---pyjamas-data.jpg'></img>
                    <h1 className='row_title'>Accessories</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
                
                
            </div>
            <div className="home__row">
            <div className='row_elements'>
            <div className='row_elements'>
            <Link to="/mens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/blob/2886934/4ccde2127d01c50a2a928bf8916f29c4/t-shirts---polos-data.jpg'></img>
                    <h1 className='row_title'>Shop by Brands</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                </div>            
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default Product_page_men
