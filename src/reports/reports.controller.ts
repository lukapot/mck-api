import { BadRequestException, Controller, Param, Put, Request } from '@nestjs/common';
import { ApiImplicitParam } from '@nestjs/swagger';
import { Report } from 'graphql.schema';
import { ReportsService } from './reports.service';

@Controller()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Put('report/:reportId')
  @ApiImplicitParam({name: 'reportId', required: true})
  async update(@Param('reportId') reportId: string, @Request() request): Promise<Report> {
    if (!reportId) {
      throw new BadRequestException('reportId is required');
    }
    const { ticketState, isResolved } = request.body;
    return this.reportsService.update({
      id: reportId,
      state: ticketState,
      isResolved: !!isResolved,
    });
  }
}
