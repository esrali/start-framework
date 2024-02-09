import { Component, OnInit } from '@angular/core';

interface allImgs{
  img:string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
path:string="";
images:allImgs[]=[
  {img:`../../assets/img/img2.png`},
  {img:`../../assets/img/img3.png`},
  {img:`../../assets/img/img4.png`},
  {img:`../../assets/img/img2.png`},
  {img:`../../assets/img/img3.png`},
  {img:`../../assets/img/img4.png`},
]


display(y:allImgs): void {
  this.path=y.img;
}

}
