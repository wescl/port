import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { SkillsComponent } from './page/skills/skills.component';
import { ContactComponent } from './page/contact/contact.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContainerComponent } from './layout/container/container.component';
import { ModalComponent } from './layout/modal/modal.component';
import { PaginationComponent } from './layout/pagination/pagination.component';
import { ModalProjectComponent } from './layout/modal/modal-project/modal-project.component';
import { TabsComponent } from './layout/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    SidebarComponent,
    ContainerComponent,
    ModalComponent,
    PaginationComponent,
    ModalProjectComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
