import propTypes from 'prop-types';
const Label = (props) => {
    const { htmlFor, children } = props;
    return (
        <label 
            htmlFor={htmlFor} 
            className="block text-slate-700 text-lg font-normal mb-2">
            {children}
        </label>
    );
};

Label.propTypes = {
    htmlFor: propTypes.string.isRequired,
    children: propTypes.node.isRequired
};
export default Label;
