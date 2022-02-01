import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-skin',
  templateUrl: './detalle-skin.component.html',
  styleUrls: ['./detalle-skin.component.css']
})
export class DetalleSkinComponent implements OnInit {

  @Input('skin') skin: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.skin);
  }

}
