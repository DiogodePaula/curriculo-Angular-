import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ExperienceComponent } from './experience.component';

@NgModule({
    declarations: [ExperienceComponent],
    imports: [CommonModule, MatCardModule, FlexLayoutModule],
    exports: [ExperienceComponent],
})
export class ExperienceModule {}
