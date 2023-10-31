import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() {
    const storedData = localStorage.getItem('feedbackData');
    if (storedData) {
      this.feedbackData = JSON.parse(storedData);
    }
   }
   feedbackData: string[] = [];

  addFeedback(feedback: string) {
    this.feedbackData.push(feedback);
    localStorage.setItem('feedbackData', JSON.stringify(this.feedbackData));

  }

  getFeedback() {
    return this.feedbackData;
  }
  isUserLoggedIn(){
    return true;
  }
}

