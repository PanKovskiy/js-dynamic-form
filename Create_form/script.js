// button.onclick = function () {
//     console.log(exampleFormControlSelect1.options[exampleFormControlSelect1.options.selectedIndex].text);
// }


function addToPage() {
    var elSelect = document.getElementById('exampleFormControlSelect1');
    //var elText = elSelect.options[elSelect.options.selectedIndex].text;
    console.log(elSelect.value);
    var elFormOutput = document.getElementsByName('formoutput')[0];
    console.log(elFormOutput);

    var p = document.createElement('p');
    elFormOutput.append(p);

    var label =document.createElement('label');
    label.setAttribute("for", elSelect.value);
    label.textContent = "Example "+elSelect.value;
    p.prepend(label);
    var ourElement = document.createElement(elSelect.value);
    ourElement.setAttribute("id", elSelect.value);
    p.append(ourElement);

    var buttonRemove = document.createElement('button');
    buttonRemove.setAttribute("id", "buttonRemove");
    buttonRemove.setAttribute("type", "button");
    buttonRemove.setAttribute("class", "btn btn-dark btn-sm");
    // buttonRemove.setAttribute("onclick", "removeFromPage()");
    buttonRemove.textContent = "Remove from page";
    buttonRemove.onclick.bind(buttonRemove)
    p.append(buttonRemove);
}

function removeFromPage() {
    console.log(buttonRemove.parentNode);
    buttonRemove.parentNode.remove();
}

document.getElementById('buttonAdd').onclick = addToPage;
