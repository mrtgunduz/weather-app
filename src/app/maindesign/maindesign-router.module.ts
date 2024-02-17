import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincompComponent } from './weathercomp/maincomp.component';


const routes: Routes = [
    {
        path: '', component: MaincompComponent,

    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainDesignRouterModule { }