
var kilogram = document.getElementById('kg');
var Pounds = document.getElementById('pd');
var Ounces = document.getElementById('oun');
var gram = document.getElementById('g');


kilogram.addEventListener('input', function () {
    Pounds.value = (kilogram.value * 2.20).toFixed(2);
    Ounces.value = (kilogram.value * 35.27).toFixed(2);
    gram.value = (kilogram.value * 1000).toFixed(2);
});

Pounds.addEventListener('input', function () {
    kilogram.value = (Pounds.value / 2.20).toFixed(2);
    Ounces.value = (Pounds.value * 16).toFixed(2);
    gram.value = (Pounds.value * 453.59).toFixed(2);
});

Ounces.addEventListener('input', function () {
    Pounds.value = (Ounces.value / 16).toFixed(2);
    kilogram.value = (Ounces.value / 35.27).toFixed(2);
    gram.value = (Ounces.value * 28.35).toFixed(2);
});

gram.addEventListener('input', function () {
    kilogram.value = (gram.value / 1000).toFixed(2);
    Pounds.value = (gram.value / 453.59).toFixed(2);
    Ounces.value = (gram.value / 28.35).toFixed(2);
});
