import propTypes from 'prop-types';
import Label from "./Label.jsx";
import Input from "./Input.jsx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import Button from "../Button/Index.jsx";

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    );
};

const InputPassword = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const { label, name, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <div className='flex flex-row focus:outline-none'>    
                <Input name={name}
                type={showPassword ? 'text' : 'password'} 
                placeholder={placeholder}/>
                <Button classname="bg-[#017e84] border-[#017e84] cursor-pointer">
                {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)}/>
                : <FaEyeSlash onClick={() => setShowPassword(!showPassword)}/>}
                </Button>
            </div>    
        </div>
    );
};

InputForm.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};

InputPassword.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};

InputForm.InputPassword = InputPassword;
export default InputForm;