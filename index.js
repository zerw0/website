console.log("got here")
let user = 'zerwxd';
let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
let song = document.querySelector('#song');
fetch(url)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        song.innerHTML = '<img src="' + json['track']['image']['1']['#text'] + '" alt="LastFM last played"><span class="songtext"><span class="trackname">' + json['track']['name'] + '</span><span class="artist">' + json['track']['artist']['#text'] + '</span></span>';
    });