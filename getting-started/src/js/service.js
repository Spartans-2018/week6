class Service {

    constructor() {
        this.url = "/resources/user-details.json";
    }

    async getUserDetails() {
        // return fetch(this.url)
        //     .then(function(response) {
        //         return response.json().then(function(data) {
        //             return data;
        //         });
        //     }, function(error) {
        //         console.error(`Error !! ${e}`);
        //     });

        // return fetch(this.url)
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function(data) {
        //         return data;
        //     })
        //     .catch(function(error) {
        //         console.error(`Error ${error}`);
        //     });

        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(`Error ${error}`);
        }
    }
}

export default Service;