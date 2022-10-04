import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm"
import {Base} from "../Base";
import {
    LabourProcedure,
    LabourDocument,
    LabourImprovement,
    LabourPayroll,
    LabourProcessMessage,
    Service,
    Carer,
    FamilyMember, ServiceType,
} from '..';

@Entity("labour_relations")
export class LabourRelation extends Base {

    static _PENDING = 0;
    static _IN_PROCESS = 1;
    static _EMPLOYMENT_RELEASE = 2;
    static _WORK_LEAVE = 3;
    static _CANCELLED = 4;

    static get PENDING(): number {
        return this._PENDING;
    }

    static get IN_PROCESS(): number {
        return this._IN_PROCESS;
    }

    static get EMPLOYMENT_RELEASE(): number {
        return this._EMPLOYMENT_RELEASE;
    }

    static get WORK_LEAVE(): number {
        return this._WORK_LEAVE;
    }

    static get CANCELLED(): number {
        return this._CANCELLED;
    }

    @Column({type: "date"})
    incorporation_date: Date;

    @Column({type: "tinyint", nullable: true})
    status: number;

    @OneToMany(() => LabourProcedure, labourProcedure => labourProcedure.labourRelation)
    labourProcedures: LabourProcedure[];

    @OneToMany(() => LabourDocument, labourDocument => labourDocument.labourRelation)
    labourDocuments: LabourDocument[];

    @OneToMany(() => LabourImprovement, labourImprovement => labourImprovement.labourRelation)
    labourImprovements: LabourImprovement[];

    @OneToMany(() => LabourPayroll, labourPayroll => labourPayroll.labourRelation)
    labourPayrolls: LabourPayroll[];

    @OneToMany(() => LabourProcessMessage, labourProcessMessage => labourProcessMessage.labourRelation)
    labourProcessMessages: LabourProcessMessage[];

    @ManyToOne(() => Service, service => service.labourRelations)
    @JoinColumn({name: 'service_id'})
    service: Service;

    @ManyToOne(() => ServiceType, serviceType => serviceType.labourRelations)
    @JoinColumn({name: 'service_type_id'})
    serviceType: ServiceType

    @ManyToOne(() => Carer, carer => carer.labourRelation)
    @JoinColumn({name: 'carer_id'})
    carer: Carer

    @ManyToOne(() => FamilyMember, familyMember => familyMember.labourRelations)
    @JoinColumn({name: 'employer_id'})
    employer: FamilyMember

    //employer_id

}
