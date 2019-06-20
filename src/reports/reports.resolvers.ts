import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Report } from 'graphql.schema';
import { UpdateReportDto } from './dto/update-reports';
import { ReportsService } from './reports.service';

const pubSub = new PubSub();
@Resolver('Reports')
export class ReportsResolvers {

  constructor(
    private readonly reportsService: ReportsService,
    ) {
      this.reportsService.reportChanged.subscribe((report) => {
        pubSub.publish('reportChanged', { reportChanged: report });
      });
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

  @Subscription('reportChanged')
  reportChanged(){
    return pubSub.asyncIterator('reportChanged');
  }
}
