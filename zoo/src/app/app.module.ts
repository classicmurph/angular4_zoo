import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalComponent } from './animal/animal.component';

const appRoutes: Routes = [
  { path: 'animals',
    component: AnimalComponent,
    data: { title: 'Animals' }
  },
  { path: '',
    redirectTo: '/animals',
    pathMatch: 'full'
  },
  { path: 'animal-form',
    component: AnimalFormComponent,
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
        { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
