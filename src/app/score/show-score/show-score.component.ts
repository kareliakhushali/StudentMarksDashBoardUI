import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreApiService } from 'src/app/services/score-api.service';


@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.css']
})
export class ShowScoreComponent implements OnInit{
 scoreList$! : Observable<any[]>;
 subjectModulesList$!:Observable<any[]>;
 statusList!:Observable<any[]>;
subjectModuleList : any  = [];
modalTitle:string  = '';
activatedAddEditStoreComponent : boolean = false;
score :any;
//to display data associcated worh foreign keys
subjectModulesMap : Map<number,string> = new Map();
constructor(public scoreService:ScoreApiService){

}
ngOnInit():void {

  this.scoreList$ = this.scoreService.getScoreList();
  this.subjectModulesList$ = this.scoreService.getSubjectModuleList();
  this.refreshSubjectModulesMap();
}
modalAdd()
{
this.score = {
  id :0,
  status:null,
  moduleScore:null,
  subjectModuleId:null
}
this.modalTitle = "Add Score";
this.activatedAddEditStoreComponent = true;
}
refreshSubjectModulesMap(){
  this.scoreService.getSubjectModuleList().subscribe(data=>{
    this.subjectModuleList = data;
    for(let i =0;i<data.lengthl;i++)
    {
      this.subjectModuleList.set(this.subjectModuleList[i].id,this.subjectModuleList[i].moduleName)
    }
  })
}
    }


