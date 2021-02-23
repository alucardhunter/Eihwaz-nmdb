import { Movies, MoviesDetailResponse } from '../../Typings/Models/movies'

interface CollectionInterface {
  Movie: Movies,
  MovieArray: Movies[],
  MovieDetail: MoviesDetailResponse
}

const Collection: CollectionInterface = {
  Movie: {
    adult: false,
    backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    genre_ids: [
      14,
      28,
      12
    ],
    id: 464052,
    original_language: 'en',
    original_title: 'Wonder Woman 1984',
    overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
    popularity: 2614.604,
    poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    release_date: '2020-12-16',
    title: 'Wonder Woman 1984',
    video: false,
    vote_average: 7,
    vote_count: 3596
  },

  MovieArray: [
    {
      adult: false,
      backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
      genre_ids: [
        14,
        28,
        12
      ],
      id: 464052,
      original_language: 'en',
      original_title: 'Wonder Woman 1984',
      overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
      popularity: 2614.604,
      poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
      release_date: '2020-12-16',
      title: 'Wonder Woman 1984',
      video: false,
      vote_average: 7,
      vote_count: 3596
    },
    {
      adult: false,
      backdrop_path: '/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg',
      genre_ids: [
        53,
        80
      ],
      id: 602269,
      original_language: 'en',
      original_title: 'The Little Things',
      overview: 'Um policial começa a ter problemas em sua investigação devido a seu passado obscuro e sua tendência por quebrar as regras.',
      popularity: 1669.19,
      poster_path: '/98UFAKFPUOIzF91Q0j0W7vR4ikV.jpg',
      release_date: '2021-01-27',
      title: 'Os Pequenos Vestígios',
      video: false,
      vote_average: 6.3,
      vote_count: 304
    },
    {
      adult: false,
      backdrop_path: '/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg',
      genre_ids: [
        878,
        28
      ],
      id: 651571,
      original_language: 'en',
      original_title: 'Breach',
      overview: 'À beira da paternidade, um mecânico júnior a bordo de uma arca interestelar para a Nova Terra deve superar um terror cósmico malévolo com a intenção de usar a nave espacial como uma arma.',
      popularity: 1215.687,
      poster_path: '/JmtaGCYsTv484MByG2AqmVqNcf.jpg',
      release_date: '2020-12-17',
      title: 'Violação',
      video: false,
      vote_average: 4.6,
      vote_count: 248
    },
    {
      adult: false,
      backdrop_path: '/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg',
      genre_ids: [
        28,
        12,
        80
      ],
      id: 604822,
      original_language: 'zh',
      original_title: '急先锋',
      overview: 'A empresa de segurança secreta Vanguard é a última esperança de sobrevivência para um contador, depois que ele é alvo da organização mercenária mais mortal do mundo.',
      popularity: 1135.61,
      poster_path: '/fMXRTTMiEsvSFqhRuoeZXKcl3QP.jpg',
      release_date: '2020-09-30',
      title: 'Agentes Vanguard',
      video: false,
      vote_average: 6.5,
      vote_count: 191
    },
    {
      adult: false,
      backdrop_path: '/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg',
      genre_ids: [
        10751,
        16,
        35,
        18,
        10402,
        14
      ],
      id: 508442,
      original_language: 'en',
      original_title: 'Soul',
      overview: 'Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.',
      popularity: 1106.235,
      poster_path: '/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      release_date: '2020-12-25',
      title: 'Soul',
      video: false,
      vote_average: 8.3,
      vote_count: 4772
    },
    {
      adult: false,
      backdrop_path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
      genre_ids: [
        28,
        53,
        878
      ],
      id: 577922,
      original_language: 'en',
      original_title: 'Tenet',
      overview: 'Armado com apenas uma palavra – Tenet – e lutando pela sobrevivência do mundo inteiro, o Protagonista viaja através de um mundo crepuscular de espionagem internacional em uma missão que irá desenrolar em algo para além do tempo real.',
      popularity: 953.705,
      poster_path: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
      release_date: '2020-08-22',
      title: 'Tenet',
      video: false,
      vote_average: 7.3,
      vote_count: 4377
    }
  ],
  MovieDetail: {
    adult: false,
    backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    belongs_to_collection: {
      id: 468552,
      name: 'Wonder Woman Collection',
      poster_path: '/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg',
      backdrop_path: '/n9KlvCOBFDmSyw3BgNrkUkxMFva.jpg'
    },
    budget: 200000000,
    genres: [
      {
        id: 14,
        name: 'Fantasy'
      },
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 12,
        name: 'Adventure'
      }
    ],
    homepage: 'https://www.warnerbros.com/movies/wonder-woman-1984',
    id: 464052,
    imdb_id: 'tt7126948',
    original_language: 'en',
    original_title: 'Wonder Woman 1984',
    overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
    popularity: 2089.125,
    poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    production_companies: [
      {
        id: 9993,
        logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
        name: 'DC Entertainment',
        origin_country: 'US'
      },
      {
        id: 174,
        logo_path: '/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
        name: 'Warner Bros. Pictures',
        origin_country: 'US'
      },
      {
        id: 114152,
        logo_path: null,
        name: 'The Stone Quarry',
        origin_country: 'US'
      },
      {
        id: 128064,
        logo_path: '/13F3Jf7EFAcREU0xzZqJnVnyGXu.png',
        name: 'DC Films',
        origin_country: 'US'
      },
      {
        id: 507,
        logo_path: '/z7H707qUWigbjHnJDMfj6QITEpb.png',
        name: 'Atlas Entertainment',
        origin_country: 'US'
      },
      {
        id: 429,
        logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
        name: 'DC Comics',
        origin_country: 'US'
      }
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America'
      }
    ],
    release_date: '2020-12-16',
    revenue: 159533000,
    runtime: 152,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English'
      }
    ],
    status: 'Released',
    tagline: 'A new era of wonder begins.',
    title: 'Wonder Woman 1984',
    video: false,
    vote_average: 6.9,
    vote_count: 3823,
    videos: {
      results: [
        {
          id: '5ded686932489b0016c2760a',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'sfM7_JLk-84',
          name: 'Official Trailer',
          site: 'YouTube',
          size: 1080,
          type: 'Trailer'
        },
        {
          id: '5f41589c028f1400315a70b8',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'XW2E2Fnh52w',
          name: 'Wonder Woman 1984 - Official Main Trailer',
          site: 'YouTube',
          size: 1080,
          type: 'Trailer'
        },
        {
          id: '5f45fe1dcee4810036a9893d',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'E5Pj21yLknQ',
          name: 'Wonder Woman 1984 - Official Main Trailer (Subtitled)',
          site: 'YouTube',
          size: 1080,
          type: 'Trailer'
        },
        {
          id: '5fd92a74226c56003e3dd6eb',
          iso_639_1: 'en',
          iso_3166_1: 'US',
          key: 'I_MG6fklovc',
          name: 'WW84 | Opening Scene',
          site: 'YouTube',
          size: 1080,
          type: 'Clip'
        }
      ]
    }
  }

}

export default Collection
