import { HydratedDocument, Types } from "mongoose";
export declare class HospitalService {
    serviceCatalogId: Types.ObjectId;
    price: number;
    hospital: Types.ObjectId;
    createdBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
export declare const HospitalServiceSchema: import("mongoose").Schema<HospitalService, import("mongoose").Model<HospitalService, any, any, any, import("mongoose").Document<unknown, any, HospitalService, any> & HospitalService & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalService, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalService>, {}> & import("mongoose").FlatRecord<HospitalService> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalServiceModule: import("@nestjs/common").DynamicModule;
export type HospitalServiceDocument = HydratedDocument<HospitalService>;
