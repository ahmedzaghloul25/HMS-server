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
exports.PatientModule = exports.PatientSchema = exports.Patient = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../../../common/constants");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let Patient = class Patient {
    firstName;
    middleName;
    LastName;
    address;
    DOB;
    phone;
    identification;
    relative;
    hospital;
    createdBy;
    modifiedBy;
};
exports.Patient = Patient;
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        minlength: constants_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.nameMaxInput,
        required: true,
    }),
    __metadata("design:type", String)
], Patient.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        minlength: constants_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.nameMaxInput,
        required: true,
    }),
    __metadata("design:type", String)
], Patient.prototype, "middleName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        minlength: constants_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.nameMaxInput,
        required: true,
    }),
    __metadata("design:type", String)
], Patient.prototype, "LastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: constants_1.MIN_MAX_LENGTH.descMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.descMaxInput,
    }),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], Patient.prototype, "DOB", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        match: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
    }),
    __metadata("design:type", String)
], Patient.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        length: 14,
        required: true,
    }),
    __metadata("design:type", String)
], Patient.prototype, "identification", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Patient.prototype, "relative", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Patient.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Patient.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Patient.prototype, "modifiedBy", void 0);
exports.Patient = Patient = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Patient);
exports.PatientSchema = mongoose_1.SchemaFactory.createForClass(Patient);
exports.PatientSchema.index({ identification: 1, hospital: 1 }, { unique: true });
exports.PatientModule = mongoose_1.MongooseModule.forFeature([{ name: Patient.name, schema: exports.PatientSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.patient.schema.js.map