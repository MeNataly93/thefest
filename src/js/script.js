// --KONTAKT
// -Месенджер
document
  .getElementById("messengerButton")
  .addEventListener("click", function () {
    window.open("https://www.facebook.com/groups/3081311612171554", "_blank");
  });

// -Звонок
function makeCall() {
  window.location.href = "tel:+380960352339";
}

// // --Видео внутри TITLE
// const video = document.getElementById("myVideo");

// document.addEventListener("DOMContentLoaded", () => {
//   const overlayvideo = document.getElementById("overlay-video");
//   const videoLink = document.getElementById("videoLink");
//   const videoButton = document.getElementById("videoButton");

//   const showOverlay = () => {
//     overlayvideo.style.display = "flex";
//     video.play(); // ▶️ запуск видео
//     // videoContainer.style.display = "block";
//   };

//   const hideOverlay = () => {
//     overlayvideo.style.display = "none";

//     video.pause(); // ⏸ остановка
//     video.currentTime = 0; // ⏮ сброс на начало
//     // videoContainer.style.display = "none";
//   };

//   videoLink.addEventListener("click", (event) => {
//     event.preventDefault();
//     showOverlay();
//   });

//   videoButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     showOverlay();
//   });

//   overlayvideo.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     if (overlayvideo.style.display == "flex") {
//       hideOverlay();
//     } else {
//       showOverlay();
//     }
//   });
//   // Чтобы клик внутри видео не закрывал его
//   const videoContainer = document.querySelector(".video-container");

//   videoContainer.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });
// });

// -- Видео внутри TITLE с YouTube iframe
document.addEventListener("DOMContentLoaded", () => {
  const overlayvideo = document.getElementById("overlay-video");
  const videoLink = document.getElementById("videoLink");
  const videoButton = document.getElementById("videoButton");
  const videoContainer = document.querySelector(".video-container");
  const iframe = videoContainer.querySelector("iframe");
  const videoSrc = iframe.src; // сохраняем исходный src

  const showOverlay = () => {
    overlayvideo.style.display = "flex";
    // Вставляем src, чтобы видео начинало проигрываться
    iframe.src = videoSrc + "?autoplay=1";
  };

  const hideOverlay = () => {
    overlayvideo.style.display = "none";
    // Убираем src, чтобы видео останавливалось
    iframe.src = "";
  };

  videoLink.addEventListener("click", (event) => {
    event.preventDefault();
    showOverlay();
  });

  videoButton.addEventListener("click", (event) => {
    event.preventDefault();
    showOverlay();
  });

  overlayvideo.addEventListener("click", function () {
    hideOverlay();
  });

  // Чтобы клик внутри видео не закрывал overlay
  videoContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// --Ta kontakt med oss - кнопка в баннере
// -При клике в десктопной версии - переход к нужному блоку, но на 250 пикселей выше
document
  .getElementById("bannerbutton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var kontaktblock = document.getElementById("ordre");
    var offset = 250;
    var elementPosition =
      kontaktblock.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -При клике в мобильной версии, до 1200 пикс - переход к нужному блоку, но на 90 пикселей выше
document
  .getElementById("bannerbutton")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Prevent the default behavior of the link
      var kontaktblock = document.getElementById("ordre");
      var offset = 90;
      var elementPosition =
        kontaktblock.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// --KONTAKTBUTTON
// -При клике в десктопной версии - переход к нужному блоку, но на 250 пикселей выше
document
  .getElementById("kontaktbutton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var kontaktblock = document.getElementById("ordre");
    var offset = 250;
    var elementPosition =
      kontaktblock.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -При клике в мобильной версии, до 1200 пикс - переход к нужному блоку, но на 90 пикселей выше

document
  .getElementById("kontaktbutton")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Prevent the default behavior of the link
      var kontaktblock = document.getElementById("ordre");
      var offset = 90;
      var elementPosition =
        kontaktblock.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// --ARROW SCROLL
// -Visible or not
const arrow = document.getElementById("arrow");

function arrowNone() {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight < 460) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

arrow.addEventListener("click", function (event) {
  event.preventDefault();
  scrollToTop();
});

window.addEventListener("scroll", arrowNone);

// Вызываем функцию сразу, чтобы установить начальное состояние при загрузке страницы
arrowNone();

// --MAIN SLIDER

const settings = {
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  infinity: true,
  speed: 2000,
  dots: true,
  appendDots: ".mydots",
  dotsClass: "dots-box",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 990, settings: { slidesToShow: 1 } },
  ],
};

$("#slider-main").slick(settings);

// --FANCY BOX
Fancybox.bind("[data-fancybox]", {
  Toolbar: false,
  Thumbs: false,
});

// --Услуги - описание в мобильной версии появляется при клике, действует до расширения 992 пикс (далее - работа ховера в css)

const parents = document.querySelectorAll(".tilleg-help-block");

function handleParentClick(event) {
  const parent = event.currentTarget;

  const img = parent.querySelector(".tilleg_item-img");
  const text = parent.querySelector(".tilleg_item-description");

  // Сбрасываем стили всех .tilleg-help-block
  parents.forEach((element) => {
    const elementImg = element.querySelector(".tilleg_item-img");
    const elementText = element.querySelector(".tilleg_item-description");

    if (elementImg) {
      elementImg.style.visibility = "visible";
    }

    if (elementText) {
      elementText.style.visibility = "hidden";
    }
  });

  // Устанавливаем стили у текущего кликнутого элемента
  if (img) {
    img.style.visibility = "hidden";
  }

  if (text) {
    text.style.visibility = "visible";
  }
}

function handleHoverOnListFrame() {
  // Проверяем ширину окна
  if (window.innerWidth >= 1200) {
    const img = this.querySelector(".tilleg_item-img");
    const text = this.querySelector(".tilleg_item-description");

    if (img) {
      img.style.visibility = "hidden";
    }

    if (text) {
      text.style.visibility = "visible";
    }
  }
}

function handleHoverOffListFrame() {
  // Проверяем ширину окна
  if (window.innerWidth >= 1200) {
    const img = this.querySelector(".tilleg_item-img");
    const text = this.querySelector(".tilleg_item-description");

    if (img) {
      img.style.visibility = "visible";
    }

    if (text) {
      text.style.visibility = "hidden";
    }
  }
}

function updateEventListeners() {
  if (window.innerWidth <= 1200) {
    parents.forEach((parent) => {
      parent.addEventListener("click", handleParentClick);
    });
  } else {
    parents.forEach((parent) => {
      parent.removeEventListener("click", handleParentClick);
    });

    // Сбрасываем стили всех .tilleg-help-block при переходе на 1200 пикселей и более
    parents.forEach((element) => {
      const elementImg = element.querySelector(".tilleg_item-img");
      const elementText = element.querySelector(".tilleg_item-description");

      if (elementImg) {
        elementImg.style.visibility = "visible";
      }

      if (elementText) {
        elementText.style.visibility = "hidden";
      }
    });

    // Добавляем обработчики ховера на .tilleg_list_frame только для 1200 пикселей и более
    const listFrames = document.querySelectorAll(".tilleg_list_frame");
    listFrames.forEach((frame) => {
      frame.addEventListener("mouseenter", handleHoverOnListFrame);
      frame.addEventListener("mouseleave", handleHoverOffListFrame);
    });
  }
}

// Добавляем обработчики событий при загрузке страницы и изменении размера окна
window.addEventListener("load", updateEventListeners);
window.addEventListener("resize", updateEventListeners);

// Вызываем обновление обработчиков сразу после загрузки скрипта
updateEventListeners();

// --При клике на вкладках в хедере (от 992 пикс) - переход к нужному блоку, но на 100 пикселей выше

// -Helter
document
  .getElementById("tab-helter")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var helter = document.getElementById("helter");
    var offset = 100;
    var elementPosition =
      helter.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Tjenester
document
  .getElementById("tab-tjenester")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var tjenester = document.getElementById("tjenester");
    var offset = 100;
    var elementPosition =
      tjenester.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Tjenestepakker
document
  .getElementById("tab-tjenestepakker")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var tjenestepakker = document.getElementById("tjenestepakker");
    var offset = 100;
    var elementPosition =
      tjenestepakker.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Ordre
document
  .getElementById("tab-ordre")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var ordre = document.getElementById("ordre");
    var offset = 100;
    var elementPosition =
      ordre.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Galleri
document
  .getElementById("tab-galleri")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var galleri = document.getElementById("galleri");
    var offset = 100;
    var elementPosition =
      galleri.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// --Бургерное меню в мобильной версии
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const burgerMenu = document.querySelector(".burger");
  const burgeroverlay = document.querySelector(".burger-overlay");
  const menuItems = document.querySelectorAll(".burger a"); // Assuming your menu items are <a> tags inside the .burger menu

  menuButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    if (burgerMenu.style.display === "block") {
      burgerMenu.style.display = "none";
      burgeroverlay.style.display = "none";
      document.getElementById("menu-burger-img").src = "./i/img/menu.png";
    } else {
      burgerMenu.style.display = "block";
      burgeroverlay.style.display = "block";
      document.getElementById("menu-burger-img").src = "./i/img/closeimg.png";
    }
  });

  burgeroverlay.addEventListener("click", function () {
    burgerMenu.style.display = "none";
    burgeroverlay.style.display = "none";
    document.getElementById("menu-burger-img").src = "./i/img/menu.png";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      burgerMenu.style.display = "none";
      burgeroverlay.style.display = "none";
      document.getElementById("menu-burger-img").src = "./i/img/menu.png";
    });
  });
});

// --При клике на вкладках в хедере (в мобильной версии, до 1200 пикс) - переход к нужному блоку, но на 120 пикселей выше
// -Helter
document
  .getElementById("mobtab-helter")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var helter = document.getElementById("helter");
      var offset = 120;
      var elementPosition =
        helter.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Tjenester
document
  .getElementById("mobtab-tjenester")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var tjenester = document.getElementById("tjenester");
      var offset = 120;
      var elementPosition =
        tjenester.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Tjenestepakker
document
  .getElementById("mobtab-tjenestepakker")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var tjenestepakker = document.getElementById("tjenestepakker");
      var offset = 120;
      var elementPosition =
        tjenestepakker.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Ordre
document
  .getElementById("mobtab-ordre")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var ordre = document.getElementById("ordre");
      var offset = 120;
      var elementPosition =
        ordre.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Galleri
document
  .getElementById("mobtab-galleri")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var galleri = document.getElementById("galleri");
      var offset = 120;
      var elementPosition =
        galleri.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// --Всплывающие блоки с героями при нажатии - работа кнопки закрытия блока
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlayhelter");
  const closeButton = document.querySelector(".close-button");

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  }
});

// // --Всплывающие блоки с героями при нажатии - открытие всплывающего блока

// document.addEventListener("DOMContentLoaded", function () {
//   const helterblock = document.getElementById("helter");
//   const heroes = document.getElementById("helter-grid");
//   const heroesBlock1 = document.querySelector(".heroes_grid_block_1");
//   const overlay1 = document.querySelector(".overlayhelter_1");
//   const closeBtn1 = document.querySelector(".overlayhelter_1 .close-button_1");
//   const heroesBlock2 = document.querySelector(".heroes_grid_block_2");
//   const overlay2 = document.querySelector(".overlayhelter_2");
//   const closeBtn2 = document.querySelector(".overlayhelter_2 .close-button_2");
//   const heroesBlock3 = document.querySelector(".heroes_grid_block_3");
//   const overlay3 = document.querySelector(".overlayhelter_3");
//   const closeBtn3 = document.querySelector(".overlayhelter_3 .close-button_3");
//   const heroesBlock4 = document.querySelector(".heroes_grid_block_4");
//   const overlay4 = document.querySelector(".overlayhelter_4");
//   const closeBtn4 = document.querySelector(".overlayhelter_4 .close-button_4");
//   const heroesBlock5 = document.querySelector(".heroes_grid_block_5");
//   const overlay5 = document.querySelector(".overlayhelter_5");
//   const closeBtn5 = document.querySelector(".overlayhelter_5 .close-button_5");
//   const heroesBlock6 = document.querySelector(".heroes_grid_block_6");
//   const overlay6 = document.querySelector(".overlayhelter_6");
//   const closeBtn6 = document.querySelector(".overlayhelter_6 .close-button_6");
//   const heroesBlock7 = document.querySelector(".heroes_grid_block_7");
//   const overlay7 = document.querySelector(".overlayhelter_7");
//   const closeBtn7 = document.querySelector(".overlayhelter_7 .close-button_7");

//   // Изначально скрываем overlay (если нужно)
//   overlay1.style.display = "none";
//   overlay2.style.display = "none";
//   overlay3.style.display = "none";
//   overlay4.style.display = "none";
//   overlay5.style.display = "none";
//   overlay6.style.display = "none";
//   overlay7.style.display = "none";

//   // Открытие overlay
//   heroesBlock1.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay1.style.display = "block";
//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });

//   heroesBlock2.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay2.style.display = "block";
//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });

//   heroesBlock3.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay3.style.display = "block";
//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });

//   heroesBlock4.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay4.style.display = "block";
//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });
//   heroesBlock5.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay5.style.display = "block";
//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });
//   heroesBlock6.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay6.style.display = "block";
//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });

//   // БЛОК 7
//   const video7 = overlay7.querySelector("video");
//   heroesBlock7.addEventListener("click", function () {
//     heroes.style.display = "none";
//     overlay7.style.display = "block";
//     // ▶️ управление видео
//     if (video7) {
//       video7.currentTime = 0; // начать с начала
//       video7.play(); // запустить
//     }

//     helterblock.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   });

//   // Закрытие overlay
//   closeBtn1.addEventListener("click", function () {
//     overlay1.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });

//   closeBtn2.addEventListener("click", function () {
//     overlay2.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });

//   closeBtn3.addEventListener("click", function () {
//     overlay3.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });

//   closeBtn4.addEventListener("click", function () {
//     overlay4.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });
//   closeBtn5.addEventListener("click", function () {
//     overlay5.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });
//   closeBtn6.addEventListener("click", function () {
//     overlay6.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });
//   closeBtn7.addEventListener("click", function () {
//     overlay7.style.display = "none";
//     if (window.matchMedia("(max-width: 767px)").matches) {
//       heroes.style.display = "block";
//     } else {
//       heroes.style.display = "grid";
//     }
//   });
// });

// // Остановка видео в блоке Sqwid

// document.addEventListener("DOMContentLoaded", () => {
//   const squidOverlay = document.querySelector(".overlayhelter_7");
//   const squidCloseBtn = document.querySelector(".close-button_7");
//   const squidVideo = document.querySelector(".overlayhelter_7 video");

//   if (squidCloseBtn && squidOverlay && squidVideo) {
//     squidCloseBtn.addEventListener("click", () => {
//       squidOverlay.style.display = "none";

//       squidVideo.pause(); // ⏸ стоп
//       squidVideo.currentTime = 0; // ⏮ в начало
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const helterblock = document.getElementById("helter");
  const heroes = document.getElementById("helter-grid");

  // Создаём массивы для блоков и overlay
  const heroBlocks = [
    document.querySelector(".heroes_grid_block_1"),
    document.querySelector(".heroes_grid_block_2"),
    document.querySelector(".heroes_grid_block_3"),
    document.querySelector(".heroes_grid_block_4"),
    document.querySelector(".heroes_grid_block_5"),
    document.querySelector(".heroes_grid_block_6"),
    document.querySelector(".heroes_grid_block_7"),
  ];

  const overlays = [
    document.querySelector(".overlayhelter_1"),
    document.querySelector(".overlayhelter_2"),
    document.querySelector(".overlayhelter_3"),
    document.querySelector(".overlayhelter_4"),
    document.querySelector(".overlayhelter_5"),
    document.querySelector(".overlayhelter_6"),
    document.querySelector(".overlayhelter_7"),
  ];

  const closeBtns = [
    document.querySelector(".overlayhelter_1 .close-button_1"),
    document.querySelector(".overlayhelter_2 .close-button_2"),
    document.querySelector(".overlayhelter_3 .close-button_3"),
    document.querySelector(".overlayhelter_4 .close-button_4"),
    document.querySelector(".overlayhelter_5 .close-button_5"),
    document.querySelector(".overlayhelter_6 .close-button_6"),
    document.querySelector(".overlayhelter_7 .close-button_7"),
  ];

  // Сохраняем исходные src iframe (для блока 7 — и остальных, если тоже iframe)
  const iframeSources = overlays.map((overlay) => {
    const iframe = overlay.querySelector("iframe");
    return iframe ? iframe.src : null;
  });

  // Изначально скрываем все overlay
  overlays.forEach((overlay) => (overlay.style.display = "none"));

  heroBlocks.forEach((block, index) => {
    block.addEventListener("click", () => {
      heroes.style.display = "none";
      const overlay = overlays[index];
      overlay.style.display = "block";

      // Если в overlay есть iframe, добавляем autoplay
      const iframe = overlay.querySelector("iframe");
      if (iframe && iframeSources[index]) {
        iframe.src = iframeSources[index] + "?autoplay=1";
      }

      helterblock.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  });

  closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const overlay = overlays[index];
      overlay.style.display = "none";

      // Если есть iframe — останавливаем видео
      const iframe = overlay.querySelector("iframe");
      if (iframe) {
        iframe.src = ""; // останавливаем видео
      }

      // Показываем грид снова
      if (window.matchMedia("(max-width: 767px)").matches) {
        heroes.style.display = "block";
      } else {
        heroes.style.display = "grid";
      }
    });
  });
});
