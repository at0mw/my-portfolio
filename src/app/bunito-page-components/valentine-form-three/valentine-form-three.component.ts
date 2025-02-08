import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "primeng/button";
import {FormGroup} from "@angular/forms";
import { FoodOptions } from '../../interfaces/food-options.interface';
import {FOOD_OPTIONS} from "../../constants/food-options.const";

@Component({
  selector: 'atom-valentine-form-three',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-three.component.html',
  styleUrl: './valentine-form-three.component.scss'
})
export class ValentineFormThreeComponent {
  @Input() valentineFormGroup!: FormGroup;
  @Output() activateCallback = new EventEmitter<number>();
  foodOptions: FoodOptions[] = FOOD_OPTIONS;
  private currentAudio: HTMLAudioElement | null = null;

  onNext() {
    this.activateCallback.emit(4);
  }

  onPrevious() {
    this.activateCallback.emit(2);
  }

  onFoodOptionSelect(foodOption: FoodOptions)   {
    this.valentineFormGroup.controls['foodOption'].setValue(foodOption);
    this.playAudio(foodOption.sound);
  }

  private playAudio(audioKey: string) {
    if (!audioKey) return;

    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    this.currentAudio = new Audio('assets/sounds/food-categories/' + audioKey);

    const maxPlayTime = 6.0; // Stop playing after 6 seconds

    this.currentAudio.addEventListener('timeupdate', () => {
      if (this.currentAudio && this.currentAudio.currentTime >= maxPlayTime) {
        this.currentAudio.pause(); // Stop playback
        this.currentAudio.currentTime = 0; // Reset to start
      }
    });

    this.currentAudio.play().catch(error => {
      console.warn("Error playing the sound: ", error);
    });
  }

}
