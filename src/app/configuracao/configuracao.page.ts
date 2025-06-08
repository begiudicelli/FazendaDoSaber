import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

import { addIcons } from 'ionicons';
import { arrowBackOutline, readerOutline, volumeHighOutline, volumeLowOutline, volumeOffOutline } from 'ionicons/icons';


@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, RouterLinkWithHref ]
})
export class ConfiguracaoPage  {

  constructor() { 
  
    addIcons({ volumeOffOutline, volumeHighOutline, arrowBackOutline, readerOutline });

  }


 

}
