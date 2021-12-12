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
exports.Account = void 0;
const EntityBase_1 = require("../../common/entities/EntityBase");
const setting_entity_1 = require("../../settings/entities/setting.entity");
const typeorm_1 = require("typeorm");
const accountSetting_entity_1 = require("./accountSetting.entity");
let Account = class Account extends EntityBase_1.EntityBase {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: true,
    }),
    __metadata("design:type", Boolean)
], Account.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => accountSetting_entity_1.AccountSetting, (accountSetting) => accountSetting.account),
    __metadata("design:type", Array)
], Account.prototype, "accountSettings", void 0);
Account = __decorate([
    (0, typeorm_1.Entity)({
        name: 'accounts',
    })
], Account);
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map