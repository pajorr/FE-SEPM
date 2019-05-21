export const userService = {
    login,
    logout,
    register,
    menu,
};

function login(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch('https://my-json-server.typicode.com/pajorr/testjson/db', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    console.log(JSON.stringify(user));
    return fetch('http://157.230.253.253:5000/register', requestOptions)
        .then(handleResponse);
}

function menu() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=UTF-8',  }
    };

    return fetch('http://157.230.253.253:5000/showdrink', requestOptions)
        .then(handleResponse)
        .then(res => {
            localStorage.setItem('drinks', JSON.stringify(res));

            return res
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}