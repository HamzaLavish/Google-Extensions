//chrome://extensions/
let myLeads= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Log out "button clicked!" when the user clicks the "SAVE INPUT" button
inputBtn.addEventListener("click", function() {
  //get value from input field by using "inputEl.value"
  myLeads.push(inputEl.value)
  //clear out the input field
  inputEl.value = ""
  renderLeads()

})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
   // Render the leads in the unordered list using ulEl.textContent
   /* same code
  const li = document.createElement("li")
  li.textContent = myLeads[i]
  ulEl.append(li)
   */
   //ulEl.innerHTML will using the html tags
  //  listItems += "<li><a target = '_blank' href ='" + myLeads + "'>" + myLeads[i] + "</a></li>"
//same as above code
  listItems += `
  <li>
    <a target = '_blank' href ='${myLeads[i]}'>
      ${myLeads[i]}
    </a>
  </li>
  `
  }
  ulEl.innerHTML =listItems
}
