import { Component, HostBinding, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'curriculo-angular';

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    toggleControl = new FormControl(false);
}
