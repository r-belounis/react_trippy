class Api {

    getHome = () => {
        const url = Config.host + "/api/home";
        console.log("This is the url from API :", url);
        const res = fetch(url);
        res.json()
        console.log("This is the response from API :", url);
    }
}

export default new Api();