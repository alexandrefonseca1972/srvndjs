const app = require("./src/app");

app.set("port", process.env.PORT || 3333);
const server = app.listen(app.get("port"), () => {
    console.log("Servidor rodando na porta: " + server.address().port);
});