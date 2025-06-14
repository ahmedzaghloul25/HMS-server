import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { Model } from "mongoose";
import {
  PatientTransfer,
  TransferDocument,
} from "src/DB/schemas/patient/patient.transfer.schema";

export default class PatientTransferRepoService extends DbRepoService<TransferDocument> {
  constructor(
    @InjectModel(
      PatientTransfer.name,
      connectionNameString.HOSPITAL
    )
    private readonly transferOrderModel: Model<TransferDocument>
  ) {
    super(transferOrderModel);
  }
}
