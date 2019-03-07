import { ACTIONS } from '../actions/Tweets';

const initialState = {
  tweets: [
    {
      url: 'https://twitter.com/ReinaldoProfeta/status/1041902752107044864',
      text:
        'Es un genocida, un tirano que esta matando a la pobre gente de Venezuela, eso es @NicolasMaduro',
      type: 'verdadero',
      twitter: '@ReinaldoProfeta',
      image:
        'https://pbs.twimg.com/profile_images/883693164242096130/k1wa8Kir_400x400.jpg',
      name: 'Reinaldo Profeta',
      time: 'hace 2 minutos'
    },
    {
      url: 'https://twitter.com/ReinaldoProfeta/status/1042760780251316224',
      text:
        'Ridículos, dicen que los leones son peligrosos. Yo me paseo entre ellos y ni me miran. Peligrosas las gallinas. Decía el gusano.',
      type: 'verdadero',
      twitter: '@ReinaldoProfeta',
      image:
        'https://pbs.twimg.com/profile_images/883693164242096130/k1wa8Kir_400x400.jpg',
      name: 'Reinaldo Profeta',
      time: 'hace 3 minutos'
    },
    {
      url: 'https://twitter.com/ReinaldoProfeta/status/1042760297851830273',
      text:
        '"Lo malo de hacer sugerencias inteligentes es que uno corre el riesgo de que se le asigne para llevarlas a cabo". De René Descartes',
      type: 'verdadero',
      twitter: '@ReinaldoProfeta',
      image:
        'https://pbs.twimg.com/profile_images/883693164242096130/k1wa8Kir_400x400.jpg',
      name: 'Reinaldo Profeta',
      time: 'hace 6 minutos'
    },
    {
      url: 'https://twitter.com/ReinaldoProfeta/status/1042760231078514688',
      text:
        '“Nunca discutas con un Bruto ignorante, él te hará bajar a su nivel y te ganará por experiencia”',
      type: '',
      twitter: '@ReinaldoProfeta',
      image:
        'https://pbs.twimg.com/profile_images/883693164242096130/k1wa8Kir_400x400.jpg',
      name: 'Reinaldo Profeta',
      time: 'hace 7 minutos'
    },
    {
      url: 'https://twitter.com/rociosanmiguel/status/1043528773780561921',
      text:
        'Llega Buque Militar Sanitario Chino. Lamentable que la atención sanitaria que darán a los venezolanos, solo puedan realizarla por conducto de los consejos comunales, quienes “escogerán” los pacientes puntuales ... Segregación en la ayuda humanitaria ...',
      type: 'impreciso',
      twitter: '@rociosanmiguel',
      image:
        'https://pbs.twimg.com/profile_images/574939195749224449/hKeGX9Bf_400x400.jpeg',
      name: 'Rocío San Miguel',
      time: 'hace 7 minutos'
    },
    {
      url: 'https://twitter.com/cmrondon/status/1043541754962747392',
      text:
        '#PulsoPaís En esta entrevista conversamos con Saúl Cabrera, presidente de la encuestadora Consultores 21 y Jesús Seguias, presidente de la encuestadora DatinCorp',
      type: '',
      twitter: '@cmrondon',
      image:
        'https://pbs.twimg.com/profile_images/953922543831977984/As5nuJmm_400x400.jpg',
      name: 'César Miguel Rondon',
      time: 'hace 10 minutos'
    },
    {
      url: 'https://twitter.com/cmrondon/status/1043534207031619584',
      text:
        'Alzheimer: conciencia social; conoce todo sobre esta enfermedad en #SaludYBienestar',
      type: 'falso',
      twitter: '@cmrondon',
      image:
        'https://pbs.twimg.com/profile_images/953922543831977984/As5nuJmm_400x400.jpg',
      name: 'César Miguel Rondon',
      time: 'hace 20 minutos'
    },
    {
      url: 'https://twitter.com/cmrondon/status/1043526647012573185',
      text: 'Necesaria discusión política, por Ismael Pérez Vigil',
      type: '',
      twitter: '@cmrondon',
      image:
        'https://pbs.twimg.com/profile_images/953922543831977984/As5nuJmm_400x400.jpg',
      name: 'César Miguel Rondon',
      time: 'hace 22 minutos'
    },
    {
      url: 'https://twitter.com/ibepacheco/status/1043583370696056832',
      text:
        'No me sorprendería que intenten detener al mototaxista y al bombero. Aún así, no lograrán ocultar el desastre',
      type: 'falso',
      twitter: '@ibepacheco',
      image:
        'https://pbs.twimg.com/profile_images/902216623955824640/FewFvFyN_400x400.jpg',
      name: 'Ibéyise Pacheco',
      time: 'hace 28 minutos'
    },
    {
      url: 'https://twitter.com/hcapriles/status/1042559069024710656',
      text:
        'Ahora estamos en asamblea con vecinos de Tazajal en Naguanagua Edo. Carabobo #19Sep',
      type: '',
      twitter: '@hcapriles',
      image:
        'https://pbs.twimg.com/profile_images/378800000850251826/092eed2ea2248426cc5ea8defd758dd9_400x400.jpeg',
      name: 'Henrique Capriles R.',
      time: 'hace 30 minutos'
    },
    {
      url: 'https://twitter.com/hcapriles/status/1042404319742648320',
      text:
        'Libertad para los Presos Políticos en nuestra Venezuela - ¡Firma la petición! https://chn.ge/2PNM3na  #LiberenARequesens',
      type: 'falso',
      twitter: '@hcapriles',
      image:
        'https://pbs.twimg.com/profile_images/378800000850251826/092eed2ea2248426cc5ea8defd758dd9_400x400.jpeg',
      name: 'Henrique Capriles R.',
      time: 'hace 33 minutos'
    },
    {
      url: 'https://twitter.com/hcapriles/status/1041073938581938176',
      text:
        'Mi muy sentido pésame @oscarabp Que Dios la tenga en su gloria eterna, un fuerte abrazo a la familia',
      type: 'falso',
      twitter: '@hcapriles',
      image:
        'https://pbs.twimg.com/profile_images/378800000850251826/092eed2ea2248426cc5ea8defd758dd9_400x400.jpeg',
      name: 'Henrique Capriles R.',
      time: 'hace 34 minutos'
    },
    {
      url: 'https://twitter.com/alcaldeledezma/status/1039088810322276352',
      text:
        'Saliendo de la dictadura-Maduro, superaremos hiperinflacion y escasez y Venezuela saldrá adelante. Dictaduras no se caen solas, hay q tirarlas abajo, bien lo dijo @Almagro_OEA2015. Empujar firme, luchando adentro y afuera, con determinación para rescatar nuestra República.',
      type: 'falso',
      twitter: '@alcaldeledezma',
      image:
        'https://pbs.twimg.com/profile_images/943727533773803525/XNHKRJ1Z_400x400.jpg',
      name: 'Antonio Ledezma',
      time: 'hace 35 minutos'
    },
    {
      url: 'https://twitter.com/alcaldeledezma/status/1037723717139345408',
      text:
        'Merecido reconocimiento a un medio de comunicación y a sus equipos de editores, periodistas, camarógrafos, técnicos, investigadores y productores, que se han consagrado a servirle a la causa por la libertad de Venezuela. ¡Felicitaciones! @NTN24ve',
      type: '',
      twitter: '@alcaldeledezma',
      image:
        'https://pbs.twimg.com/profile_images/943727533773803525/XNHKRJ1Z_400x400.jpg',
      name: 'Antonio Ledezma',
      time: 'hace 39 minutos'
    },
    {
      url: 'https://twitter.com/alcaldeledezma/status/1037284646629900289',
      text:
        'Los venezolanos que no tienen ni pasaporte ni cédula de identidad vigentes, no es por negligencia, es porque la dictadura no tramita solicitudes, ni en Venezuela ni en consulados en el exterior.',
      type: 'falso',
      twitter: '@alcaldeledezma',
      image:
        'https://pbs.twimg.com/profile_images/943727533773803525/XNHKRJ1Z_400x400.jpg',
      name: 'Antonio Ledezma',
      time: 'hace 40 minutos'
    },
    {
      url: 'https://twitter.com/elcitizen/status/1043329793192873985',
      text:
        'Si yo fuera gobierno seguiría con mucho detenimiento las reuniones y declaraciones q vienen desde el Imperio mismo.',
      type: '',
      twitter: '@elcitizen',
      image:
        'https://pbs.twimg.com/profile_images/740998472514473984/p86TsZk3_400x400.jpg',
      name: 'Leopoldo Castillo',
      time: 'hace 41 minutos'
    },
    {
      url: 'https://twitter.com/elcitizen/status/1042360413768351744',
      text:
        'El nuevo satélite chino tiene un objetivo muy claro seguir aislando a Venezuela y va contra las redes sociales.',
      type: 'falso',
      twitter: '@elcitizen',
      image:
        'https://pbs.twimg.com/profile_images/740998472514473984/p86TsZk3_400x400.jpg',
      name: 'Leopoldo Castillo',
      time: 'hace 42 minutos'
    },
    {
      url: 'https://twitter.com/elcitizen/status/1042355880325537792',
      text:
        'Mauricio Claver Carone pasa a ser el hombre clave de la Casa Blanca en el tema Venezuela. En su mesa están todas las opciones!',
      type: 'falso',
      twitter: '@elcitizen',
      image:
        'https://pbs.twimg.com/profile_images/740998472514473984/p86TsZk3_400x400.jpg',
      name: 'Leopoldo Castillo',
      time: 'hace 1 hora'
    }
  ]
};

const Tweets = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FILTER_TWEET:
      return {
        ...state,
        tweets: initialState.tweets.filter((v) => {
          return v.type == action.payload;
        })
      };
    default:
      return state;
  }
};

export default Tweets;
