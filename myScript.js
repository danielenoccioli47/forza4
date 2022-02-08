var turno = 1;
var t_p;
var p = [];
var i;
for (i = 1; i <= 42; i++) {
  p[i] = 0
}
function giocata(t_p) {
if(turno != 3){


  if (turno == 1) {


    if (p[t_p + 7] == 0) {

      if (p[t_p + 14] == 0) {
        if (p[t_p + 21] == 0) {
          if (p[t_p + 28] == 0) {
            if (p[t_p + 35] == 0) {
              if (p[t_p + 42] == 0) {
                document.getElementById(t_p + 42).style.backgroundColor = "#ff0000"
                p[t_p + 42] = 1;
                turno = 2;
              }
              else {
                document.getElementById(t_p + 35).style.backgroundColor = "#ff0000"
                p[t_p + 35] = 1;
                turno = 2;
              }
            }
            else {
              document.getElementById(t_p + 28).style.backgroundColor = "#ff0000"
              p[t_p + 28] = 1;
              turno = 2;
            }
          }
          else {
            document.getElementById(t_p + 21).style.backgroundColor = "#ff0000"
            p[t_p + 21] = 1;
            turno = 2;
          }
        }
        else {
          document.getElementById(t_p + 14).style.backgroundColor = "#ff0000"
          p[t_p + 14] = 1;
          turno = 2;
        }
      }
      else {
        document.getElementById(t_p + 7).style.backgroundColor = "#ff0000"
        p[t_p + 7] = 1;
        turno = 2;
      }

    }
    else if(p[t_p]==0) {
      document.getElementById(t_p).style.backgroundColor = "#ff0000"
      p[t_p] = 1
      turno = 2;
    }
    turno == 2;
  }

  else if (turno == 2) {


    if (p[t_p + 7] == 0) {

      if (p[t_p + 14] == 0) {
        if (p[t_p + 21] == 0) {
          if (p[t_p + 28] == 0) {
            if (p[t_p + 35] == 0) {
              if (p[t_p + 42] == 0) {
                document.getElementById(t_p + 42).style.backgroundColor = "#FFFF00"
                p[t_p + 42] = 2;
                turno = 1;
              }
              else {
                document.getElementById(t_p + 35).style.backgroundColor = "#FFFF00"
                p[t_p + 35] = 2;
                turno = 1;
              }
            }
            else {
              document.getElementById(t_p + 28).style.backgroundColor = "#FFFF00"
              p[t_p + 28] = 2;
              turno = 1;
            }
          }
          else {
            document.getElementById(t_p + 21).style.backgroundColor = "#FFFF00"
            p[t_p + 21] = 2;
            turno = 1;
          }
        }
        else {
          document.getElementById(t_p + 14).style.backgroundColor = "#FFFF00"
          p[t_p + 14] = 2;
          turno = 1;
        }
      }
      else {
        document.getElementById(t_p + 7).style.backgroundColor = "#FFFF00"
        p[t_p + 7] = 2;
        turno = 1;
      }

    }
    else if(p[t_p] == 0){
      document.getElementById(t_p).style.backgroundColor = "#FFFF00"
      p[t_p] = 2;
      turno = 1;
    }
    turno = 1;
  }



  document.getElementById("titolo").innerHTML = "ora e' il turno del giocatore " + turno;
  //algoritmo di vincita

  //vincita orizzontale

  for (i = 1; i <= 42; i++) {
    if (p[i] != 0 && p[i + 1] != 0 && p[i + 2] != 0 && p[i + 3] != 0) {
      if (p[i] == p[i + 1] && p[i + 1] == p[i + 2] && p[i + 2] == p[i + 3]) {
        
        alert ("CONGRATULAZINI GIOCATORE "+ p[i]+ " HAI VINTO LA PARTITA");
        turno = 3;
      }
    }
  }
  //vincita per verticale
  for (i = 1; i <= 42; i++) {
    if (p[i] != 0 && p[i + 7] != 0 && p[i + 14] != 0 && p[i + 21] != 0) {
      if (p[i] == p[i + 7] && p[i + 7] == p[i + 14] && p[i + 14] == p[i + 21]) {
        
        alert ("CONGRATULAZINI GIOCATORE "+ p[i]+ " HAI VINTO LA PARTITA");
        turno = 3;
      }

    }
  }
  //vincita  per obliquo
  for (i = 1; i <= 42; i++) {
    if (p[i] != 0 && p[i + 8] != 0 && p[i + 16] != 0 && p[i + 24] != 0) {
      if (p[i] == p[i + 8] && p[i + 8] == p[i + 16] && p[i + 16] == p[i + 24]) {
        
        alert ("CONGRATULAZINI GIOCATORE "+ p[i]+ " HAI VINTO LA PARTITA");
        turno = 3;
      }
    }
  }
  for (i = 42; i <= 1; i--) {
    if (p[i] != 0 && p[i + 8] != 0 && p[i + 16] != 0 && p[i + 24] != 0) {
      if (p[i] == p[i - 8] && p[i - 8] == p[i - 16] && p[i - 16] == p[i - 24]) {
        
        alert ("CONGRATULAZINI GIOCATORE "+ p[i]+ " HAI VINTO LA PARTITA");
        turno = 3;
      }
    }
  }

  for (i = 1; i <= 42; i++) {
    if (p[i] != 0 && p[i + 6] != 0 && p[i + 12] != 0 && p[i + 18] != 0) {
      if (p[i] == p[i + 6] && p[i + 6] == p[i + 12] && p[i + 12] == p[i + 18]) {
        
        alert ("CONGRATULAZINI GIOCATORE "+ p[i]+ " HAI VINTO LA PARTITA");
        turno = 3;
      }
    }
  }
  for (i = 42; i <= 1; i--) {
    if (p[i] != 0 && p[i - 6] != 0 && p[i - 12] != 0 && p[i - 18] != 0) {
      if (p[i] == p[i - 6] && p[i - 6] == p[i - 12] && p[i - 12] == p[i - 18]) {
        
        alert ("CONGRATULAZINI GIOCATORE "+ p[i]+ " HAI VINTO LA PARTITA");
        turno = 3;
      }
    }
  }

}
else{
  document.getElementById("titolo").innerHTML = "la partita e' finita";
}
} 