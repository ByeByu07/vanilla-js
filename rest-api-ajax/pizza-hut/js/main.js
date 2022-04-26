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


$('.nav-link').on('click', function() {

    //change h1 each click different nav-link
    const kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        data();
        return;
    }

    //active class when click
    $('.nav-link').removeClass('active');
    $(this).addClass('active');


    //change content by category
    $.getJSON("http://localhost/rest-api/pizza-hut/data/pizza.json",
        function(data) {
            var result = data.menu;
            let content = ' ';
            $.each(result, function(i, data) {
                if (data.kategori == kategori.toLowerCase()) {
                    content += '<div class="col-lg-4"><div class="card" style="width: 18rem;"><img src="./img/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>';
                }
            });
            $('.test').empty();
            $('.test').html(content);
        }
    );
});