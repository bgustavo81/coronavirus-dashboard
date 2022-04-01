import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.nodule';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule, MatDrawerContainer, MatDrawerContent, MatDrawer } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent, 
    ArticlesComponent   
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }