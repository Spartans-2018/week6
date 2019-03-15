
import Service from './service';

let service = new Service();


let imgClickHandler = (event) => {
    // Remove the border from all images
    document.querySelectorAll("img")
        .forEach(e => e.style.border = "");

    // Add the border to this image
    let e = event.currentTarget;
    e.style.border = "1px solid orange";

    // Lets kill any event propagation from here on.
    event.stopPropagation();
};

let divClickHandler = (event) => {
    let e = event.currentTarget;
    e.style.border = "3px solid black";

    let status = document.querySelector(".status");
    status.firstChild.innerText = `You chose ${e.id === "r" ?
        "Rock" : e.id === "p" ? "Paper" : "Scissors"}`;
};

let userBadgeClickHandler = () => {
    let dataP = service.getUserDetails('user');

    dataP.then((data) => {
        console.log(`Data received ${data.name}`);
    });
};


document.querySelectorAll("img")
    .forEach(element => {
        element.addEventListener("click", imgClickHandler, false);
    });

document.querySelectorAll('.option')
    .forEach(element => {
        element.addEventListener("click", divClickHandler, true);
    });

document.getElementById('user-badge')
    .addEventListener("click", userBadgeClickHandler);