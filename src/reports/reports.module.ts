import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsResolvers } from './reports.resolvers';
import { ReportsService } from './reports.service';

@Module({
  imports: [],
  controllers: [ReportsController],
  providers: [ReportsService, ReportsResolvers],
})
export class ReportsModule {}
