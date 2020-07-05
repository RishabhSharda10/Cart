import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){

    super();

    this.state = {
        products : [
          {
      
            price:9999,
            title:"Mobile",
            qty:2,
            img:"https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",
            id:1
          },
          {
      
            price:99,
            title:"Watch",
            qty:4,
            img:"https://i.gadgets360cdn.com/products/large/huaweiwatchgt2-db-577x800-1568963268.jpg",
            id:2
          },
          {
      
            price:99999,
            title:"Laptop",
            qty:1,
            img:"https://images-na.ssl-images-amazon.com/images/I/81EoCoV-8tL._SX679_.jpg",
            id:3
          }      
        ]
       }
     }

     handlerIncreaseQuantity = (product) => {


      const {products} = this.state
      const index = products.indexOf(product);
      products[index].qty += 1;



      this.setState({
        products
      })

    }


    handlerDecreaseQuantity = (product) => {


    if (product.qty !== 0){      
      const {products} = this.state
      const index = products.indexOf(product);
      products[index].qty -= 1;



      this.setState({
        products
      })

    }

    }

    getCartCount = () => {


    const {products} = this.state

    let count = 0;


    products.forEach((product)=>{
      
      count +=  product.qty; 
    
    })

    return count;



      }






    handlerDeleteQuantity = (id) => {


      const {products} = this.state;
      const items = products.filter((item)=> item.id !== id );

      this.setState({
        products:items
      })
    }


    getCartTotal = () => {
      
      const {products} = this.state

      let CartTotal = 0;
  
      products.forEach((product)=>{
        
        CartTotal +=  product.price * product.qty; 
      
      })
  
      return CartTotal;
    }



render(){
 
  return (
    <div className="App">
      <Navbar
      count={this.getCartCount()}
      />
      <Cart
      products = {this.state.products}
      onIncreaseQuantity={this.handlerIncreaseQuantity}
      onDecreaseQuantity={this.handlerDecreaseQuantity}
      onDeleteQuantity={this.handlerDeleteQuantity}
      />
      <div className="total-Cart">Total Price= {this.getCartTotal()}</div>
    </div>
  );
}

}


export default App;
