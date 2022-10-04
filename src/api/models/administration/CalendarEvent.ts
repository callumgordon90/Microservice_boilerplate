import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { Carer } from "../carer/Carer";
import { Family } from "../family/Family";

@Entity('adm_calendar_events')
export class CalendarEvent extends Base {

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar'})
    position: string;

    @Column({type: 'datetime'})
    start: Date;

    @Column({type: 'datetime'})
    end: Date;

    @Column({type: 'tinyint'})
    type: number;

    @Column({type: 'tinyint'})
    status: number;

    @ManyToOne(type => Carer, carer => carer.calendarEvents)
    @JoinColumn({name: 'carer_id'})
    carer: Carer;

    @ManyToOne(type => Family, family => family.calendarEvents)
    @JoinColumn({name: 'family_id'})
    family: Family;

}
