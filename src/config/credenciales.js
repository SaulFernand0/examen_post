require('dotenv').config();
module.exports = {
    database : {
        host :  `ec2-35-170-85-206.compute-1.amazonaws.com`,
        user : `nugdxilfhoxofz`,
        password : `78ecd8edec8afe55bd5bd53b9d75247d99d33c99b6afc0ed4ed23803f02ab564`,
        database : `d140hqmjoqrq2p`,
        port : `5432`,
        ssl : {
            rejectUnauthorized : false
        }
    }, 
}