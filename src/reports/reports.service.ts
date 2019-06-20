import { BadRequestException, Injectable } from '@nestjs/common';
import * as database from '../../assets/reports.json';
import { Report } from '../graphql.schema';

@Injectable()
export class ReportsService {
  private reportsDatabase: any = database;

  public async findOneById(id: string): Promise<Report> {
    const report = this.reportsDatabase.find(r => r.id === id);
    return report;
  }
}
