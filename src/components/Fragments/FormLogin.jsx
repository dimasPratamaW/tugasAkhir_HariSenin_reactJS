import Button from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";
import api from "../../api.js"; // import the api instance

const FormLogin = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      console.log (api)
      const response = await api.post("/login", { email, password });
      console.log (response)
      // If the login is successful, store the token in local storage
      localStorage.setItem("token", response.data.token);
      window.location.href = "/pos";
    } catch (error) {
      console.error(error);
      // Handle error cases, e.g., invalid credentials
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="Email"
        name="email"
      />
      <InputForm.InputPassword
        label="Password"
        type="password"
        placeholder=""
        name="password"
      />
      <Button classname="bg-[#604058] rounded-md w-full" type="submit">
        Masuk
      </Button>
    </form>
  );
};

export default FormLogin;