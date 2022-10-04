import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Base } from "../Base";
import { ProfilePreferencesTodoTasks } from "../service/pivot/ProfilePreferencesTodoTasks";
import { Service } from "../service/Service";
import { CaregiverPreference } from "./CaregiverPreference";
import { ServiceProfileCar } from "./ServiceProfileCar";

@Entity("select_service_profile_preferences")
export class ServiceProfilePreference extends Base {
  @OneToMany(
    () => CaregiverPreference,
    (caregiverPreference) => caregiverPreference.profilePreference
  )
  caregiverPreferences: CaregiverPreference[];

  @OneToMany(() => ServiceProfileCar, (serviceProfileCar) => serviceProfileCar.serviceProfilePreference)
  serviceProfileCars: ServiceProfileCar[];

  @OneToOne(() => Service, service => service.profilePreferences)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @OneToMany(() => ProfilePreferencesTodoTasks, profileTasks => profileTasks.preference)
  preferenceTasks: ProfilePreferencesTodoTasks[];
}
