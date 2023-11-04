import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, JoinTable, ManyToMany } from "typeorm";

@Entity({name: "alunos"})
export class Aluno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 40})
    nome: string;

    @OneToMany(() => Matricula, matricula => matricula.aluno)
    matriculas: Matricula[]
}

@Entity({name:"disciplinas"})
export class Disciplina{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 30})
    nome: string;

    @OneToMany(() => Matricula, matricula => matricula.disciplina)
    matriculas: Matricula[]
}

@Entity({name:"matriculas"})
export class Matricula{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Aluno, (aluno) => aluno.matriculas)
    @JoinColumn({name:"idaluno"})
    aluno: Aluno;

    @ManyToOne(() => Disciplina, (disciplina) => disciplina.matriculas)
    @JoinColumn({name:"iddisciplina"})
    disciplina: Disciplina;

    @Column({ type: 'float'})
    value: number;
}

@Entity({name:"professores"})
export class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 40})
    nome: string;

    @ManyToMany(() => Disciplina)
    @JoinTable({name:"professor_pordisciplina"})
    disciplinas: Disciplina[]
}