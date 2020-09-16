const app = require('./app');

app.init().then(server => {
    const PORT = process.env.PORT || 3000
    server.listen(PORT, console.log("server started on" + " " + PORT));
});