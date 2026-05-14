import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../SocialLogin/FindUs';
import QZones from '../SocialLogin/QZones';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZones></QZones>
        </div>
    );
};

export default RightAside;