import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  constructor(private router: Router,private http: HttpClient) { }
  name: string = '';
  email: string = '';
  password: string = '';
  register() {
    console.log("trying...")
    let bodyData = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    console.log(bodyData);
    this.http.post("http://localhost:3000/user/create", bodyData).subscribe((resultData: any) => {
  console.log(resultData);
  alert("User Registered Successfully")
  this.router.navigateByUrl('/login');
}, error => {
  console.log(error);
  alert("Registration Failed")
});
  }

}
