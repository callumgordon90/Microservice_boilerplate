import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { ServiceProfilePreference } from "./ServiceProfilePreference";

@Entity("select_service_profile_car")
export class ServiceProfileCar extends Base {
  @Column({ type: "tinyint", default: 0 })
  car_needed: number;

  @Column({ type: "integer", nullable: true })
  distance: number;

  @Column({ type: "double", nullable: true })
  km_cost: number;

  @Column({ type: "text", nullable: true })
  motive: string;

  @ManyToOne(() => ServiceProfilePreference, (serviceProfilePreference) => serviceProfilePreference.serviceProfileCars)
    @JoinColumn({ name: 'profile_preference_id' })
    serviceProfilePreference: ServiceProfilePreference
}
