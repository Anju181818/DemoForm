import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  feedbackData: any[];

  constructor(private feedbackService: FeedbackService) {}
    
  ngOnInit(): void {
     this.feedbackData = this.feedbackService.getFeedback();
    
    
  }
  

  
    
  
}




function ngOnInit() {
  throw new Error('Function not implemented.');
}

