import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className="my-5">
            <h2 className="text-xl text-primary font-semibold mb-5">
                Find Us On
            </h2>

            <div className="border border-[#E7E7E7] rounded-md overflow-hidden bg-white">
                <div className="flex items-center gap-4 px-4 py-2 border-b border-[#E7E7E7] cursor-pointer hover:bg-gray-50 transition">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                        <FaFacebookF className="text-[#1877F2] text-lg" />
                    </div>
                    <h3 className="text-[16px] font-medium text-accent">
                        Facebook
                    </h3>
                </div>
                <div className="flex items-center gap-4 px-2 py-4 border-b border-[#E7E7E7] cursor-pointer hover:bg-gray-50 transition">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                        <FaTwitter className="text-[#1DA1F2] text-lg" />
                    </div>
                    <h3 className="text-[16px] font-medium text-accent">
                        Twitter
                    </h3>
                </div>
                <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-50 transition">
                    <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                        <FaInstagram className="text-[#E4405F] text-lg" />
                    </div>
                    <h3 className="text-[16px] font-medium text-accent">
                        Twitter
                    </h3>
                </div>

            </div>
        </div>
    );
};

export default FindUs;