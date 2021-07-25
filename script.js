let pages = ["index.html",
             "soundhound.html",
             "soundhound.html",
             "soundhound.html",
             "soundhound.html",
             "soundhound.html",
             "soundhound.html",
             "soundhound.html"];
let pageNames = ["All",
                 "SoundHound",
                 "SoundHound",
                 "SoundHound",
                 "SoundHound",
                 "SoundHound",
                 "SoundHound",
                 "SoundHound",
                 "SoundHound",]

for (var i=0; i<pages.length; i++) {
  $("#bottom_nav").append("<a href='" + pages[i] + "'>" + pageNames[i] + "</a>");
}


$(document).ready(function(){
    $('#work').css('display', 'none');
    $('#work').fadeIn(800);

    $('#project_page').css('display', 'none');
    $('#project_page').fadeIn(800);
});
