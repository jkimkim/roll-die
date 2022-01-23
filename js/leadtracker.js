let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    //push items to array
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
//log out items from input
for (i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>"+ myLeads[i]  + "</li>"
}