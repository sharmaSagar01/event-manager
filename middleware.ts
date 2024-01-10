import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stript",
    "/api/uploading",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stript",
    "/api/uploading",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
