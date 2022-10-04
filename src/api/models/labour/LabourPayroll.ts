import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { Base } from "../Base";
import { LabourRelation } from "./LabourRelation";
import {Carer} from "../carer/Carer";
import {LabourPayrollImprovement} from "./LabourPayrollImprovement";

@Entity("labour_payrolls")
export class LabourPayroll extends Base {
  @Column({ type: "date", nullable: true })
  from_date: Date;

  @Column({ type: "date", nullable: true })
  to_date: Date;

  @Column({ type: "longtext" })
  data: string;

  @ManyToOne(() => LabourRelation, (labourRelation) => labourRelation.labourPayrolls)
  @JoinColumn({ name: 'labour_relation_id' })
  labourRelation: LabourRelation

  @ManyToOne( () => Carer, carer => carer.carer )
  @JoinColumn( { name: 'carer_id' })
  labour_payrolls: Carer

  @OneToMany( () => LabourPayrollImprovement, payroll_improvement => payroll_improvement.payroll_improvements )
  payroll: LabourPayrollImprovement

  //employer_id
  //file
}
