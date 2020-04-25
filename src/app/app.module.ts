/**
 * Angular
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { PostWallComponent } from './components/post-wall/post-wall.component';

/**
 * Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Material
 */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule( {
    declarations: [
        AppComponent,
        PostWallComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        MatInputModule,
        MatButtonModule,
        AppRoutingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
