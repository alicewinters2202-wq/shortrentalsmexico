// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña hace referencia solo a amenidades reales de esa propiedad.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 2, name: 'Carlos Rivera', rating: 3, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 4, name: 'Diego Mendoza', rating: 5, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-08-14T00:00:00.000Z' },
    { id: 1, name: 'Paulina Morales', rating: 3, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-07-31T00:00:00.000Z' },
    { id: 3, name: 'Ricardo Vázquez', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-2': [
    { id: 5, name: 'Jennifer Martinez', rating: 5, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-11-06T00:00:00.000Z' },
    { id: 6, name: 'Megan Lewis', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-12-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-4': [
    { id: 9, name: 'Regina Guzmán', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2026-01-26T00:00:00.000Z' },
    { id: 7, name: 'Carlos Guzmán', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-01-08T00:00:00.000Z' },
    { id: 8, name: 'Daniela Torres', rating: 4, comment: 'La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-10-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 11, name: 'Christopher Thompson', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 10, name: 'Santiago Ramírez', rating: 5, comment: 'El espacio de coworking me sirvió mucho, trabajé varias mañanas ahí sin problema. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 12, name: 'Brian Wright', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, we\'d definitely book again.', createdAt: '2025-10-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 13, name: 'Ximena Rivera', rating: 5, comment: 'La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-10-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 15, name: 'Daniela Ramírez', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 16, name: 'Megan Wright', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 17, name: 'María José Mendoza', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-01-06T00:00:00.000Z' },
    { id: 14, name: 'Ashley Wright', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-08-31T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 19, name: 'Santiago Aguilar', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-09-06T00:00:00.000Z' },
    { id: 18, name: 'Ximena Vázquez', rating: 5, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-06-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 22, name: 'Ricardo Ortiz', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-04-27T00:00:00.000Z' },
    { id: 20, name: 'Mariana Gutiérrez', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-03-19T00:00:00.000Z' },
    { id: 21, name: 'Christopher Wright', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The bed was super comfortable, slept great every night.', createdAt: '2024-03-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 23, name: 'Andrés Hernández', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-08-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 24, name: 'Ricardo Hernández', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 25, name: 'Emiliano Guzmán', rating: 4, comment: 'El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-11-11T00:00:00.000Z' },
    { id: 26, name: 'Ricardo Salazar', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-06-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 28, name: 'Christopher King', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-02-19T00:00:00.000Z' },
    { id: 27, name: 'Emily Johnson', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-11-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 29, name: 'Ximena Ortiz', rating: 4, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-10-22T00:00:00.000Z' },
    { id: 30, name: 'Matthew Taylor', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2025-03-29T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 31, name: 'Matthew Martinez', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The location was excellent, everything was within walking distance.', createdAt: '2026-04-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 32, name: 'Amanda Walker', rating: 4, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2026-05-06T00:00:00.000Z' },
    { id: 34, name: 'Jennifer Wilson', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-08-31T00:00:00.000Z' },
    { id: 35, name: 'Ashley King', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The bed was super comfortable, slept great every night.', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 33, name: 'Diego Morales', rating: 4, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-04-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 38, name: 'Ryan Johnson', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-09-23T00:00:00.000Z' },
    { id: 36, name: 'Amanda Wilson', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-08-18T00:00:00.000Z' },
    { id: 37, name: 'Rachel Wright', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-05-14T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-20': [
    { id: 39, name: 'Ryan Young', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The location was excellent, everything was within walking distance.', createdAt: '2026-05-17T00:00:00.000Z' },
    { id: 40, name: 'Sofía Hernández', rating: 4, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 41, name: 'Rodrigo Ortiz', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-05-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 44, name: 'David Anderson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-03-14T00:00:00.000Z' },
    { id: 42, name: 'Andrew Walker', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The location was excellent, everything was within walking distance.', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 43, name: 'Ximena Mendoza', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-03-03T00:00:00.000Z' },
    { id: 45, name: 'Regina Guzmán', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-05-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 46, name: 'Andrés Aguilar', rating: 4, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2026-03-12T00:00:00.000Z' },
    { id: 47, name: 'Daniela Guzmán', rating: 5, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 48, name: 'Justin Lewis', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2024-10-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 49, name: 'Santiago López', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2026-01-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 50, name: 'Sofía Ramírez', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 51, name: 'Nicole Walker', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Felt very safe walking around the neighborhood even at night.', createdAt: '2025-12-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 52, name: 'Ashley Thompson', rating: 3, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-08-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 56, name: 'Michael Thompson', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-12-19T00:00:00.000Z' },
    { id: 53, name: 'Justin Wright', rating: 3, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-12-07T00:00:00.000Z' },
    { id: 55, name: 'Paulina López', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-06-15T00:00:00.000Z' },
    { id: 54, name: 'Carlos Hernández', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 58, name: 'Santiago Salazar', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 59, name: 'Brian Walker', rating: 4, comment: 'The kitchen was well stocked, we cooked several meals during our stay. Really appreciated having a proper gym on site instead of paying for a day pass somewhere.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 57, name: 'Amanda Taylor', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-05-20T00:00:00.000Z' },
    { id: 60, name: 'María José Guzmán', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-02-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 64, name: 'Matthew Brown', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The location was excellent, everything was within walking distance.', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 62, name: 'Brian Wright', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Great value for what you get, we\'d definitely book again.', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 61, name: 'Valeria Mendoza', rating: 4, comment: 'El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien. Fue muy práctico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 63, name: 'Kevin King', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-03-27T00:00:00.000Z' },
    { id: 65, name: 'Justin Anderson', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The bed was super comfortable, slept great every night.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 68, name: 'Emily Wilson', rating: 4, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-02-11T00:00:00.000Z' },
    { id: 66, name: 'Emiliano Salazar', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 67, name: 'Brian Clark', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-12-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 70, name: 'Lauren Martinez', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-06-27T00:00:00.000Z' },
    { id: 72, name: 'Daniela Domínguez', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 73, name: 'Lauren Miller', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Great value for what you get, we\'d definitely book again.', createdAt: '2025-01-12T00:00:00.000Z' },
    { id: 71, name: 'Alejandro López', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-12-29T00:00:00.000Z' },
    { id: 69, name: 'Rodrigo Ramírez', rating: 5, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-06-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 74, name: 'Emily Lewis', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-09-22T00:00:00.000Z' },
    { id: 75, name: 'Andrew Wright', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-02-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 76, name: 'Alejandro Castillo', rating: 3, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche. El roof garden del edificio es hermoso al atardecer, muy recomendable.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 77, name: 'Luis Fernando Torres', rating: 4, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-09-22T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 78, name: 'Rachel Scott', rating: 5, comment: 'The rooftop pool area was even better in person than in the photos. Great value for what you get, we\'d definitely book again.', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 80, name: 'Luis Fernando Vázquez', rating: 3, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-06-10T00:00:00.000Z' },
    { id: 79, name: 'Luis Fernando Ramírez', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-07-17T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 83, name: 'Christopher Young', rating: 5, comment: 'The location was excellent, everything was within walking distance. The pool was amazing, we used it almost every day during our stay.', createdAt: '2026-04-05T00:00:00.000Z' },
    { id: 82, name: 'Daniela Domínguez', rating: 5, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 81, name: 'Justin Scott', rating: 3, comment: 'Great value for what you get, we\'d definitely book again. The rooftop pool area was even better in person than in the photos.', createdAt: '2024-09-28T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 86, name: 'David Wright', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 88, name: 'Amanda Young', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 85, name: 'Emiliano Rivera', rating: 3, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas. Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad.', createdAt: '2025-10-30T00:00:00.000Z' },
    { id: 87, name: 'Tyler Anderson', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 84, name: 'Emiliano Salazar', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-03-13T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 89, name: 'Rodrigo Morales', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-04-19T00:00:00.000Z' },
    { id: 91, name: 'Brian Wright', rating: 3, comment: 'Great value for what you get, we\'d definitely book again. Loved having access to the pool — such a nice way to relax after exploring the city.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 90, name: 'Rodrigo Rivera', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 92, name: 'Kevin Miller', rating: 4, comment: 'Loved having access to the pool — such a nice way to relax after exploring the city. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-06-03T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 93, name: 'Camila Ramírez', rating: 5, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-07-19T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 94, name: 'Ricardo Ramírez', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días. Fue muy práctico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2025-06-23T00:00:00.000Z' },
    { id: 95, name: 'Camila Ramírez', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-05-14T00:00:00.000Z' },
    { id: 96, name: 'Brian King', rating: 4, comment: 'We played a match on the padel court one afternoon — great amenity. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-01-20T00:00:00.000Z' },
    { id: 97, name: 'Paulina Ramírez', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2024-07-30T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 98, name: 'Nicole Clark', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-11-13T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 99, name: 'Tyler Lewis', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Any question we had was answered right away, really great service.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 100, name: 'Justin Lewis', rating: 4, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. Any question we had was answered right away, really great service.', createdAt: '2025-03-21T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 103, name: 'Jennifer King', rating: 5, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-03-10T00:00:00.000Z' },
    { id: 101, name: 'Valeria Torres', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 102, name: 'Jessica Lewis', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Felt very safe walking around the neighborhood even at night.', createdAt: '2023-11-27T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 105, name: 'Alejandro Mendoza', rating: 5, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-10-13T00:00:00.000Z' },
    { id: 104, name: 'Emily Wright', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-09-30T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 110, name: 'Jennifer Thompson', rating: 4, comment: 'The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 107, name: 'Rodrigo Ortiz', rating: 3, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-11-27T00:00:00.000Z' },
    { id: 108, name: 'Paulina Torres', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-05-25T00:00:00.000Z' },
    { id: 106, name: 'Fernanda Vázquez', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2024-07-08T00:00:00.000Z' },
    { id: 109, name: 'Andrew Thompson', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-06-18T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 113, name: 'Matthew Martinez', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 111, name: 'Lauren Scott', rating: 4, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 112, name: 'Rodrigo Ortiz', rating: 4, comment: 'La cama era muy cómoda, dormimos increíble todas las noches. Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad.', createdAt: '2024-07-14T00:00:00.000Z' },
  ],
  'chapala-de-la-hacienda-5-49': [
    { id: 114, name: 'David Young', rating: 4, comment: 'So much natural light in the apartment, made it feel really spacious. Loved the roof garden — perfect spot for sunset with a drink.', createdAt: '2023-11-01T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 116, name: 'Christopher Scott', rating: 5, comment: 'Any question we had was answered right away, really great service.', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 115, name: 'Emiliano Reyes', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-02-04T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 117, name: 'Camila Torres', rating: 5, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-10-12T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 118, name: 'Alejandro Hernández', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-07-08T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 120, name: 'Matthew Lewis', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious. The pool was amazing, we used it almost every day during our stay.', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 122, name: 'Tyler Wright', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-08-27T00:00:00.000Z' },
    { id: 119, name: 'Mariana Rivera', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-11-09T00:00:00.000Z' },
    { id: 121, name: 'Sofía Domínguez', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2024-03-20T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 123, name: 'Carlos Domínguez', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2026-03-30T00:00:00.000Z' },
    { id: 124, name: 'Brian Johnson', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, we\'d definitely book again.', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 125, name: 'Luis Fernando Morales', rating: 5, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-01-09T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 127, name: 'Carlos Domínguez', rating: 5, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 126, name: 'Rachel Brown', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 128, name: 'Matthew Brown', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-07-25T00:00:00.000Z' },
  ],
  'guadalajara-c-manuel-lopez-cotilla-1223-59': [
    { id: 129, name: 'Rachel Walker', rating: 5, comment: 'Felt very safe walking around the neighborhood even at night.', createdAt: '2024-09-10T00:00:00.000Z' },
    { id: 130, name: 'Emiliano Ramírez', rating: 4, comment: 'La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-06-19T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 133, name: 'Gerardo Rivera', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2026-02-07T00:00:00.000Z' },
    { id: 134, name: 'Luis Fernando Morales', rating: 5, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-09-02T00:00:00.000Z' },
    { id: 131, name: 'Rachel Thompson', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious. The rooftop terrace has an incredible view, we spent several evenings up there.', createdAt: '2025-09-01T00:00:00.000Z' },
    { id: 132, name: 'Luis Fernando Gutiérrez', rating: 3, comment: 'La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2024-05-10T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 136, name: 'Ryan Young', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The bed was super comfortable, slept great every night.', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 135, name: 'Lauren Clark', rating: 3, comment: 'Communication over WhatsApp was fast and friendly the whole time. We used the building\'s private cinema room one night, such a fun extra.', createdAt: '2023-11-10T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 138, name: 'Ricardo Hernández', rating: 3, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperábamos. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2026-07-19T00:00:00.000Z' },
    { id: 140, name: 'Jennifer Johnson', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. The location was excellent, everything was within walking distance.', createdAt: '2026-04-18T00:00:00.000Z' },
    { id: 137, name: 'Paulina Domínguez', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-11-19T00:00:00.000Z' },
    { id: 139, name: 'Rachel Walker', rating: 5, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Great value for what you get, we\'d definitely book again.', createdAt: '2024-09-18T00:00:00.000Z' },
    { id: 141, name: 'Camila Vázquez', rating: 5, comment: 'Aprovechamos el spa del edificio un día, un lujo que no esperábamos. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-05-08T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 142, name: 'Andrew Walker', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2026-01-08T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 145, name: 'Ximena Gutiérrez', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2026-04-14T00:00:00.000Z' },
    { id: 144, name: 'Sofía Gutiérrez', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 143, name: 'Nicole Wilson', rating: 5, comment: 'Any question we had was answered right away, really great service. We brought our dog along and it worked out great — genuinely pet friendly place.', createdAt: '2024-09-11T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 147, name: 'Nicole Walker', rating: 4, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 146, name: 'Andrés Guzmán', rating: 4, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-09-15T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 148, name: 'Ryan Martinez', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-07-24T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 150, name: 'Michael Scott', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-24T00:00:00.000Z' },
    { id: 149, name: 'Emily Davis', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-06-12T00:00:00.000Z' },
    { id: 151, name: 'Diego Rivera', rating: 5, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche. La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada.', createdAt: '2024-10-20T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 153, name: 'Alejandro Aguilar', rating: 4, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-07-28T00:00:00.000Z' },
    { id: 155, name: 'Jessica Clark', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-05-10T00:00:00.000Z' },
    { id: 154, name: 'Kevin Wilson', rating: 3, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-02-20T00:00:00.000Z' },
    { id: 152, name: 'Michael Martinez', rating: 5, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2024-07-05T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 157, name: 'Santiago Torres', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-05-06T00:00:00.000Z' },
    { id: 158, name: 'Valeria López', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 156, name: 'Matthew Miller', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-02-14T00:00:00.000Z' },
    { id: 159, name: 'Tyler Anderson', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 160, name: 'Diego Mendoza', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 161, name: 'Christopher Taylor', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-02-09T00:00:00.000Z' },
    { id: 162, name: 'Brian Clark', rating: 4, comment: 'Great value for what you get, we\'d definitely book again. The rooftop pool area was even better in person than in the photos.', createdAt: '2024-11-06T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 163, name: 'Rachel Walker', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-10-26T00:00:00.000Z' },
    { id: 164, name: 'Andrés Domínguez', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-09-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 165, name: 'Gerardo Reyes', rating: 4, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-09-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 168, name: 'Ricardo Ramírez', rating: 5, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-10-03T00:00:00.000Z' },
    { id: 167, name: 'Lauren Scott', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Great value for what you get, we\'d definitely book again.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 169, name: 'Regina Castillo', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-09-03T00:00:00.000Z' },
    { id: 170, name: 'Emiliano Hernández', rating: 5, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-06-04T00:00:00.000Z' },
    { id: 166, name: 'Daniela Gutiérrez', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-01-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 172, name: 'Diego López', rating: 3, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión. La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí.', createdAt: '2025-04-10T00:00:00.000Z' },
    { id: 171, name: 'Emiliano Gutiérrez', rating: 5, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión. El roof garden del edificio es hermoso al atardecer, muy recomendable.', createdAt: '2024-12-11T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 173, name: 'Valeria Morales', rating: 5, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 174, name: 'Justin Anderson', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-02-03T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 176, name: 'Jessica Anderson', rating: 5, comment: 'The bed was super comfortable, slept great every night. We brought our dog along and it worked out great — genuinely pet friendly place.', createdAt: '2026-01-15T00:00:00.000Z' },
    { id: 175, name: 'Valeria Salazar', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-09-11T00:00:00.000Z' },
    { id: 177, name: 'Alejandro Ortiz', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-06-25T00:00:00.000Z' },
    { id: 178, name: 'Kevin Brown', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The bed was super comfortable, slept great every night.', createdAt: '2024-02-16T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 180, name: 'Fernanda Mendoza', rating: 4, comment: 'La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2026-02-17T00:00:00.000Z' },
    { id: 182, name: 'Rodrigo Vázquez', rating: 5, comment: 'La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento. Fue muy práctico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 181, name: 'Andrew Clark', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 183, name: 'Kevin Taylor', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 179, name: 'Andrés Ortiz', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días. Fue muy práctico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2025-05-05T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 184, name: 'Ryan Young', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Any question we had was answered right away, really great service.', createdAt: '2025-06-30T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 185, name: 'David Wilson', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Great value for what you get, we\'d definitely book again.', createdAt: '2025-06-28T00:00:00.000Z' },
    { id: 186, name: 'Fernanda Gutiérrez', rating: 3, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-05-01T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 188, name: 'Paulina Torres', rating: 3, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2026-01-18T00:00:00.000Z' },
    { id: 187, name: 'Brian Anderson', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-04-23T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 189, name: 'Emily Davis', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Any question we had was answered right away, really great service.', createdAt: '2025-03-06T00:00:00.000Z' },
    { id: 190, name: 'Megan King', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The bed was super comfortable, slept great every night.', createdAt: '2024-12-08T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 191, name: 'Ashley Walker', rating: 5, comment: 'The location was excellent, everything was within walking distance.', createdAt: '2025-06-29T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 192, name: 'Christopher Walker', rating: 4, comment: 'The location was excellent, everything was within walking distance.', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 193, name: 'Regina Ramírez', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-08-25T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 194, name: 'Ricardo Castillo', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-05-17T00:00:00.000Z' },
    { id: 195, name: 'Regina Salazar', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 196, name: 'Ricardo Ortiz', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 198, name: 'Rodrigo Morales', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 197, name: 'Rachel Miller', rating: 5, comment: 'Great value for what you get, we\'d definitely book again.', createdAt: '2024-11-03T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 199, name: 'Emiliano Domínguez', rating: 4, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-12-17T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 201, name: 'Matthew Scott', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Great value for what you get, we\'d definitely book again.', createdAt: '2025-08-05T00:00:00.000Z' },
    { id: 200, name: 'Diego Rivera', rating: 3, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-10-30T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 202, name: 'Carlos Ramírez', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-10-31T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 203, name: 'Camila López', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2026-06-06T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 204, name: 'Valeria Mendoza', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-01-29T00:00:00.000Z' },
    { id: 205, name: 'Sofía Reyes', rating: 3, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-10-17T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 206, name: 'Santiago Reyes', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2024-08-20T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 208, name: 'Matthew Martinez', rating: 3, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 207, name: 'Santiago Ortiz', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-12-20T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 210, name: 'Regina Guzmán', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-10-20T00:00:00.000Z' },
    { id: 209, name: 'Megan Taylor', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. Any question we had was answered right away, really great service.', createdAt: '2024-10-28T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 211, name: 'Emiliano Salazar', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 212, name: 'Justin Young', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 213, name: 'Emiliano Castillo', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-05-26T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 217, name: 'Lauren Brown', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-01-27T00:00:00.000Z' },
    { id: 214, name: 'Daniela Ortiz', rating: 3, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-12-11T00:00:00.000Z' },
    { id: 218, name: 'Ryan Miller', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious. Really appreciated having a proper gym on site instead of paying for a day pass somewhere.', createdAt: '2025-08-28T00:00:00.000Z' },
    { id: 215, name: 'Andrés Guzmán', rating: 4, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperábamos. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2024-09-05T00:00:00.000Z' },
    { id: 216, name: 'Rodrigo López', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2023-11-28T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 219, name: 'Fernanda Ramírez', rating: 4, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-07-20T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 223, name: 'Rachel King', rating: 4, comment: 'Any question we had was answered right away, really great service. Really appreciated having a proper gym on site instead of paying for a day pass somewhere.', createdAt: '2026-02-18T00:00:00.000Z' },
    { id: 221, name: 'Megan Thompson', rating: 4, comment: 'The location was excellent, everything was within walking distance.', createdAt: '2026-01-05T00:00:00.000Z' },
    { id: 220, name: 'Ryan Clark', rating: 3, comment: 'Really appreciated having a proper gym on site instead of paying for a day pass somewhere. The bed was super comfortable, slept great every night.', createdAt: '2024-07-23T00:00:00.000Z' },
    { id: 222, name: 'Christopher Walker', rating: 4, comment: 'We used the building\'s private cinema room one night, such a fun extra. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-05-30T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 225, name: 'Nicole Lewis', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-08-27T00:00:00.000Z' },
    { id: 224, name: 'Brian Lewis', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay. We treated ourselves to the spa one afternoon, such a nice bonus.', createdAt: '2025-05-18T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 226, name: 'Brian Brown', rating: 3, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-04-21T00:00:00.000Z' },
    { id: 227, name: 'Rodrigo Gutiérrez', rating: 3, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-11-03T00:00:00.000Z' },
    { id: 228, name: 'Sofía Vázquez', rating: 4, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-03-08T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 229, name: 'Kevin Taylor', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Any question we had was answered right away, really great service.', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 230, name: 'Nicole Brown', rating: 3, comment: 'The kitchen was well stocked, we cooked several meals during our stay. The garden area was a peaceful little spot to relax between outings.', createdAt: '2024-08-29T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 231, name: 'Alejandro Hernández', rating: 3, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 233, name: 'Lauren Miller', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. The bed was super comfortable, slept great every night.', createdAt: '2025-04-28T00:00:00.000Z' },
    { id: 232, name: 'Fernanda Domínguez', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-10-24T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 235, name: 'Valeria Morales', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2025-02-10T00:00:00.000Z' },
    { id: 234, name: 'Kevin Brown', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Great value for what you get, we\'d definitely book again.', createdAt: '2024-10-01T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 239, name: 'Emiliano Guzmán', rating: 3, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 238, name: 'Michael Young', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 236, name: 'Christopher Martinez', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-01-23T00:00:00.000Z' },
    { id: 237, name: 'Sarah Walker', rating: 3, comment: 'Great value for what you get, we\'d definitely book again.', createdAt: '2025-01-20T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 242, name: 'Rachel Martinez', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. The bed was super comfortable, slept great every night.', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 243, name: 'Nicole Thompson', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 241, name: 'Regina López', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La ubicación es excelente, todo quedaba cerca caminando.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 240, name: 'Diego Rivera', rating: 5, comment: 'El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2024-04-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 244, name: 'Justin Davis', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-12-27T00:00:00.000Z' },
    { id: 246, name: 'Lauren Clark', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-09-21T00:00:00.000Z' },
    { id: 245, name: 'Sofía Hernández', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-07-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 248, name: 'Kevin Clark', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. So much natural light in the apartment, made it feel really spacious.', createdAt: '2024-09-21T00:00:00.000Z' },
    { id: 247, name: 'Emily Wright', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2024-07-31T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 250, name: 'Alejandro Aguilar', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2026-04-02T00:00:00.000Z' },
    { id: 253, name: 'Fernanda Aguilar', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 252, name: 'Regina Ramírez', rating: 5, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-08-21T00:00:00.000Z' },
    { id: 251, name: 'Ryan Martinez', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-03-25T00:00:00.000Z' },
    { id: 249, name: 'Paulina López', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2024-06-18T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 255, name: 'David Johnson', rating: 4, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-09-17T00:00:00.000Z' },
    { id: 254, name: 'Brian Wilson', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay. The coworking space was perfect for getting work done during the trip, good wifi and quiet.', createdAt: '2025-07-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 257, name: 'Matthew Brown', rating: 5, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2026-06-15T00:00:00.000Z' },
    { id: 256, name: 'Santiago Torres', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-05-09T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 260, name: 'Camila Castillo', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 261, name: 'Emily Anderson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-11-29T00:00:00.000Z' },
    { id: 259, name: 'Lauren Young', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The location was excellent, everything was within walking distance.', createdAt: '2025-07-04T00:00:00.000Z' },
    { id: 258, name: 'Tyler Lewis', rating: 4, comment: 'So much natural light in the apartment, made it feel really spacious. Having dedicated parking made things so much easier, no stress finding a spot.', createdAt: '2025-04-09T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 262, name: 'Megan Miller', rating: 5, comment: 'The beach access was incredible, exactly what we were hoping for. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-06-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 263, name: 'Valeria Ortiz', rating: 5, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-05-06T00:00:00.000Z' },
    { id: 264, name: 'Jessica Scott', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 265, name: 'Amanda Wright', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-07-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 266, name: 'Matthew Davis', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. The bed was super comfortable, slept great every night.', createdAt: '2026-02-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 267, name: 'Justin Brown', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-09-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 268, name: 'Santiago Reyes', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2026-02-15T00:00:00.000Z' },
    { id: 270, name: 'Luis Fernando Gutiérrez', rating: 4, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 269, name: 'Alejandro Guzmán', rating: 3, comment: 'La cercanía a la playa fue lo mejor, se puede llegar caminando en minutos. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-03-06T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 271, name: 'Nicole King', rating: 5, comment: 'The bed was super comfortable, slept great every night. The balcony was a great bonus — nice breeze and a good view of the neighborhood.', createdAt: '2025-11-16T00:00:00.000Z' },
    { id: 272, name: 'Ricardo Mendoza', rating: 5, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-11-10T00:00:00.000Z' },
    { id: 274, name: 'Rachel Johnson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-08-04T00:00:00.000Z' },
    { id: 273, name: 'Santiago Salazar', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-04-08T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 275, name: 'Mariana López', rating: 3, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-04-16T00:00:00.000Z' },
    { id: 277, name: 'Fernanda Castillo', rating: 4, comment: 'La cercanía a la playa fue lo mejor, se puede llegar caminando en minutos. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 278, name: 'Ricardo Hernández', rating: 3, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-03-12T00:00:00.000Z' },
    { id: 276, name: 'Ryan Johnson', rating: 3, comment: 'Being steps from the beach made the whole trip — we walked over every morning. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-01-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 280, name: 'Andrés López', rating: 4, comment: 'El jardín del edificio es muy tranquilo, un buen lugar para desconectar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 279, name: 'Luis Fernando Torres', rating: 4, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-02-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 281, name: 'Santiago López', rating: 3, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 282, name: 'Ryan Thompson', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Any question we had was answered right away, really great service.', createdAt: '2024-03-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 285, name: 'Paulina Aguilar', rating: 5, comment: 'Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 284, name: 'Ricardo Vázquez', rating: 3, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-01-07T00:00:00.000Z' },
    { id: 283, name: 'Camila Mendoza', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-06-02T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 287, name: 'Ximena López', rating: 3, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-04-30T00:00:00.000Z' },
    { id: 290, name: 'Carlos Guzmán', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2026-02-20T00:00:00.000Z' },
    { id: 286, name: 'Sarah Wilson', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-12-04T00:00:00.000Z' },
    { id: 288, name: 'Valeria Hernández', rating: 5, comment: 'La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-01-31T00:00:00.000Z' },
    { id: 289, name: 'Michael Thompson', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2023-11-26T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 293, name: 'Ximena Gutiérrez', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-10-22T00:00:00.000Z' },
    { id: 291, name: 'Camila Mendoza', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-05-08T00:00:00.000Z' },
    { id: 292, name: 'Diego Hernández', rating: 3, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión. El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días.', createdAt: '2025-02-27T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-134': [
    { id: 294, name: 'Luis Fernando Ortiz', rating: 5, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2024-12-11T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 295, name: 'Andrés Gutiérrez', rating: 5, comment: 'La cercanía a la playa fue lo mejor, se puede llegar caminando en minutos. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-06-20T00:00:00.000Z' },
    { id: 296, name: 'Ximena Guzmán', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Nos ayudaron con cualquier duda de inmediato, muy buena atención.', createdAt: '2025-04-13T00:00:00.000Z' },
    { id: 297, name: 'Emiliano Salazar', rating: 5, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-03-24T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-136': [
    { id: 298, name: 'Brian King', rating: 5, comment: 'The pool was amazing, we used it almost every day during our stay. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-02-15T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 299, name: 'Rachel Thompson', rating: 4, comment: 'The bed was super comfortable, slept great every night. We brought our dog along and it worked out great — genuinely pet friendly place.', createdAt: '2024-09-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 302, name: 'Amanda Taylor', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-03-22T00:00:00.000Z' },
    { id: 301, name: 'Carlos Castillo', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-08-31T00:00:00.000Z' },
    { id: 300, name: 'Carlos Morales', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-06-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 303, name: 'Amanda Johnson', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The bed was super comfortable, slept great every night.', createdAt: '2025-09-29T00:00:00.000Z' },
    { id: 305, name: 'Jessica Thompson', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 304, name: 'Rodrigo Torres', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-11-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 307, name: 'Amanda Walker', rating: 5, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. The bed was super comfortable, slept great every night.', createdAt: '2025-10-20T00:00:00.000Z' },
    { id: 306, name: 'Luis Fernando Vázquez', rating: 4, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión. El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio.', createdAt: '2025-02-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 309, name: 'Sarah Miller', rating: 3, comment: 'The garden area was a peaceful little spot to relax between outings. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-07-07T00:00:00.000Z' },
    { id: 308, name: 'Regina Hernández', rating: 3, comment: 'El wifi era muy rápido, pude trabajar sin ningún problema de conexión. Fue muy práctico tener estacionamiento propio, no batallamos nada con eso.', createdAt: '2025-06-27T00:00:00.000Z' },
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-143': [
    { id: 311, name: 'Amanda Wilson', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 310, name: 'Gerardo Ramírez', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-08-30T00:00:00.000Z' },
    { id: 313, name: 'Emiliano Domínguez', rating: 5, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 312, name: 'Andrew Davis', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-01-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 314, name: 'Jennifer Thompson', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-07-25T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 317, name: 'Diego Torres', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 316, name: 'Andrew Taylor', rating: 3, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-08-29T00:00:00.000Z' },
    { id: 315, name: 'Ricardo Reyes', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-05-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 319, name: 'María José Torres', rating: 3, comment: 'Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-10-19T00:00:00.000Z' },
    { id: 318, name: 'Kevin Brown', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2024-07-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 321, name: 'Andrew Johnson', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 320, name: 'Camila Vázquez', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2024-08-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 323, name: 'Justin Wright', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-02T00:00:00.000Z' },
    { id: 324, name: 'Michael Davis', rating: 3, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. The bed was super comfortable, slept great every night.', createdAt: '2025-02-11T00:00:00.000Z' },
    { id: 322, name: 'Justin Wilson', rating: 3, comment: 'Really well located, close to great restaurants and easy to get around.', createdAt: '2024-01-29T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-151': [
    { id: 325, name: 'María José Gutiérrez', rating: 5, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-11-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 326, name: 'Sarah Taylor', rating: 4, comment: 'Really well located, close to great restaurants and easy to get around. Loved having access to the pool — such a nice way to relax after exploring the city.', createdAt: '2025-05-30T00:00:00.000Z' },
    { id: 327, name: 'Emiliano Ortiz', rating: 4, comment: 'El área de juegos / billar del edificio estuvo bien para las noches tranquilas. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-10-29T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 328, name: 'Christopher Anderson', rating: 4, comment: 'Everything was clean and tidy, exceeded our expectations honestly. We brought our dog along and it worked out great — genuinely pet friendly place.', createdAt: '2025-08-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 331, name: 'Nicole Davis', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 329, name: 'Alejandro Aguilar', rating: 3, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-10-26T00:00:00.000Z' },
    { id: 330, name: 'Luis Fernando Vázquez', rating: 4, comment: 'Una noche usamos la sala de cine del edificio, detalle que no esperábamos. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-02-26T00:00:00.000Z' },
    { id: 332, name: 'Kevin Miller', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2023-12-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 333, name: 'Regina Ramírez', rating: 3, comment: 'La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento. El roof garden del edificio es hermoso al atardecer, muy recomendable.', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 334, name: 'Alejandro Guzmán', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2024-05-30T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 335, name: 'Ricardo Castillo', rating: 5, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalación. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-05-29T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 337, name: 'Matthew Davis', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset with a drink. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-04-26T00:00:00.000Z' },
    { id: 338, name: 'Carlos Morales', rating: 5, comment: 'Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-04-21T00:00:00.000Z' },
    { id: 336, name: 'Mariana Aguilar', rating: 4, comment: 'La terraza / roof garden tiene una vista espectacular, pasamos varias tardes ahí. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-03-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 340, name: 'Christopher Wright', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-07-08T00:00:00.000Z' },
    { id: 339, name: 'David Brown', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-09-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 343, name: 'Jennifer Martinez', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Any question we had was answered right away, really great service.', createdAt: '2026-03-31T00:00:00.000Z' },
    { id: 341, name: 'Regina Castillo', rating: 3, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2026-03-10T00:00:00.000Z' },
    { id: 342, name: 'Jennifer Wright', rating: 5, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-01-20T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 345, name: 'Mariana Salazar', rating: 5, comment: 'La alberca es más bonita de lo que se ve en las fotos, muy bien cuidada. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-06-15T00:00:00.000Z' },
    { id: 346, name: 'Matthew Lewis', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Any question we had was answered right away, really great service.', createdAt: '2025-02-24T00:00:00.000Z' },
    { id: 344, name: 'Justin Young', rating: 3, comment: 'The pool was amazing, we used it almost every day during our stay. Any question we had was answered right away, really great service.', createdAt: '2024-11-18T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 347, name: 'Santiago Morales', rating: 5, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalación. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2024-06-04T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 348, name: 'Rachel Brown', rating: 3, comment: 'We used the building\'s private cinema room one night, such a fun extra. Great value for what you get, we\'d definitely book again.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 350, name: 'Jennifer Anderson', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, we\'d definitely book again.', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 349, name: 'Gerardo Ortiz', rating: 5, comment: 'Excelente que el edificio tenga gym, lo usé casi todas las mañanas. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-08-30T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 352, name: 'Lauren Wilson', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Great value for what you get, we\'d definitely book again.', createdAt: '2026-02-17T00:00:00.000Z' },
    { id: 351, name: 'Brian Lewis', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Any question we had was answered right away, really great service.', createdAt: '2025-09-01T00:00:00.000Z' },
    { id: 355, name: 'Santiago López', rating: 4, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-08-10T00:00:00.000Z' },
    { id: 354, name: 'Tyler Walker', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Felt very safe walking around the neighborhood even at night.', createdAt: '2024-09-10T00:00:00.000Z' },
    { id: 353, name: 'Andrew Johnson', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-05-18T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 357, name: 'Daniela Gutiérrez', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-11-27T00:00:00.000Z' },
    { id: 356, name: 'Santiago Gutiérrez', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La relación precio-calidad es muy buena, definitivamente volveríamos.', createdAt: '2025-05-19T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-168': [
    { id: 358, name: 'Nicole Johnson', rating: 4, comment: 'The rooftop pool area was even better in person than in the photos. Any question we had was answered right away, really great service.', createdAt: '2026-02-22T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 359, name: 'Carlos Castillo', rating: 5, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-05-25T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 360, name: 'Emily Scott', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2026-05-19T00:00:00.000Z' },
    { id: 361, name: 'Mariana Aguilar', rating: 5, comment: 'Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-07-31T00:00:00.000Z' },
    { id: 363, name: 'Diego Guzmán', rating: 5, comment: 'Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2024-10-17T00:00:00.000Z' },
    { id: 362, name: 'Ryan Taylor', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2024-08-02T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 364, name: 'Amanda Miller', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-06-26T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 366, name: 'Amanda Johnson', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 367, name: 'Megan Wilson', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-06-02T00:00:00.000Z' },
    { id: 365, name: 'Rodrigo Hernández', rating: 4, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2024-07-02T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 369, name: 'Mariana Reyes', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2026-05-07T00:00:00.000Z' },
    { id: 368, name: 'Andrés Domínguez', rating: 5, comment: 'Nos encantó poder nadar en la alberca en las tardes después de trabajar. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2023-10-31T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 370, name: 'Andrés Hernández', rating: 3, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.', createdAt: '2025-12-20T00:00:00.000Z' },
    { id: 371, name: 'Nicole Miller', rating: 3, comment: 'The beach access was incredible, exactly what we were hoping for. The apartment was spotless when we arrived, clearly well maintained.', createdAt: '2024-11-25T00:00:00.000Z' },
    { id: 372, name: 'Jennifer Lewis', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Felt very safe walking around the neighborhood even at night.', createdAt: '2024-11-01T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 374, name: 'Justin Anderson', rating: 4, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 373, name: 'Ryan Anderson', rating: 3, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2024-08-27T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 375, name: 'Carlos Castillo', rating: 5, comment: 'La alberca del edificio estuvo increíble, la usamos casi todos los días. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-01-06T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 377, name: 'Nicole Wilson', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-02-17T00:00:00.000Z' },
    { id: 376, name: 'Jennifer Clark', rating: 4, comment: 'Really well located, close to great restaurants and easy to get around. Having dedicated parking made things so much easier, no stress finding a spot.', createdAt: '2024-07-24T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 379, name: 'Kevin Davis', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 378, name: 'Rachel King', rating: 4, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2024-10-18T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 382, name: 'Andrés Aguilar', rating: 3, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El wifi era muy rápido, pude trabajar sin ningún problema de conexión.', createdAt: '2025-10-11T00:00:00.000Z' },
    { id: 380, name: 'Gerardo Aguilar', rating: 5, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-02-28T00:00:00.000Z' },
    { id: 383, name: 'Andrés Ortiz', rating: 4, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2024-02-24T00:00:00.000Z' },
    { id: 381, name: 'David Lewis', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The bed was super comfortable, slept great every night.', createdAt: '2023-11-03T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 385, name: 'Andrew Davis', rating: 5, comment: 'Loved having our own balcony, we had coffee out there every morning. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-09-23T00:00:00.000Z' },
    { id: 384, name: 'Amanda Taylor', rating: 3, comment: 'The location was excellent, everything was within walking distance.', createdAt: '2024-06-01T00:00:00.000Z' },
    { id: 386, name: 'Tyler Walker', rating: 5, comment: 'Great value for what you get, we\'d definitely book again.', createdAt: '2024-02-12T00:00:00.000Z' },
  ],
};