let myBMarks = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const uList = document.getElementById("ulist");
const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myBMarks.push(tabs[0].url);
        localStorage.setItem("bMarks", JSON.stringify(myBMarks));
        renderList();
    })

})

inputBtn.addEventListener("click", () => {
    myBMarks.push(inputEl.value);
    localStorage.setItem("bMarks", JSON.stringify(myBMarks));
    renderList();
    inputEl.value = "";
})

deleteBtn.addEventListener("dblclick", () => {
    myBMarks = [];
    localStorage.setItem("bMarks", JSON.stringify(myBMarks));
    renderList();
})

function renderList() {
    myBMarks = JSON.parse(localStorage.bMarks);
    uList.innerHTML = "";
    for (let i = 0; i < myBMarks.length; i++) {
        uList.innerHTML += `<li>
                            <a target="_blank" href=" ${myBMarks[i]}">  
                                ${myBMarks[i]} 
                            </a>
                        </li>`;
    }
}

renderList();