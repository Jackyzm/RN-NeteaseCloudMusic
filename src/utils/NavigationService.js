class NavigationService {
    constructor() {
        this._navigator = {};
    }

    setTopLevelNavigator(navigatorRef) {
        this._navigator = navigatorRef._navigation;
    }

    openDrawer() {
        if (this._navigator && this._navigator.openDrawer) {
            this._navigator.openDrawer();
        }
    }
}

export default new NavigationService();
