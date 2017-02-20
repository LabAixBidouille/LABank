/**
 * Utils module
 * Created by kprim on 02/01/2017.
 */

import { NgModule }      from '@angular/core';
import { IsAuthorized } from './is-authorized.directive';

@NgModule({
    bootstrap: [ ],
    declarations: [ IsAuthorized ],
    exports: [ IsAuthorized ]
})
export class UtilsModule { }
