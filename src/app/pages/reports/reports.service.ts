import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LogFilters, LogResponse } from './reports.model';
import { MOCK_ACTIVITY_LOGS } from './reports.mock';

@Injectable({ providedIn: 'root' })
export class ReportsService {

  getEntries(filters: LogFilters): Observable<LogResponse> {
    // TODO: Backend Integration

    return of({ data: MOCK_ACTIVITY_LOGS, totalEntries: MOCK_ACTIVITY_LOGS.length });
  }
}