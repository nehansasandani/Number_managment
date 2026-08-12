import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivityLog, LogFilters, LogResponse } from './reports.model';

//To be removed after backend integration
import { MOCK_ACTIVITY_LOGS } from './reports.mock';

@Injectable({ providedIn: 'root' })
export class ReportsService {

  getEntries(filters: LogFilters): Observable<LogResponse> {

    //To be removed after backend integration

    //Check each field's filter conditionally (skip if empty, match if set)
    const filtered: ActivityLog[] = MOCK_ACTIVITY_LOGS.filter(log => {
      const matchesR = !filters.r || log.r === filters.r;
      const matchesNumberLevel = !filters.numberLevel || log.numberLevel === filters.numberLevel;
      const matchesBlockSize = !filters.blockSize || log.blockSize === filters.blockSize;
      const matchesDate = !filters.date || this.isSameDate(log.dateIssues, filters.date);
      return matchesR && matchesNumberLevel && matchesBlockSize && matchesDate;
    });

    const totalEntries = filtered.length;

    //Slice down to the current page only
    const startIndex = (filters.page - 1) * filters.pageSize;
    const endIndex = startIndex + filters.pageSize;
    const pageData = filtered.slice(startIndex, endIndex);

    return of({ data: pageData, totalEntries });

  }

  //To be removed after backend integration
  private isSameDate(logDateStr: string, filterDateStr: string): boolean {
    const logDate = new Date(logDateStr);
    const filterDate = new Date(filterDateStr);

    return (
      logDate.getFullYear() === filterDate.getFullYear() &&
      logDate.getMonth() === filterDate.getMonth() &&
      logDate.getDate() === filterDate.getDate()
    );
  }
}