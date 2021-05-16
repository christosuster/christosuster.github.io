let yAngle = 0;


let rightButton = document.getElementById('turn-right');
let leftButton = document.getElementById('turn-left');
let box = document.getElementById("box");


rightButton.addEventListener("click", function () {

  yAngle -= 90;

  let rotate = box.animate([{
    transform: 'rotateY(' + (yAngle) + 'deg)'
  }], {
    duration: 1000
  });

  rotate.addEventListener("finish", function () {
    box.style.transform = "rotateY(" + (yAngle) + "deg)";
  })

})


leftButton.addEventListener("click", function () {

  yAngle += 90;

  let rotate = box.animate([{
    transform: 'rotateY(' + (yAngle) + 'deg)'
  }], {
    duration: 1000
  });

  rotate.addEventListener("finish", function () {
    box.style.transform = "rotateY(" + (yAngle) + "deg)";
  })

})


document.getElementById("aboutButton").addEventListener("click", function () {
  document.getElementById("container").style.opacity = "0";
  document.getElementById("container").style.zIndex = "0";
  document.getElementById("aboutPage").style.opacity = "1";
  document.getElementById("aboutPage").style.transform = "scale(1)";
  document.getElementById("aboutPage").style.zIndex = "5";

})

document.getElementById("aboutpageClose").addEventListener("click", function () {
  console.log("YESSSS");
  document.getElementById("aboutPage").style.transform = "scale(0)";
  document.getElementById("container").style.zIndex = "5";
  document.getElementById("aboutPage").style.zIndex = "0";
  document.getElementById("container").style.opacity = "1";
  document.getElementById("aboutPage").style.opacity = "0";
})


document.getElementById("back").addEventListener("click", function () {
  document.getElementById("container").style.opacity = "0";
  document.getElementById("container").style.zIndex = "0";
  document.getElementById("portfolioPage").style.opacity = "1";
  document.getElementById("portfolioPage").style.transform = "scale(1)";
  document.getElementById("portfolioPage").style.zIndex = "50";

})

document.getElementById("portfoliopageClose").addEventListener("click", function () {
  document.getElementById("portfolioPage").style.transform = "scale(0)";
  document.getElementById("container").style.zIndex = "5";
  document.getElementById("portfolioPage").style.zIndex = "0";
  document.getElementById("container").style.opacity = "1";
  document.getElementById("portfolioPage").style.opacity = "0";
})



new TypeIt("#element", {
    speed: 150,
    loop: true
  })
  .type("Web Developer")
  .pause(1000)
  .delete(13)
  .pause(300)
  .type("Designer")
  .pause(1000)
  .delete(8)
  .pause(300)
  .type("Composite Artist")
  .pause(1000)
  .delete(16)
  .pause(100)
  .go();






const cursor = document.querySelector("#cursor"),
anchor = document.querySelectorAll("a");

window.addEventListener("mousemove",(e) => {
  let x = e.pageX,
  y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

anchor.forEach((anc) => {
  anc.addEventListener("mouseover",()=>{
    cursor.style.transform="scale(2)";
    cursor.style.animationName = "cursorAnim";

  });
  anc.addEventListener("mouseleave",()=>{
    cursor.style.transform="";
    cursor.style.animationName = "";
  })
})



var $grid = $('.grid').isotope({
});
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});