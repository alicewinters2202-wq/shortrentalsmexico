// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Menciones de precio/valor ajustadas al precio REAL de cada propiedad (budget/mid/upper/luxury).
// Cada reseña referencia solo amenidades reales. Maximo 3 por propiedad para calidad real.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 2, name: 'Carlos G.', rating: 4, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, no es el mas barato pero definitivamente se siente que pagas por calidad real', createdAt: '2025-06-24T00:00:00.000Z' },
    { id: 1, name: 'Jessica D.', rating: 3, comment: 'The neighborhood has such a great vibe, cafes and restaurants everywhere.', createdAt: '2025-05-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 3, name: 'Andres D.', rating: 5, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-07-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 4, name: 'Ana Sofia L.', rating: 4, comment: 'el departamento tiene mucha luz natural se siente muy amplio y comodo', createdAt: '2025-12-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 5, name: 'Rodrigo V.', rating: 4, comment: 'vinimos con toda la familia y viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento, en general una experiencia excelente', createdAt: '2025-01-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-7': [
    { id: 6, name: 'Sofia A.', rating: 5, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema, buen punto medio entre precio y comodidad, cumplio con todo lo que buscabamos', createdAt: '2024-08-02T00:00:00.000Z' },
    { id: 7, name: 'Jennifer B.', rating: 5, comment: 'Loved the roof garden — perfect spot for sunset. Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2024-07-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 9, name: 'Katie Y.', rating: 4, comment: 'not having to worry about where to park was such a relief, the bed was super comfortable, slept great every night', createdAt: '2025-08-20T00:00:00.000Z' },
    { id: 8, name: 'Andrew L.', rating: 4, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, felt very safe the whole time, the building has good security', createdAt: '2025-01-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 11, name: 'Lauren Y.', rating: 5, comment: 'we brought our dog along and it worked out great — genuinely pet friendly place, the building is really quiet, slept great despite being in a central area', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 10, name: 'Brian M.', rating: 3, comment: 'We celebrated our anniversary here and having dedicated parking made things so much easier, no stress finding a spot. For what we paid, the quality was way better than expected.', createdAt: '2025-05-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 13, name: 'Brandon B.', rating: 3, comment: 'The bathroom was well equipped with really good water pressure.', createdAt: '2026-05-05T00:00:00.000Z' },
    { id: 12, name: 'Matthew C.', rating: 5, comment: 'not having to worry about where to park was such a relief, great value for what you get, wed definitely book again, overall a great experience', createdAt: '2026-03-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 15, name: 'Ximena V.', rating: 5, comment: 'reservamos a ultima hora y el check-in fue super sencillo, sin complicaciones ni esperas', createdAt: '2026-04-09T00:00:00.000Z' },
    { id: 14, name: 'Ximena A.', rating: 3, comment: 'Excelente opcion para quien busca algo economico sin sacrificar comodidad. La vista desde el departamento es hermosa, no nos cansamos de verla.', createdAt: '2024-08-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-14': [
    { id: 16, name: 'Lauren D.', rating: 5, comment: 'not having to worry about where to park was such a relief, the building feels really calm, good neighbors and a nice overall vibe', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 17, name: 'Katie J.', rating: 5, comment: 'traveling with a pet always feels risky but we had zero issues here, great value for what you get, wed definitely book again', createdAt: '2024-03-29T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 18, name: 'Diego C.', rating: 4, comment: 'Cada tarde subiamos al roof con una copa a ver el atardecer. Habia mucho espacio para guardar nuestras cosas, algo que no esperabamos.', createdAt: '2025-08-28T00:00:00.000Z' },
    { id: 19, name: 'Christopher T.', rating: 4, comment: 'Used the gym most mornings before heading out to work. For what we paid, the quality was way better than expected.', createdAt: '2024-07-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-16': [
    { id: 20, name: 'Sebastian S.', rating: 5, comment: 'vinimos por trabajo y el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2026-02-21T00:00:00.000Z' },
    { id: 21, name: 'Valeria D.', rating: 3, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme muy cerca del metro nos movimos por toda la ciudad sin complicaciones', createdAt: '2025-07-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 22, name: 'Brian J.', rating: 5, comment: 'we celebrated our anniversary here and we brought our dog along and it worked out great — genuinely pet friendly place, had a small issue and it was fixed the same day, really responsive, overall a great experience', createdAt: '2025-03-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 23, name: 'Amanda J.', rating: 4, comment: 'The AC worked perfectly, which mattered a lot given how hot it gets there. Highly recommend.', createdAt: '2026-05-06T00:00:00.000Z' },
    { id: 24, name: 'Jessica D.', rating: 3, comment: 'traveling with a pet always feels risky but we had zero issues here wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 25, name: 'Nicole L.', rating: 5, comment: 'We stayed a week and everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-10-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 26, name: 'Ana Sofia M.', rating: 5, comment: 'No tener que preocuparnos por dónde dejar el coche fue un alivio enorme. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo. En general una experiencia excelente.', createdAt: '2026-02-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 27, name: 'Javier M.', rating: 5, comment: 'fue nuestro segundo viaje aqui y fue muy practico tener estacionamiento propio, no batallamos nada con eso, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 28, name: 'Megan T.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Worth every peso, you can tell the quality the moment you walk in.', createdAt: '2025-09-23T00:00:00.000Z' },
    { id: 29, name: 'Jonathan T.', rating: 4, comment: 'Having our own outdoor space made the apartment feel so much bigger. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 30, name: 'Ashley T.', rating: 5, comment: 'we came with the whole family and feels like a higher-end place without the price tag being over the top, the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2025-08-30T00:00:00.000Z' },
    { id: 31, name: 'Paulina R.', rating: 3, comment: 'El check-in fue super sencillo, sin complicaciones ni esperas.', createdAt: '2025-07-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 32, name: 'Valeria H.', rating: 4, comment: 'nos quedamos una semana y tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande, vale cada peso, la calidad se nota desde que entras', createdAt: '2025-11-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 33, name: 'Lauren R.', rating: 4, comment: 'Not having to worry about where to park was such a relief. Really well located, close to great restaurants and easy to get around. Overall a great experience.', createdAt: '2024-05-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 36, name: 'Maria Jose C.', rating: 3, comment: 'celebramos nuestro aniversario aqui y no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia la colonia tiene un ambiente increible cafes y restaurantes por todos lados en general una experiencia excelente', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 35, name: 'Justin H.', rating: 4, comment: 'we came with the whole family and great value for what you get, wed definitely book again, felt very safe the whole time, the building has good security', createdAt: '2024-10-23T00:00:00.000Z' },
    { id: 34, name: 'Ryan W.', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The bed was super comfortable, slept great every night.', createdAt: '2024-10-15T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-48-26': [
    { id: 37, name: 'Renata S.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-03-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 39, name: 'Luis Fernando A.', rating: 3, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Para lo que pagamos, la calidad fue mucho mejor de lo esperado. Sin duda volveriamos a reservar aqui.', createdAt: '2025-07-16T00:00:00.000Z' },
    { id: 38, name: 'Emily Y.', rating: 5, comment: 'Managed to keep my workout routine going thanks to the building gym. The elevator worked great, never had to wait around for it. Highly recommend.', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 41, name: 'Samantha A.', rating: 5, comment: 'the jacuzzi was a nice surprise great way to unwind in the evenings and had a small issue and it was fixed the same day really responsive', createdAt: '2025-12-10T00:00:00.000Z' },
    { id: 42, name: 'Brian T.', rating: 5, comment: 'Traveling with a pet always feels risky but we had zero issues here. The apartment was spotless when we arrived.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 40, name: 'Luis Fernando V.', rating: 3, comment: 'Reservamos a última hora y la relación precio-calidad es muy buena, definitivamente volveríamos. La vista desde el departamento es hermosa, no nos cansamos de verla.', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 43, name: 'Lauren Y.', rating: 4, comment: 'everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-02-13T00:00:00.000Z' },
    { id: 44, name: 'Amanda Y.', rating: 4, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-01-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 45, name: 'Jennifer J.', rating: 4, comment: 'not having to worry about where to park was such a relief, very close to the metro, got around the whole city without any hassle', createdAt: '2025-02-02T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 46, name: 'Maria Jose C.', rating: 4, comment: 'Fue nuestro segundo viaje aquí y el balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. Había mucho espacio para guardar nuestras cosas, algo que no esperábamos.', createdAt: '2025-12-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-34': [
    { id: 49, name: 'Andrew D.', rating: 5, comment: 'Every evening wed head up to the roof with a drink to watch the sunset. The location was excellent, everything was within walking distance.', createdAt: '2026-05-01T00:00:00.000Z' },
    { id: 47, name: 'Amanda H.', rating: 4, comment: 'this was our second time booking here and the bathroom was well equipped with really good water pressure', createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 48, name: 'Ana Sofia G.', rating: 5, comment: 'excelente opcion para quien busca algo economico sin sacrificar comodidad, el aire acondicionado funcionaba perfecto, algo importante con el calor de la zona, sin duda volveriamos a reservar aqui', createdAt: '2025-03-18T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-35': [
    { id: 50, name: 'Andrew B.', rating: 5, comment: 'We stayed a week and the gym in the building was well equipped, kept up with my workouts the whole trip. The apartment was spotless when we arrived. Overall a great experience.', createdAt: '2025-03-01T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 51, name: 'Sebastian B.', rating: 4, comment: 'aproveche el gym casi todas las mananas antes de salir a trabajar la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2024-12-12T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 52, name: 'Rachel T.', rating: 3, comment: 'communication over WhatsApp was fast and friendly the whole time, would definitely book here again', createdAt: '2025-10-10T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 54, name: 'Michael D.', rating: 5, comment: 'We stayed a week and not having to worry about where to park was such a relief. Worth every peso, you can tell the quality the moment you walk in. Would definitely book here again.', createdAt: '2026-01-28T00:00:00.000Z' },
    { id: 53, name: 'Nicole S.', rating: 5, comment: 'the kitchen was well stocked we cooked several meals during our stay', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 55, name: 'Javier T.', rating: 3, comment: 'el edificio se siente muy tranquilo, buenos vecinos y ambiente agradable', createdAt: '2025-09-02T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-39': [
    { id: 57, name: 'Sarah K.', rating: 5, comment: 'We stayed a week and not having to worry about where to park was such a relief. The elevator worked great, never had to wait around for it.', createdAt: '2025-06-19T00:00:00.000Z' },
    { id: 56, name: 'Christopher W.', rating: 4, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day. Paid for something premium and that\'s exactly what we got.', createdAt: '2024-10-08T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-40': [
    { id: 58, name: 'Sofia M.', rating: 5, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, el departamento estaba impecable cuando llegamos', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 59, name: 'Justin Y.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-03-24T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 61, name: 'Justin K.', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2026-03-05T00:00:00.000Z' },
    { id: 60, name: 'Andrew D.', rating: 5, comment: 'The apartment was spotless when we arrived.', createdAt: '2024-11-25T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 62, name: 'Ximena O.', rating: 4, comment: 'nos quedamos una semana y aprovechamos el spa del edificio un dia, pagamos por algo premium y eso fue exactamente lo que recibimos', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 63, name: 'Valeria R.', rating: 4, comment: 'El metro quedaba a unos minutos, muy facil movernos por la ciudad.', createdAt: '2026-03-23T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 64, name: 'Luis Fernando L.', rating: 4, comment: 'Alberca hermosa, limpia y con muy buena vista. Vale cada peso, la calidad se nota desde que entras.', createdAt: '2026-05-20T00:00:00.000Z' },
    { id: 65, name: 'Jonathan S.', rating: 4, comment: 'The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-10-02T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 66, name: 'Daniela H.', rating: 3, comment: 'Reservamos a ultima hora y pude mantener mi rutina de ejercicio gracias al gimnasio del edificio. Vale cada peso, la calidad se nota desde que entras.', createdAt: '2026-03-27T00:00:00.000Z' },
    { id: 67, name: 'Ricardo L.', rating: 3, comment: 'La alberca del edificio estuvo increible, la usamos casi todos los dias. El check-in fue super sencillo, sin complicaciones ni esperas.', createdAt: '2024-12-21T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 68, name: 'Matthew W.', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 69, name: 'Andres V.', rating: 5, comment: 'nos quedamos una semana y el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, el edificio es muy silencioso, dormimos increible a pesar de estar en zona centrica', createdAt: '2025-06-27T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 70, name: 'Jennifer W.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. This is a genuinely luxury property and it shows in every detail.', createdAt: '2026-04-20T00:00:00.000Z' },
    { id: 71, name: 'Matthew L.', rating: 4, comment: 'We stayed a week and used the gym most mornings before heading out to work. Very close to the metro, got around the whole city without any hassle.', createdAt: '2025-02-20T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 74, name: 'Rachel S.', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-11-14T00:00:00.000Z' },
    { id: 72, name: 'Alejandro D.', rating: 4, comment: 'Nos quedamos una semana y fue muy practico tener estacionamiento propio, no batallamos nada con eso. Excelente opcion para quien busca algo economico sin sacrificar comodidad.', createdAt: '2025-09-20T00:00:00.000Z' },
    { id: 73, name: 'Ximena D.', rating: 5, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. Nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia.', createdAt: '2025-03-08T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 75, name: 'Andres L.', rating: 4, comment: 'El edificio es muy silencioso, dormimos increible a pesar de estar en zona centrica.', createdAt: '2025-12-03T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 76, name: 'Brandon R.', rating: 4, comment: 'this was our second time booking here and we brought our dog along and it worked out great — genuinely pet friendly place, check-in was super easy thanks to the clear instructions they sent ahead of time, highly recommend', createdAt: '2026-06-12T00:00:00.000Z' },
    { id: 77, name: 'Ryan S.', rating: 3, comment: 'for what we paid, the quality was way better than expected, the view from the apartment is beautiful, never got tired of it', createdAt: '2025-06-29T00:00:00.000Z' },
    { id: 78, name: 'Gerardo A.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, el edificio se siente muy tranquilo, buenos vecinos y ambiente agradable', createdAt: '2024-02-21T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 79, name: 'Rodrigo R.', rating: 5, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-10-10T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 80, name: 'Brandon L.', rating: 5, comment: 'didn\'t think the balcony would matter this much until we used it every single day, the bathroom was well equipped with really good water pressure', createdAt: '2025-05-28T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 81, name: 'Matthew A.', rating: 3, comment: 'We came with the whole family and not having to worry about where to park was such a relief. The elevator worked great, never had to wait around for it.', createdAt: '2025-08-11T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 82, name: 'Amanda B.', rating: 4, comment: 'swimming before starting the day became part of the routine thanks to the pool plenty of storage space for our stuff wasn\'t expecting that', createdAt: '2025-07-05T00:00:00.000Z' },
    { id: 83, name: 'Jessica B.', rating: 5, comment: 'traveling with a pet always feels risky but we had zero issues here, cooked almost the whole week, the kitchen had literally everything we needed', createdAt: '2025-06-03T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 84, name: 'Emily W.', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. The kitchen was well stocked, we cooked several meals during our stay. Overall a great experience.', createdAt: '2025-05-15T00:00:00.000Z' },
    { id: 86, name: 'Gerardo D.', rating: 5, comment: 'El check-in fue super facil gracias a las instrucciones claras que nos mandaron.', createdAt: '2025-02-27T00:00:00.000Z' },
    { id: 85, name: 'Paulina S.', rating: 3, comment: 'Reservamos a última hora y no tener que preocuparnos por dónde dejar el coche fue un alivio enorme. Para lo que pagamos, la calidad fue mucho mejor de lo esperado. Totalmente recomendado.', createdAt: '2024-10-16T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 89, name: 'Renata L.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. El departamento tiene mucha luz natural, se siente muy amplio y cómodo.', createdAt: '2026-03-23T00:00:00.000Z' },
    { id: 88, name: 'Paulina L.', rating: 5, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema, la ubicacion es excelente, todo quedaba cerca caminando, en general una experiencia excelente', createdAt: '2025-08-02T00:00:00.000Z' },
    { id: 87, name: 'Lauren H.', rating: 4, comment: 'this was our second time booking here and communication over WhatsApp was fast and friendly the whole time, highly recommend', createdAt: '2025-06-29T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 90, name: 'Alejandro H.', rating: 5, comment: 'No tener que preocuparnos por dónde dejar el coche fue un alivio enorme. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2025-07-20T00:00:00.000Z' },
    { id: 91, name: 'Jennifer J.', rating: 4, comment: 'We came with the whole family and traveling with a pet always feels risky but we had zero issues here. Wifi speed was great, I worked remotely the whole stay with zero issues. Highly recommend.', createdAt: '2024-11-25T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 92, name: 'Sebastian M.', rating: 4, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2026-04-29T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 93, name: 'Valeria R.', rating: 5, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. La ubicacion es excelente, todo quedaba cerca caminando. En general una experiencia excelente.', createdAt: '2025-09-23T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-66': [
    { id: 96, name: 'Maria Jose M.', rating: 4, comment: 'No es el mas barato pero definitivamente se siente que pagas por calidad real. El check-in fue super sencillo, sin complicaciones ni esperas.', createdAt: '2026-06-20T00:00:00.000Z' },
    { id: 94, name: 'Jonathan H.', rating: 3, comment: 'having dedicated parking made things so much easier, no stress finding a spot, the bed was super comfortable, slept great every night', createdAt: '2024-10-14T00:00:00.000Z' },
    { id: 95, name: 'Jennifer D.', rating: 5, comment: 'the AC worked perfectly, which mattered a lot given how hot it gets there', createdAt: '2024-08-27T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 97, name: 'Tyler C.', rating: 3, comment: 'not having to worry about where to park was such a relief, the view from the apartment is beautiful, never got tired of it, overall a great experience', createdAt: '2026-03-16T00:00:00.000Z' },
    { id: 98, name: 'David Y.', rating: 4, comment: 'we celebrated our anniversary here and loved having our own balcony, we had coffee out there every morning, felt very safe the whole time, the building has good security', createdAt: '2025-07-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 100, name: 'Regina S.', rating: 3, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, el aire acondicionado funcionaba perfecto, algo importante con el calor de la zona', createdAt: '2025-09-28T00:00:00.000Z' },
    { id: 99, name: 'Sofia V.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y el edificio es muy silencioso, dormimos increible a pesar de estar en zona centrica.', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 101, name: 'Justin W.', rating: 5, comment: 'managed to keep my workout routine going thanks to the building gym, communication over WhatsApp was fast and friendly the whole time, overall a great experience', createdAt: '2025-08-01T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 102, name: 'Diego D.', rating: 4, comment: 'La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2026-02-27T00:00:00.000Z' },
    { id: 104, name: 'Lauren R.', rating: 5, comment: 'The elevator worked great, never had to wait around for it.', createdAt: '2024-09-23T00:00:00.000Z' },
    { id: 103, name: 'Lauren Y.', rating: 5, comment: 'Not having to worry about where to park was such a relief. Really good price for what you get, wed choose it again without hesitation. Highly recommend.', createdAt: '2024-07-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 105, name: 'Gerardo B.', rating: 4, comment: 'nos quedamos una semana y el bano estaba muy bien equipado y con buena presion de agua', createdAt: '2025-01-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-74': [
    { id: 106, name: 'Andres C.', rating: 5, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, habia mucho espacio para guardar nuestras cosas, algo que no esperabamos', createdAt: '2025-06-18T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-75': [
    { id: 107, name: 'Daniela V.', rating: 3, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2024-02-09T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 109, name: 'Regina D.', rating: 4, comment: 'nos quedamos una semana y no es el mas barato pero definitivamente se siente que pagas por calidad real el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 108, name: 'Camila O.', rating: 4, comment: 'El edificio se siente muy tranquilo, buenos vecinos y ambiente agradable.', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 110, name: 'Megan A.', rating: 5, comment: 'Every evening wed head up to the roof with a drink to watch the sunset. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-05-26T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 112, name: 'Sarah C.', rating: 3, comment: 'Check-in was super simple, no complications or waiting around. Highly recommend.', createdAt: '2026-04-14T00:00:00.000Z' },
    { id: 111, name: 'Carlos L.', rating: 4, comment: 'Se siente como un lugar de mayor categoria sin llegar a precios exagerados. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario. Sin duda volveriamos a reservar aqui.', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 113, name: 'Renata M.', rating: 5, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia', createdAt: '2024-11-28T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 114, name: 'Sarah C.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Had a small issue and it was fixed the same day, really responsive.', createdAt: '2025-05-01T00:00:00.000Z' },
    { id: 116, name: 'Jennifer M.', rating: 4, comment: 'We came with the whole family and having our own outdoor space made the apartment feel so much bigger. Not a budget place by any means, but for a special occasion it was completely worth it. Overall a great experience.', createdAt: '2025-02-18T00:00:00.000Z' },
    { id: 115, name: 'Camila G.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2024-09-23T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-81': [
    { id: 117, name: 'Ximena B.', rating: 4, comment: 'vinimos por trabajo y cada tarde subiamos al roof con una copa a ver el atardecer se nota que limpian a fondo entre huespedes todo estaba perfecto', createdAt: '2025-02-18T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 119, name: 'Ashley J.', rating: 4, comment: 'Very close to the metro, got around the whole city without any hassle.', createdAt: '2026-03-14T00:00:00.000Z' },
    { id: 118, name: 'Alejandro O.', rating: 3, comment: 'reservamos a ultima hora y los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2025-08-11T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 120, name: 'Daniela C.', rating: 5, comment: 'Vinimos con toda la familia y la terraza tiene una vista espectacular, pasamos varias tardes ahi. La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-12-12T00:00:00.000Z' },
    { id: 121, name: 'Javier M.', rating: 5, comment: 'Vinimos con toda la familia y no tener que preocuparnos por donde dejar el coche fue un alivio enorme. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2025-05-25T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 122, name: 'Lauren B.', rating: 4, comment: 'Every evening wed head up to the roof with a drink to watch the sunset. Very close to the metro, got around the whole city without any hassle.', createdAt: '2026-03-01T00:00:00.000Z' },
    { id: 123, name: 'Megan M.', rating: 4, comment: 'Feels like a higher-end place without the price tag being over the top. The building is really quiet, slept great despite being in a central area. Highly recommend.', createdAt: '2024-06-01T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 124, name: 'Michael K.', rating: 4, comment: 'loved the roof garden — perfect spot for sunset, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2025-04-19T00:00:00.000Z' },
  ],
  'merida-c-6-124-86': [
    { id: 125, name: 'Kevin M.', rating: 4, comment: 'Not having to worry about where to park was such a relief. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2025-10-14T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 126, name: 'Gerardo S.', rating: 5, comment: 'el aire acondicionado funcionaba perfecto, algo importante con el calor de la zona', createdAt: '2024-06-06T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 128, name: 'Valeria B.', rating: 3, comment: 'el bano estaba muy bien equipado y con buena presion de agua', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 127, name: 'Valeria C.', rating: 4, comment: 'Nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca. La vista desde el departamento es hermosa, no nos cansamos de verla.', createdAt: '2025-08-29T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 130, name: 'Rachel J.', rating: 3, comment: 'Beautiful, clean pool with a great view. The elevator worked great, never had to wait around for it.', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 129, name: 'Jessica M.', rating: 4, comment: 'We celebrated our anniversary here and really good price for what you get, wed choose it again without hesitation. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2025-09-27T00:00:00.000Z' },
    { id: 131, name: 'Kevin T.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Wifi speed was great, I worked remotely the whole stay with zero issues.', createdAt: '2025-05-06T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 133, name: 'Rodrigo O.', rating: 3, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2024-10-26T00:00:00.000Z' },
    { id: 132, name: 'Megan M.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. Really well located, close to great restaurants and easy to get around.', createdAt: '2024-06-22T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 134, name: 'Ashley M.', rating: 5, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The apartment was spotless when we arrived.', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 135, name: 'Luis Fernando O.', rating: 3, comment: 'jugamos padel una tarde en las canchas del edificio, no es el mas barato pero definitivamente se siente que pagas por calidad real', createdAt: '2025-10-29T00:00:00.000Z' },
    { id: 136, name: 'Daniela D.', rating: 4, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho más grande. Elegimos esta zona sin conocerla y resultó ser la mejor decisión del viaje.', createdAt: '2025-08-08T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 139, name: 'Brandon B.', rating: 4, comment: 'The kitchen was well stocked, we cooked several meals during our stay. Would definitely book here again.', createdAt: '2025-08-27T00:00:00.000Z' },
    { id: 138, name: 'Sebastian C.', rating: 3, comment: 'reservamos a ultima hora y cada tarde subiamos al roof con una copa a ver el atardecer y no es un lugar economico pero para una ocasion especial valio completamente la pena', createdAt: '2025-07-06T00:00:00.000Z' },
    { id: 137, name: 'Katie K.', rating: 5, comment: 'we celebrated our anniversary here and didn\'t expect the pool to be this nice, ended up spending whole afternoons there, the building feels really calm, good neighbors and a nice overall vibe', createdAt: '2025-02-11T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 140, name: 'Maria Jose M.', rating: 5, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2026-05-13T00:00:00.000Z' },
    { id: 141, name: 'Nicole B.', rating: 4, comment: 'used the gym most mornings before heading out to work, the metro was just a few minutes away, made getting around the city really easy, overall a great experience', createdAt: '2025-08-07T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 142, name: 'Andres D.', rating: 5, comment: 'fue nuestro segundo viaje aqui y el metro quedaba a unos minutos muy facil movernos por la ciudad', createdAt: '2024-04-08T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 144, name: 'Sarah J.', rating: 4, comment: 'Not having to worry about where to park was such a relief. So much natural light in the apartment, made it feel really spacious. Would definitely book here again.', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 143, name: 'Tyler A.', rating: 4, comment: 'managed to keep my workout routine going thanks to the building gym, had a small issue and it was fixed the same day, really responsive', createdAt: '2025-11-01T00:00:00.000Z' },
    { id: 145, name: 'Regina D.', rating: 3, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, excelente opcion para quien busca algo economico sin sacrificar comodidad', createdAt: '2025-07-22T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 146, name: 'Jessica A.', rating: 4, comment: 'Great value for what you get, we\'d definitely book again. The bed was super comfortable, slept great every night.', createdAt: '2024-06-30T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 147, name: 'Santiago B.', rating: 4, comment: 'la alberca del edificio estuvo increible, la usamos casi todos los dias, sentimos que pagamos exactamente lo justo por lo que obtuvimos, sin duda volveriamos a reservar aqui', createdAt: '2025-05-02T00:00:00.000Z' },
    { id: 148, name: 'Ashley R.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2025-01-16T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-103': [
    { id: 150, name: 'Sebastian M.', rating: 4, comment: 'Celebramos nuestro aniversario aqui y usamos el jacuzzi casi todas las noches. Habia mucho espacio para guardar nuestras cosas, algo que no esperabamos.', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 149, name: 'Mariana O.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer pagamos por algo premium y eso fue exactamente lo que recibimos', createdAt: '2024-10-20T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 151, name: 'Alejandro H.', rating: 5, comment: 'No tener que preocuparnos por donde dejar el coche fue un alivio enorme. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2026-02-08T00:00:00.000Z' },
    { id: 152, name: 'Samantha B.', rating: 4, comment: 'the garden area was a peaceful little spot to relax between outings, felt very safe the whole time, the building has good security', createdAt: '2025-08-18T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 153, name: 'Gerardo B.', rating: 5, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho más grande. Todo estaba muy limpio y ordenado, superó nuestras expectativas.', createdAt: '2025-09-19T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 155, name: 'Ryan J.', rating: 4, comment: 'very close to the metro, got around the whole city without any hassle', createdAt: '2025-12-02T00:00:00.000Z' },
    { id: 154, name: 'David A.', rating: 4, comment: 'We celebrated our anniversary here and having dedicated parking made things so much easier, no stress finding a spot. Good middle ground between price and comfort, checked every box we needed.', createdAt: '2024-08-20T00:00:00.000Z' },
    { id: 156, name: 'Megan L.', rating: 5, comment: 'Check-in was super simple, no complications or waiting around.', createdAt: '2024-07-31T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-107': [
    { id: 157, name: 'Christopher S.', rating: 5, comment: 'managed to keep my workout routine going thanks to the building gym, worth every peso, you can tell the quality the moment you walk in', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 158, name: 'Jessica D.', rating: 5, comment: 'booked last minute and the coworking space was perfect for getting work done during the trip, the neighborhood has such a great vibe, cafes and restaurants everywhere, highly recommend', createdAt: '2024-11-01T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-108': [
    { id: 160, name: 'Luis Fernando D.', rating: 3, comment: 'la vista desde el departamento es hermosa no nos cansamos de verla', createdAt: '2026-01-12T00:00:00.000Z' },
    { id: 159, name: 'Diego C.', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.', createdAt: '2025-03-30T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 161, name: 'Emily A.', rating: 5, comment: 'great value for what you get, wed definitely book again, the metro was just a few minutes away, made getting around the city really easy', createdAt: '2025-08-28T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 162, name: 'Camila L.', rating: 5, comment: 'Vinimos con toda la familia y la playa quedaba a unos minutos caminando, exactamente lo que buscabamos. Tuvimos un pequeno problema y lo resolvieron el mismo dia.', createdAt: '2024-12-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-111': [
    { id: 163, name: 'Paulina D.', rating: 3, comment: 'Alberca hermosa, limpia y con muy buena vista. El edificio es muy silencioso, dormimos increible a pesar de estar en zona centrica.', createdAt: '2026-03-14T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 164, name: 'Javier C.', rating: 5, comment: 'No pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia. El bano estaba muy bien equipado y con buena presion de agua. Totalmente recomendado.', createdAt: '2025-12-30T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-114': [
    { id: 167, name: 'Gerardo G.', rating: 4, comment: 'Aproveche el gym casi todas las mananas antes de salir a trabajar. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2024-09-09T00:00:00.000Z' },
    { id: 165, name: 'David C.', rating: 5, comment: 'we celebrated our anniversary here and didn\'t expect the pool to be this nice, ended up spending whole afternoons there, not the cheapest option but you can genuinely tell you\'re paying for real quality', createdAt: '2024-09-05T00:00:00.000Z' },
    { id: 166, name: 'Andres H.', rating: 3, comment: 'Una noche usamos la sala de cine del edificio. El aire acondicionado funcionaba perfecto, algo importante con el calor de la zona.', createdAt: '2024-03-11T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 169, name: 'Fernanda B.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer. Habia mucho espacio para guardar nuestras cosas, algo que no esperabamos.', createdAt: '2025-02-04T00:00:00.000Z' },
    { id: 168, name: 'Sofia A.', rating: 5, comment: 'El jardin del edificio es muy tranquilo, un buen lugar para desconectar. Pagamos por algo premium y eso fue exactamente lo que recibimos.', createdAt: '2024-06-25T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-116': [
    { id: 170, name: 'Amanda J.', rating: 5, comment: 'everything was clean and tidy, exceeded our expectations honestly, overall a great experience', createdAt: '2024-08-29T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 172, name: 'Ashley B.', rating: 5, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. The elevator worked great, never had to wait around for it.', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 171, name: 'Ryan L.', rating: 5, comment: 'traveling with a pet always feels risky but we had zero issues here check-in was super easy thanks to the clear instructions they sent ahead of time', createdAt: '2024-04-28T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 173, name: 'Javier H.', rating: 4, comment: 'Vale cada peso, la calidad se nota desde que entras. El check-in fue súper fácil gracias a las instrucciones claras que nos mandaron.', createdAt: '2023-12-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 175, name: 'Carlos H.', rating: 5, comment: 'estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas, vale cada peso, la calidad se nota desde que entras', createdAt: '2025-01-19T00:00:00.000Z' },
    { id: 174, name: 'Santiago D.', rating: 3, comment: 'Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario. Totalmente recomendado.', createdAt: '2024-05-20T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 176, name: 'Rachel K.', rating: 5, comment: 'Came here for work and loved having our own balcony, we had coffee out there every morning. Paid for something premium and that\'s exactly what we got.', createdAt: '2026-03-31T00:00:00.000Z' },
    { id: 177, name: 'Diego B.', rating: 3, comment: 'Nos quedamos una semana y jugamos padel una tarde en las canchas del edificio. Tuvimos un pequeno problema y lo resolvieron el mismo dia.', createdAt: '2025-05-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-121': [
    { id: 178, name: 'Sofia T.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-09-04T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 179, name: 'Regina T.', rating: 3, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio del edificio. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-01-02T00:00:00.000Z' },
    { id: 180, name: 'Katie M.', rating: 4, comment: 'the pool was amazing we used it almost every day during our stay and the bed was super comfortable slept great every night', createdAt: '2024-01-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-123': [
    { id: 181, name: 'Jessica C.', rating: 5, comment: 'Check-in was super simple, no complications or waiting around. Overall a great experience.', createdAt: '2026-02-05T00:00:00.000Z' },
    { id: 182, name: 'Megan J.', rating: 3, comment: 'Check-in was super easy thanks to the clear instructions they sent ahead of time.', createdAt: '2024-06-30T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 183, name: 'Justin K.', rating: 3, comment: 'Worth every peso, you can tell the quality the moment you walk in. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 184, name: 'Christopher W.', rating: 4, comment: 'We stayed a week and being steps from the beach made the whole trip — we walked over every morning. The view from the apartment is beautiful, never got tired of it.', createdAt: '2025-02-04T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 185, name: 'David K.', rating: 4, comment: 'Loved having our own balcony, we had coffee out there every morning. Great value for what you get, wed definitely book again. Overall a great experience.', createdAt: '2025-12-01T00:00:00.000Z' },
    { id: 186, name: 'Luis Fernando S.', rating: 5, comment: 'fue nuestro segundo viaje aqui y los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento, en general una experiencia excelente', createdAt: '2024-06-15T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 189, name: 'Daniela B.', rating: 4, comment: 'Aproveche el gym casi todas las mananas antes de salir a trabajar. El bano estaba muy bien equipado y con buena presion de agua.', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 188, name: 'Katie K.', rating: 5, comment: 'loved the roof garden — perfect spot for sunset, really well located, close to great restaurants and easy to get around', createdAt: '2025-03-21T00:00:00.000Z' },
    { id: 187, name: 'Fernanda V.', rating: 3, comment: 'el edificio se siente muy tranquilo, buenos vecinos y ambiente agradable, sin duda volveriamos a reservar aqui', createdAt: '2025-02-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-128': [
    { id: 190, name: 'Andrew A.', rating: 5, comment: 'Booked last minute and we treated ourselves to the spa one afternoon. The building is really quiet, slept great despite being in a central area. Highly recommend.', createdAt: '2025-05-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 191, name: 'Katie W.', rating: 5, comment: 'Feels like a higher-end place without the price tag being over the top. The location was excellent, everything was within walking distance.', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 192, name: 'Sebastian L.', rating: 5, comment: 'la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2024-01-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 195, name: 'Maria Jose D.', rating: 5, comment: 'vinimos con toda la familia y nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca, habia mucho espacio para guardar nuestras cosas, algo que no esperabamos', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 194, name: 'Lauren S.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. The building feels really calm, good neighbors and a nice overall vibe.', createdAt: '2025-06-05T00:00:00.000Z' },
    { id: 193, name: 'Ana Sofia O.', rating: 3, comment: 'una noche usamos la sala de cine del edificio, vale cada peso, la calidad se nota desde que entras, en general una experiencia excelente', createdAt: '2024-12-17T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 197, name: 'Santiago O.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. La zona es muy segura y tranquila, se siente muy bien caminar de noche. En general una experiencia excelente.', createdAt: '2025-11-02T00:00:00.000Z' },
    { id: 196, name: 'Brandon L.', rating: 4, comment: 'Traveling with a pet always feels risky but we had zero issues here. Feels like a higher-end place without the price tag being over the top.', createdAt: '2025-08-08T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 198, name: 'Rodrigo T.', rating: 3, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día. Nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia. Sin duda volveríamos a reservar aquí.', createdAt: '2026-04-11T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 199, name: 'Nicole C.', rating: 5, comment: 'the metro was just a few minutes away made getting around the city really easy', createdAt: '2025-01-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-134': [
    { id: 200, name: 'Renata S.', rating: 4, comment: 'celebramos nuestro aniversario aqui y el elevador funcionaba perfecto nunca tuvimos que esperar mucho y totalmente recomendado', createdAt: '2024-10-23T00:00:00.000Z' },
    { id: 201, name: 'Jonathan R.', rating: 4, comment: 'Managed to keep my workout routine going thanks to the building gym. Felt like we paid exactly the right amount for what we got.', createdAt: '2024-06-19T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-136': [
    { id: 202, name: 'Ximena V.', rating: 5, comment: 'Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 203, name: 'Ana Sofia T.', rating: 4, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2024-11-09T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 204, name: 'Alejandro A.', rating: 3, comment: 'Tuvimos un pequeño problema y lo resolvieron el mismo día.', createdAt: '2024-03-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 207, name: 'Amanda C.', rating: 3, comment: 'Booked last minute and our kids didn\'t want to leave the pool, they had the best time there every day. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2026-05-13T00:00:00.000Z' },
    { id: 206, name: 'Jessica S.', rating: 5, comment: 'Didn\'t think the balcony would matter this much until we used it every single day. So much natural light in the apartment, made it feel really spacious.', createdAt: '2025-09-27T00:00:00.000Z' },
    { id: 205, name: 'Rodrigo T.', rating: 4, comment: 'vinimos con toda la familia y excelente opcion para quien busca algo economico sin sacrificar comodidad y el metro quedaba a unos minutos muy facil movernos por la ciudad', createdAt: '2024-12-07T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 208, name: 'Renata A.', rating: 5, comment: 'nos quedamos una semana y nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 210, name: 'Ricardo O.', rating: 5, comment: 'aproveche el gym casi todas las mananas antes de salir a trabajar y el check-in fue super sencillo sin complicaciones ni esperas', createdAt: '2025-03-12T00:00:00.000Z' },
    { id: 209, name: 'Justin J.', rating: 4, comment: 'really good price for what you get, wed choose it again without hesitation, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-04-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-141': [
    { id: 212, name: 'Kevin H.', rating: 3, comment: 'We stayed a week and the AC worked perfectly, which mattered a lot given how hot it gets there.', createdAt: '2026-01-26T00:00:00.000Z' },
    { id: 211, name: 'Kevin R.', rating: 5, comment: 'we treated ourselves to the spa one afternoon the bed was super comfortable slept great every night', createdAt: '2025-08-13T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 214, name: 'Lauren J.', rating: 5, comment: 'cooked almost the whole week, the kitchen had literally everything we needed', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 213, name: 'Daniela S.', rating: 4, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, muy cerca del metro, nos movimos por toda la ciudad sin complicaciones', createdAt: '2024-02-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-145': [
    { id: 215, name: 'Ana Sofia O.', rating: 3, comment: 'aprovechamos el spa del edificio un dia, cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2024-07-30T00:00:00.000Z' },
    { id: 216, name: 'Jonathan S.', rating: 5, comment: 'we stayed a week and swimming before starting the day became part of the routine thanks to the pool, the view from the apartment is beautiful, never got tired of it', createdAt: '2023-12-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 218, name: 'Sofia H.', rating: 3, comment: 'Reservamos a última hora y el jardín del edificio es muy tranquilo, un buen lugar para desconectar. El edificio es muy silencioso, dormimos increíble a pesar de estar en zona céntrica.', createdAt: '2026-05-30T00:00:00.000Z' },
    { id: 217, name: 'Ximena O.', rating: 3, comment: 'El aire acondicionado funcionaba perfecto, algo importante con el calor de la zona.', createdAt: '2024-06-29T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 219, name: 'Lauren D.', rating: 3, comment: 'plenty of storage space for our stuff wasn\'t expecting that', createdAt: '2025-10-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 220, name: 'Kevin W.', rating: 4, comment: 'didn\'t think the balcony would matter this much until we used it every single day, paid for something premium and that\'s exactly what we got, overall a great experience', createdAt: '2025-11-27T00:00:00.000Z' },
    { id: 221, name: 'Andres L.', rating: 5, comment: 'fue nuestro segundo viaje aqui y viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-11-17T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 223, name: 'Alejandro G.', rating: 3, comment: 'Alberca hermosa, limpia y con muy buena vista. Tuvimos un pequeño problema y lo resolvieron el mismo día.', createdAt: '2025-01-05T00:00:00.000Z' },
    { id: 222, name: 'Camila T.', rating: 4, comment: 'nos quedamos una semana y el balcon fue una sorpresa muy agradable desayunabamos ahi todos los dias y el edificio se siente muy tranquilo buenos vecinos y ambiente agradable', createdAt: '2024-02-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 226, name: 'Luis Fernando S.', rating: 3, comment: 'el area de juegos del edificio estuvo bien para las noches tranquilas, el elevador funcionaba perfecto, nunca tuvimos que esperar mucho, sin duda volveriamos a reservar aqui', createdAt: '2025-08-21T00:00:00.000Z' },
    { id: 225, name: 'Sarah H.', rating: 4, comment: 'Feels like a higher-end place without the price tag being over the top. The bathroom was well equipped with really good water pressure. Highly recommend.', createdAt: '2025-03-01T00:00:00.000Z' },
    { id: 224, name: 'Santiago T.', rating: 5, comment: 'La ubicacion es excelente, todo quedaba cerca caminando. Sin duda volveriamos a reservar aqui.', createdAt: '2024-09-30T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-151': [
    { id: 227, name: 'Ashley D.', rating: 3, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Feels like a higher-end place without the price tag being over the top. Would definitely book here again.', createdAt: '2025-06-30T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 229, name: 'Jessica R.', rating: 5, comment: 'didn\'t think the balcony would matter this much until we used it every single day wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2026-04-01T00:00:00.000Z' },
    { id: 228, name: 'Gerardo L.', rating: 4, comment: 'vinimos por trabajo y los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias, muy bien ubicado, cerca de restaurantes y con facil acceso a todo, sin duda volveriamos a reservar aqui', createdAt: '2026-01-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 231, name: 'Luis Fernando R.', rating: 5, comment: 'pagamos por algo premium y eso fue exactamente lo que recibimos muy cerca del metro nos movimos por toda la ciudad sin complicaciones', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 230, name: 'Sebastian B.', rating: 4, comment: 'Vinimos con toda la familia y la zona es muy segura y tranquila, se siente muy bien caminar de noche. En general una experiencia excelente.', createdAt: '2025-02-06T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-155': [
    { id: 232, name: 'Sebastian R.', rating: 4, comment: 'No tener que preocuparnos por donde dejar el coche fue un alivio enorme. El metro quedaba a unos minutos, muy facil movernos por la ciudad.', createdAt: '2025-08-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 234, name: 'Maria Jose L.', rating: 3, comment: 'reservamos a ultima hora y cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 235, name: 'Emily Y.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Felt very safe the whole time, the building has good security.', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 233, name: 'Diego A.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y la alberca del edificio estuvo increible, la usamos casi todos los dias. La relacion precio-calidad es muy buena, definitivamente volveriamos.', createdAt: '2025-04-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 236, name: 'Ricardo B.', rating: 3, comment: 'El departamento estaba impecable cuando llegamos.', createdAt: '2024-11-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 237, name: 'Andres A.', rating: 5, comment: 'alberca hermosa, limpia y con muy buena vista, se siente como un lugar de mayor categoria sin llegar a precios exagerados', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 238, name: 'Gerardo B.', rating: 3, comment: 'el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias, se nota que limpian a fondo entre huespedes, todo estaba perfecto, totalmente recomendado', createdAt: '2024-12-21T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 239, name: 'Justin M.', rating: 3, comment: 'feels like a higher-end place without the price tag being over the top, the bed was super comfortable, slept great every night', createdAt: '2024-02-16T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 241, name: 'Jennifer K.', rating: 4, comment: 'came here for work and so much natural light in the apartment, made it feel really spacious, highly recommend', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 240, name: 'Kevin A.', rating: 3, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Check-in was super easy thanks to the clear instructions they sent ahead of time.', createdAt: '2023-10-18T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 244, name: 'David M.', rating: 3, comment: 'We used the building\'s private cinema room one night. Cooked almost the whole week, the kitchen had literally everything we needed. Overall a great experience.', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 243, name: 'Brian B.', rating: 4, comment: 'Didn\'t expect the pool to be this nice, ended up spending whole afternoons there. The neighborhood has such a great vibe, cafes and restaurants everywhere. Overall a great experience.', createdAt: '2025-03-12T00:00:00.000Z' },
    { id: 242, name: 'Ximena A.', rating: 5, comment: 'Vinimos con toda la familia y el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. Vale cada peso, la calidad se nota desde que entras.', createdAt: '2024-11-22T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 245, name: 'Andrew M.', rating: 5, comment: 'Booked last minute and not having to worry about where to park was such a relief. The location was excellent, everything was within walking distance.', createdAt: '2024-11-23T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 246, name: 'Ana Sofia A.', rating: 3, comment: 'Los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias. La colonia tiene un ambiente increible, cafes y restaurantes por todos lados.', createdAt: '2025-08-14T00:00:00.000Z' },
  ],
  'tulum-carretera-federal-167': [
    { id: 248, name: 'Renata A.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aquí no tuvimos ni un problema. La vista desde el departamento es hermosa, no nos cansamos de verla. Sin duda volveríamos a reservar aquí.', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 247, name: 'Brian L.', rating: 5, comment: 'didn\'t think the balcony would matter this much until we used it every single day, feels like a higher-end place without the price tag being over the top', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 249, name: 'Michael T.', rating: 4, comment: 'the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2025-09-13T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-168': [
    { id: 250, name: 'Ana Sofia R.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias. Para lo que pagamos, la calidad fue mucho mejor de lo esperado. Sin duda volveriamos a reservar aqui.', createdAt: '2025-09-29T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 251, name: 'Sofia V.', rating: 4, comment: 'muy cerca del metro, nos movimos por toda la ciudad sin complicaciones', createdAt: '2025-05-26T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 252, name: 'Mariana L.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. El check-in fue super sencillo, sin complicaciones ni esperas. En general una experiencia excelente.', createdAt: '2024-02-10T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 254, name: 'Amanda A.', rating: 5, comment: 'The gym in the building was well equipped, kept up with my workouts the whole trip. The AC worked perfectly, which mattered a lot given how hot it gets there.', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 253, name: 'Ricardo C.', rating: 5, comment: 'Celebramos nuestro aniversario aquí y nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia. Sin duda volveríamos a reservar aquí.', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 255, name: 'Justin H.', rating: 5, comment: 'having our own outdoor space made the apartment feel so much bigger, the bathroom was well equipped with really good water pressure', createdAt: '2025-08-04T00:00:00.000Z' },
  ],
  'tulum-c-balam-dzakab-173': [
    { id: 257, name: 'Javier A.', rating: 4, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, el elevador funcionaba perfecto, nunca tuvimos que esperar mucho', createdAt: '2025-10-14T00:00:00.000Z' },
    { id: 258, name: 'Andrew L.', rating: 4, comment: 'The rooftop terrace has an incredible view, we spent several evenings up there. Great option if you\'re looking for something affordable without sacrificing comfort. Overall a great experience.', createdAt: '2025-06-18T00:00:00.000Z' },
    { id: 256, name: 'Renata S.', rating: 4, comment: 'Celebramos nuestro aniversario aquí y nadar antes de empezar el día se volvió parte de la rutina gracias a la alberca. La ubicación es excelente, todo quedaba cerca caminando. Sin duda volveríamos a reservar aquí.', createdAt: '2024-09-05T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 259, name: 'Brandon M.', rating: 4, comment: 'didn\'t think the balcony would matter this much until we used it every single day, had a small issue and it was fixed the same day, really responsive, overall a great experience', createdAt: '2024-02-05T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 260, name: 'Brandon D.', rating: 4, comment: 'This was our second time booking here and every evening wed head up to the roof with a drink to watch the sunset. The building is really quiet, slept great despite being in a central area.', createdAt: '2025-10-03T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 261, name: 'Andres O.', rating: 5, comment: 'El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días. El edificio se siente muy tranquilo, buenos vecinos y ambiente agradable.', createdAt: '2026-05-15T00:00:00.000Z' },
    { id: 262, name: 'Sofia M.', rating: 5, comment: 'vinimos con toda la familia y elegimos esta zona sin conocerla y resulto ser la mejor decision del viaje', createdAt: '2024-11-18T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 263, name: 'Diego A.', rating: 3, comment: 'el departamento estaba impecable cuando llegamos', createdAt: '2025-04-10T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 265, name: 'Matthew J.', rating: 3, comment: 'Loved having our own balcony, we had coffee out there every morning. Great option if you\'re looking for something affordable without sacrificing comfort. Overall a great experience.', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 264, name: 'Kevin B.', rating: 4, comment: 'You could tell they clean thoroughly between guests, everything was perfect. Overall a great experience.', createdAt: '2024-08-07T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 266, name: 'Rodrigo H.', rating: 4, comment: 'aprovechamos el spa del edificio un dia, vale cada peso, la calidad se nota desde que entras, en general una experiencia excelente', createdAt: '2025-03-26T00:00:00.000Z' },
  ],
};