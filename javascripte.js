



const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
  // Check the stored mode preference
  var darkModePref = localStorage.getItem('darkMode');
  if (darkModePref === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode').checked = true;
  }
});

function toggleMode() {
  var modeToggle = document.getElementById('dark-mode');
  if (modeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
}
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left >= 0 &&
    rect.bottom >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  var elements = document.querySelectorAll('.animate-scroll');
  
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', handleScrollAnimations);

// Initial check on page load
window.addEventListener('load', handleScrollAnimations);


function openReserver() {
  const href = 'Reserver.html'; // Replace with your desired href
  window.location.href = href;
}
function openNosService() {
  const href = 'NosService.html'; // Replace with your desired href
  window.location.href = href;
}
function openContactNous() {
  const href = 'Contact.html'; // Replace with your desired href
  window.location.href = href;
}

function openGallery() {
  const href = 'Gallery.html'; // Replace with your desired href
  window.location.href = href;
}

function openIndex() {
  const href = 'index.html'; // Replace with your desired href
  window.location.href = href;
}
function openThankYouContact() {
  const href = 'ThankYouContactez.html'; // Replace with your desired href
  window.location.href = href;
}
function openThankYouReserver() {
  const href = 'ThankYouReserver.html'; // Replace with your desired href
  window.location.href = href;
}



function toggleMenu() {
  var menuIcon = document.getElementById("menu-icon");
  menuIcon.classList.toggle("hide");
  menuIcon.classList.toggle("fa-times");
}



if (window.location.pathname.endsWith('/NosService.html'))
{

  function animateScroll() {
    var scrollable = document.querySelector('.scrollable');
    var maxScrollLeft = scrollable.scrollWidth - scrollable.clientWidth;
    var isScrollingLeft = true; 
    if (isScrollingLeft) {
      scrollable.scrollLeft += 1; // Scroll from left to right
      if (scrollable.scrollLeft >= maxScrollLeft) {
        scrollable.scrollLeft = 0; // Reset scroll position to the beginning
      }
    } else {
      scrollable.scrollLeft -= 1; // Scroll from right to left
      if (scrollable.scrollLeft <= 0) {
        scrollable.scrollLeft = maxScrollLeft; // Reset scroll position to the end
      }
    }
  }
  
  function scrollLoop(){
    animateScroll();
    requestAnimationFrame(scrollLoop);
  }
  
  // Start the animation loop
  scrollLoop();


  function animateScroll1() {
    var scrollable = document.querySelector('.scrollableLogos');
    var maxScrollLeft = scrollable.scrollWidth - scrollable.clientWidth;
    var isScrollingLeft = true; 
    if (isScrollingLeft) {
      scrollable.scrollLeft += 1; // Scroll from left to right
      if (scrollable.scrollLeft >= maxScrollLeft) {
        scrollable.scrollLeft = 0; // Reset scroll position to the beginning
      }
    } else {
      scrollable.scrollLeft -= 1; // Scroll from right to left
      if (scrollable.scrollLeft <= 0) {
        scrollable.scrollLeft = maxScrollLeft; // Reset scroll position to the end
      }
    }
  }
 
  function scrollLoop1() {
    animateScroll1();
    requestAnimationFrame(scrollLoop1);
  }
  
  // Start the animation loop
  scrollLoop1();
}
else if (window.location.pathname.endsWith('/Contact.html')) 
{
    $(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
  
      const userApi = "suHNSJiEMegyzNB31";
      var templateParams = {
        from_name: "Contact_Studio_El_Horia_Site_Web",
        TYPE : "Contactez",
        nom: $("input[name='nom']").val(),
        email: $("input[name='email']").val(),
        telephone: $("input[name='telephone']").val(),
        localisation: $("input[name='localisation']").val(),
        dateEvenement: $("input[name='dateEvenement']").val(),
        serviceInteresse: $("select[name='serviceInteresse']").val(),
        details: $("textarea[name='details']").val()
      };
      if ($("input[name='RadioBtn']:checked").length > 0){
      emailjs.send("Service_Contactez_Nous", "template_Contactez_Nous", templateParams, userApi)
        .then(function(response) {
          openThankYouContact();
        }, function(error) {
          alert(error)
        });
      } else {
        alert("Veuillez accepter que Tes données soumises soient collectées et stockées.");
      }
    });
  });
}
else if (window.location.pathname.endsWith('/Reserver.html')) 
{

  function changeInputType() {
    var input = document.querySelector('input[name="dateEvenement"]');
    if (input) {
        input.type = 'date';
    }
}
  function saveName() {
    var name = document.getElementById("nameInput").value;
    sessionStorage.setItem("name", name);
  }
  $(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
  
      const userApi = "suHNSJiEMegyzNB31";
      var templateParams = {
        from_name: "Reserver Studio El Horia Site Web",
        TYPE : "Reserver",
        nom: $("input[name='nom']").val(),
        email: $("input[name='email']").val(),
        telephone: $("input[name='telephone']").val(),
        localisation: $("input[name='localisation']").val(),
        dateEvenement: $("input[name='dateEvenement']").val(),
        serviceInteresse: $("select[name='serviceInteresse']").val(),
        details: $("textarea[name='details']").val()
      };
      if ($("input[name='RadioBtn']:checked").length > 0){
      emailjs.send("Service_Contactez_Nous", "template_Contactez_Nous", templateParams, userApi)
        .then(function(response) {
          openThankYouReserver();
        }, function(error) {
          alert("هناك خطأ ما المرجو اعادة المحاولة لاحقا",Error);
        });
      } else {
        alert(" المرجو الموافقة على جمع وتخزين البيانات التي سترسلها ");
      }
    });
  });
}
else if (window.location.pathname.endsWith('/ThankYouReserver.html')) 
{
  window.onload = function() {
    var namee = sessionStorage.getItem("name");
        document.getElementById("name").textContent = namee;
  };
}
else if (window.location.pathname.endsWith('/ThankYouContactez.html')) 
{
  window.onload = function() {
    var namee = sessionStorage.getItem("name");
        document.getElementById("name").textContent = namee;
  };
}
else if (window.location.pathname.endsWith('/Gallery.html'))
{

}
else 
{
  const imageUrls = [
    'images/firstPhoto.jpg',
    'images/leftImageAbout.jpg',
    'images/RightImageAbout.jpg',
    "images/mariage.jpg",
    'images/laboElhoria.png',
    'images/forfaits.png',
    'images/marriageuniquee.png'

    // Add more image URLs as needed
  ];

  function preloadImages(urls) {
    const imagePromises = [];
    
    for (const url of urls) {
      const img = new Image();
      const imagePromise = new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      img.src = url;
      imagePromises.push(imagePromise);
    }

    return Promise.all(imagePromises);
  }

  window.addEventListener('load',preloadImages(imageUrls));
  
  var currentContentIndex = 0;
  var content = [
    { image: "images/laboElhoria.png", title: " استخدام تقنيات ومعدات عالية الجودة ", description: "تقدم خدمتنا خبرة لا مثيل لها باستخدام تقنيات ومعدات عالية الجودة. نحن ملتزمون بتقديم حلول موثوقة وفعالة ، باستخدام أحدث المعدات والتقنيات المتقدمة. بفضل بحثنا المستمر عن أفضل الطرق والتقنيات الأكثر تقدمًا " },
    { image: "images/forfaits.png", title: "مجموعة الحزم ", description: "مجموعة كاملة من الحزم الملائمة لاحتياجاتك. تقدم خدمتنا باقات مصممة لتلبية توقعاتك. تم تصميم كل حزمة بعناية لتقديم تجربة تصوير استثنائية ، بما في ذلك خيارات المدة ، وتحديد الصور ، واللمسات الاحترافية والمزيد" },
    { image: "images/marriageuniquee.png", title: " نحن مقتنعون بأن كل زفاف له مكانة خاصة  ", description: "اكتشف التجربة التي لا تُنسى لحفل زفاف فريد من نوعه ، حيث يتم التفكير بعناية في كل التفاصيل لخلق ذكريات تدوم مدى الحياة. فريقنا المتفاني مقتنع بأن كل حفل زفاف هو مناسبة خاصة تستحق اهتمامًا خاصًا" }
  ];
  
  function changeContent(direction) {
    currentContentIndex += direction;
    
    if (currentContentIndex < 0) {
      currentContentIndex = content.length - 1;
    } else if (currentContentIndex >= content.length) {
      currentContentIndex = 0;
    }
    
    var container3 = document.querySelector(".container3");
    container3.classList.add("hidden");
    
    setTimeout(function() {
      var imageDiv = document.querySelector(".image-div img");
      var textDiv = document.querySelector(".text-div");
      
      imageDiv.src = content[currentContentIndex].image;
      imageDiv.alt = "Image " + (currentContentIndex + 1);
      textDiv.querySelector("h2").textContent = content[currentContentIndex].title;
      textDiv.querySelector("h5").textContent = content[currentContentIndex].description;
      
      container3.classList.remove("hidden");
      
      container3.classList.add("zoom-in-animation");
      setTimeout(function () {
        container3.classList.remove("zoom-in-animation");
      }, 500);
    }, 500)
  }

  var items = [
    {
      image: 'images/feedback1.jpg',
      title: 'STE AGDALMOMENT',
      description: 'بفضل خبرتك في هذا الحدث ، حقق حدثي نجاحًا تامًا! احترافيتك رائعة'
    },
    {
      image: 'images/feedback2.jpg',
      title:'سلمى',
      description: 'كان حفل زفافي رائعًا بفضل دعمكم. التقط فريقك كل لحظة خاصة بطريقة سحرية. شكرا جزيلا'
    },
    {
      image: 'images/feedback5.jpg',
      title: 'رشيد',
      description: 'لمناظر الجوية التي التقطتها مذهلة! إضافة فريدة لمشروعي. شكرا لتتمتعون به من خبرة'
    },
    {
      image: 'images/feedback4.jpg',
      title: 'صبري',
      description: 'صورك رائعة! أحببت كل لحظة تم التقاطها. فريقك محترف وموهوب'
    },
    {
      image: 'images/feedback3.jpg',
      title: 'عائشة',
      description: 'لقد كان العمل مع فريقك النسائي تجربة رائعة. إنهم أكفاء ومبدعون وقد حققوا توقعاتي.'
    },
    {
      image: 'images/feedback6.jpg',
      title: 'عبد السلام',
      description: 'إبداعك استثنائي! أحببت التصميم الفريد الذي أنشأته لي. برافو على موهبتك'
    },
  ];


      var currentIndex = 0; // Current item index
      function changeFeedback(direction) {
        var nextIndex = currentIndex + direction;

        if (nextIndex < 0) {
          nextIndex = items.length - 1;
        } else if (nextIndex >= items.length) {
          nextIndex = 0;
        }

        var currentItem = items[currentIndex];
        var nextItem = items[nextIndex];

        // Update the elements with the current item's data
        var leftItem = document.querySelector('.left-item1');
        var rightItem = document.querySelector('.right-item1');

        var container4 = document.querySelector('.container4');
        container4.classList.add(direction < 0 ? 'left' : 'right');

        setTimeout(function () {
          leftItem.querySelector('img').src = nextItem.image;
          leftItem.querySelector('h3').textContent = nextItem.title;
          leftItem.querySelector('p').textContent = nextItem.description;

          rightItem.querySelector('img').src = currentItem.image;
          rightItem.querySelector('h3').textContent = currentItem.title;
          rightItem.querySelector('p').textContent = currentItem.description;

          container4.classList.remove('left', 'right');
          currentIndex = nextIndex;
        }, 300);
      }


      
  setInterval(function() {
    changeContent(1);
  }, 12000);
  setInterval(function() {
    changeFeedback(1);
  }, 9000);
  function animateScroll() {
    var scrollable = document.querySelector('.scrollable');
    var maxScrollLeft = scrollable.scrollWidth - scrollable.clientWidth;
    var isScrollingLeft = true; 
    if (isScrollingLeft) {
      scrollable.scrollLeft += 1; // Scroll from left to right
      if (scrollable.scrollLeft >= maxScrollLeft) {
        scrollable.scrollLeft = 0; // Reset scroll position to the beginning
      }
    } else {
      scrollable.scrollLeft -= 1; // Scroll from right to left
      if (scrollable.scrollLeft <= 0) {
        scrollable.scrollLeft = maxScrollLeft; // Reset scroll position to the end
      }
    }
  }
  
  function scrollLoop() {
    animateScroll();
    requestAnimationFrame(scrollLoop);
  }
  
  // Start the animation loop
  scrollLoop();

  document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const fullscreenView = document.createElement('div');
    fullscreenView.classList.add('fullscreen-view');
  
    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const image = item.querySelector('img , video');
        const exitFullscreen = document.createElement('div');
        exitFullscreen.classList.add('exit-fullscreen');
        exitFullscreen.innerHTML = '<i class="fas fa-times"></i>'; // Add your desired icon here
  
        fullscreenView.innerHTML = '';
        fullscreenView.appendChild(exitFullscreen);
        fullscreenView.appendChild(image.cloneNode(true));
        document.body.appendChild(fullscreenView);
        fullscreenView.style.display = 'flex';
  
        exitFullscreen.addEventListener('click', function() {
          exitFullscreenHandler();
        });
  
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
            exitFullscreenHandler();
          }
        });
      });
    });
  
  
    function exitFullscreenHandler() {
      fullscreenView.style.display = 'none';
    }
  });

  function toggleAnswer(questionNumber) {
    var answer = document.getElementById("answer" + questionNumber);
    answer.classList.toggle("active");
  }
}


