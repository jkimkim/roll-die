//declare items
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let deleteEl = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// let leadsFromLocalStorage = localStorage.getItem("myLeads")
// leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteEl.addEventListener("dblclick", function () {
    localStorage.clear()
    console.log("ouch")
    myLeads = []
    ulEl.innerHTML = "";
    renderLeads()
})

inputEl.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input-btn").click();
    }
});

inputBtn.addEventListener("click", function () {
    //push items to array
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem(myLeads))
    renderLeads();
});
//log out items from input

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target = '_blank' href='" + myLeads[i]+"' >" + myLeads[i] + "</a><li>"
        listItems += `
        <li>
            <a target = '_blank' href='${myLeads[i]}' >
               ${myLeads[i]}
            </a>
        <li>
        `
    }
    ulEl.innerHTML = listItems;
}

// alt array func foreach
