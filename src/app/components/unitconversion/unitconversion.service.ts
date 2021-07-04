import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConversionData} from 'src/app/interfaces/conversion-data';
import {Observable} from 'rxjs';
import {ConversionResponse} from 'src/app/interfaces/conversion-response';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnitConversionService {
  protected url = environment.API_END_POINT + '/api/v1/data/conversion';
  protected headerConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': '*',
    }
  };

  constructor(private http: HttpClient) {
  }

  checkConversion = (conversionData: ConversionData): Observable<ConversionResponse> => {
    const body = {
      input: conversionData.input,
      inputUnitOfMeasure: conversionData.inputUOM,
      targetUnitOfMeasure: conversionData.targetUOM,
      studentResponse: conversionData.studentResponse,
    };
    return this.http.post <ConversionResponse>(this.url, JSON.stringify(body), this.headerConfig);
  }
}
