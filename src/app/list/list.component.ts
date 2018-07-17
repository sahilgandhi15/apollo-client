import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Course, Query } from '../types';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses: Observable<Course[]>;
  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.courses = this.apollo
      .watchQuery<Query>({
        query: gql`
          query allCourses {
            allCourses {
              id
              title
              author
              description
              topic
              url
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.allCourses));
  }
}
