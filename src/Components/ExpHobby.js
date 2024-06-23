import React from 'react';
import Stack from 'react-bootstrap/Stack';
import "../Styles/exphobby.css";
import Image from 'react-bootstrap/Image';
import expImg from "../Assets/exploreDownImg.png";


const ExpHobby = () => {
  return (
    <Stack gap={3} className='logL'>
      <div className="p-2">
        <p className='paraTit'>
            <span>Explore your </span>
            <span className='cB'>hobby </span>
            <span>or </span>
            <span className='cP'>passion </span>
        </p>
      </div>
      <div className="p-2">
        <p className='para2'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
suppliers, classes, workshops, and places to practice, participate or perform, Your hobby may be
about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
outdoor</p>
      </div>
      <div className="p-2">
        <p className='para2'>
        If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
        products, services or events. Hop on your hobbyhorse and enjoy the ride.
        </p>
        <Image src={expImg} fluid/>
      </div>
    </Stack>
  )
}

export default ExpHobby;