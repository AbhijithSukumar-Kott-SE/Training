import { Request, Response } from "express";
import { CarService } from "../services/carService";
import { ICarInterface } from "../interfaces/carInterface";
import { IErrorInterface } from "../interfaces/errorInterface";

export const getCars = async (req: Request, res: Response) => {
  try {
    const carInfo: ICarInterface[] | IErrorInterface = await CarService.getCars();
    res.json(carInfo);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
