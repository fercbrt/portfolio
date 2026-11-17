import { Component, computed, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-field-errors',
  templateUrl: './field-errors.html',
  host: {
    class: 'block'
  }
})
export class FieldErrors {
  readonly errorsId = input.required<string>();
  readonly field = input.required<FieldTree<unknown>>();

  protected readonly computedField = computed(() => this.field()());
}
