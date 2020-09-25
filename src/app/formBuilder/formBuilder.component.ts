import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.scss']
})

export class FormBuilderComponent {
  @ViewChild('json', {static: false}) jsonElement?: ElementRef;
  public form: object = {
    components: []
  };

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    console.log(this.form);
  }
}

