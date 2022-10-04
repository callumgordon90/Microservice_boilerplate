import { Column, Entity, ManyToMany } from "typeorm"
import { Base } from "../Base";
import { CaregiverPreference } from "../select/CaregiverPreference";

@Entity('adm_profile_essentials')
export class ProfileEssential extends Base {

    @Column({type: 'varchar'})
    name: string;

    @ManyToMany(() => CaregiverPreference, preference => preference.essentials)
    caregiverPreferences: CaregiverPreference[];

}
