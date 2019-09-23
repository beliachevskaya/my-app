import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentChildrenComponent } from './parent-children/parent-children.component';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'parent-and-children', component: ParentChildrenComponent },
  { path: 'table', component: TableComponent },
  { path: 'example', component: ParentComponent,
    children: [{ path: 'params/:param', component: ChildComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
