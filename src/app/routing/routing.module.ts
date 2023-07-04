import { Routes } from '@angular/router'
import { AnotherComponent } from '../containers/another/another.component';
import { FirstComponent } from '../containers/first/first.component';
import { SubchildComponent } from '../containers/subchild/subchild.component';
import { PageNotFoundComponent } from '../containers/page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { CanDeactivateGuard } from '../guards/can-deactivate.service';
import { FormsComponent } from '../containers/forms/forms.component';
import { PipesComponent } from '../containers/pipes/pipes.component';
import { RxjsComponent } from '../rxjs/rxjs.component';
import { AnimationComponent } from '../animations/animations.component';

export const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'another', component: AnotherComponent,
     canActivateChild: [AuthGuard],
     canDeactivate: [CanDeactivateGuard],
     children: [
        {
            path: 'subchild/:id',
            component: SubchildComponent
        },
    ],
},
{ path: 'forms', component: FormsComponent },
{ path: 'pipes', component: PipesComponent },
{ path: 'rxjs', component: RxjsComponent },
{ path: 'animations', component: AnimationComponent },

{ path: '**', component: PageNotFoundComponent }
  ];
