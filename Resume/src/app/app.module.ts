import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { TimelineNodesComponent } from './timeline-nodes/timeline-nodes.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { SkillsCounterComponent } from './skills-counter/skills-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardsComponent,
    TimelineNodesComponent,
    PhotoGridComponent,
    SkillsCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
