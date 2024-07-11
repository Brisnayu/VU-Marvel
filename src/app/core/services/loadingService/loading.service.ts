import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  valueLoader = false;

  showLoader() {
    this.valueLoader = true;
  }
  hideLoader() {
    this.valueLoader = false;
  }
  get isLoading() {
    return this.valueLoader;
  }
}

