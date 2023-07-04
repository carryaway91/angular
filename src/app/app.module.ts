import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './directives/basicHighlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/betterHighlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ConditionalsComponent } from './conditionals/conditionals.component';
import { CustomConditionalsComponent } from './custom-conditionals/custom-conditionals.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyCustomDirectiveDirective } from './directives/myCustomDirective/my-custom-directive.directive';
import { ButtonComponent } from './shared/button/button.component';
import { GenericParagraphComponent } from './generic-paragraph/generic-paragraph.component';
import { AnotherComponent } from './containers/another/another.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing/routing.module';
import { FirstComponent } from './containers/first/first.component';
import { SubchildComponent } from './containers/subchild/subchild.component';
import { AnotherSubchildComponent } from './containers/another-subchild/another-subchild.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { AuthService } from './guards/auth.service';
import { CanDeactivateGuard } from './guards/can-deactivate.service';
import { FormsComponent } from './containers/forms/forms.component';
import { PipesComponent } from './containers/pipes/pipes.component';
import { Shorten } from 'src/pipes/shorten.pipe';
import { Power } from 'src/pipes/power.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimationComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ConditionalsComponent,
    CustomConditionalsComponent,
    DataBindingComponent,
    MyCustomDirectiveDirective,
    ButtonComponent,
    GenericParagraphComponent,
    AnotherComponent,
    NavigationComponent,
    FirstComponent,
    SubchildComponent,
    AnotherSubchildComponent,
    PageNotFoundComponent,
    FormsComponent,
    PipesComponent,
    Shorten,
    Power,
    RxjsComponent,
    AnimationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, CanDeactivateGuard, FormsModule, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
