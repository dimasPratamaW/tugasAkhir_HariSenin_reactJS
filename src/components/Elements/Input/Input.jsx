import propTypes from 'prop-types';
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

const Input = (props) => {
    const { type, placeholder, name} = props;
    return (
    <input
        type={type}
        className={`text-base border border-slate-400  rounded w-full py-2 px-3 text-[#111827] placeholder:opacity-85`}
        placeholder={placeholder}
        name={name}
        id={name}
    />
    );
};

// const InputPassword = (props) => {
//     const { type, placeholder, name} = props;
//     return (
//         <div>
//             <input
//             type={type}
//             className={`text-base border border-slate-400 bg- rounded w-full py-2 px-3 text-[#111827] placeholder:opacity-85`}
//             placeholder={placeholder}
//             name={name}
//             id={name}
//             />
//             <FaEye />
//             <FaEyeSlash />
//             </div>      
//     );
// };

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    classname: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};

// InputPassword.propTypes = {
//     name: propTypes.string.isRequired,
//     type: propTypes.string.isRequired,
//     placeholder: propTypes.string.isRequired
// };

// Input.InputPassword = InputPassword;
export default Input;