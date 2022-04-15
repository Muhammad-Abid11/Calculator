// cal = (a) => {
//     console.log("this working")
//     console.log(a)
// }

// $("button").click(function () {
//     var button = $(this).val();
//     alert(button);
// });

display = document.getElementById(display);

function cls() {
    display.value = "";
}


function cal(clicked_id) {
    console.log(clicked_id);


}

var val = document.getElementById("inp");

function AT_add(v) {
    val.value += v;
}


function cls() {
    val.value = "";
}

function exe() {
    val.value = eval(val.value);
}


function cancel() {
    val.value = val.value.substr(0, val.value.length - 1);
}