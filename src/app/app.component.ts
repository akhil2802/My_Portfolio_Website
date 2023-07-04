import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mdb-angular-ui-kit-free';

  likeCount!: number;

  ngOnInit() {
      // Retrieve like count from local storage or initialize to 0
    this.likeCount = Number(localStorage.getItem('likeCount')) || 0;
  }

  onLike() {
    this.likeCount++;
    localStorage.setItem('likeCount', String(this.likeCount)); // Store like count in local storage
  }
}
