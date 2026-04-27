import { use } from "react";

const toolPromise = fetch("./tools.json").then(res => res.json())

const ToolsCard = () => {
    const tools = use(toolPromise)
    console.log(tools)
    return (
        <div className="grid grid-cols-2 justify-items-center gap-5">
            {
                tools.map(tool => (
                    <div className="card w-96 bg-base-100 card-lg shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{tool.name}</h2>
                            <p>{tool.description}</p>
                            <img src="" alt="" />
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ToolsCard;