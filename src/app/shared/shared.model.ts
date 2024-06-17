import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

//bootstrap option will not exist here as its only available in Roots module.
@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent]
})

export class SharedModule{}