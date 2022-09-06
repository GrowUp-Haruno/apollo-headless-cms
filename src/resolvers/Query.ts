import { QueryResolvers } from "generated/graphql";

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const Query: QueryResolvers = {
  books: () => books,
};
