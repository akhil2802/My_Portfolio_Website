import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  @ViewChild('slideContainer') slideContainerRef!: ElementRef;
  @ViewChild('row') rowRef!: ElementRef;

  ngOnInit(): void {
    const slideContainer = this.slideContainerRef.nativeElement as HTMLElement;
    const row = this.rowRef.nativeElement as HTMLElement;

    const slideNext = () => {
      row.style.transition = 'transform 0.3s ease-in-out';
      row.style.transform = 'translateX(-33.333%)';

      setTimeout(() => {
        row.style.transition = '';
        row.style.transform = 'translateX(0)';
        row.appendChild(row.firstElementChild);
      }, 300);
    };

    setInterval(slideNext, 5000);
  }
}
