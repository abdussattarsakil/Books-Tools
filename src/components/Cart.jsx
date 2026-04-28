
const Cart = ({ carts }) => {
    return (
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