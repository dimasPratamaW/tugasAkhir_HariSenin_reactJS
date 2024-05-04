import propTypes from 'prop-types';

const Button = (props) => {
    const { classname = "bg-black rounded-md", onClick =()=>{}, type = "button", children = "..." } = props;
    return (
      <button className={`h-11 px-6 font-semibold ${classname} text-white`} 
      type={type}
      onClick={()=> onClick()}
      >
        {children}
      </button>
    );                                                                                                     
  };

  Button.propTypes = {
    classname: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
    type: propTypes.elementType.isRequired,
};
  export default Button;