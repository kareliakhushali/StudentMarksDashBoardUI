import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreApiService } from '../../services/score-api.service';

@Component({
  selector: 'app-add-edit-score',
  templateUrl: './add-edit-score.component.html',
  styleUrls: ['./add-edit-score.component.css']
})
export class AddEditScoreComponent implements OnInit {
  scoreList$! : Observable<any[]>;
  subjectModulesList$!:Observable<any[]>;
  statusList!:Observable<any[]>;
  constructor(private scoreService:ScoreApiService){

  }
  @Input() score : any;
  id: number = 0;
  status :string = "";
  moduleScore : number = 0;
  subjectModuleId!:number;


  ngOnInit(): void {

  }

}
