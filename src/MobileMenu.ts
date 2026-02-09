function onClickDocument(event: MouseEvent) {

    if (window.innerWidth > 640) return;

    if ((event.target as HTMLElement)?.closest('.mx_AccessibleButton.mx_RoomTile')) {
        const leftPannelWrapper = document.querySelector('.mx_LeftPanel_outerWrapper');
        if (!leftPannelWrapper) return;
        (leftPannelWrapper as HTMLElement).style.setProperty('--left-panel-offset', '-100%');
    }
    
    else if ((event.target as HTMLElement)?.closest('.mx_RoomHeader_mobileMenu')) {
        const leftPannelWrapper = document.querySelector('.mx_LeftPanel_outerWrapper');
        if (!leftPannelWrapper) return;
        (leftPannelWrapper as HTMLElement).style.setProperty('--left-panel-offset', '0px');
    }

    else if ((event.target as HTMLElement)?.closest('.mx_RoomView_wrapper')) {
        const leftPannelWrapper = document.querySelector('.mx_LeftPanel_outerWrapper');
        if (!leftPannelWrapper) return;
        (leftPannelWrapper as HTMLElement).style.setProperty('--left-panel-offset', '-100%');
    }        
}

document.documentElement.addEventListener('click', onClickDocument, true);