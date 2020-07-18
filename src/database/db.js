const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
    // //Criar uma tabela com comandos SQL
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "Colectoria",
    //     "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Rua Guilherme Gemballa, Jardim America",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso!")
    //     console.log(this)
    // } 

    // db.run(query, values, afterInsertData)



//     Consultar dados da tabela
    // db.all(` SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estao seus registros")
    //     console.log(rows)
    // })

    //Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE ID = ?`,[10], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

// })