import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(private settingsService: SettingsService) {

    }

    onToggle(toggle: Toggle) {
        this.settingsService.setSetting(toggle.checked);
    }

    getCurrentSetting() {
        return this.settingsService.getCurrentSetting();
    }

}
