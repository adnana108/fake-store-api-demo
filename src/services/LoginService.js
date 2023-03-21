
export const login = (usernameParam, passwordParam) => {
    
        return fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameParam,
                password: passwordParam
            })
        })
        .then(res => {
            return res.ok ? res.json() : {apiError : "The username or password is incorrect."};
        })
};



