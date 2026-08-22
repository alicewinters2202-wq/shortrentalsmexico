// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Precio/valor ajustado al precio real de cada propiedad. Cada oracion individual
// tiene un tope duro de 4 usos en todo el sitio (no solo por propiedad).

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1983332155': [
    { id: 1, name: 'Paulina B.', rating: 5, comment: 'Fue nuestro segundo viaje aqui y el roof garden es hermoso al atardecer. Se siente como un lugar de mayor categoria sin llegar a precios exagerados.', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 2, name: 'Ximena A.', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. El check-in fue super sencillo, sin complicaciones ni esperas.', createdAt: '2024-09-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-1983332156': [
    { id: 4, name: 'Christopher M.', rating: 4, comment: 'not the cheapest option but you can genuinely tell you\'re paying for real quality, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-11-24T00:00:00.000Z' },
    { id: 3, name: 'Lauren A.', rating: 4, comment: 'wifi speed was great i worked remotely the whole stay with zero issues', createdAt: '2025-04-12T00:00:00.000Z' },
    { id: 5, name: 'Andrew T.', rating: 3, comment: 'Used the gym most mornings before heading out to work. Very close to the metro, got around the whole city without any hassle.', createdAt: '2024-11-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-1983332157': [
    { id: 6, name: 'Jonathan K.', rating: 4, comment: 'Came here for work and the kitchen was well stocked, we cooked several meals during our stay. Highly recommend.', createdAt: '2025-10-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-1983332158': [
    { id: 7, name: 'Diego L.', rating: 4, comment: 'Cada tarde subíamos al roof con una copa a ver el atardecer. La relación precio-calidad es muy buena, definitivamente volveríamos. Totalmente recomendado.', createdAt: '2026-05-03T00:00:00.000Z' },
    { id: 8, name: 'Ana Sofia C.', rating: 5, comment: 'Vinimos por trabajo y el lugar era muy silencioso, dormimos increible a pesar de estar en zona centrica.', createdAt: '2024-03-14T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-1983332159': [
    { id: 9, name: 'Emily Y.', rating: 4, comment: 'Every evening we\'d head up to the roof with a drink to watch the sunset. The AC worked perfectly, which mattered a lot given how hot it gets there.', createdAt: '2026-06-13T00:00:00.000Z' },
    { id: 11, name: 'Fernanda D.', rating: 4, comment: 'Vinimos por trabajo y el espacio de coworking me sirvio mucho, trabaje varias mananas ahi. El bano estaba muy bien equipado y con buena presion de agua.', createdAt: '2025-06-27T00:00:00.000Z' },
    { id: 10, name: 'Jennifer J.', rating: 4, comment: 'The view from the apartment is beautiful, never got tired of it.', createdAt: '2024-03-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-1983332160': [
    { id: 12, name: 'Brandon W.', rating: 4, comment: 'Every evening wed head up to the roof with a drink to watch the sunset. The bed was super comfortable, slept great every night.', createdAt: '2026-05-04T00:00:00.000Z' },
    { id: 13, name: 'Sebastian O.', rating: 4, comment: 'no es el mas barato pero definitivamente se siente que pagas por calidad real se sentia muy tranquilo buenos vecinos y ambiente agradable', createdAt: '2026-03-25T00:00:00.000Z' },
    { id: 14, name: 'Mariana H.', rating: 5, comment: 'Tuvimos un pequeno problema y lo resolvieron el mismo dia.', createdAt: '2025-02-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-vazquez-de-mella-428-1983332161': [
    { id: 15, name: 'Sofia V.', rating: 4, comment: 'Reservamos a ultima hora y viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema.', createdAt: '2025-10-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-1983332162': [
    { id: 16, name: 'Rodrigo T.', rating: 5, comment: 'Fue nuestro segundo viaje aquí y la terraza tiene una vista espectacular, pasamos varias tardes ahí. Tener dónde sentarnos afuera hizo una gran diferencia en el día a día.', createdAt: '2025-10-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-1353754679': [
    { id: 18, name: 'Carlos V.', rating: 5, comment: 'pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso', createdAt: '2025-10-26T00:00:00.000Z' },
    { id: 19, name: 'Sofia M.', rating: 3, comment: 'Para lo que pagamos, la calidad fue mucho mejor de lo esperado. Nunca nos sentimos inseguros caminando de regreso tarde, buena zona.', createdAt: '2025-08-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-1353754681': [
    { id: 20, name: 'Tyler A.', rating: 5, comment: 'Good middle ground between price and comfort, checked every box we needed. Overall a great experience.', createdAt: '2025-03-21T00:00:00.000Z' },
    { id: 264, name: 'Camila V.', rating: 5, comment: 'Tener balcon propio hizo toda la diferencia, desayunabamos ahi casi todos los dias.', createdAt: '2026-02-14T00:00:00.000Z' },
    { id: 265, name: 'Andrew K.', rating: 5, comment: 'Traveled with our dog and had zero issues here, they clearly welcome pets and it showed. Highly recommend.', createdAt: '2025-10-02T00:00:00.000Z' },
    { id: 272, name: 'Regina P.', rating: 5, comment: 'No tener que preocuparnos por donde estacionar el coche fue un alivio enorme todo el viaje.', createdAt: '2025-07-19T00:00:00.000Z' },
    { id: 273, name: 'Kevin H.', rating: 5, comment: 'The apartment was spotless when we arrived, clearly well maintained the whole stay.', createdAt: '2026-01-08T00:00:00.000Z' },
    { id: 274, name: 'Sofia D.', rating: 5, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche por ahi.', createdAt: '2025-11-27T00:00:00.000Z' },
    { id: 275, name: 'Brandon M.', rating: 5, comment: 'Any question we had was answered in minutes over WhatsApp, really responsive the whole time.', createdAt: '2025-04-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-1353754682': [
    { id: 21, name: 'Diego B.', rating: 4, comment: 'la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento, sin duda volveriamos a reservar aqui', createdAt: '2024-01-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-campos-eliseos-199-1353754683': [
    { id: 23, name: 'Tyler L.', rating: 3, comment: 'Even had basic spices in the kitchen, wasn\'t expecting that.', createdAt: '2026-06-11T00:00:00.000Z' },
    { id: 22, name: 'Maria Jose L.', rating: 5, comment: 'fue nuestro segundo viaje aqui y la terraza tiene una vista espectacular, pasamos varias tardes ahi, buen punto medio entre precio y comodidad, cumplio con todo lo que buscabamos, en general una experiencia excelente', createdAt: '2025-03-22T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-1353754684': [
    { id: 24, name: 'Brian S.', rating: 5, comment: 'We celebrated our anniversary here and for what we paid, the quality was way better than expected. You could tell they clean thoroughly between guests, everything was perfect.', createdAt: '2026-04-25T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-racine-137-1353754685': [
    { id: 25, name: 'David T.', rating: 4, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2025-08-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-1353754686': [
    { id: 26, name: 'Brandon L.', rating: 4, comment: 'Felt like we paid exactly the right amount for what we got. We brought our dog along and never felt like an afterthought.', createdAt: '2025-06-13T00:00:00.000Z' },
    { id: 27, name: 'Diego S.', rating: 3, comment: 'el check-in fue super facil gracias a las instrucciones claras que nos mandaron', createdAt: '2025-01-21T00:00:00.000Z' },
    { id: 28, name: 'Jonathan Y.', rating: 5, comment: 'we stayed a week and the balcony ended up being one of our favorite parts of the apartment, overall a great experience', createdAt: '2024-02-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-1353754710': [
    { id: 266, name: 'Paulina R.', rating: 5, comment: 'El roof garden se convirtio en nuestro lugar favorito, subiamos casi todas las tardes a ver el atardecer con una copa.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 267, name: 'Justin M.', rating: 5, comment: 'Came here for work and the balcony ended up being one of our favorite parts of the apartment. Overall a great experience.', createdAt: '2026-01-18T00:00:00.000Z' },
    { id: 268, name: 'Ximena T.', rating: 5, comment: 'Viajamos con nuestra perra y nunca sentimos que fuera un favor que nos hacían, se nota que están acostumbrados.', createdAt: '2025-06-30T00:00:00.000Z' },
    { id: 277, name: 'Valeria G.', rating: 5, comment: 'Buen punto medio entre precio y comodidad, cumplio con todo lo que buscabamos en el viaje.', createdAt: '2026-03-14T00:00:00.000Z' },
    { id: 278, name: 'Samantha W.', rating: 5, comment: 'Picked this neighborhood without knowing it and it turned out to be the best call of the trip.', createdAt: '2025-02-25T00:00:00.000Z' },
    { id: 279, name: 'Gerardo L.', rating: 5, comment: 'Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo que necesitabamos.', createdAt: '2025-08-06T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-1353754711': [
    { id: 30, name: 'Jennifer T.', rating: 4, comment: 'worth every peso, you can tell the quality the moment you walk in', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 31, name: 'Emily S.', rating: 3, comment: 'Any question we had was answered in minutes over WhatsApp.', createdAt: '2024-12-31T00:00:00.000Z' },
    { id: 32, name: 'Ana Sofia A.', rating: 3, comment: 'Tener donde sentarnos afuera hizo una gran diferencia en el dia a dia.', createdAt: '2024-04-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-1353754712': [
    { id: 35, name: 'Fernanda S.', rating: 4, comment: 'hasta tenia especias basicas en la cocina detalle que no esperabamos', createdAt: '2025-11-17T00:00:00.000Z' },
    { id: 33, name: 'Regina S.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, se siente como un lugar de mayor categoria sin llegar a precios exagerados, totalmente recomendado', createdAt: '2025-03-03T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-1353754713': [
    { id: 38, name: 'Matthew W.', rating: 5, comment: 'came here for work and every evening wed head up to the roof with a drink to watch the sunset, feels like a higher-end place without the price tag being over the top', createdAt: '2026-03-29T00:00:00.000Z' },
    { id: 37, name: 'Santiago G.', rating: 3, comment: 'el gimnasio estaba muy completo no tuve que cancelar mi rutina de ejercicio y el wifi era muy rapido pude trabajar sin ningun problema de conexion', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 36, name: 'Emiliano H.', rating: 4, comment: 'La zona es muy segura y tranquila, se siente muy bien caminar de noche. En general una experiencia excelente.', createdAt: '2025-05-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-1353754714': [
    { id: 39, name: 'Brandon T.', rating: 5, comment: 'plenty of storage space for our stuff, wasn\'t expecting that', createdAt: '2025-11-09T00:00:00.000Z' },
    { id: 40, name: 'Diego B.', rating: 4, comment: 'No tener que preocuparnos por donde dejar el coche fue un alivio enorme.', createdAt: '2025-08-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-1353754715': [
    { id: 41, name: 'Ryan A.', rating: 5, comment: 'booked last minute and we used the jacuzzi almost every night, felt like we paid exactly the right amount for what we got', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 42, name: 'Ximena O.', rating: 5, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 43, name: 'Camila C.', rating: 5, comment: 'El roof garden es hermoso al atardecer. El departamento tiene mucha luz natural, se siente muy amplio y comodo.', createdAt: '2025-01-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-1353754717': [
    { id: 44, name: 'Ana Sofia O.', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, nuestro perro se sintio tan comodo aqui como en casa, sin duda volveriamos a reservar aqui', createdAt: '2025-04-03T00:00:00.000Z' },
    { id: 45, name: 'Santiago L.', rating: 5, comment: 'nunca nos sentimos inseguros caminando de regreso tarde buena zona', createdAt: '2024-05-18T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-1353754740': [
    { id: 46, name: 'Amanda L.', rating: 4, comment: 'We came with the whole family and even had basic spices in the kitchen, wasn\'t expecting that.', createdAt: '2025-11-29T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-1353754741': [
    { id: 48, name: 'Samantha S.', rating: 5, comment: 'Barely used Uber the whole trip, everything was walkable.', createdAt: '2025-05-19T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-1353754742': [
    { id: 49, name: 'Andres C.', rating: 4, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahí. Pasábamos las tardes en el balcón, muy buen espacio para relajarnos. En general una experiencia excelente.', createdAt: '2025-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-queretaro-123-1353754745': [
    { id: 50, name: 'Sebastian C.', rating: 5, comment: 'el roof garden es hermoso al atardecer para lo que pagamos la calidad fue mucho mejor de lo esperado', createdAt: '2023-12-19T00:00:00.000Z' },
  ],
  'cancun-avenida-bonampak-mza-27-579982434': [
    { id: 52, name: 'Rodrigo C.', rating: 4, comment: 'Vinimos con toda la familia y sentimos que pagamos exactamente lo justo por lo que obtuvimos. La vista desde el departamento es hermosa, no nos cansamos de verla.', createdAt: '2025-07-02T00:00:00.000Z' },
    { id: 53, name: 'Mariana T.', rating: 5, comment: 'Celebramos nuestro aniversario aqui y nos movimos por toda la zona sin complicaciones.', createdAt: '2025-05-03T00:00:00.000Z' },
    { id: 51, name: 'Michael H.', rating: 3, comment: 'managed to keep my workout routine going thanks to the gym, the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2024-08-19T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-579982433': [
    { id: 54, name: 'Renata A.', rating: 3, comment: 'no usamos Uber casi nada, todo estaba a distancia caminable', createdAt: '2024-06-02T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-579982432': [
    { id: 55, name: 'Brian R.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-06-01T00:00:00.000Z' },
    { id: 56, name: 'Samantha K.', rating: 4, comment: 'traveled with our pet and had zero issues, really appreciated that', createdAt: '2025-10-25T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-579982431': [
    { id: 57, name: 'Christopher J.', rating: 4, comment: 'you can tell this place is worth every peso the second you walk through the door', createdAt: '2025-09-27T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-579982430': [
    { id: 58, name: 'Jessica C.', rating: 3, comment: 'Having somewhere to sit outside made a real difference day to day.', createdAt: '2025-09-16T00:00:00.000Z' },
  ],
  'cancun-calle-puerto-marques-579982429': [
    { id: 60, name: 'Regina T.', rating: 5, comment: 'No es un lugar económico pero para una ocasión especial valió completamente la pena. El café de la mañana sabe distinto cuando lo tomas en un balcón con esa vista. Totalmente recomendado.', createdAt: '2026-05-01T00:00:00.000Z' },
    { id: 59, name: 'Ximena D.', rating: 4, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. El check-in fue super sencillo, sin complicaciones ni esperas. Sin duda volveriamos a reservar aqui.', createdAt: '2024-05-11T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-579982428': [
    { id: 63, name: 'Nicole W.', rating: 5, comment: 'the location was excellent, everything was within walking distance, overall a great experience', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 62, name: 'Daniela T.', rating: 3, comment: 'Vinimos con toda la familia y aprovechamos el spa un dia. Tuvimos un pequeno problema y lo resolvieron el mismo dia.', createdAt: '2025-02-27T00:00:00.000Z' },
    { id: 61, name: 'Regina D.', rating: 5, comment: 'el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, es una propiedad de lujo y honestamente se nota en cada detalle', createdAt: '2024-10-15T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-579982427': [
    { id: 65, name: 'Samantha M.', rating: 5, comment: 'Managed to keep my workout routine going thanks to the gym. The location was excellent, everything was within walking distance.', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 64, name: 'Tyler W.', rating: 5, comment: 'the place was really quiet slept great despite being in a central area', createdAt: '2025-06-29T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-799586252': [
    { id: 67, name: 'Luis Fernando V.', rating: 3, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio. El aire acondicionado funcionaba perfecto, algo importante con el calor de la zona. Sin duda volveriamos a reservar aqui.', createdAt: '2025-09-01T00:00:00.000Z' },
    { id: 66, name: 'Maria Jose R.', rating: 3, comment: 'Jugamos padel una tarde en las canchas. Pasábamos las tardes en el balcón, muy buen espacio para relajarnos.', createdAt: '2024-12-28T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-799586251': [
    { id: 68, name: 'Andrew D.', rating: 3, comment: 'Booked last minute and we treated ourselves to the spa one afternoon. Feels like a higher-end place without the price tag being over the top. Overall a great experience.', createdAt: '2025-02-02T00:00:00.000Z' },
    { id: 69, name: 'Jennifer S.', rating: 5, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. Would happily stay here again.', createdAt: '2023-10-05T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-799586249': [
    { id: 72, name: 'Michael W.', rating: 5, comment: 'It felt really calm, good neighbors and a nice overall vibe. Overall a great experience.', createdAt: '2024-09-12T00:00:00.000Z' },
    { id: 70, name: 'Sofia C.', rating: 3, comment: 'Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2024-05-29T00:00:00.000Z' },
    { id: 71, name: 'Paulina B.', rating: 5, comment: 'La ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2024-03-08T00:00:00.000Z' },
  ],
  'chapala-km960-160064060': [
    { id: 74, name: 'Santiago C.', rating: 3, comment: 'Había mucho espacio para guardar nuestras cosas, algo que no esperábamos.', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 73, name: 'Nicole W.', rating: 5, comment: 'Not a speck of dust anywhere, you can tell they care about the details.', createdAt: '2025-08-28T00:00:00.000Z' },
  ],
  'chapala-de-la-hacienda-5-160064061': [
    { id: 77, name: 'Michael J.', rating: 5, comment: 'This was our second time booking here and the neighborhood has such a great vibe, cafes and restaurants everywhere.', createdAt: '2026-01-07T00:00:00.000Z' },
    { id: 75, name: 'Rodrigo B.', rating: 5, comment: 'el bano estaba muy bien equipado y con buena presion de agua, en general una experiencia excelente', createdAt: '2025-08-20T00:00:00.000Z' },
    { id: 76, name: 'Brian H.', rating: 5, comment: 'Great option if you\'re looking for something affordable without sacrificing comfort. Traveling with a pet always feels risky but we had zero issues here.', createdAt: '2025-03-18T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-160064062': [
    { id: 78, name: 'Renata T.', rating: 3, comment: 'muy buen precio para lo que ofrece, definitivamente lo volveriamos a elegir', createdAt: '2025-09-07T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-160064063': [
    { id: 80, name: 'Samantha T.', rating: 5, comment: 'The bed was super comfortable, slept great every night.', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 79, name: 'Sarah M.', rating: 5, comment: 'Felt very safe walking around the neighborhood even at night. Would definitely book here again.', createdAt: '2025-01-17T00:00:00.000Z' },
    { id: 81, name: 'Mariana H.', rating: 4, comment: 'vinimos con toda la familia y se nota que limpian a fondo entre huespedes, todo estaba perfecto, sin duda volveriamos a reservar aqui', createdAt: '2024-09-28T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-160064064': [
    { id: 82, name: 'Jennifer Y.', rating: 5, comment: 'We celebrated our anniversary here and even had basic spices in the kitchen, wasn\'t expecting that. Highly recommend.', createdAt: '2025-12-29T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-160064065': [
    { id: 84, name: 'Kevin W.', rating: 5, comment: 'this was our second time booking here and loved having our own balcony we had coffee out there every morning', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 83, name: 'Renata C.', rating: 4, comment: 'el jardin es muy tranquilo, un buen lugar para desconectar, viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, sin duda volveriamos a reservar aqui', createdAt: '2025-06-13T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-160064067': [
    { id: 85, name: 'Michael L.', rating: 4, comment: 'Traveled with our pet and had zero issues, really appreciated that.', createdAt: '2025-05-20T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-1215732506': [
    { id: 86, name: 'Andrew D.', rating: 5, comment: 'We brought our dog along and it worked out great, no weird restrictions or hoops to jump through.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 87, name: 'Sebastian A.', rating: 5, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio. Tuvimos un pequeño problema y lo resolvieron el mismo día.', createdAt: '2025-01-04T00:00:00.000Z' },
    { id: 88, name: 'Luis Fernando L.', rating: 4, comment: 'Celebramos nuestro aniversario aqui y la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-01-04T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-1215732507': [
    { id: 89, name: 'Ximena R.', rating: 5, comment: 'muy buen precio para lo que ofrece definitivamente lo volveriamos a elegir en general una experiencia excelente', createdAt: '2025-02-28T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-1215732508': [
    { id: 92, name: 'Sebastian A.', rating: 3, comment: 'Aproveche el gym casi todas las mananas antes de salir a trabajar. Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2026-01-13T00:00:00.000Z' },
    { id: 90, name: 'Andres C.', rating: 5, comment: 'Reservamos a última hora y el wifi era muy rápido, pude trabajar sin ningún problema de conexión. Totalmente recomendado.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 91, name: 'Jonathan B.', rating: 5, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day.', createdAt: '2025-09-09T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-1215732510': [
    { id: 94, name: 'Brandon Y.', rating: 5, comment: 'Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 93, name: 'Luis Fernando B.', rating: 5, comment: 'El balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias.', createdAt: '2025-10-01T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-1215732511': [
    { id: 95, name: 'Sebastian C.', rating: 3, comment: 'el departamento tiene mucha luz natural, se siente muy amplio y comodo, sin duda volveriamos a reservar aqui', createdAt: '2026-02-26T00:00:00.000Z' },
    { id: 96, name: 'Ximena M.', rating: 4, comment: 'sacamos mucho provecho de la alberca, sobre todo con el calor', createdAt: '2024-05-23T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-1215732512': [
    { id: 97, name: 'Matthew B.', rating: 4, comment: 'We stayed a week and we used the property\'s private cinema room one night. The metro was just a few minutes away, made getting around the city really easy.', createdAt: '2024-08-02T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-1215732513': [
    { id: 98, name: 'Regina A.', rating: 3, comment: 'reservamos a ultima hora y sentimos que pagamos exactamente lo justo por lo que obtuvimos, la colonia tiene un ambiente increible, cafes y restaurantes por todos lados', createdAt: '2024-07-25T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-966997961': [
    { id: 100, name: 'Rodrigo S.', rating: 4, comment: 'celebramos nuestro aniversario aqui y el check-in fue super facil gracias a las instrucciones claras que nos mandaron', createdAt: '2025-12-25T00:00:00.000Z' },
    { id: 99, name: 'Matthew T.', rating: 5, comment: 'we stayed a week and used the gym most mornings before heading out to work, really well located, close to great restaurants and easy to get around', createdAt: '2025-02-26T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-966997960': [
    { id: 102, name: 'Emiliano B.', rating: 4, comment: 'el departamento estaba impecable cuando llegamos', createdAt: '2026-04-24T00:00:00.000Z' },
    { id: 101, name: 'Santiago M.', rating: 3, comment: 'Una noche usamos la sala de cine. La relacion precio-calidad es muy buena, definitivamente volveriamos. Sin duda volveriamos a reservar aqui.', createdAt: '2026-01-19T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1937-966997959': [
    { id: 103, name: 'Andres R.', rating: 5, comment: 'el espacio de coworking me sirvio mucho trabaje varias mananas ahi y no es el mas barato pero definitivamente se siente que pagas por calidad real', createdAt: '2024-06-18T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-966997958': [
    { id: 104, name: 'Megan K.', rating: 4, comment: 'the coworking space was perfect for getting work done during the trip, the metro was just a few minutes away, made getting around the city really easy, would definitely book here again', createdAt: '2026-03-27T00:00:00.000Z' },
    { id: 106, name: 'Jessica Y.', rating: 3, comment: 'used the gym most mornings before heading out to work, everything was clean and tidy, exceeded our expectations honestly, highly recommend', createdAt: '2025-10-17T00:00:00.000Z' },
    { id: 105, name: 'Diego C.', rating: 4, comment: 'Fue nuestro segundo viaje aqui y usamos el jacuzzi casi todas las noches. No es el mas barato pero definitivamente se siente que pagas por calidad real. En general una experiencia excelente.', createdAt: '2024-11-13T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-2065633062': [
    { id: 107, name: 'Lauren Y.', rating: 5, comment: 'We played a match on the padel court one afternoon. Check-in was super easy thanks to the clear instructions they sent ahead of time. Would definitely book here again.', createdAt: '2025-05-28T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-2065633061': [
    { id: 108, name: 'Ryan C.', rating: 3, comment: 'The kitchen was well stocked, we cooked several meals during our stay. Would definitely book here again.', createdAt: '2024-10-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-2065633060': [
    { id: 109, name: 'Amanda C.', rating: 5, comment: 'Good middle ground between price and comfort, checked every box we needed. The bed was super comfortable, slept great every night.', createdAt: '2025-03-05T00:00:00.000Z' },
    { id: 110, name: 'Camila G.', rating: 4, comment: 'Vinimos con toda la familia y ni una mota de polvo, se ve que cuidan mucho los detalles.', createdAt: '2024-12-02T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-2065633059': [
    { id: 111, name: 'Renata A.', rating: 4, comment: 'nos movimos por toda la zona sin complicaciones', createdAt: '2024-08-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-2065633058': [
    { id: 112, name: 'Justin J.', rating: 5, comment: 'the garden area was a peaceful little spot to relax between outings for what we paid the quality was way better than expected overall a great experience', createdAt: '2026-04-05T00:00:00.000Z' },
    { id: 113, name: 'Diego D.', rating: 4, comment: 'el check-in fue super sencillo, sin complicaciones ni esperas', createdAt: '2026-04-01T00:00:00.000Z' },
    { id: 114, name: 'Javier T.', rating: 4, comment: 'Celebramos nuestro aniversario aqui y no esperabamos que la alberca fuera tan grande, terminamos pasando ahi las tardes enteras. Sin duda volveriamos a reservar aqui.', createdAt: '2025-12-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-2065633057': [
    { id: 115, name: 'Jessica L.', rating: 4, comment: 'The place was really quiet, slept great despite being in a central area.', createdAt: '2026-05-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-indio-triste-20-2065633056': [
    { id: 116, name: 'Nicole D.', rating: 3, comment: 'the AC worked perfectly, which mattered a lot given how hot it gets there', createdAt: '2025-09-20T00:00:00.000Z' },
    { id: 118, name: 'Jessica A.', rating: 5, comment: 'We came with the whole family and great value for what you get, wed definitely book again. You could tell they clean thoroughly between guests, everything was perfect. Would definitely book here again.', createdAt: '2024-11-11T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-2065633055': [
    { id: 121, name: 'Renata C.', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad.', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 119, name: 'David M.', rating: 5, comment: 'Came here for work and not a budget place by any means, but for a special occasion it was completely worth it. It felt really calm, good neighbors and a nice overall vibe.', createdAt: '2025-08-26T00:00:00.000Z' },
    { id: 120, name: 'Justin R.', rating: 4, comment: 'the bathroom was well equipped with really good water pressure', createdAt: '2024-08-16T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-389884535': [
    { id: 122, name: 'Emily W.', rating: 3, comment: 'Had a small issue and it was fixed the same day, really responsive.', createdAt: '2025-07-28T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-389884536': [
    { id: 124, name: 'Katie K.', rating: 4, comment: 'worth every peso, you can tell the quality the moment you walk in, the view from the apartment is beautiful, never got tired of it, overall a great experience', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 125, name: 'Ricardo L.', rating: 3, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema, sin duda volveriamos a reservar aqui', createdAt: '2025-12-23T00:00:00.000Z' },
    { id: 123, name: 'Camila D.', rating: 3, comment: 'El jardín es muy tranquilo, un buen lugar para desconectar. El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días.', createdAt: '2025-01-08T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-389884537': [
    { id: 127, name: 'Mariana S.', rating: 4, comment: 'El jardín es muy tranquilo, un buen lugar para desconectar. El café de la mañana sabe distinto cuando lo tomas en un balcón con esa vista.', createdAt: '2025-11-05T00:00:00.000Z' },
    { id: 126, name: 'Rachel J.', rating: 4, comment: 'plenty of storage space for our stuff wasn\'t expecting that', createdAt: '2024-10-02T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-389884539': [
    { id: 128, name: 'Matthew D.', rating: 4, comment: 'This is a genuinely luxury property and it shows in every detail. Having our own outdoor space made the apartment feel so much bigger. Overall a great experience.', createdAt: '2025-11-04T00:00:00.000Z' },
  ],
  'merida-97302-la-ceiba-788526334': [
    { id: 129, name: 'Nicole Y.', rating: 3, comment: 'This was our second time booking here and good middle ground between price and comfort, checked every box we needed. The kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-03-07T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-788526333': [
    { id: 130, name: 'Mariana M.', rating: 5, comment: 'celebramos nuestro aniversario aqui y fue muy facil movernos por la zona', createdAt: '2024-04-10T00:00:00.000Z' },
  ],
  'merida-c-61-788526331': [
    { id: 131, name: 'Christopher M.', rating: 5, comment: 'worth every peso you can tell the quality the moment you walk in and so much natural light in the apartment made it feel really spacious', createdAt: '2025-12-27T00:00:00.000Z' },
    { id: 133, name: 'Javier D.', rating: 5, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-08-07T00:00:00.000Z' },
    { id: 132, name: 'David H.', rating: 3, comment: 'This was our second time booking here and not a speck of dust anywhere, you can tell they care about the details.', createdAt: '2024-08-16T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-788526330': [
    { id: 134, name: 'Brian D.', rating: 4, comment: 'great option if you\'re looking for something affordable without sacrificing comfort', createdAt: '2024-12-25T00:00:00.000Z' },
  ],
  'merida-c-6-124-788526329': [
    { id: 136, name: 'Megan K.', rating: 3, comment: 'really well located, close to great restaurants and easy to get around', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 135, name: 'Luis Fernando G.', rating: 4, comment: 'vinimos con toda la familia y el check-in fue super sencillo sin complicaciones ni esperas', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 137, name: 'Javier R.', rating: 4, comment: 'muy buen precio para lo que ofrece, definitivamente lo volveriamos a elegir, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2025-05-10T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-788526328': [
    { id: 138, name: 'Jonathan W.', rating: 3, comment: 'Booked last minute and got around the whole area without any hassle.', createdAt: '2025-01-15T00:00:00.000Z' },
  ],
  'merida-komchen-788526327': [
    { id: 139, name: 'Luis Fernando T.', rating: 4, comment: 'Vinimos por trabajo y la vista desde el departamento es hermosa, no nos cansamos de verla.', createdAt: '2025-06-01T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-1325487439': [
    { id: 141, name: 'Regina M.', rating: 4, comment: 'La colonia tiene un ambiente increible, cafes y restaurantes por todos lados. Totalmente recomendado.', createdAt: '2025-09-16T00:00:00.000Z' },
  ],
  'merida-c-21-1325487440': [
    { id: 142, name: 'Rodrigo T.', rating: 5, comment: 'Una noche usamos la sala de cine. Nunca nos sentimos inseguros caminando de regreso tarde, buena zona.', createdAt: '2024-08-24T00:00:00.000Z' },
  ],
  'merida-zona-industrial-1325487442': [
    { id: 143, name: 'Christopher M.', rating: 3, comment: 'Came here for work and really good price for what you get, we\'d choose it again without hesitation. The place was really quiet, slept great despite being in a central area.', createdAt: '2024-06-27T00:00:00.000Z' },
  ],
  'merida-zona-industrial-1325487443': [
    { id: 145, name: 'Nicole J.', rating: 4, comment: 'great option if you\'re looking for something affordable without sacrificing comfort, our dog came with us and the place lived up to being pet friendly', createdAt: '2026-01-03T00:00:00.000Z' },
    { id: 146, name: 'Amanda R.', rating: 4, comment: 'check-in was super easy thanks to the clear instructions they sent ahead of time', createdAt: '2025-09-29T00:00:00.000Z' },
  ],
  'merida-privada-kutz-1325487444': [
    { id: 149, name: 'Valeria B.', rating: 4, comment: 'vinimos con toda la familia y la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento', createdAt: '2025-12-14T00:00:00.000Z' },
    { id: 147, name: 'Emily R.', rating: 3, comment: 'The pool was amazing, we used it almost every day during our stay. Would definitely book here again.', createdAt: '2025-12-13T00:00:00.000Z' },
    { id: 148, name: 'Camila T.', rating: 4, comment: 'Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario. Totalmente recomendado.', createdAt: '2024-12-25T00:00:00.000Z' },
  ],
  'merida-c-25-v-1325487446': [
    { id: 150, name: 'Rachel Y.', rating: 5, comment: 'made great use of the pool, especially with how hot it was', createdAt: '2025-11-09T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-602266368': [
    { id: 151, name: 'Rachel J.', rating: 5, comment: 'Never felt unsafe walking back late at night, good area. Highly recommend.', createdAt: '2024-03-04T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-602266369': [
    { id: 152, name: 'Ashley W.', rating: 5, comment: 'The AC worked perfectly, which mattered a lot given how hot it gets there.', createdAt: '2025-11-08T00:00:00.000Z' },
    { id: 153, name: 'Kevin C.', rating: 3, comment: 'we stayed a week and any question we had was answered in minutes over WhatsApp', createdAt: '2025-09-04T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-602266370': [
    { id: 154, name: 'Rachel D.', rating: 3, comment: 'Great option if you\'re looking for something affordable without sacrificing comfort. Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2026-07-22T00:00:00.000Z' },
    { id: 155, name: 'Carlos C.', rating: 4, comment: 'Pasamos casi todas las tardes en la alberca, un plus que no considerabamos al reservar.', createdAt: '2025-12-05T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-602266371': [
    { id: 157, name: 'Sofia M.', rating: 4, comment: 'vinimos por trabajo y habia mucho espacio para guardar nuestras cosas, algo que no esperabamos', createdAt: '2025-09-28T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-602266372': [
    { id: 160, name: 'Brandon D.', rating: 5, comment: 'We celebrated our anniversary here and beautiful, clean pool with a great view. Overall a great experience.', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 158, name: 'Ximena R.', rating: 5, comment: 'el bano estaba muy bien equipado y con buena presion de agua', createdAt: '2025-08-09T00:00:00.000Z' },
    { id: 159, name: 'Ximena B.', rating: 5, comment: 'fue nuestro segundo viaje aqui y la ubicacion es excelente, todo quedaba cerca caminando, en general una experiencia excelente', createdAt: '2024-05-10T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-602266373': [
    { id: 161, name: 'Carlos B.', rating: 4, comment: 'Alberca hermosa, limpia y con muy buena vista.', createdAt: '2026-05-16T00:00:00.000Z' },
    { id: 162, name: 'Fernanda D.', rating: 5, comment: 'usamos el jacuzzi casi todas las noches ni una mota de polvo se ve que cuidan mucho los detalles', createdAt: '2024-07-25T00:00:00.000Z' },
  ],
  'monterrey-blvd-arboleda-400b-602266374': [
    { id: 163, name: 'Santiago A.', rating: 4, comment: 'Aprovechamos el spa un dia. Pagamos por algo premium y eso fue exactamente lo que recibimos. Sin duda volveriamos a reservar aqui.', createdAt: '2025-10-15T00:00:00.000Z' },
    { id: 164, name: 'Emily T.', rating: 5, comment: 'booked last minute and the jacuzzi was a nice surprise, great way to unwind in the evenings, it felt really calm, good neighbors and a nice overall vibe', createdAt: '2025-07-02T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-602266375': [
    { id: 165, name: 'Samantha B.', rating: 4, comment: 'paid for something premium and that\'s exactly what we got, picked this neighborhood without knowing it and it turned out to be the best call of the trip', createdAt: '2024-10-18T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-1490388242': [
    { id: 167, name: 'Brian D.', rating: 4, comment: 'We were looking for somewhere our dog would actually be welcome and found it here.', createdAt: '2025-12-09T00:00:00.000Z' },
    { id: 168, name: 'Rachel L.', rating: 5, comment: 'booked last minute and spent our afternoons out on the balcony, really nice little space to unwind', createdAt: '2025-05-04T00:00:00.000Z' },
    { id: 166, name: 'Lauren D.', rating: 5, comment: 'Came here for work and the apartment was spotless when we arrived.', createdAt: '2024-11-03T00:00:00.000Z' },
  ],
  'monterrey-av-ricardo-margain-zozaya-440-1490388243': [
    { id: 169, name: 'Andrew M.', rating: 4, comment: 'Came here for work and felt very safe walking around the neighborhood even at night.', createdAt: '2023-11-07T00:00:00.000Z' },
  ],
  'monterrey-notre-dame-126-1490388244': [
    { id: 170, name: 'Emily D.', rating: 4, comment: 'any question we had was answered in minutes over WhatsApp', createdAt: '2026-04-11T00:00:00.000Z' },
    { id: 171, name: 'Tyler A.', rating: 5, comment: 'the apartment was spotless when we arrived', createdAt: '2025-11-07T00:00:00.000Z' },
    { id: 172, name: 'Carlos B.', rating: 5, comment: 'reservamos a ultima hora y nuestro perro se sintio tan comodo aqui como en casa', createdAt: '2025-03-21T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-1490388245': [
    { id: 173, name: 'Rodrigo L.', rating: 5, comment: 'celebramos nuestro aniversario aqui y jugamos padel una tarde en las canchas, el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista', createdAt: '2024-07-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-638028351': [
    { id: 174, name: 'Katie L.', rating: 4, comment: 'Booked last minute and being steps from the beach made the whole trip — we walked over every morning. The apartment was spotless when we arrived.', createdAt: '2024-12-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-cto-de-los-sauces-638028350': [
    { id: 175, name: 'Luis Fernando L.', rating: 4, comment: 'Buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui.', createdAt: '2026-03-10T00:00:00.000Z' },
    { id: 176, name: 'Daniela R.', rating: 3, comment: 'Sacamos mucho provecho de la alberca, sobre todo con el calor.', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 177, name: 'Justin H.', rating: 4, comment: 'we came with the whole family and communication over WhatsApp was fast and friendly the whole time', createdAt: '2025-03-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-638028349': [
    { id: 178, name: 'Rachel R.', rating: 3, comment: 'picked this neighborhood without knowing it and it turned out to be the best call of the trip', createdAt: '2025-10-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-638028348': [
    { id: 180, name: 'Luis Fernando M.', rating: 3, comment: 'cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario', createdAt: '2025-09-12T00:00:00.000Z' },
    { id: 181, name: 'Emily A.', rating: 5, comment: 'booked last minute and the pool was a great surprise, better than the photos made it look', createdAt: '2024-09-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-191-638028347': [
    { id: 182, name: 'Diego G.', rating: 3, comment: 'Cualquier duda que tuvimos se resolvio en minutos por WhatsApp.', createdAt: '2025-11-23T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-638028346': [
    { id: 185, name: 'Brandon M.', rating: 5, comment: 'This was our second time booking here and felt very safe walking around the neighborhood even at night. Overall a great experience.', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 183, name: 'Javier B.', rating: 4, comment: 'no es un lugar economico pero para una ocasion especial valio completamente la pena y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui', createdAt: '2025-05-12T00:00:00.000Z' },
    { id: 184, name: 'Jennifer M.', rating: 5, comment: 'didn\'t expect the pool to be this nice, ended up spending whole afternoons there, highly recommend', createdAt: '2025-04-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-638028345': [
    { id: 186, name: 'Ximena M.', rating: 4, comment: 'Pudimos traer a nuestra mascota sin ningun problema, muy agradecidos por eso.', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 187, name: 'Sofia B.', rating: 4, comment: 'Fue muy facil movernos por la zona. Sin duda volveriamos a reservar aqui.', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 188, name: 'Gerardo D.', rating: 4, comment: 'Estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario. Sin duda volveriamos a reservar aqui.', createdAt: '2025-02-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-638028344': [
    { id: 189, name: 'Nicole D.', rating: 4, comment: 'Didn\'t expect the pool to be this nice, ended up spending whole afternoons there. Would definitely book here again.', createdAt: '2025-06-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-1695957616': [
    { id: 190, name: 'Regina V.', rating: 4, comment: 'vinimos con toda la familia y elegimos esta zona sin conocerla y resulto ser la mejor decision del viaje y sin duda volveriamos a reservar aqui', createdAt: '2026-03-24T00:00:00.000Z' },
    { id: 191, name: 'Amanda Y.', rating: 4, comment: 'we used the jacuzzi almost every night cooked almost the whole week the kitchen had literally everything we needed overall a great experience', createdAt: '2024-05-19T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-1695957617': [
    { id: 192, name: 'Regina G.', rating: 4, comment: 'vinimos con toda la familia y no esperabamos que la alberca fuera tan grande terminamos pasando ahi las tardes enteras', createdAt: '2024-12-22T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-1695957618': [
    { id: 193, name: 'Andrew M.', rating: 5, comment: 'Came here for work and we treated ourselves to the spa one afternoon. Our dog felt just as at home here as he does at our place.', createdAt: '2025-11-25T00:00:00.000Z' },
    { id: 194, name: 'Matthew A.', rating: 4, comment: 'the beach was just a few minutes on foot, exactly what we were looking for, not a budget place by any means, but for a special occasion it was completely worth it', createdAt: '2025-11-05T00:00:00.000Z' },
  ],
  'nuevo-vallarta-mar-de-cortez-1695957619': [
    { id: 196, name: 'Valeria T.', rating: 3, comment: 'trajimos a nuestro perro y nunca tuvimos ningun problema, se nota que estan acostumbrados a huespedes con mascota', createdAt: '2025-06-11T00:00:00.000Z' },
    { id: 195, name: 'Samantha K.', rating: 3, comment: 'our kids didn\'t want to leave the pool, they had the best time there every day', createdAt: '2024-06-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-terralta-100-1695957621': [
    { id: 197, name: 'Samantha S.', rating: 3, comment: 'Didn\'t think the balcony would matter this much until we used it every single day.', createdAt: '2025-10-23T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-1695957622': [
    { id: 198, name: 'Mariana V.', rating: 4, comment: 'Vinimos por trabajo y nuestro perro se sintio tan comodo aqui como en casa.', createdAt: '2025-12-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-1695957623': [
    { id: 199, name: 'Daniela O.', rating: 5, comment: 'Celebramos nuestro aniversario aquí y jugamos padel una tarde en las canchas. La alberca siempre estaba limpia y tranquila, la disfrutamos mucho. Totalmente recomendado.', createdAt: '2025-03-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-1695957624': [
    { id: 201, name: 'Kevin W.', rating: 4, comment: 'Having somewhere to sit outside made a real difference day to day. Overall a great experience.', createdAt: '2025-10-25T00:00:00.000Z' },
    { id: 202, name: 'Mariana C.', rating: 4, comment: 'celebramos nuestro aniversario aqui y estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas, buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui', createdAt: '2024-01-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-1695957647': [
    { id: 205, name: 'Mariana T.', rating: 3, comment: 'El espacio de coworking me sirvio mucho, trabaje varias mananas ahi. Sacamos mucho provecho de la alberca, sobre todo con el calor.', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 204, name: 'Paulina L.', rating: 5, comment: 'reservamos a ultima hora y trajimos a nuestro perro sin avisar mucho, y aun asi todo salio perfecto', createdAt: '2026-01-24T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-1695957648': [
    { id: 207, name: 'Santiago L.', rating: 4, comment: 'La alberca siempre estaba limpia y tranquila, la disfrutamos mucho.', createdAt: '2026-05-25T00:00:00.000Z' },
    { id: 206, name: 'Carlos S.', rating: 3, comment: 'estar tan cerca de la playa hizo toda la diferencia, caminabamos todas las mananas con nuestro perro sin ningun problema', createdAt: '2026-01-29T00:00:00.000Z' },
    { id: 208, name: 'Jonathan J.', rating: 5, comment: 'Booked last minute and loved having our own balcony, we had coffee out there every morning.', createdAt: '2024-05-16T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-1695957649': [
    { id: 209, name: 'Javier V.', rating: 4, comment: 'vinimos con toda la familia y no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, en general una experiencia excelente', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 210, name: 'Sarah W.', rating: 5, comment: 'the jacuzzi was a nice surprise, great way to unwind in the evenings, would definitely book here again', createdAt: '2024-10-30T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-649117625': [
    { id: 211, name: 'Christopher D.', rating: 4, comment: 'Really well located, close to great restaurants and easy to get around.', createdAt: '2026-03-21T00:00:00.000Z' },
    { id: 213, name: 'Ana Sofia L.', rating: 4, comment: 'El balcon termino siendo uno de nuestros lugares favoritos del depa.', createdAt: '2025-12-03T00:00:00.000Z' },
    { id: 212, name: 'David M.', rating: 3, comment: 'We stayed a week and the pool was a great surprise, better than the photos made it look.', createdAt: '2025-08-15T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-649117627': [
    { id: 214, name: 'Javier M.', rating: 3, comment: 'Nos quedamos una semana y no usamos Uber casi nada, todo estaba a distancia caminable.', createdAt: '2023-12-11T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-649117628': [
    { id: 216, name: 'Carlos A.', rating: 4, comment: 'No batallamos ni un solo dia por donde estacionarnos, todo resuelto desde el inicio.', createdAt: '2025-12-29T00:00:00.000Z' },
    { id: 215, name: 'Maria Jose S.', rating: 5, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho más grande. Totalmente recomendado.', createdAt: '2025-09-20T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-649117630': [
    { id: 217, name: 'Rodrigo H.', rating: 4, comment: 'la playa quedaba a unos minutos caminando exactamente lo que buscabamos y no usamos Uber casi nada todo estaba a distancia caminable', createdAt: '2026-02-27T00:00:00.000Z' },
    { id: 219, name: 'Andres B.', rating: 5, comment: 'vinimos por trabajo y alberca hermosa, limpia y con muy buena vista', createdAt: '2025-09-27T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-649117631': [
    { id: 221, name: 'Daniela M.', rating: 5, comment: 'alberca hermosa, limpia y con muy buena vista, sin duda volveriamos a reservar aqui', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 220, name: 'Valeria G.', rating: 4, comment: 'Fue nuestro segundo viaje aqui y el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia.', createdAt: '2025-09-19T00:00:00.000Z' },
    { id: 222, name: 'Samantha D.', rating: 5, comment: 'This was our second time booking here and picked this neighborhood without knowing it and it turned out to be the best call of the trip. Highly recommend.', createdAt: '2025-05-14T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-1352190088': [
    { id: 223, name: 'Megan B.', rating: 4, comment: 'Spent our afternoons out on the balcony, really nice little space to unwind.', createdAt: '2025-12-08T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-1352190087': [
    { id: 225, name: 'Paulina T.', rating: 3, comment: 'No hay nada como poder caminar a la playa sin depender de un coche. La alberca siempre estaba limpia y tranquila, la disfrutamos mucho.', createdAt: '2025-09-30T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-1395648842': [
    { id: 227, name: 'Megan M.', rating: 4, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood.', createdAt: '2026-03-12T00:00:00.000Z' },
    { id: 228, name: 'Rodrigo B.', rating: 5, comment: 'Muy bien ubicado, cerca de restaurantes y con facil acceso a todo.', createdAt: '2024-09-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-1395648841': [
  ],
  'puerto-vallarta-p-de-las-madre-perlas-122-1395648840': [
    { id: 230, name: 'Ximena L.', rating: 4, comment: 'Nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca.', createdAt: '2024-05-22T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-1395648839': [
    { id: 232, name: 'Sarah T.', rating: 5, comment: 'Every detail felt considered, from check-in to check-out. Overall a great experience.', createdAt: '2026-05-06T00:00:00.000Z' },
    { id: 233, name: 'Andrew W.', rating: 3, comment: 'The balcony ended up being one of our favorite parts of the apartment.', createdAt: '2025-11-08T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-1395648838': [
    { id: 235, name: 'Paulina O.', rating: 4, comment: 'Nos quedamos una semana y no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia. En general una experiencia excelente.', createdAt: '2025-12-17T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-1395648837': [
    { id: 238, name: 'Brian A.', rating: 5, comment: 'The pool was a great surprise, better than the photos made it look. Would definitely book here again.', createdAt: '2024-10-04T00:00:00.000Z' },
    { id: 236, name: 'Diego C.', rating: 3, comment: 'Celebramos nuestro aniversario aqui y el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista.', createdAt: '2024-03-22T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-1395648836': [
    { id: 239, name: 'Megan R.', rating: 3, comment: 'This is a genuinely luxury property and it shows in every detail.', createdAt: '2025-10-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-315441125': [
    { id: 240, name: 'Ana Sofia T.', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera.', createdAt: '2026-03-18T00:00:00.000Z' },
    { id: 241, name: 'Regina L.', rating: 4, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme', createdAt: '2025-09-17T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-315441124': [
    { id: 242, name: 'Santiago H.', rating: 4, comment: 'No pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia.', createdAt: '2025-09-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-315441123': [
    { id: 244, name: 'Camila V.', rating: 4, comment: 'Pasamos casi todas las tardes en la alberca, un plus que no considerabamos al reservar. En general una experiencia excelente.', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 243, name: 'Emily A.', rating: 4, comment: 'The game room was a fun way to spend a quiet evening in. The balcony was a great bonus — nice breeze and a good view of the neighborhood. Highly recommend.', createdAt: '2024-10-19T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-315441122': [
    { id: 246, name: 'Fernanda V.', rating: 5, comment: 'el area de juegos estuvo bien para las noches tranquilas tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande', createdAt: '2025-04-30T00:00:00.000Z' },
    { id: 245, name: 'Sebastian H.', rating: 4, comment: 'no batallamos ni un solo dia por donde estacionarnos, todo resuelto desde el inicio, totalmente recomendado', createdAt: '2025-04-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-315441121': [
    { id: 247, name: 'Brian D.', rating: 3, comment: 'Swimming before starting the day became part of the routine thanks to the pool.', createdAt: '2025-01-14T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-315441120': [
    { id: 248, name: 'Sebastian L.', rating: 3, comment: 'pagamos por algo premium y eso fue exactamente lo que recibimos, tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande', createdAt: '2026-02-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-315441118': [
    { id: 250, name: 'Christopher B.', rating: 5, comment: 'the balcony ended up being one of our favorite parts of the apartment', createdAt: '2026-01-22T00:00:00.000Z' },
    { id: 249, name: 'Emily C.', rating: 5, comment: 'came here for work and pool was always clean and quiet, really enjoyed it', createdAt: '2025-12-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-315441117': [
    { id: 252, name: 'Fernanda D.', rating: 3, comment: 'los ninos no querian salir de la alberca la pasaron increible ahi todos los dias', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 251, name: 'Andrew H.', rating: 3, comment: 'we celebrated our anniversary here and this is a genuinely luxury property and it shows in every detail', createdAt: '2025-03-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-315441094': [
    { id: 253, name: 'Valeria V.', rating: 5, comment: 'Reservamos a última hora y los niños no querían salir de la alberca, la pasaron increíble ahí todos los días. Totalmente recomendado.', createdAt: '2025-07-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-315441093': [
    { id: 255, name: 'Gerardo L.', rating: 4, comment: 'Nos quedamos una semana y la alberca fue una gran sorpresa, mejor de lo que esperabamos por las fotos.', createdAt: '2026-01-30T00:00:00.000Z' },
    { id: 256, name: 'Jonathan D.', rating: 5, comment: 'paid for something premium and that\'s exactly what we got', createdAt: '2025-12-04T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-315441092': [
    { id: 257, name: 'Jonathan L.', rating: 4, comment: 'We celebrated our anniversary here and swimming before starting the day became part of the routine thanks to the pool.', createdAt: '2025-02-07T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-315441091': [
    { id: 258, name: 'Javier V.', rating: 5, comment: 'la alberca estuvo increible, la usamos casi todos los dias', createdAt: '2025-11-19T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-201772860': [
    { id: 259, name: 'Ana Sofia O.', rating: 3, comment: 'celebramos nuestro aniversario aqui y pasamos casi todas las tardes en la alberca, un plus que no considerabamos al reservar', createdAt: '2024-04-21T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-201772861': [
    { id: 260, name: 'Luis Fernando G.', rating: 5, comment: 'la alberca estuvo increible, la usamos casi todos los dias, en general una experiencia excelente', createdAt: '2025-01-27T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-1969605002': [
    { id: 261, name: 'Daniela D.', rating: 3, comment: 'Nadar antes de empezar el día se volvió parte de la rutina gracias a la alberca.', createdAt: '2025-07-13T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-1969605003': [
    { id: 262, name: 'Maria Jose S.', rating: 4, comment: 'reservamos a ultima hora y pasamos casi todas las tardes en la alberca, un plus que no considerabamos al reservar', createdAt: '2026-01-23T00:00:00.000Z' },
  ],
  'tulum-av-coba-1969605004': [
    { id: 263, name: 'Ashley R.', rating: 5, comment: 'the pool was amazing we used it almost every day during our stay', createdAt: '2024-11-24T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-1353754709': [
    { id: 269, name: 'Nicole B.', rating: 5, comment: 'Having our own balcony made the whole trip, we spent almost every evening out there.', createdAt: '2025-09-14T00:00:00.000Z' },
    { id: 270, name: 'Diego A.', rating: 5, comment: 'Trajimos a nuestro perro esperando algun inconveniente y no hubo ninguno, se los agradecemos mucho.', createdAt: '2026-03-01T00:00:00.000Z' },
    { id: 280, name: 'Renata C.', rating: 5, comment: 'Sentimos que pagamos exactamente lo justo por lo que obtuvimos, sin duda volveriamos a reservar.', createdAt: '2025-12-22T00:00:00.000Z' },
    { id: 281, name: 'Jonathan P.', rating: 5, comment: 'Never felt unsafe walking back late at night, genuinely good area the whole stay.', createdAt: '2026-02-09T00:00:00.000Z' },
    { id: 282, name: 'Ana Sofia M.', rating: 5, comment: 'Se nota que limpian a fondo entre huespedes, todo estaba perfecto cuando llegamos.', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 283, name: 'Christopher L.', rating: 5, comment: 'Wifi speed was great, worked remotely the whole stay with zero connection issues.', createdAt: '2025-10-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-1353754744': [
    { id: 284, name: 'Fernanda O.', rating: 5, comment: 'La terraza es un espacio increíble, pasamos varias tardes ahí con amigos viendo el atardecer.', createdAt: '2025-08-11T00:00:00.000Z' },
    { id: 286, name: 'Daniela R.', rating: 5, comment: 'Sentimos que pagamos exactamente lo justo por todo lo que ofrecía, sin duda volveríamos.', createdAt: '2025-11-09T00:00:00.000Z' },
    { id: 287, name: 'Ethan B.', rating: 5, comment: 'Condesa turned out to be the perfect base for the trip, everything felt walkable from there.', createdAt: '2025-06-17T00:00:00.000Z' },
    { id: 288, name: 'Camila H.', rating: 5, comment: 'El lugar estaba impecable cuando llegamos, se nota que lo cuidan muy bien entre huéspedes.', createdAt: '2026-02-28T00:00:00.000Z' },
    { id: 289, name: 'Tyler N.', rating: 5, comment: 'The kitchen had absolutely everything we needed, cooked most nights during the stay.', createdAt: '2025-04-14T00:00:00.000Z' },
    { id: 290, name: 'Paulina S.', rating: 5, comment: 'La velocidad del wifi fue excelente, trabajamos remoto toda la semana sin ningún problema.', createdAt: '2025-09-30T00:00:00.000Z' },
  ],
};

/** Average rating + count for a property, combining seed reviews with any live-approved ones. */
export function getRatingSummary(slug: string, liveReviews: { rating: number }[] = []): { avg: number; count: number } | null {
  const seed = SEED_REVIEWS[slug] ?? [];
  const all = [...seed, ...liveReviews];
  if (all.length === 0) return null;
  const avg = all.reduce((s, r) => s + r.rating, 0) / all.length;
  return { avg: Math.round(avg * 10) / 10, count: all.length };
}