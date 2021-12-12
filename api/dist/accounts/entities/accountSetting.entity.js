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
exports.AccountSetting = void 0;
const EntityBase_1 = require("../../common/entities/EntityBase");
const setting_entity_1 = require("../../settings/entities/setting.entity");
const typeorm_1 = require("typeorm");
const account_entity_1 = require("./account.entity");
let AccountSetting = class AccountSetting extends EntityBase_1.EntityBase {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AccountSetting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        name: 'setting_value',
    }),
    __metadata("design:type", String)
], AccountSetting.prototype, "settingValue", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.accountSettings, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", account_entity_1.Account)
], AccountSetting.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => setting_entity_1.Setting, (setting) => setting.accountSettings, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", setting_entity_1.Setting)
], AccountSetting.prototype, "setting", void 0);
AccountSetting = __decorate([
    (0, typeorm_1.Entity)({
        name: 'account_settings',
    }),
    (0, typeorm_1.Unique)(['account', 'setting'])
], AccountSetting);
exports.AccountSetting = AccountSetting;
//# sourceMappingURL=accountSetting.entity.js.map