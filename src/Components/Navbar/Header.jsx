import React from "react";
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <img src={logo} className="w-[471px] h-[70px]" alt="" />
      <p className="text-[18px] mt-7 color-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[20px] font-medium text-primary mt-2.5">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
