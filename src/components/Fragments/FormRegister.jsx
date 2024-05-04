import Button from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

const FormRegister = () => {
  const handleRegister = (event)=> {
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("fullname", event.target.fullname.value);
    localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    event.preventDefault();
    window.location.href = "/login";
  };
    return (
        <form onSubmit={handleRegister}>
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
          <Button classname="bg-[#604058] rounded-md w-full" type="submit">Register</Button>
        </form>
    );
};

export default FormRegister;