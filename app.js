var display = document.getElementById("display");
cal = v => {
    // console.log(v);
    display.value += v;
    console.log(display.value);
}


AC = () => {
    display.value = "";
}

equal = () => {
    display.value = eval(display.value);
}


cancel = () => {
    display.value = display.value.substr(0, display.value.length - 1);
    // display.value = display.value.slice(0, display.value.length - 1);
}