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
exports.Setting = void 0;
const accountSetting_entity_1 = require("../../accounts/entities/accountSetting.entity");
const EntityBase_1 = require("../../common/entities/EntityBase");
const typeorm_1 = require("typeorm");
const settingCategory_entity_1 = require("./settingCategory.entity");
const settingDataType_entity_1 = require("./settingDataType.entity");
const settingType_entity_1 = require("./settingType.entity");
let Setting = class Setting extends EntityBase_1.EntityBase {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Setting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'setting_key',
        unique: true,
    }),
    __metadata("design:type", String)
], Setting.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Setting.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'default_value',
    }),
    __metadata("design:type", String)
], Setting.prototype, "defaultValue", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: true,
    }),
    __metadata("design:type", Boolean)
], Setting.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => settingCategory_entity_1.SettingCategory, (category) => category.settings, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", settingCategory_entity_1.SettingCategory)
], Setting.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => settingType_entity_1.SettingType, (type) => type.settings, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", settingType_entity_1.SettingType)
], Setting.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => settingDataType_entity_1.SettingDataType, (dataType) => dataType.settings, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", settingDataType_entity_1.SettingDataType)
], Setting.prototype, "dataType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => accountSetting_entity_1.AccountSetting, (accountSetting) => accountSetting.account),
    __metadata("design:type", Array)
], Setting.prototype, "accountSettings", void 0);
Setting = __decorate([
    (0, typeorm_1.Entity)({
        name: 'settings',
    })
], Setting);
exports.Setting = Setting;
//# sourceMappingURL=setting.entity.js.map