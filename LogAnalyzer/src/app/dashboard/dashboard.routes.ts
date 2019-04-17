import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { AuthGuard } from '../guard/auth-guard.service';
import { BarChartComponent } from './visualize/bar-chart/bar-chart.component';
import { PieChartComponent } from './visualize/pie-chart/pie-chart.component';

export const dashboardroutes : Routes = 
[
    {
        path : 'dashboard',
        component : LayoutComponent,
        // canActivate : [AuthGuard],
        children : 
        [
            {
                path : '',
                component : AnalyzeComponent
            },

            {
                path : 'analyze',
                component : AnalyzeComponent
            },
            {
                path : 'barChart',
                component : BarChartComponent
            },
            {
                path : 'pieChart',
                component : PieChartComponent
            },

            {

                path : 'visualize',
                component : VisualizeComponent,
                children : 
                [
                    {
                        path : 'barChart',
                        component : BarChartComponent
                    },
                    {
                        path : 'pieChart',
                        component : PieChartComponent
                    }                
                ]
            },

            {

                path : 'search',
                component : SearchComponent
            },

            {

                path : 'sorting',
                component : SortingComponent
            },

        ]
    }
    

];