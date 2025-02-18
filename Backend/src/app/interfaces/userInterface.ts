import { ObjectId } from "mongoose";

export interface IUserInterface {
  name: String;
  age: Number;
  department: String;
  id?: ObjectId | null;
}
