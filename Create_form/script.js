function addToPage() {
    let container = document.getElementById('formoutput'),
        controlName = '',
        controlHTML = '';
    switch (document.getElementById('exampleFormControlSelect1').value) {
        case 'input':
            controlName = 'input';
            controlHTML = '<input class="element">';
            break;
        case 'textarea':
            controlName = 'textarea';
            controlHTML = '<textarea class="element"></textarea>';
            break;
        case 'checkbox':
            controlName = 'checkbox';
            controlHTML =
                `<div>
                    <div class="form-check">
                        <input class="form-check-input element" type="checkbox" name="examplecheckbox" value="option1" />option1
                    </div>
                    <div class="form-check">
                        <input class="form-check-input element" type="checkbox" name="examplecheckbox" value="option2">option2
                    </div>
                </div>`;
            break;
        case 'radio':
            controlName = 'radio';
            controlHTML =
                `<div>
                    <div class="form-check">
                        <input class="form-check-input element" type="radio" name="exampleradio" value="option1">option1
                    </div>
                    <div class="form-check">
                        <input class="form-check-input element" type="radio" name="exampleradio" value="option2">option2
                    </div>
                </div>`;
            break;

        default:
            return false;
    }

    container.insertAdjacentHTML('beforeend',
        `<div class="form-inline added-form-block">
            <label for="input">Example ${controlName}</label>
            ${controlHTML}
            <button type="button" class="btn btn-dark buttonRemove">Remove</button>
        </div>`
    );

    bindRemoveEvent();
    createButtonSubmit();
}

function createButtonSubmit() {
    if (!document.getElementById('buttonSubmit')) {
        document.getElementById('formoutput').insertAdjacentHTML('afterEnd',
            `<div class="row divSubmit">
                <button id="buttonSubmit" type="submit" class="btn btn-primary">Submit</button>
            </div>`
        );

        document.getElementById('buttonSubmit').onclick = submitToPage;
    }

}

function removeFromPage(index) {
    document.querySelector(`.added-form-block:nth-child(${index})`).remove();

    bindRemoveEvent();

    if (document.getElementById('formoutput').childElementCount === 0) {
        document.querySelector('.divSubmit').remove();
    }
}

function bindRemoveEvent() {
    document.querySelectorAll(".buttonRemove").forEach((obj, index) => obj.onclick = removeFromPage.bind(this, index + 1));
}

function submitToPage() {
    let outHTML = '';
    document.querySelectorAll(".added-form-block .element").forEach(obj => {
        let value = '';
        switch (obj.tagName.toLowerCase()) {
            case 'input':
                value = obj.value;
                if (obj.type == 'radio' || obj.type == 'checkbox') {
                    value += `->${obj.checked}`;
                }

                break;
            case 'textarea':
                value = obj.value;
                break;
            default:
        }

        outHTML +=
            `<div class="row">
                <div class="col-4">
                    <b>${obj.tagName.toLowerCase()}</b>
                </div>
                <div class="col-8">
                    ${value}
                </div>
            </div>`;
        console.log(obj.tagName.toLowerCase(), value);
    });

    if (outHTML !== '') {
        if (!(document.getElementsByClassName('result-block')[0])) {
            document.querySelector('.divSubmit').insertAdjacentHTML('afterEnd',
                '<div class="result-block"></div>'
            );
        }
        document.querySelector('.result-block').innerHTML = outHTML
    }
    createButtonClear();
}

function createButtonClear() {
    if (!document.getElementById('buttonClear')) {
        document.querySelector('.result-block').insertAdjacentHTML('afterEnd',
            `<div class="row divClear">
                <button id="buttonClear" class="btn btn-secondary">Clear</button>
            </div>`
        );
    }
    document.getElementById('buttonClear').onclick = clearPage;
}

function clearPage() {
    document.querySelector('.result-block').remove();
    document.getElementById('buttonClear').remove();
}

document.getElementById('buttonAdd').onclick = addToPage;