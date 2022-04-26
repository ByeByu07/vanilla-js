function data() {

    $.getJSON("http://localhost/rest-api/pizza-hut/data/pizza.json",
        function(data) {
            var result = data.menu;
            // console.log(result[0].nama)
            $.each(result, function(i, data) {
                $('.test').append('<div class="col-lg-4"><div class="card" style="width: 18rem;"><img src="./img/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>')
            });
        }
    );

}


data();

$('.nav-link').on('click', function() {

    //active class when click
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    //change h1 each click different nav-link
    const h1 = $(this).html();
    $('h1').html(h1);

    //change content by category

});