import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
// METHODS USED WITHIN THE AUTH REQUEST
// HANDLED BY THE NEXT-AUTH LIBRARY
export { handler as GET, handler as POST };
