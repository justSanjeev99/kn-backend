// create a validator for leave type model

import { ILeaveType } from "../db/schema/leaveTypes";

const validateLeaveType = (data: ILeaveType) => {
  if (!data) return [{ message: "No data was provided" }];
  const errors: Array<{ message: string }> = [];
  if (!data.leaveTypeName)
    errors.push({ message: "Leave type name is required" });
  if (!data.leaveTypeDescription)
    errors.push({ message: "Leave type description is required" });
  if (!data.noOfLeaves)
    errors.push({ message: "Number of leaves is required" });
  return errors;
};

export default validateLeaveType;
