import { Column, Entity } from "typeorm";
import { Base } from "../Base";

@Entity("select_service_step_indices")
export class ServiceStepIndice extends Base {
  @Column({ type: "varchar" })
  step_class: string;
}
