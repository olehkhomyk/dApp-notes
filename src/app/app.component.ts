import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockUiComponent } from '@notes/shared/components/block-ui/block-ui.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'notes-root',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    RouterOutlet,
    BlockUiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly isLoading = signal<boolean>(false);


  testLoading() {
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
    }, 3000);
  }
}
