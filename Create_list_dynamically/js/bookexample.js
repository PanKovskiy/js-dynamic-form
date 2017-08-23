var ul = document.createElement('ul');
    document.body.insertBefore(ul, document.body.lastChild);


    while (true) {
        var text = prompt("Insert text");
        if (!text) {
            break;
        }
        var li = document.createElement('li')
        li.textContent = text;
        ul.appendChild(li);
    }