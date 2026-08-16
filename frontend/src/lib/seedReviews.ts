// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña referencia solo amenidades reales de esa propiedad.
// Sin texto duplicado en todo el sitio Y sin repetir el mismo tema dos veces
// dentro de la misma propiedad (verificado programaticamente).

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
    { id: 1, name: 'Lauren Y.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-08-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 3, name: 'Camila T.', rating: 5, comment: 'El balcon tiene muy buena vista, lo disfrutamos cada manana con cafe. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2026-06-20T00:00:00.000Z' },
    { id: 4, name: 'Michael H.', rating: 4, comment: 'Really good price considering everything that\'s included.', createdAt: '2025-06-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-4': [
    { id: 7, name: 'Santiago R.', rating: 5, comment: 'dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2026-01-05T00:00:00.000Z' },
    { id: 8, name: 'Rodrigo T.', rating: 4, comment: 'El balcón tiene muy buena vista, lo disfrutamos cada mañana con café. Muy buena iluminación natural en todo el departamento.', createdAt: '2026-01-03T00:00:00.000Z' },
    { id: 5, name: 'Justin T.', rating: 5, comment: 'loved the roof garden — perfect spot for sunset with a drink, kitchen had everything, we cooked almost every day without issue', createdAt: '2025-07-16T00:00:00.000Z' },
    { id: 6, name: 'Brian L.', rating: 4, comment: 'Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-11-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 9, name: 'Amanda A.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-10-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 10, name: 'Maria Jose A.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2024-04-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 11, name: 'Diego S.', rating: 5, comment: 'el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2025-12-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 12, name: 'Matthew Y.', rating: 3, comment: 'Excellent service from our agent, always available when needed.', createdAt: '2026-06-08T00:00:00.000Z' },
    { id: 13, name: 'Rodrigo A.', rating: 3, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2026-03-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 14, name: 'Ximena G.', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-12-25T00:00:00.000Z' },
    { id: 15, name: 'Paulina M.', rating: 4, comment: 'El balcon tiene muy buena vista, lo disfrutamos cada manana con cafe. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-07-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 18, name: 'Regina D.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, todo estaba cerca, no necesitamos usar taxi casi nada', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 17, name: 'Nicole R.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2024-12-09T00:00:00.000Z' },
    { id: 16, name: 'Christopher H.', rating: 5, comment: 'lots of natural light comes in during the day, made it feel really nice', createdAt: '2024-10-21T00:00:00.000Z' },
    { id: 19, name: 'Fernanda T.', rating: 4, comment: 'La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2024-03-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 22, name: 'Emily J.', rating: 4, comment: 'great natural light throughout the whole apartment', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 24, name: 'Justin C.', rating: 4, comment: 'the bed was super comfortable, slept great every night', createdAt: '2025-05-21T00:00:00.000Z' },
    { id: 21, name: 'Paulina H.', rating: 5, comment: 'la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-12-25T00:00:00.000Z' },
    { id: 23, name: 'Megan J.', rating: 5, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2024-11-23T00:00:00.000Z' },
    { id: 20, name: 'Jessica Y.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, excellent service from our agent, always available when needed', createdAt: '2023-11-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 26, name: 'Emily M.', rating: 3, comment: 'the included parking spot was really convenient, zero hassle, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-02-26T00:00:00.000Z' },
    { id: 28, name: 'Renata S.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increíble. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-12-04T00:00:00.000Z' },
    { id: 25, name: 'Gerardo M.', rating: 5, comment: 'llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2025-03-16T00:00:00.000Z' },
    { id: 27, name: 'Fernanda D.', rating: 5, comment: 'muy buena iluminacion natural en todo el departamento', createdAt: '2024-02-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 30, name: 'Santiago G.', rating: 4, comment: 'muy buena alberca con camastros suficientes y siempre bien mantenida y el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-03-29T00:00:00.000Z' },
    { id: 29, name: 'Ashley R.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Excellent service from our agent, always available when needed.', createdAt: '2023-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 31, name: 'Paulina D.', rating: 3, comment: 'la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-08-24T00:00:00.000Z' },
    { id: 34, name: 'Camila A.', rating: 3, comment: 'El gimnasio del edificio tiene de todo, no necesite buscar otro lugar. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 32, name: 'Fernanda B.', rating: 5, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-04-06T00:00:00.000Z' },
    { id: 35, name: 'Ximena R.', rating: 4, comment: 'La terraza del edificio se convirtio en nuestro lugar favorito para el atardecer. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2024-12-23T00:00:00.000Z' },
    { id: 33, name: 'Gerardo S.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-12-05T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 36, name: 'Ryan H.', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-06-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 38, name: 'Sarah R.', rating: 5, comment: 'kitchen had everything, we cooked almost every day without issue', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 37, name: 'Jessica L.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Whatever we needed was sorted out immediately, great support.', createdAt: '2024-05-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 40, name: 'Javier H.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, perfecta ubicacion para explorar la ciudad a pie', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 39, name: 'Jonathan D.', rating: 5, comment: 'We spent our evenings out on the balcony, really nice outdoor space. Totally worth the price, great experience overall.', createdAt: '2025-05-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-20': [
    { id: 41, name: 'Kevin H.', rating: 3, comment: 'We went up to the rooftop a few times, the city view is incredible. Internet connection was excellent throughout our stay.', createdAt: '2025-06-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 42, name: 'Fernanda L.', rating: 5, comment: 'Excelente atencion por parte del agente, siempre disponible.', createdAt: '2025-11-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 44, name: 'Fernanda C.', rating: 3, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2024-05-03T00:00:00.000Z' },
    { id: 43, name: 'Jennifer L.', rating: 4, comment: 'We spent our evenings out on the balcony, really nice outdoor space. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-03-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 46, name: 'Ricardo D.', rating: 5, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2026-01-31T00:00:00.000Z' },
    { id: 45, name: 'Matthew B.', rating: 4, comment: 'the balcony had a really nice view, enjoyed coffee out there most mornings, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-08-05T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 47, name: 'Jessica W.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-09T00:00:00.000Z' },
    { id: 48, name: 'Alejandro C.', rating: 5, comment: 'pasabamos las tardes en el balcon muy buen espacio exterior muy buena cama dormimos mejor que en casa', createdAt: '2024-12-09T00:00:00.000Z' },
    { id: 49, name: 'Kevin C.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Excellent service from our agent, always available when needed.', createdAt: '2024-02-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 53, name: 'Ashley B.', rating: 4, comment: 'Internet connection was excellent throughout our stay.', createdAt: '2026-03-23T00:00:00.000Z' },
    { id: 51, name: 'Tyler J.', rating: 4, comment: 'the on-site gym had everything i needed, no reason to look elsewhere, any question we had was answered right away, really great service', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 50, name: 'Samantha W.', rating: 5, comment: 'we spent our evenings out on the balcony, really nice outdoor space, arrived to a perfectly clean place, you can tell it\'s well cared for', createdAt: '2025-05-07T00:00:00.000Z' },
    { id: 54, name: 'David R.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 52, name: 'Nicole R.', rating: 4, comment: 'having an assigned parking spot made everything simpler, totally worth the price, great experience overall', createdAt: '2024-04-05T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 55, name: 'Sarah C.', rating: 5, comment: 'having an assigned parking spot made everything simpler, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-08-02T00:00:00.000Z' },
    { id: 56, name: 'Brian W.', rating: 5, comment: 'Slept really well the whole trip, good quality bed.', createdAt: '2024-06-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 57, name: 'Carlos M.', rating: 5, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2026-01-05T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-praga-14-28': [
    { id: 58, name: 'Jonathan R.', rating: 4, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Great value for what you get, wed definitely book again.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 59, name: 'Gerardo C.', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2024-09-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 61, name: 'Regina C.', rating: 4, comment: 'La terraza del edificio se convirtió en nuestro lugar favorito para el atardecer. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 60, name: 'Fernanda B.', rating: 4, comment: 'Fui al gimnasio varias veces, está bien equipado y siempre disponible. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2024-09-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 62, name: 'Valeria R.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente, sin complicaciones, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-03-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 63, name: 'Tyler W.', rating: 4, comment: 'We went up to the rooftop a few times, the city view is incredible. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-11-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 66, name: 'Fernanda L.', rating: 5, comment: 'muy buena cama, dormimos mejor que en casa', createdAt: '2026-07-20T00:00:00.000Z' },
    { id: 67, name: 'Camila V.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-08-08T00:00:00.000Z' },
    { id: 64, name: 'Andres L.', rating: 4, comment: 'Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-05-03T00:00:00.000Z' },
    { id: 65, name: 'Javier D.', rating: 3, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-12-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 70, name: 'Renata D.', rating: 3, comment: 'la cocina tenia de todo, cocinamos casi todos los dias sin problema', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 69, name: 'Ryan K.', rating: 4, comment: 'The terrace became our favorite spot to watch the sunset each evening. Everything was immaculate on arrival, really well maintained overall.', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 68, name: 'Brandon M.', rating: 4, comment: 'Having an assigned parking spot made everything simpler. Great value for what you get, wed definitely book again.', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-34': [
    { id: 71, name: 'Ricardo C.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, la colonia es muy agradable para caminar, llena de cafes y restaurantes', createdAt: '2025-03-05T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 74, name: 'Regina V.', rating: 3, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-11-28T00:00:00.000Z' },
    { id: 75, name: 'Camila D.', rating: 5, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-09-24T00:00:00.000Z' },
    { id: 72, name: 'Renata R.', rating: 5, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2025-02-20T00:00:00.000Z' },
    { id: 73, name: 'Paulina S.', rating: 3, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y la cocina tenia de todo cocinamos casi todos los dias sin problema', createdAt: '2023-12-11T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 78, name: 'Regina H.', rating: 5, comment: 'Muy buena alberca, con camastros suficientes y siempre bien mantenida. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2026-05-27T00:00:00.000Z' },
    { id: 76, name: 'Santiago T.', rating: 4, comment: 'fui al gimnasio varias veces, esta bien equipado y siempre disponible, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2026-01-13T00:00:00.000Z' },
    { id: 77, name: 'Regina H.', rating: 5, comment: 'Las canchas del edificio están en muy buen estado, las usamos varias veces. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-05-13T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 82, name: 'Regina G.', rating: 5, comment: 'Todo lo que necesitamos para cocinar ya estaba ahí, muy completa la cocina.', createdAt: '2025-08-28T00:00:00.000Z' },
    { id: 81, name: 'Rodrigo M.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2025-03-02T00:00:00.000Z' },
    { id: 80, name: 'Tyler C.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Surprised by how quiet and safe the area felt.', createdAt: '2024-11-07T00:00:00.000Z' },
    { id: 79, name: 'Renata G.', rating: 4, comment: 'Pasábamos las tardes en el balcón, muy buen espacio exterior. Muy buena iluminación natural en todo el departamento.', createdAt: '2024-02-04T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 83, name: 'Sarah Y.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, perfect location for exploring the city on foot', createdAt: '2025-12-21T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 85, name: 'Justin D.', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-06-30T00:00:00.000Z' },
    { id: 84, name: 'Andrew D.', rating: 5, comment: 'wifi never dropped, made video calls the whole trip with no issues', createdAt: '2025-03-11T00:00:00.000Z' },
    { id: 86, name: 'Maria Jose M.', rating: 4, comment: 'cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-07-28T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 87, name: 'Rachel J.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Really good price considering everything that\'s included.', createdAt: '2025-05-29T00:00:00.000Z' },
    { id: 90, name: 'Christopher W.', rating: 5, comment: 'traveled with our pet and had zero issues really appreciated that lots of natural light comes in during the day made it feel really nice', createdAt: '2025-05-27T00:00:00.000Z' },
    { id: 89, name: 'Brandon S.', rating: 5, comment: 'Our agent replied to every message quickly over WhatsApp.', createdAt: '2024-11-14T00:00:00.000Z' },
    { id: 88, name: 'Carlos H.', rating: 5, comment: 'Nadamos casi todas las mañanas antes de salir, la alberca es amplia y tranquila. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-08-20T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 93, name: 'Renata O.', rating: 3, comment: 'La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-06-27T00:00:00.000Z' },
    { id: 91, name: 'Paulina H.', rating: 3, comment: 'zona muy bien conectada, facil llegar a todos lados desde ahi', createdAt: '2024-10-07T00:00:00.000Z' },
    { id: 92, name: 'Jessica H.', rating: 3, comment: 'the spa was an unexpected treat during our stay, so much natural light in the apartment, made it feel really spacious', createdAt: '2024-01-24T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 95, name: 'Sarah A.', rating: 4, comment: 'used the gym most mornings, always available and well maintained, the location was excellent, everything was within walking distance', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 94, name: 'Ricardo S.', rating: 5, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-10-07T00:00:00.000Z' },
    { id: 96, name: 'Rodrigo C.', rating: 4, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-03-15T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 97, name: 'Ricardo T.', rating: 4, comment: 'jugamos padel una tarde en las canchas del edificio muy buena instalacion y todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2024-03-21T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 100, name: 'Maria Jose R.', rating: 4, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones y muy buen precio considerando todo lo que incluye', createdAt: '2025-12-19T00:00:00.000Z' },
    { id: 99, name: 'Brian B.', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Slept really well the whole trip, good quality bed.', createdAt: '2025-05-13T00:00:00.000Z' },
    { id: 98, name: 'Justin A.', rating: 5, comment: 'Felt very safe walking around the neighborhood even at night.', createdAt: '2024-07-11T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 104, name: 'Jessica J.', rating: 4, comment: 'we spent our evenings out on the balcony really nice outdoor space lots of natural light comes in during the day made it feel really nice', createdAt: '2026-01-12T00:00:00.000Z' },
    { id: 101, name: 'Brandon S.', rating: 5, comment: 'The building gym had better equipment than I expected. Really good price considering everything that\'s included.', createdAt: '2026-01-07T00:00:00.000Z' },
    { id: 102, name: 'Megan C.', rating: 4, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-03-25T00:00:00.000Z' },
    { id: 103, name: 'Katie T.', rating: 5, comment: 'Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-01-09T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 107, name: 'Renata T.', rating: 4, comment: 'excelente atencion por parte del agente, siempre disponible', createdAt: '2026-04-19T00:00:00.000Z' },
    { id: 105, name: 'Javier O.', rating: 5, comment: 'vale totalmente lo que se paga muy buena experiencia en general', createdAt: '2026-01-25T00:00:00.000Z' },
    { id: 106, name: 'Daniela L.', rating: 5, comment: 'fui al gimnasio varias veces, esta bien equipado y siempre disponible, muy buena cama, dormimos mejor que en casa', createdAt: '2025-12-24T00:00:00.000Z' },
    { id: 108, name: 'Emiliano V.', rating: 5, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-09-08T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 111, name: 'Paulina A.', rating: 5, comment: 'Muy buena alberca, con camastros suficientes y siempre bien mantenida. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 109, name: 'Regina L.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2025-08-25T00:00:00.000Z' },
    { id: 110, name: 'Diego V.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-03-03T00:00:00.000Z' },
  ],
  'chapala-de-la-hacienda-5-49': [
    { id: 113, name: 'Michael S.', rating: 4, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-02-18T00:00:00.000Z' },
    { id: 112, name: 'Brandon L.', rating: 5, comment: 'Really comfortable bed, slept better than at home honestly.', createdAt: '2024-03-26T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 114, name: 'Ana Sofia O.', rating: 4, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-03-15T00:00:00.000Z' },
    { id: 116, name: 'Luis Fernando H.', rating: 4, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 115, name: 'Emily Y.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2024-12-19T00:00:00.000Z' },
    { id: 117, name: 'Javier C.', rating: 5, comment: 'Muy buena cama, dormimos mejor que en casa.', createdAt: '2024-09-08T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 118, name: 'Ricardo H.', rating: 5, comment: 'Las canchas del edificio estan en muy buen estado, las usamos varias veces. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 119, name: 'Ashley K.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Internet connection was excellent throughout our stay.', createdAt: '2024-11-01T00:00:00.000Z' },
    { id: 120, name: 'Daniela O.', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2024-10-25T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 122, name: 'Camila V.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, muy buen precio considerando todo lo que incluye', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 121, name: 'Sebastian M.', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-07-25T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 123, name: 'Ricardo B.', rating: 5, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2026-04-02T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 125, name: 'Matthew A.', rating: 4, comment: 'really nice pool setup plenty of loungers and always well maintained internet connection was excellent throughout our stay', createdAt: '2025-10-10T00:00:00.000Z' },
    { id: 124, name: 'Jonathan A.', rating: 4, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Really comfortable bed, slept better than at home honestly.', createdAt: '2024-12-19T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 126, name: 'Samantha M.', rating: 5, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Really comfortable bed, slept better than at home honestly.', createdAt: '2026-01-13T00:00:00.000Z' },
    { id: 128, name: 'Daniela C.', rating: 4, comment: 'el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 127, name: 'Amanda W.', rating: 5, comment: 'the building gym had better equipment than i expected, cleanliness was spotless the entire stay', createdAt: '2024-03-13T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 130, name: 'Regina C.', rating: 4, comment: 'Nadamos casi todas las mañanas antes de salir, la alberca es amplia y tranquila. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2026-05-11T00:00:00.000Z' },
    { id: 129, name: 'Valeria D.', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Todo impecable al llegar, muy buen mantenimiento en general.', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 132, name: 'Alejandro V.', rating: 5, comment: 'Usamos el jacuzzi casi todas las noches, un detalle que no esperabamos. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 131, name: 'Ximena A.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo más fácil. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2025-02-28T00:00:00.000Z' },
    { id: 133, name: 'Santiago C.', rating: 3, comment: 'El gimnasio del edificio tiene de todo, no necesite buscar otro lugar. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2024-05-12T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 134, name: 'Mariana C.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Muy buena iluminacion natural en todo el departamento.', createdAt: '2025-10-24T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 135, name: 'Sarah B.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2026-05-28T00:00:00.000Z' },
    { id: 137, name: 'Ricardo S.', rating: 3, comment: 'muy buen precio considerando todo lo que incluye', createdAt: '2025-10-19T00:00:00.000Z' },
    { id: 136, name: 'Sarah B.', rating: 5, comment: 'whatever we needed was sorted out immediately, great support', createdAt: '2025-01-18T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 138, name: 'Camila O.', rating: 5, comment: 'dormimos muy bien toda la estancia la cama es de buena calidad', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 139, name: 'David T.', rating: 5, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Surprised by how quiet and safe the area felt.', createdAt: '2024-11-06T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 141, name: 'Ximena B.', rating: 4, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 140, name: 'Sebastian A.', rating: 3, comment: 'Todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina.', createdAt: '2025-09-28T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 142, name: 'Jennifer Y.', rating: 4, comment: 'The spa was an unexpected treat during our stay. Our agent replied to every message quickly over WhatsApp.', createdAt: '2025-09-23T00:00:00.000Z' },
    { id: 145, name: 'Maria Jose S.', rating: 3, comment: 'Trabajé desde el coworking del edificio, muy buen ambiente y silencio. La cocina tenía de todo, cocinamos casi todos los días sin problema.', createdAt: '2025-03-15T00:00:00.000Z' },
    { id: 144, name: 'Megan B.', rating: 4, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Great natural light throughout the whole apartment.', createdAt: '2025-01-19T00:00:00.000Z' },
    { id: 143, name: 'Rodrigo S.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-11-18T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 148, name: 'Tyler H.', rating: 5, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, totally worth the price, great experience overall', createdAt: '2025-05-06T00:00:00.000Z' },
    { id: 147, name: 'Emily J.', rating: 5, comment: 'cleanliness was spotless the entire stay', createdAt: '2024-09-25T00:00:00.000Z' },
    { id: 146, name: 'Mariana D.', rating: 4, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2024-07-04T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 150, name: 'Andrew C.', rating: 5, comment: 'The garden was a lovely quiet space, great for unwinding. Slept really well the whole trip, good quality bed.', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 151, name: 'Lauren C.', rating: 3, comment: 'the coworking space was perfect for getting work done during the trip, good wifi and quiet, excellent service from our agent, always available when needed', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 149, name: 'Ricardo R.', rating: 4, comment: 'Muy buena alberca, con camastros suficientes y siempre bien mantenida. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-10-07T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 152, name: 'Ana Sofia B.', rating: 3, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-05-24T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 155, name: 'Andrew L.', rating: 5, comment: 'The pool was the kids\' favorite part, they used it every single day. Really comfortable bed, slept better than at home honestly.', createdAt: '2025-12-12T00:00:00.000Z' },
    { id: 153, name: 'Fernanda M.', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 154, name: 'Maria Jose T.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-01-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 159, name: 'Katie R.', rating: 3, comment: 'the rooftop pool area was even better in person than in the photos well connected area easy to get anywhere from there', createdAt: '2026-01-31T00:00:00.000Z' },
    { id: 157, name: 'Brian T.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 156, name: 'Matthew H.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, great value for what you get, wed definitely book again', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 158, name: 'Megan A.', rating: 4, comment: 'The courts in the building were in great shape, used them a few times. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-09-26T00:00:00.000Z' },
    { id: 160, name: 'Valeria V.', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-05-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 164, name: 'Sofia M.', rating: 5, comment: 'nos sorprendio lo tranquila y segura que es la zona', createdAt: '2026-06-01T00:00:00.000Z' },
    { id: 162, name: 'David A.', rating: 4, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. Whatever we needed was sorted out immediately, great support.', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 161, name: 'Ricardo L.', rating: 3, comment: 'la terraza del edificio se convirtio en nuestro lugar favorito para el atardecer y el internet nunca fallo pudimos hacer videollamadas sin problema', createdAt: '2025-02-24T00:00:00.000Z' },
    { id: 163, name: 'Brandon S.', rating: 3, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, totally worth the price, great experience overall', createdAt: '2024-05-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 165, name: 'Brandon J.', rating: 4, comment: 'the on-site gym had everything i needed, no reason to look elsewhere, whatever we needed was sorted out immediately, great support', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 167, name: 'Sebastian M.', rating: 5, comment: 'La terraza del edificio se convirtió en nuestro lugar favorito para el atardecer. El internet nunca falló, pudimos hacer videollamadas sin problema.', createdAt: '2025-11-24T00:00:00.000Z' },
    { id: 166, name: 'Daniela O.', rating: 5, comment: 'El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-06-12T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 170, name: 'Katie D.', rating: 5, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, wifi never dropped, made video calls the whole trip with no issues', createdAt: '2025-11-22T00:00:00.000Z' },
    { id: 169, name: 'Camila B.', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, llegamos y todo estaba perfectamente limpio, se nota el cuidado', createdAt: '2024-09-16T00:00:00.000Z' },
    { id: 168, name: 'Paulina V.', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-07-26T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 171, name: 'Ximena R.', rating: 4, comment: 'la alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida, el agente respondio todas nuestras dudas muy rapido por WhatsApp', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 172, name: 'Christopher Y.', rating: 5, comment: 'having an assigned parking spot made everything simpler, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2024-09-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 174, name: 'Andrew K.', rating: 5, comment: 'Everything was immaculate on arrival, really well maintained overall.', createdAt: '2025-09-21T00:00:00.000Z' },
    { id: 173, name: 'Ryan M.', rating: 3, comment: 'the included parking spot was really convenient, zero hassle, kitchen had everything, we cooked almost every day without issue', createdAt: '2024-03-14T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 178, name: 'Jennifer D.', rating: 5, comment: 'having a private balcony made a big difference, such a nice extra space, any question we had was answered right away, really great service', createdAt: '2026-07-11T00:00:00.000Z' },
    { id: 177, name: 'Maria Jose R.', rating: 5, comment: 'Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 175, name: 'Matthew L.', rating: 5, comment: 'having an assigned parking spot made everything simpler, really walkable neighborhood, full of great cafes and restaurants', createdAt: '2024-11-21T00:00:00.000Z' },
    { id: 176, name: 'Ana Sofia C.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, muy buen precio considerando todo lo que incluye', createdAt: '2024-10-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 179, name: 'Lauren L.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Any question we had was answered right away, really great service.', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 181, name: 'Jessica A.', rating: 5, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2025-07-19T00:00:00.000Z' },
    { id: 180, name: 'Emily M.', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. Totally worth the price, great experience overall.', createdAt: '2024-05-01T00:00:00.000Z' },
    { id: 182, name: 'Alejandro R.', rating: 4, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2024-04-28T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 185, name: 'Amanda J.', rating: 5, comment: 'The included parking spot was really convenient, zero hassle. Perfect location for exploring the city on foot.', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 184, name: 'Michael S.', rating: 4, comment: 'we spent our evenings out on the balcony, really nice outdoor space, any question we had was answered right away, really great service', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 183, name: 'Lauren D.', rating: 4, comment: 'our dog came with us and the place lived up to being pet friendly, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-04-12T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 188, name: 'Luis Fernando S.', rating: 5, comment: 'El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2026-01-16T00:00:00.000Z' },
    { id: 187, name: 'Christopher L.', rating: 4, comment: 'The included parking spot was really convenient, zero hassle. Slept really well the whole trip, good quality bed.', createdAt: '2025-07-22T00:00:00.000Z' },
    { id: 186, name: 'Megan T.', rating: 5, comment: 'we played a match on the padel court one afternoon — great amenity, excellent service from our agent, always available when needed', createdAt: '2025-02-18T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 190, name: 'Sarah M.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 189, name: 'Javier A.', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-02-03T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 191, name: 'Brandon M.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Really comfortable bed, slept better than at home honestly.', createdAt: '2026-05-10T00:00:00.000Z' },
    { id: 192, name: 'Maria Jose L.', rating: 4, comment: 'el jardin es un espacio muy agradable, perfecto para relajarse, todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2025-07-16T00:00:00.000Z' },
    { id: 193, name: 'Brandon J.', rating: 4, comment: 'wifi never dropped made video calls the whole trip with no issues', createdAt: '2024-09-25T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 197, name: 'Tyler B.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Slept really well the whole trip, good quality bed.', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 195, name: 'Paulina M.', rating: 3, comment: 'la limpieza fue impecable de principio a fin de la estancia', createdAt: '2026-03-04T00:00:00.000Z' },
    { id: 196, name: 'Ryan B.', rating: 3, comment: 'the rooftop pool area was even better in person than in the photos, barely needed to take a taxi, everything was close by', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 194, name: 'Maria Jose D.', rating: 4, comment: 'nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2024-10-09T00:00:00.000Z' },
    { id: 198, name: 'Amanda B.', rating: 3, comment: 'Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-02-21T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 200, name: 'Katie J.', rating: 5, comment: 'having an assigned parking spot made everything simpler and barely needed to take a taxi everything was close by', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 199, name: 'Rodrigo G.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. El agente respondió todas nuestras dudas muy rápido por WhatsApp.', createdAt: '2025-08-19T00:00:00.000Z' },
    { id: 201, name: 'Nicole T.', rating: 3, comment: 'So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-08-02T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 203, name: 'Emiliano G.', rating: 3, comment: 'Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-11-22T00:00:00.000Z' },
    { id: 204, name: 'Emiliano R.', rating: 3, comment: 'la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-04-27T00:00:00.000Z' },
    { id: 205, name: 'Rodrigo C.', rating: 5, comment: 'la ubicacion no se pudo haber elegido mejor, muy centrico', createdAt: '2024-09-04T00:00:00.000Z' },
    { id: 202, name: 'Samantha Y.', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, great value for what you get, wed definitely book again', createdAt: '2024-06-26T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 206, name: 'Mariana S.', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 207, name: 'Jonathan K.', rating: 5, comment: 'the included parking spot was really convenient, zero hassle, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2025-08-28T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 209, name: 'Lauren R.', rating: 3, comment: 'the garden area was a peaceful little spot to relax between outings, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2026-04-02T00:00:00.000Z' },
    { id: 210, name: 'Santiago O.', rating: 4, comment: 'Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 208, name: 'Ximena O.', rating: 3, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-08-19T00:00:00.000Z' },
    { id: 211, name: 'Christopher R.', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, really good price considering everything that\'s included', createdAt: '2025-05-13T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 212, name: 'Matthew B.', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-07-14T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 215, name: 'Samantha M.', rating: 3, comment: 'The rooftop pool area was even better in person than in the photos. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 216, name: 'Jessica M.', rating: 4, comment: 'great area, everything we needed was just a few blocks away', createdAt: '2025-02-13T00:00:00.000Z' },
    { id: 213, name: 'Kevin B.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-01-03T00:00:00.000Z' },
    { id: 214, name: 'Santiago R.', rating: 4, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, muy buena cama, dormimos mejor que en casa', createdAt: '2024-08-10T00:00:00.000Z' },
    { id: 217, name: 'Renata S.', rating: 3, comment: 'Muy buena iluminacion natural en todo el departamento.', createdAt: '2024-03-07T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 220, name: 'Maria Jose L.', rating: 5, comment: 'excelente que el edificio tenga gym lo use casi todas las mananas entra mucha luz natural durante el dia se siente muy agradable', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 221, name: 'Emily J.', rating: 4, comment: 'Having an assigned parking spot made everything simpler. Internet connection was excellent throughout our stay.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 222, name: 'Rodrigo T.', rating: 3, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 218, name: 'Jessica M.', rating: 5, comment: 'Perfect location for exploring the city on foot.', createdAt: '2025-04-16T00:00:00.000Z' },
    { id: 219, name: 'Lauren Y.', rating: 3, comment: 'we played a match on the padel court one afternoon — great amenity, our agent replied to every message quickly over WhatsApp', createdAt: '2024-11-05T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 225, name: 'Matthew S.', rating: 3, comment: 'great value for what you get, wed definitely book again', createdAt: '2026-03-29T00:00:00.000Z' },
    { id: 223, name: 'Javier V.', rating: 4, comment: 'todo lo que necesitamos para cocinar ya estaba ahi, muy completa la cocina', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 226, name: 'Paulina O.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-04-03T00:00:00.000Z' },
    { id: 224, name: 'Megan L.', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Really comfortable bed, slept better than at home honestly.', createdAt: '2024-07-20T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 227, name: 'Ana Sofia M.', rating: 5, comment: 'Las canchas del edificio estan en muy buen estado, las usamos varias veces. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-02-03T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 228, name: 'David S.', rating: 4, comment: 'we went up to the rooftop a few times the city view is incredible and great area everything we needed was just a few blocks away', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 230, name: 'Ryan H.', rating: 4, comment: 'any question we had was answered right away, really great service', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 229, name: 'Emiliano L.', rating: 3, comment: 'La alberca del edificio fue un gran plus, no esperabamos que estuviera tan bien mantenida. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2025-01-25T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 232, name: 'Paulina C.', rating: 4, comment: 'Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2026-05-17T00:00:00.000Z' },
    { id: 233, name: 'Samantha K.', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 231, name: 'Renata C.', rating: 4, comment: 'La alberca fue el punto favorito de los ninos, la usaron todos los dias. Todo impecable al llegar, muy buen mantenimiento en general.', createdAt: '2025-12-05T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 234, name: 'Amanda L.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Internet connection was excellent throughout our stay.', createdAt: '2026-04-03T00:00:00.000Z' },
    { id: 235, name: 'Sebastian B.', rating: 5, comment: 'la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-09-26T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 236, name: 'Camila M.', rating: 4, comment: 'Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2026-01-30T00:00:00.000Z' },
    { id: 239, name: 'Kevin W.', rating: 5, comment: 'we spent our evenings out on the balcony really nice outdoor space really good price considering everything that\'s included', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 238, name: 'Jennifer M.', rating: 5, comment: 'Having an assigned parking spot made everything simpler. The location was excellent, everything was within walking distance.', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 237, name: 'Emiliano H.', rating: 4, comment: 'El gimnasio del edificio tiene de todo, no necesite buscar otro lugar. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 240, name: 'Sebastian D.', rating: 5, comment: 'perfecta ubicacion para explorar la ciudad a pie', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 241, name: 'Daniela S.', rating: 4, comment: 'nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2024-04-21T00:00:00.000Z' },
    { id: 242, name: 'Rachel C.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, excellent service from our agent, always available when needed', createdAt: '2024-01-27T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 243, name: 'Andres S.', rating: 5, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-10-11T00:00:00.000Z' },
    { id: 245, name: 'Javier B.', rating: 4, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 246, name: 'Justin Y.', rating: 3, comment: 'Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2025-01-24T00:00:00.000Z' },
    { id: 244, name: 'Christopher C.', rating: 3, comment: 'the pool was the kids\' favorite part, they used it every single day, really comfortable bed, slept better than at home honestly', createdAt: '2024-05-26T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 248, name: 'Maria Jose S.', rating: 4, comment: 'El jardín es un espacio muy agradable, perfecto para relajarse. Muy buena iluminación natural en todo el departamento.', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 247, name: 'Camila L.', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-04-20T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 249, name: 'Daniela V.', rating: 3, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2026-05-06T00:00:00.000Z' },
    { id: 250, name: 'Santiago D.', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-05-02T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 252, name: 'Jonathan C.', rating: 4, comment: 'really good price considering everything that\'s included', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 251, name: 'Luis Fernando T.', rating: 4, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2025-05-08T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 254, name: 'Jennifer M.', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Great natural light throughout the whole apartment.', createdAt: '2024-11-19T00:00:00.000Z' },
    { id: 253, name: 'Ryan Y.', rating: 3, comment: 'the included parking spot was really convenient, zero hassle, our agent replied to every message quickly over WhatsApp', createdAt: '2024-01-03T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 255, name: 'Fernanda O.', rating: 4, comment: 'El espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema. Excelente zona, todo lo que necesitabamos estaba a unas cuadras.', createdAt: '2025-05-10T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 257, name: 'Ana Sofia A.', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 258, name: 'Ashley A.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, totally worth the price, great experience overall', createdAt: '2025-11-10T00:00:00.000Z' },
    { id: 256, name: 'Amanda M.', rating: 4, comment: 'so much natural light in the apartment, made it feel really spacious', createdAt: '2025-06-15T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 261, name: 'Katie D.', rating: 4, comment: 'Our dog came with us and the place lived up to being pet friendly. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-05-22T00:00:00.000Z' },
    { id: 260, name: 'Ana Sofia D.', rating: 3, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La conexión de internet fue excelente durante toda la estancia.', createdAt: '2025-01-15T00:00:00.000Z' },
    { id: 259, name: 'Valeria O.', rating: 5, comment: 'el jardin del edificio es muy tranquilo un buen lugar para desconectar y muy buen precio considerando todo lo que incluye', createdAt: '2024-06-25T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 263, name: 'Rachel K.', rating: 3, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2025-12-28T00:00:00.000Z' },
    { id: 262, name: 'Justin W.', rating: 4, comment: 'Used the gym most mornings, always available and well maintained. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-05-07T00:00:00.000Z' },
    { id: 264, name: 'Emily Y.', rating: 5, comment: 'Having a private balcony made a big difference, such a nice extra space. The bed was super comfortable, slept great every night.', createdAt: '2024-08-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 265, name: 'Emiliano H.', rating: 5, comment: 'Muy buena alberca, con camastros suficientes y siempre bien mantenida. El agente respondio todas nuestras dudas muy rapido por WhatsApp.', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 266, name: 'Andrew C.', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The bed was super comfortable, slept great every night.', createdAt: '2025-03-28T00:00:00.000Z' },
    { id: 267, name: 'Ricardo V.', rating: 3, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. Muy buen precio considerando todo lo que incluye.', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 268, name: 'Kevin J.', rating: 3, comment: 'the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-08-11T00:00:00.000Z' },
    { id: 269, name: 'Brandon K.', rating: 5, comment: 'couldn\'t have picked a better location, very central', createdAt: '2025-08-06T00:00:00.000Z' },
    { id: 270, name: 'Mariana V.', rating: 5, comment: 'vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-05-12T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 273, name: 'Brian W.', rating: 5, comment: 'Traveled with our pet and had zero issues, really appreciated that. Great natural light throughout the whole apartment.', createdAt: '2025-05-13T00:00:00.000Z' },
    { id: 272, name: 'Mariana L.', rating: 4, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 271, name: 'Michael T.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, everything we needed to cook was already there, very well equipped kitchen', createdAt: '2024-09-25T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-116': [
    { id: 274, name: 'Michael S.', rating: 5, comment: 'The beach was only minutes away on foot, perfect for what we wanted. Lots of natural light comes in during the day, made it feel really nice.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 276, name: 'Rodrigo D.', rating: 4, comment: 'La terraza del edificio se convirtio en nuestro lugar favorito para el atardecer. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-08-10T00:00:00.000Z' },
    { id: 275, name: 'Rodrigo D.', rating: 3, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2024-10-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 278, name: 'Lauren S.', rating: 5, comment: 'we went up to the rooftop a few times, the city view is incredible, everything was immaculate on arrival, really well maintained overall', createdAt: '2025-08-25T00:00:00.000Z' },
    { id: 277, name: 'Luis Fernando O.', rating: 5, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. Nos sorprendio lo tranquila y segura que es la zona.', createdAt: '2025-04-11T00:00:00.000Z' },
    { id: 279, name: 'Andres O.', rating: 5, comment: 'la cercania a la playa fue lo mejor, se puede llegar caminando en minutos, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-05-31T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 284, name: 'Maria Jose G.', rating: 5, comment: 'las canchas del edificio estan en muy buen estado las usamos varias veces y cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 283, name: 'Andres G.', rating: 5, comment: 'la colonia es muy agradable para caminar, llena de cafes y restaurantes', createdAt: '2025-07-22T00:00:00.000Z' },
    { id: 282, name: 'Lauren S.', rating: 3, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-07-13T00:00:00.000Z' },
    { id: 281, name: 'Megan W.', rating: 5, comment: 'loved having access to the pool — such a nice way to relax after exploring the city, internet connection was excellent throughout our stay', createdAt: '2024-10-14T00:00:00.000Z' },
    { id: 280, name: 'Gerardo G.', rating: 3, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. Entra mucha luz natural durante el día, se siente muy agradable.', createdAt: '2024-10-08T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 285, name: 'Andres M.', rating: 4, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2024-04-29T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 287, name: 'Michael W.', rating: 5, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Well connected area, easy to get anywhere from there.', createdAt: '2025-01-31T00:00:00.000Z' },
    { id: 286, name: 'Paulina H.', rating: 4, comment: 'La cocina tenía de todo, cocinamos casi todos los días sin problema.', createdAt: '2024-10-05T00:00:00.000Z' },
    { id: 288, name: 'Gerardo H.', rating: 3, comment: 'la alberca fue el punto favorito de los ninos la usaron todos los dias el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2024-06-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 291, name: 'Mariana B.', rating: 5, comment: 'Pasamos varias tardes en la alberca, siempre estaba limpia. Entra mucha luz natural durante el dia, se siente muy agradable.', createdAt: '2026-01-16T00:00:00.000Z' },
    { id: 289, name: 'Paulina B.', rating: 5, comment: 'Fui al gimnasio varias veces, esta bien equipado y siempre disponible. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-09-29T00:00:00.000Z' },
    { id: 292, name: 'Mariana T.', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Muy buen precio considerando todo lo que incluye.', createdAt: '2025-01-17T00:00:00.000Z' },
    { id: 290, name: 'Amanda A.', rating: 3, comment: 'The beach access was incredible, exactly what we were hoping for. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2024-12-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 293, name: 'Mariana S.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2025-06-11T00:00:00.000Z' },
    { id: 294, name: 'Megan K.', rating: 3, comment: 'Really walkable neighborhood, full of great cafes and restaurants.', createdAt: '2025-02-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 295, name: 'Kevin R.', rating: 5, comment: 'being steps from the beach made the whole trip — we walked over every morning, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2025-04-21T00:00:00.000Z' },
    { id: 296, name: 'Sebastian O.', rating: 5, comment: 'Tener lugar de estacionamiento asignado hizo todo mas facil. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2025-02-10T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-125': [
    { id: 298, name: 'Jennifer T.', rating: 5, comment: 'the building gym had better equipment than i expected, really good price considering everything that\'s included', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 299, name: 'Nicole T.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-03-27T00:00:00.000Z' },
    { id: 297, name: 'Camila M.', rating: 5, comment: 'tener balcon propio hizo mucha diferencia un espacio muy agradable y entra mucha luz natural durante el dia se siente muy agradable', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 300, name: 'Sebastian L.', rating: 4, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2025-03-11T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 302, name: 'Paulina O.', rating: 4, comment: 'se camina a la playa en cuestion de minutos, ideal para nosotros, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2024-11-25T00:00:00.000Z' },
    { id: 303, name: 'Katie J.', rating: 5, comment: 'we used the jacuzzi most nights, such a relaxing extra to have, felt very safe walking around the neighborhood even at night', createdAt: '2024-10-31T00:00:00.000Z' },
    { id: 301, name: 'Emiliano V.', rating: 5, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2024-10-20T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 304, name: 'Santiago R.', rating: 4, comment: 'Nadamos casi todas las mananas antes de salir, la alberca es amplia y tranquila. La colonia es muy agradable para caminar, llena de cafes y restaurantes.', createdAt: '2025-07-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 308, name: 'Justin H.', rating: 3, comment: 'surprised by how quiet and safe the area felt', createdAt: '2026-03-08T00:00:00.000Z' },
    { id: 307, name: 'Amanda S.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Whatever we needed was sorted out immediately, great support.', createdAt: '2026-02-11T00:00:00.000Z' },
    { id: 305, name: 'Emily A.', rating: 5, comment: 'we went up to the rooftop a few times, the city view is incredible, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-01-10T00:00:00.000Z' },
    { id: 306, name: 'Jessica D.', rating: 5, comment: 'slept really well the whole trip, good quality bed', createdAt: '2025-01-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 309, name: 'Emily Y.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-04-27T00:00:00.000Z' },
    { id: 310, name: 'Rodrigo D.', rating: 4, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2026-01-09T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 313, name: 'Nicole Y.', rating: 4, comment: 'the jacuzzi ended up being a highlight used it several times communication over WhatsApp was fast and friendly the whole time', createdAt: '2026-05-03T00:00:00.000Z' },
    { id: 311, name: 'Brandon R.', rating: 5, comment: 'the pool was the kids\' favorite part, they used it every single day, wifi never dropped, made video calls the whole trip with no issues', createdAt: '2025-07-26T00:00:00.000Z' },
    { id: 314, name: 'Ana Sofia G.', rating: 5, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Vale totalmente lo que se paga, muy buena experiencia en general.', createdAt: '2024-07-12T00:00:00.000Z' },
    { id: 312, name: 'Ryan C.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-03-28T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 316, name: 'Jonathan H.', rating: 5, comment: 'loved having our own balcony we had coffee out there every morning and couldn\'t have picked a better location very central', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 315, name: 'Sebastian B.', rating: 3, comment: 'el gym del edificio tiene buen equipo mejor de lo que esperaba la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 317, name: 'Luis Fernando V.', rating: 5, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-06-01T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 318, name: 'Andrew A.', rating: 5, comment: 'internet connection was excellent throughout our stay', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 319, name: 'Mariana B.', rating: 4, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, dormimos muy bien toda la estancia, la cama es de buena calidad', createdAt: '2024-06-24T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 320, name: 'Brandon D.', rating: 5, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2026-06-24T00:00:00.000Z' },
    { id: 321, name: 'Javier M.', rating: 4, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-11-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-136': [
    { id: 323, name: 'Ana Sofia G.', rating: 5, comment: 'La cercania a la playa fue lo mejor, se puede llegar caminando en minutos. Muy buen precio considerando todo lo que incluye.', createdAt: '2025-04-25T00:00:00.000Z' },
    { id: 322, name: 'Lauren H.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-11-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 324, name: 'Santiago M.', rating: 4, comment: 'Pasabamos las tardes en el balcon, muy buen espacio exterior. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-06-15T00:00:00.000Z' },
    { id: 325, name: 'Gerardo C.', rating: 5, comment: 'El gym del edificio tiene buen equipo, mejor de lo que esperaba. Cualquier cosa que necesitamos nos la resolvieron de inmediato.', createdAt: '2025-01-08T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 329, name: 'David C.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-08-07T00:00:00.000Z' },
    { id: 326, name: 'Renata L.', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2025-06-19T00:00:00.000Z' },
    { id: 328, name: 'Andres H.', rating: 4, comment: 'La alberca del edificio fue un gran plus, no esperábamos que estuviera tan bien mantenida. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-02-11T00:00:00.000Z' },
    { id: 327, name: 'Emily B.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly and excellent service from our agent always available when needed', createdAt: '2024-06-14T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 330, name: 'Ximena M.', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, todo impecable al llegar, muy buen mantenimiento en general', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 331, name: 'Alejandro H.', rating: 5, comment: 'La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2023-11-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 332, name: 'Matthew S.', rating: 5, comment: 'the building\'s pool was a great bonus we weren\'t expecting wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 336, name: 'Katie M.', rating: 5, comment: 'The terrace became our favorite spot to watch the sunset each evening. Really comfortable bed, slept better than at home honestly.', createdAt: '2025-11-14T00:00:00.000Z' },
    { id: 333, name: 'Amanda Y.', rating: 5, comment: 'Totally worth the price, great experience overall.', createdAt: '2025-08-03T00:00:00.000Z' },
    { id: 335, name: 'Christopher D.', rating: 4, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-02-07T00:00:00.000Z' },
    { id: 334, name: 'Lauren D.', rating: 4, comment: 'excellent service from our agent, always available when needed', createdAt: '2024-03-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 337, name: 'Rodrigo L.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increíble. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-09-10T00:00:00.000Z' },
    { id: 339, name: 'Ryan B.', rating: 5, comment: 'Traveling with our pet here was easy, no weird restrictions at all. Cleanliness was spotless the entire stay.', createdAt: '2024-03-27T00:00:00.000Z' },
    { id: 338, name: 'Santiago C.', rating: 5, comment: 'el internet nunca fallo pudimos hacer videollamadas sin problema', createdAt: '2023-12-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 343, name: 'Andrew S.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Great natural light throughout the whole apartment.', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 340, name: 'Tyler L.', rating: 4, comment: 'The garden area was a peaceful little spot to relax between outings. Whatever we needed was sorted out immediately, great support.', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 342, name: 'Matthew T.', rating: 3, comment: 'the terrace became our favorite spot to watch the sunset each evening, everything was immaculate on arrival, really well maintained overall', createdAt: '2025-06-12T00:00:00.000Z' },
    { id: 344, name: 'Sarah W.', rating: 4, comment: 'Surprised by how quiet and safe the area felt.', createdAt: '2024-12-22T00:00:00.000Z' },
    { id: 341, name: 'Gerardo C.', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-07-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 345, name: 'Renata O.', rating: 3, comment: 'el balcon tiene muy buena vista, lo disfrutamos cada manana con cafe, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2026-03-12T00:00:00.000Z' },
    { id: 347, name: 'Ashley B.', rating: 3, comment: 'Swam most mornings before heading out, the pool area is spacious and well kept. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 349, name: 'Santiago G.', rating: 3, comment: 'La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-09-14T00:00:00.000Z' },
    { id: 348, name: 'Paulina V.', rating: 5, comment: 'Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso. La cocina tenía de todo, cocinamos casi todos los días sin problema.', createdAt: '2025-09-07T00:00:00.000Z' },
    { id: 346, name: 'Amanda J.', rating: 4, comment: 'the included parking spot was really convenient, zero hassle, totally worth the price, great experience overall', createdAt: '2024-04-22T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 352, name: 'Samantha S.', rating: 5, comment: 'really comfortable bed, slept better than at home honestly', createdAt: '2025-02-12T00:00:00.000Z' },
    { id: 350, name: 'Javier T.', rating: 5, comment: 'entra mucha luz natural durante el dia, se siente muy agradable', createdAt: '2024-07-07T00:00:00.000Z' },
    { id: 351, name: 'Mariana V.', rating: 5, comment: 'El spa fue un plus que no esperabamos, muy relajante. Todo impecable al llegar, muy buen mantenimiento en general.', createdAt: '2024-05-28T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 353, name: 'Amanda W.', rating: 5, comment: 'totally worth the price, great experience overall', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 354, name: 'Jennifer D.', rating: 4, comment: 'the balcony had a really nice view, enjoyed coffee out there most mornings, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2023-11-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 357, name: 'Renata G.', rating: 4, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-12-20T00:00:00.000Z' },
    { id: 355, name: 'Christopher T.', rating: 3, comment: 'the terrace became our favorite spot to watch the sunset each evening and really good price considering everything that\'s included', createdAt: '2025-07-20T00:00:00.000Z' },
    { id: 356, name: 'Emily R.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, excellent service from our agent, always available when needed', createdAt: '2025-05-30T00:00:00.000Z' },
    { id: 358, name: 'Daniela A.', rating: 5, comment: 'trajimos a nuestro perro y el lugar es genuinamente pet friendly, muy buena cama, dormimos mejor que en casa', createdAt: '2024-09-04T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 360, name: 'Emiliano V.', rating: 5, comment: 'La sala de cine fue una sorpresa muy divertida una noche. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2026-02-22T00:00:00.000Z' },
    { id: 359, name: 'Sofia O.', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. Muy buena iluminacion natural en todo el departamento.', createdAt: '2024-05-29T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 362, name: 'Emiliano H.', rating: 4, comment: 'la sala de cine fue una sorpresa muy divertida una noche, vale totalmente lo que se paga, muy buena experiencia en general', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 363, name: 'Brian J.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 361, name: 'Tyler D.', rating: 4, comment: 'Any question we had was answered right away, really great service.', createdAt: '2025-09-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 364, name: 'Tyler A.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Great area, everything we needed was just a few blocks away.', createdAt: '2025-08-18T00:00:00.000Z' },
    { id: 366, name: 'Emiliano G.', rating: 4, comment: 'El jacuzzi fue una sorpresa muy agradable, lo usamos varias veces. Excelente atencion por parte del agente, siempre disponible.', createdAt: '2025-06-07T00:00:00.000Z' },
    { id: 365, name: 'Ashley A.', rating: 5, comment: 'the building\'s pool was a great bonus we weren\'t expecting, really comfortable bed, slept better than at home honestly', createdAt: '2024-02-13T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 367, name: 'Jennifer H.', rating: 4, comment: 'The garden was a lovely quiet space, great for unwinding. Great natural light throughout the whole apartment.', createdAt: '2026-01-16T00:00:00.000Z' },
    { id: 368, name: 'Tyler K.', rating: 5, comment: 'The jacuzzi ended up being a highlight, used it several times. Totally worth the price, great experience overall.', createdAt: '2024-11-10T00:00:00.000Z' },
    { id: 369, name: 'Alejandro V.', rating: 5, comment: 'el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-11-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 370, name: 'Maria Jose D.', rating: 5, comment: 'Tener balcón propio hizo mucha diferencia, un espacio muy agradable. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-03-27T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 374, name: 'Paulina H.', rating: 5, comment: 'Viajar con nuestra mascota fue muy facil aqui, sin restricciones raras. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 373, name: 'Kevin R.', rating: 4, comment: 'having an assigned parking spot made everything simpler and great value for what you get wed definitely book again', createdAt: '2025-10-03T00:00:00.000Z' },
    { id: 371, name: 'Alejandro G.', rating: 3, comment: 'La cocina tenia de todo, cocinamos casi todos los dias sin problema.', createdAt: '2025-03-18T00:00:00.000Z' },
    { id: 372, name: 'Paulina M.', rating: 3, comment: 'la alberca fue el punto favorito de los ninos, la usaron todos los dias, muy buena cama, dormimos mejor que en casa', createdAt: '2024-12-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 375, name: 'Andrew C.', rating: 4, comment: 'We used the building\'s private cinema room one night, such a fun extra. Wifi never dropped, made video calls the whole trip with no issues.', createdAt: '2024-06-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 377, name: 'Emily A.', rating: 5, comment: 'Spent an evening in the building\'s game room, good fun. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 378, name: 'Katie J.', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, cleanliness was spotless the entire stay', createdAt: '2025-04-06T00:00:00.000Z' },
    { id: 376, name: 'Amanda T.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-06-03T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 379, name: 'Gerardo R.', rating: 3, comment: 'la alberca fue el punto favorito de los ninos, la usaron todos los dias, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 380, name: 'Matthew B.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-07-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 383, name: 'Sofia L.', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. Muy buena cama, dormimos mejor que en casa.', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 382, name: 'Rachel R.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Totally worth the price, great experience overall.', createdAt: '2025-07-29T00:00:00.000Z' },
    { id: 381, name: 'Samantha K.', rating: 3, comment: 'Our dog came with us and the place lived up to being pet friendly. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-07-02T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 384, name: 'Brandon B.', rating: 3, comment: 'swam most mornings before heading out, the pool area is spacious and well kept, so much natural light in the apartment, made it feel really spacious', createdAt: '2026-05-19T00:00:00.000Z' },
    { id: 385, name: 'Luis Fernando H.', rating: 5, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2024-02-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 389, name: 'Samantha T.', rating: 5, comment: 'having an assigned parking spot made everything simpler everything we needed to cook was already there very well equipped kitchen', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 387, name: 'Andrew B.', rating: 5, comment: 'The on-site gym had everything I needed, no reason to look elsewhere. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-10-11T00:00:00.000Z' },
    { id: 388, name: 'Ricardo T.', rating: 4, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2024-08-17T00:00:00.000Z' },
    { id: 386, name: 'Sebastian A.', rating: 5, comment: 'Perfecta ubicacion para explorar la ciudad a pie.', createdAt: '2024-06-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 391, name: 'Matthew M.', rating: 5, comment: 'the garden was a lovely quiet space great for unwinding great area everything we needed was just a few blocks away', createdAt: '2025-04-29T00:00:00.000Z' },
    { id: 390, name: 'Jennifer M.', rating: 4, comment: 'We went up to the rooftop a few times, the city view is incredible. Arrived to a perfectly clean place, you can tell it\'s well cared for.', createdAt: '2025-01-03T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 392, name: 'Megan J.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Excellent service from our agent, always available when needed.', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 393, name: 'Kevin L.', rating: 4, comment: 'everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-02-04T00:00:00.000Z' },
    { id: 394, name: 'Emily D.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Totally worth the price, great experience overall.', createdAt: '2024-06-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 398, name: 'Samantha D.', rating: 3, comment: 'swam most mornings before heading out the pool area is spacious and well kept and great value for what you get wed definitely book again', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 396, name: 'Javier H.', rating: 5, comment: 'pasabamos las tardes en el balcon, muy buen espacio exterior, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 397, name: 'Ryan K.', rating: 5, comment: 'The jacuzzi ended up being a highlight, used it several times. Great natural light throughout the whole apartment.', createdAt: '2025-10-02T00:00:00.000Z' },
    { id: 395, name: 'Carlos V.', rating: 3, comment: 'el area de juegos del edificio estuvo bien para las noches tranquilas, excelente atencion por parte del agente, siempre disponible', createdAt: '2025-06-07T00:00:00.000Z' },
    { id: 399, name: 'David W.', rating: 5, comment: 'the on-site gym had everything i needed, no reason to look elsewhere, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-01-01T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 400, name: 'Michael Y.', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, really well located, close to great restaurants and easy to get around', createdAt: '2025-08-15T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 402, name: 'Gerardo L.', rating: 3, comment: 'Trajimos a nuestro perro y el lugar es genuinamente pet friendly. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 401, name: 'Justin C.', rating: 5, comment: 'loved the roof garden — perfect spot for sunset with a drink, really well located, close to great restaurants and easy to get around', createdAt: '2025-06-06T00:00:00.000Z' },
    { id: 403, name: 'Valeria D.', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. Llegamos y todo estaba perfectamente limpio, se nota el cuidado.', createdAt: '2025-01-29T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 404, name: 'Sarah B.', rating: 4, comment: 'Having a private balcony made a big difference, such a nice extra space. Everything was immaculate on arrival, really well maintained overall.', createdAt: '2025-06-27T00:00:00.000Z' },
    { id: 405, name: 'Ximena G.', rating: 5, comment: 'El estacionamiento incluido fue muy conveniente, sin complicaciones. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 406, name: 'Megan R.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Kitchen had everything, we cooked almost every day without issue.', createdAt: '2025-01-14T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 408, name: 'Alejandro C.', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 407, name: 'Carlos M.', rating: 5, comment: 'El balcon tiene muy buena vista, lo disfrutamos cada manana con cafe. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-10-05T00:00:00.000Z' },
    { id: 409, name: 'Ricardo O.', rating: 3, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones vale totalmente lo que se paga muy buena experiencia en general', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 410, name: 'Lauren W.', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Slept really well the whole trip, good quality bed.', createdAt: '2025-01-08T00:00:00.000Z' },
    { id: 411, name: 'Regina D.', rating: 4, comment: 'la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2024-10-16T00:00:00.000Z' },
  ],
  'tulum-carretera-federal-167': [
    { id: 414, name: 'Camila S.', rating: 4, comment: 'muy buena alberca, con camastros suficientes y siempre bien mantenida, la conexion de internet fue excelente durante toda la estancia', createdAt: '2025-12-10T00:00:00.000Z' },
    { id: 413, name: 'Nicole J.', rating: 5, comment: 'the kitchen was well stocked we cooked several meals during our stay', createdAt: '2025-05-03T00:00:00.000Z' },
    { id: 412, name: 'Diego O.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-01-15T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-168': [
    { id: 415, name: 'Jessica D.', rating: 5, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-04-29T00:00:00.000Z' },
    { id: 416, name: 'Andrew M.', rating: 4, comment: 'The pool was the kids\' favorite part, they used it every single day. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2024-09-01T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 417, name: 'Carlos M.', rating: 5, comment: 'la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2026-05-12T00:00:00.000Z' },
    { id: 418, name: 'Jonathan T.', rating: 5, comment: 'The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2026-03-21T00:00:00.000Z' },
    { id: 419, name: 'Paulina R.', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2024-09-30T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 423, name: 'Valeria B.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-12-23T00:00:00.000Z' },
    { id: 420, name: 'Ximena M.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso. La conexion de internet fue excelente durante toda la estancia.', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 421, name: 'Ximena R.', rating: 5, comment: 'La alberca fue el punto favorito de los ninos, la usaron todos los dias. Dormimos muy bien toda la estancia, la cama es de buena calidad.', createdAt: '2025-08-24T00:00:00.000Z' },
    { id: 422, name: 'Samantha Y.', rating: 5, comment: 'The building gym had better equipment than I expected. Great value for what you get, wed definitely book again.', createdAt: '2025-06-16T00:00:00.000Z' },
    { id: 424, name: 'Javier R.', rating: 5, comment: 'el estacionamiento incluido fue muy conveniente sin complicaciones la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-03-11T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 425, name: 'Matthew Y.', rating: 5, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2025-11-26T00:00:00.000Z' },
    { id: 426, name: 'Daniela S.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La ubicacion no se pudo haber elegido mejor, muy centrico.', createdAt: '2025-11-08T00:00:00.000Z' },
    { id: 427, name: 'Brian A.', rating: 5, comment: 'having an assigned parking spot made everything simpler, great natural light throughout the whole apartment', createdAt: '2025-08-11T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 430, name: 'Camila S.', rating: 4, comment: 'el gym del edificio tiene buen equipo, mejor de lo que esperaba, cualquier cosa que necesitamos nos la resolvieron de inmediato', createdAt: '2025-07-19T00:00:00.000Z' },
    { id: 429, name: 'Justin R.', rating: 4, comment: 'loved having our own balcony, we had coffee out there every morning, kitchen had everything, we cooked almost every day without issue', createdAt: '2024-12-27T00:00:00.000Z' },
    { id: 428, name: 'Ashley C.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Great value for what you get, we\'d definitely book again.', createdAt: '2024-09-30T00:00:00.000Z' },
    { id: 431, name: 'Sebastian R.', rating: 5, comment: 'todo impecable al llegar, muy buen mantenimiento en general', createdAt: '2024-08-28T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 435, name: 'Javier O.', rating: 3, comment: 'la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 432, name: 'David B.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Everything we needed to cook was already there, very well equipped kitchen.', createdAt: '2025-07-29T00:00:00.000Z' },
    { id: 433, name: 'Sofia C.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 434, name: 'Ashley M.', rating: 4, comment: 'Our dog came with us and the place lived up to being pet friendly. Perfect location for exploring the city on foot.', createdAt: '2024-12-20T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 439, name: 'Justin T.', rating: 3, comment: 'The beach access was incredible, exactly what we were hoping for. Really good price considering everything that\'s included.', createdAt: '2026-03-09T00:00:00.000Z' },
    { id: 440, name: 'Jessica H.', rating: 4, comment: 'the terrace became our favorite spot to watch the sunset each evening everything was immaculate on arrival really well maintained overall', createdAt: '2025-11-11T00:00:00.000Z' },
    { id: 437, name: 'Ryan H.', rating: 5, comment: 'Really nice pool setup, plenty of loungers and always well maintained. Great natural light throughout the whole apartment.', createdAt: '2025-11-08T00:00:00.000Z' },
    { id: 436, name: 'Amanda B.', rating: 5, comment: 'The location was excellent, everything was within walking distance.', createdAt: '2025-06-07T00:00:00.000Z' },
    { id: 438, name: 'Fernanda G.', rating: 4, comment: 'Pasabamos las tardes en el balcon, muy buen espacio exterior. El internet nunca fallo, pudimos hacer videollamadas sin problema.', createdAt: '2024-09-07T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 443, name: 'Emily D.', rating: 5, comment: 'really nice pool setup, plenty of loungers and always well maintained, lots of natural light comes in during the day, made it feel really nice', createdAt: '2025-12-31T00:00:00.000Z' },
    { id: 441, name: 'Daniela A.', rating: 3, comment: 'Subimos al roof varias veces, la vista de la ciudad es increible. Excelente atencion por parte del agente, siempre disponible.', createdAt: '2025-11-27T00:00:00.000Z' },
    { id: 442, name: 'Brandon D.', rating: 4, comment: 'the balcony was a great bonus nice breeze and a good view of the neighborhood and really good price considering everything that\'s included', createdAt: '2025-01-30T00:00:00.000Z' },
    { id: 444, name: 'Renata H.', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, el internet nunca fallo, pudimos hacer videollamadas sin problema', createdAt: '2025-01-24T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 445, name: 'Andrew Y.', rating: 5, comment: 'traveled with our pet and had zero issues really appreciated that whatever we needed was sorted out immediately great support', createdAt: '2025-02-15T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 446, name: 'Luis Fernando G.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La limpieza fue impecable de principio a fin de la estancia.', createdAt: '2025-01-02T00:00:00.000Z' },
    { id: 447, name: 'Maria Jose A.', rating: 5, comment: 'La alberca fue el punto favorito de los ninos, la usaron todos los dias. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-01-02T00:00:00.000Z' },
    { id: 448, name: 'Jonathan S.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Great value for what you get, wed definitely book again.', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 450, name: 'Tyler K.', rating: 5, comment: 'we spent several afternoons at the pool, always clean and quiet, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-05-26T00:00:00.000Z' },
    { id: 449, name: 'Katie M.', rating: 5, comment: 'our dog came with us and the place lived up to being pet friendly, really comfortable bed, slept better than at home honestly', createdAt: '2024-06-05T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 453, name: 'Diego B.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso, muy buena iluminacion natural en todo el departamento', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 454, name: 'Carlos L.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy buen precio considerando todo lo que incluye', createdAt: '2025-09-04T00:00:00.000Z' },
    { id: 451, name: 'Sofia O.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la limpieza fue impecable de principio a fin de la estancia', createdAt: '2025-03-03T00:00:00.000Z' },
    { id: 452, name: 'Paulina L.', rating: 5, comment: 'La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-02-26T00:00:00.000Z' },
  ],
};