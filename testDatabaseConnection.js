const sql = require('mssql');
async function testDatabaseConnection(config) {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query("SELECT DISTINCT ProjectName FROM [dbo].[BigTimeReport] WHERE ProjectName like '%MKD-L2-SC11%' ");
        
        if (result.recordset && result.recordset.length > 0) {
            console.log(result.recordset)
            console.log('Database connection test successful.');
        } else {
            console.log('Database connection test failed.');
        }
    } catch (err) {
        console.error('Database connection error:', err);
    } finally {
        sql.close();
    }
}

exports.testDatabaseConnection = testDatabaseConnection;