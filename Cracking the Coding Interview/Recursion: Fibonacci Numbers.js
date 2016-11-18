function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    if (n === 0)
        return 0;
    else if (n === 1)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1) ;
}
