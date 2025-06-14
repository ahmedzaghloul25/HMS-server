import { HydratedDocument, Types } from "mongoose";
export declare class HospitalLab {
    labCatalogId: Types.ObjectId;
    price: number;
    isActive: boolean;
    hospital: Types.ObjectId;
    createdBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
export declare const HospitalLabSchema: import("mongoose").Schema<HospitalLab, import("mongoose").Model<HospitalLab, any, any, any, import("mongoose").Document<unknown, any, HospitalLab, any> & HospitalLab & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalLab, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalLab>, {}> & import("mongoose").FlatRecord<HospitalLab> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalLabModule: import("@nestjs/common").DynamicModule;
export type HospitalLabDocument = HydratedDocument<HospitalLab>;
