// create an express post request handle for customer

import { Request, Response } from "express";
import { Customer } from "../../../models";

export default async function controllerPost(req: Request, res: Response) {
  const data = req.body;
  const customer = new Customer({
    ...data,
  });
  customer.save((err, customer) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).send(customer);
  });
}
