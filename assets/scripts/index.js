$(document).ready(function () {
    $('.modal').modal();

    $('.button-collapse').sideNav({
        menuWidth: 500,
        closeOnClick: true
    }
    );


        $.getJSON('items.json', function (data) {
            console.log(data.items);
            
            var items = data.items.map(function (item) {
                 return item.name;
              });


              //
              console.log(items);
             
        });








});



