import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import playingImage from '../../assets/playground.png'
import classImage from '../../assets/class.png'

const QZones = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='text-xl text-primary font-semibold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swimmingImage} alt="" />
                <img src={playingImage} alt="" />
                <img src={classImage} alt="" />
            </div>
        </div>
    );
};

export default QZones;