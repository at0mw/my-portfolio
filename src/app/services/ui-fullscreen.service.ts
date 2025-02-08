import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiFullScreenService {
  //#region Variables
  private appFullScreenStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  fullScreenState$: Observable<boolean> = this.appFullScreenStateSubject.asObservable();
  //#endregion

  constructor() {
    this.appFullScreenStateSubject.next(document.fullscreenElement !== null);
    document.addEventListener('fullscreenchange', () => {
      let fullScreen = document.fullscreenElement !== null;
      this.appFullScreenStateSubject.next(fullScreen);
    });
  }


  toggleFullScreenState() {
    let currentState = this.appFullScreenStateSubject.value;
    if(!currentState) {
      this.goFullScreen();
    } else {
      this.revertFullScreen();
    }
  }

  private goFullScreen() {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().then(() => {
        this.appFullScreenStateSubject.next(true);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  private revertFullScreen() {
    document.exitFullscreen().then(() => {
      this.appFullScreenStateSubject.next(false);
    }).catch((err) => {
      console.log(err);
    });
  }
}
