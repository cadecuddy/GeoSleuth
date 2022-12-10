import cryptoRandomString from "crypto-random-string";
import { router, protectedProcedure } from "../trpc";

// All endpoints for games from creation to completion
export const gameRouter = router({
  // Create the new game and add to User's list of games
  startGame: protectedProcedure.mutation(async ({ ctx }) => {
    const gameId: string = cryptoRandomString({
      length: 12,
      type: "url-safe",
    });

    // Create the game
    const game = await ctx.prisma.game.create({
      data: {
        id: gameId,
        user: {
          connect: {
            id: ctx.session.user.id,
          },
        },
        rounds: {
          create: [
            {
              id: gameId + "-1",
              round: 1,
            },
            {
              id: gameId + "-2",
              round: 2,
            },
            {
              id: gameId + "-3",
              round: 3,
            },
            {
              id: gameId + "-4",
              round: 4,
            },
            {
              id: gameId + "-5",
              round: 5,
            },
          ],
        },
      },
      include: {
        rounds: true,
      },
    });

    return game;
  }),
});
