let pages = ["index.html",
             "dreamfestival.html",
             "citiesintheus.html",
             "gridpatterns.html",
             "bobaintheus.html",
             "aigadesigncensus.html",
             "cmudesigncensus.html",];
let pageNames = ["All",
                 "Dream Festival",
                 "Grid Patterns",
                 "Cities in the US",
                 "Boba in the US",
                 "AIGA Design Census",
                 "CMU Design Census",]

for (var i=0; i<pages.length; i++) {
  $("#bottom_nav").append("<a href='" + pages[i] + "'>" + pageNames[i] + "</a>");
}


$(document).ready(function(){
    $('#work').css('display', 'none');
    $('#work').fadeIn(800);

    $('#project_page').css('display', 'none');
    $('#project_page').fadeIn(800);
});
