
import { useState } from 'react';
import AllTools from '../components/AllTools';
import Navbar from '../components/Navbar';

const Home = () => {
    const [carts,setCarts]=useState([]);
    return (
        <div>
            <Navbar carts={carts}></Navbar>
            <AllTools carts={carts} setCarts={setCarts}></AllTools>
        </div>
    );
};

export default Home;