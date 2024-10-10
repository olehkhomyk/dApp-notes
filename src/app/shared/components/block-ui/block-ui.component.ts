import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'tech-block-ui',
  standalone: true,
  template: `
    @if (isBlocked()) {
      <div class="notes-overlay">
        <ng-content></ng-content>
      </div>
    }
  `,
  styleUrl: './block-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockUiComponent {
  isBlocked: InputSignal<boolean> = input.required();
}
