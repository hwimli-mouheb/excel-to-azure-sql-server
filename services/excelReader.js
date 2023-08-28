const xlsx = require('xlsx');

const readData = (path) => {
    const workbook = xlsx.readFile(path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);
    data.forEach(row => {
        if (row.Date) {
            const serialNumber = row.Date; // Assuming 'Date' is the column name
            const millisecondsPerDay = 24 * 60 * 60 * 1000;
            const baseDate = new Date(1899, 11, 30); // Excel's base date
            
            row.Date = new Date(baseDate.getTime() + serialNumber * millisecondsPerDay);
            row.Date = row.Date.toISOString().slice(0, 10)
        }
        if(row.Payment){
            const serialNumber = row.Payment; // Assuming 'Date' is the column name
            const millisecondsPerDay = 24 * 60 * 60 * 1000;
            const baseDate = new Date(1899, 11, 30); // Excel's base date
    
            row.Payment = new Date(baseDate.getTime() + serialNumber * millisecondsPerDay);
            row.Payment = row.Payment.toISOString().slice(0, 10)
        }
        if(!row.Comments){
            row.Comments = "''";
        }else{
            row.Comments += "";
        }
        if(!row.Received){
            row.Received = 0;
        }
        if(!row.Description){
            row.Description = "''";
        }
    });
    return data;
}

exports.readData = readData;