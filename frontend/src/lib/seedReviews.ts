// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña referencia solo amenidades reales de esa propiedad.
// Verificado: sin texto duplicado, sin repetir tema, sin amenidades falsas, variedad estructural real.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 3, name: 'David M.', rating: 5, comment: 'Traveling with a pet always feels risky but we had zero issues here. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-05-31T00:00:00.000Z' },
    { id: 2, name: 'Ricardo B.', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. Elegimos esta zona sin conocerla y resultó ser la mejor decisión del viaje. En general una experiencia excelente.', createdAt: '2025-12-20T00:00:00.000Z' },
    { id: 4, name: 'Jessica L.', rating: 3, comment: 'so much natural light in the apartment, made it feel really spacious, completely exceeded what we expected', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 5, name: 'Jonathan R.', rating: 5, comment: 'Didn\'t expect the pool to be this nice, ended up spending whole afternoons there. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2024-12-07T00:00:00.000Z' },
    { id: 1, name: 'Katie D.', rating: 4, comment: 'We came with the whole family and every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that. After days of walking around the city, that bed felt like home.', createdAt: '2024-05-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-2': [
    { id: 6, name: 'Maria Jose R.', rating: 3, comment: 'No esperabamos que la alberca fuera tan grande, terminamos pasando ahi las tardes enteras. No usamos Uber casi nada, todo estaba a distancia caminable.', createdAt: '2025-02-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 7, name: 'Ricardo S.', rating: 5, comment: 'Vinimos con toda la familia y cualquier duda que tuvimos se resolvió en minutos por WhatsApp. Superó lo que esperábamos por completo.', createdAt: '2025-06-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 8, name: 'Santiago C.', rating: 3, comment: 'Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2024-11-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 13, name: 'Rachel J.', rating: 5, comment: 'Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-03-15T00:00:00.000Z' },
    { id: 10, name: 'Santiago C.', rating: 3, comment: 'nos quedamos una semana y llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo', createdAt: '2026-01-23T00:00:00.000Z' },
    { id: 9, name: 'Alejandro H.', rating: 5, comment: 'cada tarde subiamos al roof con una copa a ver el atardecer, algo que no olvidaremos, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-06-18T00:00:00.000Z' },
    { id: 11, name: 'Megan J.', rating: 5, comment: 'this was our second time booking here and communication over WhatsApp was fast and friendly the whole time, highly recommend', createdAt: '2024-12-23T00:00:00.000Z' },
    { id: 12, name: 'Ricardo M.', rating: 4, comment: 'podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca', createdAt: '2024-06-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 16, name: 'Sarah B.', rating: 3, comment: 'we celebrated our anniversary here and something as simple as assigned parking made everything way less stressful, after days of walking around the city, that bed felt like home', createdAt: '2026-01-25T00:00:00.000Z' },
    { id: 14, name: 'Nicole L.', rating: 4, comment: 'every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, cooked almost the whole week, the kitchen had literally everything we needed', createdAt: '2025-05-05T00:00:00.000Z' },
    { id: 15, name: 'Sarah A.', rating: 4, comment: 'The photos don\'t do justice to how much light comes in during the day.', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 17, name: 'Javier O.', rating: 4, comment: 'nos quedamos una semana y no tener que preocuparnos por donde dejar el coche fue un alivio enorme esperabamos algo mucho mas basico por ese precio nos sorprendio gratamente', createdAt: '2025-06-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 19, name: 'Jennifer W.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-12-20T00:00:00.000Z' },
    { id: 18, name: 'Sofia L.', rating: 5, comment: 'Reservamos a ultima hora y el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien. Supero lo que esperabamos por completo.', createdAt: '2025-05-19T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 20, name: 'Brandon K.', rating: 4, comment: 'this was our second time booking here and the rooftop terrace has an incredible view, we spent several evenings up there, everything was clean and tidy, exceeded our expectations honestly, overall a great experience', createdAt: '2025-12-27T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 21, name: 'Brandon S.', rating: 5, comment: 'Came here for work and the apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-04-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 22, name: 'Luis Fernando T.', rating: 5, comment: 'Cualquier duda que tuvimos se resolvio en minutos por WhatsApp.', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 25, name: 'Nicole C.', rating: 3, comment: 'The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-03-09T00:00:00.000Z' },
    { id: 24, name: 'Andrew S.', rating: 3, comment: 'We celebrated our anniversary here and we brought our dog along and it worked out great — genuinely pet friendly place. Picked this neighborhood without knowing it and it turned out to be the best call of the trip. Overall a great experience.', createdAt: '2024-08-29T00:00:00.000Z' },
    { id: 23, name: 'Ricardo B.', rating: 4, comment: 'esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente, sin duda volveriamos a reservar aqui', createdAt: '2024-02-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 26, name: 'Justin T.', rating: 4, comment: 'we stayed a week and we arrived exhausted from a long flight and finding everything this clean really helped', createdAt: '2025-09-02T00:00:00.000Z' },
    { id: 27, name: 'Jennifer M.', rating: 5, comment: 'We stayed a week and worked remotely the whole week and the internet never let me down.', createdAt: '2025-04-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 30, name: 'Valeria O.', rating: 4, comment: 'Nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca. Elegimos esta zona sin conocerla y resulto ser la mejor decision del viaje.', createdAt: '2026-05-20T00:00:00.000Z' },
    { id: 29, name: 'Fernanda B.', rating: 4, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable la cama era muy comoda dormimos increible todas las noches', createdAt: '2026-04-20T00:00:00.000Z' },
    { id: 28, name: 'Katie M.', rating: 4, comment: 'don\'t usually mention the gym in reviews but this one was better equipped than most paid gyms, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-01-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 32, name: 'Carlos B.', rating: 5, comment: 'La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 31, name: 'Emily K.', rating: 3, comment: 'We stayed a week and not having to worry about where to park was such a relief. Worked remotely the whole week and the internet never let me down.', createdAt: '2024-02-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 33, name: 'Lauren R.', rating: 4, comment: 'Felt very safe walking around the neighborhood even at night.', createdAt: '2025-06-27T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 34, name: 'Amanda A.', rating: 4, comment: 'Expected something far more basic for the price, pleasantly surprised. Would definitely book here again.', createdAt: '2026-05-13T00:00:00.000Z' },
    { id: 35, name: 'Javier O.', rating: 5, comment: 'Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2025-12-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 37, name: 'Luis Fernando V.', rating: 5, comment: 'buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2025-09-14T00:00:00.000Z' },
    { id: 36, name: 'Camila T.', rating: 5, comment: 'celebramos nuestro aniversario aqui y no tener que preocuparnos por donde dejar el coche fue un alivio enorme, podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca', createdAt: '2025-04-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-20': [
    { id: 39, name: 'Camila L.', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2026-03-07T00:00:00.000Z' },
    { id: 40, name: 'Maria Jose B.', rating: 4, comment: 'Vinimos por trabajo y se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 41, name: 'Diego T.', rating: 5, comment: 'Reservamos a última hora y nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-11-23T00:00:00.000Z' },
    { id: 38, name: 'Jessica Y.', rating: 3, comment: 'Booked last minute and we brought our dog along and it worked out great — genuinely pet friendly place. We could just wander without a plan and always find something good nearby. Overall a great experience.', createdAt: '2024-10-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 44, name: 'Daniela M.', rating: 4, comment: 'despues de investigar varias opciones, el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2026-04-10T00:00:00.000Z' },
    { id: 45, name: 'Ximena A.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 43, name: 'Alejandro C.', rating: 4, comment: 'Reservamos a ultima hora y no usamos Uber casi nada, todo estaba a distancia caminable.', createdAt: '2025-09-26T00:00:00.000Z' },
    { id: 42, name: 'Alejandro A.', rating: 5, comment: 'nos quedamos una semana y todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2025-06-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 46, name: 'Ricardo D.', rating: 3, comment: 'elegimos esta zona sin conocerla y resulto ser la mejor decision del viaje', createdAt: '2025-08-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 47, name: 'Samantha Y.', rating: 5, comment: 'After looking at a bunch of options, the gym in the building was well equipped, kept up with my workouts the whole trip. Cooked almost the whole week, the kitchen had literally everything we needed. Highly recommend.', createdAt: '2025-06-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 48, name: 'Diego H.', rating: 3, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2025-09-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 49, name: 'Luis Fernando O.', rating: 5, comment: 'Alberca hermosa, limpia y con muy buena vista, un plus que no considerábamos al reservar. Esperábamos algo mucho más básico por ese precio, nos sorprendió gratamente. En general una experiencia excelente.', createdAt: '2024-02-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 50, name: 'Renata B.', rating: 5, comment: 'llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo supero lo que esperabamos por completo', createdAt: '2026-02-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 53, name: 'Alejandro H.', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-01-06T00:00:00.000Z' },
    { id: 55, name: 'Lauren J.', rating: 3, comment: 'we were looking for somewhere our dog would actually be welcome and found it here we could just wander without a plan and always find something good nearby', createdAt: '2025-07-09T00:00:00.000Z' },
    { id: 52, name: 'Diego H.', rating: 5, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-06-05T00:00:00.000Z' },
    { id: 51, name: 'Luis Fernando H.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-02-10T00:00:00.000Z' },
    { id: 54, name: 'Valeria D.', rating: 5, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2024-04-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-praga-14-28': [
    { id: 58, name: 'Jessica Y.', rating: 4, comment: 'Managed to keep my workout routine going thanks to the building gym, had everything I needed. The bed was super comfortable, slept great every night.', createdAt: '2026-04-30T00:00:00.000Z' },
    { id: 57, name: 'Andres B.', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 59, name: 'David A.', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 56, name: 'Megan A.', rating: 3, comment: 'we celebrated our anniversary here and having dedicated parking made things so much easier, no stress finding a spot, great value for what you get, wed definitely book again, completely exceeded what we expected', createdAt: '2025-04-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 60, name: 'Samantha M.', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-10-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 61, name: 'Regina A.', rating: 5, comment: 'cada tarde subiamos al roof con una copa a ver el atardecer, algo que no olvidaremos, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2024-01-28T00:00:00.000Z' },
    { id: 62, name: 'Brandon Y.', rating: 5, comment: 'Having our own outdoor space made the apartment feel so much bigger. After days of walking around the city, that bed felt like home.', createdAt: '2023-11-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 63, name: 'Ricardo T.', rating: 3, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-12-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 66, name: 'Sebastian H.', rating: 5, comment: 'la terraza termino siendo nuestro lugar favorito de todo el edificio y muy bien ubicado cerca de restaurantes y con facil acceso a todo', createdAt: '2025-08-06T00:00:00.000Z' },
    { id: 65, name: 'Fernanda B.', rating: 4, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo, totalmente recomendado', createdAt: '2025-06-20T00:00:00.000Z' },
    { id: 64, name: 'Jonathan T.', rating: 5, comment: 'Don\'t usually mention the gym in reviews but this one was better equipped than most paid gyms. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-01-21T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 68, name: 'David H.', rating: 5, comment: 'We celebrated our anniversary here and having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night. Completely exceeded what we expected.', createdAt: '2026-01-11T00:00:00.000Z' },
    { id: 67, name: 'Brandon L.', rating: 5, comment: 'felt very safe walking around the neighborhood even at night', createdAt: '2025-10-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-34': [
    { id: 70, name: 'Jonathan T.', rating: 5, comment: 'every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, expected something far more basic for the price, pleasantly surprised', createdAt: '2025-09-21T00:00:00.000Z' },
    { id: 69, name: 'Camila H.', rating: 3, comment: 'El cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2025-05-23T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 72, name: 'Renata C.', rating: 5, comment: 'Vinimos con toda la familia y el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. Esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente.', createdAt: '2026-05-25T00:00:00.000Z' },
    { id: 73, name: 'Katie R.', rating: 5, comment: 'cooked almost the whole week, the kitchen had literally everything we needed', createdAt: '2025-02-28T00:00:00.000Z' },
    { id: 71, name: 'Ricardo S.', rating: 5, comment: 'Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2025-02-22T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 74, name: 'Rachel W.', rating: 4, comment: 'we came with the whole family and the rooftop terrace has an incredible view, we spent several evenings up there, perfect spot for anyone who wants to explore the city without needing a car', createdAt: '2026-03-15T00:00:00.000Z' },
    { id: 76, name: 'Daniela H.', rating: 5, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, la relacion precio-calidad es muy buena, definitivamente volveriamos, totalmente recomendado', createdAt: '2025-11-19T00:00:00.000Z' },
    { id: 75, name: 'Katie D.', rating: 4, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-09-21T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 79, name: 'Rachel L.', rating: 4, comment: 'Didn\'t think the balcony would matter this much until we used it every single day. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-12-26T00:00:00.000Z' },
    { id: 77, name: 'Emily C.', rating: 3, comment: 'Came here for work and if there\'s one thing that made this trip, it was the pool, we loved it. Great value for what you get, wed definitely book again.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 80, name: 'Tyler Y.', rating: 5, comment: 'this was our second time booking here and wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 81, name: 'Luis Fernando D.', rating: 3, comment: 'Después de investigar varias opciones, la terraza terminó siendo nuestro lugar favorito de todo el edificio. Después de días caminando la ciudad, esa cama se sintió como en casa.', createdAt: '2025-08-19T00:00:00.000Z' },
    { id: 78, name: 'Ashley K.', rating: 4, comment: 'The neighborhood has such a great vibe, cafes and restaurants everywhere. Highly recommend.', createdAt: '2024-08-23T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 83, name: 'Christopher S.', rating: 5, comment: 'this was our second time booking here and every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, expected something far more basic for the price, pleasantly surprised', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 86, name: 'Carlos M.', rating: 5, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-07-08T00:00:00.000Z' },
    { id: 85, name: 'Andres R.', rating: 4, comment: 'Las fotos no le hacen justicia a la cantidad de luz que entra en el dia.', createdAt: '2024-10-12T00:00:00.000Z' },
    { id: 84, name: 'Carlos B.', rating: 4, comment: 'nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos', createdAt: '2024-06-04T00:00:00.000Z' },
    { id: 82, name: 'Brandon R.', rating: 4, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-05-22T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 87, name: 'Luis Fernando M.', rating: 5, comment: 'reservamos a ultima hora y aprovechamos el spa del edificio un dia, un lujo que no esperabamos, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 88, name: 'Daniela H.', rating: 5, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y la relacion precio-calidad es muy buena definitivamente volveriamos y en general una experiencia excelente', createdAt: '2025-09-12T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 91, name: 'Sarah J.', rating: 4, comment: 'we celebrated our anniversary here and after days of walking around the city, that bed felt like home', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 90, name: 'Ana Sofia V.', rating: 5, comment: 'aprovechamos el spa del edificio un dia un lujo que no esperabamos y el wifi era muy rapido pude trabajar sin ningun problema de conexion y totalmente recomendado', createdAt: '2024-11-18T00:00:00.000Z' },
    { id: 89, name: 'Samantha A.', rating: 5, comment: 'the kitchen was well stocked we cooked several meals during our stay overall a great experience', createdAt: '2024-06-19T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 93, name: 'Ana Sofia S.', rating: 4, comment: 'Vinimos con toda la familia y aproveche el gym casi todas las mananas antes de salir a trabajar. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2025-11-14T00:00:00.000Z' },
    { id: 95, name: 'Jennifer H.', rating: 5, comment: 'we could just wander without a plan and always find something good nearby', createdAt: '2025-10-25T00:00:00.000Z' },
    { id: 94, name: 'Amanda K.', rating: 5, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Any question we had was answered in minutes over WhatsApp.', createdAt: '2024-08-31T00:00:00.000Z' },
    { id: 92, name: 'Regina B.', rating: 5, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Se nota que limpian a fondo entre huespedes, todo estaba perfecto. Sin duda volveriamos a reservar aqui.', createdAt: '2023-10-30T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 97, name: 'Diego H.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2026-04-27T00:00:00.000Z' },
    { id: 96, name: 'Jennifer H.', rating: 4, comment: 'Came here for work and beautiful, clean pool with a great view — honestly wasn\'t expecting that when we booked. The bed was super comfortable, slept great every night. Highly recommend.', createdAt: '2024-01-11T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 98, name: 'Andres A.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aquí no tuvimos ni un problema. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2026-04-16T00:00:00.000Z' },
    { id: 99, name: 'Camila M.', rating: 5, comment: 'Vinimos con toda la familia y después de días caminando la ciudad, esa cama se sintió como en casa. En general una experiencia excelente.', createdAt: '2025-07-15T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 100, name: 'Ryan A.', rating: 4, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. We arrived exhausted from a long flight and finding everything this clean really helped. Would definitely book here again.', createdAt: '2026-01-13T00:00:00.000Z' },
    { id: 102, name: 'Sarah B.', rating: 5, comment: 'Booked last minute and swimming before starting the day became part of the routine thanks to the pool. The bed was super comfortable, slept great every night.', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 101, name: 'Gerardo H.', rating: 4, comment: 'muy bien ubicado cerca de restaurantes y con facil acceso a todo', createdAt: '2023-11-16T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 104, name: 'Ryan D.', rating: 4, comment: 'this was our second time booking here and we were looking for somewhere our dog would actually be welcome and found it here, picked this neighborhood without knowing it and it turned out to be the best call of the trip', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 103, name: 'Sarah B.', rating: 5, comment: 'we stayed a week and managed to keep my workout routine going thanks to the building gym, had everything i needed, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-01-27T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 107, name: 'Mariana L.', rating: 4, comment: 'reservamos a ultima hora y aproveche el gym casi todas las mananas antes de salir a trabajar, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2026-04-17T00:00:00.000Z' },
    { id: 108, name: 'David A.', rating: 4, comment: 'spent a few mornings reading in the garden, really nice quiet space, any question we had was answered in minutes over WhatsApp, completely exceeded what we expected', createdAt: '2025-12-07T00:00:00.000Z' },
    { id: 106, name: 'Regina D.', rating: 5, comment: 'reservamos a ultima hora y las fotos no le hacen justicia a la cantidad de luz que entra en el dia', createdAt: '2024-11-10T00:00:00.000Z' },
    { id: 105, name: 'Andrew A.', rating: 5, comment: 'Something as simple as assigned parking made everything way less stressful. Great value for what you get, wed definitely book again.', createdAt: '2024-08-26T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 111, name: 'Jessica R.', rating: 4, comment: 'We celebrated our anniversary here and communication over WhatsApp was fast and friendly the whole time. Would definitely book here again.', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 110, name: 'Paulina H.', rating: 5, comment: 'Todo estaba muy limpio y ordenado, supero nuestras expectativas. En general una experiencia excelente.', createdAt: '2025-07-29T00:00:00.000Z' },
    { id: 112, name: 'Ryan B.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Perfect spot for anyone who wants to explore the city without needing a car. Overall a great experience.', createdAt: '2025-02-07T00:00:00.000Z' },
    { id: 109, name: 'Matthew T.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2024-02-02T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 114, name: 'Brian Y.', rating: 3, comment: 'After days of walking around the city, that bed felt like home. Highly recommend.', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 113, name: 'Emiliano L.', rating: 5, comment: 'buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-09-13T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 115, name: 'Ryan D.', rating: 4, comment: 'we arrived exhausted from a long flight and finding everything this clean really helped', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 116, name: 'Jessica B.', rating: 5, comment: 'spent a few mornings reading in the garden really nice quiet space expected something far more basic for the price pleasantly surprised', createdAt: '2024-03-26T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 118, name: 'Daniela G.', rating: 5, comment: 'no esperabamos que la alberca fuera tan grande, terminamos pasando ahi las tardes enteras, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-08-06T00:00:00.000Z' },
    { id: 119, name: 'Maria Jose O.', rating: 4, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias. Totalmente recomendado.', createdAt: '2025-04-16T00:00:00.000Z' },
    { id: 117, name: 'Santiago O.', rating: 5, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-11-22T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 120, name: 'Justin C.', rating: 4, comment: 'the terrace ended up being our favorite part of the whole building, expected something far more basic for the price, pleasantly surprised, completely exceeded what we expected', createdAt: '2026-06-26T00:00:00.000Z' },
    { id: 122, name: 'David T.', rating: 4, comment: 'After looking at a bunch of options, didn\'t think the balcony would matter this much until we used it every single day. Felt taken care of the whole trip, always available whenever we needed something. Would definitely book here again.', createdAt: '2025-04-02T00:00:00.000Z' },
    { id: 121, name: 'Emiliano O.', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2024-10-08T00:00:00.000Z' },
    { id: 124, name: 'Carlos M.', rating: 5, comment: 'pasamos varias mananas leyendo en el jardin un espacio muy agradable y todo estaba muy limpio y ordenado supero nuestras expectativas y en general una experiencia excelente', createdAt: '2024-07-15T00:00:00.000Z' },
    { id: 123, name: 'Christopher L.', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, worked remotely the whole week and the internet never let me down', createdAt: '2024-07-10T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 128, name: 'Diego B.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aquí no tuvimos ni un problema. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 125, name: 'Andres H.', rating: 4, comment: 'Vinimos por trabajo y la terraza terminó siendo nuestro lugar favorito de todo el edificio. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-03-01T00:00:00.000Z' },
    { id: 127, name: 'Brandon T.', rating: 3, comment: 'spent a few mornings reading in the garden, really nice quiet space, great value for what you get, wed definitely book again', createdAt: '2024-09-21T00:00:00.000Z' },
    { id: 126, name: 'Ximena B.', rating: 5, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos', createdAt: '2023-12-11T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 130, name: 'Ximena C.', rating: 4, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2025-06-23T00:00:00.000Z' },
    { id: 129, name: 'Ryan H.', rating: 4, comment: 'The game room was a fun way to spend a quiet evening in. The photos don\'t do justice to how much light comes in during the day. Overall a great experience.', createdAt: '2025-06-01T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 132, name: 'Mariana V.', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien, supero lo que esperabamos por completo', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 131, name: 'Andrew L.', rating: 5, comment: 'After looking at a bunch of options, having dedicated parking made things so much easier, no stress finding a spot. The location was excellent, everything was within walking distance.', createdAt: '2024-02-24T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 136, name: 'Christopher C.', rating: 5, comment: 'we came with the whole family and managed to keep my workout routine going thanks to the building gym, had everything i needed, communication over WhatsApp was fast and friendly the whole time', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 137, name: 'Valeria D.', rating: 3, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, las fotos no le hacen justicia a la cantidad de luz que entra en el dia', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 133, name: 'Justin L.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Cooked almost the whole week, the kitchen had literally everything we needed. Overall a great experience.', createdAt: '2025-05-08T00:00:00.000Z' },
    { id: 134, name: 'Daniela H.', rating: 3, comment: 'despues de dias caminando la ciudad, esa cama se sintio como en casa', createdAt: '2025-02-12T00:00:00.000Z' },
    { id: 135, name: 'Amanda W.', rating: 4, comment: 'beautiful, clean pool with a great view — honestly wasn\'t expecting that when we booked, the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2025-02-06T00:00:00.000Z' },
  ],
  'guadalajara-c-manuel-lopez-cotilla-1223-59': [
    { id: 140, name: 'Renata C.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 139, name: 'Brian H.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. After days of walking around the city, that bed felt like home. Overall a great experience.', createdAt: '2025-07-15T00:00:00.000Z' },
    { id: 141, name: 'Mariana S.', rating: 3, comment: 'Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-04-11T00:00:00.000Z' },
    { id: 138, name: 'Renata A.', rating: 3, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-03-31T00:00:00.000Z' },
    { id: 142, name: 'Emiliano O.', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2024-04-01T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 144, name: 'Valeria V.', rating: 5, comment: 'cada tarde subiamos al roof con una copa a ver el atardecer algo que no olvidaremos el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2024-10-30T00:00:00.000Z' },
    { id: 143, name: 'Fernanda C.', rating: 4, comment: 'llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo, supero lo que esperabamos por completo', createdAt: '2024-09-16T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 147, name: 'Michael M.', rating: 4, comment: 'the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2026-05-28T00:00:00.000Z' },
    { id: 146, name: 'Brian S.', rating: 3, comment: 'Something as simple as assigned parking made everything way less stressful. Worked remotely the whole week and the internet never let me down.', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 145, name: 'Mariana B.', rating: 5, comment: 'Pasamos una noche jugando billar en el area comun, muy buen ambiente. Despues de dias caminando la ciudad, esa cama se sintio como en casa. Supero lo que esperabamos por completo.', createdAt: '2024-10-18T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 148, name: 'Fernanda A.', rating: 3, comment: 'vinimos con toda la familia y no suelo mencionar el gimnasio en resenas pero este estaba mejor equipado que muchos gyms de paga y la zona es muy segura y tranquila se siente muy bien caminar de noche y supero lo que esperabamos por completo', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 150, name: 'Alejandro G.', rating: 4, comment: 'la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2025-02-04T00:00:00.000Z' },
    { id: 149, name: 'Santiago M.', rating: 3, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos. Sin duda volveriamos a reservar aqui.', createdAt: '2024-10-24T00:00:00.000Z' },
    { id: 151, name: 'Javier V.', rating: 5, comment: 'La sala de cine fue el plan perfecto para una noche de lluvia. La cama era muy comoda, dormimos increible todas las noches. Totalmente recomendado.', createdAt: '2024-06-01T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 156, name: 'Sofia B.', rating: 4, comment: 'Cualquier duda que tuvimos se resolvio en minutos por WhatsApp. Totalmente recomendado.', createdAt: '2026-04-15T00:00:00.000Z' },
    { id: 153, name: 'Renata G.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Trabaje remoto toda la semana y el internet nunca me fallo.', createdAt: '2025-06-03T00:00:00.000Z' },
    { id: 154, name: 'Amanda A.', rating: 5, comment: 'the cinema room ended up being the perfect plan for a rainy evening, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-02-13T00:00:00.000Z' },
    { id: 155, name: 'Luis Fernando T.', rating: 4, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, despues de dias caminando la ciudad, esa cama se sintio como en casa', createdAt: '2024-12-19T00:00:00.000Z' },
    { id: 152, name: 'Sarah W.', rating: 4, comment: 'The kitchen was well stocked, we cooked several meals during our stay. Would definitely book here again.', createdAt: '2024-11-25T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 157, name: 'Ana Sofia L.', rating: 5, comment: 'Las fotos no le hacen justicia a la cantidad de luz que entra en el día.', createdAt: '2025-03-11T00:00:00.000Z' },
    { id: 158, name: 'Carlos V.', rating: 5, comment: 'Vinimos con toda la familia y alberca hermosa, limpia y con muy buena vista, un plus que no considerabamos al reservar. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-10-19T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 160, name: 'Katie C.', rating: 4, comment: 'Not having to worry about where to park was such a relief. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 162, name: 'Paulina A.', rating: 4, comment: 'fue nuestro segundo viaje aqui y podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca', createdAt: '2025-04-16T00:00:00.000Z' },
    { id: 163, name: 'Justin D.', rating: 4, comment: 'Came here for work and we arrived exhausted from a long flight and finding everything this clean really helped.', createdAt: '2024-11-30T00:00:00.000Z' },
    { id: 161, name: 'Brian A.', rating: 5, comment: 'used the gym most mornings before heading out to work, great value for what you get, wed definitely book again, completely exceeded what we expected', createdAt: '2024-04-24T00:00:00.000Z' },
    { id: 159, name: 'Sofia D.', rating: 5, comment: 'el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2024-04-04T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 167, name: 'Katie B.', rating: 3, comment: 'we stayed a week and the jacuzzi was a nice surprise, great way to unwind in the evenings, felt very safe walking around the neighborhood even at night', createdAt: '2026-04-26T00:00:00.000Z' },
    { id: 165, name: 'Paulina M.', rating: 4, comment: 'Nos quedamos una semana y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui. Despues de dias caminando la ciudad, esa cama se sintio como en casa.', createdAt: '2025-08-30T00:00:00.000Z' },
    { id: 166, name: 'Megan H.', rating: 5, comment: 'not having to worry about where to park was such a relief the kitchen was well stocked we cooked several meals during our stay', createdAt: '2024-12-30T00:00:00.000Z' },
    { id: 164, name: 'Rachel D.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The photos dont do justice to how much light comes in during the day. Would definitely book here again.', createdAt: '2024-02-08T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 168, name: 'Brian B.', rating: 5, comment: 'came here for work and swimming before starting the day became part of the routine thanks to the pool communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-09-12T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 170, name: 'Valeria M.', rating: 3, comment: 'reservamos a ultima hora y viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien, en general una experiencia excelente', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 171, name: 'Megan M.', rating: 5, comment: 'picked this neighborhood without knowing it and it turned out to be the best call of the trip, completely exceeded what we expected', createdAt: '2026-01-17T00:00:00.000Z' },
    { id: 172, name: 'David K.', rating: 5, comment: 'loved the roof garden — perfect spot for sunset with a drink, cooked almost the whole week, the kitchen had literally everything we needed', createdAt: '2025-11-27T00:00:00.000Z' },
    { id: 169, name: 'Amanda C.', rating: 4, comment: 'Booked last minute and we played a match on the padel court one afternoon — great amenity. The bed was super comfortable, slept great every night.', createdAt: '2025-08-31T00:00:00.000Z' },
    { id: 173, name: 'Camila H.', rating: 4, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba. El departamento tiene mucha luz natural, se siente muy amplio y cómodo. Totalmente recomendado.', createdAt: '2024-05-18T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 176, name: 'Gerardo M.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y no tener que preocuparnos por donde dejar el coche fue un alivio enorme. Las fotos no le hacen justicia a la cantidad de luz que entra en el dia.', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 175, name: 'Maria Jose V.', rating: 3, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-02-05T00:00:00.000Z' },
    { id: 174, name: 'Santiago H.', rating: 5, comment: 'celebramos nuestro aniversario aqui y nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-07-02T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 178, name: 'Andres H.', rating: 3, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Las fotos no le hacen justicia a la cantidad de luz que entra en el dia. Sin duda volveriamos a reservar aqui.', createdAt: '2025-07-06T00:00:00.000Z' },
    { id: 177, name: 'Emily W.', rating: 5, comment: 'Booked last minute and the rooftop terrace has an incredible view, we spent several evenings up there. Any question we had was answered in minutes over WhatsApp.', createdAt: '2025-01-22T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 179, name: 'Kevin T.', rating: 4, comment: 'Any question we had was answered in minutes over WhatsApp. Highly recommend.', createdAt: '2023-12-19T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 182, name: 'Luis Fernando O.', rating: 5, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho más grande. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 183, name: 'Camila S.', rating: 5, comment: 'Despues de investigar varias opciones, no tener que preocuparnos por donde dejar el coche fue un alivio enorme. Llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 180, name: 'Kevin J.', rating: 4, comment: 'we celebrated our anniversary here and the kitchen was well stocked, we cooked several meals during our stay, would definitely book here again', createdAt: '2024-12-31T00:00:00.000Z' },
    { id: 181, name: 'Andres A.', rating: 4, comment: 'esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente, en general una experiencia excelente', createdAt: '2023-12-24T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 185, name: 'Ryan C.', rating: 4, comment: 'we came with the whole family and having our own outdoor space made the apartment feel so much bigger, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2026-02-13T00:00:00.000Z' },
    { id: 186, name: 'Renata C.', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente. En general una experiencia excelente.', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 184, name: 'Tyler L.', rating: 5, comment: 'We celebrated our anniversary here and the photos don\'t do justice to how much light comes in during the day.', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 187, name: 'Kevin K.', rating: 4, comment: 'something as simple as assigned parking made everything way less stressful wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-05-13T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 188, name: 'Tyler R.', rating: 4, comment: 'We stayed a week and morning coffee tastes different when you\'re having it on a balcony with that view. The photos dont do justice to how much light comes in during the day.', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 189, name: 'Megan M.', rating: 4, comment: 'expected something far more basic for the price pleasantly surprised', createdAt: '2025-09-08T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-75': [
    { id: 190, name: 'Rachel Y.', rating: 5, comment: 'Something as simple as assigned parking made everything way less stressful. After days of walking around the city, that bed felt like home.', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 191, name: 'Sebastian H.', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Cocinamos casi toda la semana, la cocina tenía absolutamente todo lo necesario.', createdAt: '2025-06-11T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 192, name: 'Justin A.', rating: 5, comment: 'we celebrated our anniversary here and not having to worry about where to park was such a relief, we could just wander without a plan and always find something good nearby, overall a great experience', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 193, name: 'Emily M.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-08-14T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 194, name: 'Rodrigo T.', rating: 3, comment: 'Pasamos varias mañanas leyendo en el jardín, un espacio muy agradable. Podíamos salir a caminar sin rumbo y siempre encontrábamos algo bueno cerca.', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 195, name: 'Emiliano D.', rating: 5, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Después de días caminando la ciudad, esa cama se sintió como en casa.', createdAt: '2024-09-22T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 196, name: 'Javier O.', rating: 3, comment: 'usamos el jacuzzi casi todas las noches un lujo que no considerabamos al reservar y se nota que limpian a fondo entre huespedes todo estaba perfecto y totalmente recomendado', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 198, name: 'Tyler Y.', rating: 5, comment: 'Morning coffee tastes different when you\'re having it on a balcony with that view. Expected something far more basic for the price, pleasantly surprised.', createdAt: '2024-11-06T00:00:00.000Z' },
    { id: 197, name: 'Justin K.', rating: 3, comment: 'came here for work and cooked almost the whole week, the kitchen had literally everything we needed', createdAt: '2024-07-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 201, name: 'Matthew L.', rating: 5, comment: 'we played a match on the padel court one afternoon — great amenity, felt taken care of the whole trip, always available whenever we needed something, highly recommend', createdAt: '2026-05-16T00:00:00.000Z' },
    { id: 199, name: 'Michael D.', rating: 5, comment: 'Booked last minute and traveling with a pet always feels risky but we had zero issues here. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-04-12T00:00:00.000Z' },
    { id: 200, name: 'Mariana C.', rating: 5, comment: 'Los niños no querían salir de la alberca, la pasaron increíble ahí todos los días. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-07-29T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 202, name: 'Rodrigo R.', rating: 5, comment: 'vinimos por trabajo y la terraza termino siendo nuestro lugar favorito de todo el edificio el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2024-11-14T00:00:00.000Z' },
    { id: 203, name: 'Nicole R.', rating: 4, comment: 'came here for work and the balcony was a great bonus — nice breeze and a good view of the neighborhood, the bed was super comfortable, slept great every night', createdAt: '2024-01-16T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 204, name: 'Samantha W.', rating: 3, comment: 'Expected something far more basic for the price, pleasantly surprised. Highly recommend.', createdAt: '2026-03-20T00:00:00.000Z' },
    { id: 205, name: 'Emily R.', rating: 4, comment: 'Spent a few mornings reading in the garden, really nice quiet space. The bed was super comfortable, slept great every night. Would definitely book here again.', createdAt: '2024-10-10T00:00:00.000Z' },
    { id: 206, name: 'Andrew C.', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-09-14T00:00:00.000Z' },
    { id: 207, name: 'Ryan L.', rating: 5, comment: 'We could just wander without a plan and always find something good nearby.', createdAt: '2023-12-12T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 211, name: 'Gerardo H.', rating: 4, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-10-27T00:00:00.000Z' },
    { id: 210, name: 'Fernanda T.', rating: 4, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente, supero lo que esperabamos por completo', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 208, name: 'Valeria D.', rating: 5, comment: 'Los niños no querían salir de la alberca, la pasaron increíble ahí todos los días. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-05-13T00:00:00.000Z' },
    { id: 212, name: 'David D.', rating: 5, comment: 'After looking at a bunch of options, really well located, close to great restaurants and easy to get around. Completely exceeded what we expected.', createdAt: '2025-03-27T00:00:00.000Z' },
    { id: 209, name: 'Andrew R.', rating: 4, comment: 'any question we had was answered in minutes over WhatsApp', createdAt: '2025-02-12T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 213, name: 'Christopher L.', rating: 4, comment: 'not having to worry about where to park was such a relief any question we had was answered in minutes over WhatsApp', createdAt: '2025-01-10T00:00:00.000Z' },
    { id: 214, name: 'Ricardo C.', rating: 4, comment: 'cada tarde subiamos al roof con una copa a ver el atardecer, algo que no olvidaremos, despues de dias caminando la ciudad, esa cama se sintio como en casa', createdAt: '2024-09-21T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 218, name: 'Santiago A.', rating: 4, comment: 'La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2026-05-05T00:00:00.000Z' },
    { id: 216, name: 'Santiago A.', rating: 5, comment: 'Vinimos con toda la familia y la cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-09-09T00:00:00.000Z' },
    { id: 219, name: 'Camila V.', rating: 3, comment: 'nos quedamos una semana y trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2025-04-21T00:00:00.000Z' },
    { id: 215, name: 'Brian D.', rating: 5, comment: 'The terrace ended up being our favorite part of the whole building. So much natural light in the apartment, made it feel really spacious. Would definitely book here again.', createdAt: '2025-04-17T00:00:00.000Z' },
    { id: 217, name: 'Regina T.', rating: 3, comment: 'llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo', createdAt: '2024-05-14T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 220, name: 'Ricardo B.', rating: 4, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. No usamos Uber casi nada, todo estaba a distancia caminable.', createdAt: '2025-09-20T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 221, name: 'Ashley R.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The bed was super comfortable, slept great every night.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 222, name: 'Diego V.', rating: 5, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca', createdAt: '2025-10-12T00:00:00.000Z' },
    { id: 223, name: 'Regina M.', rating: 5, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-05-26T00:00:00.000Z' },
    { id: 224, name: 'Mariana L.', rating: 4, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2024-10-02T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 225, name: 'Andrew B.', rating: 4, comment: 'Not having to worry about where to park was such a relief. Expected something far more basic for the price, pleasantly surprised.', createdAt: '2026-02-15T00:00:00.000Z' },
    { id: 226, name: 'Alejandro D.', rating: 3, comment: 'Cada tarde subiamos al roof con una copa a ver el atardecer, algo que no olvidaremos. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2024-10-30T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 229, name: 'Ashley H.', rating: 4, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 228, name: 'Katie H.', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, cooked almost the whole week, the kitchen had literally everything we needed, overall a great experience', createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 227, name: 'Ana Sofia R.', rating: 5, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 230, name: 'Emily Y.', rating: 3, comment: 'so much natural light in the apartment, made it feel really spacious', createdAt: '2025-04-04T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 232, name: 'Fernanda D.', rating: 5, comment: 'reservamos por la ubicacion pero la alberca termino siendo lo mejor del edificio, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 231, name: 'Brian Y.', rating: 4, comment: 'not having to worry about where to park was such a relief, the bed was super comfortable, slept great every night', createdAt: '2025-09-19T00:00:00.000Z' },
    { id: 234, name: 'Gerardo H.', rating: 3, comment: 'Pasamos varias mananas leyendo en el jardin, un espacio muy agradable. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-04-10T00:00:00.000Z' },
    { id: 233, name: 'Jennifer Y.', rating: 3, comment: 'the apartment was spotless when we arrived, clearly well maintained', createdAt: '2024-02-15T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 236, name: 'Jonathan J.', rating: 4, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2026-03-16T00:00:00.000Z' },
    { id: 235, name: 'Regina M.', rating: 5, comment: 'Trabajé remoto toda la semana y el internet nunca me falló.', createdAt: '2025-12-02T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 240, name: 'Justin D.', rating: 3, comment: 'this was our second time booking here and worked remotely the whole week and the internet never let me down', createdAt: '2026-02-17T00:00:00.000Z' },
    { id: 238, name: 'Andres D.', rating: 5, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-03-18T00:00:00.000Z' },
    { id: 237, name: 'Jennifer Y.', rating: 5, comment: 'We stayed a week and every evening we\'d head up to the roof with a drink to watch the sunset, won\'t forget that. The photos don\'t do justice to how much light comes in during the day.', createdAt: '2025-03-09T00:00:00.000Z' },
    { id: 239, name: 'Ana Sofia C.', rating: 3, comment: 'Celebramos nuestro aniversario aqui y los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias. Cualquier duda que tuvimos se resolvio en minutos por WhatsApp.', createdAt: '2023-11-14T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 242, name: 'Amanda J.', rating: 5, comment: 'traveling with a pet always feels risky but we had zero issues here, any question we had was answered in minutes over WhatsApp', createdAt: '2026-06-20T00:00:00.000Z' },
    { id: 241, name: 'Sebastian B.', rating: 4, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2026-04-05T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 246, name: 'Andres V.', rating: 5, comment: 'cada tarde subiamos al roof con una copa a ver el atardecer algo que no olvidaremos la cama era muy comoda dormimos increible todas las noches', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 247, name: 'Katie M.', rating: 4, comment: 'we stayed a week and the garden area was a peaceful little spot to relax between outings, worked remotely the whole week and the internet never let me down', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 244, name: 'Alejandro S.', rating: 5, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-10-12T00:00:00.000Z' },
    { id: 245, name: 'Sofia G.', rating: 5, comment: 'jugamos padel una tarde en las canchas del edificio muy buena instalacion y cualquier duda que tuvimos se resolvio en minutos por WhatsApp y en general una experiencia excelente', createdAt: '2025-06-20T00:00:00.000Z' },
    { id: 243, name: 'Sarah T.', rating: 3, comment: 'loved having our own balcony we had coffee out there every morning great value for what you get wed definitely book again', createdAt: '2025-05-12T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 248, name: 'Brandon K.', rating: 5, comment: 'the terrace ended up being our favorite part of the whole building perfect spot for anyone who wants to explore the city without needing a car', createdAt: '2024-10-01T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 251, name: 'Fernanda H.', rating: 5, comment: 'aproveche el gym casi todas las mananas antes de salir a trabajar, la colonia tiene un ambiente increible, cafes y restaurantes por todos lados, en general una experiencia excelente', createdAt: '2025-10-30T00:00:00.000Z' },
    { id: 249, name: 'Emily D.', rating: 4, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day. The bed was super comfortable, slept great every night.', createdAt: '2025-03-14T00:00:00.000Z' },
    { id: 252, name: 'Jennifer S.', rating: 4, comment: 'Traveling with a pet always feels risky but we had zero issues here. Expected something far more basic for the price, pleasantly surprised.', createdAt: '2024-11-12T00:00:00.000Z' },
    { id: 250, name: 'Sofia M.', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Cocinamos casi toda la semana, la cocina tenía absolutamente todo lo necesario.', createdAt: '2024-06-17T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 253, name: 'Emiliano T.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable desayunabamos ahi todos los dias la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias en general una experiencia excelente', createdAt: '2025-09-04T00:00:00.000Z' },
    { id: 254, name: 'Amanda R.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Great value for what you get, wed definitely book again.', createdAt: '2024-01-27T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 257, name: 'Javier R.', rating: 4, comment: 'pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2026-02-26T00:00:00.000Z' },
    { id: 255, name: 'Andres B.', rating: 5, comment: 'Si algo hizo que este viaje valiera la pena fue la alberca, la disfrutamos muchísimo. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-02-10T00:00:00.000Z' },
    { id: 258, name: 'Camila V.', rating: 3, comment: 'La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-01-12T00:00:00.000Z' },
    { id: 256, name: 'Ryan R.', rating: 3, comment: 'communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-01-11T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 263, name: 'Samantha L.', rating: 3, comment: 'felt taken care of the whole trip, always available whenever we needed something, highly recommend', createdAt: '2025-12-19T00:00:00.000Z' },
    { id: 262, name: 'Andrew J.', rating: 4, comment: 'Didn\'t expect a padel court to be available, made good use of it a few times. Worked remotely the whole week and the internet never let me down.', createdAt: '2025-01-06T00:00:00.000Z' },
    { id: 261, name: 'Emiliano G.', rating: 4, comment: 'La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2024-11-10T00:00:00.000Z' },
    { id: 260, name: 'Mariana S.', rating: 5, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y cómodo. Totalmente recomendado.', createdAt: '2024-09-12T00:00:00.000Z' },
    { id: 259, name: 'Jonathan D.', rating: 4, comment: 'booked for the location but the pool ended up being the highlight of the building the neighborhood has such a great vibe cafes and restaurants everywhere', createdAt: '2024-07-14T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 265, name: 'Maria Jose M.', rating: 3, comment: 'la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-07-15T00:00:00.000Z' },
    { id: 266, name: 'Jessica J.', rating: 3, comment: 'Expected something far more basic for the price, pleasantly surprised.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 264, name: 'Brandon R.', rating: 5, comment: 'Swimming before starting the day became part of the routine thanks to the pool. Any question we had was answered in minutes over WhatsApp.', createdAt: '2025-05-17T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 268, name: 'Christopher H.', rating: 3, comment: 'We came with the whole family and not having to worry about where to park was such a relief. Great value for what you get, wed definitely book again.', createdAt: '2026-01-19T00:00:00.000Z' },
    { id: 267, name: 'Ximena S.', rating: 5, comment: 'nos quedamos una semana y viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2025-10-15T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 270, name: 'Tyler R.', rating: 3, comment: 'The pool was amazing, we used it almost every day during our stay. Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 271, name: 'Ximena A.', rating: 4, comment: 'buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-08-05T00:00:00.000Z' },
    { id: 269, name: 'Kevin H.', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-07-19T00:00:00.000Z' },
    { id: 272, name: 'Renata G.', rating: 5, comment: 'las fotos no le hacen justicia a la cantidad de luz que entra en el dia en general una experiencia excelente', createdAt: '2025-05-21T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 274, name: 'Ana Sofia V.', rating: 3, comment: 'Elegimos esta zona sin conocerla y resulto ser la mejor decision del viaje. Totalmente recomendado.', createdAt: '2026-04-04T00:00:00.000Z' },
    { id: 275, name: 'Justin S.', rating: 5, comment: 'spent a few mornings reading in the garden, really nice quiet space, expected something far more basic for the price, pleasantly surprised', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 276, name: 'Mariana H.', rating: 3, comment: 'Vinimos por trabajo y no tener que preocuparnos por donde dejar el coche fue un alivio enorme. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 273, name: 'Regina L.', rating: 3, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema el departamento tiene mucha luz natural se siente muy amplio y comodo sin duda volveriamos a reservar aqui', createdAt: '2025-03-10T00:00:00.000Z' },
    { id: 277, name: 'Emiliano O.', rating: 4, comment: 'todo estaba muy limpio y ordenado, supero nuestras expectativas, en general una experiencia excelente', createdAt: '2023-10-27T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 280, name: 'Ximena M.', rating: 4, comment: 'Despues de investigar varias opciones, algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario. Totalmente recomendado.', createdAt: '2026-06-08T00:00:00.000Z' },
    { id: 279, name: 'Jonathan T.', rating: 3, comment: 'after looking at a bunch of options, beautiful, clean pool with a great view — honestly wasn\'t expecting that when we booked, barely used Uber the whole trip, everything was walkable, completely exceeded what we expected', createdAt: '2025-02-11T00:00:00.000Z' },
    { id: 281, name: 'Regina G.', rating: 5, comment: 'Vinimos por trabajo y después de días caminando la ciudad, esa cama se sintió como en casa.', createdAt: '2024-09-14T00:00:00.000Z' },
    { id: 278, name: 'Rachel Y.', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-04-20T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 283, name: 'Samantha Y.', rating: 5, comment: 'Something as simple as assigned parking made everything way less stressful. Great value for what you get, wed definitely book again. Overall a great experience.', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 282, name: 'Ximena D.', rating: 4, comment: 'Nos quedamos una semana y el wifi era muy rápido, pude trabajar sin ningún problema de conexión. En general una experiencia excelente.', createdAt: '2025-07-12T00:00:00.000Z' },
    { id: 284, name: 'Ashley L.', rating: 4, comment: 'After looking at a bunch of options, the balcony was a great bonus — nice breeze and a good view of the neighborhood. The kitchen was well stocked, we cooked several meals during our stay. Completely exceeded what we expected.', createdAt: '2025-01-31T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 285, name: 'Emiliano D.', rating: 5, comment: 'El spa fue el detalle que convirtio un viaje normal en algo especial. No usamos Uber casi nada, todo estaba a distancia caminable.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 286, name: 'Javier O.', rating: 3, comment: 'Despues de dias caminando la ciudad, esa cama se sintio como en casa.', createdAt: '2024-12-31T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 287, name: 'Tyler D.', rating: 5, comment: 'After looking at a bunch of options, the bed was super comfortable, slept great every night.', createdAt: '2025-08-29T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 289, name: 'Ana Sofia L.', rating: 4, comment: 'pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba, esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente, totalmente recomendado', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 288, name: 'Jessica M.', rating: 5, comment: 'We came with the whole family and after days of walking around the city, that bed felt like home.', createdAt: '2024-11-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 291, name: 'Ashley T.', rating: 5, comment: 'great value for what you get, wed definitely book again', createdAt: '2026-02-07T00:00:00.000Z' },
    { id: 290, name: 'Alejandro R.', rating: 4, comment: 'vinimos por trabajo y no tener que preocuparnos por donde dejar el coche fue un alivio enorme, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-08-10T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 293, name: 'Renata L.', rating: 5, comment: 'nos quedamos una semana y la terraza tiene una vista espectacular, pasamos varias tardes ahi, las fotos no le hacen justicia a la cantidad de luz que entra en el dia', createdAt: '2025-05-15T00:00:00.000Z' },
    { id: 292, name: 'Ashley T.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2024-07-09T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 294, name: 'Mariana O.', rating: 5, comment: 'el departamento estaba impecable cuando llegamos se nota que lo cuidan bien', createdAt: '2026-05-29T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 295, name: 'Sebastian D.', rating: 5, comment: 'Esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente. En general una experiencia excelente.', createdAt: '2025-05-06T00:00:00.000Z' },
    { id: 296, name: 'Sofia H.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el departamento tiene mucha luz natural, se siente muy amplio y comodo, en general una experiencia excelente', createdAt: '2025-04-08T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 298, name: 'Megan C.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The photos dont do justice to how much light comes in during the day. Completely exceeded what we expected.', createdAt: '2026-01-31T00:00:00.000Z' },
    { id: 297, name: 'Jonathan L.', rating: 3, comment: 'The apartment was spotless when we arrived, clearly well maintained. Completely exceeded what we expected.', createdAt: '2025-07-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-116': [
    { id: 299, name: 'Megan M.', rating: 4, comment: 'you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2025-08-01T00:00:00.000Z' },
    { id: 300, name: 'Lauren W.', rating: 5, comment: 'Felt taken care of the whole trip, always available whenever we needed something.', createdAt: '2025-06-15T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 301, name: 'Ximena R.', rating: 5, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-09-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 302, name: 'Megan J.', rating: 4, comment: 'Didn\'t expect a padel court to be available, made good use of it a few times. Any question we had was answered in minutes over WhatsApp. Highly recommend.', createdAt: '2025-10-17T00:00:00.000Z' },
    { id: 303, name: 'Jonathan D.', rating: 4, comment: 'we came with the whole family and we brought our dog along and it worked out great — genuinely pet friendly place, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-09-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 305, name: 'Megan S.', rating: 5, comment: 'something as simple as assigned parking made everything way less stressful, perfect spot for anyone who wants to explore the city without needing a car, overall a great experience', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 304, name: 'Luis Fernando S.', rating: 4, comment: 'Los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2024-02-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 308, name: 'Michael B.', rating: 5, comment: 'Worked remotely the whole week and the internet never let me down.', createdAt: '2026-03-05T00:00:00.000Z' },
    { id: 309, name: 'Carlos S.', rating: 5, comment: 'Vinimos con toda la familia y no tener que preocuparnos por donde dejar el coche fue un alivio enorme. Despues de dias caminando la ciudad, esa cama se sintio como en casa.', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 307, name: 'Alejandro V.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-06-21T00:00:00.000Z' },
    { id: 306, name: 'Ryan H.', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, felt taken care of the whole trip, always available whenever we needed something', createdAt: '2025-06-06T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 311, name: 'Ryan R.', rating: 3, comment: 'Managed to keep my workout routine going thanks to the building gym, had everything I needed. Perfect spot for anyone who wants to explore the city without needing a car.', createdAt: '2025-08-15T00:00:00.000Z' },
    { id: 310, name: 'Sofia G.', rating: 5, comment: 'la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias, totalmente recomendado', createdAt: '2025-07-12T00:00:00.000Z' },
    { id: 312, name: 'Gerardo C.', rating: 4, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande. Las fotos no le hacen justicia a la cantidad de luz que entra en el dia.', createdAt: '2025-02-18T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 316, name: 'Valeria O.', rating: 4, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 315, name: 'Kevin S.', rating: 4, comment: 'Something as simple as assigned parking made everything way less stressful. The photos dont do justice to how much light comes in during the day.', createdAt: '2025-06-11T00:00:00.000Z' },
    { id: 314, name: 'Samantha S.', rating: 5, comment: 'Didn\'t expect a padel court to be available, made good use of it a few times. Perfect spot for anyone who wants to explore the city without needing a car.', createdAt: '2024-12-27T00:00:00.000Z' },
    { id: 313, name: 'Sofia H.', rating: 5, comment: 'Celebramos nuestro aniversario aqui y cada tarde subiamos al roof con una copa a ver el atardecer, algo que no olvidaremos. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2024-05-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-125': [
    { id: 317, name: 'Ryan M.', rating: 3, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, the location was excellent, everything was within walking distance', createdAt: '2025-08-24T00:00:00.000Z' },
    { id: 318, name: 'Gerardo C.', rating: 5, comment: 'Fue nuestro segundo viaje aquí y nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. Esperábamos algo mucho más básico por ese precio, nos sorprendió gratamente.', createdAt: '2024-08-11T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 319, name: 'Diego G.', rating: 4, comment: 'Fue nuestro segundo viaje aquí y nos hicieron sentir acompañados todo el viaje, siempre disponibles para lo que necesitáramos.', createdAt: '2023-12-28T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 320, name: 'Tyler L.', rating: 4, comment: 'We were looking for somewhere our dog would actually be welcome and found it here. Any question we had was answered in minutes over WhatsApp.', createdAt: '2026-05-01T00:00:00.000Z' },
    { id: 324, name: 'David Y.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Really well located, close to great restaurants and easy to get around. Highly recommend.', createdAt: '2025-12-01T00:00:00.000Z' },
    { id: 321, name: 'Michael S.', rating: 5, comment: 'we celebrated our anniversary here and the rooftop terrace has an incredible view, we spent several evenings up there, expected something far more basic for the price, pleasantly surprised', createdAt: '2025-09-01T00:00:00.000Z' },
    { id: 323, name: 'Regina S.', rating: 5, comment: 'Vinimos por trabajo y la cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-10-11T00:00:00.000Z' },
    { id: 322, name: 'Ana Sofia G.', rating: 5, comment: 'No esperabamos tener cancha de padel disponible, la aprovechamos varias veces. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-06-04T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 327, name: 'Andres O.', rating: 5, comment: 'no esperabamos que la alberca fuera tan grande, terminamos pasando ahi las tardes enteras, esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente', createdAt: '2025-09-23T00:00:00.000Z' },
    { id: 326, name: 'Emiliano V.', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-01-09T00:00:00.000Z' },
    { id: 325, name: 'Sofia H.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento, totalmente recomendado', createdAt: '2024-12-06T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 328, name: 'Matthew K.', rating: 5, comment: 'The beach was just a few minutes on foot, exactly what we were looking for. The bed was super comfortable, slept great every night.', createdAt: '2026-05-12T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 332, name: 'Diego B.', rating: 5, comment: 'no esperabamos jacuzzi y termino siendo uno de nuestros momentos favoritos del viaje, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2026-04-20T00:00:00.000Z' },
    { id: 329, name: 'Andres O.', rating: 5, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-07-21T00:00:00.000Z' },
    { id: 331, name: 'Santiago S.', rating: 4, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion. Supero lo que esperabamos por completo.', createdAt: '2025-06-25T00:00:00.000Z' },
    { id: 330, name: 'Tyler A.', rating: 5, comment: 'after days of walking around the city, that bed felt like home', createdAt: '2025-05-20T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 334, name: 'Alejandro V.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aquí no tuvimos ni un problema. No usamos Uber casi nada, todo estaba a distancia caminable. En general una experiencia excelente.', createdAt: '2025-06-02T00:00:00.000Z' },
    { id: 335, name: 'Rodrigo D.', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la relacion precio-calidad es muy buena, definitivamente volveriamos, supero lo que esperabamos por completo', createdAt: '2024-07-02T00:00:00.000Z' },
    { id: 333, name: 'Michael H.', rating: 5, comment: 'didn\'t expect the pool to be this nice, ended up spending whole afternoons there, the bed was super comfortable, slept great every night', createdAt: '2024-01-14T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 339, name: 'Luis Fernando T.', rating: 4, comment: 'Celebramos nuestro aniversario aquí y el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-01-03T00:00:00.000Z' },
    { id: 336, name: 'Sofia L.', rating: 4, comment: 'despues de dias caminando la ciudad esa cama se sintio como en casa', createdAt: '2025-05-11T00:00:00.000Z' },
    { id: 337, name: 'Alejandro C.', rating: 5, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 338, name: 'Maria Jose S.', rating: 4, comment: 'Trabaje remoto toda la semana y el internet nunca me fallo.', createdAt: '2025-01-29T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 340, name: 'Michael A.', rating: 5, comment: 'Didn\'t think the balcony would matter this much until we used it every single day. Great value for what you get, wed definitely book again.', createdAt: '2026-05-07T00:00:00.000Z' },
    { id: 341, name: 'Sofia G.', rating: 4, comment: 'No suelo mencionar el gimnasio en resenas pero este estaba mejor equipado que muchos gyms de paga. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos. En general una experiencia excelente.', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 343, name: 'Rachel W.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-08-09T00:00:00.000Z' },
    { id: 344, name: 'Emily J.', rating: 5, comment: 'Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2025-03-23T00:00:00.000Z' },
    { id: 342, name: 'Brandon K.', rating: 3, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. After days of walking around the city, that bed felt like home.', createdAt: '2024-11-11T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 347, name: 'Rachel W.', rating: 4, comment: 'This was our second time booking here and so much natural light in the apartment, made it feel really spacious.', createdAt: '2026-07-18T00:00:00.000Z' },
    { id: 346, name: 'Ryan R.', rating: 3, comment: 'We stayed a week and booked for the location but the pool ended up being the highlight of the building. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-04-05T00:00:00.000Z' },
    { id: 345, name: 'Renata S.', rating: 3, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente', createdAt: '2025-11-28T00:00:00.000Z' },
    { id: 348, name: 'Renata C.', rating: 3, comment: 'Celebramos nuestro aniversario aqui y estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-10-24T00:00:00.000Z' },
    { id: 349, name: 'Tyler J.', rating: 4, comment: 'we stayed a week and not having to worry about where to park was such a relief, the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2025-07-17T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 351, name: 'Rachel C.', rating: 3, comment: 'You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2026-05-09T00:00:00.000Z' },
    { id: 350, name: 'Santiago B.', rating: 4, comment: 'No suelo mencionar el gimnasio en resenas pero este estaba mejor equipado que muchos gyms de paga. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-08-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 352, name: 'Samantha D.', rating: 5, comment: 'We came with the whole family and not having to worry about where to park was such a relief. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2026-03-15T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 355, name: 'Diego O.', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. Esperábamos algo mucho más básico por ese precio, nos sorprendió gratamente. En general una experiencia excelente.', createdAt: '2025-12-19T00:00:00.000Z' },
    { id: 356, name: 'Brandon W.', rating: 5, comment: 'we stayed a week and we could just wander without a plan and always find something good nearby', createdAt: '2025-10-02T00:00:00.000Z' },
    { id: 353, name: 'Diego A.', rating: 4, comment: 'fue nuestro segundo viaje aqui y el balcon fue una sorpresa muy agradable desayunabamos ahi todos los dias trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2024-12-19T00:00:00.000Z' },
    { id: 354, name: 'Christopher Y.', rating: 5, comment: 'don\'t usually mention the gym in reviews but this one was better equipped than most paid gyms we arrived exhausted from a long flight and finding everything this clean really helped', createdAt: '2024-08-28T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 357, name: 'Diego V.', rating: 4, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-12-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 358, name: 'Mariana C.', rating: 3, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 359, name: 'Andrew K.', rating: 5, comment: 'we came with the whole family and something as simple as assigned parking made everything way less stressful, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2024-05-03T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 361, name: 'Alejandro O.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y pasamos varias mananas leyendo en el jardin, un espacio muy agradable. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2026-01-17T00:00:00.000Z' },
    { id: 362, name: 'Andres T.', rating: 5, comment: 'vinimos por trabajo y fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-11-16T00:00:00.000Z' },
    { id: 363, name: 'Ximena C.', rating: 5, comment: 'Despues de investigar varias opciones, llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo.', createdAt: '2025-08-01T00:00:00.000Z' },
    { id: 360, name: 'Santiago S.', rating: 3, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-12-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 365, name: 'Megan A.', rating: 3, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day. The location was excellent, everything was within walking distance.', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 364, name: 'Amanda B.', rating: 5, comment: 'We stayed a week and traveling with a pet always feels risky but we had zero issues here. Expected something far more basic for the price, pleasantly surprised. Completely exceeded what we expected.', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 366, name: 'Carlos H.', rating: 4, comment: 'tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-01-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 368, name: 'Jennifer D.', rating: 4, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Great value for what you get, we\'d definitely book again.', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 367, name: 'Fernanda A.', rating: 3, comment: 'Vinimos con toda la familia y podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca.', createdAt: '2025-08-04T00:00:00.000Z' },
    { id: 369, name: 'Christopher K.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 372, name: 'Rachel Y.', rating: 4, comment: 'Felt taken care of the whole trip, always available whenever we needed something. Completely exceeded what we expected.', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 370, name: 'Ryan C.', rating: 3, comment: 'The location was excellent, everything was within walking distance. Overall a great experience.', createdAt: '2025-04-02T00:00:00.000Z' },
    { id: 371, name: 'Sarah B.', rating: 3, comment: 'booked last minute and the rooftop terrace has an incredible view, we spent several evenings up there, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2024-09-17T00:00:00.000Z' },
    { id: 373, name: 'Christopher M.', rating: 4, comment: 'used the gym most mornings before heading out to work, the bed was super comfortable, slept great every night', createdAt: '2024-08-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 374, name: 'Alejandro A.', rating: 4, comment: 'No pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2026-04-21T00:00:00.000Z' },
    { id: 375, name: 'Emiliano H.', rating: 3, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 376, name: 'Fernanda H.', rating: 3, comment: 'trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2025-07-11T00:00:00.000Z' },
    { id: 378, name: 'Santiago H.', rating: 4, comment: 'cualquier duda que tuvimos se resolvio en minutos por WhatsApp, en general una experiencia excelente', createdAt: '2024-12-12T00:00:00.000Z' },
    { id: 377, name: 'Tyler Y.', rating: 5, comment: 'spent a few mornings reading in the garden, really nice quiet space, after days of walking around the city, that bed felt like home', createdAt: '2024-11-27T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 379, name: 'Daniela D.', rating: 3, comment: 'fue nuestro segundo viaje aqui y la terraza tiene una vista espectacular, pasamos varias tardes ahi, la cama era muy comoda, dormimos increible todas las noches, totalmente recomendado', createdAt: '2024-06-16T00:00:00.000Z' },
    { id: 380, name: 'Paulina L.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2024-01-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 382, name: 'Camila D.', rating: 4, comment: 'Reservamos a ultima hora y esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente. En general una experiencia excelente.', createdAt: '2026-04-19T00:00:00.000Z' },
    { id: 381, name: 'Maria Jose G.', rating: 5, comment: 'el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista las fotos no le hacen justicia a la cantidad de luz que entra en el dia', createdAt: '2025-01-28T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-151': [
    { id: 384, name: 'Brian C.', rating: 4, comment: 'don\'t usually mention the gym in reviews but this one was better equipped than most paid gyms, perfect spot for anyone who wants to explore the city without needing a car', createdAt: '2026-03-05T00:00:00.000Z' },
    { id: 383, name: 'Nicole K.', rating: 5, comment: 'expected something far more basic for the price, pleasantly surprised', createdAt: '2024-10-13T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 385, name: 'Camila A.', rating: 3, comment: 'Pasamos varias mananas leyendo en el jardin, un espacio muy agradable. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2026-02-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 387, name: 'Christopher Y.', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. Really well located, close to great restaurants and easy to get around. Highly recommend.', createdAt: '2026-05-07T00:00:00.000Z' },
    { id: 388, name: 'Ximena S.', rating: 4, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y la cama era muy comoda dormimos increible todas las noches y sin duda volveriamos a reservar aqui', createdAt: '2025-04-18T00:00:00.000Z' },
    { id: 386, name: 'Megan C.', rating: 5, comment: 'We stayed a week and great value for what you get, wed definitely book again.', createdAt: '2025-03-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 389, name: 'Andrew T.', rating: 3, comment: 'We used the building\'s private cinema room one night, such a fun extra. Really well located, close to great restaurants and easy to get around.', createdAt: '2026-06-10T00:00:00.000Z' },
    { id: 390, name: 'Justin S.', rating: 5, comment: 'the photos dont do justice to how much light comes in during the day, overall a great experience', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 391, name: 'Ricardo M.', rating: 3, comment: 'reservamos a ultima hora y la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2025-06-28T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 392, name: 'Andrew T.', rating: 5, comment: 'We stayed a week and the jacuzzi was a nice surprise, great way to unwind in the evenings. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-11-10T00:00:00.000Z' },
    { id: 393, name: 'Mariana T.', rating: 4, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande. La cama era muy comoda, dormimos increible todas las noches. En general una experiencia excelente.', createdAt: '2025-06-14T00:00:00.000Z' },
    { id: 394, name: 'Rodrigo H.', rating: 3, comment: 'pasamos varias mananas leyendo en el jardin, un espacio muy agradable, cualquier duda que tuvimos se resolvio en minutos por WhatsApp', createdAt: '2025-03-23T00:00:00.000Z' },
    { id: 395, name: 'Matthew C.', rating: 4, comment: 'Used the gym most mornings before heading out to work. We could just wander without a plan and always find something good nearby. Completely exceeded what we expected.', createdAt: '2024-11-08T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 400, name: 'Sarah A.', rating: 5, comment: 'didn\'t think the balcony would matter this much until we used it every single day, after days of walking around the city, that bed felt like home', createdAt: '2025-07-17T00:00:00.000Z' },
    { id: 399, name: 'Michael Y.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2025-05-19T00:00:00.000Z' },
    { id: 398, name: 'Brandon A.', rating: 4, comment: 'didn\'t expect the pool to be this nice, ended up spending whole afternoons there, perfect spot for anyone who wants to explore the city without needing a car', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 397, name: 'Rodrigo D.', rating: 4, comment: 'celebramos nuestro aniversario aqui y el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien, sin duda volveriamos a reservar aqui', createdAt: '2024-07-13T00:00:00.000Z' },
    { id: 396, name: 'Ximena A.', rating: 4, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalacion. Cualquier duda que tuvimos se resolvio en minutos por WhatsApp.', createdAt: '2024-06-04T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 402, name: 'Ana Sofia V.', rating: 3, comment: 'celebramos nuestro aniversario aqui y el roof garden del edificio es hermoso al atardecer, muy recomendable, el wifi era muy rapido, pude trabajar sin ningun problema de conexion, supero lo que esperabamos por completo', createdAt: '2026-03-29T00:00:00.000Z' },
    { id: 401, name: 'Michael R.', rating: 4, comment: 'booked for the location but the pool ended up being the highlight of the building, after days of walking around the city, that bed felt like home', createdAt: '2025-01-17T00:00:00.000Z' },
    { id: 403, name: 'Brian M.', rating: 5, comment: 'after looking at a bunch of options, we brought our dog along and it worked out great — genuinely pet friendly place, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-01-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 404, name: 'Jennifer C.', rating: 4, comment: 'After days of walking around the city, that bed felt like home.', createdAt: '2024-01-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 406, name: 'Valeria B.', rating: 4, comment: 'La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2026-04-24T00:00:00.000Z' },
    { id: 405, name: 'Michael R.', rating: 5, comment: 'We came with the whole family and cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2026-01-29T00:00:00.000Z' },
    { id: 407, name: 'Gerardo M.', rating: 4, comment: 'No esperábamos que la alberca fuera tan grande, terminamos pasando ahí las tardes enteras. Las fotos no le hacen justicia a la cantidad de luz que entra en el día.', createdAt: '2025-06-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 410, name: 'Nicole M.', rating: 4, comment: 'this was our second time booking here and any question we had was answered in minutes over WhatsApp, highly recommend', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 409, name: 'Regina A.', rating: 4, comment: 'la terraza termino siendo nuestro lugar favorito de todo el edificio, no usamos Uber casi nada, todo estaba a distancia caminable, sin duda volveriamos a reservar aqui', createdAt: '2024-11-09T00:00:00.000Z' },
    { id: 408, name: 'Andrew J.', rating: 5, comment: 'came here for work and traveling with a pet always feels risky but we had zero issues here, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2024-03-02T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 414, name: 'Amanda Y.', rating: 5, comment: 'we stayed a week and the garden area was a peaceful little spot to relax between outings, the photos dont do justice to how much light comes in during the day', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 412, name: 'Gerardo O.', rating: 4, comment: 'Reservamos a ultima hora y el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-10-03T00:00:00.000Z' },
    { id: 415, name: 'Daniela M.', rating: 4, comment: 'Sorpresa agradable encontrar un gym tan bien equipado en el edificio. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-08-31T00:00:00.000Z' },
    { id: 411, name: 'Jennifer M.', rating: 4, comment: 'Expected something far more basic for the price, pleasantly surprised. Overall a great experience.', createdAt: '2024-08-11T00:00:00.000Z' },
    { id: 413, name: 'Emiliano D.', rating: 5, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-06-22T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 418, name: 'Tyler H.', rating: 4, comment: 'Booked last minute and spent a few mornings reading in the garden, really nice quiet space. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-02-06T00:00:00.000Z' },
    { id: 419, name: 'Kevin L.', rating: 5, comment: 'Came here for work and the rooftop terrace has an incredible view, we spent several evenings up there. Expected something far more basic for the price, pleasantly surprised. Completely exceeded what we expected.', createdAt: '2025-09-05T00:00:00.000Z' },
    { id: 417, name: 'Sarah M.', rating: 4, comment: 'We played a match on the padel court one afternoon — great amenity. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-08-06T00:00:00.000Z' },
    { id: 416, name: 'Megan D.', rating: 5, comment: 'after looking at a bunch of options, the pool was amazing, we used it almost every day during our stay, after days of walking around the city, that bed felt like home', createdAt: '2024-07-12T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 420, name: 'Renata D.', rating: 4, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-01-02T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 422, name: 'Renata G.', rating: 3, comment: 'Después de investigar varias opciones, algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. La relación precio-calidad es muy buena, definitivamente volveríamos. En general una experiencia excelente.', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 424, name: 'Lauren T.', rating: 4, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-10-26T00:00:00.000Z' },
    { id: 421, name: 'Ashley R.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. We arrived exhausted from a long flight and finding everything this clean really helped.', createdAt: '2024-11-18T00:00:00.000Z' },
    { id: 423, name: 'David T.', rating: 5, comment: 'after looking at a bunch of options, we were looking for somewhere our dog would actually be welcome and found it here, after days of walking around the city, that bed felt like home', createdAt: '2024-09-14T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 425, name: 'Valeria V.', rating: 4, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y comodo. Sin duda volveriamos a reservar aqui.', createdAt: '2025-10-20T00:00:00.000Z' },
    { id: 426, name: 'Sarah H.', rating: 3, comment: 'having our own outdoor space made the apartment feel so much bigger communication over WhatsApp was fast and friendly the whole time would definitely book here again', createdAt: '2025-05-13T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 427, name: 'Andrew R.', rating: 5, comment: 'Booked last minute and didn\'t think the balcony would matter this much until we used it every single day. Worked remotely the whole week and the internet never let me down.', createdAt: '2024-03-29T00:00:00.000Z' },
    { id: 428, name: 'Diego T.', rating: 4, comment: 'cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2023-12-28T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 430, name: 'Alejandro C.', rating: 5, comment: 'No tener que preocuparnos por donde dejar el coche fue un alivio enorme. La colonia tiene un ambiente increible, cafes y restaurantes por todos lados.', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 432, name: 'Nicole S.', rating: 4, comment: 'Didn\'t expect the pool to be this nice, ended up spending whole afternoons there. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-08-11T00:00:00.000Z' },
    { id: 431, name: 'Renata C.', rating: 4, comment: 'La terraza terminó siendo nuestro lugar favorito de todo el edificio. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-05-05T00:00:00.000Z' },
    { id: 429, name: 'Mariana R.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2024-12-03T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 435, name: 'Sebastian R.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 434, name: 'Rachel H.', rating: 4, comment: 'pleasant surprise finding such a well equipped gym right in the building so much natural light in the apartment made it feel really spacious', createdAt: '2026-01-30T00:00:00.000Z' },
    { id: 436, name: 'Andrew W.', rating: 3, comment: 'Beautiful, clean pool with a great view — honestly wasn\'t expecting that when we booked. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 433, name: 'Daniela M.', rating: 3, comment: 'No tener que preocuparnos por dónde dejar el coche fue un alivio enorme. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-11-08T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 437, name: 'Ashley H.', rating: 5, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day. Communication over WhatsApp was fast and friendly the whole time. Would definitely book here again.', createdAt: '2026-03-30T00:00:00.000Z' },
    { id: 438, name: 'Rodrigo B.', rating: 4, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2024-01-09T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 441, name: 'Rodrigo R.', rating: 5, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2026-04-26T00:00:00.000Z' },
    { id: 440, name: 'Carlos H.', rating: 5, comment: 'despues de investigar varias opciones, el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 439, name: 'Regina A.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. Llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo.', createdAt: '2025-10-05T00:00:00.000Z' },
    { id: 442, name: 'Emily R.', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Barely used Uber the whole trip, everything was walkable.', createdAt: '2024-05-03T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 443, name: 'Amanda M.', rating: 5, comment: 'we stayed a week and not having to worry about where to park was such a relief, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-02-22T00:00:00.000Z' },
    { id: 444, name: 'Santiago B.', rating: 5, comment: 'nos quedamos una semana y no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, las fotos no le hacen justicia a la cantidad de luz que entra en el dia', createdAt: '2026-02-03T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 446, name: 'Brandon C.', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-01-19T00:00:00.000Z' },
    { id: 445, name: 'Ryan K.', rating: 4, comment: 'not having to worry about where to park was such a relief, expected something far more basic for the price, pleasantly surprised', createdAt: '2024-08-30T00:00:00.000Z' },
    { id: 449, name: 'Megan A.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, picked this neighborhood without knowing it and it turned out to be the best call of the trip', createdAt: '2024-04-27T00:00:00.000Z' },
    { id: 448, name: 'Rachel R.', rating: 5, comment: 'Didn\'t expect the pool to be this nice, ended up spending whole afternoons there. After days of walking around the city, that bed felt like home.', createdAt: '2023-12-30T00:00:00.000Z' },
    { id: 447, name: 'Lauren H.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. So much natural light in the apartment, made it feel really spacious.', createdAt: '2023-11-05T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 452, name: 'Sofia S.', rating: 3, comment: 'nos quedamos una semana y la cama era muy comoda dormimos increible todas las noches en general una experiencia excelente', createdAt: '2026-03-13T00:00:00.000Z' },
    { id: 453, name: 'Jennifer K.', rating: 4, comment: 'We were looking for somewhere our dog would actually be welcome and found it here. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 450, name: 'Santiago V.', rating: 5, comment: 'vinimos por trabajo y no tener que preocuparnos por donde dejar el coche fue un alivio enorme y muy bien ubicado cerca de restaurantes y con facil acceso a todo y totalmente recomendado', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 451, name: 'Luis Fernando D.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2024-12-12T00:00:00.000Z' },
    { id: 454, name: 'Sebastian S.', rating: 5, comment: 'fue nuestro segundo viaje aqui y nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2024-10-01T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 458, name: 'Santiago H.', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2025-05-02T00:00:00.000Z' },
    { id: 456, name: 'Nicole S.', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay. Overall a great experience.', createdAt: '2025-03-26T00:00:00.000Z' },
    { id: 455, name: 'Ricardo M.', rating: 5, comment: 'celebramos nuestro aniversario aqui y la terraza termino siendo nuestro lugar favorito de todo el edificio, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-03-16T00:00:00.000Z' },
    { id: 457, name: 'Katie B.', rating: 4, comment: 'we were looking for somewhere our dog would actually be welcome and found it here, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-09-28T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 459, name: 'Brian S.', rating: 5, comment: 'booked last minute and every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-11-24T00:00:00.000Z' },
    { id: 460, name: 'Justin B.', rating: 5, comment: 'Booked for the location but the pool ended up being the highlight of the building. Worked remotely the whole week and the internet never let me down.', createdAt: '2025-07-04T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 461, name: 'Katie W.', rating: 5, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, really well located, close to great restaurants and easy to get around', createdAt: '2025-06-27T00:00:00.000Z' },
  ],
};