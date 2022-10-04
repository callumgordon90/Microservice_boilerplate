import { Column, Entity, ManyToMany, OneToMany } from "typeorm"
import { Base } from "../Base";
import { CarerJobRequest } from "../carer/CarerJobRequest";
import { CarerJobRequestExperience } from "../carer/Pivot/CarerJobRequestExperience";
import { FamilyMemberPathology } from "../family/pivot/FamilyMemberPathology";
import { CaregiverPreference } from "../select/CaregiverPreference";
import { CarerExperienceQuestion } from "./CarerExperienceQuestion";

@Entity('adm_pathologies')
export class  Pathology extends Base {

    @Column({ type: 'varchar' })
    name: string;

    @OneToMany(() => FamilyMemberPathology, familyMemberPathology => familyMemberPathology.familyMember)
    familyMemberPathology: FamilyMemberPathology;

    @OneToMany(() => CarerJobRequestExperience, carerJobRequestExperience => carerJobRequestExperience.pathology)
    jobRequestExperiences: CarerJobRequestExperience[];

    @OneToMany(() => CarerExperienceQuestion, carerExperienceQuestion => carerExperienceQuestion.pathology)
    carerExperienceQuestions: CarerExperienceQuestion[];

    @OneToMany(() => CarerJobRequest, carerJobRequest => carerJobRequest.pathology)
    carerJobRequests: CarerJobRequest[];

    @ManyToMany(() => CaregiverPreference, preference => preference.pathologies)
    caregiverPreferences: CaregiverPreference[];

}
