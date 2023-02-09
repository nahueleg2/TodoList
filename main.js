const input = document.querySelector("input");
const addbtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const cleanbtn = document.querySelector(".btn-clean");

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;
    
    if(text !== "") {
        
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(addBtnDelete());
        li.appendChild(p);
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
});

function addBtnDelete(){
    const btnDelete = document.createElement("button");

    btnDelete.textContent = "X";
    btnDelete.className = "btn-delete";

    btnDelete.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");
    if(items.length === 0){
        empty.style.display = "block";
    }
    });
    return btnDelete;
}

cleanbtn.addEventListener("click", (e) =>{
    const list = document.querySelectorAll("li");
    const item = e.li.parentElement;
    for (let index = 0; index < list.length; index++) {
        ul.removeChild(item);
    }
});
