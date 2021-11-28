import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1638137273826 implements MigrationInterface {
    name = 'Initial1638137273826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account_settings" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "setting_value" character varying NOT NULL, "accountId" integer NOT NULL, "settingId" integer NOT NULL, CONSTRAINT "UQ_86731a220b4d01832fed092de9c" UNIQUE ("accountId", "settingId"), CONSTRAINT "PK_cede89a31d2392a1064087af67a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting_categories" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_41d69472398900321ed66e809e9" UNIQUE ("name"), CONSTRAINT "PK_02f4a97cae1aed3c77a2c19f295" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting_data_types" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_1ebea0a314d679d41b8174afb67" UNIQUE ("name"), CONSTRAINT "PK_573985575e63ea5a73cb7c2806e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting_types" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_e16591d73cc5952825b7b195eba" UNIQUE ("name"), CONSTRAINT "PK_f10c513b5e8ed2a39fc85ea7d13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "settings" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "setting_key" character varying NOT NULL, "description" character varying, "default_value" character varying NOT NULL, "enabled" boolean NOT NULL DEFAULT true, "categoryId" integer NOT NULL, "typeId" integer NOT NULL, "dataTypeId" integer NOT NULL, CONSTRAINT "UQ_35690f287c60414f4b63614a006" UNIQUE ("setting_key"), CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, "enabled" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_2db43cdbf7bb862e577b5f540c8" UNIQUE ("name"), CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "account_settings" ADD CONSTRAINT "FK_5f6da99108625c1b2e83455261b" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account_settings" ADD CONSTRAINT "FK_0657218c7da4966885607c1e84b" FOREIGN KEY ("settingId") REFERENCES "settings"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "FK_9e0cd12cbd4b5f8c34f4caf1d8e" FOREIGN KEY ("categoryId") REFERENCES "setting_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "FK_268b815ff9e0e5823eb9f0088be" FOREIGN KEY ("typeId") REFERENCES "setting_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "FK_fe946d0504ee17f4a8a7dd04829" FOREIGN KEY ("dataTypeId") REFERENCES "setting_data_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_fe946d0504ee17f4a8a7dd04829"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_268b815ff9e0e5823eb9f0088be"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_9e0cd12cbd4b5f8c34f4caf1d8e"`);
        await queryRunner.query(`ALTER TABLE "account_settings" DROP CONSTRAINT "FK_0657218c7da4966885607c1e84b"`);
        await queryRunner.query(`ALTER TABLE "account_settings" DROP CONSTRAINT "FK_5f6da99108625c1b2e83455261b"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "settings"`);
        await queryRunner.query(`DROP TABLE "setting_types"`);
        await queryRunner.query(`DROP TABLE "setting_data_types"`);
        await queryRunner.query(`DROP TABLE "setting_categories"`);
        await queryRunner.query(`DROP TABLE "account_settings"`);
    }

}
