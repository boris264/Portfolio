class NavigationItemInfo {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    }
}

function createNavigationItemInfos(navItemInfos) {
    return navItemInfos.map((i) => new NavigationItemInfo(i.name, i.href));
}

export default NavigationItemInfo;
export { createNavigationItemInfos };