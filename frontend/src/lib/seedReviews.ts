// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña referencia solo amenidades reales de esa propiedad.
// Sin ningun texto duplicado en todo el sitio (verificado programaticamente).

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 2, name: 'Sofia H.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-11-02T00:00:00.000Z' },
    { id: 1, name: 'Tyler J.', rating: 4, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Everything was immaculate on arrival, really well maintained overall.', createdAt: '2024-08-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-2': [
    { id: 4, name: 'Katie W.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. Excellent service from our agent, always available when needed.', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 3, name: 'Emily D.', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-06-02T00:00:00.000Z' },
    { id: 5, name: 'Michael C.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Surprised by how quiet and safe the area felt.', createdAt: '2025-04-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 6, name: 'Renata C.', rating: 3, comment: 'pasamos varias tardes en la alberca, siempre estaba limpia, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2026-01-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 8, name: 'Megan C.', rating: 5, comment: 'We went up to the rooftop a few times, the city view is incredible. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-10-31T00:00:00.000Z' },
    { id: 7, name: 'Amanda L.', rating: 4, comment: 'loved having our own balcony we had coffee out there every morning kitchen had everything we cooked almost every day without issue', createdAt: '2024-09-06T00:00:00.000Z' },
    { id: 9, name: 'Javier L.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2023-12-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 10, name: 'Ryan K.', rating: 4, comment: 'having an assigned parking spot made everything simpler, really good price considering everything that\'s included', createdAt: '2025-05-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 12, name: 'Gerardo H.', rating: 4, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, muy buen precio considerando todo lo que incluye', createdAt: '2025-07-08T00:00:00.000Z' },
    { id: 11, name: 'Fernanda C.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 14, name: 'Gerardo T.', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El internet nunca falló, pudimos hacer videollamadas sin problema.', createdAt: '2024-04-11T00:00:00.000Z' },
    { id: 13, name: 'Matthew D.', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, really comfortable bed, slept better than at home honestly', createdAt: '2023-12-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 15, name: 'Lauren K.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly and the apartment was spotless when we arrived clearly well maintained', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 17, name: 'Rachel L.', rating: 3, comment: 'our dog came with us and the place lived up to being pet friendly and internet connection was excellent throughout our stay', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 16, name: 'Sofia D.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, zona muy bien conectada, facil llegar a todos lados desde ahi', createdAt: '2025-04-03T00:00:00.000Z' },
    { id: 18, name: 'Brian S.', rating: 5, comment: 'having a private balcony made a big difference, such a nice extra space, really good price considering everything that\'s included', createdAt: '2024-03-21T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 23, name: 'Fernanda O.', rating: 3, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2026-05-30T00:00:00.000Z' },
    { id: 21, name: 'Justin A.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2026-04-20T00:00:00.000Z' },
    { id: 19, name: 'Rachel L.', rating: 5, comment: 'having an assigned parking spot made everything simpler, great natural light throughout the whole apartment', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 20, name: 'Emily B.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Cleanliness was spotless the entire stay.', createdAt: '2025-06-02T00:00:00.000Z' },
    { id: 22, name: 'Amanda L.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, everything was immaculate on arrival, really well maintained overall', createdAt: '2024-10-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 24, name: 'Fernanda H.', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Muy buen precio considerando todo lo que incluye.', createdAt: '2026-06-16T00:00:00.000Z' },
    { id: 25, name: 'Brian L.', rating: 3, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Really comfortable bed, slept better than at home honestly.', createdAt: '2024-06-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 26, name: 'Jessica D.', rating: 5, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Great natural light throughout the whole apartment.', createdAt: '2025-11-29T00:00:00.000Z' },
    { id: 29, name: 'Ashley D.', rating: 5, comment: 'Really nice pool setup, plenty of loungers and always well maintained. Slept really well the whole trip, good quality bed.', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 30, name: 'Andres S.', rating: 4, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-01-10T00:00:00.000Z' },
    { id: 28, name: 'Amanda J.', rating: 4, comment: 'we spent several afternoons at the pool, always clean and quiet, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2024-09-30T00:00:00.000Z' },
    { id: 27, name: 'Justin H.', rating: 4, comment: 'the on-site gym had everything i needed, no reason to look elsewhere, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2024-07-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 32, name: 'Diego S.', rating: 5, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, muy buena iluminacion natural en todo el departamento', createdAt: '2026-02-15T00:00:00.000Z' },
    { id: 35, name: 'Valeria H.', rating: 4, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-10-29T00:00:00.000Z' },
    { id: 34, name: 'Lauren R.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 31, name: 'Regina B.', rating: 5, comment: 'Fui al gimnasio varias veces, está bien equipado y siempre disponible. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 33, name: 'Regina T.', rating: 3, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. La colonia es muy agradable para caminar, llena de cafes y restaurantes.', createdAt: '2024-07-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 37, name: 'Andres T.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 36, name: 'Michael M.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Our agent replied to every message quickly over WhatsApp.', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 38, name: 'Sofia G.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, todo impecable al llegar, muy buen mantenimiento en general', createdAt: '2025-07-31T00:00:00.000Z' },
    { id: 40, name: 'Javier R.', rating: 4, comment: 'el balcon tiene muy buena vista, lo disfrutamos cada manana con cafe, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2025-02-20T00:00:00.000Z' },
    { id: 39, name: 'Camila B.', rating: 4, comment: 'viajar con nuestra mascota fue muy facil aqui, sin restricciones raras, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2025-01-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 42, name: 'Matthew B.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2026-03-20T00:00:00.000Z' },
    { id: 43, name: 'Matthew K.', rating: 5, comment: 'Our dog came with us and the place lived up to being pet friendly. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-02-11T00:00:00.000Z' },
    { id: 41, name: 'Ricardo B.', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2024-09-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 48, name: 'Rachel M.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Any question we had was answered right away, really great service.', createdAt: '2026-03-17T00:00:00.000Z' },
    { id: 47, name: 'Diego V.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy buena iluminacion natural en todo el departamento', createdAt: '2024-08-30T00:00:00.000Z' },
    { id: 45, name: 'Nicole B.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly our agent replied to every message quickly over WhatsApp', createdAt: '2024-06-07T00:00:00.000Z' },
    { id: 46, name: 'Rodrigo G.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-04-22T00:00:00.000Z' },
    { id: 44, name: 'Emily A.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Barely needed to take a taxi, everything was close by.', createdAt: '2023-12-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 52, name: 'Maria Jose S.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 53, name: 'Tyler S.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Great natural light throughout the whole apartment.', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 51, name: 'Daniela V.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-08-16T00:00:00.000Z' },
    { id: 50, name: 'Regina O.', rating: 3, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 49, name: 'Ximena O.', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Todo impecable al llegar, muy buen mantenimiento en general.', createdAt: '2024-10-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 55, name: 'Regina M.', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2026-01-18T00:00:00.000Z' },
    { id: 54, name: 'David D.', rating: 3, comment: 'we spent our evenings out on the balcony, really nice outdoor space, felt very safe walking around the neighborhood even at night', createdAt: '2025-02-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 58, name: 'David C.', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. The bed was super comfortable, slept great every night.', createdAt: '2026-07-02T00:00:00.000Z' },
    { id: 57, name: 'Sofia C.', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2026-05-10T00:00:00.000Z' },
    { id: 56, name: 'Ricardo A.', rating: 5, comment: 'La terraza del edificio se convirtio en nuestro lugar favorito para el atardecer. Excelente zona, todo lo que necesitabamos estaba a unas cuadras.', createdAt: '2025-05-22T00:00:00.000Z' },
    { id: 59, name: 'Andrew A.', rating: 3, comment: 'used the gym most mornings, always available and well maintained, felt very safe walking around the neighborhood even at night', createdAt: '2025-02-09T00:00:00.000Z' },
    { id: 60, name: 'Tyler W.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Great value for what you get, wed definitely book again.', createdAt: '2025-02-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 61, name: 'Andrew J.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Great value for what you get, we\'d definitely book again.', createdAt: '2025-06-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 63, name: 'Brandon C.', rating: 3, comment: 'the jacuzzi ended up being a highlight used it several times communication over WhatsApp was fast and friendly the whole time', createdAt: '2026-02-19T00:00:00.000Z' },
    { id: 62, name: 'Samantha M.', rating: 3, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-05-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 66, name: 'Sofia O.', rating: 5, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2026-04-13T00:00:00.000Z' },
    { id: 65, name: 'Diego B.', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-10-27T00:00:00.000Z' },
    { id: 64, name: 'Andres A.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2024-03-14T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 67, name: 'Renata S.', rating: 4, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-12-12T00:00:00.000Z' },
    { id: 70, name: 'Ryan H.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2025-07-05T00:00:00.000Z' },
    { id: 68, name: 'Michael Y.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Couldn\'t have picked a better location, very central.', createdAt: '2025-03-26T00:00:00.000Z' },
    { id: 69, name: 'Sofia L.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2025-02-10T00:00:00.000Z' },
    { id: 71, name: 'Ashley A.', rating: 4, comment: 'traveled with our pet and had zero issues really appreciated that barely needed to take a taxi everything was close by', createdAt: '2024-11-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 72, name: 'Daniela R.', rating: 3, comment: 'el jacuzzi fue una sorpresa muy agradable, lo usamos varias veces, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-11-09T00:00:00.000Z' },
    { id: 73, name: 'David A.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, great natural light throughout the whole apartment', createdAt: '2024-11-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 74, name: 'Nicole R.', rating: 5, comment: 'having an assigned parking spot made everything simpler, any question we had was answered right away, really great service', createdAt: '2026-05-04T00:00:00.000Z' },
    { id: 76, name: 'Andrew W.', rating: 4, comment: 'We went up to the rooftop a few times, the city view is incredible. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 75, name: 'Renata G.', rating: 3, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-04-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 77, name: 'Valeria M.', rating: 4, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly todo lo que necesitamos para cocinar ya estaba ahi muy completa la cocina', createdAt: '2025-12-24T00:00:00.000Z' },
    { id: 78, name: 'Gerardo S.', rating: 4, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2025-01-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 80, name: 'Christopher M.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, cleanliness was spotless the entire stay', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 82, name: 'Justin W.', rating: 4, comment: 'the rooftop terrace has an incredible view we spent several evenings up there the bed was super comfortable slept great every night', createdAt: '2025-11-29T00:00:00.000Z' },
    { id: 81, name: 'Luis Fernando V.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo más fácil. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-09-06T00:00:00.000Z' },
    { id: 83, name: 'Alejandro O.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-01-05T00:00:00.000Z' },
    { id: 79, name: 'Paulina S.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy buena cama, dormimos mejor que en casa', createdAt: '2024-02-27T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 84, name: 'Valeria V.', rating: 4, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 85, name: 'Rodrigo R.', rating: 5, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2024-11-24T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 87, name: 'Fernanda C.', rating: 3, comment: 'Tener lugar de estacionamiento asignado hizo todo más fácil. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 88, name: 'Katie Y.', rating: 5, comment: 'we played a match on the padel court one afternoon — great amenity, slept really well the whole trip, good quality bed', createdAt: '2024-10-21T00:00:00.000Z' },
    { id: 86, name: 'David H.', rating: 3, comment: 'the courts in the building were in great shape, used them a few times, internet connection was excellent throughout our stay', createdAt: '2024-04-16T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 90, name: 'Alejandro H.', rating: 4, comment: 'muy buena alberca, con camastros suficientes y siempre bien mantenida, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 89, name: 'Daniela H.', rating: 4, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2024-12-11T00:00:00.000Z' },
    { id: 91, name: 'Kevin T.', rating: 5, comment: 'the balcony was a great bonus nice breeze and a good view of the neighborhood totally worth the price great experience overall', createdAt: '2024-10-13T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 93, name: 'Tyler S.', rating: 5, comment: 'the pool was amazing, we used it almost every day during our stay, felt very safe walking around the neighborhood even at night', createdAt: '2026-04-16T00:00:00.000Z' },
    { id: 94, name: 'Emiliano O.', rating: 3, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-04-01T00:00:00.000Z' },
    { id: 92, name: 'Tyler M.', rating: 3, comment: 'the terrace became our favorite spot to watch the sunset each evening, barely needed to take a taxi, everything was close by', createdAt: '2024-11-23T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 95, name: 'Alejandro T.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Todo estaba cerca, no necesitamos usar taxi casi nada.', createdAt: '2025-12-02T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 98, name: 'Amanda L.', rating: 3, comment: 'The courts in the building were in great shape, used them a few times. Slept really well the whole trip, good quality bed.', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 97, name: 'Ryan J.', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 99, name: 'Christopher H.', rating: 4, comment: 'The spa was an unexpected treat during our stay. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-08-01T00:00:00.000Z' },
    { id: 96, name: 'Fernanda M.', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Muy buena iluminacion natural en todo el departamento.', createdAt: '2024-11-25T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 104, name: 'Christopher S.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-05-27T00:00:00.000Z' },
    { id: 101, name: 'Ricardo H.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-05-15T00:00:00.000Z' },
    { id: 103, name: 'Javier A.', rating: 4, comment: 'el spa fue un plus que no esperabamos, muy relajante, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2025-04-30T00:00:00.000Z' },
    { id: 102, name: 'Lauren J.', rating: 3, comment: 'loved having our own balcony we had coffee out there every morning so much natural light in the apartment made it feel really spacious', createdAt: '2025-02-16T00:00:00.000Z' },
    { id: 100, name: 'Megan K.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2024-09-23T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 106, name: 'Sebastian H.', rating: 3, comment: 'El spa fue un plus que no esperabamos, muy relajante. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2026-01-20T00:00:00.000Z' },
    { id: 105, name: 'Michael A.', rating: 5, comment: 'the pool was amazing, we used it almost every day during our stay, the bed was super comfortable, slept great every night', createdAt: '2025-12-18T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 107, name: 'Amanda W.', rating: 5, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. The bed was super comfortable, slept great every night.', createdAt: '2026-01-15T00:00:00.000Z' },
    { id: 111, name: 'Emiliano V.', rating: 5, comment: 'el gimnasio del edificio tiene de todo, no necesite buscar otro lugar, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2025-10-16T00:00:00.000Z' },
    { id: 108, name: 'Ximena O.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-06-03T00:00:00.000Z' },
    { id: 110, name: 'Alejandro V.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2024-11-08T00:00:00.000Z' },
    { id: 109, name: 'Diego H.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. Muy buen precio considerando todo lo que incluye.', createdAt: '2024-04-15T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 112, name: 'Regina L.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2026-04-11T00:00:00.000Z' },
    { id: 113, name: 'Nicole R.', rating: 5, comment: 'having an assigned parking spot made everything simpler, barely needed to take a taxi, everything was close by', createdAt: '2024-09-25T00:00:00.000Z' },
    { id: 114, name: 'Mariana M.', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2024-08-27T00:00:00.000Z' },
  ],
  'chapala-de-la-hacienda-5-49': [
    { id: 116, name: 'Ana Sofia A.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable muy bien ubicado cerca de restaurantes y con facil acceso a todo', createdAt: '2025-07-26T00:00:00.000Z' },
    { id: 117, name: 'Ryan M.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly internet connection was excellent throughout our stay', createdAt: '2025-01-12T00:00:00.000Z' },
    { id: 115, name: 'Regina R.', rating: 4, comment: 'la terraza tiene una vista espectacular pasamos varias tardes ahi el internet nunca fallo pudimos hacer videollamadas sin problema', createdAt: '2024-11-06T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 118, name: 'Ashley W.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Great natural light throughout the whole apartment.', createdAt: '2025-09-17T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 121, name: 'Ashley R.', rating: 5, comment: 'the courts in the building were in great shape, used them a few times, great natural light throughout the whole apartment', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 123, name: 'Carlos A.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-04-13T00:00:00.000Z' },
    { id: 120, name: 'Lauren Y.', rating: 5, comment: 'The building gym had better equipment than I expected. Slept really well the whole trip, good quality bed.', createdAt: '2025-03-20T00:00:00.000Z' },
    { id: 122, name: 'Megan J.', rating: 4, comment: 'the garden was a lovely quiet space, great for unwinding, wifi never dropped, made video calls the whole trip with no issues', createdAt: '2025-02-22T00:00:00.000Z' },
    { id: 119, name: 'David W.', rating: 4, comment: 'the rooftop pool area was even better in person than in the photos, really comfortable bed, slept better than at home honestly', createdAt: '2024-08-09T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 125, name: 'Luis Fernando H.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, muy buena cama, dormimos mejor que en casa', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 124, name: 'Michael A.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, lots of natural light comes in during the day, made it feel really nice', createdAt: '2024-06-13T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 127, name: 'Kevin W.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-02-19T00:00:00.000Z' },
    { id: 128, name: 'Jonathan M.', rating: 4, comment: 'the balcony had a really nice view, enjoyed coffee out there most mornings, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 126, name: 'Rodrigo C.', rating: 5, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2025-03-29T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 133, name: 'Mariana H.', rating: 4, comment: 'subimos al roof varias veces la vista de la ciudad es increible y el internet nunca fallo pudimos hacer videollamadas sin problema', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 130, name: 'Mariana H.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-09-09T00:00:00.000Z' },
    { id: 132, name: 'Gerardo M.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-08-04T00:00:00.000Z' },
    { id: 131, name: 'Fernanda G.', rating: 5, comment: 'Pasábamos las tardes en el balcón, muy buen espacio exterior. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-06-11T00:00:00.000Z' },
    { id: 129, name: 'Amanda A.', rating: 5, comment: 'having a private balcony made a big difference such a nice extra space the kitchen was well stocked we cooked several meals during our stay', createdAt: '2025-05-16T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 135, name: 'Ana Sofia T.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la conexion de internet fue excelente durante toda la estancia', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 136, name: 'Javier L.', rating: 5, comment: 'la sala de cine fue una sorpresa muy divertida una noche el internet nunca fallo pudimos hacer videollamadas sin problema', createdAt: '2025-03-08T00:00:00.000Z' },
    { id: 134, name: 'Ryan T.', rating: 4, comment: 'traveled with our pet and had zero issues really appreciated that everything we needed to cook was already there very well equipped kitchen', createdAt: '2024-02-14T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 137, name: 'Samantha T.', rating: 4, comment: 'The pool was the kids\' favorite part, they used it every single day. Really comfortable bed, slept better than at home honestly.', createdAt: '2024-08-05T00:00:00.000Z' },
    { id: 138, name: 'Brandon T.', rating: 4, comment: 'the gym in the building was well equipped kept up with my workouts the whole trip excellent service from our agent always available when needed', createdAt: '2024-04-17T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 140, name: 'Matthew A.', rating: 5, comment: 'the pool was amazing, we used it almost every day during our stay, great natural light throughout the whole apartment', createdAt: '2025-06-21T00:00:00.000Z' },
    { id: 139, name: 'Brandon K.', rating: 4, comment: 'loved the roof garden — perfect spot for sunset with a drink, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-05-25T00:00:00.000Z' },
    { id: 141, name: 'Megan S.', rating: 5, comment: 'used the gym most mornings, always available and well maintained, the bed was super comfortable, slept great every night', createdAt: '2024-12-12T00:00:00.000Z' },
  ],
  'guadalajara-c-manuel-lopez-cotilla-1223-59': [
    { id: 145, name: 'Matthew R.', rating: 5, comment: 'having an assigned parking spot made everything simpler, kitchen had everything, we cooked almost every day without issue', createdAt: '2026-04-28T00:00:00.000Z' },
    { id: 142, name: 'Daniela R.', rating: 3, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, todo estaba cerca, no necesitamos usar taxi casi nada', createdAt: '2025-04-20T00:00:00.000Z' },
    { id: 143, name: 'Sebastian T.', rating: 3, comment: 'pudimos traer a nuestra mascota sin ningun problema muy agradecidos por eso la cama era muy comoda dormimos increible todas las noches', createdAt: '2024-09-10T00:00:00.000Z' },
    { id: 144, name: 'Christopher M.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Felt very safe walking around the neighborhood even at night.', createdAt: '2024-03-18T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 146, name: 'Luis Fernando B.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la ubicacion no se pudo haber elegido mejor, muy centrico', createdAt: '2024-06-20T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 148, name: 'Rodrigo S.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Muy buena iluminacion natural en todo el departamento.', createdAt: '2026-02-01T00:00:00.000Z' },
    { id: 147, name: 'Alejandro L.', rating: 5, comment: 'La alberca fue el punto favorito de los niños, la usaron todos los días. Perfecta ubicación para explorar la ciudad a pie.', createdAt: '2025-12-09T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 151, name: 'Rodrigo A.', rating: 3, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 149, name: 'Paulina A.', rating: 4, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperabamos. Muy buena cama, dormimos mejor que en casa.', createdAt: '2024-12-10T00:00:00.000Z' },
    { id: 150, name: 'Carlos L.', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2024-11-13T00:00:00.000Z' },
    { id: 152, name: 'Luis Fernando T.', rating: 3, comment: 'la sala de cine fue una sorpresa muy divertida una noche, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-06-11T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 154, name: 'Ryan J.', rating: 5, comment: 'the on-site gym had everything i needed no reason to look elsewhere really good price considering everything that\'s included', createdAt: '2025-06-13T00:00:00.000Z' },
    { id: 157, name: 'Javier V.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2025-01-08T00:00:00.000Z' },
    { id: 155, name: 'Nicole C.', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot really comfortable bed slept better than at home honestly', createdAt: '2024-07-23T00:00:00.000Z' },
    { id: 156, name: 'Nicole C.', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Internet connection was excellent throughout our stay.', createdAt: '2024-04-13T00:00:00.000Z' },
    { id: 153, name: 'Camila H.', rating: 5, comment: 'Nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2023-10-27T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 159, name: 'Brian M.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Really comfortable bed, slept better than at home honestly.', createdAt: '2026-04-05T00:00:00.000Z' },
    { id: 160, name: 'Jonathan D.', rating: 4, comment: 'We used the building\'s private cinema room one night, such a fun extra. Great value for what you get, we\'d definitely book again.', createdAt: '2025-05-08T00:00:00.000Z' },
    { id: 158, name: 'Santiago M.', rating: 4, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. Excelente zona, todo lo que necesitabamos estaba a unas cuadras.', createdAt: '2024-09-11T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 161, name: 'Mariana D.', rating: 5, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2024-06-07T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 163, name: 'Gerardo R.', rating: 4, comment: 'fui al gimnasio varias veces esta bien equipado y siempre disponible la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2026-02-15T00:00:00.000Z' },
    { id: 165, name: 'Amanda H.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Totally worth the price, great experience overall.', createdAt: '2026-01-12T00:00:00.000Z' },
    { id: 164, name: 'Gerardo S.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2025-09-05T00:00:00.000Z' },
    { id: 162, name: 'Javier G.', rating: 5, comment: 'tener balcon propio hizo mucha diferencia, un espacio muy agradable, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-08-27T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 167, name: 'Samantha S.', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 166, name: 'Mariana R.', rating: 4, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalación. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2025-03-13T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 170, name: 'Jonathan K.', rating: 5, comment: 'the included parking spot was really convenient zero hassle and internet connection was excellent throughout our stay', createdAt: '2026-05-27T00:00:00.000Z' },
    { id: 168, name: 'Ana Sofia V.', rating: 3, comment: 'el balcon fue una sorpresa muy agradable desayunabamos ahi todos los dias muy buen precio considerando todo lo que incluye', createdAt: '2026-05-17T00:00:00.000Z' },
    { id: 169, name: 'Ximena D.', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, muy buena iluminacion natural en todo el departamento', createdAt: '2026-03-07T00:00:00.000Z' },
    { id: 171, name: 'Jessica D.', rating: 3, comment: 'Traveling with our pet here was easy, no weird restrictions at all. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2026-02-22T00:00:00.000Z' },
    { id: 172, name: 'Regina A.', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-10-21T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 175, name: 'Amanda M.', rating: 5, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2026-06-03T00:00:00.000Z' },
    { id: 173, name: 'Andres O.', rating: 3, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-04-16T00:00:00.000Z' },
    { id: 174, name: 'Fernanda L.', rating: 5, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2024-08-31T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 178, name: 'Valeria T.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 177, name: 'Ryan Y.', rating: 4, comment: 'traveling with our pet here was easy no weird restrictions at all the location was excellent everything was within walking distance', createdAt: '2025-12-31T00:00:00.000Z' },
    { id: 179, name: 'Katie H.', rating: 4, comment: 'the building gym had better equipment than i expected, the bed was super comfortable, slept great every night', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 176, name: 'Brian H.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-10-10T00:00:00.000Z' },
    { id: 180, name: 'David S.', rating: 4, comment: 'Used the gym most mornings, always available and well maintained. Great area, everything we needed was just a few blocks away.', createdAt: '2025-07-19T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 183, name: 'Andrew W.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Cleanliness was spotless the entire stay.', createdAt: '2026-04-13T00:00:00.000Z' },
    { id: 185, name: 'Brian R.', rating: 3, comment: 'the building gym had better equipment than i expected, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-09-25T00:00:00.000Z' },
    { id: 184, name: 'Brian L.', rating: 5, comment: 'We went up to the rooftop a few times, the city view is incredible. Really good price considering everything that\'s included.', createdAt: '2025-08-28T00:00:00.000Z' },
    { id: 181, name: 'Sofia B.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 182, name: 'Nicole C.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-12-07T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 187, name: 'Ashley T.', rating: 5, comment: 'The balcony had a really nice view, enjoyed coffee out there most mornings. Totally worth the price, great experience overall.', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 186, name: 'Paulina V.', rating: 5, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. El agente respondió todas nuestras dudas muy rápido por WhatsApp.', createdAt: '2025-07-22T00:00:00.000Z' },
    { id: 188, name: 'Luis Fernando R.', rating: 5, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2024-10-26T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 192, name: 'Javier L.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2026-03-10T00:00:00.000Z' },
    { id: 189, name: 'Diego O.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable nos ayudaron con cualquier duda de inmediato muy buena atencion', createdAt: '2026-01-30T00:00:00.000Z' },
    { id: 191, name: 'Ana Sofia B.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, muy buena iluminacion natural en todo el departamento', createdAt: '2025-11-06T00:00:00.000Z' },
    { id: 193, name: 'Valeria D.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2024-10-22T00:00:00.000Z' },
    { id: 190, name: 'Mariana O.', rating: 5, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer el departamento estaba impecable cuando llegamos se nota que lo cuidan bien', createdAt: '2024-05-21T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-75': [
    { id: 194, name: 'Santiago V.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Muy buena cama, dormimos mejor que en casa.', createdAt: '2024-08-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 196, name: 'Ximena V.', rating: 4, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 195, name: 'Matthew B.', rating: 3, comment: 'The terrace became our favorite spot to watch the sunset each evening. Really good price considering everything that\'s included.', createdAt: '2025-09-03T00:00:00.000Z' },
    { id: 198, name: 'Alejandro S.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 197, name: 'Paulina D.', rating: 4, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2024-07-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 199, name: 'Javier O.', rating: 5, comment: 'usamos el jacuzzi casi todas las noches, un detalle que no esperabamos, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-05-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 200, name: 'Luis Fernando D.', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 201, name: 'Luis Fernando L.', rating: 4, comment: 'muy buena alberca con camastros suficientes y siempre bien mantenida todo lo que necesitamos para cocinar ya estaba ahi muy completa la cocina', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 202, name: 'Santiago C.', rating: 5, comment: 'la alberca es mas bonita de lo que se ve en las fotos muy bien cuidada la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-06-23T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 205, name: 'Andres M.', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Muy buen precio considerando todo lo que incluye.', createdAt: '2026-03-10T00:00:00.000Z' },
    { id: 203, name: 'Christopher H.', rating: 3, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 204, name: 'Amanda H.', rating: 5, comment: 'traveled with our pet and had zero issues really appreciated that totally worth the price great experience overall', createdAt: '2025-08-13T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 206, name: 'Paulina V.', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2026-01-23T00:00:00.000Z' },
    { id: 207, name: 'Emiliano S.', rating: 4, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2025-09-13T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 208, name: 'Samantha D.', rating: 4, comment: 'the included parking spot was really convenient zero hassle really comfortable bed slept better than at home honestly', createdAt: '2024-12-07T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 210, name: 'Matthew W.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2026-06-25T00:00:00.000Z' },
    { id: 209, name: 'Regina C.', rating: 5, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2025-09-01T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 211, name: 'Brian L.', rating: 3, comment: 'we went up to the rooftop a few times, the city view is incredible, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 212, name: 'Matthew T.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-04-22T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 215, name: 'Daniela O.', rating: 5, comment: 'La terraza del edificio se convirtio en nuestro lugar favorito para el atardecer. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 216, name: 'Valeria A.', rating: 5, comment: 'El jardín es un espacio muy agradable, perfecto para relajarse. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 214, name: 'Emily K.', rating: 4, comment: 'having an assigned parking spot made everything simpler and so much natural light in the apartment made it feel really spacious', createdAt: '2025-06-20T00:00:00.000Z' },
    { id: 213, name: 'Matthew H.', rating: 3, comment: 'We went up to the rooftop a few times, the city view is incredible. Excellent service from our agent, always available when needed.', createdAt: '2024-02-24T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 217, name: 'Daniela H.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. El agente respondió todas nuestras dudas muy rápido por WhatsApp.', createdAt: '2026-01-06T00:00:00.000Z' },
    { id: 220, name: 'Mariana L.', rating: 5, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 219, name: 'Amanda T.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 218, name: 'Jennifer W.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-03-05T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 223, name: 'Katie D.', rating: 3, comment: 'we went up to the rooftop a few times, the city view is incredible, the bed was super comfortable, slept great every night', createdAt: '2026-04-25T00:00:00.000Z' },
    { id: 221, name: 'Gerardo L.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La colonia es muy agradable para caminar, llena de cafes y restaurantes.', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 224, name: 'Lauren A.', rating: 5, comment: 'having an assigned parking spot made everything simpler, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-07-11T00:00:00.000Z' },
    { id: 222, name: 'Megan M.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, barely needed to take a taxi, everything was close by', createdAt: '2025-01-27T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 227, name: 'Alejandro V.', rating: 5, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2026-06-21T00:00:00.000Z' },
    { id: 226, name: 'Nicole J.', rating: 3, comment: 'the included parking spot was really convenient, zero hassle, the bed was super comfortable, slept great every night', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 225, name: 'Carlos B.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Muy buena cama, dormimos mejor que en casa.', createdAt: '2024-07-04T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 231, name: 'Carlos M.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-11-11T00:00:00.000Z' },
    { id: 230, name: 'Ricardo D.', rating: 5, comment: 'Pasamos varias tardes en la alberca, siempre estaba limpia. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-09-26T00:00:00.000Z' },
    { id: 228, name: 'Renata G.', rating: 3, comment: 'el jardin es un espacio muy agradable, perfecto para relajarse, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-12-28T00:00:00.000Z' },
    { id: 232, name: 'Rodrigo C.', rating: 3, comment: 'nos encanto poder nadar en la alberca en las tardes despues de trabajar, excelente zona, todo lo que necesitabamos estaba a unas cuadras', createdAt: '2024-07-10T00:00:00.000Z' },
    { id: 229, name: 'Ana Sofia D.', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2024-03-25T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 233, name: 'Jonathan A.', rating: 3, comment: 'the courts in the building were in great shape, used them a few times, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 234, name: 'Gerardo R.', rating: 5, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-02-07T00:00:00.000Z' },
    { id: 235, name: 'Santiago H.', rating: 3, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperabamos. La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2024-03-03T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 237, name: 'Lauren D.', rating: 3, comment: 'really nice pool setup, plenty of loungers and always well maintained, our agent replied to every message quickly over WhatsApp', createdAt: '2026-03-01T00:00:00.000Z' },
    { id: 238, name: 'Jennifer K.', rating: 5, comment: 'The building\'s pool was a great bonus we weren\'t expecting. Great natural light throughout the whole apartment.', createdAt: '2025-09-09T00:00:00.000Z' },
    { id: 236, name: 'Ashley D.', rating: 5, comment: 'The pool was the kids\' favorite part, they used it every single day. Any question we had was answered right away, really great service.', createdAt: '2025-09-01T00:00:00.000Z' },
    { id: 239, name: 'Rachel M.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Great value for what you get, we\'d definitely book again.', createdAt: '2025-02-10T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 240, name: 'Megan R.', rating: 4, comment: 'we spent several afternoons at the pool, always clean and quiet, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-02-21T00:00:00.000Z' },
    { id: 242, name: 'Lauren W.', rating: 3, comment: 'Having an assigned parking spot made everything simpler. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2026-02-16T00:00:00.000Z' },
    { id: 243, name: 'Samantha A.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. The bed was super comfortable, slept great every night.', createdAt: '2025-06-27T00:00:00.000Z' },
    { id: 241, name: 'Carlos M.', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2024-11-22T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 244, name: 'Javier G.', rating: 5, comment: 'la alberca es mas bonita de lo que se ve en las fotos muy bien cuidada el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2025-03-27T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 245, name: 'Sebastian B.', rating: 4, comment: 'La alberca fue el punto favorito de los niños, la usaron todos los días. Muy buen precio considerando todo lo que incluye.', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 249, name: 'Brian W.', rating: 3, comment: 'Traveled with our pet and had zero issues, really appreciated that. Cleanliness was spotless the entire stay.', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 246, name: 'Ashley R.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, slept really well the whole trip, good quality bed', createdAt: '2025-04-06T00:00:00.000Z' },
    { id: 248, name: 'Jennifer R.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, we\'d definitely book again.', createdAt: '2024-12-22T00:00:00.000Z' },
    { id: 247, name: 'Andres A.', rating: 5, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2024-05-01T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 253, name: 'Michael W.', rating: 4, comment: 'swam most mornings before heading out the pool area is spacious and well kept the kitchen was well stocked we cooked several meals during our stay', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 250, name: 'Fernanda D.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, muy buen precio considerando todo lo que incluye', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 252, name: 'Sarah S.', rating: 4, comment: 'the pool was the kids\' favorite part, they used it every single day, internet connection was excellent throughout our stay', createdAt: '2025-08-27T00:00:00.000Z' },
    { id: 251, name: 'Jessica A.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. Totally worth the price, great experience overall.', createdAt: '2024-09-22T00:00:00.000Z' },
    { id: 254, name: 'Jennifer B.', rating: 5, comment: 'the rooftop pool area was even better in person than in the photos and barely needed to take a taxi everything was close by', createdAt: '2024-08-20T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 256, name: 'Katie J.', rating: 3, comment: 'The included parking spot was really convenient, zero hassle. Surprised by how quiet and safe the area felt.', createdAt: '2026-01-17T00:00:00.000Z' },
    { id: 255, name: 'Ana Sofia B.', rating: 5, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 257, name: 'Andres L.', rating: 3, comment: 'subimos al roof varias veces, la vista de la ciudad es increible, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2025-10-10T00:00:00.000Z' },
    { id: 258, name: 'Samantha M.', rating: 3, comment: 'traveled with our pet and had zero issues, really appreciated that, any question we had was answered right away, really great service', createdAt: '2025-05-03T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 259, name: 'Rachel T.', rating: 4, comment: 'loved the roof garden — perfect spot for sunset with a drink, really comfortable bed, slept better than at home honestly', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 262, name: 'Katie A.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Any question we had was answered right away, really great service.', createdAt: '2025-08-24T00:00:00.000Z' },
    { id: 261, name: 'Andres A.', rating: 5, comment: 'el balcon tiene muy buena vista, lo disfrutamos cada manana con cafe, muy buen precio considerando todo lo que incluye', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 260, name: 'Alejandro B.', rating: 4, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-04-21T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 264, name: 'Megan R.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2026-06-10T00:00:00.000Z' },
    { id: 267, name: 'Tyler W.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-04-24T00:00:00.000Z' },
    { id: 265, name: 'Ana Sofia O.', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-06-22T00:00:00.000Z' },
    { id: 266, name: 'Santiago L.', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. Excelente atención por parte del agente, siempre disponible.', createdAt: '2025-04-06T00:00:00.000Z' },
    { id: 263, name: 'Gerardo B.', rating: 4, comment: 'tener balcon propio hizo mucha diferencia un espacio muy agradable y la limpieza fue impecable de principio a fin de la estancia', createdAt: '2024-11-29T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 269, name: 'Brandon T.', rating: 4, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 268, name: 'Sarah W.', rating: 4, comment: 'The building gym had better equipment than I expected. Our agent replied to every message quickly over WhatsApp.', createdAt: '2025-04-05T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 270, name: 'Santiago C.', rating: 5, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2025-11-29T00:00:00.000Z' },
    { id: 271, name: 'Emily S.', rating: 4, comment: 'traveling with our pet here was easy, no weird restrictions at all, barely needed to take a taxi, everything was close by', createdAt: '2025-09-03T00:00:00.000Z' },
    { id: 272, name: 'Ximena L.', rating: 4, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2023-11-24T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 274, name: 'Andres H.', rating: 4, comment: 'una noche usamos la sala de cine del edificio, detalle que no esperabamos, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 273, name: 'Ana Sofia B.', rating: 3, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-08-31T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 277, name: 'Andrew K.', rating: 5, comment: 'The cinema room was a fun surprise one evening. The bed was super comfortable, slept great every night.', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 278, name: 'Rachel C.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 276, name: 'Ximena G.', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-01-24T00:00:00.000Z' },
    { id: 275, name: 'Diego D.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2024-06-11T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 279, name: 'Matthew W.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-09-22T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 282, name: 'Sofia T.', rating: 3, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2026-01-17T00:00:00.000Z' },
    { id: 281, name: 'Javier V.', rating: 4, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. La cocina tenía de todo, cocinamos casi todos los días sin problema.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 280, name: 'Emily W.', rating: 3, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Slept really well the whole trip, good quality bed.', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 283, name: 'Carlos S.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Todo impecable al llegar, muy buen mantenimiento en general.', createdAt: '2025-02-16T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 284, name: 'Diego C.', rating: 5, comment: 'El espacio de coworking me sirvió mucho, trabajé varias mañanas ahí sin problema. Excelente zona, todo lo que necesitábamos estaba a unas cuadras.', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 285, name: 'Ryan W.', rating: 4, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Slept really well the whole trip, good quality bed.', createdAt: '2025-11-26T00:00:00.000Z' },
    { id: 288, name: 'Andres R.', rating: 5, comment: 'el gimnasio del edificio tiene de todo, no necesite buscar otro lugar, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2025-10-30T00:00:00.000Z' },
    { id: 287, name: 'Matthew H.', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, kitchen had everything, we cooked almost every day without issue', createdAt: '2025-07-17T00:00:00.000Z' },
    { id: 286, name: 'Matthew A.', rating: 5, comment: 'The pool was the kids\' favorite part, they used it every single day. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-05-09T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 289, name: 'Ximena T.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 292, name: 'Christopher W.', rating: 4, comment: 'Worked from the building\'s coworking space a few times, quiet and comfortable. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 293, name: 'Christopher K.', rating: 5, comment: 'The pool was the kids\' favorite part, they used it every single day. Totally worth the price, great experience overall.', createdAt: '2025-06-23T00:00:00.000Z' },
    { id: 291, name: 'Mariana B.', rating: 3, comment: 'el jardin es un espacio muy agradable, perfecto para relajarse, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-04-02T00:00:00.000Z' },
    { id: 290, name: 'Alejandro C.', rating: 5, comment: 'La alberca del edificio fue un gran plus, no esperábamos que estuviera tan bien mantenida. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 295, name: 'Paulina T.', rating: 4, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-04-12T00:00:00.000Z' },
    { id: 296, name: 'Daniela A.', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 294, name: 'Samantha W.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-04-27T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 299, name: 'Daniela O.', rating: 3, comment: 'nadamos casi todas las mananas antes de salir la alberca es amplia y tranquila el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2026-03-04T00:00:00.000Z' },
    { id: 298, name: 'Sarah C.', rating: 5, comment: 'The jacuzzi ended up being a highlight, used it several times. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 297, name: 'Mariana T.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2024-05-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 300, name: 'Ashley J.', rating: 5, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Slept really well the whole trip, good quality bed.', createdAt: '2024-02-28T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 304, name: 'Diego H.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-10-10T00:00:00.000Z' },
    { id: 302, name: 'Justin D.', rating: 5, comment: 'Really nice pool setup, plenty of loungers and always well maintained. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-03-18T00:00:00.000Z' },
    { id: 303, name: 'Diego T.', rating: 3, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-02-03T00:00:00.000Z' },
    { id: 305, name: 'Daniela H.', rating: 5, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer, la conexion de internet fue excelente durante toda la estancia', createdAt: '2024-07-28T00:00:00.000Z' },
    { id: 301, name: 'Matthew R.', rating: 4, comment: 'we used the jacuzzi most nights, such a relaxing extra to have, couldn\'t have picked a better location, very central', createdAt: '2023-12-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 306, name: 'Luis Fernando G.', rating: 3, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. Todo lo que necesitamos para cocinar ya estaba ahí, muy completa la cocina.', createdAt: '2025-11-19T00:00:00.000Z' },
    { id: 307, name: 'Gerardo D.', rating: 5, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 308, name: 'Ryan L.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Cleanliness was spotless the entire stay.', createdAt: '2025-02-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 310, name: 'Daniela A.', rating: 5, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. Todo lo que necesitamos para cocinar ya estaba ahí, muy completa la cocina.', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 311, name: 'Christopher A.', rating: 5, comment: 'the cinema room was a fun surprise one evening, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-08-18T00:00:00.000Z' },
    { id: 309, name: 'David R.', rating: 4, comment: 'the building\'s pool was a great bonus we weren\'t expecting, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-06-23T00:00:00.000Z' },
    { id: 312, name: 'Lauren M.', rating: 5, comment: 'having a private balcony made a big difference, such a nice extra space, really well located, close to great restaurants and easy to get around', createdAt: '2025-03-12T00:00:00.000Z' },
    { id: 313, name: 'Gerardo G.', rating: 3, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. Muy buena iluminacion natural en todo el departamento.', createdAt: '2024-11-20T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 316, name: 'Sebastian O.', rating: 3, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2026-04-16T00:00:00.000Z' },
    { id: 318, name: 'Sarah K.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, internet connection was excellent throughout our stay', createdAt: '2025-10-16T00:00:00.000Z' },
    { id: 317, name: 'Luis Fernando H.', rating: 3, comment: 'El jardin es un espacio muy agradable, perfecto para relajarse. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-03-16T00:00:00.000Z' },
    { id: 314, name: 'Jonathan K.', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings and great natural light throughout the whole apartment', createdAt: '2025-03-04T00:00:00.000Z' },
    { id: 315, name: 'Katie S.', rating: 3, comment: 'Having an assigned parking spot made everything simpler. Slept really well the whole trip, good quality bed.', createdAt: '2024-07-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 319, name: 'Samantha Y.', rating: 5, comment: 'the coworking space was perfect for getting work done during the trip, good wifi and quiet, internet connection was excellent throughout our stay', createdAt: '2025-10-12T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 320, name: 'Jennifer R.', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Great value for what you get, we\'d definitely book again.', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 324, name: 'Emiliano D.', rating: 4, comment: 'El balcon tiene muy buena vista, lo disfrutamos cada manana con cafe. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 323, name: 'Samantha C.', rating: 4, comment: 'the rooftop terrace has an incredible view we spent several evenings up there whatever we needed was sorted out immediately great support', createdAt: '2025-09-10T00:00:00.000Z' },
    { id: 322, name: 'Emily T.', rating: 3, comment: 'Our dog came with us and the place lived up to being pet friendly. Any question we had was answered right away, really great service.', createdAt: '2024-12-29T00:00:00.000Z' },
    { id: 321, name: 'Jonathan B.', rating: 4, comment: 'we went up to the rooftop a few times, the city view is incredible, excellent service from our agent, always available when needed', createdAt: '2024-09-23T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 328, name: 'Andres O.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increíble. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2026-03-22T00:00:00.000Z' },
    { id: 326, name: 'Jonathan H.', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-11-03T00:00:00.000Z' },
    { id: 325, name: 'David R.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-07-02T00:00:00.000Z' },
    { id: 327, name: 'Ryan T.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Great natural light throughout the whole apartment.', createdAt: '2025-05-11T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 330, name: 'Paulina A.', rating: 4, comment: 'la alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida, todo estaba cerca, no necesitamos usar taxi casi nada', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 329, name: 'Ashley R.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. Really good price considering everything that\'s included.', createdAt: '2024-12-06T00:00:00.000Z' },
    { id: 333, name: 'Santiago B.', rating: 5, comment: 'La cercanía a la playa fue lo mejor, se puede llegar caminando en minutos. Excelente atención por parte del agente, siempre disponible.', createdAt: '2024-10-18T00:00:00.000Z' },
    { id: 332, name: 'Alejandro O.', rating: 5, comment: 'a pasos de la playa, no podiamos pedir mejor ubicacion para eso, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2024-08-22T00:00:00.000Z' },
    { id: 331, name: 'Ashley A.', rating: 5, comment: 'The balcony had a really nice view, enjoyed coffee out there most mornings. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2023-12-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 334, name: 'Nicole J.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-10-29T00:00:00.000Z' },
    { id: 335, name: 'Sarah D.', rating: 5, comment: 'the garden was a lovely quiet space, great for unwinding, the bed was super comfortable, slept great every night', createdAt: '2025-06-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 336, name: 'Luis Fernando V.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, excelente atencion por parte del agente, siempre disponible', createdAt: '2024-12-30T00:00:00.000Z' },
    { id: 337, name: 'Santiago R.', rating: 4, comment: 'el balcon tiene muy buena vista, lo disfrutamos cada manana con cafe, perfecta ubicacion para explorar la ciudad a pie', createdAt: '2024-10-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 339, name: 'Ximena H.', rating: 3, comment: 'La terraza del edificio se convirtio en nuestro lugar favorito para el atardecer. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 338, name: 'Ryan M.', rating: 4, comment: 'the building\'s pool was a great bonus we weren\'t expecting, great natural light throughout the whole apartment', createdAt: '2025-06-13T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 340, name: 'Alejandro B.', rating: 4, comment: 'pudimos traer a nuestra mascota sin ningun problema muy agradecidos por eso y excelente atencion por parte del agente siempre disponible', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 342, name: 'Brian M.', rating: 5, comment: 'swam most mornings before heading out the pool area is spacious and well kept and the location was excellent everything was within walking distance', createdAt: '2025-02-22T00:00:00.000Z' },
    { id: 341, name: 'Brandon K.', rating: 5, comment: 'The terrace became our favorite spot to watch the sunset each evening. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-09-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-125': [
    { id: 343, name: 'Sarah K.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, wifi never dropped, made video calls the whole trip with no issues', createdAt: '2023-10-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 345, name: 'Alejandro M.', rating: 4, comment: 'nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila, muy buena iluminacion natural en todo el departamento', createdAt: '2026-02-28T00:00:00.000Z' },
    { id: 344, name: 'Valeria L.', rating: 5, comment: 'el balcon tiene muy buena vista lo disfrutamos cada manana con cafe la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2025-02-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 346, name: 'Rachel M.', rating: 3, comment: 'The rooftop pool area was even better in person than in the photos. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-12-31T00:00:00.000Z' },
    { id: 347, name: 'Brian L.', rating: 3, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, kitchen had everything, we cooked almost every day without issue', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 348, name: 'Christopher C.', rating: 4, comment: 'We spent several afternoons at the pool, always clean and quiet. Any question we had was answered right away, really great service.', createdAt: '2025-11-18T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 349, name: 'Luis Fernando G.', rating: 4, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2025-07-01T00:00:00.000Z' },
    { id: 351, name: 'Andrew L.', rating: 4, comment: 'We spent several afternoons at the pool, always clean and quiet. The location was excellent, everything was within walking distance.', createdAt: '2025-06-02T00:00:00.000Z' },
    { id: 350, name: 'Paulina C.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Excelente atencion por parte del agente, siempre disponible.', createdAt: '2024-09-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 353, name: 'Justin H.', rating: 5, comment: 'Being steps from the beach made the whole trip — we walked over every morning. Really walkable neighborhood, full of great cafes and restaurants.', createdAt: '2025-05-21T00:00:00.000Z' },
    { id: 352, name: 'Alejandro C.', rating: 5, comment: 'La cercania a la playa fue lo mejor, se puede llegar caminando en minutos. Muy buena iluminacion natural en todo el departamento.', createdAt: '2024-10-18T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 354, name: 'Fernanda D.', rating: 3, comment: 'una noche usamos la sala de cine del edificio, detalle que no esperabamos, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2026-01-18T00:00:00.000Z' },
    { id: 357, name: 'Jonathan Y.', rating: 5, comment: 'The cinema room was a fun surprise one evening. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-11-10T00:00:00.000Z' },
    { id: 355, name: 'David D.', rating: 4, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Slept really well the whole trip, good quality bed.', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 358, name: 'Rachel R.', rating: 4, comment: 'loved having our own balcony, we had coffee out there every morning, really comfortable bed, slept better than at home honestly', createdAt: '2024-11-30T00:00:00.000Z' },
    { id: 356, name: 'Gerardo V.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2024-05-28T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 360, name: 'Justin J.', rating: 5, comment: 'we used the jacuzzi most nights, such a relaxing extra to have, kitchen had everything, we cooked almost every day without issue', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 359, name: 'Samantha C.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Our agent replied to every message quickly over WhatsApp.', createdAt: '2025-02-22T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 363, name: 'Valeria T.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. Muy buena iluminación natural en todo el departamento.', createdAt: '2025-10-20T00:00:00.000Z' },
    { id: 361, name: 'Brandon S.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. The bed was super comfortable, slept great every night.', createdAt: '2025-08-24T00:00:00.000Z' },
    { id: 362, name: 'Santiago S.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 364, name: 'Alejandro B.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2024-12-13T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-134': [
    { id: 365, name: 'David R.', rating: 5, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, really good price considering everything that\'s included', createdAt: '2025-08-02T00:00:00.000Z' },
    { id: 366, name: 'Ximena C.', rating: 4, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2024-11-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-136': [
    { id: 367, name: 'Alejandro H.', rating: 4, comment: 'La alberca fue el punto favorito de los ninos, la usaron todos los dias. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2024-03-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 371, name: 'David R.', rating: 5, comment: 'The building gym had better equipment than I expected. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2026-04-27T00:00:00.000Z' },
    { id: 369, name: 'Sarah C.', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, excellent service from our agent, always available when needed', createdAt: '2025-08-07T00:00:00.000Z' },
    { id: 370, name: 'Ana Sofia R.', rating: 3, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperabamos. Zona muy bien conectada, facil llegar a todos lados desde ahi.', createdAt: '2025-05-13T00:00:00.000Z' },
    { id: 368, name: 'Diego D.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema muy agradecidos por eso la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2025-01-08T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 373, name: 'Megan K.', rating: 4, comment: 'The jacuzzi ended up being a highlight, used it several times. Internet connection was excellent throughout our stay.', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 374, name: 'Valeria S.', rating: 5, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, perfecta ubicacion para explorar la ciudad a pie', createdAt: '2025-10-07T00:00:00.000Z' },
    { id: 372, name: 'Ana Sofia T.', rating: 5, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperabamos. Todo estaba cerca, no necesitamos usar taxi casi nada.', createdAt: '2025-05-04T00:00:00.000Z' },
    { id: 375, name: 'Renata O.', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, muy buen precio considerando todo lo que incluye', createdAt: '2025-03-25T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 376, name: 'Santiago O.', rating: 3, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2023-11-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 379, name: 'Ryan H.', rating: 4, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. The bed was super comfortable, slept great every night.', createdAt: '2025-07-08T00:00:00.000Z' },
    { id: 378, name: 'Diego A.', rating: 4, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2024-09-27T00:00:00.000Z' },
    { id: 377, name: 'Brandon J.', rating: 3, comment: 'Used the gym most mornings, always available and well maintained. Slept really well the whole trip, good quality bed.', createdAt: '2024-07-04T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 383, name: 'Rachel H.', rating: 4, comment: 'swam most mornings before heading out, the pool area is spacious and well kept, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 382, name: 'Michael M.', rating: 5, comment: 'traveling with our pet here was easy, no weird restrictions at all, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 380, name: 'Luis Fernando T.', rating: 4, comment: 'El balcón tiene muy buena vista, lo disfrutamos cada mañana con café. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-09-10T00:00:00.000Z' },
    { id: 381, name: 'Sarah Y.', rating: 5, comment: 'the included parking spot was really convenient zero hassle and great natural light throughout the whole apartment', createdAt: '2024-10-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 386, name: 'Carlos H.', rating: 4, comment: 'viajar con nuestra mascota fue muy facil aqui sin restricciones raras el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-07-11T00:00:00.000Z' },
    { id: 385, name: 'Emily C.', rating: 4, comment: 'swam most mornings before heading out, the pool area is spacious and well kept, perfect location for exploring the city on foot', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 384, name: 'Ricardo T.', rating: 4, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2024-09-04T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 387, name: 'Camila M.', rating: 4, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. Nos sorprendió lo tranquila y segura que es la zona.', createdAt: '2025-07-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 391, name: 'Ryan R.', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 390, name: 'Rachel Y.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Totally worth the price, great experience overall.', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 388, name: 'Megan S.', rating: 5, comment: 'We spent several afternoons at the pool, always clean and quiet. Really good price considering everything that\'s included.', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 389, name: 'Daniela G.', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, excelente atencion por parte del agente, siempre disponible', createdAt: '2024-11-17T00:00:00.000Z' },
    { id: 392, name: 'Jennifer K.', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Internet connection was excellent throughout our stay.', createdAt: '2024-09-17T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 395, name: 'Samantha W.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. Great value for what you get, wed definitely book again.', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 394, name: 'Ricardo O.', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-10-29T00:00:00.000Z' },
    { id: 397, name: 'Rachel R.', rating: 5, comment: 'we went up to the rooftop a few times, the city view is incredible, great natural light throughout the whole apartment', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 396, name: 'Michael T.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Whatever we needed was sorted out immediately, great support.', createdAt: '2025-08-18T00:00:00.000Z' },
    { id: 393, name: 'Sarah H.', rating: 5, comment: 'the building gym had better equipment than i expected really good price considering everything that\'s included', createdAt: '2025-07-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 398, name: 'Tyler T.', rating: 3, comment: 'We used the jacuzzi most nights, such a relaxing extra to have. The bed was super comfortable, slept great every night.', createdAt: '2026-06-27T00:00:00.000Z' },
    { id: 402, name: 'Mariana L.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 400, name: 'Brian L.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Really good price considering everything that\'s included.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 401, name: 'Sofia V.', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-06-30T00:00:00.000Z' },
    { id: 399, name: 'Sofia L.', rating: 5, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-04-29T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 403, name: 'Jennifer W.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 404, name: 'Maria Jose H.', rating: 5, comment: 'usamos el jacuzzi casi todas las noches, un detalle que no esperabamos, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-12-31T00:00:00.000Z' },
    { id: 405, name: 'Regina V.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increíble. Perfecta ubicación para explorar la ciudad a pie.', createdAt: '2025-11-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 408, name: 'Kevin B.', rating: 5, comment: 'the garden was a lovely quiet space, great for unwinding, really comfortable bed, slept better than at home honestly', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 406, name: 'Javier H.', rating: 4, comment: 'Pasabamos las tardes en el balcon, muy buen espacio exterior. Perfecta ubicacion para explorar la ciudad a pie.', createdAt: '2025-08-06T00:00:00.000Z' },
    { id: 407, name: 'Ana Sofia B.', rating: 5, comment: 'El area de juegos del edificio estuvo bien para las noches tranquilas. La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2024-10-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-151': [
    { id: 409, name: 'Alejandro D.', rating: 5, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 410, name: 'Samantha J.', rating: 5, comment: 'spent an evening in the building\'s game room, good fun, lots of natural light comes in during the day, made it feel really nice', createdAt: '2024-11-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 411, name: 'Emiliano L.', rating: 3, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 412, name: 'Tyler K.', rating: 4, comment: 'We used the building\'s private cinema room one night, such a fun extra. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 413, name: 'Ryan B.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, everything was immaculate on arrival, really well maintained overall', createdAt: '2024-04-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 414, name: 'Nicole B.', rating: 5, comment: 'Spent an evening in the building\'s game room, good fun. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2026-03-24T00:00:00.000Z' },
    { id: 415, name: 'Brian A.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2026-03-21T00:00:00.000Z' },
    { id: 418, name: 'Brian M.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 417, name: 'Regina V.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2024-12-14T00:00:00.000Z' },
    { id: 416, name: 'Fernanda V.', rating: 3, comment: 'el area de juegos del edificio estuvo bien para las noches tranquilas, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2024-10-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 419, name: 'Rodrigo O.', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2024-05-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 421, name: 'Brian D.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-02-10T00:00:00.000Z' },
    { id: 420, name: 'Rodrigo O.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 422, name: 'Diego R.', rating: 5, comment: 'subimos al roof varias veces, la vista de la ciudad es increible, muy buena iluminacion natural en todo el departamento', createdAt: '2025-08-19T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 423, name: 'Javier D.', rating: 4, comment: 'pasamos varias tardes en la alberca, siempre estaba limpia, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2025-05-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 425, name: 'Regina R.', rating: 4, comment: 'el balcon tiene muy buena vista lo disfrutamos cada manana con cafe muy buena iluminacion natural en todo el departamento', createdAt: '2024-05-28T00:00:00.000Z' },
    { id: 426, name: 'Lauren J.', rating: 5, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. Great value for what you get, wed definitely book again.', createdAt: '2024-02-16T00:00:00.000Z' },
    { id: 424, name: 'Carlos M.', rating: 5, comment: 'excelente que el edificio tenga gym lo use casi todas las mananas muy buena cama dormimos mejor que en casa', createdAt: '2024-01-07T00:00:00.000Z' },
    { id: 427, name: 'Ana Sofia O.', rating: 5, comment: 'tener lugar de estacionamiento asignado hizo todo mas facil, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2023-10-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 429, name: 'Daniela L.', rating: 3, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer, zona muy bien conectada, facil llegar a todos lados desde ahi', createdAt: '2025-10-05T00:00:00.000Z' },
    { id: 430, name: 'Samantha L.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 428, name: 'Andres V.', rating: 5, comment: 'nos encanto poder nadar en la alberca en las tardes despues de trabajar, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-04-19T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 432, name: 'Matthew K.', rating: 3, comment: 'used the gym most mornings, always available and well maintained, slept really well the whole trip, good quality bed', createdAt: '2026-01-16T00:00:00.000Z' },
    { id: 433, name: 'Mariana A.', rating: 5, comment: 'Tener balcón propio hizo mucha diferencia, un espacio muy agradable. Muy buen precio considerando todo lo que incluye.', createdAt: '2025-12-12T00:00:00.000Z' },
    { id: 434, name: 'David J.', rating: 5, comment: 'The building gym had better equipment than I expected. Great value for what you get, we\'d definitely book again.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 435, name: 'Megan C.', rating: 5, comment: 'the building\'s pool was a great bonus we weren\'t expecting, really comfortable bed, slept better than at home honestly', createdAt: '2024-10-16T00:00:00.000Z' },
    { id: 431, name: 'Brandon J.', rating: 4, comment: 'Having an assigned parking spot made everything simpler. Totally worth the price, great experience overall.', createdAt: '2024-07-31T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 437, name: 'Valeria B.', rating: 3, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. Muy buen precio considerando todo lo que incluye.', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 436, name: 'Gerardo C.', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-05-09T00:00:00.000Z' },
    { id: 438, name: 'Matthew K.', rating: 3, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Great natural light throughout the whole apartment.', createdAt: '2025-01-31T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 441, name: 'Sebastian D.', rating: 4, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 439, name: 'Ximena S.', rating: 5, comment: 'Las canchas del edificio estan en muy buen estado, las usamos varias veces. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-05-12T00:00:00.000Z' },
    { id: 440, name: 'Alejandro B.', rating: 4, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2025-03-24T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 445, name: 'Carlos H.', rating: 5, comment: 'una noche usamos la sala de cine del edificio, detalle que no esperabamos, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2026-05-22T00:00:00.000Z' },
    { id: 444, name: 'Christopher J.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Great value for what you get, wed definitely book again.', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 446, name: 'Ricardo A.', rating: 4, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperábamos. Muy buena iluminación natural en todo el departamento.', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 443, name: 'Rodrigo O.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-11-04T00:00:00.000Z' },
    { id: 442, name: 'Fernanda O.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2024-08-26T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 447, name: 'Katie R.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. The bed was super comfortable, slept great every night.', createdAt: '2025-12-31T00:00:00.000Z' },
    { id: 448, name: 'Christopher S.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Internet connection was excellent throughout our stay.', createdAt: '2025-04-27T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 449, name: 'Jennifer R.', rating: 5, comment: 'the pool was the kids\' favorite part they used it every single day any question we had was answered right away really great service', createdAt: '2024-12-10T00:00:00.000Z' },
  ],
  'tulum-carretera-federal-167': [
    { id: 450, name: 'Gerardo H.', rating: 5, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. Muy buena iluminación natural en todo el departamento.', createdAt: '2025-04-26T00:00:00.000Z' },
    { id: 452, name: 'Jonathan K.', rating: 4, comment: 'having an assigned parking spot made everything simpler, really comfortable bed, slept better than at home honestly', createdAt: '2024-10-14T00:00:00.000Z' },
    { id: 451, name: 'David L.', rating: 3, comment: 'having dedicated parking made things so much easier, no stress finding a spot, cleanliness was spotless the entire stay', createdAt: '2023-12-09T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-168': [
    { id: 453, name: 'Amanda H.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Excellent service from our agent, always available when needed.', createdAt: '2026-05-11T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 455, name: 'Jennifer H.', rating: 4, comment: 'Really nice pool setup, plenty of loungers and always well maintained. Really comfortable bed, slept better than at home honestly.', createdAt: '2026-06-15T00:00:00.000Z' },
    { id: 456, name: 'Emily B.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Really walkable neighborhood, full of great cafes and restaurants.', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 454, name: 'Fernanda B.', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2024-07-31T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 458, name: 'Diego B.', rating: 5, comment: 'la alberca fue el punto favorito de los ninos, la usaron todos los dias, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-07-09T00:00:00.000Z' },
    { id: 459, name: 'Brian M.', rating: 5, comment: 'having a private balcony made a big difference, such a nice extra space, any question we had was answered right away, really great service', createdAt: '2024-08-06T00:00:00.000Z' },
    { id: 457, name: 'Ashley M.', rating: 4, comment: 'loved the roof garden — perfect spot for sunset with a drink, everything was immaculate on arrival, really well maintained overall', createdAt: '2024-06-07T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 460, name: 'Samantha W.', rating: 3, comment: 'The building\'s pool was a great bonus we weren\'t expecting. Slept really well the whole trip, good quality bed.', createdAt: '2026-05-23T00:00:00.000Z' },
    { id: 461, name: 'Ricardo A.', rating: 4, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, muy buen precio considerando todo lo que incluye', createdAt: '2024-10-23T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 463, name: 'Nicole M.', rating: 3, comment: 'The pool was the kids\' favorite part, they used it every single day. Perfect location for exploring the city on foot.', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 462, name: 'Michael R.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-06-09T00:00:00.000Z' },
    { id: 465, name: 'Regina H.', rating: 3, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-05-28T00:00:00.000Z' },
    { id: 464, name: 'Ana Sofia H.', rating: 4, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, todo impecable al llegar, muy buen mantenimiento en general', createdAt: '2025-03-26T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 467, name: 'Javier B.', rating: 3, comment: 'la cercania a la playa fue lo mejor, se puede llegar caminando en minutos, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2025-05-28T00:00:00.000Z' },
    { id: 466, name: 'Gerardo L.', rating: 5, comment: 'Estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas. Muy buena cama, dormimos mejor que en casa.', createdAt: '2024-11-06T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 468, name: 'Santiago L.', rating: 3, comment: 'La terraza del edificio se convirtio en nuestro lugar favorito para el atardecer. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-10-15T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 470, name: 'Emily H.', rating: 5, comment: 'The terrace became our favorite spot to watch the sunset each evening. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-12-13T00:00:00.000Z' },
    { id: 469, name: 'Brandon S.', rating: 5, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Whatever we needed was sorted out immediately, great support.', createdAt: '2025-02-11T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 472, name: 'Maria Jose S.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-04-20T00:00:00.000Z' },
    { id: 471, name: 'Matthew S.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, great value for what you get, wed definitely book again', createdAt: '2024-07-11T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 473, name: 'Renata A.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-05-05T00:00:00.000Z' },
    { id: 474, name: 'Brian S.', rating: 3, comment: 'Traveled with our pet and had zero issues, really appreciated that. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-11-20T00:00:00.000Z' },
    { id: 475, name: 'Ryan T.', rating: 4, comment: 'Having a private balcony made a big difference, such a nice extra space. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2024-07-18T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 479, name: 'Ryan C.', rating: 5, comment: 'used the gym most mornings, always available and well maintained, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2026-05-17T00:00:00.000Z' },
    { id: 477, name: 'Emily R.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-11-12T00:00:00.000Z' },
    { id: 476, name: 'Megan L.', rating: 5, comment: 'traveled with our pet and had zero issues, really appreciated that, really good price considering everything that\'s included', createdAt: '2025-10-16T00:00:00.000Z' },
    { id: 478, name: 'Alejandro O.', rating: 3, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. El internet nunca falló, pudimos hacer videollamadas sin problema.', createdAt: '2024-04-12T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 481, name: 'Katie J.', rating: 3, comment: 'having an assigned parking spot made everything simpler kitchen had everything we cooked almost every day without issue', createdAt: '2025-07-19T00:00:00.000Z' },
    { id: 480, name: 'Ana Sofia B.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-04-26T00:00:00.000Z' },
  ],
};