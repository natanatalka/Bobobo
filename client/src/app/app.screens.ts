/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { O_Pony_PhonePortrait } from '../pages/O/Pony/PhonePortrait/Pony';
import { Test_PhonePortrait } from '../pages/Test/PhonePortrait/Test';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    O_Pony_PhonePortrait,
    Test_PhonePortrait
  ];
  static mapping = {
    'O_Pony': {
      PhonePortrait: O_Pony_PhonePortrait
    },
    'Test': {
      PhonePortrait: Test_PhonePortrait
    }
  }
}