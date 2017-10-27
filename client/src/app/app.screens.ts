/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { O_Pony_PhonePortrait } from '../pages/O/Pony/PhonePortrait/Pony';
import { O_2_Test_PhonePortrait } from '../pages/O/2/Test/PhonePortrait/Test';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    O_Pony_PhonePortrait,
    O_2_Test_PhonePortrait
  ];
  static mapping = {
    'O_Pony': {
      PhonePortrait: O_Pony_PhonePortrait
    },
    'O_2_Test': {
      PhonePortrait: O_2_Test_PhonePortrait
    }
  }
}