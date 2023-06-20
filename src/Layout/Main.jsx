import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>main</h1>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Main;