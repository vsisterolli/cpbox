import { Request, Response } from "express";

export function handleApplicationErrors(err: Error, _req: Request, res: Response) {
  if (err.name === "TestsSizeExceeded") {
    return res.status(400).send({
        message: err.message,
    });
  }

  res.sendStatus(500).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}