import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  styleUrls: ['list-item.component.scss'],
  templateUrl: 'list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  toggled = false;

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();


  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }
}
