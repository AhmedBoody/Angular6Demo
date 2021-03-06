import { DataService } from './services/data.Service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './course.service';
import {AuthorService} from './author.service';
import{TweetsService} from './tweets.service'
import{PostService} from './services/post.service';
import { AuthorsComponent } from './authors/authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { HighlightDirective } from './highlight.directive';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { VoteComponent } from './vote/vote.component';
import { TweetsComponent } from './tweets/tweets.component';
import {ExponentialStrengthPipe, SummaryPipe} from './summary.pipe';
import { TextPanelComponent } from './text-panel/text-panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import{HttpModule} from '@angular/http';
import { UserformComponent } from './userform/userform.component';
import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import{SignupFormComponent} from './signup-form/signup-form.component'
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'courses',component:CoursesComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'users',component:UserformComponent},
  {path:'signUp',component:SignupFormComponent},
  {path:'user/:id/:userName',component:UserProfileComponent},
  {path:'newCourse',component:NewCourseComponent},
  {path:'Posts/:id',component:PostsComponent},
  {path:'**',component:NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    HighlightDirective,
    FavouriteComponent,
    LikeComponent,
    VoteComponent,
    TweetsComponent,
    ExponentialStrengthPipe,
    SummaryPipe,
    TextPanelComponent,
    AccordionComponent,
    HeroFormComponent,
    UserformComponent,
    HomeComponent,
    NavbarComponent,
    UserProfileComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    PostsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    RouterModule.forRoot(appRoute)
  ],
  providers: [CourseService,AuthorService,TweetsService,DataService,PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
