
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    { 
      id: 1,
      title: 'The Batman',
      img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg',
      imdb_id: 'tt1877830',
      watched: false,
    },
    { 
      id: 2,
      title: 'Arrival',
      img: 'https://imdb-api.com/images/original/MV5BNGU0NTA2YjctYWNlYy00ZDg1LTg5ZTItZWM3MWZiMDI5OGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDM3ODU2NDM@._V1_Ratio0.7273_AL_.jpg',
      imdb_id: 'tt2543164',
      watched: false,
    },
    { 
      id: 3,
      title: 'Weekend At Bernies',
      img: 'https://imdb-api.com/images/original/MV5BNTQyMTYyYTAtYzU4MS00ODZhLTk1ODEtNjAwNzkxZWUyNzJjXkEyXkFqcGdeQXVyMTg2OTA4OQ@@._V1_Ratio0.7273_AL_.jpg',
      imdb_id: 'tt0098627',
      watched: false,
    },
  ]);
};
