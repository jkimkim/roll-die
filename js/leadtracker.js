let myLeads = ["www.this.com" , "www.nomesd.com" , "www.coler.value"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    //push items to array
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
//log out items from input
for (i = 0; i < myLeads.length; i++){
    console.log("- " + myLeads[i])
}