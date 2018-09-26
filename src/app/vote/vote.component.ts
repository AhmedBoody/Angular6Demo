import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
@Input() voteCount = 0;
@Input() myVote = 0;
@Output() vote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  upVote(){
    if(this.myVote == 1)
    return;

    this.myVote = 1;
    this.voteCount ++;
  }
  downVote(){
    if(this.myVote == -1)
    return;

    this.myVote = -1;
    this.voteCount --;
  }
}
