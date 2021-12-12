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
exports.SettingType = void 0;
const EntityBase_1 = require("../../common/entities/EntityBase");
const typeorm_1 = require("typeorm");
const setting_entity_1 = require("./setting.entity");
let SettingType = class SettingType extends EntityBase_1.EntityBase {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SettingType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], SettingType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => setting_entity_1.Setting, (setting) => setting.type),
    __metadata("design:type", Array)
], SettingType.prototype, "settings", void 0);
SettingType = __decorate([
    (0, typeorm_1.Entity)({
        name: 'setting_types',
    })
], SettingType);
exports.SettingType = SettingType;
//# sourceMappingURL=settingType.entity.js.map