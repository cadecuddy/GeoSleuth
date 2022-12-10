import { router, protectedProcedure } from "../trpc";
import { z } from "zod";

export const statsRouter = router({
  // Returns a user
  getUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUniqueOrThrow({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          games: true,
        },
      });

      return user;
    }),
});
