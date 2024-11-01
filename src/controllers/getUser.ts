import { Request, Response } from "express";
export const getUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({
    status: true,
    msg: "single user fetch",
    user: {
      id: userId,
    },
  });
};