//Fonction pour les onglets//
function openLink(evt, ongletNom) {
     
    var i, contenuOnglet, ongletLiens;

    contenuOnglet = document.getElementsByClassName("contenuOnglet");
    for (i = 0; i < contenuOnglet.length; i++) {
      contenuOnglet[i].style.display = "none";
    }

    ongletLiens = document.getElementsByClassName("ongletLiens");
    for (i = 0; i < ongletLiens.length; i++) {
        ongletLiens[i].className = ongletLiens[i].className.replace(" active", "");
    }
  
    document.getElementById(ongletNom).style.display = "block";
    evt.currentTarget.className += " active";
  }