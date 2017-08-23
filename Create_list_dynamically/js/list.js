function addElementToLIst(text) {
    if (document.querySelector('ul')) {
        var li= document.createElement ('li');
        li.textContent = text;
        document.querySelector('ul').appendChild(li);
    }
    else {
        var listUl= document.createElement ('ul');
        document.body.insertBefore(listUl, document.body.lastChild);
        li = document.createElement ('li');
        li.textContent = text;
        listUl.appendChild(li);

    }

}

while (text = prompt("Insert text")) {
    addElementToLIst(text);
}


