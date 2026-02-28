const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('logos qq/Manual de identidad - Quiero Quiropractica.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('manual_text.txt', data.text);
    console.log("PDF extract OK");
}).catch(function(error) {
    console.error("Error reading PDF", error);
});
