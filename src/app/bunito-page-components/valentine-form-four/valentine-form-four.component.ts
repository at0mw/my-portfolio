import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import JSConfetti from "js-confetti";
import {Button} from "primeng/button";
import {SendFormService} from "../../services/send-form.service";
import {BunitoValentine} from "../../interfaces/bunito-valentine.interface";

@Component({
  selector: 'atom-valentine-form-four',
  imports: [
    DatePipe
  ],
  templateUrl: './valentine-form-four.component.html',
  styleUrl: './valentine-form-four.component.scss'
})
export class ValentineFormFourComponent implements OnInit, OnDestroy {
  @Input() valentineFormGroup!: FormGroup;
  @Output() activateCallback = new EventEmitter<number>();
  private currentAudio: HTMLAudioElement | null = null;
  private jsConfetti!: JSConfetti;
  timeout: any;

  constructor(private sendFormService: SendFormService) { }

  ngOnInit() {
    this.jsConfetti = new JSConfetti();

    this.playBrainRot();
    this.startLoop();

    this.submitChoices();
  }

  ngOnDestroy() {
    this.stopBrainRotAndConfetti();
  }

  startLoop() {
    this.launchConfetti();

    this.timeout = setTimeout(() => {
      this.startLoop();
    }, 2000);
  }

  launchConfetti() {
    this.jsConfetti.addConfetti({
      confettiColors: ['#FF0A54', '#FF477E', '#FF7096', '#FF85A1', '#FF99AC'],
      confettiRadius: 6,
      confettiNumber: 150,
    });
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

  @HostListener('document:click', ['$event'])
  stopBrainRotAndConfetti() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  private submitChoices() {
    if(this.valentineFormGroup.valid) {
      const bunitoForm: BunitoValentine = {
        date: this.valentineFormGroup.controls['date'].value ?? "Error: No date selected",
        food: this.valentineFormGroup.controls['foodOption'].value ?? "Error: No food selected",
      }
      this.sendFormService.sendForm(bunitoForm);
    }
  }
}
