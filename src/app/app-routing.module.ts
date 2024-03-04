import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { SkillsComponent } from './page/skills/skills.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'projetos', component: ProjectsComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'contato', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
