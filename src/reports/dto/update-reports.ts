import { IsNotEmpty } from 'class-validator';
import { UpdateReportInput } from '../../graphql.schema';

export class UpdateReportDto extends UpdateReportInput {
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    sourceIdentityId: string;
}
