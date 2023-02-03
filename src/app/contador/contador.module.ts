import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Contadorcomponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        Contadorcomponent
    ],
    exports: [
        Contadorcomponent
    ], 
    imports: [
        CommonModule
    ]

})
export class ContadorModule {}