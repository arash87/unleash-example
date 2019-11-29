const unleash = require("unleash-server")

unleash
    .start({
        databaseUrl: 'postgres://postgres:koskesh@localhost:5433/unleash',
        port: 4242
    })
    .then(unleash => {
        console.log(
            `Unleash started on http://localhost:${unleash.app.get('port')}`,
        );
    });