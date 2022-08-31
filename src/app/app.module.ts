import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';

import { listViewComponent } from './content/list-view/list-view.component'
 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { DetailNavbarComponent } from './detail-navbar/detail-navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { SelectorComponent } from './content/selector/selector.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { DrawerRollAddComponent } from './content/drawer-roll-add/drawer-roll-add.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MenuComponent } from './content/card/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DetailHeaderComponent,
    DetailNavbarComponent,
    ContentComponent,
    CardComponent,
    listViewComponent,
    SelectorComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    DrawerRollAddComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatCheckboxModule,
    FormsModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
