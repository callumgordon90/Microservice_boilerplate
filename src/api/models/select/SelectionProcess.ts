import { AfterLoad, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Base } from "../Base";
import { LabourContract, LabourProcessMessage, Employee, Service, User, ServiceType, CarerJob, CarerJobRequest } from "..";
import db from '../../database/db';
import { IsOptional, IsString } from "class-validator";

@Entity("select_selection_processes")
export class SelectionProcess extends Base {

    static _WORK_FLOW_STATUS_VALUES = {
        0: 'Inactive',
        1: 'Active',
        9: 'Finished'
    }

    static _PROFILE_SUBMISSION_STATUSES = {
        0: 'Pending family interview',
        1: 'In coordination',
        2: 'Post interview',
        3: 'Send registration',
    }

    static STATUS_VALUES = {
        0: 'closed',
        1: 'open'
    }

    @Column({ type: "varchar", nullable: true })
    service_type: string;

    @Column({ type: "varchar", nullable: true })
    priority: string;

    @Column({ type: "varchar", nullable: true })
    contact_email: string;

    @Column({ type: "varchar", nullable: true })
    week_hours: string;

    @Column({ type: "varchar", nullable: true })
    budgeted_hours: string;

    @Column({ type: "tinyint" })
    status: number;

    @Column({ type: "varchar", default: "selection" })
    current_department: string;

    @IsOptional()
    province: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsOptional()
    pending_family_interview: number;

    @OneToOne(() => Service, service => service.selectionProcess, { eager: true })
    @JoinColumn({ name: 'service_id' })
    service: Service;

    @ManyToOne(() => Employee, employee => employee.selectionProcesses, { eager: true })
    @JoinColumn({ name: 'asignee_id' })
    assignee: Employee | Partial<Employee & User>;

    @OneToMany(() => LabourProcessMessage, (processMessage) => processMessage.selectionProcess)
    processMessages: LabourProcessMessage[];

    @OneToMany(() => LabourContract, (labourContract) => labourContract.selectionProcess)
    contracts: LabourContract[];

    @IsOptional()
    get job() {
        if (!this.service) return;
        return this.service?.carerJob;
    }

    @IsOptional()
    get caregiverProfiles() {
        if (!this.service) {
            return [];
        }
        return this.service?.carerJob?.carerJobRequests?.filter(c => c?.status !== 0) ?? [];
    }

    @AfterLoad()
    loadAssignee() {
        if (this.assignee && this.assignee.user) {
            this.assignee = {
                id: this.assignee.id,
                name: this.assignee.user.fullName,
                user_image: this.assignee.user.user_image
            };
        }
    }
}
