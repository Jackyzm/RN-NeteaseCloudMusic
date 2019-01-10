class NavigationService {
    constructor() {
        this.navigation = {};
    }

    setTopLevelNavigator(navigatorRef) {
        this.navigation = navigatorRef._navigation;
    }

    openDrawer() {
        if (this.navigation && this.navigation.openDrawer) {
            this.navigation.openDrawer();
        }
    }
}

export default new NavigationService();
