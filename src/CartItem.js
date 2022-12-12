import React from "react";

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={{color:'#669' } }>phone</div>
                    <div style={{color:'red'}}>Rs 9999</div>
                    <div style={{color:'blue'}}>Qty: 1</div>
                    <div className="cart-items-actions">
                        {/* This is comment for buttons */}
                    </div>
                </div>
            </div>
        );
    }

}

const styles={
    image:{
        height:100,
        width:100,
        borderRadius:10
    }
}

export default CartItem;