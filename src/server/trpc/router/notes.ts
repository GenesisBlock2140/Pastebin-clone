import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const notesRouter = router({
    // Read DB and get the selected note 
    getNote: publicProcedure
    .input(z.object({noteId: z.string().nullish()}))
    .query(({input, ctx}) => {
      if(input.noteId){
        return ctx.prisma.notes.findUnique({
          where: {
            id: input.noteId
          },
        });
      }
    }),
    // Read DB and get 3 last notes created
    getThreeNote: publicProcedure
      .input(z.object({}))
      .query(({ctx}) => {
        return ctx.prisma.notes.findMany({
          orderBy: {
            createdAt: "desc"
          },
          take: 3
        });
      }),
      // Create new note in DB with max 1500 char
      createNote: publicProcedure
      .input(z.object({text: z.string().max(1500)}))
      .mutation(({input, ctx}) => {
        ctx.prisma.notes.create({data: {
          text: input.text
        }}).catch((error) => {
          return error
        }).finally(() => {
          return {
            text: input.text
          }
        })
      })
});