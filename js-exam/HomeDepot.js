const https = require('https');


function getMovieTitles(substr) {
    let titles = [];
    let reUnionMovies = [];
    let pageNum = 1;
    let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + '&page=' + pageNum;

    // Disadvantage of using https: No support for promises
    https.get(url, function(res) {
        let body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        
        res.on('end', function() {
            let json = JSON.parse(body);
            let movies = json.data;
            movies = movies.filter(function(obj){
                return obj.Poster !== 'N/A';
            });

            for (let i = 0; i < movies.length; i++) {
                reUnionMovies.push( {Title: movies[i].Title, Year: movies[i].Year } );
                //titles.push(json.data[i].Title); // DEBUG
            }
            // console.log(titles); // DEBUG
            
            // Handle following pages
            console.log(json.total_pages); // DEBUG
            for (let i = 2; i <= json.total_pages; i++) {
                console.log("index" + i); // DEBUG
                url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + '&page=' + i;
                https.get(url, function(res) {
                    let body = '';
                    res.on('data', function(chunk) {
                        body += chunk;
                    });
                    res.on('end', function() {
                        let json = JSON.parse(body);
                        let movies = json.data;
                        movies = movies.filter(function(obj){
                            return obj.Poster !== 'N/A';
                        });
                        for (let i = 0; i < movies.length; i++) {
                            reUnionMovies.push( {Title: movies[i].Title, Year: movies[i].Year } );
                            //titles.push(json.data[i].Title); // DEBUG
                        }
                        if (i === json.total_pages) {
                            
                            reUnionMovies = reUnionMovies.sort(function(a,b){
                                return a.Year - b.Year;
                            });
                            reUnionMovies.map((item) => {
                                titles.push(item.Title);
                            })
                            console.dir(titles);
                            // console.log(reUnionMovies); // DEBUG
                        }
                    });
                }).on('err', function(e) {
                    console.log('Error on page: ' + i + ', with error messsage: ' + e);
                });
            }
        });
    }).on('error', function(e) {
        console.log("Got an error: ", e);
    });
}

getMovieTitles('we');

true;