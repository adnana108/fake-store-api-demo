import "./productPage.css";
import { useNavigate } from "react-router-dom";

export const ProductPage = (props) => {

    let navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div onClick={goBack} className="hover container-for-back">
                <img
                    alt="arrow-img"
                    className="back-arrow"
                    src={require("../../common_utilities/back-arrow.png")}
                />
                <span>Back</span>
            </div>
            <div className="product-container">
                <img alt="product-img" className="product-image" src={props.image}/>
                <div className="container-for-details">
                    <h2 className="product-title">
                        {props.title}
                    </h2>
                    <p className="price">${props.price}</p>
                    <article>
                        {props.description}
                    </article>
                    <p className="category-rating">Category: {props.category}</p>
                    <p className="category-rating">Rating: {props.rating}</p>
                    <button className="hover blue-button buy-button">Buy Now</button>
                </div>
            </div>
        </>
    );
};