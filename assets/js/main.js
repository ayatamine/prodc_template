(function () {
  "use strict";

  
  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/WhatsApp Image 2023-05-03 at 5.54.05 PM.jpeg";
    } else {
      logo.src = "assets/images/logo/WhatsApp Image 2023-05-03 at 5.54.05 PM.jpeg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();
      // hide user menu 
      function hideOthers(){
        document.querySelectorAll('.topNotMess').forEach(item => item.style.display="none")
        document.querySelectorAll('.topNotMessCallable').forEach((item) => {
        item.classList.remove("p-3") 
        item.classList.remove("bg-body") 
      })
      }
//include html
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
document.querySelector('footer').innerHTML = `
<div class="p-6 bg-white sm:p-6 dark:bg-gray-800">
<div class="md:flex gap-3 md:justify-between">
  <div class=" md:w-1/3 mb-6 md:mb-0">
    <a href="#" target="_blank" class="flex items-center text-gray-700 gap-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sectionTitleColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
      <span class="ml-2 font-semibold text-[#252C32] text-2xl"><span class="font-bold text-theme">Prodc</span></span>
    </a>
  <div class="mt-6 w-full md:w-2/3 flex justify-between items-center gap-6">
    <label for="country">اختر البلد</label>
    <select class=" filter-input " id="country" >
      <option value="france" selected>فرنسا</option>
      <option value="belgique" >بلجيكا</option>
      <option value="italy" >ايطاليا</option>
    </select>
  </div>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 p-3">
    <!-- most links -->
    <div>
      <h3 class="mb-6 text-smd px-2 font-bold text-gray-900 uppercase ">أهم الروابط</h3>
      <ul>
        <li class="p-2 rounded hover:bg-body">
          <a href="offers.html" 
            class="footer-link">الاشتراك بباقة</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="my_verifcations.html" 
            class="footer-link">توثيق العضوية والتراخيص</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="offers.html" 
            class="footer-link">حساب وسداد عمولة الموقع</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="#" 
            class="footer-link">إشترك معنا في نشرتنا البريدية</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="mb-6 text-smd px-2 font-bold text-gray-900 uppercase ">تعرف أكثر على</h3>
      <ul>
        <li class="p-2 rounded hover:bg-body">
          <a href="#" 
            class="footer-link">نظام التقييم</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="#" 
            class="footer-link">نظام النقاط</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="#" 
            class="footer-link">القائمة السوداء</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="guarantite.html" 
            class="footer-link">ضمان الحقوق</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="mb-6 text-smd font-bold text-gray-900 uppercase ">صفحات - تواصل</h3>
      <ul>
        <li class="p-2 rounded hover:bg-body">
          <a href="privacy.html" 
            class="footer-link">سياسة الخصوصية</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="conditions.html" 
            class="footer-link">شروط الاستخدام</a>
        </li>
        <li class="p-2 rounded hover:bg-body">
          <a href="#" 
            class="footer-link flex items-center justify-start gap-x-2">
            <svg class="h-5 w-5 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
            <span>عبر البريد</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
<div class="sm:flex sm:items-center sm:justify-between text-center">
  <span class="sm:w-1/3"></span>
  <span class="sm:w-1/3 text-sm text-gray-600 font-semibold sm:text-center dark:text-gray-400">
    جميع الحقوق محفوظة © للمنصة المحترف القوي الأمين 2023
  </span>
  <div class="sm:w-1/3 flex flex-wrap justify-center sm:justify-end gap-2 p-4 my-2">
    <!-- facebook -->
    <a href="#" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:animate-bounce duration-300 ease-in">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    </a href="#">
    <!-- instagram -->
    <a href="#" class="bg-[#4f5bd5] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:animate-bounce duration-300 ease-in">
      <svg  class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
    </a>
    <a href="#" title="twitter" class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded  hover:animate-bounce duration-300 ease-in">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
    </a>
  </div>
</div>
</div>`
