import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-pages',
  imports: [],
  templateUrl: './custom-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPagesComponent { }
