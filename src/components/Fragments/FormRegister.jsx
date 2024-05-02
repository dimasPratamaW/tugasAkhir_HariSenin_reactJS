import Button from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

const FormRegister = () => {
    return (
        <form action="">
          <InputForm
            label="Fullname" 
            type="text" 
            placeholder="Insert Your Fullname" 
            name="fullname"
            /> 
          <InputForm
            label="Email" 
            type="email" 
            placeholder="example@mail.com" 
            name="email"
            />        
            <InputForm
            label="Password" 
            type="password" 
            placeholder="******" 
            name="password"
            />
            <InputForm
            label="Confirm Password" 
            type="password" 
            placeholder="******" 
            name="confirmPassword"
            />   
          <Button classname="bg-blue-500 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;