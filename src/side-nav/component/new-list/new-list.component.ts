import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, Injector, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  @ViewChild('inputField', { read: ViewContainerRef }) inputField: ViewContainerRef;
  constructor(private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private injector: Injector) { }

  title = 'my-drag-drop';

  userList = [];

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userList, event.previousIndex, event.currentIndex);
  }

  async onAddListClick() {
    this.inputField.clear();
    const { NewListInputFieldComponent } = await import('../new-list-input-field/new-list-input-field.component');
    const factory = this.cfr.resolveComponentFactory(NewListInputFieldComponent);
    const createdComponent = this.inputField.createComponent(factory, null, this.injector);
    createdComponent.instance.newListInputField = 'Untitled List';
    createdComponent.instance.onTickClick.subscribe(() => {
      this.userList.unshift(createdComponent.instance.newListInputField);
      this.inputField.clear();
    });

  }
}
