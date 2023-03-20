import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickDirective } from './directives/click.directive';
import { ColorDirective } from './directives/color.directive';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './todo/todo.component';
import { YellPipe } from './yell.pipe';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    ClickDirective,
    ColorDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
