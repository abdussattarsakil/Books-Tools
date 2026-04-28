
const Cart = ({ carts }) => {
    return (
        carts.length == 0
            ?
            <div>
                <h1>Your cart is empty</h1>
                <p>Start exploring to find the perfect tools for your needs!</p>
            </div>

            :
            carts.map(cart =>

                <div >
                    <div key={cart.id} className="mx-auto">
                        <div className="card w-full bg-base-300 card-xs shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{cart.name}</h2>
                                <p>{cart.price}</p>
                            </div>
                        </div>
                    </div>
                </div>

            )

    );
};

export default Cart;