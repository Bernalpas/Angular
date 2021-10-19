import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './paginas/about/about.component';
import { ItemsComponent } from './paginas/items/items.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'items', component: ItemsComponent},
  { path: 'home', component: PortafolioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
