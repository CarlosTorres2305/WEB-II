import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1699063637505 implements MigrationInterface {
    name = 'Default1699063637505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "alunos" ("id" SERIAL NOT NULL, "nome" character varying(40) NOT NULL, CONSTRAINT "PK_0090f2d8573e71e8e4e274db905" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "disciplinas" ("id" SERIAL NOT NULL, "nome" character varying(30) NOT NULL, CONSTRAINT "PK_63ac31213d82b3a8e99c1a6c4a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matriculas" ("id" SERIAL NOT NULL, "value" double precision NOT NULL, "idaluno" integer, "iddisciplina" integer, CONSTRAINT "PK_4426123ba70495e947e719693b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professores" ("id" SERIAL NOT NULL, "nome" character varying(40) NOT NULL, CONSTRAINT "PK_13f01466be85817b29ed8abf74f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "spents" ("id" SERIAL NOT NULL, "description" character varying(50) NOT NULL, "value" numeric(10,2) NOT NULL, "iduser" integer, CONSTRAINT "PK_fdf8432c53458c1211cd521463c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professor_pordisciplina" ("professoresId" integer NOT NULL, "disciplinasId" integer NOT NULL, CONSTRAINT "PK_925efd4db865208e70a2feef8ca" PRIMARY KEY ("professoresId", "disciplinasId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a40eea1294aa987adbb47393a5" ON "professor_pordisciplina" ("professoresId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d4fea5c1b51211059a81378fd6" ON "professor_pordisciplina" ("disciplinasId") `);
        await queryRunner.query(`ALTER TABLE "matriculas" ADD CONSTRAINT "FK_039acb14ee1c7521c779917dbef" FOREIGN KEY ("idaluno") REFERENCES "alunos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "matriculas" ADD CONSTRAINT "FK_ace5abfeb1deab4e0aded4e05d8" FOREIGN KEY ("iddisciplina") REFERENCES "disciplinas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "spents" ADD CONSTRAINT "fk_user_id" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor_pordisciplina" ADD CONSTRAINT "FK_a40eea1294aa987adbb47393a57" FOREIGN KEY ("professoresId") REFERENCES "professores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professor_pordisciplina" ADD CONSTRAINT "FK_d4fea5c1b51211059a81378fd6b" FOREIGN KEY ("disciplinasId") REFERENCES "disciplinas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor_pordisciplina" DROP CONSTRAINT "FK_d4fea5c1b51211059a81378fd6b"`);
        await queryRunner.query(`ALTER TABLE "professor_pordisciplina" DROP CONSTRAINT "FK_a40eea1294aa987adbb47393a57"`);
        await queryRunner.query(`ALTER TABLE "spents" DROP CONSTRAINT "fk_user_id"`);
        await queryRunner.query(`ALTER TABLE "matriculas" DROP CONSTRAINT "FK_ace5abfeb1deab4e0aded4e05d8"`);
        await queryRunner.query(`ALTER TABLE "matriculas" DROP CONSTRAINT "FK_039acb14ee1c7521c779917dbef"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d4fea5c1b51211059a81378fd6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a40eea1294aa987adbb47393a5"`);
        await queryRunner.query(`DROP TABLE "professor_pordisciplina"`);
        await queryRunner.query(`DROP TABLE "spents"`);
        await queryRunner.query(`DROP TABLE "professores"`);
        await queryRunner.query(`DROP TABLE "matriculas"`);
        await queryRunner.query(`DROP TABLE "disciplinas"`);
        await queryRunner.query(`DROP TABLE "alunos"`);
    }

}
