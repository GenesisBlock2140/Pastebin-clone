// src/server/router/_app.ts
import { router } from "../trpc";

import { notesRouter } from './notes';

export const appRouter = router({
  notes: notesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
