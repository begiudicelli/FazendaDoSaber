import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';
;

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerguntasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
