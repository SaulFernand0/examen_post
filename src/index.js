const app = require('./oauth/app');
app.listen(app.get("port"), () => {
    console.log(`Conexion establecida: ` + app.get("port"))
    }
);