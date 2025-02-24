import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventSourceService } from './event-source.service';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly eventSourceService = inject(EventSourceService);

  private readonly http = inject(HttpClient);

  constructor() {
    this.eventSourceService.connectToServerSentEvents('/api/sse', { withCredentials: false }).subscribe((data) => {
      console.log(data);
    });
  }

  createData() {
    this.http.post('/api', {}).subscribe((data) => {
      console.log(data);
    });
  }
}
