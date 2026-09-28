export function onRequest() {
  return new Response(
    "google-site-verification: google340337f0faac2b12.html",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "X-Content-Type-Options": "nosniff"
      }
    }
  );
}
