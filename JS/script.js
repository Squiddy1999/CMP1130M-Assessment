$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });

    var spotifyJSON = `{"href":"https://api.spotify.com/v1/albums/7yibJPbNPXTh5HO9n7Tjr5/tracks?offset=0&limit=10&market=US","items":[{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":297398,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/22qq6z2woVbKj4MbtzGFgX"},"href":"https://api.spotify.com/v1/tracks/22qq6z2woVbKj4MbtzGFgX","id":"22qq6z2woVbKj4MbtzGFgX","is_local":false,"is_playable":true,"name":"Coming To The Gambia","preview_url":"https://p.scdn.co/mp3-preview/fa8bcc44b75078b9378ab82d7922dc7b1403ee77?cid=774b29d4f13844c495f206cafdad9c86","track_number":1,"type":"track","uri":"spotify:track:22qq6z2woVbKj4MbtzGFgX"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":279581,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1iFgmIVyTfhD1uAo9xDnpN"},"href":"https://api.spotify.com/v1/tracks/1iFgmIVyTfhD1uAo9xDnpN","id":"1iFgmIVyTfhD1uAo9xDnpN","is_local":false,"is_playable":true,"name":"Boyfriend","preview_url":"https://p.scdn.co/mp3-preview/b392ad9387f11008e8e6e4e5c4a2ac1ca1888d4d?cid=774b29d4f13844c495f206cafdad9c86","track_number":2,"type":"track","uri":"spotify:track:1iFgmIVyTfhD1uAo9xDnpN"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":363815,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/409nYLHkU3mh2cEekjWPRO"},"href":"https://api.spotify.com/v1/tracks/409nYLHkU3mh2cEekjWPRO","id":"409nYLHkU3mh2cEekjWPRO","is_local":false,"is_playable":true,"name":"Borders","preview_url":"https://p.scdn.co/mp3-preview/949a26a2946b662be50d42f5d045d44b262951d9?cid=774b29d4f13844c495f206cafdad9c86","track_number":3,"type":"track","uri":"spotify:track:409nYLHkU3mh2cEekjWPRO"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":276752,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/2iYvok4vkjvolr7oi9IoEf"},"href":"https://api.spotify.com/v1/tracks/2iYvok4vkjvolr7oi9IoEf","id":"2iYvok4vkjvolr7oi9IoEf","is_local":false,"is_playable":true,"name":"Human Race","preview_url":"https://p.scdn.co/mp3-preview/4f8fee601fb882cd861b1889ff2bdf7541681067?cid=774b29d4f13844c495f206cafdad9c86","track_number":4,"type":"track","uri":"spotify:track:2iYvok4vkjvolr7oi9IoEf"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":239751,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/3yMs69yDRRc1r3X9c57NcS"},"href":"https://api.spotify.com/v1/tracks/3yMs69yDRRc1r3X9c57NcS","id":"3yMs69yDRRc1r3X9c57NcS","is_local":false,"is_playable":true,"name":"Can't Stop The Tide","preview_url":"https://p.scdn.co/mp3-preview/805dac819c8aa5298c4a94e5408c913155b4e5e7?cid=774b29d4f13844c495f206cafdad9c86","track_number":5,"type":"track","uri":"spotify:track:3yMs69yDRRc1r3X9c57NcS"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":263803,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/02NThWcyJMAUUoOYsKwvMV"},"href":"https://api.spotify.com/v1/tracks/02NThWcyJMAUUoOYsKwvMV","id":"02NThWcyJMAUUoOYsKwvMV","is_local":false,"is_playable":true,"name":"Our Streets","preview_url":"https://p.scdn.co/mp3-preview/574d4ab3ea13c78ae430b140f028f56df0a91dd7?cid=774b29d4f13844c495f206cafdad9c86","track_number":6,"type":"track","uri":"spotify:track:02NThWcyJMAUUoOYsKwvMV"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"},{"external_urls":{"spotify":"https://open.spotify.com/artist/4Q1XooCI19XuvDkfm3Ym54"},"href":"https://api.spotify.com/v1/artists/4Q1XooCI19XuvDkfm3Ym54","id":"4Q1XooCI19XuvDkfm3Ym54","name":"Batch Guyeye","type":"artist","uri":"spotify:artist:4Q1XooCI19XuvDkfm3Ym54"}],"disc_number":1,"duration_ms":341005,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/1a2KsQ6IELOufdwPr2zk1d"},"href":"https://api.spotify.com/v1/tracks/1a2KsQ6IELOufdwPr2zk1d","id":"1a2KsQ6IELOufdwPr2zk1d","is_local":false,"is_playable":true,"name":"Long Way Down","preview_url":"https://p.scdn.co/mp3-preview/df9966a398449f455bc438a196eb66956ad18526?cid=774b29d4f13844c495f206cafdad9c86","track_number":7,"type":"track","uri":"spotify:track:1a2KsQ6IELOufdwPr2zk1d"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":220175,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/0uEyjwI4BG9GtxjLVb94VT"},"href":"https://api.spotify.com/v1/tracks/0uEyjwI4BG9GtxjLVb94VT","id":"0uEyjwI4BG9GtxjLVb94VT","is_local":false,"is_playable":true,"name":"Monkey Suit","preview_url":"https://p.scdn.co/mp3-preview/1e95c861e3bec3847fc452d8b4edfc8a8337f823?cid=774b29d4f13844c495f206cafdad9c86","track_number":8,"type":"track","uri":"spotify:track:0uEyjwI4BG9GtxjLVb94VT"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":239716,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/11dlfRO2hg7P63OFUeftkt"},"href":"https://api.spotify.com/v1/tracks/11dlfRO2hg7P63OFUeftkt","id":"11dlfRO2hg7P63OFUeftkt","is_local":false,"is_playable":true,"name":"Last Chance To Dance","preview_url":"https://p.scdn.co/mp3-preview/1e6670f7a883bac6d367d62a066cefc012e00f1a?cid=774b29d4f13844c495f206cafdad9c86","track_number":9,"type":"track","uri":"spotify:track:11dlfRO2hg7P63OFUeftkt"},{"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3vORxb0KQ7Sc6pOBf5R014"},"href":"https://api.spotify.com/v1/artists/3vORxb0KQ7Sc6pOBf5R014","id":"3vORxb0KQ7Sc6pOBf5R014","name":"The Undercover Hippy","type":"artist","uri":"spotify:artist:3vORxb0KQ7Sc6pOBf5R014"}],"disc_number":1,"duration_ms":213734,"explicit":false,"external_urls":{"spotify":"https://open.spotify.com/track/7oAVI7txqpHg6s1ubgtlGh"},"href":"https://api.spotify.com/v1/tracks/7oAVI7txqpHg6s1ubgtlGh","id":"7oAVI7txqpHg6s1ubgtlGh","is_local":false,"is_playable":true,"name":"Life's Good","preview_url":"https://p.scdn.co/mp3-preview/92d885b93dd00b2ece46e30e56e8d8b486699778?cid=774b29d4f13844c495f206cafdad9c86","track_number":10,"type":"track","uri":"spotify:track:7oAVI7txqpHg6s1ubgtlGh"}],"limit":10,"next":null,"offset":0,"previous":null,"total":10}`;

    //console.log(spotifyJSON);
    var data = JSON.parse(spotifyJSON);
    //console.log(data);
    items = data.items;
    var audioObject;

    $.each(items, function (index) {
        var id = items[index].id;
        var name = items[index].name;
        var track = items[index].preview_url;        
    })

    //audioObject = new Audio("https://p.scdn.co/mp3-preview/fa8bcc44b75078b9378ab82d7922dc7b1403ee77?cid=774b29d4f13844c495f206cafdad9c86");
    


    nowPlaying = "null";
    customiserBtn();
    musicPreview();
    console.log("Window Ready");
})

function customiserBtn() {
    $("#create_album_button_section ").mouseover(function () {
        $(this).css("background-color", "#875b36")
    });
    $("#create_album_button_section ").mouseleave(function () {
        $(this).css("background-color", "#DC965A")
    });
}

function musicPreview() {
    $(".song").click(function () {
        if (nowPlaying == "null") {
            songItem = $(this);
            nowPlaying = ($(this).attr('id'));
            nowPlaying = nowPlaying.substring(4);
            console.log("Now playing track "+nowPlaying);
            $(this).css({ "font-weight": "bold", "list-style-image": "url('Assets/triangle.jpg')" });
            audioObject = new Audio(items[parseInt(nowPlaying, 10) - 1].preview_url);
            audioObject.play();
        }
        else {
            audioObject.pause();
            $(songItem).css({ "font-weight": "normal","list-style":"none"});
            songItem = $(this);
            nowPlaying = ($(this).attr('id'));
            nowPlaying = nowPlaying.substring(4);
            console.log("Now playing track "+nowPlaying);
            $(this).css({"font-weight": "bold","list-style-image": "url('Assets/triangle.jpg')"});
            audioObject = new Audio(items[parseInt(nowPlaying,10)-1].preview_url);
            audioObject.play();
        }

    });
}