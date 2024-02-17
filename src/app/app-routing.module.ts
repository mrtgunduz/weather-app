import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDesignRouterModule } from './maindesign/maindesign-router.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./maindesign/maindesign-router.module').then(m => MainDesignRouterModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
