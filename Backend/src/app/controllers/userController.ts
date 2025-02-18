import { Request, Response } from "express";

import users from "../JsonData/users.json";
import { TypedRequestBody } from "../interfaces/common";
import { Document } from "mongoose";
import { userModel } from "../models/userModel";
import { IUserInterface } from "../interfaces/userInterface";
import { IErrorInterface } from "../interfaces/errorInterface";

export const getHome = (req: Request, res: Response) => {
  res.json(users);
};

export const addUser = async (
  req: TypedRequestBody<IUserInterface>,
  res: Response
) => {
  try {
    const { name, age, department } = req.body;

    const user = new userModel({
      name,
      age,
      department,
    });

    await user
      .save()
      .then((data: Document) => {
        res.json(data);
      })
      .catch((err: any) => {
        res.json(err);
      });
  } catch (error) {
    console.error("Error in getCarData:", error);

    const err = error as IErrorInterface;
    res.status(err.statusCode || 500).json({
      message: err.message || "Internal Server Error",
      error: err.error || "Something went wrong",
    });
  }
};
