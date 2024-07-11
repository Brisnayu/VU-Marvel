import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "../../services/localStorage/local-storage.service";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const localStorage = inject(LocalStorageService)

  if (localStorage.getItem('hash')) {
    return true
  } else {
    router.navigate(['/home']); 
    return false
  }
};
