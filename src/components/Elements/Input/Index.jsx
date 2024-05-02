import propTypes from 'prop-types';
import Label from "./Label.jsx";
import Input from "./Input.jsx";

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    );
};

InputForm.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};
export default InputForm;