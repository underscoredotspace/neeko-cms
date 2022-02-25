import { fastify } from "fastify";
import { routes } from "./routes";
import { white } from "colors";

const isDev = process.env.NODE_ENV === "development";
const PORT = Number(process.env.PORT) || 3030;

const app = fastify({
    ajv: {
        customOptions: {
            allErrors: true,
            removeAdditional: true,
            coerceTypes: false,
        },
    },
    logger: {
        prettyPrint: {
            translateTime: "HH:MM:ss Z",
            ignore: "pid,hostname",
        },
        level: !isDev ? "info" : "error",
    },
});

Object.entries(routes).map(([prefix, route]) =>
    app.register(route, { prefix }),
);

app.get("*", async (req, res) => {
    app.log.error(
        `Request for ${white(req.url)} from ${white(
            req.ip,
        )} returned not found`,
    );
    res.code(404).send("Not Found");
});

(async () => {
    await app.listen(PORT).catch((err) => {
        app.log.error(err);
        process.exit(1);
    });

    console.log(`Server listening on port ${PORT}`);
})();
