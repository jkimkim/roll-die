let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    //push items to array
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
//log out items from input