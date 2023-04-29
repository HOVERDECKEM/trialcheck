import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private renderer: Renderer2, private router: Router,private http: HttpClient) { }
  email: string = '';
  password: string = '';
  login() {
    console.log(this.email);
    console.log(this.password);
  
    let bodyData = {
      email: this.email,
      password: this.password,
    };
  
    this.http.post("http://localhost:3000/user/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        // show pop-up card
        alert('User logged in Successfully!');
        this.router.navigateByUrl('/home');
        // redirect to home page after 5 seconds
        // setTimeout(() => {
          
        // }, 5000);
      } else {
        alert("Incorrect Email or Password");
        console.log("Error login");
      }
    });
  }
}
