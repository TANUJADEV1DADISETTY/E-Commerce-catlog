import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        return {
          id: "1",
          name: "Admin",
          email: "admin@test.com"
        };
      }
    })
  ],
  secret: "secret123"
});
