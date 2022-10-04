import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { LabourRelation } from "./LabourRelation";
import {Carer} from "../carer/Carer";

@Entity("labour_documents")
export class LabourDocument extends Base {
  @Column({ type: "varchar" })
  uuid: string;

  @Column({ type: "varchar", nullable: true })
  type: string;

  @Column({ type: "float", nullable: true })
  size: number;

  @Column({ type: "varchar", nullable: true })
  file_name: string;

  @Column({ type: "varchar" })
  file_type: string;

  @Column({ type: "bigint" })
  file: number;

  @ManyToOne(() => LabourRelation, (labourRelation) => labourRelation.labourDocuments)
  @JoinColumn({ name: "labour_relation_id" })
  labourRelation: LabourRelation;

  @ManyToOne( () => Carer, carer => carer.documents )
  @JoinColumn( { name: 'carer_id' })
  carer: Carer

  //employer_id
  //beneficiary_id
}
