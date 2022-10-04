import { Column, Entity } from "typeorm"
import { Base } from "../Base";

@Entity('carer_contact_experiences')
export class ContactExperience extends Base{

    @Column({type: 'varchar', nullable: true})
    reference_person_name: string;

    @Column({type: 'varchar', nullable: true})
    reference_persona_phone: string;

    @Column({type: 'text', nullable: true})
    comments: string;

    

}
