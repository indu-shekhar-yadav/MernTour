import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Flights from '../pages/Flights';
import Hotels from '../pages/Hotels';
import ThankYou from '../pages/ThankYou';
import SearchResultList from '../pages/SearchResultList';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to='/home' /> } />
        <Route path='/home' element={<Home /> } />
        <Route path='/tour' element={<Tour /> } />
        {/* <Route path='/tour/:id' element={<TourDetails /> } /> */}
        <Route path='/tours/:id' element={<TourDetails /> } />

        <Route path='/flights' element={<Flights /> } />
        <Route path='/hotels' element={<Hotels /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register /> } />
        <Route path='/thank-you' element={<ThankYou /> } />
        <Route path='/tour/search' element={<SearchResultList /> } />

    </Routes>
  )
}

export default Router