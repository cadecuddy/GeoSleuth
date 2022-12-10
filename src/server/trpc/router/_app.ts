import { router } from "../trpc";
import { gameRouter } from "./game";
import { statsRouter } from "./stats";

// Where all the app routers are defined
export const appRouter = router({
  game: gameRouter,
  stats: statsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
