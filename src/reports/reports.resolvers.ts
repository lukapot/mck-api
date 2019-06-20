import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Report } from 'graphql.schema';
import { UpdateReportDto } from './dto/update-reports';
import { ReportsService } from './reports.service';

@Resolver('Reports')
export class ReportsResolvers {

  constructor(
    private readonly reportsService: ReportsService,
    ) {

  }

  @Query('report')
  async report(
    @Args('id')
    id: string,
  ): Promise<Report> {
    return this.reportsService.findOneById(id);
  }

  @Query('getReports')
  async getReports(): Promise<Report[]> {
    return this.reportsService.getList();
  }

  @Mutation('createReport')
  async createReport(): Promise<Report> {
    return null;
  }

  @Mutation('updateReport')
  async updateReport(@Args('updateReportInput') args: UpdateReportDto): Promise<Report> {
    return this.reportsService.update({ ...args });
  }

}
