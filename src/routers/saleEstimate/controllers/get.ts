// create an express get route for the saleEstimate model

import { Request, Response } from "express";
import { SaleEstimate } from "../../../models/saleEstimate";

export default async function controllerGet(req: Request, res: Response) {
  const { id } = req.params;
  if (id) {
    const saleEstimate = await SaleEstimate.findById(id);
    if (!saleEstimate) {
      return res.status(404).json({ message: "SaleEstimate not found" });
    }
    return res.status(200).json(saleEstimate);
  }
  const saleEstimates = await SaleEstimate.find({});
  return res.status(200).json(saleEstimates);
}
