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
          games: true,
        },
      });

      return user;
    }),
  getLeaderboard: protectedProcedure.query(async ({ ctx }) => {
    const leaderboard = await ctx.prisma.user.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        games: true,
        image: true,
      },
      orderBy: {
        games: {
          _count: "desc",
        },
      },
    });

    return leaderboard;
  }),
});
