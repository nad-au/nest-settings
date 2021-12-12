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
exports.SettingDataType = void 0;
const EntityBase_1 = require("../../common/entities/EntityBase");
const typeorm_1 = require("typeorm");
const setting_entity_1 = require("./setting.entity");
let SettingDataType = class SettingDataType extends EntityBase_1.EntityBase {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SettingDataType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], SettingDataType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => setting_entity_1.Setting, (setting) => setting.dataType),
    __metadata("design:type", Array)
], SettingDataType.prototype, "settings", void 0);
SettingDataType = __decorate([
    (0, typeorm_1.Entity)({
        name: 'setting_data_types',
    })
], SettingDataType);
exports.SettingDataType = SettingDataType;
//# sourceMappingURL=settingDataType.entity.js.map