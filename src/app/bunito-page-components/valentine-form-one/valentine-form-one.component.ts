import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy, OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {Button} from "primeng/button";
import {ImageCompare} from "primeng/imagecompare";
import {NgOptimizedImage} from "@angular/common";
import {ToggleButton, ToggleButtonChangeEvent} from "primeng/togglebutton";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'atom-valentine-form-one',
  imports: [
    Button,
    ImageCompare,
    ToggleButton,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './valentine-form-one.component.html',
  styleUrl: './valentine-form-one.component.scss'
})
export class ValentineFormOneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('imageCompare', { static: true }) imageCompare!: ElementRef;
  @Input() valentineFormGroup!: FormGroup;
  @Output() activateCallback = new EventEmitter<number>();

  private slider!: HTMLInputElement;
  private rightImage!: HTMLElement;

  ngAfterViewInit() {
    this.initializeElements();
    this.attachSliderListener();
  }

  ngOnDestroy() {
    this.detachSliderListener();

    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
  }

  private initializeElements() {
    if (!this.imageCompare) {
      console.warn('ImageCompare not found');
      return
    }

    this.slider = this.imageCompare.nativeElement.querySelector('.p-imagecompare-slider') as HTMLInputElement;
    this.rightImage = this.imageCompare.nativeElement.querySelector('img:nth-of-type(2)') as HTMLElement;
  }

  private attachSliderListener() {
    if (this.slider) {
      this.slider.addEventListener('input', this.handleSliderInput);
    } else {
      console.warn('Slider not found');
    }
  }

  private detachSliderListener() {
    if (this.slider) {
      this.slider.removeEventListener('input', this.handleSliderInput);
    }
  }

  private handleSliderInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    const accept = Number(value) >= 65
    this.toggleButtonValueOnBreakpoint(accept);
  };


  private toggleButtonValueOnBreakpoint(accept: boolean) {
    const currentValue = this.valentineFormGroup.controls['valentineAcceptance'].value;
    if (currentValue !== accept) {
      this.valentineFormGroup.controls['valentineAcceptance'].setValue(accept);
      this.onToggleChange(accept);
    }
  }

  setSliderPosition(value: number) {
    if (this.slider) {
      this.slider.value = `${value}`;
      this.slider.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  onToggleValentinesResponse(toggleEvent: ToggleButtonChangeEvent) {
    const value = toggleEvent.checked ? 100 : 0;
    this.setSliderPosition(value);
    this.onToggleChange(toggleEvent?.checked ?? true);
  }

  onNext() {
    this.activateCallback.emit(2);
  }

  private currentAudio: HTMLAudioElement | null = null;
  private onToggleChange(checked: boolean) {
    console.log("Toggle changed: ", checked);
    if (checked) {
      if (this.currentAudio) {
        this.currentAudio.pause(); // Pause the current audio
        this.currentAudio.currentTime = 0; // Reset the playback position to the beginning
      }

      // Play new audio
      this.currentAudio = new Audio('assets/sounds/happy-happy-happy-song.mp3');
      this.currentAudio.play().catch(error => {
        console.error("Error playing the sound: ", error);
      });
    } else {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }
      this.currentAudio = new Audio('assets/sounds/rude.m4a');
      this.currentAudio.play().catch(error => {
        console.error("Error playing the sound: ", error);
      });
    }
  }
}
