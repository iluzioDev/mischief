function truncateText(){parseInt($(".text-container").css("line-height")),$(".truncated").each(function(){var t=$(this),i="";t.find("p, h").each(function(){i+=$(this).text().trim()+" "});var n=i.split(" ").slice(0,30).join(" ");t.text(n+"...")})}
