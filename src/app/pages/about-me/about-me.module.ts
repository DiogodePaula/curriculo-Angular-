import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AboutMeComponent } from './about-me.component';

@NgModule({
    declarations: [AboutMeComponent],
    imports: [CommonModule, MatCardModule, FlexLayoutModule, FormsModule],
    exports: [AboutMeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutMeModule {}
