import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { ServiceProfilePreference, Pathology, Formation, ProfileEssential, ProfilePersonality } from '..';
import { Base } from '../Base';

@Entity('select_caregiver_preferences')
export class CaregiverPreference extends Base {
  @Column({ type: 'tinyint' })
  orientative_age: number;

  @Column({ type: 'tinyint' })
  gender: number;

  @Column({ type: 'tinyint', default: 0 })
  driving_lisence: number;

  @Column({ type: 'text', nullable: true })
  other: string;

  @ManyToOne(
    () => ServiceProfilePreference,
    (serviceProfilePreference) => serviceProfilePreference.caregiverPreferences,
  )
  @JoinColumn({ name: 'profile_preference_id' })
  profilePreference: ServiceProfilePreference;

  @ManyToMany(() => Pathology, pathology => pathology.caregiverPreferences)
  @JoinTable({ name: 'caregiver_preferences_pathologies', joinColumn: { name: 'preference_id' }, inverseJoinColumn: { name: 'pathology_id' } })
  pathologies: Pathology[];

  @ManyToMany(() => Formation, formation => formation.caregiverPreferences)
  @JoinTable({ name: 'caregiver_preferences_formations', joinColumn: { name: 'preference_id' }, inverseJoinColumn: { name: 'formation_id' } })
  formations: Formation[];

  @ManyToMany(() => ProfileEssential, essential => essential.caregiverPreferences)
  @JoinTable({ name: 'caregiver_preferences_essentials', joinColumn: { name: 'preference_id' }, inverseJoinColumn: { name: 'profile_essential_id' } })
  essentials: ProfileEssential[];

  @ManyToMany(() => ProfilePersonality, personality => personality.caregiverPreferences)
  @JoinTable({ name: 'caregiver_preferences_personalities', joinColumn: { name: 'preference_id' }, inverseJoinColumn: { name: 'profile_personality_id' } })
  personalities: ProfilePersonality[];
}
