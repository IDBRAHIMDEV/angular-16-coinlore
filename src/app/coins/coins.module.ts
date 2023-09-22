import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './components/coins/coins.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CoinsComponent],
  imports: [CommonModule, HttpClientModule],
})
export class CoinsModule {}
