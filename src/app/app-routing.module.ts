import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostWallComponent } from './components/post-wall/post-wall.component';


const routes: Routes = [
    { path: '', component: PostWallComponent }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
