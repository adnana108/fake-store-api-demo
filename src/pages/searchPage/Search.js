import React from "react";
import DarkButton from "../../components/darkButton/darkButton";
import ReusableBox from "../../components/reusableBox/reusableBox";
import { useState, useEffect, useRef } from "react";
import Card from "../../components/card/card";
import "./search.css";
import { getAllProducts, search } from "../../services/ProductService";
import { useNavigate } from "react-router-dom";


const SearchBar = (props) => {

    const [products, setProducts] = useState([]);
    let [displayedProducts, setDisplayedProducts] = useState([]);
    let navigate = useNavigate();

    const getOneProduct = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                props.setProductDetails(json)
                navigate('/productPage')
            })
    }

    const cardsJSX = displayedProducts.map((product) => (
        <Card
            getOneProduct={() => getOneProduct(product.id)}
            key={product.id}
            title={product.title}
            image={product.image}
        />
    ))
    useEffect(() => {
        getAllProducts().then((json) => {
            setProducts(json);
            setDisplayedProducts(json);
        });
    }, [])


    let inputRef = useRef(null);
    const showFilteredProducts = () => {
        setDisplayedProducts(search(inputRef.current.value, products));
    }
    return (
        <div className="search-page">
            <ReusableBox title="Search" description="Search through Walmart's Catalog below" />
            <div className="search-form">
                <input ref={inputRef} type="text" placeholder="Enter Search Term" />
                <DarkButton
                    onClick={showFilteredProducts}
                    action="Search" />
            </div>
            <ul className="repo-cards">
                {cardsJSX}
            </ul>
        </div>
    );
};

export default SearchBar;