import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { CaregiverPreference } from "../select/CaregiverPreference";
import { Country } from "./Country";

@Entity('adm_formations')
export class Formation extends Base{

    @Column({type: 'varchar'})
    name: string;

    @ManyToOne(() => Country, country => country.formations)
    @JoinColumn({name: 'country_id'})
    country: Country;

    @ManyToMany(() => CaregiverPreference, preference => preference.formations)
    caregiverPreferences: CaregiverPreference[];

}
