import { IsNotEmpty } from 'class-validator';
import { State, UpdateReportInput } from '../../graphql.schema';

export class UpdateReportDto extends UpdateReportInput {
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    state: State;
}
