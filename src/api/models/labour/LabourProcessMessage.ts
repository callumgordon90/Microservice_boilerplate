import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { SelectionProcess } from "../select/SelectionProcess";
import { LabourRelation } from "./LabourRelation";
import {User} from "../auth/User";

@Entity("labour_process_messages")
export class LabourProcessMessage extends Base {
  @Column({ type: "varchar", nullable: true })
  message: string;

  @ManyToOne(() => LabourRelation, (labourRelation) => labourRelation.labourProcessMessages)
  @JoinColumn({ name: "labour_relation_id" })
  labourRelation: LabourRelation;

  @ManyToOne(() => SelectionProcess, (selectProcess) => selectProcess.processMessages)
  @JoinColumn({ name: "process_id" })
  selectionProcess: SelectionProcess;

  @ManyToOne( () => User, sender_by => sender_by.process_messages )
  @JoinColumn( { name: 'sender_id'} )
  sender: User

}
