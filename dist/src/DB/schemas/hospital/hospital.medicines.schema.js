"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalMedicineModule = exports.HospitalMedicineSchema = exports.HospitalMedicine = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
const mongoose_2 = require("mongoose");
let HospitalMedicine = class HospitalMedicine extends common_1.COMMON_PROPS.ConfirmableProps {
    catalogId;
    price;
    hospital;
    inventory;
};
exports.HospitalMedicine = HospitalMedicine;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalMedicine.prototype, "catalogId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], HospitalMedicine.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalMedicine.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        required: true
    }),
    __metadata("design:type", Number)
], HospitalMedicine.prototype, "inventory", void 0);
exports.HospitalMedicine = HospitalMedicine = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], HospitalMedicine);
exports.HospitalMedicineSchema = mongoose_1.SchemaFactory.createForClass(HospitalMedicine);
exports.HospitalMedicineSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
exports.HospitalMedicineModule = mongoose_1.MongooseModule.forFeature([{ name: HospitalMedicine.name, schema: exports.HospitalMedicineSchema }], common_1._Types.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.medicines.schema.js.map