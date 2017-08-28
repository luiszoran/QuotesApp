export class SettingsService {
    private background: boolean = false;

    getCurrentSetting() {
        return this.background;
    }

    setSetting(setting: boolean) {
        this.background = setting;
    }
}
