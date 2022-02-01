import { DetalleSkinComponent } from './../detalle-skin/detalle-skin.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { data } from '../../service/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dataApi: any;
  filterSkin: string = '';
  p: number = 1;
  constructor(private data: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.dataApi = data;
  }

  open(skin) {
    const modalRef = this.modalService.open(DetalleSkinComponent);
    modalRef.componentInstance.skin = skin;
  }
  busco() {
    console.log('asdas');
    this.p = 1
  }

}
