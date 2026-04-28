import ToolsCard from "./ToolsCard";

const AllTools = ({carts ,setCarts , toggle ,setToggle}) => {
    const toggleAll=()=>{
        setToggle(false)
    }
    const toggleCart =()=>{
        setToggle(true)
    }
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
                <button onClick={toggleAll} className={`btn ${toggle?'btn-warning':''}`}>All Tools</button>
                <button onClick={toggleCart} className={`btn ${toggle?'':'btn-warning'}`}>Cart ({carts.length})</button>
            </div>

            {/* dynamic content */}
            <div className="box-border w-fit m-auto">
               <ToolsCard carts={carts} setCarts={setCarts} ></ToolsCard>
            </div>
        </div>
    );
};

export default AllTools;