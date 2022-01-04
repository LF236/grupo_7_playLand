import '../CSS/shoppingcar.css';
const ShoppingCar = () => {
    return(
        <>
           <main className='Car'>
        <div class="container"/>
            <h3>Mi carrito</h3>
            <div class="cart"/>
                <div class="products"/>
                    <div class="product"/>
                        <img src="/img/home_images/recommendations_img_monoStar.jpg" alt="monopoli_start_wars"/>
                        <div class="product-info"/>
                            <h4 class="product-name">New Game</h4>
                                <h4 class="product-price">$ 1,000</h4>
                                <p class="product-quantity">Qnt: <input value="1" name=""/>
                                <p class="product-remove"/>
                                   <span class="icon icon-bin2"></span>
                                </p>
                    
                    <div class="product"/>
                        <img src="/img/home_images/recommendations_img_monoStar.jpg" alt="monopoli_start_wars"/>
                        <div class="product-info"/>
                            <h4 class="product-name">New Game</h4>
                                <h4 class="product-price">$ 1,000</h4>
                                <p class="product-quantity">Qnt: <input value="1" name=""/>
                                <p class="product-remove"/>
                                    <span class="icon icon-bin2"></span>
                                </p>
                       

                <div class="cart-total"/>
                    <h3>Resumen del pedido</h3>
                    <p>
                        <span>Subtotal</span>
                        <span>$ 1,000</span>
                    </p>
                    <p>Checkout</p> 
        </main>           
        </>
    );
}

export default ShoppingCar;