export interface ActivityLog {
  r: string;
  numberLevel: string;
  blockSize: string;
  dateIssues: string;
}

export interface LogFilters {
  r?: string;
  numberLevel?: string;
  blockSize?: string;
  date?: string;
  page: number;
  pageSize: number;
}

export interface LogResponse {
  data: ActivityLog[];
  totalEntries: number;
}