import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UtilsModule} from "../utils/utils.module";

import {AdminSpacesComponent} from "./admin-spaces.component"
import {AddSpaceComponent} from "./add-space.component"
import {UpdateSpaceComponent} from "./update-space.component"
import {SpacesComponent} from "./spaces.component"
import {SpaceComponent} from "./space.component"
import {SpaceService} from "./space.service";
/**
 * Created by Kandel on 03/05/2017.
 */
@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule],
    declarations: [AdminSpacesComponent, AddSpaceComponent, UpdateSpaceComponent, SpacesComponent, SpaceComponent],
    bootstrap: [AdminSpacesComponent, AddSpaceComponent, UpdateSpaceComponent, SpacesComponent, SpaceComponent],
    providers: [SpaceService]

})
export class SpaceModule{}