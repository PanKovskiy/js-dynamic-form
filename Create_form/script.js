var index = 0;
function addToPage() {
    var container = document.getElementById('formoutput'),
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
                '<div>\
                    <div class="form-check">\
                        <input class="form-check-input element" type="checkbox" name="examplecheckbox" value="option1" />option1\
                    </div>\
                    <div class="form-check">\
                        <input class="form-check-input element" type="checkbox" name="examplecheckbox" value="option2">option2\
                    </div>\
                </div>';
            break;
        case 'radio':
            controlName = 'radio';
            controlHTML =
                '<div>\
                    <div class="form-check">\
                        <input class="form-check-input element" type="radio" name="exampleradio" value="option1" />option1\
                    </div>\
                    <div class="form-check">\
                        <input class="form-check-input element" type="radio" name="exampleradio" value="option2">option2\
                    </div>\
                </div>';
            break;

        default:
            return false;
    }

    container.insertAdjacentHTML('beforeend',
        '<div class="form-inline added-form-block">\
                <label for="input">Example ' + index + ' ' + controlName + '</label>\
            ' + controlHTML + '\
            <button type="button" class="btn btn-dark buttonRemove">Remove</button>\
        </div>'
    );
    index++;

    bindRemoveEvent();

    if (!document.getElementById('buttonSubmit')) {
        document.querySelector('.container').insertAdjacentHTML('beforeend',
            '<div class="row divSubmit">\
                <button id="buttonSubmit" type="submit" class="btn btn-primary">Submit</button>\
            </div>\
            <div class="result-block"></div>'
        );

        document.getElementById('buttonSubmit').onclick = submitToPage;
    }
}

function removeFromPage(index) {
    document.querySelector(".added-form-block:nth-child(" + index + ")").remove();

    bindRemoveEvent();
    if (document.getElementById('formoutput').childElementCount === 0) {
        document.querySelector('.divSubmit').remove();
    }
}

function bindRemoveEvent() {
    document.querySelectorAll(".buttonRemove").forEach(function(obj, index) {
        obj.onclick = removeFromPage.bind(this, index + 1);
    });
}

function submitToPage() {
    var outHTML = '';
    document.querySelectorAll(".added-form-block .element").forEach(function(obj) {
        var value = '';
        switch (obj.tagName.toLowerCase()) {
            case 'input':
                value = obj.value;
                if (obj.type == 'radio' || obj.type == 'checkbox') {
                    value += '--------------->' + obj.checked;
                }

                break;
            case 'textarea':
                value = obj.value;
                break;
            default:
        }

        outHTML += '<b>' + obj.tagName.toLowerCase() + '</b>' + value + '<br/>';
        console.log(obj.tagName.toLowerCase(), value);
    });
    if (outHTML !== '') {
        document.querySelector('.result-block').innerHTML = outHTML +
            '<div class="row divClear">\
                <button id="buttonClear" class="btn btn-secondary">Clear</button>\
            </div>';

        document.getElementById('buttonClear').onclick = clearPage;
    }

}

function clearPage() {
    document.querySelector('.result-block').innerHTML = '';
}

document.getElementById('buttonAdd').onclick = addToPage;