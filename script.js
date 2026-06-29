let pages = ["index.html",
             "anvil.html",
             "soundhound.html",
             "hounddesignsystem.html",
             "midomi.html"            
            ];
let pageNames = ["All Projects",
                 "Anvil",
                 "SoundHound",
                 "Hound Design System",
                 "Midomi"
                ]

for (var i=0; i<pages.length; i++) {
  $("#bottom_nav").append("<a href='" + pages[i] + "'>" + pageNames[i] + "</a>");
}


// $(document).ready(function(){
// window.onload = (event) => {
//     $('#work').css('display', 'none');
//     $('#work').fadeIn(800);

//     $('#project_page').css('display', 'none');
//     $('#project_page').fadeIn(800);
// };

window.onload = (event) => {
  // $('#loader').css('opacity', 1);
  // $('#loader').fadeTo(400, 0);
  // $('#loader').fadeTo(400, 0, function() {
  //   $('#work').css('opacity', 0);
  //   $('#work').fadeTo(400, 1);
  
  //   $('#project_page').css('opacity', 0);
  //   $('#project_page').fadeTo(400, 1);
  // });

  $('#work').css('opacity', 0);
  $('#work').fadeTo(250, 1);

  $('#project_page').css('opacity', 0);
  $('#project_page').fadeTo(250, 1);

  $('#bio').css('opacity', 0);
  $('#bio').fadeTo(250, 1);
};
