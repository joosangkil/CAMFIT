
let popsel_back = document.getElementsByClassName("popsel-back")[0];
let popsel = document.getElementsByClassName("popsel")[0];

let camp_list = document.getElementsByClassName("camp-card-box")[0];

console.log(popsel_back);
console.log(popsel);



function OpenSelectSchedule() {
    popsel_back.style.display = "block";

    // document.querySelector(".popsel").classList.add("open");
    if(popsel != null)
        popsel.classList.remove("close");

    popsel.classList.add("open");
}


function CloseSelectSchedule() {
    popsel_back.style.display = "none";
    
    if(popsel != null)
        popsel.classList.remove("open");

    popsel.classList.add("close");
}


function OpenList() {
    camp_list.style.display = "block";

    popsel_back.style.display = "none";
    
    if(popsel != null)
        popsel.classList.remove("open");

    popsel.classList.add("close");
    
}

function CloseList() {
    camp_list.style.display = "none";

}


