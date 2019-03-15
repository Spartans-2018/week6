class Service {

    constructor() {
        this.url = "/resources/user-details.json";
    }

    /**
     * Making a remote call using promises
     */
    getUserDetails() {
        return fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                return jsonData;
            })
            .catch((e) => {
                console.error("Exception !!!" + e);
            })
    }

    /**
     * The same operation using async await
     */
    async getUserDetailsAsync() {
        try {
            const response = await fetch(this.url);
            const jsonData = await response.json();
            return jsonData;
        }
        catch (e) {
            console.error("Exception !!!" + e);
        }
    }

    scratch() {
        let array = [];
    }
}



export default Service;