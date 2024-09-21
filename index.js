let btn = document.querySelectorAll('.btn');
let expretion = document.querySelector('#output');
let result = document.querySelector('.equale');
let clear = document.querySelector('.Ac');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
    expretion.value = expretion.value + btn[i].value;
});
}

result.addEventListener('click', function () {
    try {
        let evaluationResult = eval(expretion.value);
        if (!isFinite(evaluationResult) || isNaN(evaluationResult)) {
            expretion.value = "Error";
        } else {
            expretion.value = evaluationResult;
        }
    } catch (e) {
        expretion.value = "Error";
    }
});

clear.addEventListener('click', function () {
expretion.value = "";
});