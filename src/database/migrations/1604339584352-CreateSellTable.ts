import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSellTable1604339584352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notes',
            columns: [
                {
                    name: 'note_id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'note_name',
                    type: 'varchar',
                },
                {
                    name: 'note_text',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'user_id',
                    type: 'integer',
                  },
            ],
            foreignKeys: [
                {
                  name: 'NotesUser',
                  columnNames: ['user_id'],
                  referencedTableName: 'user',
                  referencedColumnNames: ['user_id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
              ],
            

        }), true)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notes')
    }

}
