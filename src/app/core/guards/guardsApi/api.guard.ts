import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SeriesServices } from '../../services/seriesServices/series-services.service';
import { catchError, map, of } from 'rxjs';

export const apiGuard: CanActivateFn = () => {
  const router = inject(Router);
  const seriesService = inject(SeriesServices);

  return seriesService.getSeries().pipe(map(response => {
    console.log(response);
    return true;
  })
    , catchError(error => {
      console.error('Error: ', error);
      alert("Invalid credentials, verify both Private Key and Public Key")
      router.navigate(['/home']);
      return of(false)
    })
  )
};
// GUARD SERIES
