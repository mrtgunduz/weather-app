

import { NgModule } from '@angular/core';
import { MaincompComponent } from './weathercomp/maincomp.component';
import { MainDesignRouterModule } from './maindesign-router.module';


const COMPONENTS = [
    MaincompComponent,
];

@NgModule({
    imports: [
        MainDesignRouterModule
    ],
    exports: [],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }