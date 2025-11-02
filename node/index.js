import express from 'express';
import mysql2 from 'mysql2/promise';
const app = express();
const port = 3000

const config = {
    host: 'mysqldb',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', async (req, res) => {
    let name_list = ""
    let connection = await mysql2.createConnection(config)
    const sql = `INSERT INTO people(name) values ('GilsonNF')`
    connection.query(sql)

    const query = 'SELECT * FROM people ORDER BY id DESC'; 
    const [rows] = await connection.execute(query);

    rows.forEach ( linha => {
        name_list = name_list + `<br>${linha.id}\t\t\t${linha.name}`
    })
   connection.end(err => {
        if (err) {
            console.error('Error closing connection:', err);
            return;
        }
    });
    res.send('<h1>Full Cycle Rocks!</h1><br>ID Nome<br>' + name_list )
    
})

app.listen(port, () => {
    console.log('nodeGNF rodando na porta ' + port)
})