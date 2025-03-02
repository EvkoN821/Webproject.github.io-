$(document).ready(function () {
    console.log("ready!");
    $(".reviewSlide").slick({
        nextArrow: '<button id="nextReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button id="prevReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-left" aria-hidden="true"></i> </button>',
        appendArrows: $(".arrows-block"),
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        fade: true,
    });
    $(".reviewSlide").on("afterChange", function() {
        let dataId = parseInt($(".slick-current").attr("data-slick-index"));    
        console.log(dataId);
        $(".current").html("0"+(dataId+=1))
    });
    $("#workingwithcarouselupper").slick({
      adaptiveHeight: false,
      mobileFirst: true,
      dots: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding:"16%",
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              centerPadding:"10%",
            }
          },
       ]
  }
  );
  $("#workingwithcarousellower").slick({
      adaptiveHeight: false,
      mobileFirst: true,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding:"33%",
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6,
              centerPadding:"2%",
            }
          },
       ]
  }); 
});

function showDropdown(navbarDropdown, list){
    $(navbarDropdown).addClass("show");
    $(navbarDropdown).prop("aria-expanded", true);
    $(list).addClass("show");
}

function hideDropdown(navbarDropdown, list){
    let windowInnerWidth = window.innerWidth;
    if(windowInnerWidth >= 993) {
        $(navbarDropdown).removeClass("show");
        $(navbarDropdown).prop("aria-expanded", false);
        $(list).removeClass("show");
    }
}

function moveNavbar(){
    let windowInnerWidth = window.innerWidth;
    let navbar = $("#navbar");
    if(windowInnerWidth <= 993) {
        navbar.addClass("fixed-bottom");
        navbar.addClass("bg-dark");
        $(".video_back").remove();
    }
    if(windowInnerWidth >= 993){
        navbar.removeClass("fixed-bottom");
        navbar.removeClass("bg-dark");
    }
}

$(document).ready(function (){
   
    moveNavbar();
    $(window).resize((event)=>{
        moveNavbar();
    });

    $("#check").change(function () {
        if ($("#check").is(":checked")) {
            $("#submitButton").prop("disabled", false);
        } else {
            $("#submitButton").prop("disabled", true);
        }
    });

    let data = document.querySelectorAll(".info");
    const ajaxSend = (formData) => {
        fetch("https://formcarry.com/s/EzbPKuFdyzV", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                alert("Сообщение отправлено");
                data.forEach((element) => { element.value = ""; });
                $("#check").prop("checked", false);
                $("#submitButton").prop("disabled", true);
                localStorage.clear();
            })
            .catch((error) => {alert(error);})
    };

    const forms = $("#thatForm");
    for (let i = 0; i < forms.length; i++) {
        $("#submitButton").click(function (e) {
            e.preventDefault();

            let formData = new FormData(forms[i]);
            formData = Object.fromEntries(formData);

            ajaxSend(formData);
        });
    }

    $(".navbar-toggler").click(event => {
        showDropdown('#navbarDropdown-1','#list-1');
        showDropdown('#navbarDropdown-2','#list-2');
    });
});

$(document).ready(function() {
	let oldelem=null;
	$(".accordion-content").hide();
	$(".accordion-header").click(function () {
    if($(this).next().is(":animated")) return;
    $(this).next().slideToggle();
    $(this).toggleClass("active");
    $(this).parent().toggleClass("toggle");
    if(oldelem===this) return;
    $(oldelem).next().slideUp();
    $(oldelem).removeClass("active");
    $(oldelem).parent().removeClass("toggle");
    oldelem=this;
 });
}); 



