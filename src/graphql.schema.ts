
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum ReferenceResourceType {
    ARTICLE = "ARTICLE",
    POST = "POST",
    REPLY = "REPLY"
}

export enum ReportType {
    INFRINGES_PROPERTY = "INFRINGES_PROPERTY",
    SPAM = "SPAM",
    VIOLATES_POLICIES = "VIOLATES_POLICIES"
}

export enum Source {
    REPORT = "REPORT"
}

export enum State {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
}

export class CreateReportInput {
    name: string;
}

export class UpdateReportInput {
    id: string;
    state: State;
    isResolved?: boolean;
}

export abstract class IMutation {
    abstract createReport(createReportInput?: CreateReportInput): Report | Promise<Report>;

    abstract updateReport(updateReportInput?: UpdateReportInput): Report | Promise<Report>;

    abstract deleteReport(id: string): Report | Promise<Report>;
}

export class Payload {
    source?: Source;
    reportType?: ReportType;
    message?: string;
    reportId?: string;
    referenceResourceId?: string;
    referenceResourceType?: ReferenceResourceType;
}

export abstract class IQuery {
    abstract report(id: string): Report | Promise<Report>;

    abstract getReports(): Report[] | Promise<Report[]>;
}

export class Reference {
    referenceId?: string;
    referenceType?: Source;
}

export class Report {
    id: string;
    source?: Source;
    sourceIdentityId?: string;
    reference?: Reference;
    state?: State;
    payload?: Payload;
    created?: string;
    isResolved?: boolean;
}

export abstract class ISubscription {
    abstract reportChanged(): Report | Promise<Report>;
}
