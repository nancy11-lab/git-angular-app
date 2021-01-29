import {HttpEvent, HttpInterceptor,HttpHandler,HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor() { } 
      

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    let reqClone;
    if(token){
      const headers= new HttpHeaders({
        authorization:token,
  
      });
       reqClone = req.clone({headers});

    }
    else{
      reqClone = req;
    }
   
    //const reqClone = req.clone({headers: req.headers.append('authorization', `${token}`)});
    
    return next.handle(reqClone);
  }


    

  
}
