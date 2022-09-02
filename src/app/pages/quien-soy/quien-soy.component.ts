import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss'],
})
export class QuienSoyComponent implements OnInit {
  myProfile: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://api.github.com/users/EmmaVZ89')
      .subscribe((res: any) => {
        this.myProfile = res;
      });
  }

  test() {
    console.log(this.myProfile);
  }
}
