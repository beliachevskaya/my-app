import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { ShareService } from './parent-children/share.service';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavMenuComponent } from './navigation/sidenav-menu/sidenav-menu.component';
import { ParentChildrenComponent } from './parent-children/parent-children.component';
import { FirstChildComponent } from './parent-children/first-child/first-child.component';
import { SecondChildComponent } from './parent-children/second-child/second-child.component';
import { ThirdChildComponent } from './parent-children/third-child/third-child.component';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { MenuComponent } from './navigation/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavMenuComponent,
    ParentChildrenComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent,
    TableComponent,
    ParentComponent,
    ChildComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
