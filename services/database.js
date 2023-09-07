const sql = require('mssql');

const transform = (data)=>{
  if(data){
    return data.replaceAll("'","")
  }else{
    return data
  }
}

async function insertInvoices(data, config) {
    try {
        await sql.connect(config);
        const request = new sql.Request();

        for (element of data) {
            await request.query(`INSERT INTO [dbo].[Invoices] ([Invoice Number], [Entity], [Invoice Date], [Payment Date],  [Client], [Invoice Description], [Project] , [Invoiced Amount], [Invoiced Net], [Received Amount], [Comments]) VALUES ('${transform(element["Invoice Number"])}', '${transform(element.Entity)}', ${element.Date ? "'"+element.Date+"'" : null}, ${element.Payment ? "'"+element.Payment+"'" : null} , '${transform(element["Sent to/Paid by"])}', '${transform(element["Description"])}', '${transform(element["Project"])}', '${element["Invoice Gross (incl. VAT)"]}', '${element["Invoiced Net"]}', '${element["Received"]}', '${transform(element["Comments"])}'  )`);
        }
        
    } catch (err) {
        console.error('SQL Error:', err);
    }finally{
        sql.close();
    }
}


exports.insertInvoices = insertInvoices;
