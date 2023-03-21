import "./card.css";

const Card = (props) => {
    return (
            <div onClick={props.getOneProduct} className="hover item-container">
                <img alt="" src={props.image}></img>
                <div className="product-title">{props.title}</div>
            </div>
    );
};
export default Card;