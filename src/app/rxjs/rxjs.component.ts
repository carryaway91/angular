import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, filter, from, map, of, fromEvent } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NgForm } from '@angular/forms';

interface PostInterface {id: number; title: string; author: string};
interface UserInterface {id: number; fName: string; lName: string, isActive: boolean};

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  @ViewChild('form') form: NgForm;

  users = [
    { id: 1, fName: 'Peter', lName: 'Babej', isActive: true },
    { id: 2, fName: 'Maros', lName: 'Babej', isActive: true },
    { id: 3, fName: 'Jarka', lName: 'Babej', isActive: true },
    { id: 4, fName: 'Anna', lName: 'Gecik', isActive: true },
  ];
  error: boolean = false
  // funkcia of urobi z pola observable / v template cez async pipu je subscribnuty
  users$ = of(this.users);
  /** prva map funkcia je operator metody pipe ..druha map je normalna js funkcia, taksito aj filter */
  usernames$ = this.users$.pipe(
    map((users) => users.map((user) => user.fName))
    );
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
    );

    /** mozme kombinovat viacero operatorov, napr fileter a potom map */
  combinedUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive)),
    map((users) => users.map((user) => user.fName))
    );


    /** vyfiltruje nam len aktivnych userov => v template subscribujeme cez | pipe a ngOnInit cez subscribe metodu*/
    onlyActive$ = this.users$.pipe(map((users) => users.filter(user => user.isActive)))
  
    /** Combined data 
   * tu ukladame obseravble bez subscribe..subscribe sa deje v template cez async pipu ( | async)
   */
  data$ = combineLatest([
    this.users$,
    this.filteredUsers$,
    this.combinedUsers$,
  ]).pipe(
    map(([users, filteredUsers, combinedUsers]) => ({
      users,
      filteredUsers,
      combinedUsers,
    }))
  );
  
  /** --------cez metodu subscribe----------- */
  observable$ = from([1, 2, 3, 4, 5, 6])
  .pipe(map((val: number) => val * 2))
  .subscribe((val) => {
    console.log(val);
  });
  
  ob$ = of([1]);
  
  result$ = this.ob$.pipe(map((obs) => obs.map((val) => val + 1)));
  behaviour$ = new BehaviorSubject<{ id: string; fName: string }>(null);
  
  // pole posts
 
  posts1$: PostInterface[];
  behaviour2$ = new BehaviorSubject<PostInterface[]>(null)

  getPosts() {
    this.http.get<PostInterface[]>('http://localhost:3000/posts')
    .subscribe((response: PostInterface[]) => { 
      this.posts1$ = response
      this.posts = response
    }, error => {
      this.error = true
    });
  }

   getPostsForSubject() {
    this.http.get<PostInterface[]>('http://localhost:3000/posts').subscribe((datas: PostInterface[]) => this.behaviour2$.next(datas), error => this.error = true)
  }
  babejs$: Observable<UserInterface[]>
  filterOnlyBabej() {
    this.babejs$ = this.users$.pipe(map(users => users.filter(user => user.lName === "Babej")))
  }
  posts: PostInterface[] = []
  ngOnInit(): void {
    setTimeout(() => {
      this.behaviour$.next({ id: '1', fName: 'Asynchronne volanie po 2 sekundach' });
      console.log(this.behaviour$)
    }, 2000);
    this.getPosts()
    this.getPostsForSubject()
    /** vyfiltruje nam len aktivnych userov */
    this.onlyActive$.subscribe(data => console.log(data))
    this.filterOnlyBabej()
  }

  onSubmit() {
    const title = this.form.form.controls.title.value;
    const author = this.form.form.controls.author.value; 
    const id = Math.random() * 454544454;
    this.http.post<PostInterface>(`http://localhost:3000/posts`,  {"id": id, "title": title,"author": author}, { headers: new HttpHeaders({ 'Custom-header': "Hello"})}).subscribe(data => this.posts.push(data))
  }

   clicks = fromEvent(document, 'click').subscribe(x => console.log(x))
}
