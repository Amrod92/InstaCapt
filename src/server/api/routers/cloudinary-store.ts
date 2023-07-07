import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cloudinaryRouter = createTRPCRouter({
  post: publicProcedure
    .input(z.object({ image: z.string() }))
    .mutation( async ({ input }) => {
        const formData = new FormData();
        formData.append("file", input.image);
  
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to upload image to Cloudinary");
        }
  
        const data = await response.json();
  
        return {
          result: data,
        };
    }),




  getImage: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
