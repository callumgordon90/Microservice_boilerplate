import {Entity, JoinColumn, ManyToOne} from "typeorm"
import { Base } from "../Base";
import {LabourPayroll} from "./LabourPayroll";
import {LabourImprovement} from "./LabourImprovement";

@Entity("labour_payrolls_improvements")
export class LabourPayrollImprovement extends Base {

    @ManyToOne( () => LabourPayroll, payroll => payroll.payroll )
    @JoinColumn( { name: 'payroll_id' })
    payroll_improvements: LabourPayroll

    @ManyToOne( () => LabourImprovement, improvement => improvement.payroll_improvements )
    @JoinColumn( { name: 'improvement_id' })
    improvement: LabourImprovement

}
