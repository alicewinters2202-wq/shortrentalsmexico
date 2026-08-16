// Reseñas generadas — datos estáticos, no requieren backend ni mantenimiento.
// Cada reseña referencia solo amenidades reales de esa propiedad.
// 18 temas genericos + amenidades especificas, balanceados por uso para evitar repeticion de conceptos.

export interface SeedReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const SEED_REVIEWS: Record<string, SeedReview[]> = {
  'ciudad-de-mexico-calle-arquimedes-189-1': [
    { id: 1, name: 'Matthew T.', rating: 4, comment: 'morning coffee tastes different when you\'re having it on a balcony with that view, the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2026-03-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-goldsmith-134-2': [
    { id: 3, name: 'Emiliano C.', rating: 3, comment: 'No pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia. Esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente.', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 2, name: 'Rodrigo C.', rating: 5, comment: 'El wifi era muy rapido, pude trabajar sin ningun problema de conexion. En general una experiencia excelente.', createdAt: '2025-09-07T00:00:00.000Z' },
    { id: 4, name: 'Sebastian D.', rating: 5, comment: 'Despues de investigar varias opciones, la terraza tiene una vista espectacular, pasamos varias tardes ahi. El check-in fue super sencillo, sin complicaciones ni esperas.', createdAt: '2025-01-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-hamburgo-32-3': [
    { id: 5, name: 'Matthew Y.', rating: 4, comment: 'this was our second time booking here and every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, after days of walking around the city, that bed felt like home', createdAt: '2025-01-20T00:00:00.000Z' },
    { id: 6, name: 'Sofia D.', rating: 3, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, no esperabamos una vista tan buena desde la ventana, gran sorpresa', createdAt: '2024-10-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-choapan-45-4': [
    { id: 9, name: 'Amanda Y.', rating: 4, comment: 'something as simple as assigned parking made everything way less stressful, the AC worked perfectly, which mattered a lot given how hot it gets there, would definitely book here again', createdAt: '2025-11-06T00:00:00.000Z' },
    { id: 8, name: 'Alejandro G.', rating: 3, comment: 'Nos quedamos una semana y el roof garden del edificio es hermoso al atardecer, muy recomendable. No escuchamos ruido de los vecinos ni de la calle, sorprendentemente tranquilo. Superó lo que esperábamos por completo.', createdAt: '2025-07-13T00:00:00.000Z' },
    { id: 7, name: 'Tyler H.', rating: 4, comment: 'check-in was super easy thanks to the clear instructions they sent ahead of time', createdAt: '2025-06-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-p-de-la-reforma-150-5': [
    { id: 10, name: 'Ricardo G.', rating: 3, comment: 'vinimos con toda la familia y el jardin del edificio es muy tranquilo, un buen lugar para desconectar, el departamento tiene mucha luz natural, se siente muy amplio y comodo, en general una experiencia excelente', createdAt: '2024-06-16T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1507-6': [
    { id: 11, name: 'Jessica B.', rating: 5, comment: 'having our own outdoor space made the apartment feel so much bigger, there\'s security at the entrance, made everything feel really secure', createdAt: '2024-11-19T00:00:00.000Z' },
    { id: 13, name: 'Sarah Y.', rating: 5, comment: 'the rooftop terrace has an incredible view, we spent several evenings up there, the bathroom was well equipped with really good water pressure', createdAt: '2024-08-05T00:00:00.000Z' },
    { id: 12, name: 'Brandon T.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, public transport was right around the corner, so easy to get anywhere', createdAt: '2024-03-26T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-190-8': [
    { id: 14, name: 'Sofia T.', rating: 3, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Se nota que limpian a fondo entre huespedes, todo estaba perfecto.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 18, name: 'Gerardo L.', rating: 4, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante las fotos no le hacen justicia a la cantidad de luz que entra en el dia', createdAt: '2025-01-26T00:00:00.000Z' },
    { id: 17, name: 'Daniela R.', rating: 5, comment: 'el roof garden del edificio es hermoso al atardecer, muy recomendable, el elevador funcionaba perfecto, nunca tuvimos que esperar mucho, sin duda volveriamos a reservar aqui', createdAt: '2025-01-22T00:00:00.000Z' },
    { id: 16, name: 'Lauren W.', rating: 4, comment: 'the balcony was a great bonus nice breeze and a good view of the neighborhood and the building feels really calm good neighbors and a nice overall vibe', createdAt: '2024-12-31T00:00:00.000Z' },
    { id: 15, name: 'Ricardo C.', rating: 5, comment: 'despues de investigar varias opciones, habia mucho espacio para guardar nuestras cosas, algo que no esperabamos', createdAt: '2024-09-07T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-culiacan-40-9': [
    { id: 19, name: 'Brandon W.', rating: 5, comment: 'Morning coffee tastes different when you\'re having it on a balcony with that view. Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2026-02-02T00:00:00.000Z' },
    { id: 21, name: 'Andres G.', rating: 5, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. Llegamos tarde por el vuelo y aun asi el check-in fue rapidisimo. Sin duda volveriamos a reservar aqui.', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 20, name: 'Christopher W.', rating: 5, comment: 'We celebrated our anniversary here and felt very safe walking around the neighborhood even at night.', createdAt: '2024-02-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-jalapa-190-10': [
    { id: 22, name: 'Regina T.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. El metro quedaba a unos minutos, muy facil movernos por la ciudad.', createdAt: '2025-09-09T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-colima-209-11': [
    { id: 27, name: 'Rodrigo S.', rating: 3, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. Ni una mota de polvo, se ve que cuidan mucho los detalles.', createdAt: '2025-11-23T00:00:00.000Z' },
    { id: 24, name: 'Alejandro A.', rating: 4, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, despues de dias caminando la ciudad, esa cama se sintio como en casa, supero lo que esperabamos por completo', createdAt: '2025-09-07T00:00:00.000Z' },
    { id: 26, name: 'Samantha D.', rating: 5, comment: 'fridge and stove both worked perfectly no issues at all', createdAt: '2025-07-25T00:00:00.000Z' },
    { id: 23, name: 'Brian K.', rating: 5, comment: 'we came with the whole family and compared several options and this was by far the best value for the price', createdAt: '2024-09-27T00:00:00.000Z' },
    { id: 25, name: 'Andrew M.', rating: 4, comment: 'Internet speed was honestly better than at home.', createdAt: '2023-12-28T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-289-12': [
    { id: 31, name: 'Matthew A.', rating: 5, comment: 'the building is really quiet slept great despite being in a central area', createdAt: '2025-09-22T00:00:00.000Z' },
    { id: 30, name: 'Carlos M.', rating: 3, comment: 'hay seguridad en la entrada del edificio se siente muy tranquilo', createdAt: '2025-06-29T00:00:00.000Z' },
    { id: 29, name: 'Jennifer K.', rating: 3, comment: 'something as simple as assigned parking made everything way less stressful check-in was super easy thanks to the clear instructions they sent ahead of time', createdAt: '2025-01-18T00:00:00.000Z' },
    { id: 28, name: 'Rachel Y.', rating: 4, comment: 'Traveling with a pet always feels risky but we had zero issues here. Not a speck of dust anywhere, you can tell they care about the details.', createdAt: '2023-11-18T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-47-13': [
    { id: 32, name: 'Diego R.', rating: 4, comment: 'Viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema. El transporte publico quedaba a la vuelta, facilisimo llegar a todos lados.', createdAt: '2026-02-24T00:00:00.000Z' },
    { id: 34, name: 'Michael C.', rating: 5, comment: 'We came with the whole family and check-in was super easy thanks to the clear instructions they sent ahead of time.', createdAt: '2026-01-13T00:00:00.000Z' },
    { id: 33, name: 'Ryan Y.', rating: 5, comment: 'Having good air conditioning made a huge difference with the weather.', createdAt: '2025-09-17T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-salamanca-11-15': [
    { id: 37, name: 'Valeria T.', rating: 4, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba. La velocidad de internet fue mejor que en mi casa, sin exagerar.', createdAt: '2025-11-19T00:00:00.000Z' },
    { id: 38, name: 'Jennifer A.', rating: 5, comment: 'Every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that. They sent neighborhood recommendations without us even asking, nice touch.', createdAt: '2025-07-29T00:00:00.000Z' },
    { id: 36, name: 'Andrew T.', rating: 4, comment: 'we stayed a week and fridge and stove both worked perfectly, no issues at all, completely exceeded what we expected', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 35, name: 'Sofia V.', rating: 4, comment: 'si algo hizo que este viaje valiera la pena fue la alberca, la disfrutamos muchisimo, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2025-02-28T00:00:00.000Z' },
    { id: 39, name: 'Jonathan W.', rating: 4, comment: 'We arrived exhausted from a long flight and finding everything this clean really helped. Overall a great experience.', createdAt: '2025-02-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlacotalpan-27-17': [
    { id: 43, name: 'Carlos V.', rating: 5, comment: 'reservamos a ultima hora y la velocidad de internet fue mejor que en mi casa sin exagerar y sin duda volveriamos a reservar aqui', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 41, name: 'Ximena D.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2025-05-28T00:00:00.000Z' },
    { id: 40, name: 'Andrew T.', rating: 4, comment: 'having our own outdoor space made the apartment feel so much bigger, didn\'t expect such a great view from the window, nice surprise, completely exceeded what we expected', createdAt: '2025-05-15T00:00:00.000Z' },
    { id: 44, name: 'Maria Jose S.', rating: 5, comment: 'Esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente. Supero lo que esperabamos por completo.', createdAt: '2025-02-03T00:00:00.000Z' },
    { id: 42, name: 'Mariana S.', rating: 3, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, la regadera tenia muy buena presion, algo que no siempre se encuentra', createdAt: '2025-01-14T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chihuahua-55-18': [
    { id: 47, name: 'David B.', rating: 5, comment: 'they sent neighborhood recommendations without us even asking, nice touch', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 45, name: 'Michael D.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, fridge and stove both worked perfectly, no issues at all', createdAt: '2025-07-28T00:00:00.000Z' },
    { id: 46, name: 'Daniela T.', rating: 5, comment: 'Vinimos con toda la familia y el bano y la cocina estaban perfectamente limpios, algo que siempre agradezco.', createdAt: '2024-02-13T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-celaya-4-19': [
    { id: 48, name: 'Jonathan K.', rating: 4, comment: 'Not having to worry about where to park was such a relief. The apartment was spotless when we arrived, clearly well maintained. Completely exceeded what we expected.', createdAt: '2026-03-17T00:00:00.000Z' },
    { id: 51, name: 'Sarah S.', rating: 5, comment: 'kitchen had good dishware and utensils, cooking there felt easy', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 49, name: 'Kevin C.', rating: 3, comment: 'Compared several options and this was by far the best value for the price.', createdAt: '2025-07-17T00:00:00.000Z' },
    { id: 50, name: 'Ana Sofia A.', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el check-in fue super sencillo, sin complicaciones ni esperas', createdAt: '2023-12-04T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-amsterdam-119-20': [
    { id: 52, name: 'Tyler L.', rating: 5, comment: 'So much natural light in the apartment, made it feel really spacious.', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 54, name: 'Luis Fernando A.', rating: 4, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Cocinamos casi toda la semana, la cocina tenia absolutamente todo lo necesario.', createdAt: '2025-05-27T00:00:00.000Z' },
    { id: 53, name: 'Amanda C.', rating: 4, comment: 'Came here for work and didn\'t think the balcony would matter this much until we used it every single day. There\'s security at the entrance, made everything feel really secure.', createdAt: '2024-09-22T00:00:00.000Z' },
    { id: 55, name: 'Amanda R.', rating: 5, comment: 'having dedicated parking made things so much easier, no stress finding a spot, check-in was super easy thanks to the clear instructions they sent ahead of time, would definitely book here again', createdAt: '2024-04-05T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-blas-pascal-190-21': [
    { id: 56, name: 'Mariana O.', rating: 5, comment: 'Buscábamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aquí. La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-12-14T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-homero-1516-22': [
    { id: 59, name: 'Jessica J.', rating: 4, comment: 'We came with the whole family and we were looking for somewhere our dog would actually be welcome and found it here. Bathroom and kitchen were both perfectly clean, something I always appreciate.', createdAt: '2026-04-30T00:00:00.000Z' },
    { id: 57, name: 'Paulina G.', rating: 4, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, la cocina tenia buena vajilla y utensilios, cocinar ahi se sintio comodo, en general una experiencia excelente', createdAt: '2025-09-21T00:00:00.000Z' },
    { id: 58, name: 'Luis Fernando D.', rating: 4, comment: 'Vinimos por trabajo y nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2025-07-19T00:00:00.000Z' },
    { id: 60, name: 'Gerardo V.', rating: 3, comment: 'la terraza tiene una vista espectacular pasamos varias tardes ahi el edificio es muy silencioso dormimos increible a pesar de estar en zona centrica', createdAt: '2024-09-11T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-c-arquimedes-145-23': [
    { id: 61, name: 'Andrew H.', rating: 4, comment: 'Didn\'t think the balcony would matter this much until we used it every single day. The bathroom was well equipped with really good water pressure. Completely exceeded what we expected.', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 62, name: 'Renata D.', rating: 3, comment: 'No tener que preocuparnos por donde dejar el coche fue un alivio enorme. Tuvimos un pequeno problema con el aire acondicionado y lo resolvieron el mismo dia. En general una experiencia excelente.', createdAt: '2024-10-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-cordoba-45-24': [
    { id: 63, name: 'Jessica M.', rating: 4, comment: 'Traveling with a pet always feels risky but we had zero issues here. The AC worked perfectly, which mattered a lot given how hot it gets there.', createdAt: '2024-07-17T00:00:00.000Z' },
    { id: 64, name: 'Rodrigo M.', rating: 5, comment: 'Habia mucho espacio para guardar nuestras cosas, algo que no esperabamos.', createdAt: '2024-06-08T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-57-25': [
    { id: 65, name: 'Megan R.', rating: 3, comment: 'we treated ourselves to the spa one afternoon, such a nice bonus, didn\'t expect such a great view from the window, nice surprise', createdAt: '2025-12-11T00:00:00.000Z' },
    { id: 66, name: 'Jennifer H.', rating: 4, comment: 'came here for work and barely used Uber the whole trip, everything was walkable', createdAt: '2025-09-01T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-tlaxcala-173-27': [
    { id: 67, name: 'Amanda L.', rating: 4, comment: 'we arrived exhausted from a long flight and finding everything this clean really helped', createdAt: '2025-09-23T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-praga-14-28': [
    { id: 71, name: 'Nicole Y.', rating: 5, comment: 'Having our own outdoor space made the apartment feel so much bigger. Worked remotely the whole week and the internet never let me down.', createdAt: '2026-07-21T00:00:00.000Z' },
    { id: 70, name: 'Brian A.', rating: 3, comment: 'Don\'t usually mention the gym in reviews but this one was better equipped than most paid gyms. The metro was just a few minutes away, made getting around the city really easy.', createdAt: '2026-05-29T00:00:00.000Z' },
    { id: 69, name: 'Amanda A.', rating: 4, comment: 'Loved the roof garden — perfect spot for sunset with a drink. You can tell there\'s an actual team behind this, not just an automated contact.', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 72, name: 'Rachel B.', rating: 4, comment: 'We came with the whole family and we were looking for somewhere our dog would actually be welcome and found it here. Fridge and stove both worked perfectly, no issues at all.', createdAt: '2025-02-08T00:00:00.000Z' },
    { id: 68, name: 'David C.', rating: 5, comment: 'Not having to worry about where to park was such a relief. Public transport was right around the corner, so easy to get anywhere. Overall a great experience.', createdAt: '2024-12-12T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-chicontepec-72-29': [
    { id: 77, name: 'Diego O.', rating: 3, comment: 'celebramos nuestro aniversario aqui y fue muy practico tener estacionamiento propio, no batallamos nada con eso, el check-in fue super sencillo, sin complicaciones ni esperas', createdAt: '2025-09-30T00:00:00.000Z' },
    { id: 76, name: 'Christopher T.', rating: 5, comment: 'came here for work and pleasant surprise finding such a well equipped gym right in the building, they sent neighborhood recommendations without us even asking, nice touch', createdAt: '2025-09-15T00:00:00.000Z' },
    { id: 75, name: 'Maria Jose D.', rating: 4, comment: 'Las fotos no le hacen justicia a la cantidad de luz que entra en el dia.', createdAt: '2025-09-06T00:00:00.000Z' },
    { id: 73, name: 'Andres G.', rating: 3, comment: 'reservamos a ultima hora y no esperabamos jacuzzi y termino siendo uno de nuestros momentos favoritos del viaje y todo estaba muy limpio y ordenado supero nuestras expectativas', createdAt: '2025-07-24T00:00:00.000Z' },
    { id: 74, name: 'Rachel S.', rating: 5, comment: 'The elevator worked great, never had to wait around for it.', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-sinaloa-186-30': [
    { id: 78, name: 'Lauren K.', rating: 5, comment: 'We celebrated our anniversary here and had a small AC issue and it was fixed the same day, really responsive. Completely exceeded what we expected.', createdAt: '2026-03-17T00:00:00.000Z' },
    { id: 79, name: 'Sofia L.', rating: 4, comment: 'Todo estaba muy limpio y ordenado, supero nuestras expectativas.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 80, name: 'Valeria G.', rating: 4, comment: 'esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente, sin duda volveriamos a reservar aqui', createdAt: '2025-02-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-juan-de-la-barrera-36-31': [
    { id: 83, name: 'Ximena S.', rating: 5, comment: 'Despues de investigar varias opciones, la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2025-12-24T00:00:00.000Z' },
    { id: 82, name: 'Valeria H.', rating: 5, comment: 'fue nuestro segundo viaje aqui y no tener que preocuparnos por donde dejar el coche fue un alivio enorme y el edificio se siente muy tranquilo buenos vecinos y ambiente agradable', createdAt: '2025-10-10T00:00:00.000Z' },
    { id: 84, name: 'Andrew M.', rating: 5, comment: 'loved having our own balcony, we had coffee out there every morning, very close to the metro, got around the whole city without any hassle', createdAt: '2024-10-14T00:00:00.000Z' },
    { id: 81, name: 'Jessica K.', rating: 4, comment: 'we stayed a week and the rooftop terrace has an incredible view we spent several evenings up there and cooked almost the whole week the kitchen had literally everything we needed and overall a great experience', createdAt: '2024-04-10T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-chapultepec-447-32': [
    { id: 87, name: 'Brian C.', rating: 4, comment: 'something as simple as assigned parking made everything way less stressful after days of walking around the city that bed felt like home completely exceeded what we expected', createdAt: '2025-10-01T00:00:00.000Z' },
    { id: 86, name: 'Renata S.', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias.', createdAt: '2025-01-05T00:00:00.000Z' },
    { id: 88, name: 'Sofia R.', rating: 4, comment: 'nos quedamos una semana y el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista, el check-in fue super facil gracias a las instrucciones claras que nos mandaron', createdAt: '2024-07-27T00:00:00.000Z' },
    { id: 85, name: 'Rachel K.', rating: 4, comment: 'Came here for work and managed to keep my workout routine going thanks to the building gym, had everything I needed. Felt very safe the whole time, the building has good security.', createdAt: '2024-03-31T00:00:00.000Z' },
  ],
  'ciudad-de-mexico-av-nuevo-leon-104-33': [
    { id: 90, name: 'Rachel M.', rating: 5, comment: 'Not having to worry about where to park was such a relief. The location was excellent, everything was within walking distance.', createdAt: '2026-02-15T00:00:00.000Z' },
    { id: 91, name: 'Nicole R.', rating: 3, comment: 'We stayed a week and the rooftop terrace has an incredible view, we spent several evenings up there. Shower had great water pressure, which you dont always get.', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 92, name: 'Nicole R.', rating: 5, comment: 'We celebrated our anniversary here and the building is really quiet, slept great despite being in a central area.', createdAt: '2025-03-28T00:00:00.000Z' },
    { id: 89, name: 'Luis Fernando B.', rating: 5, comment: 'nos quedamos una semana y la vista desde el departamento es hermosa, no nos cansamos de verla', createdAt: '2025-01-28T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-36': [
    { id: 94, name: 'Matthew M.', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, any question we had was answered in minutes over WhatsApp', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 93, name: 'Javier H.', rating: 4, comment: 'comparamos varias opciones y esta fue por mucho la mejor relacion precio-calidad', createdAt: '2026-02-07T00:00:00.000Z' },
  ],
  'cancun-kukulcan-boulevard-37': [
    { id: 96, name: 'Tyler Y.', rating: 5, comment: 'Came here for work and the rooftop terrace has an incredible view, we spent several evenings up there. We arrived exhausted from a long flight and finding everything this clean really helped.', createdAt: '2025-05-26T00:00:00.000Z' },
    { id: 95, name: 'Nicole Y.', rating: 5, comment: 'having our own outdoor space made the apartment feel so much bigger, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-09-20T00:00:00.000Z' },
  ],
  'cancun-manzana-27-lote-102-uc-38-entre-calle-pu-38': [
    { id: 99, name: 'Camila R.', rating: 5, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y el refrigerador y la estufa funcionaban perfecto sin ningun problema', createdAt: '2025-05-21T00:00:00.000Z' },
    { id: 98, name: 'Justin Y.', rating: 5, comment: 'traveling with a pet always feels risky but we had zero issues here, we could just wander without a plan and always find something good nearby', createdAt: '2025-04-18T00:00:00.000Z' },
    { id: 97, name: 'Ricardo D.', rating: 4, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion, sin duda volveriamos a reservar aqui', createdAt: '2024-04-18T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-41': [
    { id: 103, name: 'Sarah S.', rating: 5, comment: 'if there\'s one thing that made this trip, it was the pool, we loved it, the photos dont do justice to how much light comes in during the day, would definitely book here again', createdAt: '2026-02-09T00:00:00.000Z' },
    { id: 104, name: 'Katie K.', rating: 5, comment: 'we treated ourselves to the spa one afternoon, such a nice bonus, the bed was super comfortable, slept great every night', createdAt: '2026-02-09T00:00:00.000Z' },
    { id: 101, name: 'Regina G.', rating: 5, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias, sin duda volveriamos a reservar aqui', createdAt: '2025-12-12T00:00:00.000Z' },
    { id: 100, name: 'Daniela V.', rating: 3, comment: 'vinimos por trabajo y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento sin duda volveriamos a reservar aqui', createdAt: '2025-10-23T00:00:00.000Z' },
    { id: 102, name: 'Mariana O.', rating: 4, comment: 'No pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia. Comparamos varias opciones y esta fue por mucho la mejor relacion precio-calidad.', createdAt: '2024-10-22T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-42': [
    { id: 105, name: 'Emiliano C.', rating: 5, comment: 'el spa fue el detalle que convirtio un viaje normal en algo especial, la velocidad de internet fue mejor que en mi casa, sin exagerar, sin duda volveriamos a reservar aqui', createdAt: '2026-04-03T00:00:00.000Z' },
  ],
  'cancun-boulevard-kukulcan-km-1-zona-turistica-p-43': [
    { id: 109, name: 'Renata T.', rating: 3, comment: 'hay seguridad en la entrada del edificio se siente muy tranquilo sin duda volveriamos a reservar aqui', createdAt: '2025-12-05T00:00:00.000Z' },
    { id: 107, name: 'Mariana T.', rating: 5, comment: 'no cocinamos mucho pero cuando lo hicimos la cocina tenia de todo', createdAt: '2025-09-06T00:00:00.000Z' },
    { id: 106, name: 'David K.', rating: 4, comment: 'After looking at a bunch of options, having dedicated parking made things so much easier, no stress finding a spot. Check-in was super simple, no complications or waiting around.', createdAt: '2024-12-22T00:00:00.000Z' },
    { id: 108, name: 'David Y.', rating: 4, comment: 'Morning coffee tastes different when you\'re having it on a balcony with that view. Public transport was right around the corner, so easy to get anywhere.', createdAt: '2024-11-20T00:00:00.000Z' },
  ],
  'cancun-blvd-kukulcan-1-44': [
    { id: 112, name: 'Matthew W.', rating: 3, comment: 'The balcony was a great bonus — nice breeze and a good view of the neighborhood. The bathroom was well equipped with really good water pressure.', createdAt: '2025-11-15T00:00:00.000Z' },
    { id: 113, name: 'Andrew A.', rating: 4, comment: 'The building feels really calm, good neighbors and a nice overall vibe. Highly recommend.', createdAt: '2025-09-04T00:00:00.000Z' },
    { id: 110, name: 'Paulina S.', rating: 5, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalacion. No escuchamos ruido de los vecinos ni de la calle, sorprendentemente tranquilo. Supero lo que esperabamos por completo.', createdAt: '2025-06-26T00:00:00.000Z' },
    { id: 111, name: 'Amanda B.', rating: 4, comment: 'After looking at a bunch of options, the pool was amazing, we used it almost every day during our stay. Everything was two blocks away, market, pharmacy, coffee shops.', createdAt: '2025-05-31T00:00:00.000Z' },
  ],
  'cancun-marina-puerto-cancun-45': [
    { id: 115, name: 'Christopher C.', rating: 4, comment: 'not having to worry about where to park was such a relief, the view from the apartment is beautiful, never got tired of it, overall a great experience', createdAt: '2025-02-27T00:00:00.000Z' },
    { id: 114, name: 'Maria Jose R.', rating: 3, comment: 'el elevador funcionaba perfecto nunca tuvimos que esperar mucho', createdAt: '2025-01-15T00:00:00.000Z' },
    { id: 116, name: 'Nicole C.', rating: 5, comment: 'Plenty of storage space for our stuff, wasn\'t expecting that. Overall a great experience.', createdAt: '2024-03-08T00:00:00.000Z' },
  ],
  'cancun-puerto-cancun-46': [
    { id: 121, name: 'Lauren D.', rating: 4, comment: 'Traveling with a pet always feels risky but we had zero issues here. The photos don\'t do justice to how much light comes in during the day.', createdAt: '2026-03-18T00:00:00.000Z' },
    { id: 119, name: 'Megan K.', rating: 5, comment: 'Came here for work and the apartment was spotless when we arrived, clearly well maintained.', createdAt: '2026-02-16T00:00:00.000Z' },
    { id: 120, name: 'Rachel R.', rating: 4, comment: 'Morning coffee tastes different when you\'re having it on a balcony with that view. Had a small AC issue and it was fixed the same day, really responsive.', createdAt: '2025-10-25T00:00:00.000Z' },
    { id: 118, name: 'Katie C.', rating: 5, comment: 'We treated ourselves to the spa one afternoon, such a nice bonus. Even had basic spices in the kitchen, wasn\'t expecting that.', createdAt: '2025-04-15T00:00:00.000Z' },
    { id: 117, name: 'Mariana T.', rating: 4, comment: 'vinimos por trabajo y el gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio, tener buen aire acondicionado hizo toda la diferencia con el clima', createdAt: '2024-11-08T00:00:00.000Z' },
  ],
  'cancun-puerto-juarez-47': [
    { id: 122, name: 'Samantha J.', rating: 5, comment: 'Not having to worry about where to park was such a relief. Wifi speed was great, I worked remotely the whole stay with zero issues. Would definitely book here again.', createdAt: '2025-08-15T00:00:00.000Z' },
  ],
  'chapala-km960-48': [
    { id: 126, name: 'Samantha J.', rating: 4, comment: 'We came with the whole family and compared several options and this was by far the best value for the price.', createdAt: '2026-03-30T00:00:00.000Z' },
    { id: 127, name: 'Katie T.', rating: 5, comment: 'We celebrated our anniversary here and loved the roof garden — perfect spot for sunset with a drink. Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2026-01-12T00:00:00.000Z' },
    { id: 125, name: 'Christopher K.', rating: 3, comment: 'The pool was amazing, we used it almost every day during our stay. After days of walking around the city, that bed felt like home.', createdAt: '2025-05-06T00:00:00.000Z' },
    { id: 124, name: 'Amanda W.', rating: 3, comment: 'Everything was clean and tidy, exceeded our expectations honestly.', createdAt: '2024-10-25T00:00:00.000Z' },
    { id: 123, name: 'Emiliano O.', rating: 5, comment: 'No esperabamos jacuzzi y termino siendo uno de nuestros momentos favoritos del viaje. El aire acondicionado funcionaba perfecto, algo importante con el calor de la zona.', createdAt: '2024-03-13T00:00:00.000Z' },
  ],
  'chapala-j-encarnacion-rosas-64-50': [
    { id: 128, name: 'Andrew H.', rating: 3, comment: 'Felt taken care of the whole trip, always available whenever we needed something.', createdAt: '2025-08-23T00:00:00.000Z' },
    { id: 129, name: 'Amanda T.', rating: 4, comment: 'having dedicated parking made things so much easier, no stress finding a spot, check-in was super simple, no complications or waiting around', createdAt: '2025-08-13T00:00:00.000Z' },
    { id: 130, name: 'Paulina C.', rating: 4, comment: 'Fue nuestro segundo viaje aqui y la terraza termino siendo nuestro lugar favorito de todo el edificio. Nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia.', createdAt: '2024-03-19T00:00:00.000Z' },
  ],
  'chapala-lib-a-chapala-399-51': [
    { id: 135, name: 'Samantha M.', rating: 3, comment: 'the metro was just a few minutes away, made getting around the city really easy, completely exceeded what we expected', createdAt: '2026-04-04T00:00:00.000Z' },
    { id: 134, name: 'Ximena C.', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. No escuchamos ruido de los vecinos ni de la calle, sorprendentemente tranquilo.', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 133, name: 'Ashley T.', rating: 4, comment: 'came here for work and every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, having good air conditioning made a huge difference with the weather', createdAt: '2025-11-20T00:00:00.000Z' },
    { id: 131, name: 'Sofia H.', rating: 3, comment: 'El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien.', createdAt: '2025-02-05T00:00:00.000Z' },
    { id: 132, name: 'Rachel W.', rating: 5, comment: 'We were looking for somewhere our dog would actually be welcome and found it here. The view from the apartment is beautiful, never got tired of it. Overall a great experience.', createdAt: '2024-02-13T00:00:00.000Z' },
  ],
  'chapala-la-paz-103-52': [
    { id: 136, name: 'Tyler D.', rating: 4, comment: 'Bathroom and kitchen were both perfectly clean, something I always appreciate.', createdAt: '2025-10-25T00:00:00.000Z' },
    { id: 137, name: 'Santiago H.', rating: 5, comment: 'El check-in fue súper fácil gracias a las instrucciones claras que nos mandaron.', createdAt: '2025-02-18T00:00:00.000Z' },
  ],
  'chapala-vista-del-lago-pte-1-53': [
    { id: 138, name: 'Katie W.', rating: 5, comment: 'Something as simple as assigned parking made everything way less stressful. We arrived exhausted from a long flight and finding everything this clean really helped. Completely exceeded what we expected.', createdAt: '2026-05-15T00:00:00.000Z' },
    { id: 139, name: 'Rodrigo G.', rating: 5, comment: 'Buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui. La regadera tenia muy buena presion, algo que no siempre se encuentra.', createdAt: '2023-09-03T00:00:00.000Z' },
  ],
  'chapala-carr-jocotepecchapala-632-54': [
    { id: 140, name: 'Brian B.', rating: 4, comment: 'We celebrated our anniversary here and public transport was right around the corner, so easy to get anywhere. Overall a great experience.', createdAt: '2025-06-28T00:00:00.000Z' },
  ],
  'chapala-donato-guerra-22-55': [
    { id: 141, name: 'Fernanda G.', rating: 3, comment: 'Vinimos con toda la familia y la ubicacion es excelente, todo quedaba cerca caminando.', createdAt: '2025-10-02T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-56': [
    { id: 143, name: 'Ryan T.', rating: 3, comment: 'Worked remotely the whole week and the internet never let me down.', createdAt: '2025-06-15T00:00:00.000Z' },
    { id: 142, name: 'Megan Y.', rating: 4, comment: 'Traveling with a pet always feels risky but we had zero issues here. Great value for what you get, wed definitely book again.', createdAt: '2025-04-10T00:00:00.000Z' },
  ],
  'guadalajara-av-patria-1891-57': [
    { id: 148, name: 'Carlos D.', rating: 5, comment: 'Nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia.', createdAt: '2026-03-03T00:00:00.000Z' },
    { id: 144, name: 'Sarah Y.', rating: 3, comment: 'We came with the whole family and the jacuzzi was a nice surprise, great way to unwind in the evenings. Felt taken care of the whole trip, always available whenever we needed something.', createdAt: '2026-02-25T00:00:00.000Z' },
    { id: 147, name: 'Camila G.', rating: 4, comment: 'fue nuestro segundo viaje aqui y fue muy practico tener estacionamiento propio no batallamos nada con eso y la cama era muy comoda dormimos increible todas las noches', createdAt: '2025-09-11T00:00:00.000Z' },
    { id: 145, name: 'Ximena L.', rating: 5, comment: 'La velocidad de internet fue mejor que en mi casa, sin exagerar.', createdAt: '2025-05-01T00:00:00.000Z' },
    { id: 146, name: 'Ximena G.', rating: 4, comment: 'Vinimos por trabajo y tenia que trabajar durante el viaje y el coworking del edificio resolvio todo. Comparamos varias opciones y esta fue por mucho la mejor relacion precio-calidad.', createdAt: '2024-07-02T00:00:00.000Z' },
  ],
  'guadalajara-av-chapultepec-sur-15-58': [
    { id: 149, name: 'Brian B.', rating: 5, comment: 'Booked last minute and the kitchen was well stocked, we cooked several meals during our stay.', createdAt: '2025-05-31T00:00:00.000Z' },
  ],
  'guadalajara-c-manuel-lopez-cotilla-1223-59': [
    { id: 152, name: 'Christopher C.', rating: 5, comment: 'The terrace ended up being our favorite part of the whole building. Check-in was super simple, no complications or waiting around.', createdAt: '2025-11-21T00:00:00.000Z' },
    { id: 150, name: 'Carlos R.', rating: 4, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, se nota que hay un equipo detras que realmente atiende, no solo un contacto automatico, en general una experiencia excelente', createdAt: '2025-10-29T00:00:00.000Z' },
    { id: 151, name: 'Katie H.', rating: 3, comment: 'having our own outdoor space made the apartment feel so much bigger, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-05-13T00:00:00.000Z' },
  ],
  'guadalajara-rio-de-janeiro-2320-60': [
    { id: 155, name: 'Diego L.', rating: 4, comment: 'reservamos a ultima hora y no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2025-11-04T00:00:00.000Z' },
    { id: 153, name: 'Matthew J.', rating: 4, comment: 'Not having to worry about where to park was such a relief. They sent neighborhood recommendations without us even asking, nice touch.', createdAt: '2025-03-30T00:00:00.000Z' },
    { id: 156, name: 'Camila B.', rating: 4, comment: 'la regadera tenia muy buena presion, algo que no siempre se encuentra', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 154, name: 'Luis Fernando C.', rating: 5, comment: 'El roof garden del edificio es hermoso al atardecer, muy recomendable. Muy cerca del metro, nos movimos por toda la ciudad sin complicaciones.', createdAt: '2024-12-19T00:00:00.000Z' },
  ],
  'guadalajara-av-acueducto-6075-61': [
    { id: 158, name: 'Santiago O.', rating: 4, comment: 'la alberca del edificio estuvo increible la usamos casi todos los dias y el refrigerador y la estufa funcionaban perfecto sin ningun problema', createdAt: '2026-05-29T00:00:00.000Z' },
    { id: 160, name: 'Amanda C.', rating: 5, comment: 'We came with the whole family and the terrace ended up being our favorite part of the whole building. The building feels really calm, good neighbors and a nice overall vibe.', createdAt: '2025-12-15T00:00:00.000Z' },
    { id: 157, name: 'Justin R.', rating: 4, comment: 'We could just wander without a plan and always find something good nearby. Completely exceeded what we expected.', createdAt: '2025-07-18T00:00:00.000Z' },
    { id: 159, name: 'Amanda M.', rating: 4, comment: 'we used the building\'s private cinema room one night, such a fun extra, didn\'t expect such a great view from the window, nice surprise', createdAt: '2025-04-20T00:00:00.000Z' },
  ],
  'guadalajara-tres60-acueducto-torre-norte-62': [
    { id: 165, name: 'Christopher R.', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot and the building is really quiet slept great despite being in a central area', createdAt: '2026-04-11T00:00:00.000Z' },
    { id: 164, name: 'David W.', rating: 4, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, plenty of storage space for our stuff, wasn\'t expecting that', createdAt: '2025-12-06T00:00:00.000Z' },
    { id: 161, name: 'Emiliano H.', rating: 3, comment: 'vinimos por trabajo y los ninos no querian salir de la alberca la pasaron increible ahi todos los dias el aire acondicionado funcionaba perfecto algo importante con el calor de la zona', createdAt: '2025-11-30T00:00:00.000Z' },
    { id: 162, name: 'Alejandro S.', rating: 5, comment: 'La sala de cine fue el plan perfecto para una noche de lluvia. Ni una mota de polvo, se ve que cuidan mucho los detalles.', createdAt: '2025-07-17T00:00:00.000Z' },
    { id: 163, name: 'Sebastian S.', rating: 5, comment: 'nos quedamos una semana y el elevador funcionaba perfecto, nunca tuvimos que esperar mucho', createdAt: '2024-12-31T00:00:00.000Z' },
  ],
  'guadalajara-av-montevideo-3550-63': [
    { id: 166, name: 'Santiago L.', rating: 4, comment: 'Buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui. El departamento estaba impecable cuando llegamos, se nota que lo cuidan bien. Totalmente recomendado.', createdAt: '2026-02-04T00:00:00.000Z' },
    { id: 167, name: 'Ashley J.', rating: 3, comment: 'internet speed was honestly better than at home', createdAt: '2024-08-28T00:00:00.000Z' },
  ],
  'guadalajara-av-juan-palomar-y-arias-200-64': [
    { id: 171, name: 'Kevin T.', rating: 5, comment: 'the terrace ended up being our favorite part of the whole building, check-in was super easy thanks to the clear instructions they sent ahead of time', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 168, name: 'Gerardo R.', rating: 4, comment: 'nos quedamos una semana y el metro quedaba a unos minutos, muy facil movernos por la ciudad', createdAt: '2026-01-29T00:00:00.000Z' },
    { id: 170, name: 'Diego V.', rating: 5, comment: 'Ni una mota de polvo, se ve que cuidan mucho los detalles.', createdAt: '2025-12-18T00:00:00.000Z' },
    { id: 169, name: 'Santiago D.', rating: 3, comment: 'nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca, el refrigerador y la estufa funcionaban perfecto, sin ningun problema, sin duda volveriamos a reservar aqui', createdAt: '2025-10-25T00:00:00.000Z' },
  ],
  'guadalajara-real-de-acueducto-65': [
    { id: 174, name: 'Maria Jose C.', rating: 5, comment: 'vinimos por trabajo y una noche usamos la sala de cine del edificio, detalle que no esperabamos, la cama era muy comoda, dormimos increible todas las noches', createdAt: '2026-02-23T00:00:00.000Z' },
    { id: 176, name: 'Luis Fernando R.', rating: 3, comment: 'el gimnasio estaba muy completo no tuve que cancelar mi rutina de ejercicio la cocina estaba muy bien equipada pudimos cocinar sin problema varios dias', createdAt: '2025-11-28T00:00:00.000Z' },
    { id: 172, name: 'Megan S.', rating: 5, comment: 'the photos dont do justice to how much light comes in during the day, completely exceeded what we expected', createdAt: '2025-09-25T00:00:00.000Z' },
    { id: 173, name: 'Santiago A.', rating: 5, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, cualquier duda que tuvimos se resolvio en minutos por WhatsApp, totalmente recomendado', createdAt: '2025-05-23T00:00:00.000Z' },
    { id: 175, name: 'Amanda R.', rating: 5, comment: 'had to work during the trip and the building\'s coworking space made it easy, there\'s security at the entrance, made everything feel really secure', createdAt: '2024-04-25T00:00:00.000Z' },
  ],
  'guadalajara-blvd-puerta-de-hierro-5065-67': [
    { id: 177, name: 'Rodrigo V.', rating: 4, comment: 'los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias, el bano y la cocina estaban perfectamente limpios, algo que siempre agradezco', createdAt: '2025-11-11T00:00:00.000Z' },
    { id: 178, name: 'Brian R.', rating: 4, comment: 'This was our second time booking here and the coworking space was perfect for getting work done during the trip, good wifi and quiet. Arrived late because of our flight and check-in was still incredibly quick. Completely exceeded what we expected.', createdAt: '2024-11-17T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-68': [
    { id: 179, name: 'Brandon T.', rating: 5, comment: 'Used the gym most mornings before heading out to work. Compared several options and this was by far the best value for the price.', createdAt: '2025-10-19T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-tanque-15-69': [
    { id: 180, name: 'Lauren M.', rating: 4, comment: 'spent a few mornings reading in the garden, really nice quiet space, very close to the metro, got around the whole city without any hassle', createdAt: '2025-06-23T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-70': [
    { id: 181, name: 'Alejandro G.', rating: 3, comment: 'No usamos Uber casi nada, todo estaba a distancia caminable.', createdAt: '2024-08-17T00:00:00.000Z' },
    { id: 182, name: 'Ximena G.', rating: 4, comment: 'vinimos con toda la familia y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui, tener buen aire acondicionado hizo toda la diferencia con el clima, sin duda volveriamos a reservar aqui', createdAt: '2024-05-06T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-37766-san-miguel-de-allende-71': [
    { id: 183, name: 'Renata C.', rating: 5, comment: 'Los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias. Hasta tenia especias basicas en la cocina, detalle que no esperabamos.', createdAt: '2024-07-13T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-av-fray-juan-de-san-miguel-88-72': [
    { id: 184, name: 'David S.', rating: 5, comment: 'Came here for work and the gym in the building was well equipped, kept up with my workouts the whole trip. The view from the apartment is beautiful, never got tired of it.', createdAt: '2024-07-19T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-73': [
    { id: 185, name: 'Jennifer A.', rating: 5, comment: 'bathroom and kitchen were both perfectly clean, something i always appreciate', createdAt: '2025-10-12T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-w7p3rm-75': [
    { id: 186, name: 'Sebastian D.', rating: 3, comment: 'Reservamos por la ubicación pero la alberca terminó siendo lo mejor del edificio. El baño estaba muy bien equipado y con buena presión de agua.', createdAt: '2026-03-30T00:00:00.000Z' },
    { id: 187, name: 'Javier R.', rating: 3, comment: 'La terraza tiene una vista espectacular, pasamos varias tardes ahi. El bano y la cocina estaban perfectamente limpios, algo que siempre agradezco. Sin duda volveriamos a reservar aqui.', createdAt: '2024-11-15T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-relox-22-76': [
    { id: 188, name: 'Javier V.', rating: 4, comment: 'Despues de investigar varias opciones, el balcon fue una sorpresa muy agradable, desayunabamos ahi todos los dias. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2026-03-06T00:00:00.000Z' },
    { id: 189, name: 'Paulina B.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2025-12-16T00:00:00.000Z' },
    { id: 191, name: 'Nicole C.', rating: 4, comment: 'Great value for what you get, we\'d definitely book again.', createdAt: '2025-03-10T00:00:00.000Z' },
    { id: 190, name: 'David M.', rating: 5, comment: 'This was our second time booking here and fridge and stove both worked perfectly, no issues at all.', createdAt: '2024-12-30T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-de-montitlan-7-77': [
    { id: 195, name: 'David L.', rating: 5, comment: 'booked last minute and having dedicated parking made things so much easier, no stress finding a spot, you can tell there\'s an actual team behind this, not just an automated contact', createdAt: '2025-10-18T00:00:00.000Z' },
    { id: 194, name: 'Maria Jose B.', rating: 5, comment: 'el metro quedaba a unos minutos, muy facil movernos por la ciudad', createdAt: '2025-10-09T00:00:00.000Z' },
    { id: 192, name: 'Sofia L.', rating: 4, comment: 'Pasamos varias mañanas leyendo en el jardín, un espacio muy agradable. El refrigerador y la estufa funcionaban perfecto, sin ningún problema. Sin duda volveríamos a reservar aquí.', createdAt: '2025-10-08T00:00:00.000Z' },
    { id: 196, name: 'Amanda L.', rating: 5, comment: 'worked remotely the whole week and the internet never let me down', createdAt: '2025-08-07T00:00:00.000Z' },
    { id: 193, name: 'Christopher Y.', rating: 4, comment: 'Everything was clean and tidy, exceeded our expectations honestly. Overall a great experience.', createdAt: '2024-03-25T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-privada-norte-64-ejido-de-san-juan-xido-78': [
    { id: 197, name: 'Gerardo T.', rating: 3, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Ni una mota de polvo, se ve que cuidan mucho los detalles.', createdAt: '2026-04-26T00:00:00.000Z' },
    { id: 198, name: 'Paulina D.', rating: 4, comment: 'El jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia. No escuchamos ruido de los vecinos ni de la calle, sorprendentemente tranquilo.', createdAt: '2026-01-20T00:00:00.000Z' },
    { id: 199, name: 'Brian C.', rating: 4, comment: 'every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that, so much natural light in the apartment, made it feel really spacious', createdAt: '2025-07-24T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-dolores-hidalgo-san-miguel-de-allende-79': [
    { id: 201, name: 'Andres M.', rating: 5, comment: 'esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente', createdAt: '2026-04-22T00:00:00.000Z' },
    { id: 202, name: 'Justin A.', rating: 5, comment: 'Booked last minute and cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2025-01-22T00:00:00.000Z' },
    { id: 200, name: 'Rodrigo D.', rating: 4, comment: 'Pasamos varias mañanas leyendo en el jardín, un espacio muy agradable. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-06-03T00:00:00.000Z' },
  ],
  'san-miguel-de-allende-carretera-80': [
    { id: 205, name: 'Ashley J.', rating: 5, comment: 'This was our second time booking here and the terrace ended up being our favorite part of the whole building. Didn\'t cook much but when we did the kitchen had everything. Completely exceeded what we expected.', createdAt: '2026-04-27T00:00:00.000Z' },
    { id: 206, name: 'Alejandro T.', rating: 5, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, no esperabamos una vista tan buena desde la ventana, gran sorpresa, en general una experiencia excelente', createdAt: '2025-11-24T00:00:00.000Z' },
    { id: 204, name: 'Regina C.', rating: 5, comment: 'el check-in fue super sencillo, sin complicaciones ni esperas, en general una experiencia excelente', createdAt: '2025-09-20T00:00:00.000Z' },
    { id: 203, name: 'Santiago D.', rating: 5, comment: 'Vinimos por trabajo y la cama era muy cómoda, dormimos increíble todas las noches. Totalmente recomendado.', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 207, name: 'Sebastian O.', rating: 5, comment: 'nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia, en general una experiencia excelente', createdAt: '2024-10-17T00:00:00.000Z' },
  ],
  'merida-carretera-merida-progreso-km-17-merida-y-82': [
    { id: 208, name: 'David Y.', rating: 4, comment: 'the metro was just a few minutes away, made getting around the city really easy', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 209, name: 'Samantha D.', rating: 4, comment: 'The pool was amazing, we used it almost every day during our stay. Shower had great water pressure, which you don\'t always get. Highly recommend.', createdAt: '2025-10-03T00:00:00.000Z' },
  ],
  'merida-av-cabo-nte-1901-merida-83': [
    { id: 213, name: 'Sebastian D.', rating: 4, comment: 'No escuchamos ruido de los vecinos ni de la calle, sorprendentemente tranquilo.', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 212, name: 'Emiliano T.', rating: 5, comment: 'La terraza terminó siendo nuestro lugar favorito de todo el edificio. Había mucho espacio para guardar nuestras cosas, algo que no esperábamos.', createdAt: '2025-02-15T00:00:00.000Z' },
    { id: 211, name: 'Sebastian R.', rating: 5, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, el metro quedaba a unos minutos, muy facil movernos por la ciudad', createdAt: '2025-02-05T00:00:00.000Z' },
    { id: 210, name: 'Rodrigo C.', rating: 3, comment: 'Muy cerca del metro, nos movimos por toda la ciudad sin complicaciones. Totalmente recomendado.', createdAt: '2024-07-13T00:00:00.000Z' },
  ],
  'merida-c-61-84': [
    { id: 214, name: 'Brandon L.', rating: 5, comment: 'Every evening we\'d head up to the roof with a drink to watch the sunset, won\'t forget that. Fridge and stove both worked perfectly, no issues at all.', createdAt: '2024-12-26T00:00:00.000Z' },
  ],
  'merida-calle-33-200-por-22-y-28-85': [
    { id: 218, name: 'Ana Sofia G.', rating: 5, comment: 'zona con mucha vida, siempre habia algo pasando cerca', createdAt: '2026-02-23T00:00:00.000Z' },
    { id: 215, name: 'Jessica D.', rating: 4, comment: 'Having dedicated parking made things so much easier, no stress finding a spot. Not a speck of dust anywhere, you can tell they care about the details.', createdAt: '2026-02-06T00:00:00.000Z' },
    { id: 216, name: 'Brandon C.', rating: 5, comment: 'The garden area was a peaceful little spot to relax between outings. Check-in was super easy thanks to the clear instructions they sent ahead of time.', createdAt: '2025-07-27T00:00:00.000Z' },
    { id: 217, name: 'Emily D.', rating: 3, comment: 'Loved the roof garden — perfect spot for sunset with a drink. The elevator worked great, never had to wait around for it.', createdAt: '2025-06-20T00:00:00.000Z' },
  ],
  'merida-la-vista-luxury-towers-20875-87': [
    { id: 220, name: 'Ashley Y.', rating: 4, comment: 'loved the roof garden — perfect spot for sunset with a drink, everything was clean and tidy, exceeded our expectations honestly, highly recommend', createdAt: '2025-09-24T00:00:00.000Z' },
    { id: 219, name: 'Lauren C.', rating: 3, comment: 'not having to worry about where to park was such a relief, the building feels really calm, good neighbors and a nice overall vibe', createdAt: '2024-05-03T00:00:00.000Z' },
  ],
  'merida-komchen-88': [
    { id: 222, name: 'Diego B.', rating: 3, comment: 'Celebramos nuestro aniversario aqui y alberca hermosa, limpia y con muy buena vista, un plus que no considerabamos al reservar. La zona es muy segura y tranquila, se siente muy bien caminar de noche.', createdAt: '2026-03-26T00:00:00.000Z' },
    { id: 221, name: 'Jennifer S.', rating: 4, comment: 'We celebrated our anniversary here and every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that. Having good air conditioning made a huge difference with the weather.', createdAt: '2024-07-29T00:00:00.000Z' },
  ],
  'merida-san-nicolas-periferico-89': [
    { id: 223, name: 'Rodrigo O.', rating: 5, comment: 'Reservamos por la ubicación pero la alberca terminó siendo lo mejor del edificio. La velocidad de internet fue mejor que en mi casa, sin exagerar. En general una experiencia excelente.', createdAt: '2026-01-09T00:00:00.000Z' },
    { id: 224, name: 'Renata D.', rating: 5, comment: 'la relacion precio-calidad es muy buena, definitivamente volveriamos', createdAt: '2026-01-01T00:00:00.000Z' },
  ],
  'merida-c-21-90': [
    { id: 225, name: 'Valeria A.', rating: 5, comment: 'tuvimos un pequeno problema con el aire acondicionado y lo resolvieron el mismo dia', createdAt: '2025-06-22T00:00:00.000Z' },
    { id: 226, name: 'Megan B.', rating: 5, comment: 'Not having to worry about where to park was such a relief. Bathroom and kitchen were both perfectly clean, something I always appreciate.', createdAt: '2025-04-11T00:00:00.000Z' },
    { id: 227, name: 'Andrew C.', rating: 5, comment: 'We used the building\'s private cinema room one night, such a fun extra. Check-in was super simple, no complications or waiting around.', createdAt: '2024-06-20T00:00:00.000Z' },
  ],
  'merida-c-23-sn-91': [
    { id: 228, name: 'Andres T.', rating: 4, comment: 'La cama era muy comoda, dormimos increible todas las noches.', createdAt: '2025-05-08T00:00:00.000Z' },
  ],
  'merida-zona-industrial-92': [
    { id: 231, name: 'Sebastian A.', rating: 5, comment: 'reservamos a ultima hora y reservamos por la ubicacion pero la alberca termino siendo lo mejor del edificio, el departamento tiene mucha luz natural, se siente muy amplio y comodo', createdAt: '2026-01-02T00:00:00.000Z' },
    { id: 232, name: 'Katie M.', rating: 4, comment: 'Very close to the metro, got around the whole city without any hassle.', createdAt: '2025-09-08T00:00:00.000Z' },
    { id: 230, name: 'Nicole S.', rating: 5, comment: 'Every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that. Kitchen had good dishware and utensils, cooking there felt easy.', createdAt: '2025-05-10T00:00:00.000Z' },
    { id: 229, name: 'Diego C.', rating: 3, comment: 'fue muy practico tener estacionamiento propio no batallamos nada con eso y la colonia tiene un ambiente increible cafes y restaurantes por todos lados', createdAt: '2024-07-20T00:00:00.000Z' },
  ],
  'merida-zona-industrial-93': [
    { id: 234, name: 'Daniela T.', rating: 5, comment: 'Tener buen aire acondicionado hizo toda la diferencia con el clima.', createdAt: '2025-02-02T00:00:00.000Z' },
    { id: 233, name: 'Rodrigo D.', rating: 5, comment: 'No tener que preocuparnos por dónde dejar el coche fue un alivio enorme. La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.', createdAt: '2024-10-29T00:00:00.000Z' },
  ],
  'merida-privada-kutz-94': [
    { id: 238, name: 'Jessica J.', rating: 5, comment: 'booked for the location but the pool ended up being the highlight of the building, the view from the apartment is beautiful, never got tired of it', createdAt: '2025-08-16T00:00:00.000Z' },
    { id: 236, name: 'Brian J.', rating: 5, comment: 'spent a few mornings reading in the garden, really nice quiet space, there\'s security at the entrance, made everything feel really secure', createdAt: '2025-07-30T00:00:00.000Z' },
    { id: 235, name: 'Diego C.', rating: 5, comment: 'Hasta tenia especias basicas en la cocina, detalle que no esperabamos.', createdAt: '2025-03-05T00:00:00.000Z' },
    { id: 237, name: 'Brian L.', rating: 5, comment: 'having our own outdoor space made the apartment feel so much bigger, the bathroom was well equipped with really good water pressure', createdAt: '2024-12-12T00:00:00.000Z' },
  ],
  'merida-c-27-197-95': [
    { id: 242, name: 'Sarah D.', rating: 3, comment: 'We came with the whole family and not having to worry about where to park was such a relief. The kitchen was well stocked, we cooked several meals during our stay. Would definitely book here again.', createdAt: '2026-01-04T00:00:00.000Z' },
    { id: 243, name: 'Sarah W.', rating: 4, comment: 'After days of walking around the city, that bed felt like home.', createdAt: '2025-02-09T00:00:00.000Z' },
    { id: 239, name: 'Rodrigo S.', rating: 5, comment: 'Reservamos a ultima hora y cualquier duda que tuvimos se resolvio en minutos por WhatsApp.', createdAt: '2025-01-31T00:00:00.000Z' },
    { id: 241, name: 'David L.', rating: 3, comment: 'we celebrated our anniversary here and if there\'s one thing that made this trip, it was the pool, we loved it, the building is really quiet, slept great despite being in a central area, would definitely book here again', createdAt: '2024-06-30T00:00:00.000Z' },
    { id: 240, name: 'Andres B.', rating: 4, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2024-04-07T00:00:00.000Z' },
  ],
  'merida-c-25-v-96': [
    { id: 244, name: 'Maria Jose M.', rating: 4, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días. Sin duda volveríamos a reservar aquí.', createdAt: '2025-09-05T00:00:00.000Z' },
  ],
  'monterrey-av-alfonso-reyes-1812-97': [
    { id: 246, name: 'Regina B.', rating: 4, comment: 'El cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista. Las fotos no le hacen justicia a la cantidad de luz que entra en el dia. Totalmente recomendado.', createdAt: '2024-08-04T00:00:00.000Z' },
    { id: 245, name: 'Mariana C.', rating: 5, comment: 'No esperabamos que la alberca fuera tan grande, terminamos pasando ahi las tardes enteras. Comparamos varias opciones y esta fue por mucho la mejor relacion precio-calidad.', createdAt: '2024-04-29T00:00:00.000Z' },
  ],
  'monterrey-cumbres-de-cordoba-208-98': [
    { id: 250, name: 'Ashley Y.', rating: 5, comment: 'Traveling with a pet always feels risky but we had zero issues here. Didn\'t cook much but when we did the kitchen had everything.', createdAt: '2025-08-21T00:00:00.000Z' },
    { id: 248, name: 'Emiliano D.', rating: 4, comment: 'Vinimos por trabajo y la terraza tiene una vista espectacular, pasamos varias tardes ahi. La velocidad de internet fue mejor que en mi casa, sin exagerar. Supero lo que esperabamos por completo.', createdAt: '2025-06-06T00:00:00.000Z' },
    { id: 249, name: 'Mariana H.', rating: 3, comment: 'reservamos a ultima hora y no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-12-21T00:00:00.000Z' },
    { id: 247, name: 'Ana Sofia H.', rating: 5, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Comparamos varias opciones y esta fue por mucho la mejor relacion precio-calidad. Totalmente recomendado.', createdAt: '2024-03-02T00:00:00.000Z' },
  ],
  'monterrey-c-washington-1414-ote-99': [
    { id: 252, name: 'Katie K.', rating: 4, comment: 'Don\'t usually mention the gym in reviews but this one was better equipped than most paid gyms. There\'s security at the entrance, made everything feel really secure.', createdAt: '2025-02-10T00:00:00.000Z' },
    { id: 251, name: 'Javier D.', rating: 4, comment: 'hasta tenia especias basicas en la cocina, detalle que no esperabamos', createdAt: '2025-01-11T00:00:00.000Z' },
    { id: 253, name: 'Jennifer W.', rating: 4, comment: 'having dedicated parking made things so much easier no stress finding a spot and worked remotely the whole week and the internet never let me down', createdAt: '2024-02-01T00:00:00.000Z' },
  ],
  'monterrey-p-dinastia-sn-100': [
    { id: 255, name: 'Santiago B.', rating: 5, comment: 'despues de investigar varias opciones, jugamos padel una tarde en las canchas del edificio, muy buena instalacion, la colonia tiene un ambiente increible, cafes y restaurantes por todos lados, totalmente recomendado', createdAt: '2025-04-05T00:00:00.000Z' },
    { id: 257, name: 'Diego M.', rating: 3, comment: 'vinimos con toda la familia y el roof garden del edificio es hermoso al atardecer muy recomendable y el bano estaba muy bien equipado y con buena presion de agua y supero lo que esperabamos por completo', createdAt: '2024-12-04T00:00:00.000Z' },
    { id: 258, name: 'Gerardo T.', rating: 4, comment: 'No suelo mencionar el gimnasio en reseñas pero este estaba mejor equipado que muchos gyms de paga. Había mucho espacio para guardar nuestras cosas, algo que no esperábamos.', createdAt: '2024-11-16T00:00:00.000Z' },
    { id: 256, name: 'Justin A.', rating: 3, comment: 'we used the jacuzzi almost every night, a luxury we weren\'t counting on when booking, having good air conditioning made a huge difference with the weather', createdAt: '2024-10-24T00:00:00.000Z' },
    { id: 254, name: 'Luis Fernando R.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2024-03-01T00:00:00.000Z' },
  ],
  'monterrey-miguel-hidalgo-y-costilla-1415-101': [
    { id: 261, name: 'Megan R.', rating: 4, comment: 'pleasant surprise finding such a well equipped gym right in the building, the view from the apartment is beautiful, never got tired of it', createdAt: '2026-07-24T00:00:00.000Z' },
    { id: 260, name: 'Regina G.', rating: 5, comment: 'Cualquier duda que tuvimos se resolvio en minutos por WhatsApp.', createdAt: '2025-07-16T00:00:00.000Z' },
    { id: 262, name: 'Andrew L.', rating: 3, comment: 'Booked for the location but the pool ended up being the highlight of the building. Perfect spot for anyone who wants to explore the city without needing a car.', createdAt: '2024-07-21T00:00:00.000Z' },
    { id: 259, name: 'Diego S.', rating: 4, comment: 'despues de investigar varias opciones, el check-in fue super sencillo, sin complicaciones ni esperas', createdAt: '2023-10-01T00:00:00.000Z' },
  ],
  'monterrey-jesus-reyes-ferreyra-103-102': [
    { id: 264, name: 'Andres V.', rating: 4, comment: 'a dos cuadras habia de todo mercado farmacia cafeterias totalmente recomendado', createdAt: '2025-10-20T00:00:00.000Z' },
    { id: 265, name: 'Christopher C.', rating: 5, comment: 'wasn\'t expecting a jacuzzi and it ended up being one of our favorite parts of the trip, the elevator worked great, never had to wait around for it', createdAt: '2024-09-06T00:00:00.000Z' },
    { id: 266, name: 'Daniela C.', rating: 5, comment: 'La sala de cine fue el plan perfecto para una noche de lluvia. El transporte publico quedaba a la vuelta, facilisimo llegar a todos lados.', createdAt: '2024-05-04T00:00:00.000Z' },
    { id: 263, name: 'Jennifer C.', rating: 3, comment: 'Traveling with a pet always feels risky but we had zero issues here. The building is really quiet, slept great despite being in a central area.', createdAt: '2024-02-18T00:00:00.000Z' },
  ],
  'monterrey-los-nogales-115-104': [
    { id: 267, name: 'Mariana G.', rating: 4, comment: 'buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui, la zona es muy segura y tranquila, se siente muy bien caminar de noche', createdAt: '2025-11-13T00:00:00.000Z' },
  ],
  'monterrey-san-alberto-ote-245-105': [
    { id: 269, name: 'Ximena R.', rating: 3, comment: 'Vinimos por trabajo y la relacion precio-calidad es muy buena, definitivamente volveriamos. Sin duda volveriamos a reservar aqui.', createdAt: '2026-04-15T00:00:00.000Z' },
    { id: 268, name: 'Jennifer J.', rating: 5, comment: 'If there\'s one thing that made this trip, it was the pool, we loved it. Internet speed was honestly better than at home.', createdAt: '2025-12-27T00:00:00.000Z' },
  ],
  'monterrey-av-lazaro-cardenas-2400-106': [
    { id: 273, name: 'Andrew T.', rating: 4, comment: 'loved having our own balcony, we had coffee out there every morning, everything was clean and tidy, exceeded our expectations honestly', createdAt: '2026-04-03T00:00:00.000Z' },
    { id: 270, name: 'Ximena G.', rating: 4, comment: 'Celebramos nuestro aniversario aquí y nos mandaron recomendaciones de la zona sin que las pidiéramos, detalle que se agradece.', createdAt: '2026-03-17T00:00:00.000Z' },
    { id: 271, name: 'Regina A.', rating: 5, comment: 'a dos cuadras habia de todo, mercado, farmacia, cafeterias', createdAt: '2026-02-09T00:00:00.000Z' },
    { id: 272, name: 'Christopher T.', rating: 4, comment: 'The coworking space was perfect for getting work done during the trip, good wifi and quiet. The bed was super comfortable, slept great every night.', createdAt: '2024-11-01T00:00:00.000Z' },
  ],
  'monterrey-av-cto-frida-kahlo-180-109': [
    { id: 274, name: 'Paulina L.', rating: 5, comment: 'el edificio se siente muy tranquilo, buenos vecinos y ambiente agradable', createdAt: '2026-04-11T00:00:00.000Z' },
    { id: 275, name: 'Katie L.', rating: 5, comment: 'Wasn\'t expecting a jacuzzi and it ended up being one of our favorite parts of the trip. Communication over WhatsApp was fast and friendly the whole time.', createdAt: '2026-04-02T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-67a-110': [
    { id: 278, name: 'Christopher R.', rating: 5, comment: 'Managed to keep my workout routine going thanks to the building gym, had everything I needed. Didn\'t cook much but when we did the kitchen had everything.', createdAt: '2024-12-03T00:00:00.000Z' },
    { id: 276, name: 'Megan C.', rating: 4, comment: 'you could tell they clean thoroughly between guests, everything was perfect', createdAt: '2024-05-05T00:00:00.000Z' },
    { id: 277, name: 'Renata B.', rating: 5, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, hay seguridad en la entrada del edificio, se siente muy tranquilo', createdAt: '2024-02-21T00:00:00.000Z' },
  ],
  'nuevo-vallarta-av-mexico-210-112': [
    { id: 279, name: 'Ryan B.', rating: 5, comment: 'The photos dont do justice to how much light comes in during the day.', createdAt: '2026-05-02T00:00:00.000Z' },
    { id: 281, name: 'Rodrigo V.', rating: 4, comment: 'celebramos nuestro aniversario aqui y la ubicacion es excelente, todo quedaba cerca caminando', createdAt: '2025-06-21T00:00:00.000Z' },
    { id: 280, name: 'Renata O.', rating: 4, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, llegamos tarde por el vuelo y aun asi el check-in fue rapidisimo', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 282, name: 'Justin R.', rating: 5, comment: 'the gym in the building was well equipped, kept up with my workouts the whole trip, any question we had was answered in minutes over WhatsApp, overall a great experience', createdAt: '2025-04-26T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-flamingos-113': [
    { id: 283, name: 'Jessica L.', rating: 5, comment: 'the neighborhood has such a great vibe, cafes and restaurants everywhere', createdAt: '2026-04-18T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-paraiso-800-115': [
    { id: 287, name: 'Diego V.', rating: 3, comment: 'el jardin del edificio es muy tranquilo, un buen lugar para desconectar, no escuchamos ruido de los vecinos ni de la calle, sorprendentemente tranquilo', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 286, name: 'Matthew M.', rating: 3, comment: 'booked last minute and everything was two blocks away, market, pharmacy, coffee shops, highly recommend', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 284, name: 'Lauren B.', rating: 4, comment: 'Cooked almost the whole week, the kitchen had literally everything we needed.', createdAt: '2025-08-02T00:00:00.000Z' },
    { id: 288, name: 'Valeria V.', rating: 5, comment: 'Muy cerca del metro, nos movimos por toda la ciudad sin complicaciones.', createdAt: '2025-03-09T00:00:00.000Z' },
    { id: 285, name: 'Diego D.', rating: 3, comment: 'viajamos con nuestro perro y todo salio perfecto pet friendly de verdad nos hicieron sentir acompanados todo el viaje siempre disponibles para lo que necesitaramos', createdAt: '2024-02-03T00:00:00.000Z' },
  ],
  'nuevo-vallarta-bucerias-116': [
    { id: 289, name: 'Jennifer B.', rating: 4, comment: 'The jacuzzi was a nice surprise, great way to unwind in the evenings. Kitchen had good dishware and utensils, cooking there felt easy. Highly recommend.', createdAt: '2026-04-06T00:00:00.000Z' },
    { id: 290, name: 'Andres C.', rating: 4, comment: 'Buscábamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aquí. No esperábamos una vista tan buena desde la ventana, gran sorpresa.', createdAt: '2025-09-01T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-costero-258-117': [
    { id: 291, name: 'Brian A.', rating: 5, comment: 'shower had great water pressure, which you dont always get, highly recommend', createdAt: '2024-10-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-lazaro-cardenas-240a-118': [
    { id: 292, name: 'Valeria A.', rating: 3, comment: 'Nos encanto tener balcon propio, buena vista y espacio para sentarnos afuera. El metro quedaba a unos minutos, muy facil movernos por la ciudad. Supero lo que esperabamos por completo.', createdAt: '2024-12-01T00:00:00.000Z' },
    { id: 293, name: 'Sarah D.', rating: 4, comment: 'great value for what you get wed definitely book again', createdAt: '2023-11-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-blvd-riviera-nayarit-km-1-119': [
    { id: 297, name: 'Jessica D.', rating: 5, comment: 'Bathroom and kitchen were both perfectly clean, something I always appreciate. Overall a great experience.', createdAt: '2026-05-27T00:00:00.000Z' },
    { id: 296, name: 'Emily H.', rating: 4, comment: 'Felt taken care of the whole trip, always available whenever we needed something. Highly recommend.', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 294, name: 'Lauren L.', rating: 4, comment: 'didn\'t think the balcony would matter this much until we used it every single day, the location was excellent, everything was within walking distance', createdAt: '2025-12-25T00:00:00.000Z' },
    { id: 298, name: 'Ana Sofia R.', rating: 4, comment: 'No hay nada como poder caminar a la playa sin depender de un coche. El wifi era muy rapido, pude trabajar sin ningun problema de conexion.', createdAt: '2025-08-22T00:00:00.000Z' },
    { id: 295, name: 'Christopher Y.', rating: 3, comment: 'Great value for what you get, wed definitely book again.', createdAt: '2024-12-13T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-182-120': [
    { id: 299, name: 'Renata B.', rating: 5, comment: 'usamos el jacuzzi casi todas las noches, un lujo que no considerabamos al reservar, el bano y la cocina estaban perfectamente limpios, algo que siempre agradezco', createdAt: '2026-03-04T00:00:00.000Z' },
    { id: 300, name: 'Camila M.', rating: 3, comment: 'el wifi era muy rapido, pude trabajar sin ningun problema de conexion', createdAt: '2025-11-02T00:00:00.000Z' },
    { id: 301, name: 'Matthew K.', rating: 5, comment: 'Didn\'t expect a padel court to be available, made good use of it a few times. The photos dont do justice to how much light comes in during the day. Would definitely book here again.', createdAt: '2025-03-14T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-la-marina-72-122': [
    { id: 303, name: 'Brian B.', rating: 5, comment: 'Booked last minute and everything was two blocks away, market, pharmacy, coffee shops.', createdAt: '2025-11-16T00:00:00.000Z' },
    { id: 302, name: 'Mariana V.', rating: 5, comment: 'Fue nuestro segundo viaje aquí y hasta tenía especias básicas en la cocina, detalle que no esperábamos.', createdAt: '2025-10-21T00:00:00.000Z' },
    { id: 304, name: 'Gerardo M.', rating: 4, comment: 'Los ninos no querian salir de la alberca, la pasaron increible ahi todos los dias. Hay seguridad en la entrada del edificio, se siente muy tranquilo.', createdAt: '2025-09-13T00:00:00.000Z' },
  ],
  'nuevo-vallarta-benito-juarez-6-124': [
    { id: 305, name: 'Luis Fernando L.', rating: 4, comment: 'Fue muy practico tener estacionamiento propio, no batallamos nada con eso. Se nota que hay un equipo detras que realmente atiende, no solo un contacto automatico.', createdAt: '2026-02-13T00:00:00.000Z' },
    { id: 307, name: 'Alejandro V.', rating: 5, comment: 'Vinimos por trabajo y viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. La colonia tiene un ambiente increíble, cafés y restaurantes por todos lados. En general una experiencia excelente.', createdAt: '2025-04-22T00:00:00.000Z' },
    { id: 308, name: 'Sarah K.', rating: 4, comment: 'Every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that. The view from the apartment is beautiful, never got tired of it.', createdAt: '2024-05-15T00:00:00.000Z' },
    { id: 306, name: 'Ximena M.', rating: 4, comment: 'La playa quedaba a unos minutos caminando, exactamente lo que buscabamos. Se nota que limpian a fondo entre huespedes, todo estaba perfecto. Supero lo que esperabamos por completo.', createdAt: '2024-03-17T00:00:00.000Z' },
  ],
  'nuevo-vallarta-ave-paseo-cocoteros-h65-125': [
    { id: 312, name: 'Jennifer L.', rating: 5, comment: 'fridge and stove both worked perfectly, no issues at all, highly recommend', createdAt: '2026-07-08T00:00:00.000Z' },
    { id: 309, name: 'Gerardo R.', rating: 3, comment: 'fue nuestro segundo viaje aqui y la terraza termino siendo nuestro lugar favorito de todo el edificio, el metro quedaba a unos minutos, muy facil movernos por la ciudad', createdAt: '2026-03-29T00:00:00.000Z' },
    { id: 311, name: 'Javier B.', rating: 3, comment: 'reservamos a ultima hora y el bano y la cocina estaban perfectamente limpios, algo que siempre agradezco', createdAt: '2026-02-16T00:00:00.000Z' },
    { id: 310, name: 'Carlos M.', rating: 3, comment: 'sorpresa agradable encontrar un gym tan bien equipado en el edificio, nos mandaron recomendaciones de la zona sin que las pidieramos, detalle que se agradece, sin duda volveriamos a reservar aqui', createdAt: '2025-12-31T00:00:00.000Z' },
  ],
  'nuevo-vallarta-km138-puerto-vallartatepic-126': [
    { id: 313, name: 'Valeria R.', rating: 5, comment: 'El aire acondicionado funcionaba perfecto, algo importante con el calor de la zona.', createdAt: '2025-06-30T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-127': [
    { id: 315, name: 'Fernanda V.', rating: 4, comment: 'Vinimos con toda la familia y la comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento.', createdAt: '2026-03-12T00:00:00.000Z' },
    { id: 318, name: 'Ashley T.', rating: 5, comment: 'Arrived late because of our flight and check-in was still incredibly quick.', createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 317, name: 'Valeria S.', rating: 3, comment: 'tener buen aire acondicionado hizo toda la diferencia con el clima, totalmente recomendado', createdAt: '2025-09-16T00:00:00.000Z' },
    { id: 316, name: 'Sofia V.', rating: 5, comment: 'no esperabamos tener cancha de padel disponible, la aprovechamos varias veces, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-04-23T00:00:00.000Z' },
    { id: 314, name: 'Camila B.', rating: 5, comment: 'La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días. Superó lo que esperábamos por completo.', createdAt: '2025-01-27T00:00:00.000Z' },
  ],
  'nuevo-vallarta-via-8-129': [
    { id: 319, name: 'Amanda S.', rating: 5, comment: 'The neighborhood has such a great vibe, cafes and restaurants everywhere. Highly recommend.', createdAt: '2025-06-08T00:00:00.000Z' },
    { id: 320, name: 'Brian A.', rating: 4, comment: 'came here for work and the pool was amazing, we used it almost every day during our stay, felt taken care of the whole trip, always available whenever we needed something', createdAt: '2023-12-07T00:00:00.000Z' },
  ],
  'nuevo-vallarta-paseo-de-los-cocoteros-130': [
    { id: 323, name: 'Santiago H.', rating: 5, comment: 'La playa quedaba a unos minutos caminando, exactamente lo que buscabamos. La comunicacion con el agente por WhatsApp fue rapida y muy amable en todo momento. Supero lo que esperabamos por completo.', createdAt: '2025-11-13T00:00:00.000Z' },
    { id: 325, name: 'Diego G.', rating: 3, comment: 'Ubicacion perfecta para quien quiere explorar la ciudad sin depender de coche.', createdAt: '2025-10-06T00:00:00.000Z' },
    { id: 324, name: 'Ximena O.', rating: 5, comment: 'vinimos con toda la familia y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui, el transporte publico quedaba a la vuelta, facilisimo llegar a todos lados', createdAt: '2025-08-17T00:00:00.000Z' },
    { id: 322, name: 'Nicole Y.', rating: 4, comment: 'plenty of storage space for our stuff, wasn\'t expecting that', createdAt: '2024-09-23T00:00:00.000Z' },
    { id: 321, name: 'Nicole C.', rating: 4, comment: 'the pool was amazing, we used it almost every day during our stay, didn\'t hear noise from neighbors or the street, surprisingly peaceful, would definitely book here again', createdAt: '2024-09-18T00:00:00.000Z' },
  ],
  'playa-del-carmen-mexico-307-km-294-131': [
    { id: 327, name: 'Tyler H.', rating: 3, comment: 'Booked last minute and the bed was super comfortable, slept great every night.', createdAt: '2026-04-20T00:00:00.000Z' },
    { id: 328, name: 'Fernanda H.', rating: 3, comment: 'El bano y la cocina estaban perfectamente limpios, algo que siempre agradezco. Totalmente recomendado.', createdAt: '2026-02-07T00:00:00.000Z' },
    { id: 326, name: 'Jessica K.', rating: 5, comment: 'We stayed a week and the bathroom was well equipped with really good water pressure.', createdAt: '2025-06-04T00:00:00.000Z' },
  ],
  'playa-del-carmen-ciudad-mayakoba-132': [
    { id: 329, name: 'Diego M.', rating: 3, comment: 'El refrigerador y la estufa funcionaban perfecto, sin ningun problema. Sin duda volveriamos a reservar aqui.', createdAt: '2025-03-31T00:00:00.000Z' },
  ],
  'playa-del-carmen-palmara-residencial-133': [
    { id: 334, name: 'Maria Jose S.', rating: 3, comment: 'El edificio se siente muy tranquilo, buenos vecinos y ambiente agradable.', createdAt: '2026-03-11T00:00:00.000Z' },
    { id: 333, name: 'Ximena G.', rating: 5, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca', createdAt: '2026-02-26T00:00:00.000Z' },
    { id: 330, name: 'Matthew W.', rating: 3, comment: 'pleasant surprise finding such a well equipped gym right in the building, worked remotely the whole week and the internet never let me down', createdAt: '2025-12-17T00:00:00.000Z' },
    { id: 331, name: 'Renata H.', rating: 5, comment: 'Jugamos padel una tarde en las canchas del edificio, muy buena instalacion. El check-in fue super facil gracias a las instrucciones claras que nos mandaron. Totalmente recomendado.', createdAt: '2025-03-03T00:00:00.000Z' },
    { id: 332, name: 'Diego B.', rating: 4, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. Cocinamos casi toda la semana, la cocina tenía absolutamente todo lo necesario.', createdAt: '2024-07-16T00:00:00.000Z' },
  ],
  'playa-del-carmen-av-ctm-20-134': [
    { id: 337, name: 'Michael C.', rating: 4, comment: 'fridge and stove both worked perfectly, no issues at all, completely exceeded what we expected', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 336, name: 'Mariana C.', rating: 5, comment: 'despues de investigar varias opciones la relacion precio-calidad es muy buena definitivamente volveriamos', createdAt: '2025-07-03T00:00:00.000Z' },
    { id: 335, name: 'Santiago G.', rating: 5, comment: 'vinimos por trabajo y la terraza tiene una vista espectacular, pasamos varias tardes ahi, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2025-03-25T00:00:00.000Z' },
  ],
  'playa-del-carmen-calle-38-norte-y-c-flamingos-135': [
    { id: 340, name: 'Ximena O.', rating: 5, comment: 'La cama era muy cómoda, dormimos increíble todas las noches.', createdAt: '2025-03-22T00:00:00.000Z' },
    { id: 338, name: 'Michael H.', rating: 5, comment: 'felt taken care of the whole trip always available whenever we needed something', createdAt: '2024-08-19T00:00:00.000Z' },
    { id: 339, name: 'Megan B.', rating: 5, comment: 'We celebrated our anniversary here and the balcony was a great bonus — nice breeze and a good view of the neighborhood. So much natural light in the apartment, made it feel really spacious.', createdAt: '2023-11-11T00:00:00.000Z' },
  ],
  'playa-del-carmen-p-xaman-ha-mz-18lt-2-136': [
    { id: 341, name: 'Sarah Y.', rating: 4, comment: 'Used the gym most mornings before heading out to work. Check-in was super simple, no complications or waiting around. Completely exceeded what we expected.', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'playa-del-carmen-mx63pf-137': [
    { id: 342, name: 'Rachel S.', rating: 3, comment: 'this was our second time booking here and picked this neighborhood without knowing it and it turned out to be the best call of the trip', createdAt: '2025-07-28T00:00:00.000Z' },
    { id: 343, name: 'Maria Jose D.', rating: 5, comment: 'se nota que limpian a fondo entre huespedes, todo estaba perfecto', createdAt: '2025-03-05T00:00:00.000Z' },
  ],
  'playa-del-carmen-77716-playa-del-carmen-138': [
    { id: 344, name: 'Jennifer A.', rating: 3, comment: 'traveling with a pet always feels risky but we had zero issues here, felt very safe the whole time, the building has good security, overall a great experience', createdAt: '2024-06-23T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-km-95-139': [
    { id: 346, name: 'Katie L.', rating: 5, comment: 'This was our second time booking here and having our own outdoor space made the apartment feel so much bigger. Really well located, close to great restaurants and easy to get around.', createdAt: '2025-08-15T00:00:00.000Z' },
    { id: 345, name: 'Gerardo M.', rating: 3, comment: 'fue muy practico tener estacionamiento propio, no batallamos nada con eso, muy cerca del metro, nos movimos por toda la ciudad sin complicaciones', createdAt: '2025-04-09T00:00:00.000Z' },
  ],
  'playa-del-carmen-carretera-federal-puerto-juarez-140': [
    { id: 348, name: 'Daniela V.', rating: 5, comment: 'Pude mantener mi rutina de ejercicio gracias al gimnasio del edificio, todo el equipo que necesitaba. No esperabamos una vista tan buena desde la ventana, gran sorpresa.', createdAt: '2024-10-21T00:00:00.000Z' },
    { id: 347, name: 'Christopher M.', rating: 5, comment: 'Didn\'t hear noise from neighbors or the street, surprisingly peaceful.', createdAt: '2024-09-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-117-142': [
    { id: 349, name: 'Diego D.', rating: 5, comment: 'Viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Podiamos salir a caminar sin rumbo y siempre encontrabamos algo bueno cerca.', createdAt: '2025-03-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-vela-100-144': [
    { id: 351, name: 'Rodrigo R.', rating: 4, comment: 'el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista, trabaje remoto toda la semana y el internet nunca me fallo, sin duda volveriamos a reservar aqui', createdAt: '2026-06-15T00:00:00.000Z' },
    { id: 352, name: 'Katie J.', rating: 4, comment: 'the terrace ended up being our favorite part of the whole building, the bathroom was well equipped with really good water pressure, highly recommend', createdAt: '2025-04-16T00:00:00.000Z' },
    { id: 350, name: 'Rachel S.', rating: 5, comment: 'Swimming before starting the day became part of the routine thanks to the pool. They sent neighborhood recommendations without us even asking, nice touch.', createdAt: '2024-10-23T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-170-146': [
    { id: 356, name: 'Ximena R.', rating: 5, comment: 'El bano y la cocina estaban perfectamente limpios, algo que siempre agradezco. En general una experiencia excelente.', createdAt: '2026-03-28T00:00:00.000Z' },
    { id: 355, name: 'Justin T.', rating: 3, comment: 'the pool was amazing, we used it almost every day during our stay, wifi speed was great, i worked remotely the whole stay with zero issues', createdAt: '2026-03-01T00:00:00.000Z' },
    { id: 353, name: 'Brandon L.', rating: 4, comment: 'Spent a few mornings reading in the garden, really nice quiet space. The AC worked perfectly, which mattered a lot given how hot it gets there.', createdAt: '2025-07-17T00:00:00.000Z' },
    { id: 354, name: 'Ashley A.', rating: 5, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The elevator worked great, never had to wait around for it. Highly recommend.', createdAt: '2024-12-04T00:00:00.000Z' },
    { id: 357, name: 'Regina R.', rating: 5, comment: 'el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista y la ubicacion es excelente todo quedaba cerca caminando y supero lo que esperabamos por completo', createdAt: '2024-11-24T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-147': [
    { id: 358, name: 'Emiliano M.', rating: 4, comment: 'La terraza termino siendo nuestro lugar favorito de todo el edificio. Esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente. En general una experiencia excelente.', createdAt: '2024-11-30T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-148': [
    { id: 359, name: 'Gerardo O.', rating: 3, comment: 'fue nuestro segundo viaje aqui y el jacuzzi en la noche fue un gran plus, muy relajante despues de caminar todo el dia, la relacion precio-calidad es muy buena, definitivamente volveriamos, sin duda volveriamos a reservar aqui', createdAt: '2026-01-24T00:00:00.000Z' },
    { id: 360, name: 'Valeria A.', rating: 4, comment: 'Despues de dias caminando la ciudad, esa cama se sintio como en casa.', createdAt: '2024-01-01T00:00:00.000Z' },
  ],
  'puerto-vallarta-atun-113-149': [
    { id: 361, name: 'Camila L.', rating: 5, comment: 'vinimos por trabajo y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui, zona con mucha vida, siempre habia algo pasando cerca', createdAt: '2025-07-11T00:00:00.000Z' },
    { id: 362, name: 'Gerardo L.', rating: 5, comment: 'El cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista. Nos sentimos muy seguros todo el tiempo, el edificio tiene buena vigilancia.', createdAt: '2025-06-22T00:00:00.000Z' },
    { id: 363, name: 'Luis Fernando L.', rating: 5, comment: 'Usamos el jacuzzi casi todas las noches, un lujo que no considerábamos al reservar. Llegamos tarde por el vuelo y aun así el check-in fue rapidísimo.', createdAt: '2024-07-03T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-150': [
    { id: 366, name: 'Matthew Y.', rating: 3, comment: 'something as simple as assigned parking made everything way less stressful, so much natural light in the apartment, made it feel really spacious', createdAt: '2026-01-10T00:00:00.000Z' },
    { id: 367, name: 'Ashley K.', rating: 4, comment: 'we used the jacuzzi almost every night, a luxury we weren\'t counting on when booking, public transport was right around the corner, so easy to get anywhere', createdAt: '2025-11-18T00:00:00.000Z' },
    { id: 365, name: 'Javier B.', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2025-07-14T00:00:00.000Z' },
    { id: 364, name: 'Javier C.', rating: 3, comment: 'La colonia tiene un ambiente increible, cafes y restaurantes por todos lados.', createdAt: '2024-09-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-152': [
    { id: 372, name: 'Samantha H.', rating: 3, comment: 'Traveling with a pet always feels risky but we had zero issues here. The view from the apartment is beautiful, never got tired of it.', createdAt: '2026-04-28T00:00:00.000Z' },
    { id: 368, name: 'Gerardo V.', rating: 4, comment: 'Celebramos nuestro aniversario aquí y el área de juegos del edificio estuvo bien para las noches tranquilas. Se nota que limpian a fondo entre huéspedes, todo estaba perfecto.', createdAt: '2025-12-23T00:00:00.000Z' },
    { id: 370, name: 'Emiliano D.', rating: 4, comment: 'reservamos a ultima hora y el bano estaba muy bien equipado y con buena presion de agua', createdAt: '2025-09-29T00:00:00.000Z' },
    { id: 369, name: 'Jessica A.', rating: 3, comment: 'The metro was just a few minutes away, made getting around the city really easy.', createdAt: '2025-08-15T00:00:00.000Z' },
    { id: 371, name: 'Brandon S.', rating: 3, comment: 'After looking at a bunch of options, managed to keep my workout routine going thanks to the building gym, had everything I needed. Having good air conditioning made a huge difference with the weather.', createdAt: '2025-07-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-francisco-medina-ascencio-2870-153': [
    { id: 373, name: 'Carlos S.', rating: 3, comment: 'Nos quedamos una semana y buscabamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aqui. Habia mucho espacio para guardar nuestras cosas, algo que no esperabamos. Sin duda volveriamos a reservar aqui.', createdAt: '2024-05-14T00:00:00.000Z' },
  ],
  'puerto-vallarta-blvd-francisco-medina-ascencio-2485-154': [
    { id: 374, name: 'Brian J.', rating: 5, comment: 'Really well located, close to great restaurants and easy to get around. Highly recommend.', createdAt: '2026-06-13T00:00:00.000Z' },
    { id: 375, name: 'Paulina T.', rating: 4, comment: 'la sala de cine fue el plan perfecto para una noche de lluvia, el elevador funcionaba perfecto, nunca tuvimos que esperar mucho', createdAt: '2025-10-11T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-625-156': [
    { id: 380, name: 'Jonathan T.', rating: 5, comment: 'if there\'s one thing that made this trip it was the pool we loved it you can tell there\'s an actual team behind this not just an automated contact overall a great experience', createdAt: '2025-12-30T00:00:00.000Z' },
    { id: 377, name: 'Justin L.', rating: 5, comment: 'We played a match on the padel court one afternoon — great amenity. Worked remotely the whole week and the internet never let me down. Overall a great experience.', createdAt: '2025-10-04T00:00:00.000Z' },
    { id: 376, name: 'Amanda K.', rating: 4, comment: 'Morning coffee tastes different when you\'re having it on a balcony with that view. The building feels really calm, good neighbors and a nice overall vibe.', createdAt: '2025-09-13T00:00:00.000Z' },
    { id: 378, name: 'Camila D.', rating: 5, comment: 'El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio. Hasta tenia especias basicas en la cocina, detalle que no esperabamos. En general una experiencia excelente.', createdAt: '2025-06-25T00:00:00.000Z' },
    { id: 379, name: 'Rachel A.', rating: 5, comment: 'the building is really quiet, slept great despite being in a central area', createdAt: '2025-02-05T00:00:00.000Z' },
  ],
  'puerto-vallarta-condomunious-puerto-iguana-187-157': [
    { id: 381, name: 'Valeria G.', rating: 5, comment: 'la terraza tiene una vista espectacular, pasamos varias tardes ahi, hasta tenia especias basicas en la cocina, detalle que no esperabamos', createdAt: '2026-06-30T00:00:00.000Z' },
    { id: 383, name: 'Samantha D.', rating: 3, comment: 'came here for work and perfect spot for anyone who wants to explore the city without needing a car', createdAt: '2026-06-30T00:00:00.000Z' },
    { id: 384, name: 'Ricardo V.', rating: 3, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema y la cama era muy comoda dormimos increible todas las noches', createdAt: '2026-02-21T00:00:00.000Z' },
    { id: 382, name: 'Emily A.', rating: 5, comment: 'the photos dont do justice to how much light comes in during the day', createdAt: '2025-06-12T00:00:00.000Z' },
  ],
  'puerto-vallarta-basilio-badillo-475-158': [
    { id: 389, name: 'Valeria V.', rating: 3, comment: 'Nos quedamos una semana y viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad. Nos hicieron sentir acompanados todo el viaje, siempre disponibles para lo que necesitaramos.', createdAt: '2026-05-26T00:00:00.000Z' },
    { id: 388, name: 'Matthew A.', rating: 5, comment: 'morning coffee tastes different when you\'re having it on a balcony with that view, didn\'t cook much but when we did the kitchen had everything, highly recommend', createdAt: '2026-05-03T00:00:00.000Z' },
    { id: 386, name: 'Andrew S.', rating: 5, comment: 'there\'s security at the entrance made everything feel really secure', createdAt: '2026-02-09T00:00:00.000Z' },
    { id: 387, name: 'Rachel K.', rating: 4, comment: 'Every evening wed head up to the roof with a drink to watch the sunset, won\'t forget that. The location was excellent, everything was within walking distance.', createdAt: '2025-12-08T00:00:00.000Z' },
    { id: 385, name: 'Andres A.', rating: 5, comment: 'vinimos por trabajo y esperabamos algo mucho mas basico por ese precio, nos sorprendio gratamente', createdAt: '2025-07-10T00:00:00.000Z' },
  ],
  'puerto-vallarta-c-politecnico-nacional-89int-805-159': [
    { id: 394, name: 'Maria Jose O.', rating: 5, comment: 'fue nuestro segundo viaje aqui y todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2025-02-07T00:00:00.000Z' },
    { id: 393, name: 'Jonathan A.', rating: 3, comment: 'booked last minute and managed to keep my workout routine going thanks to the building gym, had everything i needed, having good air conditioning made a huge difference with the weather', createdAt: '2024-12-13T00:00:00.000Z' },
    { id: 390, name: 'Renata R.', rating: 4, comment: 'Reservamos a ultima hora y nadar antes de empezar el dia se volvio parte de la rutina gracias a la alberca. Se nota que hay un equipo detras que realmente atiende, no solo un contacto automatico. Totalmente recomendado.', createdAt: '2024-10-18T00:00:00.000Z' },
    { id: 392, name: 'Andrew W.', rating: 4, comment: 'Didn\'t think the balcony would matter this much until we used it every single day. The neighborhood has such a great vibe, cafes and restaurants everywhere.', createdAt: '2024-08-18T00:00:00.000Z' },
    { id: 391, name: 'Samantha B.', rating: 3, comment: 'Came here for work and having dedicated parking made things so much easier, no stress finding a spot. The view from the apartment is beautiful, never got tired of it.', createdAt: '2024-05-15T00:00:00.000Z' },
  ],
  'puerto-vallarta-2477-160': [
    { id: 396, name: 'Santiago L.', rating: 5, comment: 'el edificio es muy silencioso, dormimos increible a pesar de estar en zona centrica', createdAt: '2026-06-01T00:00:00.000Z' },
    { id: 395, name: 'Diego M.', rating: 5, comment: 'Despues de investigar varias opciones, si algo hizo que este viaje valiera la pena fue la alberca, la disfrutamos muchisimo. Nos mandaron recomendaciones de la zona sin que las pidieramos, detalle que se agradece. Supero lo que esperabamos por completo.', createdAt: '2025-12-18T00:00:00.000Z' },
  ],
  'puerto-vallarta-maria-montessori-360-161': [
    { id: 397, name: 'Paulina B.', rating: 5, comment: 'El transporte publico quedaba a la vuelta, facilisimo llegar a todos lados.', createdAt: '2023-12-16T00:00:00.000Z' },
  ],
  'puerto-vallarta-av-paseo-de-la-marina-121-162': [
    { id: 401, name: 'Fernanda S.', rating: 3, comment: 'despues de investigar varias opciones, la relacion precio-calidad es muy buena, definitivamente volveriamos, totalmente recomendado', createdAt: '2026-04-14T00:00:00.000Z' },
    { id: 402, name: 'Alejandro C.', rating: 5, comment: 'reservamos a ultima hora y fue muy practico tener estacionamiento propio, no batallamos nada con eso, el check-in fue super sencillo, sin complicaciones ni esperas, en general una experiencia excelente', createdAt: '2025-05-05T00:00:00.000Z' },
    { id: 400, name: 'Valeria D.', rating: 5, comment: 'Tener un espacio exterior propio hizo que el depa se sintiera mucho mas grande. Llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudo muchisimo.', createdAt: '2025-04-07T00:00:00.000Z' },
    { id: 399, name: 'Ricardo C.', rating: 5, comment: 'Pasamos una noche jugando billar en el área común, muy buen ambiente. Cocinamos casi toda la semana, la cocina tenía absolutamente todo lo necesario.', createdAt: '2024-11-03T00:00:00.000Z' },
    { id: 398, name: 'Sarah T.', rating: 5, comment: 'we stayed a week and loved the roof garden — perfect spot for sunset with a drink, communication over WhatsApp was fast and friendly the whole time', createdAt: '2024-02-18T00:00:00.000Z' },
  ],
  'santiago-av-benito-juarez-100-163': [
    { id: 403, name: 'Ashley M.', rating: 4, comment: 'After looking at a bunch of options, worked remotely the whole week and the internet never let me down.', createdAt: '2025-08-02T00:00:00.000Z' },
  ],
  'santiago-mision-de-sta-ines-36-164': [
    { id: 404, name: 'Kevin A.', rating: 4, comment: 'we used the jacuzzi almost every night, a luxury we weren\'t counting on when booking, shower had great water pressure, which you dont always get', createdAt: '2026-03-17T00:00:00.000Z' },
  ],
  'tulum-av-del-parque-165': [
    { id: 405, name: 'Emiliano V.', rating: 4, comment: 'tuvimos un pequeno problema con el aire acondicionado y lo resolvieron el mismo dia en general una experiencia excelente', createdAt: '2026-03-14T00:00:00.000Z' },
  ],
  'tulum-calle-29-region-15-manzan-221-166': [
    { id: 406, name: 'Sofia R.', rating: 5, comment: 'vinimos con toda la familia y aproveche el gym casi todas las mananas antes de salir a trabajar, el departamento estaba impecable cuando llegamos, se nota que lo cuidan bien', createdAt: '2026-05-14T00:00:00.000Z' },
    { id: 407, name: 'Ashley A.', rating: 5, comment: 'This was our second time booking here and the balcony was a great bonus — nice breeze and a good view of the neighborhood. We could just wander without a plan and always find something good nearby. Overall a great experience.', createdAt: '2025-02-03T00:00:00.000Z' },
  ],
  'tulum-carretera-federal-167': [
    { id: 409, name: 'Alejandro R.', rating: 5, comment: 'cualquier duda que tuvimos se resolvio en minutos por WhatsApp, en general una experiencia excelente', createdAt: '2026-04-05T00:00:00.000Z' },
    { id: 408, name: 'Rodrigo C.', rating: 4, comment: 'nos quedamos una semana y ubicacion perfecta para quien quiere explorar la ciudad sin depender de coche, supero lo que esperabamos por completo', createdAt: '2026-04-02T00:00:00.000Z' },
  ],
  'tulum-c-kabah-2-169': [
    { id: 410, name: 'Michael C.', rating: 3, comment: 'We arrived exhausted from a long flight and finding everything this clean really helped.', createdAt: '2025-12-07T00:00:00.000Z' },
    { id: 411, name: 'Carlos O.', rating: 5, comment: 'viajar con mascota siempre da un poco de miedo pero aqui no tuvimos ni un problema, la cocina tenia buena vajilla y utensilios, cocinar ahi se sintio comodo', createdAt: '2025-01-07T00:00:00.000Z' },
  ],
  'tulum-av-coba-170': [
    { id: 412, name: 'Michael J.', rating: 3, comment: 'Pleasant surprise finding such a well equipped gym right in the building. Compared several options and this was by far the best value for the price.', createdAt: '2025-04-29T00:00:00.000Z' },
    { id: 413, name: 'Sofia V.', rating: 3, comment: 'Nos quedamos una semana y viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad. Cocinamos casi toda la semana, la cocina tenía absolutamente todo lo necesario. Totalmente recomendado.', createdAt: '2024-12-25T00:00:00.000Z' },
  ],
  'tulum-av-coba-171': [
    { id: 415, name: 'Christopher M.', rating: 5, comment: 'so much natural light in the apartment made it feel really spacious highly recommend', createdAt: '2025-11-19T00:00:00.000Z' },
    { id: 416, name: 'Rachel L.', rating: 5, comment: 'Our kids didn\'t want to leave the pool, they had the best time there every day. Arrived late because of our flight and check-in was still incredibly quick. Would definitely book here again.', createdAt: '2025-10-28T00:00:00.000Z' },
    { id: 414, name: 'Emiliano S.', rating: 5, comment: 'viajamos con nuestro perro y todo salio perfecto, pet friendly de verdad, el bano y la cocina estaban perfectamente limpios, algo que siempre agradezco, en general una experiencia excelente', createdAt: '2024-12-29T00:00:00.000Z' },
  ],
  'tulum-colonia-172': [
    { id: 419, name: 'Sofia O.', rating: 4, comment: 'no pensamos que el balcon fuera a ser tan importante hasta que lo usamos cada dia, trabaje remoto toda la semana y el internet nunca me fallo', createdAt: '2026-03-19T00:00:00.000Z' },
    { id: 418, name: 'Ximena M.', rating: 5, comment: 'no suelo mencionar el gimnasio en resenas pero este estaba mejor equipado que muchos gyms de paga, la cocina estaba muy bien equipada, pudimos cocinar sin problema varios dias, totalmente recomendado', createdAt: '2025-04-25T00:00:00.000Z' },
    { id: 417, name: 'Javier S.', rating: 5, comment: 'no tener que preocuparnos por donde dejar el coche fue un alivio enorme, nos mandaron recomendaciones de la zona sin que las pidieramos, detalle que se agradece', createdAt: '2024-05-02T00:00:00.000Z' },
  ],
  'tulum-77772-balam-canche-174': [
    { id: 420, name: 'Lauren Y.', rating: 5, comment: 'Swimming before starting the day became part of the routine thanks to the pool. The bed was super comfortable, slept great every night.', createdAt: '2025-03-22T00:00:00.000Z' },
  ],
  'tulum-la-veleta-175': [
    { id: 422, name: 'Jonathan S.', rating: 4, comment: 'came here for work and didn\'t think the balcony would matter this much until we used it every single day, never felt unsafe walking back late at night, good area', createdAt: '2025-11-06T00:00:00.000Z' },
    { id: 424, name: 'Ximena G.', rating: 3, comment: 'algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante, todo estaba muy limpio y ordenado, supero nuestras expectativas', createdAt: '2025-09-25T00:00:00.000Z' },
    { id: 423, name: 'Ximena G.', rating: 4, comment: 'Cualquier duda que tuvimos se resolvió en minutos por WhatsApp. Totalmente recomendado.', createdAt: '2025-05-15T00:00:00.000Z' },
    { id: 425, name: 'Renata O.', rating: 5, comment: 'no esperabamos una vista tan buena desde la ventana, gran sorpresa', createdAt: '2024-05-28T00:00:00.000Z' },
    { id: 421, name: 'Regina H.', rating: 5, comment: 'la cocina tenia buena vajilla y utensilios, cocinar ahi se sintio comodo', createdAt: '2024-05-04T00:00:00.000Z' },
  ],
  'tulum-5gvpxh-tulum-176': [
    { id: 427, name: 'Emiliano D.', rating: 4, comment: 'Sorpresa agradable encontrar un gym tan bien equipado en el edificio. Se nota que limpian a fondo entre huespedes, todo estaba perfecto. Totalmente recomendado.', createdAt: '2025-07-20T00:00:00.000Z' },
    { id: 426, name: 'Mariana G.', rating: 5, comment: 'el cafe de la manana sabe distinto cuando lo tomas en un balcon con esa vista, el transporte publico quedaba a la vuelta, facilisimo llegar a todos lados', createdAt: '2024-11-07T00:00:00.000Z' },
  ],
  'tulum-c-39-calle-12-177': [
    { id: 430, name: 'Ryan S.', rating: 4, comment: 'We brought our dog along and it worked out great — genuinely pet friendly place. The building is really quiet, slept great despite being in a central area.', createdAt: '2026-02-23T00:00:00.000Z' },
    { id: 429, name: 'Mariana V.', rating: 5, comment: 'Fue muy práctico tener estacionamiento propio, no batallamos nada con eso. La regadera tenía muy buena presión, algo que no siempre se encuentra.', createdAt: '2025-10-03T00:00:00.000Z' },
    { id: 428, name: 'Rachel R.', rating: 3, comment: 'having good air conditioning made a huge difference with the weather, would definitely book here again', createdAt: '2024-10-25T00:00:00.000Z' },
  ],
  'tulum-77760-tulum-178': [
    { id: 432, name: 'Renata R.', rating: 4, comment: 'Celebramos nuestro aniversario aqui y no tener que preocuparnos por donde dejar el coche fue un alivio enorme. Tuvimos un pequeno problema con el aire acondicionado y lo resolvieron el mismo dia.', createdAt: '2025-09-18T00:00:00.000Z' },
    { id: 431, name: 'Emiliano A.', rating: 5, comment: 'reservamos a ultima hora y hay seguridad en la entrada del edificio, se siente muy tranquilo', createdAt: '2025-07-12T00:00:00.000Z' },
  ],
  'tulum-supermanzana-qroo-109-179': [
    { id: 435, name: 'Ximena D.', rating: 4, comment: 'Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante. Hasta tenia especias basicas en la cocina, detalle que no esperabamos.', createdAt: '2025-06-19T00:00:00.000Z' },
    { id: 434, name: 'Fernanda B.', rating: 3, comment: 'habia mucho espacio para guardar nuestras cosas, algo que no esperabamos, sin duda volveriamos a reservar aqui', createdAt: '2024-11-25T00:00:00.000Z' },
    { id: 433, name: 'Santiago A.', rating: 3, comment: 'muy bien ubicado, cerca de restaurantes y con facil acceso a todo', createdAt: '2024-10-10T00:00:00.000Z' },
  ],
  'tulum-av-kukulkan-lt-185-180': [
    { id: 436, name: 'Ana Sofia M.', rating: 4, comment: 'Cada tarde subiamos al roof con una copa a ver el atardecer, algo que no olvidaremos. El elevador funcionaba perfecto, nunca tuvimos que esperar mucho.', createdAt: '2026-05-22T00:00:00.000Z' },
    { id: 439, name: 'Ximena V.', rating: 4, comment: 'Nos mandaron recomendaciones de la zona sin que las pidieramos, detalle que se agradece. Supero lo que esperabamos por completo.', createdAt: '2026-02-03T00:00:00.000Z' },
    { id: 440, name: 'Kevin L.', rating: 5, comment: 'booked last minute and something as simple as assigned parking made everything way less stressful, the bed was super comfortable, slept great every night', createdAt: '2025-04-19T00:00:00.000Z' },
    { id: 438, name: 'Nicole C.', rating: 4, comment: 'this was our second time booking here and traveling with a pet always feels risky but we had zero issues here, the location was excellent, everything was within walking distance', createdAt: '2025-03-24T00:00:00.000Z' },
    { id: 437, name: 'David S.', rating: 5, comment: 'didn\'t think the balcony would matter this much until we used it every single day, internet speed was honestly better than at home, overall a great experience', createdAt: '2024-07-07T00:00:00.000Z' },
  ],
  'tulum-tribu-chaac-181': [
    { id: 443, name: 'Megan Y.', rating: 5, comment: 'the building feels really calm, good neighbors and a nice overall vibe', createdAt: '2026-01-21T00:00:00.000Z' },
    { id: 441, name: 'Amanda R.', rating: 3, comment: 'didn\'t cook much but when we did the kitchen had everything overall a great experience', createdAt: '2025-07-29T00:00:00.000Z' },
    { id: 442, name: 'Fernanda R.', rating: 5, comment: 'Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera. Llegamos cansados de un vuelo largo y encontrar todo tan limpio ayudó muchísimo.', createdAt: '2024-11-10T00:00:00.000Z' },
  ],
};