let pages = ["index.html",
             "soundhound.html",
             "hounddesignsystem.html",
             "dreamfestival.html",
             "genuary2023.html",
             "generativetype.html",
             "bobaintheus.html"
            ];
let pageNames = ["All Projects",
                 "SoundHound",
                 "Hound Design System",
                 "Dream Festival",
                 "Playing with TouchDesigner",
                 "Generative Typography",
                 "Boba in the US"
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
  $('#work').css('opacity', 0);
  $('#work').fadeTo(800, 1);

  $('#project_page').css('opacity', 0);
  $('#project_page').fadeTo(800, 1);
};
