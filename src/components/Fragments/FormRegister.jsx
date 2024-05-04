import Button from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

const FormRegister = () => {
    return (
        <form action="">
           <InputForm
            label="Email Anda" 
            type="email" 
            placeholder="Email" 
            name="email"
            />     
          <InputForm
            label="Nama Anda" 
            type="text" 
            placeholder="Misalnya John Doe" 
            name="fullname"
            />   
            <InputForm.InputPassword
            label="Password" 
            type="password" 
            placeholder="" 
            name="password"
            />
          <Button classname="bg-[#604058] rounded-md w-full">Register</Button>
        </form>
    );
};

export default FormRegister;