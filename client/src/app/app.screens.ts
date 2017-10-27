/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Pony_PhonePortrait } from '../pages/Pony/PhonePortrait/Pony';
import { Test_PhonePortrait } from '../pages/Test/PhonePortrait/Test';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Pony_PhonePortrait,
    Test_PhonePortrait
  ];
  static mapping = {
    'Pony': {
      PhonePortrait: Pony_PhonePortrait
    },
    'Test': {
      PhonePortrait: Test_PhonePortrait
    }
  }
}