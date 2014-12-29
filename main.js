function showTooltip(e, tooltip) {
    
    e = window.event ? window.event : e;
    tooltip = document.getElementById(tooltip);
    if(tooltip.style.display != "block")
        tooltip.style.display = "block";
    tooltip.style.left = event.clientX + "px";
    tooltip.style.top = event.clientY + "px";

}

function hideTooltip(e, tooltip) {

    e = window.event ? window.event : e;
    tooltip = document.getElementById(tooltip);
    if(e.toElement == tooltip)
    {
        showTooltip(e, tooltip);
        return;
    }
    tooltip.style.display = "none";

}

function toggleVisibility(id) {
   var el = document.getElementById(id);

   if (el.style.visibility=="visible") {
          el.style.visibility="hidden";
     }
     else {
          el.style.visibility="visible";
     }
 }