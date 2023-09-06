import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScoreApiService {
  private readonly baseApiUrl:string = 'https://localhost:44340/api';

constructor(private http:HttpClient) { }
//for score module
getScoreList(): Observable<any>{
  return this.http.get<any>(this.baseApiUrl + '/Score')

}
addScore(data:any):Observable<any>
{
  return this.http.post<any>(this.baseApiUrl+'/Score',data);
}
updateScore(id:string | number, data:any):Observable<any>
  {
    return this.http.put<any>(this.baseApiUrl + '/Score' + id, data);

  }
  deleteScore(id:string | number) : Observable<any>
  {
    return this.http.delete<any> (this.baseApiUrl + '/Score' + id);
  }

  // For subject module
  getSubjectModuleList(): Observable<any>{
    return this.http.get(this.baseApiUrl + '/SubjectModule')

  }
  addSubjectModule(data:any):Observable<any>
  {
    return this.http.post(this.baseApiUrl+'/SubjectModule',data);
  }
  updateSubjectModule(id:string | number, data:any):Observable<any>
    {
      return this.http.put<any>(this.baseApiUrl + '/SubjectModule' + id, data);

    }
    deleteSubjectModule(id:string | number) : Observable<any>
    {
      return this.http.delete<any> (this.baseApiUrl + '/SubjectModule' + id);
    }

    //for status module
    getStatus(): Observable<any>{
      return this.http.get(this.baseApiUrl + '/Status')

    }
    addStatus(data:any):Observable<any>
    {
      return this.http.post(this.baseApiUrl+'/Status',data);
    }
    updateStatus(id:string | number, data:any):Observable<any>
      {
        return this.http.put<any>(this.baseApiUrl + '/Status' + id, data);

      }
      deleteStatus(id:string | number) : Observable<any>
      {
        return this.http.delete<any> (this.baseApiUrl + '/Status' + id);
      }

}


