import { db } from "../db";
import { FastifyPluginAsync } from "fastify";
import { Role } from "../db/collections";
import { Prisma } from "@prisma/client";

export const roleRoute: FastifyPluginAsync = async (fastify) => {
    fastify.get("/", async (_req, reply) => {
        const roles = await db.role.findMany();
        reply.send(roles);
    });

    fastify
        .post("/", {
            handler: async (req, reply) => {
                await db.role
                    .create({
                        data: req.body as Prisma.RoleCreateInput,
                    })
                    .then((newRole) => {
                        reply.send(newRole);
                    })
                    .catch((error) => {
                        console.log(JSON.stringify(error));

                        reply.status(400).send({ error: error.message });
                    });
            },
            schema: {
                body: Role.schema,
            },
        })
        .setErrorHandler(function (error, _req, reply) {
            fastify.log.error(error);
            reply.status(400).send({ errors: error.validation });
        });
};
