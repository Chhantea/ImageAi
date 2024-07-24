import { authMiddleware, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(['/', '/api/webhooks/clerk', '/api/webhooks/stripe']);

export default clerkMiddleware((auth, request) => {
  if(isPublicRoute(request)) {
    auth().protect();
  }
});
// export default authMiddleware({
//   publicRoutes: [ '/','/api/webhooks/clerk', '/api/webhooks/stripe']
// });
// export default clerkMiddleware();
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};