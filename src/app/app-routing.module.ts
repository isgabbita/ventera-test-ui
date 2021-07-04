import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitConversionComponent } from './components/unitconversion/unitconversion.component';

const routes: Routes = [
  { path: '', redirectTo: '/convert', pathMatch: 'full' },
  { path: 'convert', component: UnitConversionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
