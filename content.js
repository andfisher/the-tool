function theTool() {
    document.querySelectorAll('html, body').forEach(el => {
        el.classList.remove('sp-message-open');
        el.classList.add('allow-scroll');
        el.style.overflow = 'auto !important';
    });

    document.querySelectorAll('[id^="sp_message_container"], [class^="overlay_"]').forEach(modal => {
        modal.style.opacity = '0 !important';
        modal.style.pointerEvents = 'none !important';
    });

    document.querySelectorAll('[class^="overlay_"]').forEach(el => {
        el.style.position = 'unset !important';
    });
}

theTool();
setInterval(theTool, 2000);
  