/* Общая «оболочка» страниц: фон рабочего стола, панель задач, меню «Пуск», иконки на рабочем столе.
   Страница (empty.html) содержит только окно с контентом; всё остальное собирается здесь.
   Скрипт стоит в конце <body>: собирает оболочку, затем подключает скрипт темы. */
(function () {
  'use strict';

  /* ---------- Настройки ---------- */
  var ASSETS = '../cdn/imanges/';   // картинки, относительно страницы в папке clear/
  var PAGES = [                     // единый список; нет поля taskbar/menu — пункт только на рабочем столе
    { href: '../index.html',     icon: 'home-pc.png',  taskbar: 'Доклад',        menu: 'Этот доклад',  desktop: 'Этот доклад'   },
    { href: '../text.html',      icon: 'article.png',  taskbar: 'Текст статьи', menu: 'Текст статьи', desktop: 'Текст Статьи'  },
    { href: '../tailscale.html', icon: 'Tailscale.png',                                                desktop: 'Tailscale.exe' },
    { href: '../wg.html',        icon: 'wg.png',                                                       desktop: 'WireGuard.exe' },
    { href: '../openvpn.html',   icon: 'openvpn.png',                                                  desktop: 'OpenVPN.exe'   },
    { href: '../ipsec.html',     icon: 'IPsec.png',                                                    desktop: 'ipsec.exe'     }
  ];

  var AVATARS = [2, 3, 4, 5, 6, 7, 8, 9].map(function (n) { return ASSETS + 'vista-avatar-' + n + '.jpg|'; }).join('');

  /* ---------- Звуки темы отключены (должно быть задано до xyled-app.js) ---------- */
  window.VistaSfx = { enabled: false, volume: 0, sounds: {} };

  /* ---------- Шаблоны ---------- */
  function taskbarLinks() {
    return PAGES.filter(function (p) { return p.taskbar; }).map(function (p) {
      return '<a class="taskbar-button" href="' + p.href + '"><img alt="" class="win-icon size-4" draggable="false" height="32" width="32" src="' + ASSETS + p.icon + '"> ' + p.taskbar + '</a>';
    }).join('\n    ');
  }

  function menuItems() {
    return PAGES.filter(function (p) { return p.menu; }).map(function (p) {
      return '<a class="sm-item" href="' + p.href + '">\n' +
        '  <img alt="" class="win-icon size-6" draggable="false" height="32" width="32" src="' + ASSETS + p.icon + '">\n' +
        '  <span class="sm-text"><b>' + p.menu + '</b></span>\n' +
        '  </a>';
    }).join('\n  ');
  }

  function desktopIcons() {
    return PAGES.map(function (p) {
      return '<a class="desktop-icon" href="' + p.href + '">\n' +
        '        <img alt="" class="win-icon size-10" draggable="false" height="32" width="32" src="' + ASSETS + p.icon + '">\n' +
        '        <span>' + p.desktop + '</span>\n' +
        '      </a>';
    }).join('\n      ');
  }

  var BACKGROUND =
    '<div class="aero-desktop-bg" aria-hidden="true"></div>' +
    '<div class="aero-desktop-glare" aria-hidden="true"></div>';

  var HEADER =
    '<div id="shopify-section-sections--28492643795222__vista_taskbar" class="shopify-section shopify-section-group-header-group">\n' +
    '  <header class="site-topbar z-50">\n' +
    '  <div class="mx-auto flex h-full w-full max-w-none items-center justify-between gap-2 px-2">\n\n' +
    '  <a class="start-button group" href="' + PAGES[0].href + '">\n' +
    '  <img class="start-chan start-face--mobile" src="' + ASSETS + 'menu.png?width=132" alt="" width="44" height="44">\n' +
    '  <img class="start-chan start-face" src="' + ASSETS + 'home-pc.png" alt="" width="44" height="44">\n' +
    '  <span class="hidden items-baseline leading-none md:flex">\n' +
    '  <span class="text-[15px] font-black text-white"></span>\n' +
    '  <span class="text-[11px] font-bold text-slate-300"></span>\n' +
    '  </span>\n' +
    '  </a>\n\n' +
    '  <nav class="taskbar-programs hidden min-w-0 flex-1 items-center gap-1 md:flex" aria-label="Quick links">\n    ' +
    taskbarLinks() + '\n' +
    '  </nav>\n\n' +
    '  <div class="taskbar-tray flex items-center gap-1">\n' +
    '  <span class="taskbar-clock">\n' +
    '  <span data-taskbar-time>12:08 PM</span>\n' +
    '  <span data-taskbar-date>11/09/2026</span>\n' +
    '  </span>\n' +
    '  </div>\n\n' +
    '  </div>\n' +
    '  </header>\n' +
    '<nav class="start-menu" data-start-menu hidden aria-label="Start menu">\n' +
    '  <div class="sm-avatar">\n' +
    '  <img src="' + ASSETS + 'vista-avatar-1.jpg" alt="" width="48" height="48" data-sm-avatar data-avatars="' + AVATARS + '">\n' +
    '  </div>\n' +
    '  <div class="sm-body">\n' +
    '  <div class="sm-left">\n' +
    '  <div class="sm-programs">\n  ' + menuItems() + '\n  </div>\n' +
    '  <div class="sm-sep"></div>\n' +
    '  </div>\n' +
    '  <div class="sm-right">\n' +
    '  <span class="sm-user">user</span>\n' +
    '  </div>\n' +
    '  </div>\n' +
    '  <div class="sm-footer">\n' +
    '    <button class="sm-btn sm-btn--close" data-start-close type="button" aria-label="Close menu">\n' +
    '    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">\n' +
    '    <path d="m7 7 10 10M17 7 7 17"/>\n' +
    '    </svg>\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</nav>\n' +
    '</div>';

  var FOOTER =
    '<div id="shopify-section-sections--28492643762454__vista_desktop_chrome" class="shopify-section shopify-section-group-footer-group">\n' +
    '    <div class="desktop-icons">\n      ' + desktopIcons() + '\n    </div>\n' +
    '  </div>';

  /* ---------- Сборка ---------- */
  var wrapper = document.querySelector('.page-wrapper');
  document.body.insertAdjacentHTML('afterbegin', BACKGROUND);
  wrapper.insertAdjacentHTML('afterbegin', '<div id="header-group">' + HEADER + '</div>');
  wrapper.insertAdjacentHTML('beforeend', '<footer>' + FOOTER + '</footer>');

  /* ---------- JS темы: меню «Пуск», часы, аватар (после сборки оболочки) ---------- */
  var theme = document.createElement('script');
  theme.src = '../cdn/shop/t/86/assets/xyled-app6bd6.js';
  document.body.appendChild(theme);
})();
