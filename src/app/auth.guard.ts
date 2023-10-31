import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FeedbackService } from './feedback.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private feedback:FeedbackService,private router:Router){}
    canActivate(){
      if(this.feedback.isUserLoggedIn()){
        return true;
      }else{
        window.alert("oermission denied for this page")
        return false;
      }
    
    }
    
   
}

  

    
