import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';
import { BigtextDirective } from './bigtext.directive';



@NgModule({
  declarations: [
    FullnamePipe,
    BigtextDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FullnamePipe,
    BigtextDirective,
  ]
})
export class SharedModule { }
