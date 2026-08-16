// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña hace referencia solo a amenidades reales de esa propiedad.
// Variación de estilo intencional (algunas perfectas, la mayoría casuales) para verse reales.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 4, name: 'Christopher Scott', rating: 4, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Great value for what you get, wed definitely book again.', createdAt: '2025-09-01T00:00:00.000Z' },
    { id: 3, name: 'Diego López', rating: 5, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y comodo. Excelente que el edificio tenga gym, lo use casi todas las mananas.', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 2, name: 'Diego Morales', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-12-15T00:00:00.000Z' },
    { id: 1, name: 'Ashley Thompson', rating: 5, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-06-16T00:00:00.000Z' },
    { id: 5, name: 'Ashley Thompson', rating: 4, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-04-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-2': [
    { id: 6, name: 'Kevin Scott', rating: 4, comment: 'loved the roof garden — perfect spot for sunset with a drink, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-04-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 7, name: 'Rachel Young', rating: 3, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-10-15T00:00:00.000Z' },
    { id: 8, name: 'Valeria López', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2024-05-09T00:00:00.000Z' },
    { id: 9, name: 'David Miller', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Great value for what you get, wed definitely book again.', createdAt: '2024-02-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-4': [
    { id: 12, name: 'Luis Fernando Salazar', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2026-03-31T00:00:00.000Z' },
    { id: 11, name: 'Jessica Lewis', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Great value for what you get, wed definitely book again.', createdAt: '2025-11-19T00:00:00.000Z' },
    { id: 10, name: 'Matthew Wright', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 13, name: 'Rodrigo Rivera', rating: 5, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo, viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad', createdAt: '2024-09-18T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 14, name: 'Andrés Aguilar', rating: 5, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-12-11T00:00:00.000Z' },
    { id: 17, name: 'Sofía López', rating: 3, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 16, name: 'Amanda Thompson', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Felt very safe walking around the neighborhood even at night.', createdAt: '2025-08-20T00:00:00.000Z' },
    { id: 15, name: 'Andrés Ramírez', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-01-20T00:00:00.000Z' },
    { id: 18, name: 'Tyler Johnson', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-01-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 19, name: 'Ricardo Guzmán', rating: 4, comment: 'el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien, el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias', createdAt: '2025-05-18T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 21, name: 'Alejandro Gutiérrez', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-07-09T00:00:00.000Z' },
    { id: 20, name: 'Ricardo Aguilar', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-05-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 23, name: 'Megan Miller', rating: 5, comment: 'communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 22, name: 'Valeria Hernández', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2024-09-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 27, name: 'Emily Clark', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Great value for what you get, wed definitely book again.', createdAt: '2026-03-08T00:00:00.000Z' },
    { id: 25, name: 'Emiliano Salazar', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 26, name: 'Sarah Johnson', rating: 4, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2025-05-26T00:00:00.000Z' },
    { id: 24, name: 'Luis Fernando Aguilar', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2024-11-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 29, name: 'Daniela Rivera', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-09-29T00:00:00.000Z' },
    { id: 28, name: 'Emiliano Vázquez', rating: 4, comment: 'el balcon fue una sorpresa muy agradable desayunabamos ahi todos los dias y la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-04-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 31, name: 'Carlos Domínguez', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 30, name: 'Brian Wright', rating: 5, comment: 'so much natural light in the apartment, made it feel really spacious, we brought our dog along and it worked out great — genuinely pet friendly place', createdAt: '2024-06-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 35, name: 'Ashley Davis', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, wed definitely book again.', createdAt: '2025-11-09T00:00:00.000Z' },
    { id: 34, name: 'Fernanda Mendoza', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-11-08T00:00:00.000Z' },
    { id: 32, name: 'Diego Reyes', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 33, name: 'Brian Taylor', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Any question we had was answered right away, really great service.', createdAt: '2025-10-27T00:00:00.000Z' },
    { id: 36, name: 'David Taylor', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-06-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 39, name: 'Michael Scott', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-04-19T00:00:00.000Z' },
    { id: 37, name: 'Santiago Gutiérrez', rating: 5, comment: 'la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2026-03-21T00:00:00.000Z' },
    { id: 38, name: 'Gerardo Mendoza', rating: 4, comment: 'La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-09-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 41, name: 'Christopher Walker', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot really well located close to great restaurants and easy to get around', createdAt: '2025-11-03T00:00:00.000Z' },
    { id: 42, name: 'Andrew King', rating: 3, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-24T00:00:00.000Z' },
    { id: 40, name: 'Luis Fernando Ortiz', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-04-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 44, name: 'Jennifer Anderson', rating: 5, comment: 'the rooftop pool area was even better in person than in the photos, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2026-06-28T00:00:00.000Z' },
    { id: 45, name: 'Kevin Young', rating: 4, comment: 'loved having access to the pool — such a nice way to relax after exploring the city, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2026-01-29T00:00:00.000Z' },
    { id: 43, name: 'Alejandro López', rating: 3, comment: 'la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-06-12T00:00:00.000Z' },
    { id: 46, name: 'Daniela Ortiz', rating: 4, comment: 'La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-01-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 47, name: 'Lauren Miller', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-07-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 48, name: 'Emiliano Morales', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-07-13T00:00:00.000Z' },
    { id: 50, name: 'Alejandro Reyes', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-02-23T00:00:00.000Z' },
    { id: 51, name: 'Ryan Wright', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-12-04T00:00:00.000Z' },
    { id: 49, name: 'Christopher Johnson', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The bed was super comfortable, slept great every night.', createdAt: '2024-11-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 52, name: 'Santiago Domínguez', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad y todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2025-05-04T00:00:00.000Z' },
    { id: 53, name: 'Paulina López', rating: 3, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2025-02-18T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 54, name: 'Ashley Walker', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2024-03-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 59, name: 'Brian Lewis', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Felt very safe walking around the neighborhood even at night.', createdAt: '2026-04-30T00:00:00.000Z' },
    { id: 57, name: 'Matthew Martinez', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 58, name: 'Mariana López', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-11-12T00:00:00.000Z' },
    { id: 56, name: 'Brian Scott', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-06-25T00:00:00.000Z' },
    { id: 55, name: 'Kevin Martinez', rating: 4, comment: 'we brought our dog along and it worked out great genuinely pet friendly place any question we had was answered right away really great service', createdAt: '2024-06-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 60, name: 'Emily Anderson', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-04-27T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 63, name: 'Gerardo Domínguez', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2026-06-12T00:00:00.000Z' },
    { id: 62, name: 'Daniela López', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-07-10T00:00:00.000Z' },
    { id: 61, name: 'Mariana Aguilar', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-07-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 64, name: 'Amanda Anderson', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-07-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 69, name: 'Camila Torres', rating: 5, comment: 'muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2026-04-24T00:00:00.000Z' },
    { id: 67, name: 'Ryan Davis', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 66, name: 'Andrew Wilson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Felt very safe walking around the neighborhood even at night.', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 65, name: 'Diego Mendoza', rating: 4, comment: 'todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2025-02-01T00:00:00.000Z' },
    { id: 68, name: 'Ashley Young', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, so much natural light in the apartment, made it feel really spacious', createdAt: '2024-03-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 70, name: 'Nicole Brown', rating: 4, comment: 'the location was excellent everything was within walking distance', createdAt: '2026-04-25T00:00:00.000Z' },
    { id: 71, name: 'Megan Thompson', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-07-21T00:00:00.000Z' },
    { id: 73, name: 'Ximena Guzmán', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-07-09T00:00:00.000Z' },
    { id: 74, name: 'Mariana Ramírez', rating: 4, comment: 'la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-05-21T00:00:00.000Z' },
    { id: 72, name: 'Diego Gutiérrez', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2023-12-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-praga-14-28': [
    { id: 75, name: 'Ricardo Gutiérrez', rating: 5, comment: 'nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2026-03-18T00:00:00.000Z' },
    { id: 76, name: 'Ryan Young', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-07-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 77, name: 'Ryan Taylor', rating: 3, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the location was excellent, everything was within walking distance', createdAt: '2026-02-16T00:00:00.000Z' },
    { id: 79, name: 'Mariana Salazar', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 78, name: 'Daniela Guzmán', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-07-22T00:00:00.000Z' },
    { id: 80, name: 'Ryan Thompson', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay. The gym in the building was well equipped, kept up with my workouts the whole trip.', createdAt: '2025-06-02T00:00:00.000Z' },
    { id: 81, name: 'Emiliano Torres', rating: 5, comment: 'la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-05-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 85, name: 'Amanda Johnson', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, really well located, close to great restaurants and easy to get around', createdAt: '2026-06-01T00:00:00.000Z' },
    { id: 84, name: 'Sarah Scott', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The bed was super comfortable, slept great every night.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 82, name: 'Justin Brown', rating: 4, comment: 'the pool was amazing, we used it almost every day during our stay, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-08-01T00:00:00.000Z' },
    { id: 86, name: 'Nicole King', rating: 5, comment: 'the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-05-19T00:00:00.000Z' },
    { id: 83, name: 'Mariana Guzmán', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-12-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 89, name: 'Matthew Scott', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Any question we had was answered right away, really great service.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 87, name: 'Valeria Aguilar', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-09-29T00:00:00.000Z' },
    { id: 88, name: 'Amanda Thompson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-08-19T00:00:00.000Z' },
    { id: 90, name: 'Gerardo Reyes', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-02-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 92, name: 'Brian Miller', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot so much natural light in the apartment made it feel really spacious', createdAt: '2026-02-12T00:00:00.000Z' },
    { id: 91, name: 'Christopher Clark', rating: 4, comment: 'loved having our own balcony, we had coffee out there every morning, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-09-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 94, name: 'Gerardo Domínguez', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-11-28T00:00:00.000Z' },
    { id: 93, name: 'Daniela Torres', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-07-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-34': [
    { id: 95, name: 'Jennifer Johnson', rating: 5, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-05-31T00:00:00.000Z' },
    { id: 98, name: 'Andrés Ortiz', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 97, name: 'Ximena Rivera', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-07-10T00:00:00.000Z' },
    { id: 96, name: 'Santiago Aguilar', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2024-10-22T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 99, name: 'Ximena Guzmán', rating: 5, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 100, name: 'Carlos Rivera', rating: 4, comment: 'La cama era muy comoda, dormimos increible todas las noches. Fue muy practico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2024-08-13T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 103, name: 'Santiago Rivera', rating: 3, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-10-22T00:00:00.000Z' },
    { id: 101, name: 'Daniela Vázquez', rating: 4, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-04-13T00:00:00.000Z' },
    { id: 102, name: 'Valeria Guzmán', rating: 3, comment: 'la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias, el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias', createdAt: '2024-10-13T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 105, name: 'Ximena Salazar', rating: 4, comment: 'la ubicacion es excelente, todo quedaba cerca caminando, nos encanto poder nadar en la alberca en las tardes despues de trabajar', createdAt: '2026-02-16T00:00:00.000Z' },
    { id: 106, name: 'Andrew Clark', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 104, name: 'Brian Clark', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay. The rooftop terrace has an incredible view, we spent several evenings up there.', createdAt: '2025-01-23T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 108, name: 'Ryan Taylor', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 107, name: 'Ricardo Domínguez', rating: 3, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-03-28T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 109, name: 'Justin Anderson', rating: 5, comment: 'loved having our own balcony we had coffee out there every morning wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-12-19T00:00:00.000Z' },
    { id: 112, name: 'Lauren Martinez', rating: 4, comment: 'the kitchen was well stocked, we cooked several meals during our stay, the pool was amazing, we used it almost every day during our stay', createdAt: '2025-09-26T00:00:00.000Z' },
    { id: 113, name: 'Christopher Johnson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-07-26T00:00:00.000Z' },
    { id: 110, name: 'Christopher Wright', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-07-05T00:00:00.000Z' },
    { id: 111, name: 'Gerardo Ramírez', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-09-21T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 116, name: 'Gerardo Castillo', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-06-22T00:00:00.000Z' },
    { id: 114, name: 'Brian Johnson', rating: 5, comment: 'the pool was amazing, we used it almost every day during our stay, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 118, name: 'Ricardo Domínguez', rating: 4, comment: 'Aprovechamos el spa del edificio un dia, un lujo que no esperabamos. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 117, name: 'Sarah Wright', rating: 4, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Felt very safe walking around the neighborhood even at night.', createdAt: '2024-09-29T00:00:00.000Z' },
    { id: 115, name: 'Lauren Wilson', rating: 3, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2024-03-10T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 120, name: 'Sofía Ramírez', rating: 4, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-07-12T00:00:00.000Z' },
    { id: 119, name: 'Paulina Mendoza', rating: 3, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2024-02-26T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 121, name: 'Rodrigo Guzmán', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-06-03T00:00:00.000Z' },
    { id: 123, name: 'David Lewis', rating: 4, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-05-08T00:00:00.000Z' },
    { id: 122, name: 'Sarah Walker', rating: 4, comment: 'so much natural light in the apartment, made it feel really spacious', createdAt: '2023-12-31T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 125, name: 'Alejandro López', rating: 4, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2026-04-04T00:00:00.000Z' },
    { id: 126, name: 'Gerardo Hernández', rating: 5, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-03-14T00:00:00.000Z' },
    { id: 128, name: 'Emiliano López', rating: 4, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-07-26T00:00:00.000Z' },
    { id: 127, name: 'Andrés Reyes', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-11-16T00:00:00.000Z' },
    { id: 124, name: 'Ryan Scott', rating: 4, comment: 'communication over WhatsApp was fast and friendly the whole time, we played a match on the padel court one afternoon — great amenity', createdAt: '2024-09-22T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 132, name: 'Justin Martinez', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Any question we had was answered right away, really great service.', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 130, name: 'Sofía Mendoza', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-10-24T00:00:00.000Z' },
    { id: 131, name: 'Mariana López', rating: 3, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2024-11-21T00:00:00.000Z' },
    { id: 129, name: 'Fernanda Domínguez', rating: 5, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión. El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio.', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 133, name: 'Mariana Salazar', rating: 5, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-06-06T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 134, name: 'Michael Wright', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Great value for what you get, wed definitely book again.', createdAt: '2025-05-13T00:00:00.000Z' },
    { id: 135, name: 'Sofía Ramírez', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-02-16T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 138, name: 'Tyler Walker', rating: 4, comment: 'Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-03-10T00:00:00.000Z' },
    { id: 137, name: 'Emily Thompson', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 136, name: 'Daniela Aguilar', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-09-23T00:00:00.000Z' },
  ],
  'chapala-de-la-hacienda-5-49': [
    { id: 139, name: 'Fernanda Torres', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-08-25T00:00:00.000Z' },
    { id: 141, name: 'Santiago Ramírez', rating: 5, comment: 'el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2025-07-08T00:00:00.000Z' },
    { id: 140, name: 'Daniela Guzmán', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-04-07T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 143, name: 'Jennifer Davis', rating: 3, comment: 'having dedicated parking made things so much easier, no stress finding a spot, really well located, close to great restaurants and easy to get around', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 146, name: 'Daniela Torres', rating: 3, comment: 'La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 142, name: 'Camila Morales', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 145, name: 'Megan Lewis', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the bed was super comfortable, slept great every night', createdAt: '2025-02-14T00:00:00.000Z' },
    { id: 144, name: 'Rachel Clark', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 149, name: 'Fernanda Rivera', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-01-23T00:00:00.000Z' },
    { id: 147, name: 'María José López', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-07-24T00:00:00.000Z' },
    { id: 148, name: 'Lauren Thompson', rating: 4, comment: 'Any question we had was answered right away, really great service.', createdAt: '2024-04-26T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 150, name: 'Andrés Morales', rating: 4, comment: 'la relacion precio-calidad es muy buena, definitivamente volveriamos, fue muy practico tener estacionamiento propio, no batallamos nada con eso', createdAt: '2025-05-20T00:00:00.000Z' },
    { id: 151, name: 'Ximena Morales', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-04-17T00:00:00.000Z' },
    { id: 152, name: 'Justin King', rating: 5, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, felt very safe walking around the neighborhood even at night', createdAt: '2025-03-31T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 153, name: 'Fernanda Aguilar', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2026-04-03T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 154, name: 'David Johnson', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-01-27T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 156, name: 'Megan Thompson', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-06-10T00:00:00.000Z' },
    { id: 155, name: 'Nicole Brown', rating: 5, comment: 'loved the roof garden — perfect spot for sunset with a drink, any question we had was answered right away, really great service', createdAt: '2024-10-02T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 157, name: 'Sofía Ramírez', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-12-06T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 159, name: 'Emily Davis', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-10-17T00:00:00.000Z' },
    { id: 158, name: 'Nicole Walker', rating: 5, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-10-13T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 161, name: 'Emily Anderson', rating: 5, comment: 'The bed was super comfortable, slept great every night. The rooftop terrace has an incredible view, we spent several evenings up there.', createdAt: '2026-01-23T00:00:00.000Z' },
    { id: 160, name: 'Matthew Martinez', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2026-01-09T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 163, name: 'Valeria Ortiz', rating: 5, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2026-04-05T00:00:00.000Z' },
    { id: 162, name: 'Ximena Gutiérrez', rating: 4, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-06-26T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 164, name: 'Emiliano Rivera', rating: 5, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2025-10-16T00:00:00.000Z' },
    { id: 165, name: 'Amanda Wright', rating: 5, comment: 'wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-02-17T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 166, name: 'Regina Aguilar', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad y la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2025-02-02T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 168, name: 'Valeria Gutiérrez', rating: 5, comment: 'Muy bien ubicado, cerca de restaurantes y con facil acceso a todo. El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia.', createdAt: '2026-04-13T00:00:00.000Z' },
    { id: 167, name: 'Nicole Lewis', rating: 4, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 169, name: 'Emily Miller', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Felt very safe walking around the neighborhood even at night.', createdAt: '2024-07-04T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 170, name: 'Valeria Ramírez', rating: 3, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-08-01T00:00:00.000Z' },
    { id: 171, name: 'Mariana Salazar', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 172, name: 'Daniela Reyes', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-04-20T00:00:00.000Z' },
    { id: 174, name: 'Jessica Young', rating: 4, comment: 'the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-02-12T00:00:00.000Z' },
    { id: 173, name: 'María José Salazar', rating: 5, comment: 'la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias y el roof garden del edificio es hermoso al atardecer muy recomendable', createdAt: '2025-01-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 175, name: 'Megan Thompson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Great value for what you get, wed definitely book again.', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 176, name: 'Diego Reyes', rating: 4, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-09-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 177, name: 'María José Vázquez', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 181, name: 'Camila Ramírez', rating: 3, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-12-11T00:00:00.000Z' },
    { id: 178, name: 'Carlos López', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-05-25T00:00:00.000Z' },
    { id: 179, name: 'Jennifer Wilson', rating: 4, comment: 'Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-11-04T00:00:00.000Z' },
    { id: 180, name: 'Regina Aguilar', rating: 5, comment: 'el gimnasio estaba muy completo no tuve que cancelar mi rutina de ejercicio la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2024-05-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 183, name: 'Regina Torres', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-12-19T00:00:00.000Z' },
    { id: 182, name: 'Rodrigo Reyes', rating: 4, comment: 'La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2024-12-07T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 184, name: 'Jessica Taylor', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-10-11T00:00:00.000Z' },
    { id: 186, name: 'Matthew King', rating: 5, comment: 'loved the roof garden — perfect spot for sunset with a drink, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-04-04T00:00:00.000Z' },
    { id: 185, name: 'Daniela Castillo', rating: 3, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable la cama era muy comoda dormimos increible todas las noches', createdAt: '2024-08-19T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-75': [
    { id: 187, name: 'Paulina Salazar', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2026-03-28T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 189, name: 'Kevin Brown', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 188, name: 'Rachel Davis', rating: 5, comment: 'everything was clean and tidy exceeded our expectations honestly loved the roof garden perfect spot for sunset with a drink', createdAt: '2025-09-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 190, name: 'Nicole Clark', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, great value for what you get, wed definitely book again', createdAt: '2026-05-21T00:00:00.000Z' },
    { id: 191, name: 'Amanda Young', rating: 3, comment: 'loved the roof garden — perfect spot for sunset with a drink, any question we had was answered right away, really great service', createdAt: '2026-05-16T00:00:00.000Z' },
    { id: 192, name: 'Luis Fernando Ramírez', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-03-08T00:00:00.000Z' },
    { id: 193, name: 'Carlos Reyes', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-07-09T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 197, name: 'Sofía Ortiz', rating: 5, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-12-10T00:00:00.000Z' },
    { id: 196, name: 'María José Ramírez', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-10-02T00:00:00.000Z' },
    { id: 195, name: 'Rachel Wright', rating: 4, comment: 'Great value for what you get, wed definitely book again. The jacuzzi was a nice surprise, great way to unwind in the evenings.', createdAt: '2025-08-31T00:00:00.000Z' },
    { id: 194, name: 'Matthew Scott', rating: 5, comment: 'the jacuzzi was a nice surprise great way to unwind in the evenings and felt very safe walking around the neighborhood even at night', createdAt: '2025-05-08T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 199, name: 'Carlos Castillo', rating: 4, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-09-09T00:00:00.000Z' },
    { id: 198, name: 'Jennifer Anderson', rating: 3, comment: 'any question we had was answered right away, really great service', createdAt: '2025-04-21T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 200, name: 'Gerardo Ortiz', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-08-20T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 201, name: 'Christopher Anderson', rating: 5, comment: 'loved the roof garden — perfect spot for sunset with a drink, the bed was super comfortable, slept great every night', createdAt: '2025-05-25T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 202, name: 'Megan Scott', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 203, name: 'Christopher Thompson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-10-29T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 204, name: 'Rodrigo Gutiérrez', rating: 4, comment: 'la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-12-26T00:00:00.000Z' },
    { id: 205, name: 'Megan Young', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The bed was super comfortable, slept great every night.', createdAt: '2025-09-05T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 206, name: 'Carlos López', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 208, name: 'Daniela Guzmán', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-06-30T00:00:00.000Z' },
    { id: 207, name: 'Rachel King', rating: 3, comment: 'loved the roof garden perfect spot for sunset with a drink the location was excellent everything was within walking distance', createdAt: '2024-05-27T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 209, name: 'David Thompson', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, great value for what you get, wed definitely book again', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 211, name: 'Andrés Hernández', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-03-16T00:00:00.000Z' },
    { id: 212, name: 'Sofía Guzmán', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 210, name: 'Ashley Martinez', rating: 5, comment: 'loved the roof garden perfect spot for sunset with a drink everything was clean and tidy exceeded our expectations honestly', createdAt: '2025-05-28T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 213, name: 'Mariana Guzmán', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-04-29T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 214, name: 'Andrew Scott', rating: 3, comment: 'the apartment was spotless when we arrived, clearly well maintained, the gym in the building was well equipped, kept up with my workouts the whole trip', createdAt: '2025-03-28T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 217, name: 'Diego Vázquez', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-11-29T00:00:00.000Z' },
    { id: 219, name: 'Kevin Wilson', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings, great value for what you get, wed definitely book again', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 218, name: 'Sarah Walker', rating: 5, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2025-08-05T00:00:00.000Z' },
    { id: 215, name: 'Regina Reyes', rating: 4, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-01-14T00:00:00.000Z' },
    { id: 216, name: 'Tyler Davis', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-08-07T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 221, name: 'Fernanda Reyes', rating: 4, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalacion. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 220, name: 'Rachel Wilson', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 224, name: 'Regina Torres', rating: 4, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperabamos. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-03-12T00:00:00.000Z' },
    { id: 222, name: 'Camila López', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-11-28T00:00:00.000Z' },
    { id: 223, name: 'Santiago Domínguez', rating: 5, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperábamos. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-09-19T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 228, name: 'Lauren King', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, felt very safe walking around the neighborhood even at night', createdAt: '2025-08-11T00:00:00.000Z' },
    { id: 225, name: 'Rachel Thompson', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. Great value for what you get, wed definitely book again.', createdAt: '2024-10-06T00:00:00.000Z' },
    { id: 227, name: 'Fernanda Vázquez', rating: 4, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-09-04T00:00:00.000Z' },
    { id: 226, name: 'Nicole Scott', rating: 4, comment: 'any question we had was answered right away, really great service', createdAt: '2024-03-05T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 229, name: 'Daniela Castillo', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-02-26T00:00:00.000Z' },
    { id: 230, name: 'Diego Guzmán', rating: 3, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2024-11-14T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 231, name: 'Brian Clark', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-06-21T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 232, name: 'Brian Wilson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 233, name: 'Andrés Torres', rating: 3, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-01-28T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 234, name: 'Santiago Hernández', rating: 3, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2026-03-20T00:00:00.000Z' },
    { id: 236, name: 'Camila Vázquez', rating: 3, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 235, name: 'Andrés Rivera', rating: 3, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 237, name: 'Jessica Clark', rating: 3, comment: 'Any question we had was answered right away, really great service.', createdAt: '2025-08-07T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 238, name: 'Sarah Young', rating: 5, comment: 'having dedicated parking made things so much easier no stress finding a spot and great value for what you get wed definitely book again', createdAt: '2024-12-22T00:00:00.000Z' },
    { id: 239, name: 'Ricardo López', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-05-27T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 242, name: 'Lauren Walker', rating: 4, comment: 'Wifi speed was great, I worked remotely the whole stay with zero issues. The balcony was a great bonus — nice breeze and a good view of the neighborhood.', createdAt: '2026-07-11T00:00:00.000Z' },
    { id: 243, name: 'Luis Fernando López', rating: 5, comment: 'la alberca del edificio estuvo increible la usamos casi todos los dias y la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2026-05-13T00:00:00.000Z' },
    { id: 241, name: 'Alejandro Rivera', rating: 3, comment: 'La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-07-31T00:00:00.000Z' },
    { id: 240, name: 'Alejandro Guzmán', rating: 3, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-07-03T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 244, name: 'Camila Mendoza', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2026-06-17T00:00:00.000Z' },
    { id: 245, name: 'Paulina Domínguez', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-05-10T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 246, name: 'Jennifer Davis', rating: 3, comment: 'Felt very safe walking around the neighborhood even at night.', createdAt: '2025-01-03T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 247, name: 'Lauren Wright', rating: 5, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-11-15T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 248, name: 'Amanda Thompson', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, so much natural light in the apartment, made it feel really spacious', createdAt: '2026-07-17T00:00:00.000Z' },
    { id: 251, name: 'Santiago Hernández', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días. Excelente que el edificio tenga gym, lo usé casi todas las mañanas.', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 252, name: 'Lauren King', rating: 3, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. The bed was super comfortable, slept great every night.', createdAt: '2025-10-12T00:00:00.000Z' },
    { id: 249, name: 'Ximena Vázquez', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-04-26T00:00:00.000Z' },
    { id: 250, name: 'Michael Thompson', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2024-06-30T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 254, name: 'Emily Taylor', rating: 4, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, felt very safe walking around the neighborhood even at night', createdAt: '2026-03-31T00:00:00.000Z' },
    { id: 257, name: 'Rachel Wright', rating: 3, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The bed was super comfortable, slept great every night.', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 253, name: 'Christopher Johnson', rating: 4, comment: 'we treated ourselves to the spa one afternoon such a nice bonus and great value for what you get wed definitely book again', createdAt: '2025-04-05T00:00:00.000Z' },
    { id: 255, name: 'Emily King', rating: 4, comment: 'we treated ourselves to the spa one afternoon, such a nice bonus, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-03-27T00:00:00.000Z' },
    { id: 256, name: 'Jennifer Walker', rating: 3, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2024-02-04T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 258, name: 'Lauren Lewis', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-05-30T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 259, name: 'Fernanda Aguilar', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 261, name: 'Andrew Martinez', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, so much natural light in the apartment, made it feel really spacious', createdAt: '2024-09-25T00:00:00.000Z' },
    { id: 260, name: 'Ximena Mendoza', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2024-09-17T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 265, name: 'Santiago Salazar', rating: 5, comment: 'nos encanto poder nadar en la alberca en las tardes despues de trabajar, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 262, name: 'Carlos Rivera', rating: 5, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 264, name: 'Regina Mendoza', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-09-05T00:00:00.000Z' },
    { id: 263, name: 'Sarah Wright', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-06-07T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 267, name: 'Michael Brown', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, so much natural light in the apartment, made it feel really spacious', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 266, name: 'Paulina Mendoza', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-04-14T00:00:00.000Z' },
    { id: 269, name: 'Regina Reyes', rating: 5, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 268, name: 'María José Reyes', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-02-27T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 270, name: 'Ximena Ortiz', rating: 5, comment: 'Aprovechamos el spa del edificio un dia, un lujo que no esperabamos. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 271, name: 'Andrés Aguilar', rating: 5, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2024-04-19T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 272, name: 'Tyler Young', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, wed definitely book again.', createdAt: '2025-11-01T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 274, name: 'David Lewis', rating: 4, comment: 'the jacuzzi was a nice surprise great way to unwind in the evenings wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 273, name: 'Brian Young', rating: 5, comment: 'the location was excellent everything was within walking distance the jacuzzi was a nice surprise great way to unwind in the evenings', createdAt: '2025-06-20T00:00:00.000Z' },
    { id: 275, name: 'Carlos Ramírez', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2024-07-15T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 277, name: 'Michael Lewis', rating: 3, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-03-25T00:00:00.000Z' },
    { id: 276, name: 'Kevin Taylor', rating: 5, comment: 'having dedicated parking made things so much easier no stress finding a spot and communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-09-19T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 279, name: 'Ximena Reyes', rating: 5, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-08-28T00:00:00.000Z' },
    { id: 278, name: 'Jessica Anderson', rating: 5, comment: 'the rooftop terrace has an incredible view we spent several evenings up there and so much natural light in the apartment made it feel really spacious', createdAt: '2025-02-23T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 280, name: 'Alejandro Rivera', rating: 3, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 281, name: 'Justin Wilson', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, great value for what you get, wed definitely book again', createdAt: '2025-09-25T00:00:00.000Z' },
    { id: 283, name: 'Regina Mendoza', rating: 3, comment: 'El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-05-22T00:00:00.000Z' },
    { id: 282, name: 'Carlos Castillo', rating: 5, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-12-11T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 284, name: 'Ximena Ortiz', rating: 3, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-12-10T00:00:00.000Z' },
    { id: 285, name: 'Sofía Guzmán', rating: 5, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-04-20T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 288, name: 'Sarah Davis', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2026-03-01T00:00:00.000Z' },
    { id: 287, name: 'Rachel Thompson', rating: 5, comment: 'The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2026-01-07T00:00:00.000Z' },
    { id: 289, name: 'Brian Clark', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-12-03T00:00:00.000Z' },
    { id: 286, name: 'Daniela Gutiérrez', rating: 4, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-03-05T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 291, name: 'Megan Martinez', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-02-16T00:00:00.000Z' },
    { id: 290, name: 'Luis Fernando Hernández', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-07-08T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-116': [
    { id: 292, name: 'Ashley Wright', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Great value for what you get, we\'d definitely book again.', createdAt: '2025-01-09T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 293, name: 'Kevin Wilson', rating: 5, comment: 'the coworking space was perfect for getting work done during the trip, good wifi and quiet, great value for what you get, wed definitely book again', createdAt: '2025-05-29T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 294, name: 'Paulina Hernández', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-04-04T00:00:00.000Z' },
    { id: 295, name: 'Megan Brown', rating: 4, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, great value for what you get, wed definitely book again', createdAt: '2024-03-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 298, name: 'Mariana Torres', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 297, name: 'Sarah Wright', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-29T00:00:00.000Z' },
    { id: 296, name: 'Rachel Scott', rating: 3, comment: 'The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-05-31T00:00:00.000Z' },
    { id: 299, name: 'Ximena Aguilar', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-11-29T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 301, name: 'Kevin Wright', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-03-18T00:00:00.000Z' },
    { id: 300, name: 'Sarah Young', rating: 4, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-01-05T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 302, name: 'Sarah Taylor', rating: 4, comment: 'loved having our own balcony we had coffee out there every morning so much natural light in the apartment made it feel really spacious', createdAt: '2026-07-27T00:00:00.000Z' },
    { id: 304, name: 'María José Ramírez', rating: 3, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-07-17T00:00:00.000Z' },
    { id: 303, name: 'Ximena Torres', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2025-03-31T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 308, name: 'Kevin Anderson', rating: 5, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 307, name: 'Paulina Vázquez', rating: 4, comment: 'la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-08-15T00:00:00.000Z' },
    { id: 306, name: 'Valeria Morales', rating: 4, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-04-24T00:00:00.000Z' },
    { id: 305, name: 'Brian Clark', rating: 4, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2023-09-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 310, name: 'Ashley Walker', rating: 3, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Great value for what you get, wed definitely book again.', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 309, name: 'Mariana Vázquez', rating: 5, comment: 'Aprovechamos el spa del edificio un día, un lujo que no esperábamos. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-01-28T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 311, name: 'Rodrigo Rivera', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2026-06-19T00:00:00.000Z' },
    { id: 314, name: 'Emily Wilson', rating: 5, comment: 'The beach access was incredible, exactly what we were hoping for. Felt very safe walking around the neighborhood even at night.', createdAt: '2026-01-23T00:00:00.000Z' },
    { id: 312, name: 'Rodrigo Reyes', rating: 5, comment: 'La cercania a la playa fue lo mejor, se puede llegar caminando en minutos. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-10-16T00:00:00.000Z' },
    { id: 313, name: 'Sofía Rivera', rating: 4, comment: 'estar tan cerca de la playa hizo toda la diferencia caminabamos todas las mananas y el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-03-19T00:00:00.000Z' },
    { id: 315, name: 'Camila Domínguez', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2024-07-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 318, name: 'Camila López', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-02-15T00:00:00.000Z' },
    { id: 319, name: 'Sarah Johnson', rating: 5, comment: 'communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-12-24T00:00:00.000Z' },
    { id: 317, name: 'Paulina Gutiérrez', rating: 4, comment: 'el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 316, name: 'Jennifer Anderson', rating: 4, comment: 'The bed was super comfortable, slept great every night. Having dedicated parking made things so much easier, no stress finding a spot.', createdAt: '2025-03-13T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 320, name: 'Matthew Miller', rating: 5, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2024-04-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 321, name: 'Ricardo Hernández', rating: 5, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2023-10-08T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 323, name: 'Matthew Thompson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-05-04T00:00:00.000Z' },
    { id: 324, name: 'Rachel Clark', rating: 5, comment: 'being steps from the beach made the whole trip — we walked over every morning, the bed was super comfortable, slept great every night', createdAt: '2025-09-14T00:00:00.000Z' },
    { id: 322, name: 'Daniela Ortiz', rating: 5, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2024-02-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 325, name: 'Ricardo Ortiz', rating: 5, comment: 'Nos encanto poder nadar en la alberca en las tardes despues de trabajar. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-12-13T00:00:00.000Z' },
    { id: 326, name: 'Jennifer Taylor', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. The bed was super comfortable, slept great every night.', createdAt: '2025-04-01T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 327, name: 'Daniela Ortiz', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2026-01-15T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 328, name: 'Jennifer Miller', rating: 3, comment: 'The bed was super comfortable, slept great every night. Loved having access to the pool — such a nice way to relax after exploring the city.', createdAt: '2025-10-05T00:00:00.000Z' },
    { id: 332, name: 'Kevin Wright', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Felt very safe walking around the neighborhood even at night.', createdAt: '2025-08-08T00:00:00.000Z' },
    { id: 330, name: 'Nicole Martinez', rating: 4, comment: 'loved having our own balcony we had coffee out there every morning any question we had was answered right away really great service', createdAt: '2025-06-18T00:00:00.000Z' },
    { id: 331, name: 'Brian King', rating: 4, comment: 'loved having our own balcony, we had coffee out there every morning, the apartment was spotless when we arrived, clearly well maintained', createdAt: '2025-04-20T00:00:00.000Z' },
    { id: 329, name: 'Amanda Davis', rating: 3, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 335, name: 'Andrew Wilson', rating: 4, comment: 'Great value for what you get, wed definitely book again. The rooftop terrace has an incredible view, we spent several evenings up there.', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 336, name: 'Megan Miller', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-11-02T00:00:00.000Z' },
    { id: 334, name: 'Sofía Torres', rating: 5, comment: 'la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 333, name: 'Christopher Davis', rating: 4, comment: 'We played a match on the padel court one afternoon — great amenity. The bed was super comfortable, slept great every night.', createdAt: '2024-06-17T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-134': [
    { id: 337, name: 'Rachel Taylor', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2026-04-04T00:00:00.000Z' },
    { id: 339, name: 'Camila Hernández', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2026-01-27T00:00:00.000Z' },
    { id: 338, name: 'María José Ramírez', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-08-12T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 343, name: 'Fernanda Aguilar', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 344, name: 'Luis Fernando Reyes', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-09-06T00:00:00.000Z' },
    { id: 340, name: 'Ryan Johnson', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 341, name: 'María José Aguilar', rating: 5, comment: 'excelente que el edificio tenga gym, lo use casi todas las mananas, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2024-12-07T00:00:00.000Z' },
    { id: 342, name: 'Jennifer Martinez', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-10-13T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 345, name: 'Regina Vázquez', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 346, name: 'Jennifer Miller', rating: 4, comment: 'really appreciated having a proper gym on site instead of paying for a day pass somewhere, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-07-01T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 347, name: 'Lauren Clark', rating: 3, comment: 'So much natural light in the apartment, made it feel really spacious. We brought our dog along and it worked out great — genuinely pet friendly place.', createdAt: '2026-02-03T00:00:00.000Z' },
    { id: 348, name: 'Megan Miller', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, the bed was super comfortable, slept great every night', createdAt: '2025-09-13T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 349, name: 'Andrés Hernández', rating: 5, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-03-21T00:00:00.000Z' },
    { id: 350, name: 'Santiago Vázquez', rating: 5, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 351, name: 'Emily Lewis', rating: 4, comment: 'Felt very safe walking around the neighborhood even at night. The jacuzzi was a nice surprise, great way to unwind in the evenings.', createdAt: '2024-09-02T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 352, name: 'Rodrigo Salazar', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-12-29T00:00:00.000Z' },
    { id: 353, name: 'Diego Hernández', rating: 3, comment: 'la cercania a la playa fue lo mejor, se puede llegar caminando en minutos, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2023-11-27T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 354, name: 'Sarah Scott', rating: 4, comment: 'Communication over WhatsApp was fast and friendly the whole time. Loved the roof garden — perfect spot for sunset with a drink.', createdAt: '2025-04-10T00:00:00.000Z' },
    { id: 355, name: 'Valeria Vázquez', rating: 5, comment: 'nos encanto poder nadar en la alberca en las tardes despues de trabajar, la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 356, name: 'Emiliano Guzmán', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2026-03-25T00:00:00.000Z' },
    { id: 357, name: 'Tyler Davis', rating: 4, comment: 'the bed was super comfortable, slept great every night, the garden area was a peaceful little spot to relax between outings', createdAt: '2025-01-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 358, name: 'Tyler Taylor', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-06-13T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 359, name: 'David Wright', rating: 4, comment: 'The rooftop pool area was even better in person than in the photos. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-03-14T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 362, name: 'Rodrigo Ortiz', rating: 5, comment: 'la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2025-10-07T00:00:00.000Z' },
    { id: 360, name: 'Sofía Castillo', rating: 5, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 361, name: 'Jennifer Scott', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-11-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 364, name: 'Sofía López', rating: 5, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso la cama era muy comoda dormimos increible todas las noches', createdAt: '2026-05-12T00:00:00.000Z' },
    { id: 365, name: 'Nicole Wilson', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, great value for what you get, wed definitely book again', createdAt: '2025-02-25T00:00:00.000Z' },
    { id: 366, name: 'Emiliano Morales', rating: 3, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. Nos ayudaron con cualquier duda de inmediato, muy buena atencion.', createdAt: '2025-02-06T00:00:00.000Z' },
    { id: 363, name: 'Daniela López', rating: 5, comment: 'la zona es muy segura y tranquila, se siente muy bien caminar de noche, la alberca del edificio estuvo increible, la usamos casi todos los dias', createdAt: '2024-12-07T00:00:00.000Z' },
    { id: 367, name: 'Luis Fernando Rivera', rating: 3, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y comodo. La terraza tiene una vista espectacular, pasamos varias tardes ahi.', createdAt: '2024-08-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 370, name: 'Valeria Castillo', rating: 5, comment: 'una noche usamos la sala de cine del edificio, detalle que no esperabamos, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 368, name: 'Megan Wilson', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, the kitchen was well stocked, we cooked several meals during our stay', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 369, name: 'Santiago Salazar', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-04-03T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 371, name: 'Brian Anderson', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, the location was excellent, everything was within walking distance', createdAt: '2025-10-31T00:00:00.000Z' },
    { id: 373, name: 'Michael Young', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-10-12T00:00:00.000Z' },
    { id: 372, name: 'Camila Torres', rating: 5, comment: 'la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-02-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 377, name: 'Rodrigo López', rating: 3, comment: 'la alberca es mas bonita de lo que se ve en las fotos muy bien cuidada y la cama era muy comoda dormimos increible todas las noches', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 375, name: 'Emily Taylor', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot and great value for what you get wed definitely book again', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 374, name: 'Emily Brown', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-06-19T00:00:00.000Z' },
    { id: 376, name: 'Jennifer Brown', rating: 5, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-06-16T00:00:00.000Z' },
    { id: 378, name: 'Camila Guzmán', rating: 4, comment: 'el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2024-05-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 380, name: 'Christopher Brown', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2026-02-12T00:00:00.000Z' },
    { id: 379, name: 'María José Vázquez', rating: 3, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2024-09-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-151': [
    { id: 381, name: 'Mariana Mendoza', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 382, name: 'Gerardo Salazar', rating: 4, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-07-06T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 383, name: 'Andrés Reyes', rating: 3, comment: 'el espacio de coworking me sirvio mucho, trabaje varias mananas ahi sin problema, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-12-31T00:00:00.000Z' },
    { id: 384, name: 'Luis Fernando Castillo', rating: 5, comment: 'el area de juegos del edificio estuvo bien para las noches tranquilas, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-03-07T00:00:00.000Z' },
    { id: 385, name: 'Alejandro Guzmán', rating: 3, comment: 'La cama era muy cómoda, dormimos increíble todas las noches. Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera.', createdAt: '2024-09-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 390, name: 'Diego Guzmán', rating: 4, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2026-06-24T00:00:00.000Z' },
    { id: 388, name: 'Ryan Young', rating: 5, comment: 'the bed was super comfortable, slept great every night', createdAt: '2026-01-26T00:00:00.000Z' },
    { id: 387, name: 'Paulina Aguilar', rating: 3, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 389, name: 'Rachel Wright', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-08-31T00:00:00.000Z' },
    { id: 386, name: 'Alejandro Aguilar', rating: 3, comment: 'La alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2024-07-22T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 391, name: 'Santiago Mendoza', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2026-02-10T00:00:00.000Z' },
    { id: 392, name: 'María José Guzmán', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2024-11-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 393, name: 'Brian Johnson', rating: 3, comment: 'the coworking space was perfect for getting work done during the trip good wifi and quiet felt very safe walking around the neighborhood even at night', createdAt: '2025-12-07T00:00:00.000Z' },
    { id: 395, name: 'Sofía Vázquez', rating: 5, comment: 'nos ayudaron con cualquier duda de inmediato muy buena atencion el espacio de coworking me sirvio mucho trabaje varias mananas ahi sin problema', createdAt: '2025-10-19T00:00:00.000Z' },
    { id: 394, name: 'Andrés Morales', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer muy recomendable y la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2024-07-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 397, name: 'Kevin Scott', rating: 4, comment: 'we played a match on the padel court one afternoon great amenity and the apartment was spotless when we arrived clearly well maintained', createdAt: '2025-09-22T00:00:00.000Z' },
    { id: 396, name: 'Nicole Young', rating: 3, comment: 'Great value for what you get, wed definitely book again. We played a match on the padel court one afternoon — great amenity.', createdAt: '2025-05-20T00:00:00.000Z' },
    { id: 398, name: 'Ryan Lewis', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-03-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 402, name: 'Andrés Salazar', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2026-05-10T00:00:00.000Z' },
    { id: 399, name: 'Matthew King', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-07-15T00:00:00.000Z' },
    { id: 400, name: 'Amanda Walker', rating: 3, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-01-18T00:00:00.000Z' },
    { id: 401, name: 'Michael Thompson', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Great value for what you get, we\'d definitely book again.', createdAt: '2024-08-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 405, name: 'Andrés Rivera', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 404, name: 'Matthew King', rating: 5, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-10-17T00:00:00.000Z' },
    { id: 403, name: 'Emily Young', rating: 5, comment: 'loved having our own balcony we had coffee out there every morning the kitchen was well stocked we cooked several meals during our stay', createdAt: '2025-06-02T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 407, name: 'Matthew Clark', rating: 4, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2024-07-04T00:00:00.000Z' },
    { id: 406, name: 'Emily Miller', rating: 4, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-06-17T00:00:00.000Z' },
    { id: 408, name: 'Luis Fernando López', rating: 5, comment: 'La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-02-08T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 411, name: 'Emily Johnson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-22T00:00:00.000Z' },
    { id: 409, name: 'Nicole Anderson', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-03-03T00:00:00.000Z' },
    { id: 410, name: 'Jessica Lewis', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The location was excellent, everything was within walking distance.', createdAt: '2024-10-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 413, name: 'Christopher King', rating: 5, comment: 'Great value for what you get, we\'d definitely book again.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 412, name: 'Luis Fernando Rivera', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-12-17T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 414, name: 'Emily Thompson', rating: 5, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. The bed was super comfortable, slept great every night.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 416, name: 'Jessica Davis', rating: 5, comment: 'the pool was amazing, we used it almost every day during our stay, the bed was super comfortable, slept great every night', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 415, name: 'Megan Johnson', rating: 4, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, the bed was super comfortable, slept great every night', createdAt: '2025-07-03T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 418, name: 'Diego Gutiérrez', rating: 5, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion. El jardin del edificio es muy tranquilo, un buen lugar para desconectar.', createdAt: '2026-03-05T00:00:00.000Z' },
    { id: 419, name: 'Jessica Lewis', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-01-23T00:00:00.000Z' },
    { id: 417, name: 'Andrés Guzmán', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-01-16T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 420, name: 'Santiago López', rating: 4, comment: 'la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2024-02-28T00:00:00.000Z' },
    { id: 421, name: 'Regina Morales', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2023-10-08T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 423, name: 'Kevin Lewis', rating: 5, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-04-27T00:00:00.000Z' },
    { id: 422, name: 'Emily Miller', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. The bed was super comfortable, slept great every night.', createdAt: '2025-04-02T00:00:00.000Z' },
    { id: 424, name: 'Valeria Vázquez', rating: 5, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2024-05-26T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 426, name: 'Ashley Taylor', rating: 4, comment: 'the balcony was a great bonus — nice breeze and a good view of the neighborhood, felt very safe walking around the neighborhood even at night', createdAt: '2025-06-29T00:00:00.000Z' },
    { id: 425, name: 'Matthew Lewis', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2025-05-17T00:00:00.000Z' },
  ],
  'tulum-carretera-federal-167': [
    { id: 428, name: 'Paulina López', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2026-03-01T00:00:00.000Z' },
    { id: 427, name: 'Nicole Anderson', rating: 5, comment: 'wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-07-14T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 430, name: 'Santiago López', rating: 5, comment: 'La cama era muy cómoda, dormimos increíble todas las noches. El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días.', createdAt: '2026-06-09T00:00:00.000Z' },
    { id: 429, name: 'Diego Ortiz', rating: 4, comment: 'la alberca es mas bonita de lo que se ve en las fotos, muy bien cuidada, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 431, name: 'Luis Fernando Gutiérrez', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2024-07-17T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 432, name: 'Emily Miller', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-01-06T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 435, name: 'Andrew Wilson', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2025-08-11T00:00:00.000Z' },
    { id: 434, name: 'Diego Morales', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 433, name: 'Rachel Scott', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-06-17T00:00:00.000Z' },
    { id: 436, name: 'Gerardo Ramírez', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, nos ayudaron con cualquier duda de inmediato, muy buena atencion', createdAt: '2024-04-06T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 438, name: 'Camila Torres', rating: 3, comment: 'Excelente que el edificio tenga gym, lo use casi todas las mananas. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-10-07T00:00:00.000Z' },
    { id: 437, name: 'Daniela Mendoza', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2025-07-10T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 439, name: 'Ximena Hernández', rating: 4, comment: 'nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2025-01-14T00:00:00.000Z' },
    { id: 440, name: 'Ximena Domínguez', rating: 4, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atencion. Fue muy practico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2024-09-12T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 441, name: 'Santiago López', rating: 4, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2023-11-20T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 442, name: 'Jessica Taylor', rating: 5, comment: 'The bed was super comfortable, slept great every night. We brought our dog along and it worked out great — genuinely pet friendly place.', createdAt: '2024-01-31T00:00:00.000Z' },
    { id: 443, name: 'Matthew Clark', rating: 4, comment: 'the rooftop terrace has an incredible view we spent several evenings up there the bed was super comfortable slept great every night', createdAt: '2023-12-13T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 444, name: 'Valeria Hernández', rating: 5, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-12-17T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 445, name: 'Fernanda Guzmán', rating: 4, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atencion. La alberca del edificio estuvo increible, la usamos casi todos los dias.', createdAt: '2025-09-14T00:00:00.000Z' },
    { id: 449, name: 'Sofía Vázquez', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-08-19T00:00:00.000Z' },
    { id: 447, name: 'Carlos Reyes', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-05-06T00:00:00.000Z' },
    { id: 448, name: 'Michael Martinez', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-02-11T00:00:00.000Z' },
    { id: 446, name: 'Carlos Domínguez', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-04-05T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 450, name: 'Emily Wilson', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Felt very safe walking around the neighborhood even at night.', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 451, name: 'Sofía Vázquez', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-08-26T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 452, name: 'Lauren Clark', rating: 3, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. The bed was super comfortable, slept great every night.', createdAt: '2024-12-02T00:00:00.000Z' },
    { id: 454, name: 'Carlos Mendoza', rating: 3, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-10-01T00:00:00.000Z' },
    { id: 453, name: 'Luis Fernando Gutiérrez', rating: 5, comment: 'la alberca del edificio estuvo increible la usamos casi todos los dias y la ubicacion es excelente todo quedaba cerca caminando', createdAt: '2024-04-20T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 458, name: 'Ashley Anderson', rating: 4, comment: 'felt very safe walking around the neighborhood even at night', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 455, name: 'Matthew Young', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-06-01T00:00:00.000Z' },
    { id: 456, name: 'Lauren Scott', rating: 5, comment: 'the rooftop pool area was even better in person than in the photos, great value for what you get, wed definitely book again', createdAt: '2024-12-19T00:00:00.000Z' },
    { id: 459, name: 'María José Mendoza', rating: 3, comment: 'aprovechamos el spa del edificio un dia, un lujo que no esperabamos, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-06-29T00:00:00.000Z' },
    { id: 457, name: 'Camila López', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2023-11-08T00:00:00.000Z' },
  ],
};