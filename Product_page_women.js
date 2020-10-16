import React from 'react'
import './Product_page_women.css'
import Slider from 'infinite-react-carousel';
import {Button} from "antd";
import {Link} from "react-router-dom";

function Product_page_women() {
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
            <Link to="/womens-new">
            <img className='upper_image'  src='https://www.next.co.uk/nxtcms/resource/blob/3573974/4a68e1d573088b53f30a0c2dbc18e31a/hero-data.jpg'></img>
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
                <Link to="/womens-new">
                    <div>

                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886880/portrait_ratio2x3/320/480/ab3df1dae7521fcd3ce37d4d93513b36/LQ/g81-mb-sh077644-lm-079.jpg'></img>
                    <h1 className='row_title'>New In</h1>
                    
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    
                    </div>
                    </Link>
                    
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886860/portrait_ratio2x3/320/480/3c534952654de9cb06e98eebf146d1/OY/g81-mb-sh062349-lm-237.jpg'></img>
                    <h1 className='row_title'>Trending</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/R43120s.jpg'></img>
                    <h1 className='row_title'>Wedding Wear</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886858/portrait_ratio2x3/320/480/9e173f4e065ae12b3ce13d9887515a60/MB/g81-mb-sh060694-lm-134.jpg'></img>
                    <h1 className='row_title'>Clothing</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
            </div>
            <div className="home__row">
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886862/portrait_ratio2x3/320/480/205adc570d05dd3ab4a19cd87044121a/Rk/g81-mb-sh064181-lm-044.jpg'></img>
                    <h1 className='row_title'>LINGERIE & NIGHTWEAR</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G71/shotview-315x472/8075/722-277s.jpg'></img>
                    <h1 className='row_title'>Beauty</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G69/shotview-315x472/120/524-222s.jpg'></img>
                    <h1 className='row_title'>Shoes</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/363213s.jpg'></img>
                    <h1 className='row_title'>Accessories</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
            </div>
            <div className="home__row">
                <div className='row_element'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2889522/portrait_ratio2x3/320/480/7750574e64c3ddf8475b80dc2aeae790/Bb/g81-mb-sh069861-lm-1276.jpg'></img>
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
                <Link to="/womens-new">
                    <div>

                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886880/portrait_ratio2x3/320/480/ab3df1dae7521fcd3ce37d4d93513b36/LQ/g81-mb-sh077644-lm-079.jpg'></img>
                    <h1 className='row_title'>New In</h1>
                    
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    
                    </div>
                    </Link>
                    
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886860/portrait_ratio2x3/320/480/3c534952654de9cb06e98eebf146d1/OY/g81-mb-sh062349-lm-237.jpg'></img>
                    <h1 className='row_title'>Trending</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
            </div>
            <div className="home__row">
            <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/R43120s.jpg'></img>
                    <h1 className='row_title'>Wedding Wear</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886858/portrait_ratio2x3/320/480/9e173f4e065ae12b3ce13d9887515a60/MB/g81-mb-sh060694-lm-134.jpg'></img>
                    <h1 className='row_title'>Clothing</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
                
                
            </div>
            <div className="home__row">
            <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2886862/portrait_ratio2x3/320/480/205adc570d05dd3ab4a19cd87044121a/Rk/g81-mb-sh064181-lm-044.jpg'></img>
                    <h1 className='row_title'>LINGERIE & NIGHTWEAR</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G71/shotview-315x472/8075/722-277s.jpg'></img>
                    <h1 className='row_title'>Beauty</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
            </div>
            <div className="home__row">
            <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G69/shotview-315x472/120/524-222s.jpg'></img>
                    <h1 className='row_title'>Shoes</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/363213s.jpg'></img>
                    <h1 className='row_title'>Accessories</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
            </div>
            <div className="home__row">
                <div className='row_element'>
                <Link to="/womens-new">
                    <div>
                    <img className='row_images' src='https://www.next.co.uk/nxtcms/resource/image/2889522/portrait_ratio2x3/320/480/7750574e64c3ddf8475b80dc2aeae790/Bb/g81-mb-sh069861-lm-1276.jpg'></img>
                    <h1 className='row_title'>Shop by Brands</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default Product_page_women
