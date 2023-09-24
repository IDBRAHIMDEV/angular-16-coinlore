import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './components/coins/coins.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { GlobalComponent } from './components/global/global.component';
import { ExchangesComponent } from './components/exchanges/exchanges.component';

@NgModule({
  declarations: [
    CoinsComponent,
    NumberSuffixPipe,
    GlobalComponent,
    ExchangesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    TagModule,
    ButtonModule,
    CardModule,
  ],
  exports: [
    CoinsComponent,
    GlobalComponent,
    CoinsComponent,
    ExchangesComponent,
  ],
})
export class CoinsModule {}
