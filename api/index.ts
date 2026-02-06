import express, { type Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Minimal API stub: no server/routes or server/static in this repo.
// Replace with real routes when you add a server or backend.
app.use((_req: Request, res: Response) => {
  res.status(501).json({
    message: "API not configured",
    hint: "Add server/routes and server/static, or implement handlers here.",
  });
});

export default app;
