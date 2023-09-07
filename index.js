const  { readData } = require('./services/excelReader.js');
const {config} = require('./config.js');
const path = './dataRepository/invoices.xlsx';
const {invoiceShema} = require('./model/invoice.js');   
const {validateData} = require("./services/invoiceValidator.js")
const {testDatabaseConnection} = require('./testDatabaseConnection.js');
const { insertInvoices } = require("./services/database.js")

console.log("READING DATA")
const data = readData(path);

console.log("VALIDATING DATA")
const {wrongData, data : validData } = validateData(data);

//console.log(wrongData)
console.log(validData.length);
console.log(validData.length);

console.log("INSERTING ROWS")
if(wrongData.length === 0){
    insertInvoices(validData, config)
}





