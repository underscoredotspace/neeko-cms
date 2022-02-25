import { FastifyPluginAsync } from "fastify";
import { roleRoute } from "./role";

export const routes: Record<string, FastifyPluginAsync> = {
    "/role": roleRoute,
};
