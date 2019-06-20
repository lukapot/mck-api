import { Args, Query, Resolver } from '@nestjs/graphql';
import { Report } from 'graphql.schema';
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
}
