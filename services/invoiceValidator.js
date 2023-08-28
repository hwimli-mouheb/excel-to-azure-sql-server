const {invoiceShema} = require('../model/invoice.js');   
let wrongData = [];
const validateData = (data)=>{
    data.forEach(row => {
        const { error } = invoiceShema.validate(row);
        if (error) {
            console.log('Row is invalid:', error.message);
            console.log(rowr)
            wrongData.push(row);
        } else {
            //console.log('Row is valid:');
        }
    });
    return{wrongData, data}
}

exports.validateData = validateData;