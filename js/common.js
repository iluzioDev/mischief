function changeLanguage(){for(var e in translations)if(translations.hasOwnProperty(e)){var t=translations[e];$("#"+e).html(t)}}function loadTranslations(e){$.getJSON("translations.json",function(t){translations=t[e],changeLanguage(),$("#languageDropdown").html("<img src='images/icons/flags/"+e+'.svg\' width="24" height="18" alt=\''+e+" flag' /> "+e.toUpperCase()),$(".dropdown-item").show(),$(".dropdown-item:contains('"+e.toUpperCase()+"')").hide(),"function"==typeof truncateText&&truncateText(),localStorage.setItem("selectedLanguage",e)})}$.get("header.html",function(e){$("header").html(e),localStorage.getItem("selectedLanguage")?loadTranslations(localStorage.getItem("selectedLanguage")):loadTranslations("en")}),$.get("footer.html",function(e){$("footer").html(e)}),$.get("sidebar.html",function(e){$("#sidebar").html(e)});
