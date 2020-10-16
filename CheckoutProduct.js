import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";
import ClearIcon from '@material-ui/icons/Clear';
import { InputNumber } from 'antd';


function CheckoutProduct({id, image, title, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
      const [anchorEl, setAnchorE1] = React.useState(null);
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
      };
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

 function onChange(value) {
    console.log('changed', value);
    
  }  


  return (
      
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>৳</small>
          <strong>{price}</strong>
          
        </p>
        <InputNumber min={1} max={10} defaultValue={1} step={1} 
        onChange={onChange}  />
               

      </div>
      
      <ClearIcon className='remove_icon'  onClick={removeFromBasket}></ClearIcon>
    
    </div>
    
    
    
  );
}

export default CheckoutProduct;
