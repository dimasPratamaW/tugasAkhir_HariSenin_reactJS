import AuthLayout from "../../components/Layouts/AuthLayout";
import FormLogin from "../../components/Fragments/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout type="login">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;