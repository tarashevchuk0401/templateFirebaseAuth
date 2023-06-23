import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, Observer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  urlUsersPost:string = 'https://test-c3b8c-default-rtdb.europe-west1.firebasedatabase.app/user/'
  userTest: any;
 


  constructor(private http : HttpClient, private auth : AuthService) { }

  postItem(text: string){
    // this.auth.userId.subscribe(userId => {
    //   this.userTest = userId;
    //   console.log('!' + userId)
    //   return this.http.post('https://test-c3b8c-default-rtdb.europe-west1.firebasedatabase.app/user/' + this.userTest + '/post.json', {post: text})

    // });
    return this.http.post('https://test-c3b8c-default-rtdb.europe-west1.firebasedatabase.app/user/' + sessionStorage.getItem('id') + '/post.json', {post: text})

    // this.userTest = '1test1'
    // console.log(userTest2)
  }
  getItem(){
   return this.http.get('https://test-c3b8c-default-rtdb.europe-west1.firebasedatabase.app/user/' + sessionStorage.getItem('id')  + '/post.json')
  }
}
