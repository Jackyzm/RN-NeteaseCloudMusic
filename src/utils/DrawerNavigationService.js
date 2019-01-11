// Drawer router

class DrawerNavigationService {
    constructor() {
        this.navigation = {};
    }

    setTopLevelNavigator(navigatorRef) {
        this.navigation = navigatorRef.navigation;
    }

    openDrawer() {
        if (this.navigation && this.navigation.openDrawer) {
            this.navigation.openDrawer();
        }
    }
}

export default new DrawerNavigationService();
