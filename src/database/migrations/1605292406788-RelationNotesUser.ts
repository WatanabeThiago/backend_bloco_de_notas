import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationNotesUser1605292406788 implements MigrationInterface {
    name = 'RelationNotesUser1605292406788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `notes` DROP FOREIGN KEY `NotesUser`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `notes` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `notes` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `notes` CHANGE `user_id` `user_id` int NULL");
        await queryRunner.query("ALTER TABLE `notes` ADD CONSTRAINT `FK_7708dcb62ff332f0eaf9f0743a7` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `notes` DROP FOREIGN KEY `FK_7708dcb62ff332f0eaf9f0743a7`");
        await queryRunner.query("ALTER TABLE `notes` CHANGE `user_id` `user_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `notes` ADD `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `notes` ADD `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `notes` ADD CONSTRAINT `NotesUser` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

}
