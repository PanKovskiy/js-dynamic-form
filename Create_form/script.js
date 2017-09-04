// button.onclick = function () {
//     console.log(exampleFormControlSelect1.options[exampleFormControlSelect1.options.selectedIndex].text);
// }


function addToPage() {
    var elSelect = document.getElementById('exampleFormControlSelect1');
    console.log(elSelect.value);
    var elFormOutput = document.getElementsByName('formoutput')[0];
    console.log(elFormOutput);

    var div = document.createElement('div');
    div.setAttribute("class", "form-inline");
    elFormOutput.append(div);

    var label = document.createElement('label');
    label.setAttribute("for", elSelect.value);
    // label.setAttribute("class", "mr-2");
    label.textContent = "Example " + elSelect.value;
    div.prepend(label);

    switch (elSelect.value) {
        case 'input':
        case 'textarea':

            var ourElement = document.createElement(elSelect.value);
            div.append(ourElement);
            ourElement.classList.add('element');
            console.log(div);
            break;

        case 'checkbox':
        case 'radio':
            var mainDiv=document.createElement('div');
            div.append(mainDiv);

            var divForCheckbox = document.createElement('div');
            divForCheckbox.setAttribute('class', 'form-check');
            mainDiv.append(divForCheckbox);

            var input = document.createElement('input');
            input.setAttribute('class', 'form-check-input');
            input.classList.add('element');
            input.setAttribute('type', elSelect.value);
            input.setAttribute('name', 'example'+elSelect.value);
            input.setAttribute('value', 'option1');
            // inputOne.textContent = "First";
            divForCheckbox.append(input);
            divForCheckbox.append(input.value);

            divForCheckbox = document.createElement('div');
            divForCheckbox.setAttribute('class', 'form-check');
            mainDiv.append(divForCheckbox);


            var input = document.createElement('input');
            input.setAttribute('class', 'form-check-input');
            input.classList.add('element');
            input.setAttribute('type', elSelect.value);
            input.setAttribute('name', 'example'+elSelect.value);
            input.setAttribute('value', 'option2');
            // inputTwo.textContent = " Second";
            divForCheckbox.append(input);
            divForCheckbox.append(input.value);
            break;
    }
    var buttonRemove = document.createElement('button');
    buttonRemove.setAttribute("type", "button");
    buttonRemove.setAttribute("class", "btn btn-dark");
    buttonRemove.classList.add('buttonRemove');
    buttonRemove.textContent = "Remove";
    buttonRemove.onclick = removeFromPage.bind(null, div);
    div.append(buttonRemove);

    if (!(document.body.firstElementChild.querySelector("button[type=submit]"))) {
        console.log("Testcreate buttonSubmit");
        var div = document.createElement('div');
        document.body.firstElementChild.append(div);
        var buttonSubmit = document.createElement('button');
        buttonSubmit.setAttribute("id", "buttonSubmit");
        buttonSubmit.setAttribute("type", "submit");
        buttonSubmit.setAttribute("class", "btn btn-primary float-left");
        buttonSubmit.textContent = "Submit";
        div.append(buttonSubmit);
        document.getElementById('buttonSubmit').onclick = submitToPage;
    }


}

function removeFromPage(el) {
    console.log(el);
    el.remove();
    if (!(document.body.getElementsByClassName("buttonRemove")[0])) {
        document.getElementById('buttonSubmit').remove();
    };
}

function submitToPage() {
    var el = document.getElementsByClassName("element");
    for (var i = 0; i < el.length; i++) {
        var p = document.createElement('p');
        document.body.firstElementChild.append(p);
        p.innerHTML = el[i].tagName + 'el[i].value';
        // p.append(el[i].tagName);
        // p.append(el[i].value);
        console.log(el[i].value);
    }
    for (var key in el) {
        console.log(key + "-----"+el[key]);
    }
}
document.getElementById('buttonAdd').onclick = addToPage;
// document.getElementById('buttonSubmit').onclick = submitToPage;