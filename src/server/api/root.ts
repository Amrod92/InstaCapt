import { exampleRouter } from "~/server/api/routers/example";
import { visionRouter } from "./routers/image-analysis";
import { cloudinaryRouter } from "./routers/cloudinary-store";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  visionLearning: visionRouter,
  cloudinary: cloudinaryRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
