import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Create from '../createReport/Create';
import Home from '../homepage/App'

function Router() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route exact path='/' component={Home}/>
                        <Route path='/CreateNew' component={Create}></Route>
                        <Navigate to='/' />
                    </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;