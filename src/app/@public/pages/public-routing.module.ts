import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path:'home',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'contact',
        loadChildren:()=>import('./contact/contact.module').then(c=>c.ContactModule)
      },
      {
        path:'about',
        loadChildren:()=>import('./about/about.module').then(a=>a.AboutModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
