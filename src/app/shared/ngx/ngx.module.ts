import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule,
  TooltipModule,
  PopoverModule,
  AccordionModule,
  PaginationModule
} from "ngx-bootstrap";
const ngxComponents=[
  CarouselModule.forRoot(),
  TooltipModule.forRoot(),
  PopoverModule.forRoot(),
  AccordionModule.forRoot(),
  PaginationModule.forRoot(),
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NgxModule { }
