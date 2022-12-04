import { z } from "zod";
import cryptoRandomString from "crypto-random-string";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { Prisma } from "@prisma/client";

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
              round: 2,
            },
            {
              id: gameId + "-4",
              round: 2,
            },
            {
              id: gameId + "-5",
              round: 2,
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
  // Returns all a user's games
  getUserGames: protectedProcedure.query(async ({ ctx }) => {
    const games = await ctx.prisma.user
      .findUnique({
        where: {
          id: ctx.session.user.id,
        },
      })
      .games();

    return games;
  }),
});
