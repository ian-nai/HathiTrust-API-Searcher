function oclc() {
           var y = document.getElementById("oclc_search").value;
           var url = "http://catalog.hathitrust.org/api/volumes/full/oclc/" + y + ".json";
           window.open(url);
        }
        
function isbn() {
           var x = document.getElementById("isbn_search").value;
           var url2 = "http://catalog.hathitrust.org/api/volumes/full/isbn/" + x + ".json";
           window.open(url2);
        }
        
function hathi_vol() {
           var z = document.getElementById("hathi_vol_search").value;
           var url3 = "http://catalog.hathitrust.org/api/volumes/full/htid/" + z + ".json";
           window.open(url3);
        }
      
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 
