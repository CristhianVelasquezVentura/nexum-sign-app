import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header-nexum',
    templateUrl: './header-nexum.component.html',
    styleUrls: ['./header-nexum.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class HeaderNexumComponent {

  @Input() router: string = '';
  @Input() icon: string = 'back';
  @Input() title: string = '';

  constructor(private _router: Router) { }

  public navigateToRoute(): void {
    this._router.navigateByUrl(this.router);
  }
}
