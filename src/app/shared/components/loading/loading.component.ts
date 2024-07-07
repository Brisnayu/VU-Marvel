import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  loading: boolean = true;

  ngOnInit(): void {
    this.getLoading();
  }

  getLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
