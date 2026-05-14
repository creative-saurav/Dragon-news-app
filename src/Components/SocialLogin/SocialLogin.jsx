import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
             <h2 className='text-xl text-primary font-semibold mb-5'>Login With</h2>
            {/* Google */}
                <button className="btn  text-black border-[#e5e5e5] w-full hover:bg-secondary hover:text-white mb-2">
                <FaGoogle></FaGoogle>
                Login with Google
                </button>
            {/* GitHub */}
                <button className="btn  text-black w-full border-[#e5e5e5] hover:bg-secondary hover:text-white">
                <FaGithub></FaGithub>
                Login with GitHub
                </button>

                
        </div>
    );
};

export default SocialLogin;