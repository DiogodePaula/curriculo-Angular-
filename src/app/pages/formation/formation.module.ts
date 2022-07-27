import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { FormationComponent } from './formation.component';

@NgModule({
    declarations: [FormationComponent],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        FormsModule,
        MatTabsModule,
        MatTableModule,
    ],
    exports: [FormationComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormationModule {}
