$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1006692919',
        limit: 'none',
        resolution: 'standard_resolution',
        accessToken: '1006692919.1677ed0.94e746ff120b4f7998359f15e843e157',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.album').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});
