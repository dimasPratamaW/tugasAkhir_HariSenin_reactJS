import Button from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";
import api from "../../api.js"; // import the api instance

const FormRegister = () => {
  const handleRegister = async (event)=> {
    event.preventDefault();
    const email= event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    try {
      const response = await api.post("/register", { email, password, name})
      window.location.href = "/login";
    } catch (error) {
      
    }
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("name", event.target.name.value);
    localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);

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
            name="name"
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