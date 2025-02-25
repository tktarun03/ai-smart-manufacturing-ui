import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Smart Manufacturing UI Dashboard</h1>
    <div class="dashboard">
      <manufacturing-dashboard></manufacturing-dashboard>
      <wasm-manufacturing-analysis></wasm-manufacturing-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }