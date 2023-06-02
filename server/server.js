const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

async function startApolloServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Serve static assets if in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
  }

  // Connect to MongoDB and start the server
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  app.listen(PORT, () => {
    console.log(`🌍 Server listening on http://localhost:${PORT}`);
    console.log(`🚀 GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer().catch((error) => {
  console.log("Error starting Apollo Server:", error);
});