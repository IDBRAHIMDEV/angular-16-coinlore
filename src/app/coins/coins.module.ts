import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './components/coins/coins.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CoinsComponent],
  imports: [CommonModule, HttpClientModule, TableModule],
  exports: [CoinsComponent],
})
export class CoinsModule {}
