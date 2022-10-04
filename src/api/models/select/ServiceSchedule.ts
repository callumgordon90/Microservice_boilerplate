import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Base } from "../Base";
import { Service } from "../service/Service";

@Entity("select_service_schedules")
export class ServiceSchedule extends Base {
  @Column({ type: "date", nullable: true })
  from: Date;

  @Column({ type: "date", nullable: true })
  to: Date;

  @Column({ type: "integer", nullable: true })
  weekly_hours: number;

  @Column({ type: "longtext", nullable: true })
  hours: string;

  @OneToOne(() => Service, service => service.schedule)
  @JoinColumn({ name: 'service_id' })
  service: Service;
}
