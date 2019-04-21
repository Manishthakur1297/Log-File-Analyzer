import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { RouterModule } from '@angular/router';
import { dashboardroutes } from './dashboard.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from '../guard/auth-guard.service';
import { BarChartComponent } from './visualize/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './visualize/pie-chart/pie-chart.component';
import { DougnutChartComponent } from './visualize/dougnut-chart/dougnut-chart.component';
import { RadarChartComponent } from './visualize/radar-chart/radar-chart.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [LayoutComponent, AnalyzeComponent, VisualizeComponent, SearchComponent, SortingComponent, BarChartComponent, PieChartComponent, DougnutChartComponent, RadarChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardroutes),
    FormsModule,HttpModule,
    ReactiveFormsModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
