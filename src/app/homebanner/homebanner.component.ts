import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

// import './../../assets/js/custom.js';
// import 'themify-icons/css/themify-icons.css';

import Typed from 'typed.js';

declare var jQuery: any;

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomebannerComponent implements OnInit {
  typed: Typed;

  constructor() {}

  ngOnInit(): void {
    this.initializeTyped();
    // Other initialization logic for your component
  }

  initializeTyped(): void {
    const options = {
      strings: [
        'Frontend Development',
        'Backend Development',
        'Automation Testing',
        'OSS DevOps Tools'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('#type-it', options);
  }
}
