/* global document */
/* global window */
/* global Node */
(function() {
    const hash = window.location.hash;

    if (hash.indexOf('line') < 0) {
        return;
    }

    setTimeout(() => {
        const row = document.querySelector('.line-numbers-rows');
        const lines = row.querySelectorAll('span');

        lines.forEach((line, index) => {
            line.setAttribute('id', `line${index + 1}`);
        });

        window.location.hash = '';
        window.location.hash = hash.replace('#', '');

        const activeLine = document.querySelector(hash);

        if (activeLine) {
            activeLine.classList.add('active');

            activeLine.parentElement.parentElement.childNodes.forEach((childNode) => {
                if (childNode.nodeType === Node.TEXT_NODE) {
                    if (!childNode.textContent.trim()) {
                        return;
                    }

                    const span = document.createElement('span');

                    childNode.after(span);
                    span.appendChild(childNode);
                    span.classList.add('token');
                    span.classList.add('default');
                }
            });
        }
    }, 300);
})();
