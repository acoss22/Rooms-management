

import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    name = 'Rooms Management';
    @Output() featureSelected = new EventEmitter<string>();

    //select page

    onSelect(feature: string) {
        this.featureSelected.emit(feature);

    }
}