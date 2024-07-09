import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { LoadingService } from './core/services/loadingService/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examenMarvel';

  isLoading: boolean = false;

  loadService = inject(LoadingService);

  private cdRef = inject(ChangeDetectorRef);
  
  // Inicializamos el valor de isLoading con el valor inicial del servicio
  ngOnInit(): void {
    this.isLoading = this.loadService.isLoading;
  }

  /* Esto verifica si el valor de isLoading ha cambiado después de cambiar de vista. Si ha
  cambiado, actualiza el valor y llama a detectChanges en el ChangeDetectorRef para forzar que
  se detecten los cambios */
  ngAfterViewChecked(): void {
    if (this.isLoading !== this.loadService.isLoading) {
      this.isLoading = this.loadService.isLoading;
      this.cdRef.detectChanges();
    }
  } 

}
