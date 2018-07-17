import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { AppComponent } from './app.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql' }),
      cache: new InMemoryCache()
    });
  }
}
