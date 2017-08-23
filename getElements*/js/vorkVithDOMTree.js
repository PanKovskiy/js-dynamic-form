

var element = document.getElementsByTagName("input");

for (var i=0; i < element.length; i++) {
        console.log(element[i].value);
}

var element2 = document.getElementsByName("age");

for (i=0; i < element2.length; i++) {
    console.log(element2[i].value);
    element2[i].innerHTML;
}

