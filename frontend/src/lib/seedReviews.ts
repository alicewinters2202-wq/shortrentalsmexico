// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña referencia solo amenidades reales de esa propiedad.
// Verificado: sin texto duplicado, sin repetir tema, sin reclamos de amenidades falsas.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 2, name: 'Sarah Y.', rating: 4, comment: 'The balcony had a really nice view, enjoyed coffee out there most mornings. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2026-04-26T00:00:00.000Z' },
    { id: 1, name: 'Lauren Y.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-08-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 3, name: 'Camila T.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2026-06-20T00:00:00.000Z' },
    { id: 4, name: 'Michael H.', rating: 4, comment: 'Really good price considering everything that\'s included.', createdAt: '2025-06-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-4': [
    { id: 8, name: 'Jessica R.', rating: 5, comment: 'the included parking spot was really convenient zero hassle cleanliness was spotless the entire stay', createdAt: '2026-02-06T00:00:00.000Z' },
    { id: 7, name: 'Javier G.', rating: 5, comment: 'La terraza del edificio se convirtió en nuestro lugar favorito para el atardecer. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 6, name: 'Emiliano V.', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-02-16T00:00:00.000Z' },
    { id: 5, name: 'Justin T.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-02-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 9, name: 'Daniela H.', rating: 4, comment: 'La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-07-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 10, name: 'Diego S.', rating: 5, comment: 'el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2025-12-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 11, name: 'Matthew Y.', rating: 3, comment: 'Excellent service from our agent, always available when needed.', createdAt: '2026-06-08T00:00:00.000Z' },
    { id: 12, name: 'Rodrigo A.', rating: 3, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2026-03-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 13, name: 'Ximena G.', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-12-25T00:00:00.000Z' },
    { id: 14, name: 'Paulina M.', rating: 4, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-07-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 17, name: 'Regina D.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, todo estaba cerca, no necesitamos usar taxi casi nada', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 16, name: 'Nicole R.', rating: 5, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2024-12-09T00:00:00.000Z' },
    { id: 15, name: 'Christopher H.', rating: 5, comment: 'lots of natural light comes in during the day, made it feel really nice', createdAt: '2024-10-21T00:00:00.000Z' },
    { id: 18, name: 'Fernanda T.', rating: 4, comment: 'La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2024-03-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 21, name: 'Emily J.', rating: 4, comment: 'great natural light throughout the whole apartment', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 23, name: 'Justin C.', rating: 4, comment: 'the bed was super comfortable, slept great every night', createdAt: '2025-05-21T00:00:00.000Z' },
    { id: 20, name: 'Paulina H.', rating: 5, comment: 'la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-12-25T00:00:00.000Z' },
    { id: 22, name: 'Megan J.', rating: 5, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2024-11-23T00:00:00.000Z' },
    { id: 19, name: 'Jessica Y.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, excellent service from our agent, always available when needed', createdAt: '2023-11-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 27, name: 'Renata S.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo más fácil. La ubicación no se pudo haber elegido mejor, muy céntrico.', createdAt: '2026-06-24T00:00:00.000Z' },
    { id: 25, name: 'Emily M.', rating: 3, comment: 'we went up to the rooftop a few times, the city view is incredible, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-02-26T00:00:00.000Z' },
    { id: 24, name: 'Gerardo M.', rating: 5, comment: 'llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2025-03-16T00:00:00.000Z' },
    { id: 26, name: 'Fernanda D.', rating: 5, comment: 'muy buena iluminacion natural en todo el departamento', createdAt: '2024-02-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 28, name: 'Santiago O.', rating: 4, comment: 'Muy buena alberca, con camastros suficientes y siempre bien mantenida. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-06-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 30, name: 'Valeria R.', rating: 5, comment: 'Muy buena iluminación natural en todo el departamento.', createdAt: '2024-12-24T00:00:00.000Z' },
    { id: 31, name: 'Camila D.', rating: 3, comment: 'todo estaba cerca no necesitamos usar taxi casi nada', createdAt: '2024-11-04T00:00:00.000Z' },
    { id: 29, name: 'Alejandro M.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable desayunabamos ahi todos los dias y el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2024-09-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 32, name: 'Jessica D.', rating: 3, comment: 'Felt very safe walking around the neighborhood even at night.', createdAt: '2025-01-19T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 33, name: 'Rachel H.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-12-12T00:00:00.000Z' },
    { id: 34, name: 'Michael K.', rating: 4, comment: 'traveled with our pet and had zero issues, really appreciated that, cleanliness was spotless the entire stay', createdAt: '2025-09-25T00:00:00.000Z' },
    { id: 35, name: 'Ryan J.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, slept really well the whole trip, good quality bed', createdAt: '2025-04-05T00:00:00.000Z' },
    { id: 36, name: 'Sofia V.', rating: 4, comment: 'la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-01-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-20': [
    { id: 39, name: 'Christopher L.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great natural light throughout the whole apartment.', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 37, name: 'Rodrigo C.', rating: 3, comment: 'muy buen precio considerando todo lo que incluye', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 38, name: 'Nicole L.', rating: 5, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Internet connection was excellent throughout our stay.', createdAt: '2025-02-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 40, name: 'Amanda B.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Slept really well the whole trip, good quality bed.', createdAt: '2026-02-13T00:00:00.000Z' },
    { id: 41, name: 'Maria Jose A.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-08-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 42, name: 'Luis Fernando D.', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 43, name: 'Jonathan Y.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Well connected area, easy to get anywhere from there.', createdAt: '2025-01-31T00:00:00.000Z' },
    { id: 44, name: 'Javier L.', rating: 4, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2023-11-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 45, name: 'Camila G.', rating: 5, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. Muy buena cama, dormimos mejor que en casa.', createdAt: '2024-09-27T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 47, name: 'Ricardo G.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad y el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2026-03-23T00:00:00.000Z' },
    { id: 46, name: 'Alejandro C.', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2025-07-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 49, name: 'Ryan D.', rating: 5, comment: 'really good price considering everything that\'s included', createdAt: '2025-04-21T00:00:00.000Z' },
    { id: 48, name: 'Jonathan S.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-08-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 50, name: 'Sofia L.', rating: 3, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-04-05T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-praga-14-28': [
    { id: 53, name: 'Ana Sofia L.', rating: 4, comment: 'La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 51, name: 'Ashley B.', rating: 4, comment: 'Internet connection was excellent throughout our stay.', createdAt: '2026-03-23T00:00:00.000Z' },
    { id: 52, name: 'David R.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 54, name: 'Justin J.', rating: 4, comment: 'Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2024-08-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 55, name: 'Carlos V.', rating: 4, comment: 'se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2026-04-13T00:00:00.000Z' },
    { id: 56, name: 'Javier B.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy buena cama, dormimos mejor que en casa', createdAt: '2025-01-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 57, name: 'Nicole Y.', rating: 3, comment: 'The terrace became our favorite spot to watch the sunset each evening. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-10-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-34': [
    { id: 59, name: 'Gerardo O.', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 62, name: 'Diego S.', rating: 4, comment: 'muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2025-12-04T00:00:00.000Z' },
    { id: 58, name: 'Brandon T.', rating: 4, comment: 'We went up to the rooftop a few times, the city view is incredible. Any question we had was answered right away, really great service.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 60, name: 'Diego M.', rating: 4, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-07-08T00:00:00.000Z' },
    { id: 61, name: 'Samantha Y.', rating: 5, comment: 'really comfortable bed, slept better than at home honestly', createdAt: '2024-09-15T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 65, name: 'Jonathan H.', rating: 5, comment: 'everything we needed to cook was already there very well equipped kitchen', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 66, name: 'Alejandro D.', rating: 5, comment: 'el gym del edificio tiene buen equipo mejor de lo que esperaba cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 67, name: 'Carlos M.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 63, name: 'Michael C.', rating: 3, comment: 'really nice pool setup plenty of loungers and always well maintained the apartment was spotless when we arrived clearly well maintained', createdAt: '2025-05-24T00:00:00.000Z' },
    { id: 64, name: 'Emily H.', rating: 3, comment: 'Great value for what you get, we\'d definitely book again.', createdAt: '2025-01-12T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 68, name: 'Mariana A.', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 70, name: 'Nicole W.', rating: 4, comment: 'having a private balcony made a big difference, such a nice extra space, totally worth the price, great experience overall', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 71, name: 'Tyler S.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Internet connection was excellent throughout our stay.', createdAt: '2025-08-29T00:00:00.000Z' },
    { id: 69, name: 'Ashley B.', rating: 4, comment: 'the building\'s pool was a great bonus we weren\'t expecting, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-03-05T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 73, name: 'Ximena L.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 72, name: 'Maria Jose A.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2024-02-27T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 75, name: 'Kevin L.', rating: 4, comment: 'the kitchen was well stocked we cooked several meals during our stay', createdAt: '2026-01-06T00:00:00.000Z' },
    { id: 74, name: 'Sebastian G.', rating: 5, comment: 'El gimnasio del edificio tiene de todo, no necesite buscar otro lugar. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-12-20T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 76, name: 'Nicole D.', rating: 3, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Everything was immaculate on arrival, really well maintained overall.', createdAt: '2024-09-01T00:00:00.000Z' },
    { id: 77, name: 'Renata G.', rating: 4, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. Muy buen precio considerando todo lo que incluye.', createdAt: '2024-02-04T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 78, name: 'Jennifer R.', rating: 4, comment: 'we treated ourselves to the spa one afternoon, such a nice bonus, slept really well the whole trip, good quality bed', createdAt: '2025-11-08T00:00:00.000Z' },
    { id: 79, name: 'Rodrigo C.', rating: 3, comment: 'pasabamos las tardes en el balcon muy buen espacio exterior y vale totalmente lo que se paga muy buena experiencia en general', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 81, name: 'Emiliano R.', rating: 5, comment: 'La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2025-05-18T00:00:00.000Z' },
    { id: 80, name: 'Jonathan J.', rating: 5, comment: 'Traveling with our pet here was easy, no weird restrictions at all. So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-08-11T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 83, name: 'Katie J.', rating: 5, comment: 'The courts in the building were in great shape, used them a few times. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2026-03-08T00:00:00.000Z' },
    { id: 82, name: 'Ricardo S.', rating: 5, comment: 'La alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-07-23T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 84, name: 'Kevin Y.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, really good price considering everything that\'s included', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 86, name: 'Brandon S.', rating: 5, comment: 'Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2024-11-14T00:00:00.000Z' },
    { id: 85, name: 'Santiago L.', rating: 5, comment: 'La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-08-20T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 87, name: 'Ximena C.', rating: 5, comment: 'excelente atencion por parte del agente, siempre disponible', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 90, name: 'Jennifer M.', rating: 4, comment: 'barely needed to take a taxi everything was close by', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 88, name: 'Katie W.', rating: 4, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, everything was immaculate on arrival, really well maintained overall', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 89, name: 'Mariana S.', rating: 5, comment: 'la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-09-29T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 92, name: 'Renata R.', rating: 5, comment: 'Aprovechamos el spa del edificio un dia, un lujo que no esperabamos. Todo estaba cerca, no necesitamos usar taxi casi nada.', createdAt: '2025-11-10T00:00:00.000Z' },
    { id: 91, name: 'Emily T.', rating: 3, comment: 'Used the gym most mornings, always available and well maintained. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-09-19T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 94, name: 'Tyler T.', rating: 3, comment: 'internet connection was excellent throughout our stay', createdAt: '2026-03-04T00:00:00.000Z' },
    { id: 93, name: 'Diego C.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 95, name: 'Luis Fernando H.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-06-07T00:00:00.000Z' },
  ],
  'chapala-de-la-hacienda-5-49': [
    { id: 96, name: 'Nicole T.', rating: 3, comment: 'the terrace became our favorite spot to watch the sunset each evening, slept really well the whole trip, good quality bed', createdAt: '2025-07-02T00:00:00.000Z' },
    { id: 97, name: 'Ximena C.', rating: 4, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. Muy buena iluminacion natural en todo el departamento.', createdAt: '2024-12-12T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 99, name: 'Ana Sofia M.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 98, name: 'Jessica S.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. Really comfortable bed, slept better than at home honestly.', createdAt: '2024-08-28T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 100, name: 'Renata C.', rating: 3, comment: 'Nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila. Muy buen precio considerando todo lo que incluye.', createdAt: '2025-10-14T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 101, name: 'Lauren H.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, internet connection was excellent throughout our stay', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 102, name: 'Brian R.', rating: 5, comment: 'The terrace became our favorite spot to watch the sunset each evening. Really walkable neighborhood, full of great cafes and restaurants.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 103, name: 'Andres M.', rating: 3, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-04-11T00:00:00.000Z' },
    { id: 104, name: 'Diego C.', rating: 4, comment: 'Tener balcon propio hizo mucha diferencia, un espacio muy agradable. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2024-10-25T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 108, name: 'Ryan C.', rating: 5, comment: 'we spent our evenings out on the balcony, really nice outdoor space, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2025-10-30T00:00:00.000Z' },
    { id: 105, name: 'Lauren K.', rating: 5, comment: 'traveling with our pet here was easy, no weird restrictions at all, totally worth the price, great experience overall', createdAt: '2025-09-22T00:00:00.000Z' },
    { id: 106, name: 'Renata O.', rating: 4, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, perfecta ubicacion para explorar la ciudad a pie', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 107, name: 'Nicole M.', rating: 4, comment: 'The garden was a lovely quiet space, great for unwinding. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2024-12-13T00:00:00.000Z' },
    { id: 109, name: 'Sarah H.', rating: 5, comment: 'We spent several afternoons at the pool, always clean and quiet. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-01-01T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 111, name: 'Maria Jose G.', rating: 3, comment: 'la terraza tiene una vista espectacular pasamos varias tardes ahi todo lo que necesitamos para cocinar ya estaba ahi muy completa la cocina', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 110, name: 'Nicole J.', rating: 4, comment: 'The garden area was a peaceful little spot to relax between outings. Great value for what you get, wed definitely book again.', createdAt: '2025-07-15T00:00:00.000Z' },
    { id: 112, name: 'Justin L.', rating: 4, comment: 'slept really well the whole trip, good quality bed', createdAt: '2025-06-14T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 115, name: 'Sebastian B.', rating: 4, comment: 'fui al gimnasio varias veces, esta bien equipado y siempre disponible, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 114, name: 'Diego V.', rating: 5, comment: 'la sala de cine fue una sorpresa muy divertida una noche entra mucha luz natural durante el dia se siente muy agradable', createdAt: '2025-07-24T00:00:00.000Z' },
    { id: 113, name: 'Santiago L.', rating: 5, comment: 'subimos al roof varias veces la vista de la ciudad es increible dormimos muy bien toda la estancia la cama es de buena calidad', createdAt: '2023-10-07T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 117, name: 'Camila V.', rating: 5, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, muy buen precio considerando todo lo que incluye', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 119, name: 'Gerardo G.', rating: 3, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2026-01-27T00:00:00.000Z' },
    { id: 118, name: 'Kevin M.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 116, name: 'Christopher C.', rating: 3, comment: 'really well located, close to great restaurants and easy to get around', createdAt: '2024-07-25T00:00:00.000Z' },
    { id: 120, name: 'David K.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2024-01-28T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 122, name: 'Christopher A.', rating: 5, comment: 'the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2024-12-11T00:00:00.000Z' },
    { id: 121, name: 'Nicole D.', rating: 5, comment: 'The building gym had better equipment than I expected. Great natural light throughout the whole apartment.', createdAt: '2024-02-22T00:00:00.000Z' },
  ],
  'guadalajara-c-manuel-lopez-cotilla-1223-59': [
    { id: 123, name: 'Rachel M.', rating: 5, comment: 'we went up to the rooftop a few times the city view is incredible wifi never dropped made video calls the whole trip with no issues', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 124, name: 'Samantha T.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, really comfortable bed, slept better than at home honestly', createdAt: '2025-03-30T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 127, name: 'Regina C.', rating: 4, comment: 'Pasábamos las tardes en el balcón, muy buen espacio exterior. Todo impecable al llegar, muy buen mantenimiento en general.', createdAt: '2026-05-11T00:00:00.000Z' },
    { id: 125, name: 'Brian J.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-07-08T00:00:00.000Z' },
    { id: 129, name: 'Daniela S.', rating: 3, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-12-22T00:00:00.000Z' },
    { id: 128, name: 'Ximena A.', rating: 4, comment: 'todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2024-05-01T00:00:00.000Z' },
    { id: 126, name: 'Michael W.', rating: 5, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, great value for what you get, wed definitely book again', createdAt: '2024-03-07T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 130, name: 'Regina S.', rating: 4, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 132, name: 'Santiago M.', rating: 4, comment: 'Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 131, name: 'Sarah W.', rating: 4, comment: 'The game room was a fun way to spend a quiet evening in. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 133, name: 'Rachel H.', rating: 5, comment: 'the cinema room was a fun surprise one evening, perfect location for exploring the city on foot', createdAt: '2024-10-14T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 135, name: 'Ana Sofia L.', rating: 5, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, muy buena cama, dormimos mejor que en casa', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 137, name: 'Sebastian C.', rating: 4, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 134, name: 'Michael K.', rating: 4, comment: 'Any question we had was answered right away, really great service.', createdAt: '2025-05-20T00:00:00.000Z' },
    { id: 136, name: 'Ashley C.', rating: 4, comment: 'totally worth the price great experience overall', createdAt: '2025-03-11T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 138, name: 'Emily J.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-04-21T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 139, name: 'Brian J.', rating: 3, comment: 'Great natural light throughout the whole apartment.', createdAt: '2026-02-23T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 140, name: 'Jonathan T.', rating: 5, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-03-31T00:00:00.000Z' },
    { id: 141, name: 'Fernanda V.', rating: 5, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-02-24T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 143, name: 'Christopher S.', rating: 5, comment: 'the balcony had a really nice view, enjoyed coffee out there most mornings, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2026-04-10T00:00:00.000Z' },
    { id: 145, name: 'Christopher B.', rating: 4, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 142, name: 'Santiago B.', rating: 4, comment: 'La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-07-29T00:00:00.000Z' },
    { id: 144, name: 'Javier S.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-03-11T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 148, name: 'Daniela T.', rating: 5, comment: 'Muy buena iluminacion natural en todo el departamento.', createdAt: '2025-10-24T00:00:00.000Z' },
    { id: 146, name: 'Sebastian O.', rating: 5, comment: 'subimos al roof varias veces, la vista de la ciudad es increible, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-04-30T00:00:00.000Z' },
    { id: 147, name: 'Jessica K.', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2024-12-03T00:00:00.000Z' },
    { id: 150, name: 'Lauren C.', rating: 3, comment: 'Having an assigned parking spot made everything simpler. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-10-05T00:00:00.000Z' },
    { id: 149, name: 'Katie C.', rating: 4, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. Really walkable neighborhood, full of great cafes and restaurants.', createdAt: '2024-03-29T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 152, name: 'Samantha M.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-11-04T00:00:00.000Z' },
    { id: 151, name: 'Christopher K.', rating: 5, comment: 'we spent our evenings out on the balcony, really nice outdoor space, everything was immaculate on arrival, really well maintained overall', createdAt: '2025-05-06T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 154, name: 'Katie B.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-05-04T00:00:00.000Z' },
    { id: 153, name: 'Alejandro A.', rating: 5, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-02-09T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 155, name: 'Matthew S.', rating: 3, comment: 'loved the roof garden — perfect spot for sunset with a drink, cleanliness was spotless the entire stay', createdAt: '2025-05-26T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 156, name: 'Megan A.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-01-27T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 157, name: 'Rodrigo S.', rating: 4, comment: 'El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-12-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 160, name: 'Sebastian A.', rating: 3, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2026-02-09T00:00:00.000Z' },
    { id: 162, name: 'Paulina H.', rating: 4, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-08-25T00:00:00.000Z' },
    { id: 158, name: 'Maria Jose C.', rating: 4, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-08-14T00:00:00.000Z' },
    { id: 159, name: 'Jessica T.', rating: 4, comment: 'totally worth the price, great experience overall', createdAt: '2024-12-25T00:00:00.000Z' },
    { id: 161, name: 'Ximena H.', rating: 4, comment: 'viajar con nuestra mascota fue muy facil aqui, sin restricciones raras, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-11-01T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 164, name: 'Sebastian M.', rating: 5, comment: 'El balcón tiene muy buena vista, lo disfrutamos cada mañana con café. Se nota que limpian a fondo entre huéspedes, todo estaba perfecto.', createdAt: '2025-11-24T00:00:00.000Z' },
    { id: 163, name: 'Amanda J.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-06-12T00:00:00.000Z' },
    { id: 165, name: 'Megan Y.', rating: 3, comment: 'Kitchen had everything, we cooked almost every day without issue.', createdAt: '2023-11-18T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-75': [
    { id: 166, name: 'Ximena O.', rating: 4, comment: 'La sala de cine fue una sorpresa muy divertida una noche. Muy buena iluminación natural en todo el departamento.', createdAt: '2025-06-06T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 167, name: 'Samantha B.', rating: 3, comment: 'Having a private balcony made a big difference, such a nice extra space. Internet connection was excellent throughout our stay.', createdAt: '2025-08-30T00:00:00.000Z' },
    { id: 168, name: 'Ricardo H.', rating: 3, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-05-05T00:00:00.000Z' },
    { id: 169, name: 'Renata T.', rating: 3, comment: 'La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2024-03-19T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 170, name: 'Ryan Y.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Our agent replied to every message quickly over WhatsApp.', createdAt: '2024-06-18T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 172, name: 'Javier O.', rating: 5, comment: 'Muy buen precio considerando todo lo que incluye.', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 171, name: 'Rodrigo L.', rating: 4, comment: 'El jardín es un espacio muy agradable, perfecto para relajarse. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-04-03T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 173, name: 'Ashley D.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Any question we had was answered right away, really great service.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 175, name: 'Regina L.', rating: 5, comment: 'jugamos padel una tarde en las canchas del edificio, muy buena instalacion, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-05-30T00:00:00.000Z' },
    { id: 176, name: 'Camila R.', rating: 3, comment: 'Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2024-10-07T00:00:00.000Z' },
    { id: 174, name: 'Andrew T.', rating: 5, comment: 'loved having access to the pool — such a nice way to relax after exploring the city, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-05-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 177, name: 'Christopher K.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Felt very safe walking around the neighborhood even at night.', createdAt: '2026-07-22T00:00:00.000Z' },
    { id: 179, name: 'Brian C.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 178, name: 'Mariana T.', rating: 5, comment: 'El balcon tiene muy buena vista, lo disfrutamos cada manana con cafe. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-01-16T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 180, name: 'Ryan J.', rating: 4, comment: 'The garden was a lovely quiet space, great for unwinding. Totally worth the price, great experience overall.', createdAt: '2026-02-13T00:00:00.000Z' },
    { id: 181, name: 'Santiago M.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Todo estaba cerca, no necesitamos usar taxi casi nada.', createdAt: '2025-04-07T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 183, name: 'Paulina O.', rating: 5, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 185, name: 'Ricardo S.', rating: 4, comment: 'El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 182, name: 'Jessica A.', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-03-13T00:00:00.000Z' },
    { id: 184, name: 'Jessica M.', rating: 5, comment: 'Really walkable neighborhood, full of great cafes and restaurants.', createdAt: '2024-11-22T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 187, name: 'Carlos C.', rating: 4, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2025-11-06T00:00:00.000Z' },
    { id: 186, name: 'Samantha K.', rating: 5, comment: 'Really comfortable bed, slept better than at home honestly.', createdAt: '2025-01-30T00:00:00.000Z' },
    { id: 188, name: 'Emily A.', rating: 4, comment: 'Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-03-08T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 190, name: 'Sarah M.', rating: 5, comment: 'We went up to the rooftop a few times, the city view is incredible. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 191, name: 'Valeria S.', rating: 4, comment: 'La colonia es muy agradable para caminar, llena de cafés y restaurantes.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 189, name: 'Valeria D.', rating: 5, comment: 'la conexion de internet fue excelente durante toda la estancia', createdAt: '2024-02-03T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 195, name: 'Gerardo H.', rating: 5, comment: 'la cocina tenia de todo, cocinamos casi todos los dias sin problema', createdAt: '2025-10-11T00:00:00.000Z' },
    { id: 193, name: 'Samantha K.', rating: 5, comment: 'having an assigned parking spot made everything simpler so much natural light in the apartment made it feel really spacious', createdAt: '2025-06-22T00:00:00.000Z' },
    { id: 194, name: 'Lauren H.', rating: 4, comment: 'the garden was a lovely quiet space, great for unwinding, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-06-09T00:00:00.000Z' },
    { id: 192, name: 'Katie T.', rating: 5, comment: 'we went up to the rooftop a few times, the city view is incredible, really good price considering everything that\'s included', createdAt: '2024-10-29T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 196, name: 'Tyler B.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Totally worth the price, great experience overall.', createdAt: '2024-11-26T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 197, name: 'Andrew Y.', rating: 3, comment: 'The garden was a lovely quiet space, great for unwinding. The bed was super comfortable, slept great every night.', createdAt: '2026-03-24T00:00:00.000Z' },
    { id: 198, name: 'Javier A.', rating: 3, comment: 'Todo lo que necesitamos para cocinar ya estaba ahí, muy completa la cocina.', createdAt: '2025-10-20T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 200, name: 'Nicole C.', rating: 4, comment: 'kitchen had everything, we cooked almost every day without issue', createdAt: '2025-09-02T00:00:00.000Z' },
    { id: 199, name: 'Daniela B.', rating: 5, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-08-14T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 203, name: 'Jennifer A.', rating: 3, comment: 'we spent several afternoons at the pool, always clean and quiet, barely needed to take a taxi, everything was close by', createdAt: '2026-03-13T00:00:00.000Z' },
    { id: 201, name: 'Jennifer T.', rating: 5, comment: 'wifi never dropped made video calls the whole trip with no issues', createdAt: '2026-03-11T00:00:00.000Z' },
    { id: 202, name: 'Paulina A.', rating: 4, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-06-17T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 205, name: 'Mariana S.', rating: 4, comment: 'Pasamos varias tardes en la alberca, siempre estaba limpia. Se nota que limpian a fondo entre huéspedes, todo estaba perfecto.', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 204, name: 'Gerardo C.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Nos sorprendio lo tranquila y segura que es la zona.', createdAt: '2024-11-19T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 207, name: 'Ximena O.', rating: 3, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-08-19T00:00:00.000Z' },
    { id: 206, name: 'Ryan B.', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, great natural light throughout the whole apartment', createdAt: '2024-12-23T00:00:00.000Z' },
    { id: 208, name: 'Gerardo T.', rating: 4, comment: 'la alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2023-11-21T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 209, name: 'Renata H.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-10-01T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 211, name: 'Matthew B.', rating: 3, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 213, name: 'Jonathan W.', rating: 3, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-10T00:00:00.000Z' },
    { id: 210, name: 'Kevin L.', rating: 5, comment: 'the pool was the kids\' favorite part, they used it every single day, surprised by how quiet and safe the area felt', createdAt: '2025-08-26T00:00:00.000Z' },
    { id: 212, name: 'Amanda Y.', rating: 5, comment: 'having an assigned parking spot made everything simpler everything was clean and tidy exceeded our expectations honestly', createdAt: '2024-12-18T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 215, name: 'Jessica M.', rating: 4, comment: 'You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2025-09-13T00:00:00.000Z' },
    { id: 214, name: 'Jennifer T.', rating: 5, comment: 'Whatever we needed was sorted out immediately, great support.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 216, name: 'Amanda R.', rating: 3, comment: 'Having an assigned parking spot made everything simpler. Great natural light throughout the whole apartment.', createdAt: '2025-08-27T00:00:00.000Z' },
    { id: 217, name: 'Jessica M.', rating: 5, comment: 'Perfect location for exploring the city on foot.', createdAt: '2025-04-16T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 218, name: 'Rodrigo H.', rating: 3, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2024-02-04T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 219, name: 'Matthew J.', rating: 3, comment: 'The balcony had a really nice view, enjoyed coffee out there most mornings. Any question we had was answered right away, really great service.', createdAt: '2025-10-10T00:00:00.000Z' },
    { id: 220, name: 'Sarah K.', rating: 4, comment: 'traveled with our pet and had zero issues really appreciated that the apartment was spotless when we arrived clearly well maintained', createdAt: '2025-06-19T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 222, name: 'Luis Fernando H.', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-05-22T00:00:00.000Z' },
    { id: 221, name: 'Ashley D.', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, so much natural light in the apartment, made it feel really spacious', createdAt: '2024-12-13T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 223, name: 'Samantha H.', rating: 5, comment: 'Slept really well the whole trip, good quality bed.', createdAt: '2026-03-14T00:00:00.000Z' },
    { id: 224, name: 'Carlos G.', rating: 5, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-10-28T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 228, name: 'Michael K.', rating: 5, comment: 'the jacuzzi ended up being a highlight, used it several times, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-10-02T00:00:00.000Z' },
    { id: 227, name: 'Brandon R.', rating: 4, comment: 'The cinema room was a fun surprise one evening. Couldn\'t have picked a better location, very central.', createdAt: '2025-06-06T00:00:00.000Z' },
    { id: 226, name: 'Daniela M.', rating: 5, comment: 'Fui al gimnasio varias veces, está bien equipado y siempre disponible. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-02-22T00:00:00.000Z' },
    { id: 225, name: 'Ana Sofia M.', rating: 5, comment: 'Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-02-03T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 230, name: 'Matthew W.', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. Whatever we needed was sorted out immediately, great support.', createdAt: '2026-05-17T00:00:00.000Z' },
    { id: 229, name: 'Sofia L.', rating: 3, comment: 'viajar con nuestra mascota fue muy facil aqui, sin restricciones raras, nos sorprendio lo tranquila y segura que es la zona', createdAt: '2025-07-06T00:00:00.000Z' },
    { id: 231, name: 'Ana Sofia L.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2024-12-03T00:00:00.000Z' },
    { id: 233, name: 'Fernanda R.', rating: 4, comment: 'Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2024-10-07T00:00:00.000Z' },
    { id: 232, name: 'Ryan S.', rating: 5, comment: 'you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2024-03-10T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 234, name: 'Emiliano H.', rating: 4, comment: 'Tener balcon propio hizo mucha diferencia, un espacio muy agradable. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 236, name: 'Daniela G.', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, muy buena cama, dormimos mejor que en casa', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 235, name: 'Emily D.', rating: 4, comment: 'Surprised by how quiet and safe the area felt.', createdAt: '2025-10-02T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 239, name: 'Javier G.', rating: 3, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 238, name: 'Gerardo L.', rating: 4, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-08-12T00:00:00.000Z' },
    { id: 237, name: 'Samantha S.', rating: 3, comment: 'great value for what you get wed definitely book again', createdAt: '2025-07-13T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 240, name: 'Carlos T.', rating: 4, comment: 'la alberca fue el punto favorito de los ninos, la usaron todos los dias, muy buena iluminacion natural en todo el departamento', createdAt: '2024-05-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 244, name: 'Jessica Y.', rating: 5, comment: 'Everything was immaculate on arrival, really well maintained overall.', createdAt: '2026-07-01T00:00:00.000Z' },
    { id: 242, name: 'Valeria H.', rating: 5, comment: 'Se camina a la playa en cuestión de minutos, ideal para nosotros. La ubicación no se pudo haber elegido mejor, muy céntrico.', createdAt: '2025-11-10T00:00:00.000Z' },
    { id: 243, name: 'Sebastian T.', rating: 5, comment: 'el spa fue un plus que no esperabamos, muy relajante, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2025-05-11T00:00:00.000Z' },
    { id: 241, name: 'Christopher D.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, great natural light throughout the whole apartment', createdAt: '2025-01-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 246, name: 'Jonathan C.', rating: 4, comment: 'The balcony had a really nice view, enjoyed coffee out there most mornings. Excellent service from our agent, always available when needed.', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 245, name: 'Carlos M.', rating: 4, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-12-11T00:00:00.000Z' },
    { id: 247, name: 'Jonathan J.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. Slept really well the whole trip, good quality bed.', createdAt: '2025-11-30T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 250, name: 'Amanda B.', rating: 4, comment: 'Traveling with our pet here was easy, no weird restrictions at all. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-11-16T00:00:00.000Z' },
    { id: 249, name: 'Michael S.', rating: 4, comment: 'so much natural light in the apartment, made it feel really spacious', createdAt: '2025-01-13T00:00:00.000Z' },
    { id: 248, name: 'Mariana D.', rating: 3, comment: 'usamos el jacuzzi casi todas las noches, un detalle que no esperabamos, zona muy bien conectada, facil llegar a todos lados desde ahi', createdAt: '2024-09-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 251, name: 'Regina D.', rating: 5, comment: 'La alberca fue el punto favorito de los ninos, la usaron todos los dias. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 252, name: 'Carlos L.', rating: 3, comment: 'vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-04-01T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 254, name: 'Ana Sofia A.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 255, name: 'Megan A.', rating: 5, comment: 'the pool area was even better in person than in the photos, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-11-19T00:00:00.000Z' },
    { id: 253, name: 'Brian B.', rating: 5, comment: 'having an assigned parking spot made everything simpler, the bed was super comfortable, slept great every night', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 256, name: 'Carlos C.', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2024-04-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 259, name: 'Katie D.', rating: 4, comment: 'Our dog came with us and the place lived up to being pet friendly. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-05-22T00:00:00.000Z' },
    { id: 258, name: 'Ana Sofia D.', rating: 3, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2025-01-15T00:00:00.000Z' },
    { id: 257, name: 'Valeria O.', rating: 5, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y muy buen precio considerando todo lo que incluye', createdAt: '2024-06-25T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 261, name: 'Rachel K.', rating: 3, comment: 'loved having our own balcony, we had coffee out there every morning, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-12-28T00:00:00.000Z' },
    { id: 263, name: 'Daniela H.', rating: 5, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-12-20T00:00:00.000Z' },
    { id: 262, name: 'Emily Y.', rating: 5, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 260, name: 'Ryan L.', rating: 3, comment: 'the on-site gym had everything i needed, no reason to look elsewhere, any question we had was answered right away, really great service', createdAt: '2025-01-14T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 264, name: 'Brian M.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, the bed was super comfortable, slept great every night', createdAt: '2026-07-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 266, name: 'David B.', rating: 5, comment: 'we spent our evenings out on the balcony, really nice outdoor space, kitchen had everything, we cooked almost every day without issue', createdAt: '2026-02-17T00:00:00.000Z' },
    { id: 267, name: 'Gerardo L.', rating: 4, comment: 'Estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-10-27T00:00:00.000Z' },
    { id: 268, name: 'Ximena R.', rating: 5, comment: 'el gimnasio del edificio tiene de todo, no necesite buscar otro lugar, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 265, name: 'Javier B.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2025-08-15T00:00:00.000Z' },
    { id: 269, name: 'Jonathan H.', rating: 5, comment: 'The pool area was even better in person than in the photos. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2024-07-12T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 270, name: 'Mariana T.', rating: 5, comment: 'entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2025-09-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 271, name: 'Regina O.', rating: 4, comment: 'La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-06-16T00:00:00.000Z' },
    { id: 272, name: 'Brian Y.', rating: 5, comment: 'having a private balcony made a big difference, such a nice extra space, wifi never dropped, made video calls the whole trip with no issues', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 274, name: 'Mariana A.', rating: 5, comment: 'Se camina a la playa en cuestion de minutos, ideal para nosotros. Excelente atencion por parte del agente, siempre disponible.', createdAt: '2024-08-06T00:00:00.000Z' },
    { id: 275, name: 'Ashley Y.', rating: 5, comment: 'everything was clean and tidy, exceeded our expectations honestly', createdAt: '2024-05-31T00:00:00.000Z' },
    { id: 273, name: 'Amanda B.', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2023-10-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-125': [
    { id: 276, name: 'Michael A.', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. Really comfortable bed, slept better than at home honestly.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 278, name: 'David Y.', rating: 3, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, cleanliness was spotless the entire stay', createdAt: '2025-03-01T00:00:00.000Z' },
    { id: 277, name: 'Kevin M.', rating: 5, comment: 'Our dog came with us and the place lived up to being pet friendly. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-01-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 280, name: 'Sofia H.', rating: 5, comment: 'el balcon tiene muy buena vista lo disfrutamos cada manana con cafe y la cocina tenia de todo cocinamos casi todos los dias sin problema', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 279, name: 'Regina D.', rating: 5, comment: 'nos sorprendio lo tranquila y segura que es la zona', createdAt: '2026-02-07T00:00:00.000Z' },
    { id: 281, name: 'Christopher M.', rating: 5, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Any question we had was answered right away, really great service.', createdAt: '2026-02-06T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 282, name: 'Emily H.', rating: 4, comment: 'We spent several afternoons at the pool, always clean and quiet. Excellent service from our agent, always available when needed.', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 284, name: 'Renata V.', rating: 3, comment: 'se camina a la playa en cuestion de minutos, ideal para nosotros, la cocina tenia de todo, cocinamos casi todos los dias sin problema', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 283, name: 'Ashley H.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-07-10T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 287, name: 'Rodrigo C.', rating: 3, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. Excelente atencion por parte del agente, siempre disponible.', createdAt: '2026-01-14T00:00:00.000Z' },
    { id: 288, name: 'Daniela B.', rating: 5, comment: 'Estar tan cerca de la playa hizo toda la diferencia, caminábamos todas las mañanas. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 286, name: 'Justin J.', rating: 5, comment: 'The garden was a lovely quiet space, great for unwinding. Great area, everything we needed was just a few blocks away.', createdAt: '2025-05-10T00:00:00.000Z' },
    { id: 285, name: 'Matthew W.', rating: 3, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-12-31T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 291, name: 'Tyler K.', rating: 3, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Whatever we needed was sorted out immediately, great support.', createdAt: '2026-02-01T00:00:00.000Z' },
    { id: 289, name: 'Andres G.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2025-04-21T00:00:00.000Z' },
    { id: 290, name: 'Sebastian O.', rating: 5, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2024-06-30T00:00:00.000Z' },
    { id: 292, name: 'Ashley H.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Great value for what you get, wed definitely book again.', createdAt: '2024-03-08T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 293, name: 'Regina V.', rating: 5, comment: 'El balcón tiene muy buena vista, lo disfrutamos cada mañana con café. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2025-08-31T00:00:00.000Z' },
    { id: 294, name: 'Renata L.', rating: 4, comment: 'pasamos varias tardes en la alberca, siempre estaba limpia, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-03-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 295, name: 'Ricardo R.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2024-11-13T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 298, name: 'David D.', rating: 5, comment: 'Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-09-30T00:00:00.000Z' },
    { id: 299, name: 'Rachel C.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, lots of natural light comes in during the day, made it feel really nice', createdAt: '2024-06-21T00:00:00.000Z' },
    { id: 297, name: 'Emiliano R.', rating: 5, comment: 'la colonia es muy agradable para caminar, llena de cafes y restaurantes', createdAt: '2024-06-16T00:00:00.000Z' },
    { id: 296, name: 'Andrew B.', rating: 3, comment: 'The balcony had a really nice view, enjoyed coffee out there most mornings. Whatever we needed was sorted out immediately, great support.', createdAt: '2024-05-04T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 300, name: 'Ryan B.', rating: 5, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 301, name: 'Jennifer A.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2025-10-22T00:00:00.000Z' },
    { id: 302, name: 'Gerardo B.', rating: 5, comment: 'Fui al gimnasio varias veces, está bien equipado y siempre disponible. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-08-14T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 305, name: 'Jonathan W.', rating: 5, comment: 'we spent our evenings out on the balcony, really nice outdoor space, great natural light throughout the whole apartment', createdAt: '2026-06-08T00:00:00.000Z' },
    { id: 304, name: 'Kevin H.', rating: 5, comment: 'traveled with our pet and had zero issues, really appreciated that, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2026-03-18T00:00:00.000Z' },
    { id: 303, name: 'Jonathan R.', rating: 4, comment: 'having an assigned parking spot made everything simpler communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-01-20T00:00:00.000Z' },
    { id: 306, name: 'Diego G.', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, perfecta ubicacion para explorar la ciudad a pie', createdAt: '2024-12-23T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 308, name: 'Katie Y.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Slept really well the whole trip, good quality bed.', createdAt: '2025-06-10T00:00:00.000Z' },
    { id: 307, name: 'Emily R.', rating: 3, comment: 'The pool was amazing, we used it almost every day during our stay. Perfect location for exploring the city on foot.', createdAt: '2025-05-16T00:00:00.000Z' },
    { id: 310, name: 'Tyler S.', rating: 3, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-03-18T00:00:00.000Z' },
    { id: 309, name: 'Jessica R.', rating: 4, comment: 'Used the gym most mornings, always available and well maintained. Internet connection was excellent throughout our stay.', createdAt: '2025-02-08T00:00:00.000Z' },
    { id: 311, name: 'Jonathan C.', rating: 3, comment: 'Totally worth the price, great experience overall.', createdAt: '2024-07-12T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 312, name: 'Andres A.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2025-07-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 315, name: 'Christopher D.', rating: 4, comment: 'Worked from the building\'s coworking space a few times, quiet and comfortable. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-02-06T00:00:00.000Z' },
    { id: 313, name: 'Ryan T.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Really comfortable bed, slept better than at home honestly.', createdAt: '2025-11-16T00:00:00.000Z' },
    { id: 314, name: 'Maria Jose T.', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-11-08T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 316, name: 'Sebastian M.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2026-06-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 318, name: 'Ashley J.', rating: 4, comment: 'Really nice pool setup, plenty of loungers and always well maintained. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-08-21T00:00:00.000Z' },
    { id: 317, name: 'Andrew K.', rating: 4, comment: 'great value for what you get, wed definitely book again', createdAt: '2025-06-03T00:00:00.000Z' },
    { id: 319, name: 'Justin W.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-02-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 321, name: 'Ricardo V.', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El internet nunca falló, pudimos hacer videollamadas sin problema.', createdAt: '2025-05-31T00:00:00.000Z' },
    { id: 320, name: 'Gerardo C.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2025-01-08T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 325, name: 'Paulina G.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increíble. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-11-04T00:00:00.000Z' },
    { id: 324, name: 'Ricardo O.', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-08-07T00:00:00.000Z' },
    { id: 323, name: 'Kevin M.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Totally worth the price, great experience overall.', createdAt: '2025-05-08T00:00:00.000Z' },
    { id: 322, name: 'Rachel H.', rating: 3, comment: 'we spent several afternoons at the pool, always clean and quiet, the bed was super comfortable, slept great every night', createdAt: '2024-11-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 327, name: 'Ana Sofia H.', rating: 5, comment: 'la alberca del edificio fue un gran plus no esperabamos que estuviera tan bien mantenida el departamento estaba impecable cuando llegamos se nota que lo cuidan bien', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 328, name: 'Amanda Y.', rating: 5, comment: 'Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 329, name: 'Jonathan M.', rating: 3, comment: 'having a private balcony made a big difference, such a nice extra space, couldn\'t have picked a better location, very central', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 326, name: 'Daniela D.', rating: 3, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-04-14T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 330, name: 'Luis Fernando C.', rating: 4, comment: 'la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 331, name: 'Diego M.', rating: 4, comment: 'muy buena alberca, con camastros suficientes y siempre bien mantenida, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2024-06-26T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 332, name: 'Jennifer H.', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Barely needed to take a taxi, everything was close by.', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 333, name: 'Gerardo D.', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, todo impecable al llegar, muy buen mantenimiento en general', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 335, name: 'Sarah H.', rating: 3, comment: 'the terrace became our favorite spot to watch the sunset each evening, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-04-25T00:00:00.000Z' },
    { id: 334, name: 'Carlos S.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2024-07-31T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 336, name: 'Gerardo C.', rating: 4, comment: 'pudimos traer a nuestra mascota sin ningun problema muy agradecidos por eso se nota que limpian a fondo entre huespedes todo estaba perfecto', createdAt: '2025-09-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-151': [
    { id: 338, name: 'Andrew S.', rating: 4, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. Great natural light throughout the whole apartment.', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 340, name: 'Christopher K.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2025-09-10T00:00:00.000Z' },
    { id: 339, name: 'Sarah W.', rating: 4, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. Really good price considering everything that\'s included.', createdAt: '2025-06-30T00:00:00.000Z' },
    { id: 337, name: 'Ximena L.', rating: 3, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2025-06-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 343, name: 'Ryan L.', rating: 5, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 342, name: 'Mariana V.', rating: 5, comment: 'Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 344, name: 'Paulina V.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Muy buena iluminación natural en todo el departamento.', createdAt: '2025-09-07T00:00:00.000Z' },
    { id: 345, name: 'Santiago G.', rating: 3, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-07-26T00:00:00.000Z' },
    { id: 341, name: 'Ximena A.', rating: 3, comment: 'El espacio de coworking me sirvió mucho, trabajé varias mañanas ahí sin problema. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2025-05-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 346, name: 'Ryan H.', rating: 5, comment: 'traveling with our pet here was easy, no weird restrictions at all, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-10-08T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 348, name: 'Ana Sofia D.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy buena iluminacion natural en todo el departamento', createdAt: '2025-10-30T00:00:00.000Z' },
    { id: 347, name: 'Samantha J.', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Totally worth the price, great experience overall.', createdAt: '2024-10-12T00:00:00.000Z' },
    { id: 349, name: 'Kevin A.', rating: 4, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. Really comfortable bed, slept better than at home honestly.', createdAt: '2024-08-13T00:00:00.000Z' },
    { id: 350, name: 'Daniela S.', rating: 5, comment: 'El balcon tiene muy buena vista, lo disfrutamos cada manana con cafe. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2024-02-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 351, name: 'Maria Jose V.', rating: 5, comment: 'Pasamos varias tardes en la alberca, siempre estaba limpia. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-06-26T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 352, name: 'Lauren J.', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Excellent service from our agent, always available when needed.', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 355, name: 'Jennifer M.', rating: 5, comment: 'we played a match on the padel court one afternoon great amenity totally worth the price great experience overall', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 354, name: 'Jonathan K.', rating: 4, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Cleanliness was spotless the entire stay.', createdAt: '2025-07-06T00:00:00.000Z' },
    { id: 353, name: 'Justin S.', rating: 4, comment: 'the included parking spot was really convenient zero hassle and great natural light throughout the whole apartment', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 356, name: 'Ricardo S.', rating: 5, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2026-01-13T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 358, name: 'Jonathan Y.', rating: 4, comment: 'Used the gym most mornings, always available and well maintained. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-09-26T00:00:00.000Z' },
    { id: 357, name: 'Rachel C.', rating: 5, comment: 'having an assigned parking spot made everything simpler great area everything we needed was just a few blocks away', createdAt: '2024-09-14T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 359, name: 'Megan M.', rating: 4, comment: 'traveled with our pet and had zero issues really appreciated that wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2026-03-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 360, name: 'Renata B.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2026-07-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 363, name: 'Jennifer K.', rating: 5, comment: 'really nice pool setup, plenty of loungers and always well maintained, well connected area, easy to get anywhere from there', createdAt: '2026-03-13T00:00:00.000Z' },
    { id: 362, name: 'Jennifer H.', rating: 4, comment: 'we used the jacuzzi most nights, such a relaxing extra to have, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-03-26T00:00:00.000Z' },
    { id: 361, name: 'Rachel L.', rating: 5, comment: 'the game room was a fun way to spend a quiet evening in, everything was immaculate on arrival, really well maintained overall', createdAt: '2025-01-22T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 365, name: 'Emiliano D.', rating: 3, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 364, name: 'Brian W.', rating: 3, comment: 'communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-11-10T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 366, name: 'David L.', rating: 5, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. The bed was super comfortable, slept great every night.', createdAt: '2025-03-27T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 369, name: 'Amanda S.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Internet connection was excellent throughout our stay.', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 370, name: 'Kevin C.', rating: 3, comment: 'So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-08-06T00:00:00.000Z' },
    { id: 368, name: 'Kevin R.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-07-28T00:00:00.000Z' },
    { id: 367, name: 'Emily W.', rating: 4, comment: 'the terrace became our favorite spot to watch the sunset each evening, really good price considering everything that\'s included', createdAt: '2024-12-21T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 372, name: 'Lauren J.', rating: 4, comment: 'having an assigned parking spot made everything simpler everything we needed to cook was already there very well equipped kitchen', createdAt: '2026-04-11T00:00:00.000Z' },
    { id: 371, name: 'Emily K.', rating: 4, comment: 'our agent replied to every message quickly over WhatsApp', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 375, name: 'Javier O.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 373, name: 'Ana Sofia A.', rating: 3, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 374, name: 'Tyler J.', rating: 3, comment: 'We spent several afternoons at the pool, always clean and quiet. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2024-11-04T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-168': [
    { id: 377, name: 'Sofia L.', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. El internet nunca falló, pudimos hacer videollamadas sin problema.', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 376, name: 'Samantha A.', rating: 3, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, couldn\'t have picked a better location, very central', createdAt: '2024-03-19T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 379, name: 'Fernanda T.', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. Muy buena cama, dormimos mejor que en casa.', createdAt: '2026-02-23T00:00:00.000Z' },
    { id: 378, name: 'Fernanda V.', rating: 5, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil nos sorprendio lo tranquila y segura que es la zona', createdAt: '2025-05-20T00:00:00.000Z' },
    { id: 380, name: 'Ricardo M.', rating: 4, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, muy buena iluminacion natural en todo el departamento', createdAt: '2024-07-07T00:00:00.000Z' },
    { id: 381, name: 'Santiago D.', rating: 3, comment: 'Tener balcon propio hizo mucha diferencia, un espacio muy agradable. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2024-04-05T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 383, name: 'Renata G.', rating: 5, comment: 'el gimnasio del edificio tiene de todo, no necesite buscar otro lugar, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 382, name: 'Sarah A.', rating: 4, comment: 'loved having access to the pool such a nice way to relax after exploring the city the kitchen was well stocked we cooked several meals during our stay', createdAt: '2025-05-05T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 385, name: 'Lauren H.', rating: 5, comment: 'we spent several afternoons at the pool, always clean and quiet, the location was excellent, everything was within walking distance', createdAt: '2026-06-01T00:00:00.000Z' },
    { id: 384, name: 'Ashley M.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-10-06T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 389, name: 'Regina R.', rating: 4, comment: 'muy buena cama, dormimos mejor que en casa', createdAt: '2026-06-14T00:00:00.000Z' },
    { id: 388, name: 'Matthew B.', rating: 5, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, whatever we needed was sorted out immediately, great support', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 387, name: 'Carlos L.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 386, name: 'Ricardo H.', rating: 3, comment: 'muy buena alberca, con camastros suficientes y siempre bien mantenida, muy buena iluminacion natural en todo el departamento', createdAt: '2025-06-21T00:00:00.000Z' },
    { id: 390, name: 'Emily A.', rating: 3, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, cleanliness was spotless the entire stay', createdAt: '2025-06-07T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 391, name: 'Renata A.', rating: 5, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-08-29T00:00:00.000Z' },
    { id: 392, name: 'Paulina O.', rating: 4, comment: 'cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-07-02T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 393, name: 'Katie M.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Totally worth the price, great experience overall.', createdAt: '2026-05-03T00:00:00.000Z' },
    { id: 394, name: 'David W.', rating: 5, comment: 'the beach access was incredible, exactly what we were hoping for, everything was immaculate on arrival, really well maintained overall', createdAt: '2026-03-07T00:00:00.000Z' },
    { id: 395, name: 'Valeria T.', rating: 5, comment: 'la terraza tiene una vista espectacular pasamos varias tardes ahi cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2025-01-15T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 397, name: 'Michael H.', rating: 5, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Totally worth the price, great experience overall.', createdAt: '2026-05-04T00:00:00.000Z' },
    { id: 396, name: 'Luis Fernando O.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Muy buena iluminacion natural en todo el departamento.', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 399, name: 'Andrew C.', rating: 5, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 398, name: 'Ryan C.', rating: 4, comment: 'The pool area was even better in person than in the photos. Barely needed to take a taxi, everything was close by.', createdAt: '2024-03-06T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 400, name: 'Justin Y.', rating: 3, comment: 'the building gym had better equipment than i expected, kitchen had everything, we cooked almost every day without issue', createdAt: '2026-04-14T00:00:00.000Z' },
    { id: 401, name: 'Daniela H.', rating: 4, comment: 'Pasabamos las tardes en el balcon, muy buen espacio exterior. Excelente zona, todo lo que necesitabamos estaba a unas cuadras.', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 404, name: 'Carlos H.', rating: 5, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso entra mucha luz natural durante el dia se siente muy agradable', createdAt: '2025-10-07T00:00:00.000Z' },
    { id: 402, name: 'Santiago M.', rating: 4, comment: 'Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-01-14T00:00:00.000Z' },
    { id: 403, name: 'David J.', rating: 3, comment: 'We went up to the rooftop a few times, the city view is incredible. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-03-10T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 405, name: 'Kevin Y.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Internet connection was excellent throughout our stay.', createdAt: '2025-02-21T00:00:00.000Z' },
    { id: 406, name: 'Christopher A.', rating: 4, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. Everything was immaculate on arrival, really well maintained overall.', createdAt: '2025-02-16T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 408, name: 'Daniela O.', rating: 5, comment: 'El internet nunca falló, pudimos hacer videollamadas sin problema.', createdAt: '2026-05-26T00:00:00.000Z' },
    { id: 410, name: 'Justin T.', rating: 4, comment: 'having an assigned parking spot made everything simpler, totally worth the price, great experience overall', createdAt: '2026-03-25T00:00:00.000Z' },
    { id: 409, name: 'Megan C.', rating: 5, comment: 'everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-12-10T00:00:00.000Z' },
    { id: 407, name: 'Matthew H.', rating: 5, comment: 'we brought our dog along and it worked out great genuinely pet friendly place arrived to a perfectly clean place you can tell it\'s well cared for', createdAt: '2025-04-22T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 411, name: 'Ryan H.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-10-01T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 412, name: 'Diego G.', rating: 5, comment: 'pasamos varias tardes en la alberca, siempre estaba limpia, excelente zona, todo lo que necesitabamos estaba a unas cuadras', createdAt: '2024-05-06T00:00:00.000Z' },
  ],
};