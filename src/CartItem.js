import React from 'react';

const CartItem = (props) => {

    const {price,title,qty,img} = props.product;
    const {onDecreaseQuantity,onIncreaseQuantity,onDeleteQuantity} = props;


    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
             alt="increase"
             className="action-icons"
             src="https://image.flaticon.com/icons/svg/1828/1828919.svg" 
             onClick={ ()=> {onIncreaseQuantity(props.product)}}
            />
            <img
             alt="decrease"
             className="action-icons"
             src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" 
             onClick={ ()=> {onDecreaseQuantity(props.product)}}
            />
            <img
             alt="delete"
             className="action-icons"
             src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
             onClick={()=> {onDeleteQuantity(props.product.id)}}
            />

          </div>
        </div>
      </div>
    );
  
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;