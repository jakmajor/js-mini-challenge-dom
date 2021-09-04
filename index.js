/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log(header)


/***** Deliverable 2 *****/

document.getElementById("header").style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

// example of arrow function -> PLAYERS.forEach((variable) => {})

//dynamic version function to make reusable

function printCards(array) {

    array.forEach((player) => {

        let playerContainer = document.createElement("div")
        playerContainer.className = "player-container"
        playerContainer.setAttribute("data-number", player.number)
        

        //h3 
        let h3 = document.createElement("h3")
        h3.innerText = player.name
        

        //em 
        let em = document.createElement("em")
        em.innerText = player.nickname

        //img
        let img = document.createElement("img")
        img.src = player.photo
        img.alt = `${player.name} image`


        // append playerContainer to DOM
        document.body.appendChild(playerContainer);

        // append h3 to div
        playerContainer.appendChild(h3);
        // append em to h3
        h3.appendChild(em);
        // append img to div
        playerContainer.appendChild(img);
    })

}

// call printCards function and add PLAYERS to parameter to run
printCards(PLAYERS);


/***** Deliverable 4 *****/

let removePlayer = document.querySelector("[data-number='7']");
removePlayer.remove();