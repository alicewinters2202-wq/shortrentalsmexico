import json, random, unicodedata
from datetime import datetime, timedelta
from collections import defaultdict, Counter

random.seed(20260824)

with open('/home/claude/scratch/all_properties_v2.json', encoding='utf-8') as f:
    properties = json.load(f)

def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')
def norm(s):
    return strip_accents(s.lower())

def price_tier(price_per_month):
    if price_per_month < 35000: return 'budget'
    if price_per_month < 50000: return 'mid'
    if price_per_month < 75000: return 'upper'
    return 'luxury'

def detect_topics(amenities, parking, pet, balcony):
    text = ' '.join(norm(a) for a in amenities)
    topics = set()
    if any(k in text for k in ['alberca','piscina','pool']): topics.add('pool')
    if any(k in text for k in ['gym','gimnasio']): topics.add('gym')
    if any(k in text for k in ['playa','beach','frente al mar']): topics.add('beach')
    if 'jacuzzi' in text: topics.add('jacuzzi')
    if 'spa' in text: topics.add('spa')
    if any(k in text for k in ['roof','terraza','rooftop']): topics.add('terrace')
    if 'jardin' in text: topics.add('garden')
    if any(k in text for k in ['cancha','tenis','padel','basquet','futbol']): topics.add('sports')
    if any(k in text for k in ['coworking','co working','business center','centro de negocios']): topics.add('coworking')
    if 'cine' in text: topics.add('cinema')
    if any(k in text for k in ['boliche','billar','pool table','poker']): topics.add('games')
    if balcony: topics.add('balcony')
    if parking and parking > 0: topics.add('parking')
    if pet: topics.add('pet')
    return topics

BANK = {
# HIGH-DEMAND amenity topics — expanded to match how common they actually are (130-173 properties each)
'pool': {'es': [
    "La alberca estuvo increíble, la usamos casi todos los días.",
    "No esperábamos que la alberca fuera tan grande, terminamos pasando ahí las tardes enteras.",
    "Alberca hermosa, limpia y con muy buena vista.",
    "Los niños no querían salir de la alberca, la pasaron increíble ahí todos los días.",
    "Nadar antes de empezar el día se volvió parte de la rutina gracias a la alberca.",
    "La alberca fue una gran sorpresa, mejor de lo que esperábamos por las fotos.",
    "Pasamos casi todas las tardes en la alberca, un plus que no considerábamos al reservar.",
    "La alberca siempre estaba limpia y tranquila, la disfrutamos mucho.",
    "Sacamos mucho provecho de la alberca, sobre todo con el calor.",
], 'en': [
    "The pool was amazing, we used it almost every day during our stay.",
    "Didn't expect the pool to be this nice, ended up spending whole afternoons there.",
    "Beautiful, clean pool with a great view.",
    "Our kids didn't want to leave the pool, they had the best time there every day.",
    "Swimming before starting the day became part of the routine thanks to the pool.",
    "The pool was a great surprise, better than the photos made it look.",
    "Spent most afternoons at the pool, a bonus we weren't expecting when booking.",
    "Pool was always clean and quiet, really enjoyed it.",
    "Made great use of the pool, especially with how hot it was.",
]},
'gym': {'es': ["El gimnasio estaba muy completo, no tuve que cancelar mi rutina de ejercicio.","Aproveché el gym casi todas las mañanas antes de salir a trabajar.","Pude mantener mi rutina de ejercicio gracias al gimnasio."],
        'en': ["The gym was well equipped, kept up with my workouts the whole trip.","Used the gym most mornings before heading out to work.","Managed to keep my workout routine going thanks to the gym."]},
'beach': {'es': ["Estar tan cerca de la playa hizo toda la diferencia, caminábamos todas las mañanas.","La playa quedaba a unos minutos caminando, exactamente lo que buscábamos.","No hay nada como poder caminar a la playa sin depender de un coche."],
          'en': ["Being steps from the beach made the whole trip — we walked over every morning.","The beach was just a few minutes on foot, exactly what we were looking for.","Nothing beats being able to walk to the beach without needing a car."]},
'jacuzzi': {'es': ["El jacuzzi en la noche fue un gran plus, muy relajante después de caminar todo el día.","Usamos el jacuzzi casi todas las noches."],
            'en': ["The jacuzzi was a nice surprise, great way to unwind in the evenings.","We used the jacuzzi almost every night."]},
'spa': {'es': ["Aprovechamos el spa un día."], 'en': ["We treated ourselves to the spa one afternoon."]},
'terrace': {'es': ["La terraza tiene una vista espectacular, pasamos varias tardes ahí.","El roof garden es hermoso al atardecer.","Cada tarde subíamos al roof con una copa a ver el atardecer."],
            'en': ["The rooftop terrace has an incredible view, we spent several evenings up there.","Loved the roof garden — perfect spot for sunset.","Every evening we'd head up to the roof with a drink to watch the sunset."]},
'garden': {'es': ["El jardín es muy tranquilo, un buen lugar para desconectar."], 'en': ["The garden area was a peaceful little spot to relax between outings."]},
'sports': {'es': ["Jugamos padel una tarde en las canchas."], 'en': ["We played a match on the padel court one afternoon."]},
'coworking': {'es': ["El espacio de coworking me sirvió mucho, trabajé varias mañanas ahí."], 'en': ["The coworking space was perfect for getting work done during the trip."]},
'cinema': {'es': ["Una noche usamos la sala de cine."], 'en': ["We used the property's private cinema room one night."]},
'games': {'es': ["El área de juegos estuvo bien para las noches tranquilas."], 'en': ["The game room was a fun way to spend a quiet evening in."]},
'balcony': {'es': [
    "El balcón fue una sorpresa muy agradable, desayunábamos ahí todos los días.",
    "Nos encantó tener balcón propio, buena vista y espacio para sentarnos afuera.",
    "No pensamos que el balcón fuera a ser tan importante hasta que lo usamos cada día.",
    "Tener un espacio exterior propio hizo que el depa se sintiera mucho más grande.",
    "El café de la mañana sabe distinto cuando lo tomas en un balcón con esa vista.",
    "Pasábamos las tardes en el balcón, muy buen espacio para relajarnos.",
    "El balcón terminó siendo uno de nuestros lugares favoritos del depa.",
    "Tener dónde sentarnos afuera hizo una gran diferencia en el día a día.",
], 'en': [
    "Loved having our own balcony, we had coffee out there every morning.",
    "The balcony was a great bonus — nice breeze and a good view of the neighborhood.",
    "Didn't think the balcony would matter this much until we used it every single day.",
    "Having our own outdoor space made the apartment feel so much bigger.",
    "Morning coffee tastes different when you're having it on a balcony with that view.",
    "Spent our afternoons out on the balcony, really nice little space to unwind.",
    "The balcony ended up being one of our favorite parts of the apartment.",
    "Having somewhere to sit outside made a real difference day to day.",
]},
'parking': {'es': [
    "Fue muy práctico tener estacionamiento propio, no batallamos nada con eso.",
    "No tener que preocuparnos por dónde dejar el coche fue un alivio enorme.",
    "Algo tan simple como el estacionamiento asignado hizo todo mucho menos estresante.",
    "El estacionamiento incluido fue muy conveniente, sin complicaciones.",
    "Tener lugar de estacionamiento asignado hizo todo más fácil.",
    "Rentamos un coche y tener estacionamiento propio simplificó mucho las cosas.",
    "No batallamos ni un solo día por dónde estacionarnos, todo resuelto desde el inicio.",
], 'en': [
    "Having dedicated parking made things so much easier, no stress finding a spot.",
    "Not having to worry about where to park was such a relief.",
    "Something as simple as assigned parking made everything way less stressful.",
    "The included parking spot was really convenient, zero hassle.",
    "Having an assigned parking spot made everything simpler.",
    "We rented a car and having our own parking spot made everything so much simpler.",
    "Never had to think twice about where to park, sorted from day one.",
]},
'pet': {'es': [
    "Viajamos con nuestro perro y todo salió perfecto, pet friendly de verdad.",
    "Viajar con mascota siempre da un poco de miedo pero aquí no tuvimos ni un problema.",
    "Buscábamos un lugar donde nuestra perra realmente fuera bienvenida y lo encontramos aquí.",
    "Trajimos a nuestro perro y el lugar es genuinamente pet friendly.",
    "Pudimos traer a nuestra mascota sin ningún problema, muy agradecidos por eso.",
    "Nuestro perro se sintió tan cómodo aquí como en casa.",
], 'en': [
    "We brought our dog along and it worked out great — genuinely pet friendly place.",
    "Traveling with a pet always feels risky but we had zero issues here.",
    "We were looking for somewhere our dog would actually be welcome and found it here.",
    "Our dog came with us and the place lived up to being pet friendly.",
    "Traveled with our pet and had zero issues, really appreciated that.",
    "Our dog felt just as at home here as he does at our place.",
]},

'location': {'es': ["La ubicación es excelente, todo quedaba cerca caminando.","Muy bien ubicado, cerca de restaurantes y con fácil acceso a todo.","La zona es muy segura y tranquila, se siente muy bien caminar de noche.","Elegimos esta zona sin conocerla y resultó ser la mejor decisión del viaje.","La colonia tiene un ambiente increíble, cafés y restaurantes por todos lados.","El metro quedaba a unos minutos, muy fácil movernos por la ciudad.","No usamos Uber casi nada, todo estaba a distancia caminable.","Nunca nos sentimos inseguros caminando de regreso tarde, buena zona."],
             'en': ["The location was excellent, everything was within walking distance.","Really well located, close to great restaurants and easy to get around.","Felt very safe walking around the neighborhood even at night.","Picked this neighborhood without knowing it and it turned out to be the best call of the trip.","The neighborhood has such a great vibe, cafes and restaurants everywhere.","The metro was just a few minutes away, made getting around the city really easy.","Barely used Uber the whole trip, everything was walkable.","Never felt unsafe walking back late at night, good area."]},
'cleanliness': {'es': ["El departamento estaba impecable cuando llegamos.","Todo estaba muy limpio y ordenado, superó nuestras expectativas.","Se nota que limpian a fondo entre huéspedes, todo estaba perfecto.","Ni una mota de polvo, se ve que cuidan mucho los detalles."],
                'en': ["The apartment was spotless when we arrived.","Everything was clean and tidy, exceeded our expectations honestly.","You could tell they clean thoroughly between guests, everything was perfect.","Not a speck of dust anywhere, you can tell they care about the details."]},
'host': {'es': ["La comunicación con el agente por WhatsApp fue rápida y muy amable en todo momento.","El check-in fue súper fácil gracias a las instrucciones claras que nos mandaron.","Tuvimos un pequeño problema y lo resolvieron el mismo día.","Cualquier duda que tuvimos se resolvió en minutos por WhatsApp."],
         'en': ["Communication over WhatsApp was fast and friendly the whole time.","Check-in was super easy thanks to the clear instructions they sent ahead of time.","Had a small issue and it was fixed the same day, really responsive.","Any question we had was answered in minutes over WhatsApp."]},
'wifi': {'es': ["El wifi era muy rápido, pude trabajar sin ningún problema de conexión."], 'en': ["Wifi speed was great, I worked remotely the whole stay with zero issues."]},
'kitchen': {'es': ["La cocina estaba muy bien equipada, pudimos cocinar sin problema varios días.","Cocinamos casi toda la semana, la cocina tenía absolutamente todo lo necesario.","Hasta tenía especias básicas en la cocina, detalle que no esperábamos."],
            'en': ["The kitchen was well stocked, we cooked several meals during our stay.","Cooked almost the whole week, the kitchen had literally everything we needed.","Even had basic spices in the kitchen, wasn't expecting that."]},
'light': {'es': ["El departamento tiene mucha luz natural, se siente muy amplio y cómodo."], 'en': ["So much natural light in the apartment, made it feel really spacious."]},
'bed': {'es': ["La cama era muy cómoda, dormimos increíble todas las noches."], 'en': ["The bed was super comfortable, slept great every night."]},
'checkin': {'es': ["El check-in fue súper sencillo, sin complicaciones ni esperas."], 'en': ["Check-in was super simple, no complications or waiting around."]},
'view': {'es': ["La vista desde el departamento es hermosa, no nos cansamos de verla."], 'en': ["The view from the apartment is beautiful, never got tired of it."]},
'transit': {'es': ["Muy cerca del metro, nos movimos por toda la ciudad sin complicaciones."], 'en': ["Very close to the metro, got around the whole city without any hassle."]},
'transit_generic': {'es': ["Fue muy facil movernos por la zona sin complicaciones."], 'en': ["Getting around the area was really easy the whole trip."]},
'quiet': {'es': ["El lugar era muy silencioso, dormimos increíble a pesar de estar en zona céntrica."], 'en': ["The place was really quiet, slept great despite being in a central area."]},
'ac': {'es': ["El aire acondicionado funcionaba perfecto, algo importante con el calor de la zona."], 'en': ["The AC worked perfectly, which mattered a lot given how hot it gets there."]},
'bathroom': {'es': ["El baño estaba muy bien equipado y con buena presión de agua."], 'en': ["The bathroom was well equipped with really good water pressure."]},
'storage': {'es': ["Había mucho espacio para guardar nuestras cosas, algo que no esperábamos."], 'en': ["Plenty of storage space for our stuff, wasn't expecting that."]},
'neighbors': {'es': ["Se sentía muy tranquilo, buenos vecinos y ambiente agradable."], 'en': ["It felt really calm, good neighbors and a nice overall vibe."]},

'value_budget': {'es': ["Para lo que pagamos, la calidad fue mucho mejor de lo esperado.","Excelente opción para quien busca algo económico sin sacrificar comodidad.","Muy buen precio para lo que ofrece, definitivamente lo volveríamos a elegir."],
                  'en': ["For what we paid, the quality was way better than expected.","Great option if you're looking for something affordable without sacrificing comfort.","Really good price for what you get, we'd choose it again without hesitation."]},
'value_mid': {'es': ["La relación precio-calidad es muy buena, definitivamente volveríamos.","Sentimos que pagamos exactamente lo justo por lo que obtuvimos.","Buen punto medio entre precio y comodidad, cumplió con todo lo que buscábamos."],
              'en': ["Great value for what you get, we'd definitely book again.","Felt like we paid exactly the right amount for what we got.","Good middle ground between price and comfort, checked every box we needed."]},
'value_upper': {'es': ["Se siente como un lugar de mayor categoría sin llegar a precios exagerados.","Vale cada peso, la calidad se nota desde que entras.","No es el más barato pero definitivamente se siente que pagas por calidad real."],
                'en': ["Feels like a higher-end place without the price tag being over the top.","Worth every peso, you can tell the quality the moment you walk in.","Not the cheapest option but you can genuinely tell you're paying for real quality."]},
'value_luxury': {'es': ["Es una propiedad de lujo y honestamente se nota en cada detalle.","Pagamos por algo premium y eso fue exactamente lo que recibimos.","No es un lugar económico pero para una ocasión especial valió completamente la pena."],
                  'en': ["This is a genuinely luxury property and it shows in every detail.","Paid for something premium and that's exactly what we got.","Not a budget place by any means, but for a special occasion it was completely worth it."]},
}

# ALL topics now go through the SAME load-balancing — no more "specific vs generic" distinction
# for how reuse is managed. High-demand amenities (parking/pet/pool/balcony) get treated exactly
# like location/cleanliness in terms of fairness.
ALL_ROTATING_TOPICS = ['location', 'cleanliness', 'host', 'wifi', 'kitchen', 'light', 'bed',
                        'checkin', 'view', 'transit_generic', 'quiet', 'ac', 'bathroom', 'storage',
                        'neighbors', 'parking', 'pet', 'pool', 'balcony']
RARE_TOPICS = ['gym', 'beach', 'jacuzzi', 'spa', 'terrace', 'garden', 'sports', 'coworking', 'cinema', 'games']

MEXICAN_FIRST = ['Alejandro', 'Fernanda', 'Diego', 'Maria Jose', 'Carlos', 'Valeria', 'Rodrigo', 'Ximena','Emiliano', 'Camila', 'Santiago', 'Regina', 'Mariana', 'Andres', 'Paulina', 'Gerardo','Daniela', 'Luis Fernando', 'Sofia', 'Ricardo', 'Ana Sofia', 'Javier', 'Renata', 'Sebastian']
MEXICAN_LAST_INITIALS = list('RLTHMCVGDSOAB')
AMERICAN_FIRST = ['Jennifer', 'Michael', 'Sarah', 'David', 'Emily', 'Christopher', 'Amanda', 'Matthew','Jessica', 'Andrew', 'Ashley', 'Ryan', 'Lauren', 'Brian', 'Nicole', 'Kevin','Rachel', 'Justin', 'Megan', 'Tyler', 'Samantha', 'Jonathan', 'Katie', 'Brandon']
AMERICAN_LAST_INITIALS = list('MTJBDWACLYKSHR')

def random_name():
    if random.random() < 0.5:
        return f"{random.choice(MEXICAN_FIRST)} {random.choice(MEXICAN_LAST_INITIALS)}.", 'es'
    return f"{random.choice(AMERICAN_FIRST)} {random.choice(AMERICAN_LAST_INITIALS)}.", 'en'

def weighted_rating():
    return random.choices([3, 4, 5], weights=[20, 35, 45])[0]

def review_count():
    return random.choices([0, 1, 2, 3], weights=[15, 30, 30, 25])[0]

def casualize(text, lang, tier):
    if tier == 0: return text
    if lang == 'es':
        if tier >= 1: text = strip_accents(text)
        if tier >= 2:
            text = text[0].lower() + text[1:] if text else text
            parts = text.split('. ')
            parts = [p[0].lower() + p[1:] if p else p for p in parts]
            connector = ', ' if tier == 2 else random.choice([', ', ' y ', ' '])
            text = connector.join(parts)
            if text.endswith('.'): text = text[:-1]
        if tier == 3: text = text.replace(', ', ' ')
    else:
        if tier >= 1: text = text.replace("we'd", "wed").replace("we're", "were").replace("don't", "dont")
        if tier >= 2:
            text = text[0].lower() + text[1:] if text else text
            parts = text.split('. ')
            parts = [p[0].lower() + p[1:] if p else p for p in parts]
            connector = ', ' if tier == 2 else random.choice([', ', ' and ', ' '])
            text = connector.join(parts)
            text = text.replace(' I ', ' i ')
            if text.startswith('I '): text = 'i ' + text[2:]
            if text.endswith('.'): text = text[:-1]
        if tier == 3:
            text = text.replace(', ', ' ')
            text = text.replace(' — ', ' ')
    return text

OPENERS = {
    'es': ["Nos quedamos una semana y ", "Vinimos por trabajo y ", "Fue nuestro segundo viaje aquí y ",
           "Celebramos nuestro aniversario aquí y ", "Vinimos con toda la familia y ", "Reservamos a última hora y "],
    'en': ["We stayed a week and ", "Came here for work and ", "This was our second time booking here and ",
           "We celebrated our anniversary here and ", "We came with the whole family and ", "Booked last minute and "],
}
CLOSERS = {
    'es': [" En general una experiencia excelente.", " Sin duda volveríamos a reservar aquí.", " Totalmente recomendado."],
    'en': [" Overall a great experience.", " Would definitely book here again.", " Highly recommend."],
}

# HARD GLOBAL CAP: no individual (topic, sentence-index) slot may be used more than this many
# times across the ENTIRE site, regardless of topic category. This directly fixes the bug found.
MAX_GLOBAL_USES_PER_SENTENCE = 4

reviews = []
GLOBAL_USED_TEXTS = set()
slot_global_usage = Counter()  # (topic, idx) -> count, tracked across ALL properties

for p in properties:
    tier_p = price_tier(p['pricePerMonth'])
    value_topic = f'value_{tier_p}'
    rare_pool = [t for t in detect_topics(p['amenities'], p['parkingSpots'], p['petFriendly'], p['balcony']) if t in RARE_TOPICS]
    rotating_pool = [t for t in ALL_ROTATING_TOPICS if t in detect_topics(p['amenities'], p['parkingSpots'], p['petFriendly'], p['balcony']) or t in ['location','cleanliness','host','wifi','kitchen','light','bed','checkin','view','transit_generic','quiet','ac','bathroom','storage','neighbors']]
    METRO_CITIES = {'Ciudad de México', 'Guadalajara', 'Monterrey'}
    if p['city'] in METRO_CITIES:
        rotating_pool.append('transit')
    random.shuffle(rare_pool)
    n = review_count()

    used_topics_this_property = set()
    value_used = False
    used_slots_this_property = set()

    generated = 0
    tries = 0
    while generated < n and tries < n * 40:
        tries += 1
        name, lang = random_name()
        rating = weighted_rating()

        available_rare = [t for t in rare_pool if t not in used_topics_this_property]
        available_rotating = [t for t in rotating_pool if t not in used_topics_this_property]

        def slot_reuse_score(t):
            bank = BANK[t].get('en', []) + BANK[t].get('es', [])
            # sum usage across all slots for this topic, normalized by bank size
            total_use = sum(slot_global_usage[(t, i)] for i in range(len(BANK[t]['es'])))
            return total_use / max(len(bank), 1)
        available_rotating.sort(key=slot_reuse_score)

        candidate_topics = []
        if available_rare and random.random() < 0.55:
            candidate_topics.append(random.choice(available_rare))
        if not value_used and random.random() < 0.28:
            candidate_topics.append(value_topic)
        if len(candidate_topics) < 2 and available_rotating:
            pool = available_rotating[:8]
            t2 = random.choice(pool)
            if t2 not in candidate_topics:
                candidate_topics.append(t2)
        if not candidate_topics:
            break
        candidate_topics = candidate_topics[:2]

        sentence_parts = []
        slots_used_this_review = []
        ok = True
        for t in candidate_topics:
            bank = BANK[t].get(lang) or BANK[t]['es']
            # exclude slots already used on THIS property, AND slots that hit the GLOBAL cap
            available_idxs = [
                i for i in range(len(bank))
                if (t, i) not in used_slots_this_property
                and slot_global_usage[(t, i)] < MAX_GLOBAL_USES_PER_SENTENCE
            ]
            if not available_idxs:
                ok = False
                break
            idx = random.choice(available_idxs)
            sentence_parts.append(bank[idx])
            slots_used_this_review.append((t, idx))
        if not ok or not sentence_parts:
            continue

        comment_base = ' '.join(sentence_parts)
        if random.random() < 0.28:
            opener = random.choice(OPENERS[lang])
            first = comment_base[0].lower() + comment_base[1:]
            comment_base = opener + first
        if random.random() < 0.22:
            comment_base = comment_base.rstrip('.') + '.' + random.choice(CLOSERS[lang])

        tier_cas = random.choices([0, 1, 2, 3], weights=[15, 40, 35, 10])[0]
        comment = casualize(comment_base, lang, tier_cas)

        if comment in GLOBAL_USED_TEXTS:
            continue

        for slot in slots_used_this_review:
            used_slots_this_property.add(slot)
            slot_global_usage[slot] += 1
        for t in candidate_topics:
            used_topics_this_property.add(t)
            if t == value_topic: value_used = True
        GLOBAL_USED_TEXTS.add(comment)

        days_ago = int(random.triangular(3, 1095, 250))
        reviews.append({'slug': p['slug'], 'name': name, 'rating': rating, 'comment': comment, 'daysAgo': days_ago})
        generated += 1

print("Total reviews:", len(reviews))
all_comments = [r['comment'] for r in reviews]
assert len(all_comments) == len(set(all_comments)), "DUPLICATES EXIST"
print("Global uniqueness: OK")

# Verify: NO slot exceeds the cap
violations = [(k, v) for k, v in slot_global_usage.items() if v > MAX_GLOBAL_USES_PER_SENTENCE]
print("Slot cap violations:", len(violations))
print("Max any single sentence was used:", max(slot_global_usage.values()) if slot_global_usage else 0)

with open('/home/claude/scratch/generated_reviews_v9.json', 'w', encoding='utf-8') as f:
    json.dump(reviews, f, ensure_ascii=False, indent=2)
