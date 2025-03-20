import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  imports: [RouterLink],
  templateUrl: './nabvar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NabvarComponent { }
