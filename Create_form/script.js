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
    buttonRemove.textContent = "Remove";
    buttonRemove.onclick = removeFromPage.bind(null, div);
    div.append(buttonRemove);

    if (!(document.body.firstElementChild.querySelector("button[type=submit]"))) {
        console.log(document.body.firstElementChild.lastElementChild);
        var buttonSubmit = document.createElement('button');
        buttonSubmit.setAttribute("type", "submit");
        buttonSubmit.setAttribute("class", "btn btn-primary float-right");
        buttonSubmit.textContent = "Submit";
        document.body.firstElementChild.append(buttonSubmit);
    }


}

if (document.getElementsByName('formoutput').length > 1 ) {
    document.body.firstElementChild.querySelector("button[type=submit]").remove();
};

function removeFromPage(el) {
    console.log(el);
    el.remove();
}

document.getElementById('buttonAdd').onclick = addToPage;
