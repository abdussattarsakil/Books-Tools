import ToolsCard from "./ToolsCard";

const AllTools = ({carts ,setCarts}) => {
    return (
        <div className=" space-y-5">
            {/* static */}
            <div className="text-center space-y-3">
                <p className="text-orange-300 font-semibold text-7xl">OUR TOOLKIT</p>
                <h1 className="font-bold text-4xl">Tools Built for Every Stage</h1>
                <p>Practice makes a man perfect</p>
            </div>

            {/* dynamic */}
            <div className="text-center space-x-4 ">
                <button className="btn rounded-full">All Tools</button>
                <button className="btn btn-warning rounded-full">Cart ({carts.length})</button>
            </div>

            {/* dynamic content */}
            <div className="box-border w-fit m-auto">
               <ToolsCard carts={carts} setCarts={setCarts}></ToolsCard>
            </div>
        </div>
    );
};

export default AllTools;