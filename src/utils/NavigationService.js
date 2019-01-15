// 顶层router

class NavigationService {
    constructor() {
        this.navigation = {};
    }

    setTopLevelNavigator(navigatorRef) {
        this.navigation = navigatorRef._navigation;
    }
}

export default new NavigationService();
