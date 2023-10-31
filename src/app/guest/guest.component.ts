import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  feedbackForm:FormGroup;
  constructor(private fb:FormBuilder,private feedback:FeedbackService) {}

  ngOnInit(): void {
    this.feedbackForm=this.fb.group({
      Name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      Email:['',[Validators.required,Validators.email]],
      Company:[''],
      Comments:['',Validators.required]
  
    })
  }
  
  
  submitFeedback(){
    if(this.feedbackForm.valid){
      this.feedback.addFeedback(this.feedbackForm.value),
      this.feedbackForm.reset(); 
    }
  }
}

