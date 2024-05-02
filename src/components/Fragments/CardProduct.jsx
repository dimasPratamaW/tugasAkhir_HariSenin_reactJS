import PropTypes from 'prop-types';
import Button from "../Elements/Button/Index"

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
        {children}
    </div>
    )
}

const CardHeader = (props) => {
    const {link, image, alter} = props;
    return (
        <a href={link}>
            <img src={image}
                    alt={alter}
                    className="p-4 rounded-t-lg w-72"
                    />
        </a>
    );
};

const CardBody = (props) => {
    const {name, children} = props;
    return (
        <div
        className="px-5 pb-5 w-72 h-full">
            <a href="#">
                <h5 
                className="text-x font-semibold tracking-tight text-white">
                    {name}       
                </h5>
                <p className="text-m text-white">
                    {children}
                </p>
            </a>
        </div>
    );
};

const CardFooter = (props) => {
    const {price} = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-lg font-bold text-white">{price}</span>
            <Button classname="bg-black">Add to cart</Button>
        </div>
    );
};

CardProduct.propTypes = {
    children: PropTypes.node.isRequired,
  };
CardHeader.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    alter: PropTypes.string.isRequired,
  };
CardBody.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
  };
CardFooter.propTypes = {
    price: PropTypes.node.isRequired,
  };

CardProduct.CardHeader = CardHeader;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;
export default CardProduct;