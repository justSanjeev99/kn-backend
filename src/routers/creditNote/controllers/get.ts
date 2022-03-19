// create an express get route for the creditNOte model

import { Request, Response } from "express";
import { CreditNote } from "../../../models";

export default async function controllerGet(req: Request, res: Response) {
  const { id } = req.params;
  if (id) {
    const note = await CreditNote.findById(id)
      .populate("customer")
      .populate("associatedInvoice")
      .populate("createdBy");
    if (!note) {
      return res.status(404).json({ message: "SaleInvoice not found" });
    }
    return res.status(200).json(note);
  }
  const notes = await CreditNote.find({})
    .populate("customer")
    .populate("associatedInvoice")
    .populate("createdBy");
  return res.status(200).json(notes);
}
