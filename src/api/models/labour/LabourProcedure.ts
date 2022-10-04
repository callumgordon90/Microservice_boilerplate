import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { LabourRelation } from "./LabourRelation";

@Entity("labour_procedures")
export class LabourProcedure extends Base {

  static _CONTRACT_REGISTRATION: number = 1;
  static _CONTRACT_TERMINATION: number = 2;
  static _EXTERNAL_CONTRACT_REGISTRATION: number = 3;
  static _EXTERNAL_CONTRACT_TERMINATION: number =4;
  static _SCHEDULE_VARIATION: number = 5;
  static _SALARY_VARIATION: number = 6;
  static _ADDRESS_VARIATION: number = 7;
  static _WORKDAY_VARIATION: number = 8;
  static _PENDING_STATUS: number = 0;

  static _IN_PROGRESS_STATUS: number = 1;
  static _COMPLETED_STATUS: number = 2;

  static get CONTRACT_REGISTRATION(): number {
    return this._CONTRACT_REGISTRATION;
  }

  static get CONTRACT_TERMINATION(): number {
    return this._CONTRACT_TERMINATION;
  }

  static get EXTERNAL_CONTRACT_REGISTRATION(): number {
    return this._EXTERNAL_CONTRACT_REGISTRATION;
  }

  static get EXTERNAL_CONTRACT_TERMINATION(): number {
    return this._EXTERNAL_CONTRACT_TERMINATION;
  }

  static get SCHEDULE_VARIATION(): number {
    return this._SCHEDULE_VARIATION;
  }

  static get SALARY_VARIATION(): number {
    return this._SALARY_VARIATION;
  }

  static get ADDRESS_VARIATION(): number {
    return this._ADDRESS_VARIATION;
  }

  static get WORKDAY_VARIATION(): number {
    return this._WORKDAY_VARIATION;
  }

  static get PENDING_STATUS(): number {
    return this._PENDING_STATUS;
  }

  static get IN_PROGRESS_STATUS(): number {
    return this._IN_PROGRESS_STATUS;
  }

  static get COMPLETED_STATUS(): number {
    return this._COMPLETED_STATUS;
  }

  @Column({ type: "tinyint" })
  type: number;

  @Column({ type: "longtext", nullable: true })
  steps: string;

  @Column({ type: "tinyint" })
  status: number;

  @ManyToOne(() => LabourRelation, (labourRelation) => labourRelation.labourProcedures)
  @JoinColumn({ name: 'labour_relation_id' })
  labourRelation: LabourRelation
}
