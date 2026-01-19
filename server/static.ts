import express from "express";
import path from "path";

export function serveStatic(app: express.Express) {
  const publicDir = path.resolve(process.cwd(), "dist/public");

  // Serve only the built frontend files (JS/CSS/HTML)
  app.use(express.static(publicDir, { index: false }));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
  });
}
