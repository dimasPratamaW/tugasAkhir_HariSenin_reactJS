import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
    const {children, type} = props;
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="self-center text-5xl font-bold mb-2 text-[#714b67]">o<span className='text-[#6C757D]'>doo</span></h1>
          <p className="font-sans text-[#0e616e] bg-[#d1ecf1] border-[#b9e3ea] p-4 mb-8 place-self-center rounded-[0.625rem]">
          Akses dan kelola instance dari akun Odoo ini.
          </p> 
            {children}
          <p className="text-sm mt-5 text-center">
              {/* {type === "login" ? "Tidak punya akun? " : "Saya sudah memiliki akun"} */}
              <Link to={type === "login" ? "/register" : "/login"}
              className="font-bold text-blue-600">
              {type === "login" ? "Tidak punya akun?" : "Saya sudah memiliki akun"}
              </Link>
          </p>  
        </div>
      </div>
    );
};

AuthLayout.propTypes = {
  // title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;