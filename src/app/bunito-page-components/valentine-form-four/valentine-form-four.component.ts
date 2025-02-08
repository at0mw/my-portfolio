import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Button} from "primeng/button";
import {FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'atom-valentine-form-four',
  imports: [
    Button,
    DatePipe
  ],
  templateUrl: './valentine-form-four.component.html',
  styleUrl: './valentine-form-four.component.scss'
})
export class ValentineFormFourComponent implements OnInit {
  @Input() valentineFormGroup!: FormGroup;
  @Output() activateCallback = new EventEmitter<number>();
  private currentAudio: HTMLAudioElement | null = null;

  ngOnInit() {
    this.playBrainRot();
  }

  private playBrainRot() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    this.currentAudio = new Audio('assets/sounds/brainrot-cat.mp3');

    const restartTime = 4.59; // Restart at exactly 4.88s

    this.currentAudio.addEventListener('timeupdate', () => {
      if (this.currentAudio && this.currentAudio.currentTime >= restartTime) {
        this.currentAudio.currentTime = 0;
        this.currentAudio.play();
      }
    });

    this.currentAudio.play().catch(error => {
      console.error("Error playing the sound: ", error);
    });
  }
}
