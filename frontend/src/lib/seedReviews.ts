// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña hace referencia solo a amenidades reales de esa propiedad.
// Sin duplicados dentro de una misma propiedad. Nombres: nombre + inicial de apellido.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 2, name: 'Katie T.', rating: 5, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, so much natural light in the apartment, made it feel really spacious', createdAt: '2026-05-20T00:00:00.000Z' },
    { id: 1, name: 'Matthew B.', rating: 5, comment: 'the rooftop terrace has an incredible view we spent several evenings up there wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-11-18T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-2': [
    { id: 3, name: 'Ashley B.', rating: 4, comment: 'we spent several afternoons at the pool, always clean and quiet, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-12-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 6, name: 'Amanda S.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Our agent replied to every message quickly over WhatsApp.', createdAt: '2026-02-21T00:00:00.000Z' },
    { id: 7, name: 'Lauren S.', rating: 5, comment: 'traveled with our pet and had zero issues, really appreciated that, slept really well the whole trip, good quality bed', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 5, name: 'Ricardo B.', rating: 3, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 4, name: 'Samantha M.', rating: 4, comment: 'we used the jacuzzi most nights, such a relaxing extra to have, the bed was super comfortable, slept great every night', createdAt: '2025-06-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-4': [
    { id: 9, name: 'Rodrigo A.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2026-06-20T00:00:00.000Z' },
    { id: 8, name: 'Katie T.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 11, name: 'Sarah A.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-01-29T00:00:00.000Z' },
    { id: 10, name: 'Katie B.', rating: 4, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, internet connection was excellent throughout our stay', createdAt: '2024-10-19T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 12, name: 'Sebastian V.', rating: 4, comment: 'El spa fue un plus que no esperabamos, muy relajante. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-11-03T00:00:00.000Z' },
    { id: 13, name: 'Ricardo D.', rating: 4, comment: 'pasamos varias tardes en la alberca, siempre estaba limpia, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-05-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 14, name: 'Luis Fernando S.', rating: 3, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2026-05-24T00:00:00.000Z' },
    { id: 15, name: 'Maria Jose R.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2026-01-30T00:00:00.000Z' },
    { id: 16, name: 'Jessica S.', rating: 5, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, any question we had was answered right away, really great service', createdAt: '2025-09-21T00:00:00.000Z' },
    { id: 17, name: 'Jessica L.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-01-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 19, name: 'Fernanda T.', rating: 3, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2024-11-21T00:00:00.000Z' },
    { id: 18, name: 'Andres R.', rating: 3, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2024-08-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 20, name: 'Rodrigo S.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2026-02-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 21, name: 'Jessica T.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2024-10-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 22, name: 'Jennifer C.', rating: 3, comment: 'Traveled with our pet and had zero issues, really appreciated that. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-04-11T00:00:00.000Z' },
    { id: 24, name: 'Katie L.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, our agent replied to every message quickly over WhatsApp', createdAt: '2025-06-18T00:00:00.000Z' },
    { id: 23, name: 'Jennifer A.', rating: 5, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Felt very safe walking around the neighborhood even at night.', createdAt: '2024-08-29T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 27, name: 'Andres D.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-08-24T00:00:00.000Z' },
    { id: 26, name: 'Fernanda S.', rating: 5, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2025-06-17T00:00:00.000Z' },
    { id: 25, name: 'Regina G.', rating: 3, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2024-11-12T00:00:00.000Z' },
    { id: 28, name: 'Gerardo V.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2024-08-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 29, name: 'Lauren R.', rating: 4, comment: 'Our dog came with us and the place lived up to being pet friendly. Any question we had was answered right away, really great service.', createdAt: '2025-08-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 30, name: 'Sebastian L.', rating: 3, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2025-04-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 34, name: 'Sarah H.', rating: 4, comment: 'We went up to the rooftop a few times, the city view is incredible. The bed was super comfortable, slept great every night.', createdAt: '2026-06-13T00:00:00.000Z' },
    { id: 33, name: 'David S.', rating: 5, comment: 'we brought our dog along and it worked out great genuinely pet friendly place and internet connection was excellent throughout our stay', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 32, name: 'Rodrigo C.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-10-30T00:00:00.000Z' },
    { id: 35, name: 'Amanda Y.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Totally worth the price, great experience overall.', createdAt: '2025-10-02T00:00:00.000Z' },
    { id: 31, name: 'Matthew L.', rating: 4, comment: 'Our dog came with us and the place lived up to being pet friendly. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-05-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 36, name: 'Katie B.', rating: 4, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. Any question we had was answered right away, really great service.', createdAt: '2025-12-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 38, name: 'Samantha Y.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Totally worth the price, great experience overall.', createdAt: '2026-03-05T00:00:00.000Z' },
    { id: 39, name: 'Matthew D.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-04-25T00:00:00.000Z' },
    { id: 37, name: 'Gerardo S.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 41, name: 'Jennifer C.', rating: 4, comment: 'traveled with our pet and had zero issues, really appreciated that, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 42, name: 'Ricardo H.', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-06-03T00:00:00.000Z' },
    { id: 40, name: 'Sofia T.', rating: 5, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2024-05-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 43, name: 'Sarah A.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The location was excellent, everything was within walking distance.', createdAt: '2025-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 46, name: 'Samantha R.', rating: 3, comment: 'traveled with our pet and had zero issues, really appreciated that, totally worth the price, great experience overall', createdAt: '2026-01-26T00:00:00.000Z' },
    { id: 44, name: 'Diego T.', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-08-12T00:00:00.000Z' },
    { id: 45, name: 'Jessica M.', rating: 4, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-02-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-20': [
    { id: 47, name: 'Valeria V.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-08-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 48, name: 'Maria Jose T.', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 49, name: 'Carlos D.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-06-29T00:00:00.000Z' },
    { id: 50, name: 'Andres G.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-02-24T00:00:00.000Z' },
    { id: 51, name: 'Brian H.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, slept really well the whole trip, good quality bed', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 53, name: 'Luis Fernando S.', rating: 5, comment: 'pasabamos las tardes en el balcon muy buen espacio exterior y el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-04-14T00:00:00.000Z' },
    { id: 52, name: 'Jennifer L.', rating: 4, comment: 'traveled with our pet and had zero issues, really appreciated that, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-03-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 56, name: 'Megan L.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2026-05-12T00:00:00.000Z' },
    { id: 55, name: 'Tyler M.', rating: 5, comment: 'we spent our evenings out on the balcony, really nice outdoor space, our agent replied to every message quickly over WhatsApp', createdAt: '2025-09-20T00:00:00.000Z' },
    { id: 54, name: 'Fernanda S.', rating: 3, comment: 'nos encanto poder nadar en la alberca en las tardes despues de trabajar, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-06-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 57, name: 'Rodrigo C.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2026-07-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 58, name: 'Justin R.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2025-01-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 59, name: 'Alejandro O.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2024-12-31T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-praga-14-28': [
    { id: 60, name: 'Amanda H.', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2025-07-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 62, name: 'Gerardo T.', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-05-07T00:00:00.000Z' },
    { id: 61, name: 'Paulina B.', rating: 3, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2024-01-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 63, name: 'Regina H.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2026-01-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 66, name: 'Sebastian S.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2026-01-14T00:00:00.000Z' },
    { id: 65, name: 'Ryan R.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, totally worth the price, great experience overall', createdAt: '2025-12-11T00:00:00.000Z' },
    { id: 67, name: 'Katie B.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Any question we had was answered right away, really great service.', createdAt: '2025-11-15T00:00:00.000Z' },
    { id: 64, name: 'Carlos L.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-10-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 68, name: 'Brandon T.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2026-03-21T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 71, name: 'Sebastian D.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 70, name: 'Justin H.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Slept really well the whole trip, good quality bed.', createdAt: '2025-07-21T00:00:00.000Z' },
    { id: 69, name: 'Rachel T.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Great value for what you get, wed definitely book again.', createdAt: '2024-09-14T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-34': [
    { id: 72, name: 'Ximena R.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-05-28T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 73, name: 'Jonathan A.', rating: 3, comment: 'The pool was amazing, we used it almost every day during our stay. Slept really well the whole trip, good quality bed.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 74, name: 'Michael W.', rating: 5, comment: 'the building gym had better equipment than i expected, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 76, name: 'Ashley A.', rating: 4, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-05-02T00:00:00.000Z' },
    { id: 75, name: 'Diego M.', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-09-26T00:00:00.000Z' },
    { id: 77, name: 'Gerardo M.', rating: 3, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-07-20T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 79, name: 'Ryan M.', rating: 5, comment: 'used the gym most mornings always available and well maintained arrived to a perfectly clean place you can tell it\'s well cared for', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 80, name: 'Luis Fernando L.', rating: 5, comment: 'Pasabamos las tardes en el balcon, muy buen espacio exterior. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-04-28T00:00:00.000Z' },
    { id: 78, name: 'Ashley R.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. The bed was super comfortable, slept great every night.', createdAt: '2024-05-14T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 81, name: 'Emiliano M.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2026-03-07T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 83, name: 'Megan A.', rating: 4, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2026-01-12T00:00:00.000Z' },
    { id: 82, name: 'Andrew J.', rating: 3, comment: 'having dedicated parking made things so much easier no stress finding a spot lots of natural light comes in during the day made it feel really nice', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 84, name: 'Javier O.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-03-27T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 85, name: 'Ryan A.', rating: 4, comment: 'we went up to the rooftop a few times, the city view is incredible, totally worth the price, great experience overall', createdAt: '2025-05-04T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 86, name: 'Carlos H.', rating: 4, comment: 'pasamos varias tardes en la alberca, siempre estaba limpia, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2026-04-21T00:00:00.000Z' },
    { id: 89, name: 'Amanda M.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Our agent replied to every message quickly over WhatsApp.', createdAt: '2025-12-01T00:00:00.000Z' },
    { id: 88, name: 'Sarah Y.', rating: 5, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 87, name: 'Javier V.', rating: 4, comment: 'El spa fue un plus que no esperabamos, muy relajante. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-05-18T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 92, name: 'Kevin S.', rating: 3, comment: 'The building gym had better equipment than I expected. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2026-06-02T00:00:00.000Z' },
    { id: 91, name: 'Megan T.', rating: 5, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-03-05T00:00:00.000Z' },
    { id: 93, name: 'Ryan S.', rating: 4, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-12-13T00:00:00.000Z' },
    { id: 90, name: 'Brian A.', rating: 4, comment: 'the spa was an unexpected treat during our stay, slept really well the whole trip, good quality bed', createdAt: '2024-11-25T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 95, name: 'Ana Sofia A.', rating: 3, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2025-01-06T00:00:00.000Z' },
    { id: 94, name: 'Camila O.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 96, name: 'Alejandro L.', rating: 3, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalacion. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-02-01T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 97, name: 'Regina S.', rating: 5, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2024-08-11T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 99, name: 'Jennifer C.', rating: 5, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 98, name: 'Emiliano R.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-11-10T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 100, name: 'Santiago D.', rating: 3, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-09-20T00:00:00.000Z' },
    { id: 102, name: 'Amanda A.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, totally worth the price, great experience overall', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 101, name: 'Sofia O.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-01-10T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 103, name: 'Fernanda M.', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 105, name: 'Carlos O.', rating: 3, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperabamos. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 107, name: 'Camila G.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 104, name: 'Kevin B.', rating: 3, comment: 'the gym in the building was well equipped kept up with my workouts the whole trip and totally worth the price great experience overall', createdAt: '2025-02-01T00:00:00.000Z' },
    { id: 106, name: 'Jennifer D.', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Internet connection was excellent throughout our stay.', createdAt: '2025-01-15T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 109, name: 'Rachel S.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly our agent replied to every message quickly over WhatsApp', createdAt: '2025-03-07T00:00:00.000Z' },
    { id: 108, name: 'Luis Fernando L.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-01-07T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 111, name: 'Matthew D.', rating: 4, comment: 'We spent several afternoons at the pool, always clean and quiet. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-04-26T00:00:00.000Z' },
    { id: 110, name: 'Ricardo R.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-12-15T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 113, name: 'Andrew W.', rating: 3, comment: 'The rooftop pool area was even better in person than in the photos. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-07-10T00:00:00.000Z' },
    { id: 112, name: 'Paulina V.', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2024-03-06T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 114, name: 'Ximena T.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-02-23T00:00:00.000Z' },
    { id: 116, name: 'Andrew M.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-02-13T00:00:00.000Z' },
    { id: 115, name: 'Rodrigo D.', rating: 3, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-01-12T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 118, name: 'David A.', rating: 4, comment: 'the rooftop pool area was even better in person than in the photos, felt very safe walking around the neighborhood even at night', createdAt: '2025-10-18T00:00:00.000Z' },
    { id: 117, name: 'Paulina R.', rating: 4, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-03-10T00:00:00.000Z' },
    { id: 119, name: 'Fernanda O.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2024-07-07T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 121, name: 'Andrew D.', rating: 4, comment: 'The rooftop pool area was even better in person than in the photos. Our agent replied to every message quickly over WhatsApp.', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 120, name: 'Javier R.', rating: 4, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 124, name: 'Gerardo G.', rating: 5, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-03-29T00:00:00.000Z' },
    { id: 122, name: 'Valeria R.', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-10-18T00:00:00.000Z' },
    { id: 123, name: 'Mariana O.', rating: 5, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-09-30T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 126, name: 'David K.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2026-02-21T00:00:00.000Z' },
    { id: 125, name: 'Michael H.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Internet connection was excellent throughout our stay.', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 127, name: 'Luis Fernando O.', rating: 3, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2024-04-18T00:00:00.000Z' },
  ],
  'guadalajara-c-manuel-lopez-cotilla-1223-59': [
    { id: 128, name: 'Rodrigo A.', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2026-01-28T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 130, name: 'Kevin M.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 131, name: 'Ximena R.', rating: 3, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 132, name: 'Sebastian S.', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-06-07T00:00:00.000Z' },
    { id: 129, name: 'Jonathan A.', rating: 3, comment: 'we went up to the rooftop a few times, the city view is incredible, lots of natural light comes in during the day, made it feel really nice', createdAt: '2024-01-24T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 133, name: 'Sofia C.', rating: 5, comment: 'el gimnasio estaba muy completo no tuve que cancelar mi rutina de ejercicio y vale totalmente lo que se paga muy buena experiencia en general', createdAt: '2026-01-13T00:00:00.000Z' },
    { id: 134, name: 'Nicole T.', rating: 4, comment: 'we went up to the rooftop a few times the city view is incredible and the kitchen was well stocked we cooked several meals during our stay', createdAt: '2025-07-29T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 135, name: 'Daniela C.', rating: 4, comment: 'una noche usamos la sala de cine del edificio, detalle que no esperabamos, la ubicacion no se pudo haber elegido mejor, muy centrico', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 136, name: 'David K.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Slept really well the whole trip, good quality bed.', createdAt: '2024-07-06T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 138, name: 'Renata D.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 137, name: 'David J.', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-12-27T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 139, name: 'Paulina M.', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-04-09T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 141, name: 'Amanda K.', rating: 3, comment: 'Used the gym most mornings, always available and well maintained. The bed was super comfortable, slept great every night.', createdAt: '2026-06-16T00:00:00.000Z' },
    { id: 140, name: 'Jennifer W.', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. Felt very safe walking around the neighborhood even at night.', createdAt: '2025-04-17T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 144, name: 'Valeria B.', rating: 5, comment: 'subimos al roof varias veces la vista de la ciudad es increible dormimos muy bien toda la estancia la cama es de buena calidad', createdAt: '2025-10-25T00:00:00.000Z' },
    { id: 142, name: 'Tyler D.', rating: 5, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. Great value for what you get, wed definitely book again.', createdAt: '2025-05-01T00:00:00.000Z' },
    { id: 146, name: 'Diego T.', rating: 5, comment: 'el area de juegos del edificio estuvo bien para las noches tranquilas, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-01-15T00:00:00.000Z' },
    { id: 145, name: 'Nicole C.', rating: 4, comment: 'used the gym most mornings always available and well maintained everything we needed to cook was already there very well equipped kitchen', createdAt: '2024-09-15T00:00:00.000Z' },
    { id: 143, name: 'Camila B.', rating: 5, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-06-08T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 149, name: 'Amanda J.', rating: 3, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2026-06-10T00:00:00.000Z' },
    { id: 150, name: 'Valeria A.', rating: 4, comment: 'Nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 151, name: 'Matthew D.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 147, name: 'Justin J.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Internet connection was excellent throughout our stay.', createdAt: '2024-03-18T00:00:00.000Z' },
    { id: 148, name: 'Andrew D.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-01-26T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 152, name: 'Daniela V.', rating: 4, comment: 'la alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-10-17T00:00:00.000Z' },
    { id: 153, name: 'Carlos A.', rating: 4, comment: 'excelente que el edificio tenga gym lo use casi todas las mananas la ubicacion no se pudo haber elegido mejor muy centrico', createdAt: '2025-03-10T00:00:00.000Z' },
    { id: 154, name: 'Jessica H.', rating: 5, comment: 'we went up to the rooftop a few times, the city view is incredible, great value for what you get, wed definitely book again', createdAt: '2025-03-03T00:00:00.000Z' },
    { id: 156, name: 'Andrew C.', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. Internet connection was excellent throughout our stay.', createdAt: '2024-06-04T00:00:00.000Z' },
    { id: 155, name: 'Brian L.', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2024-04-01T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 157, name: 'Daniela T.', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad y la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2025-06-01T00:00:00.000Z' },
    { id: 158, name: 'Samantha W.', rating: 4, comment: 'The garden area was a peaceful little spot to relax between outings. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2024-07-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 161, name: 'Maria Jose V.', rating: 3, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2026-02-19T00:00:00.000Z' },
    { id: 162, name: 'Renata V.', rating: 3, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones dormimos muy bien toda la estancia la cama es de buena calidad', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 159, name: 'David S.', rating: 5, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Great value for what you get, wed definitely book again.', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 160, name: 'Jonathan J.', rating: 4, comment: 'The building gym had better equipment than I expected. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2025-04-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 166, name: 'Gerardo V.', rating: 3, comment: 'pasamos varias tardes en la alberca siempre estaba limpia vale totalmente lo que se paga muy buena experiencia en general', createdAt: '2025-06-27T00:00:00.000Z' },
    { id: 164, name: 'Ashley H.', rating: 3, comment: 'traveled with our pet and had zero issues, really appreciated that, our agent replied to every message quickly over WhatsApp', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 165, name: 'Nicole Y.', rating: 3, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2024-12-18T00:00:00.000Z' },
    { id: 163, name: 'Michael Y.', rating: 5, comment: 'We went up to the rooftop a few times, the city view is incredible. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-10-15T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 167, name: 'Nicole Y.', rating: 3, comment: 'having dedicated parking made things so much easier, no stress finding a spot, couldn\'t have picked a better location, very central', createdAt: '2025-10-10T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 168, name: 'Ana Sofia V.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-11-07T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 169, name: 'Mariana G.', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-08-24T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 171, name: 'Jonathan S.', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 170, name: 'Ryan C.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-10-03T00:00:00.000Z' },
    { id: 172, name: 'Ryan A.', rating: 5, comment: 'Our dog came with us and the place lived up to being pet friendly. Internet connection was excellent throughout our stay.', createdAt: '2024-02-29T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 173, name: 'Kevin S.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-08-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 176, name: 'Michael D.', rating: 5, comment: 'traveled with our pet and had zero issues, really appreciated that, the bed was super comfortable, slept great every night', createdAt: '2026-01-23T00:00:00.000Z' },
    { id: 174, name: 'Valeria L.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-09-17T00:00:00.000Z' },
    { id: 175, name: 'Alejandro L.', rating: 4, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2023-11-23T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 178, name: 'Alejandro A.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones y nos ayudaron con cualquier duda de inmediato muy buena atencion', createdAt: '2026-06-13T00:00:00.000Z' },
    { id: 177, name: 'Katie T.', rating: 5, comment: 'We went up to the rooftop a few times, the city view is incredible. Internet connection was excellent throughout our stay.', createdAt: '2025-06-01T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 179, name: 'Mariana R.', rating: 3, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable y la conexion de internet fue excelente durante toda la estancia', createdAt: '2024-11-25T00:00:00.000Z' },
    { id: 180, name: 'Renata V.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-05-19T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 182, name: 'Sebastian M.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-11-02T00:00:00.000Z' },
    { id: 181, name: 'Amanda W.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. The bed was super comfortable, slept great every night.', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 183, name: 'Carlos V.', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-02-01T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 184, name: 'Camila R.', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-06-01T00:00:00.000Z' },
    { id: 185, name: 'Daniela H.', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-03-01T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 188, name: 'Diego R.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2026-04-13T00:00:00.000Z' },
    { id: 186, name: 'Samantha H.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Totally worth the price, great experience overall.', createdAt: '2026-03-05T00:00:00.000Z' },
    { id: 187, name: 'Renata A.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-04-22T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 192, name: 'Valeria L.', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-11-22T00:00:00.000Z' },
    { id: 189, name: 'Andres B.', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-05-25T00:00:00.000Z' },
    { id: 190, name: 'Lauren M.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Our agent replied to every message quickly over WhatsApp.', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 191, name: 'Katie C.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-02-20T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 193, name: 'Regina L.', rating: 3, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2026-04-04T00:00:00.000Z' },
    { id: 194, name: 'Renata L.', rating: 5, comment: 'nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-08-12T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 195, name: 'Alejandro L.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 198, name: 'Sebastian T.', rating: 4, comment: 'Nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-09-07T00:00:00.000Z' },
    { id: 196, name: 'Kevin R.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Great value for what you get, wed definitely book again.', createdAt: '2025-08-02T00:00:00.000Z' },
    { id: 197, name: 'Katie S.', rating: 4, comment: 'the rooftop pool area was even better in person than in the photos, totally worth the price, great experience overall', createdAt: '2023-11-29T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 201, name: 'Rachel M.', rating: 3, comment: 'the pool was amazing, we used it almost every day during our stay, our agent replied to every message quickly over WhatsApp', createdAt: '2026-03-30T00:00:00.000Z' },
    { id: 200, name: 'Emily K.', rating: 4, comment: 'the included parking spot was really convenient zero hassle and everything we needed to cook was already there very well equipped kitchen', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 199, name: 'Mariana G.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-09-29T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 202, name: 'Javier R.', rating: 5, comment: 'Pasamos varias tardes en la alberca, siempre estaba limpia. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-03-30T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 203, name: 'Mariana R.', rating: 4, comment: 'jugamos padel una tarde en las canchas del edificio, muy buena instalacion, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2025-04-04T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 206, name: 'Justin H.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, slept really well the whole trip, good quality bed', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 204, name: 'Sebastian D.', rating: 4, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-04-11T00:00:00.000Z' },
    { id: 205, name: 'Amanda Y.', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot and great value for what you get wed definitely book again', createdAt: '2024-12-04T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 208, name: 'Carlos R.', rating: 5, comment: 'fui al gimnasio varias veces esta bien equipado y siempre disponible la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2026-05-01T00:00:00.000Z' },
    { id: 211, name: 'Tyler W.', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-02-19T00:00:00.000Z' },
    { id: 210, name: 'Jessica K.', rating: 5, comment: 'The building\'s pool was a great bonus we weren\'t expecting. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 207, name: 'Sofia R.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-10-24T00:00:00.000Z' },
    { id: 209, name: 'Ximena S.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-03-26T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 213, name: 'Samantha H.', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-04-16T00:00:00.000Z' },
    { id: 212, name: 'Tyler A.', rating: 3, comment: 'Traveled with our pet and had zero issues, really appreciated that. Internet connection was excellent throughout our stay.', createdAt: '2025-12-19T00:00:00.000Z' },
    { id: 214, name: 'Michael H.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-05-04T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 216, name: 'Lauren M.', rating: 5, comment: 'the pool was amazing, we used it almost every day during our stay, really well located, close to great restaurants and easy to get around', createdAt: '2025-08-04T00:00:00.000Z' },
    { id: 215, name: 'David D.', rating: 3, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Totally worth the price, great experience overall.', createdAt: '2024-07-04T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 220, name: 'Maria Jose L.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema muy agradecidos por eso y la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2026-07-23T00:00:00.000Z' },
    { id: 219, name: 'Santiago A.', rating: 4, comment: 'fui al gimnasio varias veces, esta bien equipado y siempre disponible, la ubicacion no se pudo haber elegido mejor, muy centrico', createdAt: '2026-02-23T00:00:00.000Z' },
    { id: 217, name: 'Ana Sofia V.', rating: 5, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-03-05T00:00:00.000Z' },
    { id: 218, name: 'Brandon T.', rating: 5, comment: 'We used the building\'s private cinema room one night, such a fun extra. Internet connection was excellent throughout our stay.', createdAt: '2023-10-23T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 221, name: 'Michael C.', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, internet connection was excellent throughout our stay', createdAt: '2026-04-01T00:00:00.000Z' },
    { id: 224, name: 'Katie A.', rating: 4, comment: 'The rooftop pool area was even better in person than in the photos. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 223, name: 'Emiliano B.', rating: 4, comment: 'La alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 225, name: 'Ashley W.', rating: 3, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 222, name: 'Andres T.', rating: 4, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2024-10-29T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 226, name: 'Katie K.', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-03-15T00:00:00.000Z' },
    { id: 227, name: 'Rodrigo B.', rating: 4, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-03-19T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 228, name: 'Camila O.', rating: 3, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-08-20T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 230, name: 'Kevin R.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 232, name: 'Sebastian T.', rating: 3, comment: 'El espacio de coworking me sirvió mucho, trabajé varias mañanas ahí sin problema. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-08-06T00:00:00.000Z' },
    { id: 229, name: 'Sofia V.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-07-28T00:00:00.000Z' },
    { id: 231, name: 'Luis Fernando S.', rating: 3, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2024-03-24T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 234, name: 'Javier R.', rating: 3, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-03-26T00:00:00.000Z' },
    { id: 233, name: 'Tyler W.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, the bed was super comfortable, slept great every night', createdAt: '2024-09-16T00:00:00.000Z' },
    { id: 235, name: 'Paulina A.', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2024-06-03T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 236, name: 'Megan B.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, totally worth the price, great experience overall', createdAt: '2025-12-23T00:00:00.000Z' },
    { id: 237, name: 'Justin C.', rating: 5, comment: 'the included parking spot was really convenient zero hassle the apartment was spotless when we arrived clearly well maintained', createdAt: '2025-07-13T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 239, name: 'Alejandro L.', rating: 4, comment: 'La alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2026-04-10T00:00:00.000Z' },
    { id: 238, name: 'Rodrigo A.', rating: 3, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2025-04-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 240, name: 'Brandon B.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. The bed was super comfortable, slept great every night.', createdAt: '2025-07-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 242, name: 'Katie T.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-06-21T00:00:00.000Z' },
    { id: 241, name: 'Megan Y.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-03-08T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 243, name: 'Paulina A.', rating: 5, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2026-03-27T00:00:00.000Z' },
    { id: 244, name: 'Santiago O.', rating: 5, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-03-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 245, name: 'Maria Jose H.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increíble. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-10-31T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 246, name: 'Brandon Y.', rating: 4, comment: 'loved the roof garden perfect spot for sunset with a drink communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 247, name: 'Jennifer C.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Couldn\'t have picked a better location, very central.', createdAt: '2024-03-20T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-116': [
    { id: 248, name: 'Jonathan T.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 250, name: 'Kevin A.', rating: 3, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Totally worth the price, great experience overall.', createdAt: '2026-03-18T00:00:00.000Z' },
    { id: 249, name: 'Samantha A.', rating: 5, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 251, name: 'Luis Fernando B.', rating: 4, comment: 'pudimos traer a nuestra mascota sin ningun problema muy agradecidos por eso y la ubicacion no se pudo haber elegido mejor muy centrico', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 252, name: 'David C.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-25T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 254, name: 'Paulina O.', rating: 4, comment: 'la alberca del edificio fue un gran plus no esperabamos que estuviera tan bien mantenida y llegamos y todo estaba perfectamente limpio se nota el cuidado', createdAt: '2026-04-12T00:00:00.000Z' },
    { id: 255, name: 'Brian H.', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, internet connection was excellent throughout our stay', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 253, name: 'Camila C.', rating: 4, comment: 'a pasos de la playa, no podiamos pedir mejor ubicacion para eso, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2026-01-25T00:00:00.000Z' },
    { id: 256, name: 'Jessica M.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly any question we had was answered right away really great service', createdAt: '2024-11-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 259, name: 'Nicole D.', rating: 4, comment: 'loved having access to the pool — such a nice way to relax after exploring the city, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2026-02-17T00:00:00.000Z' },
    { id: 260, name: 'Sebastian S.', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 257, name: 'Diego D.', rating: 5, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, la ubicacion no se pudo haber elegido mejor, muy centrico', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 258, name: 'Megan C.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2025-10-12T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 261, name: 'Sarah A.', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-12-11T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 262, name: 'Fernanda D.', rating: 3, comment: 'A pasos de la playa, no podiamos pedir mejor ubicacion para eso. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-09-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 264, name: 'Samantha Y.', rating: 5, comment: 'Our dog came with us and the place lived up to being pet friendly. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-07-14T00:00:00.000Z' },
    { id: 263, name: 'Diego O.', rating: 3, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-06-07T00:00:00.000Z' },
    { id: 265, name: 'Carlos H.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2024-08-25T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 267, name: 'Regina R.', rating: 5, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalacion. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-06-23T00:00:00.000Z' },
    { id: 266, name: 'Diego T.', rating: 5, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 268, name: 'Ryan J.', rating: 5, comment: 'we spent several afternoons at the pool, always clean and quiet, internet connection was excellent throughout our stay', createdAt: '2025-04-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-125': [
    { id: 271, name: 'Jessica B.', rating: 5, comment: 'loved having our own balcony we had coffee out there every morning slept really well the whole trip good quality bed', createdAt: '2025-10-24T00:00:00.000Z' },
    { id: 273, name: 'Katie W.', rating: 5, comment: 'we played a match on the padel court one afternoon great amenity so much natural light in the apartment made it feel really spacious', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 270, name: 'Paulina O.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-12-22T00:00:00.000Z' },
    { id: 272, name: 'Kevin T.', rating: 3, comment: 'the beach access was incredible, exactly what we were hoping for, totally worth the price, great experience overall', createdAt: '2024-05-22T00:00:00.000Z' },
    { id: 269, name: 'Michael T.', rating: 5, comment: 'the jacuzzi was a nice surprise great way to unwind in the evenings and lots of natural light comes in during the day made it feel really nice', createdAt: '2024-01-13T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 278, name: 'Fernanda T.', rating: 4, comment: 'a pasos de la playa no podiamos pedir mejor ubicacion para eso y la zona es muy segura y tranquila se siente muy bien caminar de noche', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 276, name: 'Emiliano C.', rating: 4, comment: 'nos encanto poder nadar en la alberca en las tardes despues de trabajar el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-01-16T00:00:00.000Z' },
    { id: 277, name: 'Megan J.', rating: 5, comment: 'traveled with our pet and had zero issues, really appreciated that, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2024-08-29T00:00:00.000Z' },
    { id: 274, name: 'Brandon B.', rating: 4, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2024-04-01T00:00:00.000Z' },
    { id: 275, name: 'Ashley T.', rating: 3, comment: 'we spent our evenings out on the balcony, really nice outdoor space, our agent replied to every message quickly over WhatsApp', createdAt: '2024-02-12T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 279, name: 'Ricardo H.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-10-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 281, name: 'Diego B.', rating: 4, comment: 'Estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-01-04T00:00:00.000Z' },
    { id: 280, name: 'Matthew B.', rating: 5, comment: 'we went up to the rooftop a few times the city view is incredible and any question we had was answered right away really great service', createdAt: '2024-05-28T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 282, name: 'Javier H.', rating: 4, comment: 'Estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2026-05-24T00:00:00.000Z' },
    { id: 283, name: 'Kevin K.', rating: 5, comment: 'just a short walk to the beach, couldn\'t have asked for a better spot, the bed was super comfortable, slept great every night', createdAt: '2025-09-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 284, name: 'Ana Sofia G.', rating: 4, comment: 'Pasábamos las tardes en el balcón, muy buen espacio exterior. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-11-28T00:00:00.000Z' },
    { id: 285, name: 'Amanda B.', rating: 4, comment: 'The building\'s pool was a great bonus we weren\'t expecting. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2024-08-13T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 288, name: 'Matthew W.', rating: 5, comment: 'used the gym most mornings, always available and well maintained, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 287, name: 'Nicole K.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-05-06T00:00:00.000Z' },
    { id: 286, name: 'Kevin L.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-01-19T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-134': [
    { id: 289, name: 'Alejandro D.', rating: 4, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2024-11-16T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 291, name: 'Amanda H.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The bed was super comfortable, slept great every night.', createdAt: '2026-05-04T00:00:00.000Z' },
    { id: 290, name: 'Valeria H.', rating: 5, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, excelente zona, todo lo que necesitabamos estaba a unas cuadras', createdAt: '2025-06-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-136': [
    { id: 294, name: 'Katie W.', rating: 4, comment: 'Just a short walk to the beach, couldn\'t have asked for a better spot. Slept really well the whole trip, good quality bed.', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 292, name: 'Andrew L.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-08-07T00:00:00.000Z' },
    { id: 295, name: 'Lauren T.', rating: 3, comment: 'having dedicated parking made things so much easier, no stress finding a spot, so much natural light in the apartment, made it feel really spacious', createdAt: '2024-12-28T00:00:00.000Z' },
    { id: 293, name: 'Katie A.', rating: 4, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. Great area, everything we needed was just a few blocks away.', createdAt: '2024-07-27T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 296, name: 'Katie B.', rating: 4, comment: 'Our dog came with us and the place lived up to being pet friendly. Great value for what you get, we\'d definitely book again.', createdAt: '2026-03-17T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 298, name: 'Maria Jose D.', rating: 4, comment: 'nos encanto tener balcon propio buena vista y espacio para sentarnos afuera el departamento estaba impecable cuando llegamos se nota que lo cuidan bien', createdAt: '2026-06-11T00:00:00.000Z' },
    { id: 299, name: 'David H.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. The location was excellent, everything was within walking distance.', createdAt: '2025-09-26T00:00:00.000Z' },
    { id: 297, name: 'Amanda B.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Slept really well the whole trip, good quality bed.', createdAt: '2025-08-27T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 300, name: 'Justin B.', rating: 4, comment: 'loved having access to the pool — such a nice way to relax after exploring the city, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-05-19T00:00:00.000Z' },
    { id: 301, name: 'Fernanda D.', rating: 4, comment: 'Nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-03-05T00:00:00.000Z' },
    { id: 302, name: 'Maria Jose D.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-10-08T00:00:00.000Z' },
    { id: 303, name: 'Andrew D.', rating: 5, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Internet connection was excellent throughout our stay.', createdAt: '2024-04-15T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 305, name: 'Jonathan Y.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, internet connection was excellent throughout our stay', createdAt: '2025-08-29T00:00:00.000Z' },
    { id: 306, name: 'Sofia M.', rating: 3, comment: 'estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 307, name: 'Camila L.', rating: 3, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-03-05T00:00:00.000Z' },
    { id: 304, name: 'Javier L.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2024-11-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 308, name: 'Ashley M.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, slept really well the whole trip, good quality bed', createdAt: '2025-04-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 311, name: 'Carlos S.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 310, name: 'Tyler S.', rating: 4, comment: 'loved the roof garden — perfect spot for sunset with a drink, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 309, name: 'Alejandro R.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2025-06-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 312, name: 'Sebastian V.', rating: 5, comment: 'Pasábamos las tardes en el balcón, muy buen espacio exterior. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2026-03-21T00:00:00.000Z' },
    { id: 313, name: 'Luis Fernando O.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2026-03-15T00:00:00.000Z' },
    { id: 314, name: 'Maria Jose H.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 315, name: 'Ashley H.', rating: 5, comment: 'the balcony was a great bonus nice breeze and a good view of the neighborhood the location was excellent everything was within walking distance', createdAt: '2025-07-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 317, name: 'Mariana A.', rating: 4, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 316, name: 'Diego S.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-05-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 318, name: 'Camila G.', rating: 5, comment: 'subimos al roof varias veces, la vista de la ciudad es increible, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-01-16T00:00:00.000Z' },
    { id: 319, name: 'Ashley K.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2024-10-31T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 322, name: 'Amanda B.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 320, name: 'Kevin B.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, slept really well the whole trip, good quality bed', createdAt: '2025-06-13T00:00:00.000Z' },
    { id: 323, name: 'Nicole W.', rating: 3, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the bed was super comfortable, slept great every night', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 321, name: 'Sebastian L.', rating: 4, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2024-11-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 324, name: 'Christopher H.', rating: 3, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2026-07-18T00:00:00.000Z' },
    { id: 325, name: 'Lauren R.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 326, name: 'Maria Jose T.', rating: 5, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperabamos. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-04-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 329, name: 'Jessica Y.', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, great area, everything we needed was just a few blocks away', createdAt: '2025-10-22T00:00:00.000Z' },
    { id: 330, name: 'Ricardo G.', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-08-14T00:00:00.000Z' },
    { id: 328, name: 'Kevin B.', rating: 3, comment: 'the building gym had better equipment than i expected, our agent replied to every message quickly over WhatsApp', createdAt: '2025-05-19T00:00:00.000Z' },
    { id: 327, name: 'Santiago M.', rating: 4, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-10-09T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 331, name: 'Amanda L.', rating: 5, comment: 'we went up to the rooftop a few times, the city view is incredible, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-08-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 332, name: 'Jessica K.', rating: 5, comment: 'We used the building\'s private cinema room one night, such a fun extra. Great value for what you get, wed definitely book again.', createdAt: '2024-10-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 335, name: 'Andrew K.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Great area, everything we needed was just a few blocks away.', createdAt: '2026-04-29T00:00:00.000Z' },
    { id: 334, name: 'Nicole C.', rating: 3, comment: 'We spent several afternoons at the pool, always clean and quiet. Totally worth the price, great experience overall.', createdAt: '2025-11-03T00:00:00.000Z' },
    { id: 333, name: 'Kevin J.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-08-15T00:00:00.000Z' },
    { id: 336, name: 'Regina D.', rating: 3, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-07-02T00:00:00.000Z' },
    { id: 337, name: 'Mariana D.', rating: 4, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2024-10-26T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 340, name: 'Sebastian R.', rating: 4, comment: 'fui al gimnasio varias veces, esta bien equipado y siempre disponible, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2026-02-28T00:00:00.000Z' },
    { id: 342, name: 'Samantha R.', rating: 4, comment: 'We played a match on the padel court one afternoon — great amenity. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 339, name: 'Ashley R.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-09-23T00:00:00.000Z' },
    { id: 341, name: 'Maria Jose G.', rating: 4, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2024-12-16T00:00:00.000Z' },
    { id: 338, name: 'Ryan H.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2024-08-27T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 343, name: 'Rachel J.', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. Internet connection was excellent throughout our stay.', createdAt: '2026-06-09T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 344, name: 'Mariana H.', rating: 3, comment: 'nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-10-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 345, name: 'David L.', rating: 4, comment: 'The rooftop pool area was even better in person than in the photos. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 346, name: 'Christopher W.', rating: 5, comment: 'Our dog came with us and the place lived up to being pet friendly. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-02-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 349, name: 'Matthew K.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, the location was excellent, everything was within walking distance', createdAt: '2025-09-20T00:00:00.000Z' },
    { id: 347, name: 'Maria Jose B.', rating: 3, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperábamos. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-05-29T00:00:00.000Z' },
    { id: 348, name: 'Ana Sofia O.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2024-05-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 350, name: 'Ana Sofia M.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-10-13T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 351, name: 'Katie A.', rating: 4, comment: 'The garden area was a peaceful little spot to relax between outings. Slept really well the whole trip, good quality bed.', createdAt: '2025-10-19T00:00:00.000Z' },
    { id: 352, name: 'Jonathan K.', rating: 4, comment: 'we used the jacuzzi most nights, such a relaxing extra to have, any question we had was answered right away, really great service', createdAt: '2025-04-12T00:00:00.000Z' },
    { id: 353, name: 'Andres S.', rating: 5, comment: 'el espacio de coworking me sirvio mucho trabaje varias mananas ahi sin problema y el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2024-04-02T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 354, name: 'Regina O.', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-09-01T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 355, name: 'Maria Jose C.', rating: 3, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2024-10-15T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 358, name: 'Ximena V.', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-05-28T00:00:00.000Z' },
    { id: 359, name: 'Gerardo O.', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El agente respondió todas nuestras dudas muy rápido por WhatsApp.', createdAt: '2025-05-04T00:00:00.000Z' },
    { id: 357, name: 'Diego D.', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-11-16T00:00:00.000Z' },
    { id: 356, name: 'Ana Sofia S.', rating: 4, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, la conexion de internet fue excelente durante toda la estancia', createdAt: '2024-08-13T00:00:00.000Z' },
  ],
  'tulum-carretera-federal-167': [
    { id: 361, name: 'Renata S.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2026-04-14T00:00:00.000Z' },
    { id: 360, name: 'Megan B.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-11-29T00:00:00.000Z' },
    { id: 362, name: 'Matthew C.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, any question we had was answered right away, really great service', createdAt: '2024-12-25T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-168': [
    { id: 367, name: 'Javier S.', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2026-03-24T00:00:00.000Z' },
    { id: 364, name: 'Sofia V.', rating: 3, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2026-01-26T00:00:00.000Z' },
    { id: 365, name: 'Rodrigo G.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 363, name: 'Katie H.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-10-27T00:00:00.000Z' },
    { id: 366, name: 'Regina H.', rating: 3, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-04-12T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 369, name: 'Paulina D.', rating: 3, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-07-21T00:00:00.000Z' },
    { id: 368, name: 'Regina S.', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2024-09-09T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 370, name: 'Paulina B.', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2025-07-24T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 372, name: 'Tyler R.', rating: 5, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, slept really well the whole trip, good quality bed', createdAt: '2026-01-25T00:00:00.000Z' },
    { id: 371, name: 'Ana Sofia A.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-08-04T00:00:00.000Z' },
    { id: 373, name: 'Matthew D.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, internet connection was excellent throughout our stay', createdAt: '2024-06-18T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 374, name: 'Gerardo O.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2026-01-11T00:00:00.000Z' },
    { id: 376, name: 'Luis Fernando H.', rating: 5, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly todo lo que necesitamos para cocinar ya estaba ahi muy completa la cocina', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 375, name: 'Matthew L.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Slept really well the whole trip, good quality bed.', createdAt: '2025-03-03T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 377, name: 'Paulina O.', rating: 4, comment: 'la cercania a la playa fue lo mejor, se puede llegar caminando en minutos, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2026-03-03T00:00:00.000Z' },
    { id: 378, name: 'Megan B.', rating: 3, comment: 'loved the roof garden — perfect spot for sunset with a drink, our agent replied to every message quickly over WhatsApp', createdAt: '2025-03-02T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 379, name: 'Daniela O.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 380, name: 'Valeria D.', rating: 5, comment: 'nos encanto tener balcon propio buena vista y espacio para sentarnos afuera el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2024-09-14T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 381, name: 'Lauren C.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 383, name: 'Diego V.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-07-05T00:00:00.000Z' },
    { id: 382, name: 'Justin J.', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, totally worth the price, great experience overall', createdAt: '2025-05-06T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 385, name: 'Amanda B.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Any question we had was answered right away, really great service.', createdAt: '2026-05-01T00:00:00.000Z' },
    { id: 387, name: 'Ximena T.', rating: 4, comment: 'nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 386, name: 'Luis Fernando H.', rating: 4, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-10-08T00:00:00.000Z' },
    { id: 384, name: 'Paulina G.', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-07-19T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 389, name: 'Rachel M.', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. Couldn\'t have picked a better location, very central.', createdAt: '2026-07-12T00:00:00.000Z' },
    { id: 391, name: 'Rachel Y.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Great area, everything we needed was just a few blocks away.', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 392, name: 'Lauren T.', rating: 5, comment: 'Our dog came with us and the place lived up to being pet friendly. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2025-09-13T00:00:00.000Z' },
    { id: 390, name: 'Megan J.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Slept really well the whole trip, good quality bed.', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 388, name: 'Ana Sofia G.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2025-01-10T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 394, name: 'Sarah H.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-04-24T00:00:00.000Z' },
    { id: 393, name: 'Christopher S.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-01-04T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 395, name: 'Nicole T.', rating: 5, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-07-12T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 397, name: 'Paulina S.', rating: 4, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 398, name: 'Ximena B.', rating: 5, comment: 'el spa fue un plus que no esperabamos, muy relajante, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-06-20T00:00:00.000Z' },
    { id: 396, name: 'Sarah S.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Great area, everything we needed was just a few blocks away.', createdAt: '2024-03-02T00:00:00.000Z' },
  ],
};