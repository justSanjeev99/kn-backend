// create an express delete route for the saleEstimate model

import { Request, Response } from "express";
import { SaleInvoice } from "../../../models";

export default async function controllerDelete(req: Request, res: Response) {
  const { id } = req.params;
  const saleEstimate = await SaleInvoice.findByIdAndDelete(id);
  if (!saleEstimate) {
    return res.status(404).json({ message: "SaleEstimate not found" });
  }
  return res.status(200).json(saleEstimate);
}
