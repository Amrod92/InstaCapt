import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const visionRouter = createTRPCRouter({
  imageProcessor: publicProcedure.input(z.object({ input: z.string() })).mutation(async ({ input }) => {
    const apiUrl = process.env.VISION_ENDPOINT as string;

    console.log('this is input: ', input)

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.VISION_KEY as string,
      },
      body: JSON.stringify({ url: input }),
    });

    return await response.json();
  }),
});





