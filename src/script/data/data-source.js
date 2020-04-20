class DataSource {
    static searchMovie(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=13d9a0c5&s=${keyword}`)
            .then(res => res.json())
            .then(res => {
                if (res.Response) {
                    return Promise.resolve(res);
                }
            })
            .catch(() => Promise.reject(`Oops something wrong, please check your internet connection`));
    }
}

export default DataSource;