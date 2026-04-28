import { use } from "react";
import { toast } from "react-toastify";

const toolPromise = fetch("./tools.json").then(res => res.json())

const ToolsCard = ({ carts, setCarts }) => {
    const tools = use(toolPromise)
    // console.log(tools)
    const addCarts = (tool) => {
        const isExist = carts.find(cart => cart.id === tool.id);
        if (isExist) {
            toast.warn(`${tool.name} is already added cart`)
            return;
        }
        setCarts([...carts, tool])
        toast.success(`${tool.name}add to cart`)
    }
    console.log(carts);
    return (
        <div>
            <div className="grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    tools.map(tool => (
                        <div className="card w-96 bg-base-100 card-lg shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{tool.name}</h2>
                                <p>{tool.description}</p>
                                <h2>{tool.price}/{tool.period}</h2>
                                <img className="w-2/12" src={tool.icon} alt="" />
                                <div className="justify-end card-actions">
                                    <button onClick={() => addCarts(tool)} className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default ToolsCard;