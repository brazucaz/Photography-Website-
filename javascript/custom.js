$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '871253650',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '871253650.1677ed0.0616ae334d3a462d89e2d2e81e93eaf8',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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
