import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
	{ path: 'auth/signup', component: SignupComponent },
	{ path: 'auth/signin', component: SigninComponent },
	{ path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
	{ path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
	{ path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
	{ path: '', redirectTo: 'books', pathMatch: 'full'},
	{ path: '**', redirectTo: 'books'}
]

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		SigninComponent,
		BookListComponent,
		SingleBookComponent,
		BookFormComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		AuthService,
		AuthGuardService,
		BooksService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
