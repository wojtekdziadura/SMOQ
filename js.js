

$(()=>{
    

    $.ajax({
      url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll"
    }).done(function(data){
        console.log(data);
        let cityP = $(".cityPick")
        console.log(cityP);
        data.forEach((e,i) => {
          let opt = $('<option></option>');
          opt.attr('data-id', e.id);
          opt.val(e.id);
          opt.text(e.stationName);
          cityP.append(opt);

          
          
          
          
        })
        $(".gooo").click(function(){
          console.log($(".cityPick").val());
          $.ajax({
            url: "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+ $(".cityPick").val()
          }).done(function(res){
            console.log(res)
          
          let result = $(".smogResult");
          console.log(result);

          if(res.stIndexLevel) {

            result.text(res.stIndexLevel.indexLevelName)
            console.log(result)
          
  
            switch (result.text()) {
              case "Bardzo dobry":
              $('.picture').css("background-image", "url(./img/sun.gif)");
                break;
              case "Dobry":
              $('.picture').css("background-image", "url(./img/sun2.gif)");
                  break;
              case "Umiarkowany":
              $('.picture').css("background-image", "url(./img/aver.gif)");
                  break;
              case "Dostateczny":
              $('.picture').css("background-image", "url(./img/star.gif)");
                  break;
              case "Zły":
              $('.picture').css("background-image", "url(./img/friends.gif)");
                  break;
              case "Bardzo zły":
              $('.unicorn').css("background-image", "url(./img/unicorn1.gif)");
                  break;
              case "Brak indeksu":
              $('.picture').css("background-image", "url(./img/pulp.gif)");
                    break;
              
          }

          }
          else {
            $('.picture').css("background-image", "url(./img/bad-data.gif)");
            result.text("Brak Danych")
          }

          
          
          
          })
          
        .fail(function(){
            alert("błąd")
        })

  
  });
});
});
