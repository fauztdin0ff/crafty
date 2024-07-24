/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

         __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
            /* harmony export */
});
         // проверка поддержки webp, добавление класса webp или no-webp
         function isWebp() {
            //проверка поддержки webp
            function testWebP(callback) {

               var webP = new Image();
               webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
               };
               webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }

            //добавление класса
            testWebP(function (support) {
               if (support == true) {
                  document.querySelector('body').classList.add('webp');
               } else {
                  document.querySelector('body').classList.add('no-webp');
               }
            });
         }

         /***/
})
/******/]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
         /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
         /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
               /******/
}
            /******/
}
         /******/
};
      /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
         /******/
};
      /******/
})();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
   (() => {
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

      /*---------------------------------------------Языковая панель--------------------------------------------*/
      const languageContainer = document.querySelector('.header__languages');
      const activeLanguage = document.querySelector('.active-language');
      const languageDropdown = document.querySelector('.languages-dropdown-menu');

      function toggleVisibility(element) {
         if (window.innerWidth <= 800) {
            element.classList.toggle('visible');
         }
      }

      function showElement(element) {
         if (window.innerWidth > 800) {
            element.classList.add('visible');
         }
      }

      function hideElement(element) {
         if (window.innerWidth > 800) {
            element.classList.remove('visible');
         }
      }

      if (languageContainer && activeLanguage && languageDropdown) {
         activeLanguage.addEventListener('click', () => {
            toggleVisibility(languageDropdown);
         });

         languageContainer.addEventListener('mouseenter', () => {
            showElement(languageDropdown);
         });

         languageContainer.addEventListener('mouseleave', () => {
            hideElement(languageDropdown);
         });

         languageDropdown.addEventListener('mouseenter', () => {
            showElement(languageDropdown);
         });

         languageDropdown.addEventListener('mouseleave', () => {
            hideElement(languageDropdown);
         });
      }

      /*------------------------------Slider---------------------------*/
      var swiper;
      function checkScreenWidth() {
         return window.innerWidth >= 901;
      }
      function initializeSwiper() {
         if (checkScreenWidth()) {
            // Инициализируем Swiper, если он еще не инициализирован
            if (!swiper) {
               swiper = new Swiper('.swiper', {
                  loop: false,
                  // Navigation arrows
                  navigation: {
                     nextEl: '.slider-button-next',
                     prevEl: '.slider-button-prev',
                  },
                  // Включение/отключение перетаскивания на ПК
                  simulateTouch: false,
                  // Чувствительность свайпа
                  touchRatio: 1,
                  // Курсор перетаскивания
                  grabCursor: false,
                  // Переключение при клике на слайд
                  slideToClickedSlide: false,
                  // Управление клавиатурой
                  keyboard: {
                     // Включить\Выключить
                     enabled: false,
                     // Включить\Выключить только когда слайдер в пределах вьюпорта
                     onlyInViewport: true,
                     // Включить\Выключить управление клавишами PageUp, PageDown
                     pageUpDown: false,
                  },
                  // Управление колесом мыши
                  mousewheel: true,
                  // Количество слайдов для показа
                  slidesPerView: 1,
                  // Отключение функционала если слайдов меньше чем нужно
                  watchOverflow: true,
                  initialSlide: 0,
                  // Количество дублирующихся слайдов
                  loopedSlides: 0,
                  // Свободный режим (перетаскивание без фиксированных позиций)
                  freeMode: false,
                  speed: 300,
                  effect: 'fade',
                  fadeEffect: {
                     crossFade: true,
                  },
               });
            }
         }
      }

      window.onload = initializeSwiper;
      window.addEventListener('resize', initializeSwiper);

      /*------------------------------Кнопка Lets GO Удалить!---------------------------*/
      /* document.getElementById('letsgo').addEventListener('click', function (event) {
         event.preventDefault();
      
         if (window.innerWidth > 900) {
            swiper.slideNext();
         } else {
            window.location.href = this.getAttribute('href');
         }
      });
       */
      /*------------------------------ССылки на слайды ДОБАВИТЬ!---------------------------*/

      function updateSlideLinks() {
         document.querySelectorAll('.slide-link').forEach(function (link) {
            link.removeEventListener('click', handleSlideLinkClick);
            link.removeEventListener('click', handleAnchorLinkClick);

            if (window.innerWidth > 900) {
               link.addEventListener('click', handleSlideLinkClick);
            } else {
               link.addEventListener('click', handleAnchorLinkClick);
            }
         });
      }

      function handleSlideLinkClick(event) {
         event.preventDefault();
         var slideIndex = this.getAttribute('data-slide-index');
         swiper.slideTo(slideIndex);
      }

      function handleAnchorLinkClick(event) {
         event.preventDefault();
         var targetId = this.getAttribute('href').substring(1);
         document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
         });
      }


      /*-----------------------Удаляем классы слайдера для моб устройств----------------------------------*/
      window.addEventListener('DOMContentLoaded', function () {
         function removeSwiperClasses() {
            var elements = document.querySelectorAll('.swiper, .swiper-wrapper');
            elements.forEach(function (element) {
               element.classList.remove('swiper', 'swiper-wrapper');
            });
         }

         if (window.innerWidth < 900) {
            removeSwiperClasses();
         }

         window.addEventListener('resize', function () {
            if (window.innerWidth < 900) {
               removeSwiperClasses();
            } else {
               var containers = document.querySelectorAll('.swiper-container');
               containers.forEach(function (container) {
                  container.classList.add('swiper');
               });
            }
         });
      });


      /*------------------------------Валидация формы---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const emailInput = document.getElementById('emailInput');
         const form = document.getElementById('form');
         const submitButton = document.getElementById('submitButton');
         const policyCheckbox = document.getElementById('policyCheckbox');

         emailInput.addEventListener('input', validateEmail);
         policyCheckbox.addEventListener('change', updateSubmitButtonState);

         function validateEmail() {
            const email = emailInput.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(email)) {
               form.classList.remove('incorrect-mail');
               form.classList.add('success-mail');
            } else {
               form.classList.remove('success-mail');
               form.classList.add('incorrect-mail');
            }
            updateSubmitButtonState();
         }

         function updateSubmitButtonState() {
            if (policyCheckbox.checked && !form.classList.contains('incorrect-mail')) {
               submitButton.disabled = false;
            } else {
               submitButton.disabled = true;
            }
         }
      });
   })();

   /******/
})()
   ;