import Service from './service';

let service = new Service();

let userBadgeClickHandler = () => {
    service.getUserDetails('user')
        .then(function(data) {
            console.log(data);
        })
};

document.querySelectorAll("img")
    .forEach(element => {
        element.addEventListener("click", (event) => {
            // Remove the border from all images
            document.querySelectorAll("img")
                .forEach(e => e.style.border = "");

            // Add the border to this image
            let e = event.currentTarget;
            e.style.border = "1px solid orange";
        });
    });

document.querySelectorAll('.option')
    .forEach(element => {
        element.addEventListener("click", (event) => {
            let e = event.currentTarget;
            e.style.border = "3px solid black";

            let status = document.querySelector(".status");
            status.firstChild.innerText = `You chose ${e.id === "r" ?
        "Rock": e.id === "p" ? "Paper" : "Scissors"}`;
        }, true);
    });
    
document.getElementById('user-badge')
    .addEventListener("click", userBadgeClickHandler);