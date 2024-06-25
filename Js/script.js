// navbar

$(document).ready(function () {
  // Toggle button click event
  $(".navbar-toggler").click(function () {
    $("#navbar-content").toggleClass("show");
  });

  // Enable hover dropdowns (if needed)
  $(".navbar .dropdown").hover(
    function () {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .delay(250)
        .slideDown();
    },
    function () {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .delay(100)
        .slideUp();
    }
  );
});

// ---

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('[data-toggle="popover"]').popover();

  $(".navbar .dropdown").hover(
    function () {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .delay(250)
        .slideDown();
    },
    function () {
      $(this)
        .find(".dropdown-menu")
        .first()
        .stop(true, true)
        .delay(100)
        .slideUp();
    }
  );
});

// builder

$(document).ready(function () {
  function applyScrollEffect() {
    var scrollTop = $(window).scrollTop();
    var newBottom = -195 + scrollTop * 0.1;
    $("#moving-image").css("bottom", newBottom + "rem");
  }

  function checkScreenWidth() {
    if ($(window).width() > 768) {
      $(window).on("scroll", applyScrollEffect);
      applyScrollEffect(); // Apply effect immediately on page load
    } else {
      $(window).off("scroll", applyScrollEffect);
      $("#moving-image").css("bottom", "-6rem"); // Reset position
    }
  }

  checkScreenWidth();
  $(window).resize(checkScreenWidth);
});

//  bending-text

document.addEventListener("mousemove", (e) => {
  const textElement = document.querySelector(".bending-text");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = ((e.clientX - centerX) / centerX) * 30;
  const moveY = ((e.clientY - centerY) / centerY) * 30;

  textElement.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
});

$(document).ready(function () {
  var animationDuration = 5000;

  function animateButton() {
    $(".gradient-button").css("animation", "none");
    void $(".gradient-button").width();
    $(".gradient-button").css(
      "animation",
      "gradientBG " + animationDuration + "ms ease infinite"
    );
  }

  animateButton();

  $(".gradient-button").click(function () {
    animateButton();
  });
});

// number
document.addEventListener("DOMContentLoaded", function () {
  function animateNumber(element, target) {
    $({ Counter: 0 }).animate(
      {
        Counter: target,
      },
      {
        duration: 1000,
        easing: "swing",
        step: function () {
          element.text(Math.ceil(this.Counter));
        },
      }
    );
  }

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = $(entry.target);
        const target = parseInt(element.text());
        animateNumber(element, target);
        observer.unobserve(entry.target);
      }
    });
  }

  // Create Intersection Observer
  const observer = new IntersectionObserver(callback, {
    threshold: 0.5,
  });

  // Observe the elements
  const elements = document.querySelectorAll(".number, .number1, .number2");
  elements.forEach((el) => {
    observer.observe(el);
  });
});

// -------------

var tWidth = "100%";
var tHeight = "50px";
var tcolour = "transparent";
var moStop = true;
var fontfamily = "arial,sans-serif";
var tSpeed = 2;

var cps = -tSpeed;
var aw, mq;
var fsz = parseInt(tHeight) - 4;

function startticker() {
  if (document.getElementById) {
    var tickerContent = document.getElementById("ticker-content").textContent;

    var tick =
      '<div style="position:relative;width:' +
      tWidth +
      ";height:" +
      tHeight +
      ";overflow:hidden;background-color:" +
      tcolour +
      '"';
    if (moStop) tick += ' onmouseover="cps=0" onmouseout="cps=-tSpeed"';
    tick +=
      '><div id="mq" style="position:absolute;right:0px;top:0px;font-family:' +
      fontfamily +
      ";font-size:" +
      fsz +
      'px;white-space:nowrap;"></div></div>';
    document.getElementById("ticker").innerHTML = tick;
    mq = document.getElementById("mq");
    mq.style.right = 10 + window.innerWidth + "px";
    mq.innerHTML = '<div id="tx">' + tickerContent + "</div>";
    aw = document.getElementById("tx").offsetWidth;
    lefttime = setInterval("scrollticker()", 50);
  }
}

function scrollticker() {
  mq.style.right =
    parseInt(mq.style.right) > -10 - aw
      ? (mq.style.right = parseInt(mq.style.right) + cps + "px")
      : window.innerWidth + 10 + "px";
}

window.onload = startticker;

// Moving cards

const articles = document.querySelectorAll("article");

[...articles].forEach((article) => {
  article.classList.toggle("enable-animation");
  article.addEventListener("mouseover", () => {
    article.classList.add("marqueeCard--hover-pause");
  });
});

// Top-notch

const changableText = document.querySelector(".textTwo");

const changeTextWithFade = (newText, delay) => {
  setTimeout(() => {
    changableText.classList.remove("fade-in");
    changableText.classList.add("fade-out");
    setTimeout(() => {
      changableText.textContent = newText;
      changableText.classList.remove("fade-out");
      changableText.classList.add("fade-in");
    }, 1000);
  }, delay);
};

const textChange = () => {
  changeTextWithFade("designers 🎨", 2000);
  changeTextWithFade("bloggers ✍🏻", 4000);
  changeTextWithFade("developers 👨🏻‍💻", 6000);
  changeTextWithFade("shops 🛍", 8000);
  changeTextWithFade("creatives 👨🏻‍🎨", 10000);
  changeTextWithFade("vampires 🧛🏻", 12000);
};

textChange();
setInterval(textChange, 12000);
