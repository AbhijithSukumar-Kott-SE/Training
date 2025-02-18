import { ICarInterface } from "../interfaces/carInterface";
import { IErrorInterface } from "../interfaces/errorInterface";
import { carModel } from "../models/carModel";

export class CarService {
  static async getCars(): Promise<ICarInterface[] | IErrorInterface> {
    try {
      const data = await carModel.aggregate([
        {
          $group: {
            _id: "$make",
            models: { $addToSet: "$model" },
          },
        },
        {
          $project: {
            _id: 0,
            brand: "$_id",
            models: 1,
          },
        },
        {
          $sort: { brand: 1 }, // Sorting applied before transforming to an object
        },
        {
          $group: {
            _id: null,
            carBrands: {
              $push: {
                k: "$brand",
                v: "$models",
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            brands: {
              $arrayToObject: "$carBrands",
            },
          },
        },
      ]);

      return data.length > 0 ? data[0].brands : {}; // Ensure a valid return type
    } catch (error) {
      throw {
        statusCode: 500,
        message: "An error occurred while fetching car data.",
        error: error instanceof Error ? error.message : error,
      } as IErrorInterface; // Throw the error instead of returning it
    }
  }
}
