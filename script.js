let pages = ["index.html",
             "soundhound.html",
             "dreamfestival.html",
             "genuary2023.html",
             "generativetype.html",
             "citiesintheus.html",
             "bobaintheus.html"];
let pageNames = ["All",
                 "SoundHound",
                 "Dream Festival",
                 "Genuary 2023",
                 "Generative Typography",
                 "Cities in the US",
                 "Boba in the US"]

for (var i=0; i<pages.length; i++) {
  $("#bottom_nav").append("<a href='" + pages[i] + "'>" + pageNames[i] + "</a>");
}


$(document).ready(function(){
    $('#work').css('display', 'none');
    $('#work').fadeIn(800);

    $('#project_page').css('display', 'none');
    $('#project_page').fadeIn(800);
});
