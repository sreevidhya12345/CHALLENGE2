import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'about',component:AboutComponent},
  {path:'sample',component:SampleComponent},
  {path:'contact',component:ContactComponent}
  // {path:'footer',component:FooterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
