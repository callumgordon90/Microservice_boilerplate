import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import { Base } from "../Base";
import { SelectionProcess } from "../select/SelectionProcess";
import {Service} from "../service/Service";


@Entity("labour_contracts")
export class LabourContract extends Base {
  @Column({ type: "varchar" })
  internal_clause: string;

  @Column({ type: "longtext", nullable: true })
  clauses: string;

  @Column({ type: "varchar", nullable: true })
  other: string;

  @ManyToOne(() => SelectionProcess, (selectProcess) => selectProcess.contracts)
  @JoinColumn({ name: "process_id" })
  selectionProcess: SelectionProcess;

  @ManyToOne(type => Service, service => service.labourContracts)
  @JoinColumn({name: 'service_id'})
  service: Service;

}
