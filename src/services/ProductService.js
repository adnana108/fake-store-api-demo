export const getAllProducts = () => {
    return (
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
    );
};

export const search = (query, products) => {
    const queryLowerCase = query.toLowerCase()
    const result = products.filter((product) => {
        return matchesSearch(queryLowerCase, product);
    });
    console.log("q" + query);
    console.log("p" + products);
    console.log(result);
    return result;
};


const matchesSearch = (query, product) => {
    return query === product.category.toLowerCase();
};

