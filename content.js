function theTool() {
    document.querySelectorAll('html, body').forEach(el => {
        el.classList.remove('sp-message-open');
        el.classList.add('allow-scroll');
        el.style.overflow = 'auto !important';
    });

    document.querySelectorAll(`
        [id^="sp_message_container"],
        [class^="overlay_"],
        #onetrust-consent-sdk`
    ).forEach(modal => {
        modal.style.opacity = 0;
        modal.style.pointerEvents = 'none';
    });

    document.querySelectorAll('[class^="overlay_"]').forEach(el => {
        el.style.position = 'unset !important';
    });
}

theTool();
setInterval(theTool, 2000);
