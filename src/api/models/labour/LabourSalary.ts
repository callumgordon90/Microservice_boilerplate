import { Column, Entity } from "typeorm";
import { Base } from "../Base";

@Entity("labour_salaries")
export class LabourSalary extends Base {
  @Column({ type: "date" })
  start_date: Date;

  @Column({ type: "date", nullable: true })
  end_date: Date;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "tinyint", default: 0 })
  status: number;
}
