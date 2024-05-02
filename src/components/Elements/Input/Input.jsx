import propTypes from 'prop-types';

const Input = (props) => {
    const { type, placeholder, name} = props;
    return (
    <input
        type={type}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
        placeholder={placeholder}
        name={name}
        id={name}
    />
    );
};

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};
export default Input;