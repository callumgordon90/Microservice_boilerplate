import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { Base } from "../Base";
import { LabourRelation } from "./LabourRelation";
import {Carer} from "../carer/Carer";
import {LabourPayrollImprovement} from "./LabourPayrollImprovement";

@Entity("labour_improvements")
export class LabourImprovement extends Base {
  @Column({ type: "integer", default: 1 })
  number_days: number;

  @Column({ type: "date" })
  date_from: Date;

  @Column({ type: "date", nullable: true })
  date_to: Date;

  @Column({ type: "double", nullable: true })
  price: number;

  @Column({ type: "integer", nullable: true })
  hours_number: number;

  @Column({ type: "tinyint" })
  type: number;

  @Column({ type: "tinyint", default: 0 })
  need_revision: number;

  @Column({ type: "date", nullable: true })
  revision_date: Date;

  @Column({ type: "tinyint", nullable: true })
  illness_type: number;

  @Column({ type: "tinyint", nullable: true })
  illness_leave_type: number;

  @Column({ type: "tinyint", nullable: true })
  illness_entity_sender: number;

  @Column({ type: "boolean", nullable: true })
  monthly: boolean;

  @Column({ type: "boolean", nullable: true, default: 0 })
  seizure_procedure: boolean;

  @ManyToOne(() => LabourRelation, (labourRelation) => labourRelation.labourImprovements)
  @JoinColumn({ name: 'labour_relation_id' })
  labourRelation: LabourRelation

  @ManyToOne( () => Carer, carer => carer.labour_improvements )
  @JoinColumn( { name: 'carer_id'} )
  carer: Carer

  //payroll_improvements (OneToMany)
  @OneToMany( () => LabourPayrollImprovement, payroll_to_improvement => payroll_to_improvement.improvement )
  payroll_improvements: LabourPayrollImprovement

}
