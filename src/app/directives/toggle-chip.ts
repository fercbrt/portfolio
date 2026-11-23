import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[appToggleChip]',
  host: {
    class: 'rounded-full px-3 py-1 text-sm font-medium cursor-pointer border border-gray-300 not-aria-pressed:hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 aria-pressed:bg-gray-900 aria-pressed:text-white aria-pressed:border-gray-900 aria-pressed:hover:bg-gray-700',
    '[attr.aria-pressed]': 'pressed()'
    
  }
})
export class ToggleChip {
  readonly pressed = input.required<boolean>();
}
