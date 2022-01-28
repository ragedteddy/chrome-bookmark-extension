let myBMarks = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const uList = document.getElementById("ulist");

inputBtn.addEventListener("click", () => {
    myBMarks.push(inputEl.value);
    localStorage.setItem("bMarks", JSON.stringify(myBMarks));
    renderList();
    inputEl.value = "";
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