
import { useState } from 'react';
import AllTools from '../components/AllTools';
import Navbar from '../components/Navbar';

const Home = () => {
    const [carts,setCarts]=useState([]);
    const [toggle, setToggle]=useState(false)
    return (
        <div>
            <Navbar carts={carts}></Navbar>
            <AllTools carts={carts} setCarts={setCarts} toggle={toggle} setToggle={setToggle}></AllTools>
        </div>
    );
};

export default Home;