import { NotFoundException } from '@nestjs/common';

export class SettingNotFoundException extends NotFoundException {
  constructor() {
    super('Setting not found');
  }
}

export class SettingCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Setting Category not found');
  }
}

export class SettingDataTypeNotFoundException extends NotFoundException {
  constructor() {
    super('Setting Data Type not found');
  }
}

export class SettingTypeNotFoundException extends NotFoundException {
  constructor() {
    super('Setting Type not found');
  }
}
