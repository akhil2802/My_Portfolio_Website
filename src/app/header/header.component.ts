import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // likeCount!: number;

  // ngOnInit() {
  //     // Retrieve like count from local storage or initialize to 0
  //   this.likeCount = Number(localStorage.getItem('likeCount')) || 0;
  // }

  // onLike() {
  //   this.likeCount++;
  //   localStorage.setItem('likeCount', String(this.likeCount)); // Store like count in local storage
  // }

  likeCount!: number;
  likeCountDisplay: string = '';

  ngOnInit() {
    // Retrieve like count from local storage or initialize to 0
    this.likeCount = Number(localStorage.getItem('likeCount')) || 0;
    this.updateLikeCountDisplay();
  }

  onLike() {
    this.likeCount++;
    localStorage.setItem('likeCount', String(this.likeCount)); // Store like count in local storage
    this.updateLikeCountDisplay();
  }

  updateLikeCountDisplay() {
    if (this.likeCount >= 1000) {
      const thousands = Math.floor(this.likeCount / 1000);
      const remainder = this.likeCount % 1000;
      if (remainder === 0) {
        this.likeCountDisplay = `${thousands}k`;
      } else {
        const decimal = Math.floor(remainder / 100);
        this.likeCountDisplay = `${thousands}.${decimal}k`;
      }
    } else {
      this.likeCountDisplay = String(this.likeCount);
    }
  }

}
