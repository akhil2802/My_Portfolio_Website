import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Angular Material Modules:
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';

// MDB Modules:
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ContactEmailComponent } from './contact-email/contact-email.component';
import { MainComponent } from './main/main.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EndorseComponent } from './endorse/endorse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { RolesComponent } from './roles/roles.component';
import { HomebannerComponent } from './homebanner/homebanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    ContactEmailComponent,
    MainComponent,
    TimelineComponent,
    TestimonialsComponent,
    EndorseComponent,
    DashboardComponent,
    FooterComponent,
    RolesComponent,
    HomebannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
