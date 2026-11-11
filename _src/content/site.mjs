// All site copy, Italian + English. Text comes from the original bmworks.it pages, tidied up.
const L = (it, en) => ({ it, en });

export const BIZ = {
  tel: '+393292949290', telNice: '+39 329 294 9290', wa: '393292949290',
  email: 'info@bmworks.it',
  address: 'Via G. M. Serrati, 60/bis — 20098 San Giuliano Milanese (MI)',
  mapsLink: 'https://maps.app.goo.gl/Yw8zzajzCJdNUWQX6',
  // Google Business listing (figures supplied by the owner's page)
  google: { rating: 4.8, count: 27, url: 'https://maps.app.goo.gl/Yw8zzajzCJdNUWQX6' },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.7402129614593!2d9.290649412068614!3d45.3944110709522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786cfb6432cc17f%3A0x8f6bf79af24fa8bb!2sVia%20Giacinto%20Menotti%20Serrati%2C%2060%2C%2020098%20San%20Giuliano%20Milanese%20MI!5e0!3m2!1sen!2sit!4v1715772839282!5m2!1sen!2sit',
  // Quantum Tuning only serves this tool when it is embedded on bmworks.it
  lookup: 'https://www.quantumtuning.co.uk/dealer-tool/responsive-vehicle-look-up-tool/international-dealers/bmworks-performance-italy-vehicle-lookup.aspx',
  ig: 'https://www.instagram.com/bmworks.it/', fb: 'https://www.facebook.com/BMWorks.it',
  tt: 'https://www.tiktok.com/@bmworks.performan',
  founder: 'Gicu Plamadeala',
  agents: [
    { name: 'Giku M.', num: '393292949290', role: L('Assistenza', 'Support') },
    { name: 'Alexandru S.', num: '393516933692', role: L('Vendite', 'Sales') },
  ],
};

export const UI = {
  skip: L('Vai al contenuto', 'Skip to content'),
  introSkip: L('Salta l’animazione', 'Skip the animation'),
  introTag: L('Specialista indipendente BMW e MINI', 'Independent BMW & MINI specialist'),
  mainNav: L('Navigazione principale', 'Main navigation'),
  menuContact: L('Contattaci', 'Get in touch'),
  menuDirections: L('Indicazioni', 'Directions'),
  menuFollow: L('Seguici', 'Follow us'),
  langLabel: L('Lingua', 'Language'),
  hours: L('Lun–Ven 9:00–18:00', 'Mon–Fri 9:00–18:00'),
  nav: {
    home: L('Home', 'Home'), remap: L('Rimappatura', 'Remapping'), remapLookup: L('Rimappatura centraline', 'ECU remapping'),
    options: L('Opzioni di rimappatura', 'Remap options'), remapFaq: L('FAQ rimappatura', 'Remapping FAQ'),
    services: L('Servizi BMW & MINI', 'BMW & MINI services'), allServices: L('Tutti i servizi', 'All services'),
    cars: L('Le nostre auto', 'Cars for sale'), blog: L('Blog', 'Blog'), about: L('Chi siamo', 'About us'), contact: L('Contatti', 'Contact'),
  },
  footerAbout: L(
    'Specialista indipendente a Milano per BMW e MINI: riparazione, manutenzione e rimappatura centraline di qualità. Il vostro partner di fiducia per un servizio trasparente e personalizzato.',
    'Independent BMW and MINI specialist in Milan: quality repairs, servicing and ECU remapping. Your trusted partner for transparent, personal service.'),
  footerExplore: L('Esplora', 'Explore'),
  rights: L('Tutti i diritti riservati.', 'All rights reserved.'),
  privacy: L('Informativa privacy', 'Privacy notice'),
  disclaimer: L('Officina indipendente, non affiliata a BMW AG.', 'Independent workshop, not affiliated with BMW AG.'),
  waText: L('Ciao, sono interessato ai vostri prodotti e servizi.', 'Hi, I am interested in your products and services.'),
  waIntro: L('Inviaci un messaggio oggi e ti contatteremo il prima possibile.', 'Send us a message today and we will get back to you as soon as possible.'),
  waAvail: L('Disponibile dalle 08:00 alle 17:00', 'Available 08:00 to 17:00'),
  call: L('Chiama', 'Call'), book: L('Prenota', 'Book'), writeUs: L('Scrivici', 'Write to us'),
  more: L('Scopri di più', 'Find out more'), readMore: L('Leggi di più', 'Read more'), details: L('Dettagli', 'Details'),
  ctaTitle: L('Prenota il tuo appuntamento', 'Book your appointment'),
  ctaText: L('Chiamaci, scrivici su WhatsApp o inviaci un messaggio: ti rispondiamo con un preventivo chiaro.', 'Call us, message us on WhatsApp or send an enquiry: we will reply with a clear quote.'),
  remapShort: L('Più potenza, più coppia e consumi ridotti con una mappa su misura per il tuo veicolo.', 'More power, more torque and lower fuel use with a map tailored to your vehicle.'),
  mapTitle: L('Mappa: dove siamo', 'Map: where to find us'),
  latestPosts: L('Dal nostro blog', 'From our blog'), allPosts: L('Tutti gli articoli', 'All articles'), relatedPosts: L('Altri articoli', 'More articles'),
  galleryTitle: L('Dalla nostra officina', 'From our workshop'),
  faqTitle: L('Domande frequenti', 'Frequently asked questions'),
  sideTitle: L('Richiedi un preventivo', 'Request a quote'),
  sideText: L('Raccontaci modello, anno e problema: ti diamo tempi e costi realistici.', 'Tell us the model, year and issue: we will give you realistic times and costs.'),
  otherServices: L('Altri servizi', 'Other services'),
  servicesPage: {
    title: L('Servizi BMW e MINI a Milano | BMWorks Performance', 'BMW and MINI services in Milan | BMWorks Performance'),
    desc: L('Manutenzione, catene di distribuzione, cambio automatico, riparazioni, xDrive, codifica e diagnosi per BMW e MINI.', 'Servicing, timing chains, automatic gearbox, repairs, xDrive, coding and diagnostics for BMW and MINI.'),
    kicker: L('Specialista indipendente BMW e MINI', 'Independent BMW & MINI specialist'),
    h1: L('I nostri servizi', 'Our services'),
    lead: L('Tutto quello che serve alla tua BMW o MINI, con attrezzatura specifica e a una frazione del prezzo della concessionaria.', 'Everything your BMW or MINI needs, with marque-specific equipment at a fraction of main-dealer prices.'),
  },
  form: {
    name: L('Nome', 'Name'), phone: L('Telefono', 'Phone'), vehicle: L('Veicolo', 'Vehicle'),
    vehiclePh: L('Es. BMW 320d F30, 2015', 'E.g. BMW 320d F30, 2015'), message: L('Il tuo messaggio', 'Your message'),
    accept: L('Accetto la', 'I accept the'),
    err: L('Inserisci nome e messaggio e accetta l’informativa privacy.', 'Please enter your name and message and accept the privacy notice.'),
    errQuote: L('Inserisci almeno marca, modello e nome, e accetta l’informativa privacy.', 'Please enter at least the make, model and your name, and accept the privacy notice.'),
    viaWa: L('Invia su WhatsApp', 'Send via WhatsApp'), viaMail: L('Invia via email', 'Send by email'),
    note: L('Il messaggio si apre già compilato in WhatsApp o nella tua app di posta: basta premere invio.', 'Your message opens pre-filled in WhatsApp or your email app: just press send.'),
  },
};

export const VIDEOS = [
  { id: 'mini', file: 'mini-multimedia', poster: 'vid-mini.webp', len: '1:56',
    title: L('MINI: ripristino completo dopo il furto del sistema multimediale', 'MINI: full restoration after the multimedia system was stolen') },
  { id: 'm2', file: 'm2-tagliando', poster: 'vid-m2.webp', len: '0:28',
    title: L('BMW M2: mini tagliando registrato nel database BMW', 'BMW M2: interim service logged in the BMW database') },
  { id: 'x6', file: 'x6-volante-carbonio', poster: 'vid-x6.webp', len: '0:56',
    title: L('BMW X6 M50d: nuovo volante in carbonio con LED', 'BMW X6 M50d: new carbon steering wheel with LEDs') },
  { id: 'm3', file: 'assetto-m3', poster: 'vid-m3.webp', len: '0:55',
    title: L('Installazione assetto e ripristino di una BMW V8', 'Coilover installation and a BMW V8 brought back to life') },
  { id: 'motore', file: 'motore-officina', poster: 'vid-motore.webp', len: '1:08',
    title: L('In officina: motore BMW sul cavalletto', 'In the workshop: a BMW engine on the stand') },
];

export const HOME = {
  heroBadge: L('Dalla nostra officina', 'From our workshop'),
  vidKicker: L('Video', 'Videos'),
  vidTitle: L('Guarda i nostri lavori', 'Watch our work'),
  vidText: L('Interventi reali, ripresi nella nostra officina di San Giuliano Milanese.', 'Real jobs, filmed in our workshop in San Giuliano Milanese.'),
  vidMore: L('Altri video su TikTok', 'More videos on TikTok'),
  vidPlay: L('Riproduci il video', 'Play video'),
  title: L('BMWorks Performance — Specialista BMW e MINI a Milano | Rimappatura centraline', 'BMWorks Performance — BMW & MINI specialist in Milan | ECU remapping'),
  desc: L('Officina indipendente BMW e MINI a San Giuliano Milanese: rimappatura centraline, manutenzione, riparazioni, codifica e diagnosi.', 'Independent BMW and MINI workshop in San Giuliano Milanese: ECU remapping, servicing, repairs, coding and diagnostics.'),
  kicker: L('Specialista indipendente BMW e MINI', 'Independent BMW & MINI specialist'),
  h1: L('Rimappatura centraline.<br><em>Assistenza e riparazione</em> BMW&nbsp;&amp;&nbsp;MINI.', 'ECU remapping.<br><em>Servicing and repair</em> for BMW&nbsp;&amp;&nbsp;MINI.'),
  lead: L('Scegli il meglio, rilascia il meglio: sblocca il potenziale del tuo veicolo con un’officina che conosce a fondo ogni BMW e MINI.', 'Choose the best, unleash the best: unlock your vehicle’s potential with a workshop that knows every BMW and MINI inside out.'),
  cta1: L('Rimappa il tuo veicolo', 'Remap your vehicle'), cta2: L('Scopri i servizi', 'Explore services'),
  points: L(['Operatore indipendente riconosciuto da BMW', 'Ricambi originali', 'Lavori garantiti'], ['BMW-recognised independent operator', 'Genuine parts', 'Guaranteed work']),
  bookLabel: L('Prenota il tuo appuntamento', 'Book your appointment'),
  svcKicker: L('I nostri servizi', 'Our services'),
  svcTitle: L('Tutto per la tua BMW e MINI', 'Everything for your BMW and MINI'),
  svcText: L('Dal tagliando alla catena di distribuzione, dalla codifica alla rimappatura.', 'From routine servicing to timing chains, from coding to remapping.'),
  remapKicker: L('Rimappatura per ogni veicolo', 'Remapping for every vehicle'),
  remapTitle: L('Sblocca il potenziale del tuo veicolo', 'Unlock your vehicle’s potential'),
  remapText: L('Non solo BMW e MINI: rimappiamo auto, moto, camper e veicoli commerciali di tutti i marchi.', 'Not just BMW and MINI: we remap cars, motorbikes, motorhomes and commercial vehicles of every make.'),
  remapTypes: [
    { icon: 'car', title: L('Rimappatura auto', 'Car remapping'), cta: L('Inizia la trasformazione', 'Start the transformation'),
      text: L('Sblocca il vero potenziale della tua auto: migliore efficienza del carburante, potenza aumentata e prestazioni superiori.', 'Unlock your car’s true potential: better fuel efficiency, more power and superior performance.') },
    { icon: 'moto', title: L('Rimappatura moto', 'Motorbike remapping'), cta: L('Sblocca la potenza', 'Unlock the power'),
      text: L('Rivela la potenza nascosta della tua moto: maggiore efficienza, più potenza e prestazioni ottimali.', 'Reveal your bike’s hidden power: greater efficiency, more power and optimal performance.') },
    { icon: 'camper', title: L('Rimappatura camper', 'Motorhome remapping'), cta: L('Libera la potenza', 'Release the power'),
      text: L('Più potenza in salita e a pieno carico, consumi migliori: vivi l’avventura come mai prima d’ora.', 'More power uphill and fully loaded, with better fuel economy: enjoy the adventure like never before.') },
    { icon: 'van', title: L('Veicoli commerciali', 'Commercial vehicles'), cta: L('Rivela il vero potenziale', 'Reveal the true potential'),
      text: L('Massimizza l’efficienza del tuo veicolo commerciale: più potenza, prestazioni ottimizzate e risparmio di carburante.', 'Maximise your commercial vehicle’s efficiency: more power, optimised performance and fuel savings.') },
  ],
  benKicker: L('Dona una rinascita al tuo veicolo', 'Give your vehicle a new lease of life'),
  benTitle: L('I benefici della rimappatura', 'The benefits of remapping'),
  benText: L('Scopri il salto di qualità che il tuo veicolo può fare con una mappa sviluppata su misura.', 'Discover the step up your vehicle can make with a custom-developed map.'),
  benCta: L('Scopri le opzioni', 'See the options'),
  benefits: [
    { title: L('Potenzia le prestazioni', 'Boost performance'), text: L('Più potenza e più coppia su tutto l’arco di erogazione.', 'More power and more torque across the whole rev range.') },
    { title: L('Motore più efficiente', 'A more efficient engine'), text: L('La rimappatura ottimizza l’efficienza del motore, migliorandone potenza e risposta.', 'Remapping optimises engine efficiency, improving power and throttle response.') },
    { title: L('Riduci i consumi', 'Cut fuel consumption'), text: L('Ottimizza l’efficienza del tuo veicolo e risparmia sul carburante.', 'Optimise your vehicle’s efficiency and save on fuel.') },
    { title: L('Riduzione delle emissioni', 'Lower emissions'), text: L('Una rimappatura eseguita correttamente può aiutare a ridurre le emissioni, rendendo il veicolo più ecologico.', 'A properly executed remap can help reduce emissions, making the vehicle greener.') },
    { title: L('Garanzia di 6 anni', '6-year warranty'), text: L('Goditi la tranquillità di un supporto duraturo.', 'Enjoy the peace of mind of long-lasting support.') },
  ],
  whyKicker: L('Perché sceglierci', 'Why choose us'),
  whyTitle: L('Perché scegliere BMWorks Performance', 'Why choose BMWorks Performance'),
  stats: [
    { n: '18+', label: L('Esperti specializzati', 'Specialist experts') },
    { n: '150+', label: L('Servizi personalizzati', 'Tailored services') },
    { n: '100%', label: L('Qualità e affidabilità', 'Quality and reliability') },
    { n: '−30%', label: L('Prezzi competitivi', 'Competitive prices') },
    { n: '250+', label: L('Ampia gamma di servizi', 'Wide range of services') },
    { n: '96%', label: L('Soddisfazione del cliente', 'Customer satisfaction') },
  ],
  revKicker: L('Recensioni', 'Reviews'),
  gTitle: L('Valutazione su Google', 'Rated on Google'),
  gCount: L('{n} recensioni', '{n} reviews'),
  gRead: L('Leggi le recensioni su Google', 'Read the reviews on Google'),
  gWrite: L('Sei un nostro cliente? Lascia una recensione', 'A customer of ours? Leave a review'),
  revTitle: L('Cosa dicono i nostri clienti', 'What our customers say'),
  reviews: [
    { name: 'Marco', place: 'Osmate (VA)', car: 'Audi A3', text: L('Ho portato la mia Audi A3 da loro per una rimappatura e sono rimasto colpito dal risultato. Il mio veicolo ora ha un’accelerazione più fluida e veloce. Un team fantastico che offre un servizio eccellente. Consigliatissimo!', 'I took my Audi A3 to them for a remap and was impressed by the result. My car now accelerates more smoothly and quickly. A fantastic team offering excellent service. Highly recommended!') },
    { name: 'Luca', place: 'Nerviano (MI)', car: 'Kawasaki Z1000', text: L('Sono un appassionato di moto e ho portato la mia Kawasaki Z1000 per una rimappatura. Il miglioramento nelle prestazioni è stato immediato. Ora è molto più divertente da guidare. Grazie mille!', 'I am a bike enthusiast and took my Kawasaki Z1000 in for a remap. The performance improvement was immediate. It is much more fun to ride now. Thank you so much!') },
    { name: 'Maria', place: 'Pioltello (MI)', car: 'Ford Transit', text: L('Non avrei mai pensato che la rimappatura avrebbe potuto fare una differenza così grande sul mio furgone Ford Transit. Ora gestisce i carichi pesanti molto meglio e risparmio anche sul carburante. Grandioso lavoro, ragazzi!', 'I never thought remapping could make such a big difference to my Ford Transit van. It now handles heavy loads much better and I am saving on fuel too. Great job, guys!') },
    { name: 'Stefano', place: 'Mortara (PV)', car: 'Fiat 500', text: L('Avevo sentito parlare della rimappatura, ma non ero sicuro se fosse la scelta giusta per la mia Fiat 500. Ho deciso di provare e sono contento di averlo fatto. La mia auto è molto più reattiva e più divertente da guidare. Ottimo servizio!', 'I had heard about remapping but was not sure it was right for my Fiat 500. I decided to try it and I am glad I did. My car is far more responsive and more fun to drive. Great service!') },
    { name: 'Gabrielle', place: 'Rho (MI)', car: 'Mercedes GLE', text: L('Il mio SUV Mercedes ha sempre avuto bisogno di un po’ più di potenza. Ho deciso di fare una rimappatura e sono rimasta impressionata dai risultati. Ora affronta le salite senza problemi e ha più potenza in autostrada. Un investimento che vale ogni centesimo.', 'My Mercedes SUV always needed a bit more power. I decided to have it remapped and was impressed by the results. It now tackles hills with ease and has more power on the motorway. An investment worth every penny.') },
    { name: 'Matteo', place: 'Livigno (SO)', car: 'Alfa Romeo Giulietta', text: L('Ero scettico sull’effetto della rimappatura sulla mia Alfa Romeo Giulietta, ma dopo aver provato il servizio sono rimasto estasiato. La differenza nella risposta dell’acceleratore è impressionante. Ottimo lavoro!', 'I was sceptical about what a remap would do for my Alfa Romeo Giulietta, but after trying the service I was thrilled. The difference in throttle response is impressive. Great work!') },
    { name: 'Giovanni', place: 'Dalmine (BG)', car: 'Porsche 911', text: L('Ho portato la mia Porsche 911 per una rimappatura e sono rimasto sorpreso dai risultati. L’accelerazione è più fluida e la velocità massima è aumentata. Sono molto soddisfatto. Grazie mille!', 'I took my Porsche 911 in for a remap and was surprised by the results. Acceleration is smoother and top speed has increased. I am very satisfied. Many thanks!') },
    { name: 'Alessandra', place: 'San Donato Milanese (MI)', car: 'Jeep Wrangler', text: L('Ho sempre sentito parlare della rimappatura ma non l’avevo mai considerata per la mia Jeep Wrangler. Dopo aver provato, sono rimasta molto soddisfatta dei risultati: è molto più agile e veloce. Servizio fantastico!', 'I had always heard about remapping but never considered it for my Jeep Wrangler. After trying it I was very happy with the results: it is much more agile and quicker. Fantastic service!') },
  ],
  partnersTitle: L('I nostri sponsor e partner tecnici', 'Our sponsors and technical partners'),
  findKicker: L('Dove siamo', 'Where we are'),
  findTitle: L('Vieni a trovarci a San Giuliano Milanese', 'Visit us in San Giuliano Milanese'),
  findText: L('A pochi minuti da Milano, facilmente raggiungibile dalla tangenziale. Riceviamo su appuntamento.', 'A few minutes from Milan, easy to reach from the ring road. Visits by appointment.'),
};

const PREV = L(
  `## Manutenzione preventiva e diagnostica avanzata

Una delle pietre miliari dei servizi offerti da BMWorks Performance è la manutenzione preventiva, fondamentale per evitare guasti improvvisi e costosi. Grazie all’uso di strumentazione diagnostica all’avanguardia, siamo in grado di individuare e prevenire problemi prima che si manifestino, garantendo così la longevità e l’affidabilità della vostra BMW o MINI. La nostra diagnostica avanzata permette di identificare malfunzionamenti e bisogni di manutenzione, spesso prima che questi diventino evidenti al conducente.`,
  `## Preventive maintenance and advanced diagnostics

One of the cornerstones of BMWorks Performance is preventive maintenance, which is essential to avoid sudden and costly failures. Using state-of-the-art diagnostic equipment, we can identify and prevent problems before they appear, ensuring the longevity and reliability of your BMW or MINI. Our advanced diagnostics pick up faults and maintenance needs, often before they become noticeable to the driver.`);

export const SERVICES = [
  {
    key: 'svc-service', slug: L('assistenza-bmw-e-mini', 'bmw-mini-servicing'), card: 'real-m2.webp', videos: ['m2'],
    nav: L('Servizio e manutenzione BMW e MINI', 'BMW & MINI servicing and maintenance'),
    short: L('Tagliandi registrati nel database BMW, con ricambi originali e sistema CBS.', 'Services logged in the BMW database, with genuine parts and the CBS system.'),
    title: L('Assistenza e manutenzione BMW e MINI a Milano | BMWorks Performance', 'BMW and MINI servicing in Milan | BMWorks Performance'),
    desc: L('Manutenzione BMW e MINI registrata nel database BMW, ricambi originali e prezzi inferiori alla concessionaria.', 'BMW and MINI servicing logged in the BMW database, genuine parts and prices below main-dealer rates.'),
    h1: L('Riparazione e manutenzione specializzata per BMW e MINI', 'Specialist repair and servicing for BMW and MINI'),
    lead: L('Riconosciuti da BMW come “operatore indipendente”: ogni manutenzione viene registrata nel database BMW, mantenendo la cronologia completa del tuo veicolo.', 'Recognised by BMW as an “independent operator”: every service is recorded in the BMW database, keeping your vehicle’s full history intact.'),
    body: L(
      `BMWorks Performance, riconosciuto come **“operatore indipendente”** da BMW, garantisce che ogni manutenzione effettuata sulla tua BMW o MINI sia registrata nel database BMW, mantenendo così una cronologia completa dei servizi. Questo non solo preserva il valore e la performance del tuo veicolo, ma ti assicura anche una trasparenza totale nel servizio.

## Risparmia senza compromessi sulla qualità

Scegliere BMWorks per la manutenzione della tua BMW o MINI significa godere di un servizio di qualità superiore a un costo significativamente inferiore rispetto alle concessionarie BMW. Il nostro obiettivo è fornire un servizio eccellente a prezzi competitivi, senza compromessi sulla qualità.

## Tecnologie avanzate per una manutenzione impeccabile

Utilizziamo il sistema **CBS (Condition Based Service)** per un monitoraggio costante dei componenti chiave. Questo approccio preventivo assicura che il tuo veicolo sia sempre in condizioni ottimali: alcuni componenti della tua BMW o MINI rimangono sotto costante monitoraggio, tra cui:

- Olio motore
- Liquido dei freni
- Sistema frenante anteriore
- Sistema frenante posteriore
- Ispezione del veicolo
- Ispezione tecnica

In questo modo il tuo veicolo ti informa, quattro settimane o 2.000 chilometri in anticipo, quando è necessaria la manutenzione.

## Trasparenza e professionalità: la promessa di BMWorks

Ogni servizio di manutenzione in BMWorks Performance è eseguito con attrezzature originali e da tecnici altamente qualificati. Ci impegniamo a fornire un servizio trasparente e di alta qualità, rispecchiando gli standard elevati dei marchi BMW e MINI.

### Gamma completa di servizi per ogni esigenza

Siamo attrezzati per soddisfare ogni esigenza di manutenzione e riparazione, dal semplice cambio olio ai servizi più complessi. La nostra esperienza e la tecnologia all’avanguardia ci permettono di offrire un servizio completo per mantenere la tua BMW o MINI in perfette condizioni.

## Manutenzione e riparazione: specializzazione e affidabilità

Il nostro team di esperti utilizza solo ricambi originali, garantendo affidabilità e prestazioni ottimali. Affrontiamo ogni problema, dai più semplici ai più complessi, con competenza e tecnologia avanzata, offrendo soluzioni su misura per ogni esigenza del tuo veicolo.

### Prezzi competitivi e servizio di alta qualità

BMWorks Performance offre un’alternativa affidabile e conveniente alle concessionarie, mantenendo elevati standard di qualità.

## Un’esperienza di manutenzione superiore

Non aspettare che la tua BMW o MINI richieda un intervento urgente. Pianifica la manutenzione preventiva con BMWorks Performance per assicurarti che la tua auto sia sempre in condizioni ottimali: [contattaci](@contact) per pianificare il tuo prossimo appuntamento.

La soddisfazione del cliente è la nostra priorità. Ci dedichiamo a fornire un’esperienza di manutenzione che supera le aspettative, unendo qualità, efficienza e un servizio clienti eccellente. Unisciti alla nostra crescente lista di clienti soddisfatti.`,
      `BMWorks Performance is recognised by BMW as an **“independent operator”**, which means every service carried out on your BMW or MINI is recorded in the BMW database, keeping a complete service history. This preserves your vehicle’s value and performance and gives you total transparency.

## Save without compromising on quality

Choosing BMWorks to look after your BMW or MINI means top-quality service at a significantly lower cost than BMW main dealers. Our aim is to deliver excellent work at competitive prices, with no compromise on quality.

## Advanced technology for impeccable maintenance

We use the **CBS (Condition Based Service)** system to constantly monitor key components. This preventive approach keeps your vehicle in optimum condition: several components of your BMW or MINI are continuously monitored, including:

- Engine oil
- Brake fluid
- Front braking system
- Rear braking system
- Vehicle check
- Statutory inspection

This way your vehicle tells you, four weeks or 2,000 kilometres in advance, when a service is due.

## Transparency and professionalism: the BMWorks promise

Every service at BMWorks Performance is carried out with original equipment by highly qualified technicians. We are committed to transparent, high-quality service that reflects the standards of the BMW and MINI brands.

### A full range of services for every need

We are equipped for every maintenance and repair requirement, from a simple oil change to the most complex jobs. Our experience and up-to-date technology let us offer a complete service to keep your BMW or MINI in perfect condition.

## Maintenance and repair: specialisation and reliability

Our team uses only genuine parts, guaranteeing reliability and optimum performance. We tackle every problem, from the simplest to the most complex, with expertise and advanced technology, offering solutions tailored to your vehicle.

### Competitive prices and high-quality service

BMWorks Performance is a reliable, good-value alternative to main dealers, while maintaining high quality standards.

## A better servicing experience

Do not wait until your BMW or MINI needs urgent work. Plan preventive maintenance with BMWorks Performance to keep your car in optimum condition: [get in touch](@contact) to schedule your next appointment.

Customer satisfaction is our priority. We aim to deliver a servicing experience that exceeds expectations, combining quality, efficiency and excellent customer care. Join our growing list of satisfied customers.`),
  },
  {
    key: 'svc-chain', slug: L('sostituzione-catene-di-distribuzione-bmw-e-mini', 'timing-chain-replacement'), card: 'chain-5.webp', hero: 'chain-b.webp',
    nav: L('Sostituzione catene di distribuzione', 'Timing chain replacement'),
    short: L('Intervento specialistico sui motori BMW e MINI, in particolare N47 e N57.', 'Specialist work on BMW and MINI engines, especially the N47 and N57.'),
    title: L('Sostituzione catena di distribuzione BMW e MINI (N47, N57) | BMWorks', 'BMW and MINI timing chain replacement (N47, N57) | BMWorks'),
    desc: L('Sostituzione catene di distribuzione BMW e MINI a Milano, con diagnosi accurata e personale specializzato sui motori N47 e N57.', 'BMW and MINI timing chain replacement in Milan, with accurate diagnosis and specialists in N47 and N57 engines.'),
    h1: L('Sostituzione catene di distribuzione per BMW e MINI', 'Timing chain replacement for BMW and MINI'),
    lead: L('Un servizio essenziale per la longevità del motore, soprattutto sui BMW N47 e N57.', 'An essential job for engine longevity, particularly on the BMW N47 and N57.'),
    body: L(
      `La sostituzione della catena di distribuzione è un intervento cruciale per assicurare la longevità e il corretto funzionamento dei motori BMW e MINI. Questa operazione è particolarmente rilevante a causa dell’usura eccessiva e dei guasti prematuri che possono affliggere questi veicoli, soprattutto nei motori BMW **N47 e N57**.

I motori N47 e N57, noti per le loro problematiche specifiche, richiedono un’attenzione particolare nella sostituzione della catena di distribuzione. BMWorks Performance offre soluzioni mirate, utilizzando tecnologie avanzate e personale altamente qualificato per garantire un servizio efficiente e affidabile.

## Un approccio su misura

Il nostro approccio personalizzato si concentra sulla diagnosi accurata delle condizioni specifiche di ogni veicolo, permettendo interventi precisi e mirati. La metodologia di BMWorks Performance si basa su un’analisi dettagliata dei sintomi e dei segnali di usura, integrando la manutenzione ordinaria con una strategia proattiva per prevenire guasti futuri. Questo assicura non solo il ripristino della piena efficienza del motore, ma anche una maggiore durata e affidabilità nel tempo.

${PREV.it}`,
      `Replacing the timing chain is a crucial job for the longevity and correct operation of BMW and MINI engines. It matters all the more because of the excessive wear and premature failures that can affect these vehicles, especially the BMW **N47 and N57** engines.

The N47 and N57, known for their specific issues, need particular care when the timing chain is replaced. BMWorks Performance offers targeted solutions, using advanced technology and highly qualified staff to deliver efficient, reliable work.

## A tailored approach

Our approach focuses on accurately diagnosing the specific condition of each vehicle, allowing precise, targeted work. The BMWorks Performance method is based on a detailed analysis of symptoms and signs of wear, combining routine maintenance with a proactive strategy to prevent future failures. This restores full engine efficiency and gives greater durability and reliability over time.

${PREV.en}`),
    gallery: ['chain-a.webp', 'chain-b.webp', ...[10, 9, 1, 2, 3, 4, 5, 6, 7, 8].map(n => `chain-${n}.webp`)],
    faqTitle: L('Quando è il momento di sostituire la catena di distribuzione?', 'When is it time to replace the timing chain?'),
    faq: [
      { q: L('Quando dovrei considerare la sostituzione della catena di distribuzione?', 'When should I consider replacing the timing chain?'), a: L('La sostituzione è consigliata quando si verificano rumori insoliti dal motore, una diminuzione delle prestazioni, o dopo un certo chilometraggio specifico per il modello di veicolo.', 'Replacement is recommended when you hear unusual engine noises, notice a drop in performance, or reach the mileage specified for your model.') },
      { q: L('Quali sono i segnali di una catena di distribuzione usurata?', 'What are the signs of a worn timing chain?'), a: L('I segnali includono un funzionamento rumoroso del motore, problemi nell’avvio e una perdita generale di efficienza del motore.', 'Signs include a noisy engine, starting problems and a general loss of engine efficiency.') },
      { q: L('La catena di distribuzione può rompersi improvvisamente?', 'Can a timing chain break suddenly?'), a: L('È raro, ma possibile. Una rottura improvvisa può causare danni gravi e costosi al motore.', 'It is rare, but possible. A sudden failure can cause serious and expensive engine damage.') },
      { q: L('Qual è la differenza tra catena di distribuzione e cinghia di distribuzione?', 'What is the difference between a timing chain and a timing belt?'), a: L('La catena è generalmente più duratura e robusta rispetto alla cinghia, ma può richiedere una manutenzione più costosa quando si danneggia.', 'A chain is generally more durable and robust than a belt, but can be more expensive to deal with when it fails.') },
      { q: L('La manutenzione regolare può prolungare la vita della catena di distribuzione?', 'Can regular maintenance extend the life of the timing chain?'), a: L('Sì, la manutenzione regolare può aiutare a identificare problemi prima che diventino seri e prolungare la vita della catena.', 'Yes, regular maintenance helps identify problems before they become serious and extends the life of the chain.') },
      { q: L('Cosa succede se ritardo la sostituzione della catena di distribuzione?', 'What happens if I delay replacing the timing chain?'), a: L('Ritardare la sostituzione può portare a danni maggiori al motore, aumentando il rischio di guasti costosi.', 'Delaying replacement can lead to greater engine damage and a higher risk of costly failures.') },
      { q: L('BMWorks può effettuare una diagnosi per determinare se la catena deve essere sostituita?', 'Can BMWorks diagnose whether the chain needs replacing?'), a: L('Sì, offriamo servizi di diagnosi avanzata per determinare lo stato della catena e se è necessaria una sostituzione.', 'Yes, we offer advanced diagnostics to assess the condition of the chain and whether replacement is needed.') },
    ],
  },
  {
    key: 'svc-gearbox', slug: L('servizio-cambio-automatico-bmw', 'bmw-automatic-gearbox-service'), card: 'svc-gearbox2.webp',
    nav: L('Servizio cambio automatico BMW', 'BMW automatic gearbox service'),
    short: L('Sostituzione olio e filtro con ZF Lifeguard Fluid 8 per trasmissioni sempre al meglio.', 'Oil and filter change with ZF Lifeguard Fluid 8 to keep transmissions at their best.'),
    title: L('Servizio cambio automatico BMW a Milano | BMWorks Performance', 'BMW automatic gearbox service in Milan | BMWorks Performance'),
    desc: L('Manutenzione del cambio automatico BMW: svuotamento completo, sostituzione filtro e olio ZF Lifeguard Fluid 8.', 'BMW automatic gearbox maintenance: full drain, filter replacement and ZF Lifeguard Fluid 8 oil.'),
    h1: L('Servizio cambio automatico BMW', 'BMW automatic gearbox service'),
    lead: L('Ecco perché è cruciale scegliere BMWorks Performance per la manutenzione della trasmissione.', 'Why it is crucial to choose BMWorks Performance to look after your transmission.'),
    body: L(
      `## La procedura di manutenzione: oltre la semplice sostituzione dell’olio

La manutenzione di un cambio automatico BMW non si limita alla semplice sostituzione dell’olio. Durante questo processo, BMWorks esegue una serie di passaggi critici per assicurare il corretto funzionamento e la longevità della trasmissione. Questi includono:

- Svuotamento completo del cambio dal vecchio olio.
- Rimozione e sostituzione del filtro dell’olio del cambio.
- Riempimento del cambio con olio **ZF Lifeguard Fluid 8**, specificatamente prodotto per queste trasmissioni.

Questi passaggi sono fondamentali per mantenere le trasmissioni in condizioni ottimali, specialmente considerando che alcuni componenti delle trasmissioni, come le frizioni, sono progettati per usurarsi con l’utilizzo.

${PREV.it}

## L’offerta di BMWorks Performance: un panorama completo

BMWorks Performance offre una gamma di servizi oltre alla manutenzione del cambio automatico. Questi includono la [rimappatura centraline](@remap), servizi specifici per BMW e MINI, [riparazioni meccaniche ed elettriche](@svc-repairs), [manutenzione e riparazione del ripartitore di coppia (4×4)](@svc-xdrive), [codifica, programmazione e aggiornamento software](@svc-coding) e molto altro. Ogni servizio è eseguito con la stessa attenzione ai dettagli e competenza che caratterizza il servizio di cambio automatico.`,
      `## The service procedure: more than a simple oil change

Servicing a BMW automatic gearbox is not just a matter of changing the oil. During the process, BMWorks carries out a series of critical steps to ensure the transmission works correctly and lasts. These include:

- Completely draining the old oil from the gearbox.
- Removing and replacing the gearbox oil filter.
- Refilling the gearbox with **ZF Lifeguard Fluid 8**, made specifically for these transmissions.

These steps are fundamental to keeping transmissions in optimum condition, especially since some transmission components, such as the clutches, are designed to wear with use.

${PREV.en}

## What BMWorks Performance offers: the full picture

BMWorks Performance offers a range of services beyond automatic gearbox maintenance. These include [ECU remapping](@remap), BMW and MINI-specific services, [mechanical and electrical repairs](@svc-repairs), [transfer case (4×4) maintenance and repair](@svc-xdrive), [coding, programming and software updates](@svc-coding) and much more. Every job is carried out with the same attention to detail and expertise as our automatic gearbox service.`),
  },
  {
    key: 'svc-repairs', slug: L('riparazioni-meccaniche-ed-elettriche-bmw-e-mini', 'mechanical-electrical-repairs'), card: 'real-engine.webp', hero: 'real-m3.webp', videos: ['m3', 'motore'],
    nav: L('Riparazioni meccaniche ed elettriche', 'Mechanical and electrical repairs'),
    short: L('Da Vanos e turbina ad alternatori, ABS/DSC e cablaggi: riparazioni garantite.', 'From Vanos and turbos to alternators, ABS/DSC and wiring: guaranteed repairs.'),
    title: L('Riparazioni meccaniche ed elettriche BMW e MINI a Milano | BMWorks', 'BMW and MINI mechanical and electrical repairs in Milan | BMWorks'),
    desc: L('Riparazioni meccaniche ed elettriche specializzate per BMW e MINI: motore, raffreddamento, turbina, DPF, elettronica, ABS/DSC.', 'Specialist mechanical and electrical repairs for BMW and MINI: engine, cooling, turbo, DPF, electronics, ABS/DSC.'),
    h1: L('Riparazioni meccaniche ed elettriche per BMW e MINI', 'Mechanical and electrical repairs for BMW and MINI'),
    lead: L('BMWorks Performance, con sede a Milano, è il punto di riferimento per riparazioni meccaniche ed elettriche specializzate su BMW e MINI.', 'Based in Milan, BMWorks Performance is the go-to workshop for specialist mechanical and electrical repairs on BMW and MINI.'),
    body: L(
      `## Riparazioni meccaniche specializzate

Le riparazioni meccaniche per BMW e MINI includono:

- **Sostituzione catene di distribuzione**: essenziale per il corretto funzionamento del motore.
- **Sostituzione guarnizione testa e coperchio bilancieri**: cruciale per mantenere l’integrità del motore.
- **Ricondizionamento e sostituzione pompe carburante ad alta pressione e iniettori**: per migliorare l’efficienza del carburante.
- **Sostituzione Vanos e motore Valvetronic**: fondamentale per la regolazione delle valvole.
- **Riparazione del sistema di raffreddamento e sostituzione della pompa dell’acqua**: per prevenire il surriscaldamento del motore.
- **Eliminazione delle farfalle di turbolenza (swirl flaps) e revisione/sostituzione della turbina**: per ottimizzare le prestazioni del motore.
- **Pulizia e rimozione del DPF**: per mantenere puliti i sistemi di scarico.

![Riparazioni meccaniche BMW e MINI](rep-1.webp)

## Riparazioni elettriche avanzate

I servizi di riparazione elettrica per BMW e MINI comprendono:

- **Alternatori e motorini di avviamento**: componenti cruciali per l’avvio del veicolo.
- **Attuatori turbina e sistemi elettrici del motore**: per un’efficienza ottimale.
- **Chiusura centralizzata e alzacristalli elettrici**: per la comodità e la sicurezza.
- **Specchi elettrici, luci e moduli**: per garantire visibilità e funzionalità.
- **Sistemi ABS e DSC**: per la sicurezza in frenata e il controllo della stabilità.
- **Moduli e sensori di parcheggio, radio/NBT e Bluetooth**: per un’esperienza di guida moderna e confortevole.
- **Riparazione del cablaggio**: per mantenere l’integrità del sistema elettrico.

${PREV.it}

![Manutenzione preventiva e diagnostica avanzata](rep-4.webp)

## Personalizzazione e upgrade delle prestazioni

Al di là delle riparazioni standard, BMWorks Performance offre anche servizi personalizzati per coloro che desiderano migliorare le prestazioni del loro veicolo. Questo include tuning del motore, upgrade dei sistemi di scarico e ottimizzazione della trasmissione per massimizzare potenza ed efficienza. Questi servizi sono ideali per gli appassionati che desiderano un’esperienza di guida unica e su misura, mantenendo sempre gli standard di qualità e sicurezza che caratterizzano le auto BMW e MINI.

In aggiunta, offriamo la personalizzazione estetica, come la modifica dei cerchi e l’installazione di kit carrozzeria sportivi, per chi desidera non solo un’auto performante, ma anche dal design accattivante. La scelta dei materiali di alta qualità e l’attenzione ai dettagli sono fondamentali per noi, assicurando che ogni modifica non solo migliori l’aspetto e le prestazioni, ma rispetti anche l’integrità originale del veicolo.

## Assistenza clienti e garanzie

La soddisfazione del cliente è una priorità assoluta per BMWorks Performance. Ogni intervento di riparazione o manutenzione è accompagnato da una dettagliata spiegazione delle procedure effettuate, insieme a consigli su come mantenere al meglio il veicolo. Inoltre, **tutte le riparazioni sono garantite**, offrendo ai clienti tranquillità e fiducia nella qualità dei servizi ricevuti.

BMWorks Performance offre anche un servizio post-vendita proattivo, contattando i clienti per assicurarsi che siano completamente soddisfatti e che le loro auto funzionino al meglio. La nostra politica di trasparenza e onestà ci permette di costruire relazioni di lungo termine con i nostri clienti. Ogni intervento viene eseguito con cura e attenzione ai dettagli, utilizzando ricambi originali di alta qualità. [Contattaci oggi stesso per un preventivo!](@contact)`,
      `## Specialist mechanical repairs

Mechanical repairs for BMW and MINI include:

- **Timing chain replacement**: essential for the engine to run correctly.
- **Head gasket and rocker cover gasket replacement**: crucial to maintaining engine integrity.
- **Reconditioning and replacement of high-pressure fuel pumps and injectors**: to improve fuel efficiency.
- **Vanos and Valvetronic motor replacement**: fundamental to valve control.
- **Cooling system repair and water pump replacement**: to prevent engine overheating.
- **Swirl flap removal and turbo overhaul/replacement**: to optimise engine performance.
- **DPF cleaning and removal**: to keep exhaust systems clean.

![BMW and MINI mechanical repairs](rep-1.webp)

## Advanced electrical repairs

Electrical repair services for BMW and MINI include:

- **Alternators and starter motors**: crucial components for starting the vehicle.
- **Turbo actuators and engine electrical systems**: for optimum efficiency.
- **Central locking and electric windows**: for convenience and security.
- **Electric mirrors, lights and modules**: for visibility and functionality.
- **ABS and DSC systems**: for safe braking and stability control.
- **Parking modules and sensors, radio/NBT and Bluetooth**: for a modern, comfortable drive.
- **Wiring loom repair**: to maintain the integrity of the electrical system.

${PREV.en}

![Preventive maintenance and advanced diagnostics](rep-4.webp)

## Customisation and performance upgrades

Beyond standard repairs, BMWorks Performance also offers tailored services for those who want to improve their vehicle’s performance. This includes engine tuning, exhaust system upgrades and transmission optimisation to maximise power and efficiency. These services are ideal for enthusiasts who want a unique, made-to-measure driving experience while keeping the quality and safety standards that define BMW and MINI cars.

We also offer cosmetic customisation, such as wheel changes and sports body kits, for those who want a car that looks as good as it performs. High-quality materials and attention to detail are fundamental to us, so that every modification improves looks and performance while respecting the vehicle’s original integrity.

## Customer care and guarantees

Customer satisfaction is an absolute priority at BMWorks Performance. Every repair or service comes with a detailed explanation of the work carried out, along with advice on how best to look after the vehicle. What is more, **all repairs are guaranteed**, giving customers peace of mind and confidence in the quality of the work.

BMWorks Performance also provides proactive after-sales care, contacting customers to make sure they are completely satisfied and their cars are running at their best. Our policy of transparency and honesty lets us build long-term relationships with our customers. Every job is carried out with care and attention to detail, using high-quality genuine parts. [Contact us today for a quote!](@contact)`),
    gallery: ['rep-1.webp', 'rep-3.webp', 'rep-4.webp', 'rep-5.webp'],
  },
  {
    key: 'svc-xdrive', slug: L('manutenzione-e-riparazione-del-ripartitore-di-copia-4x4', 'transfer-case-4x4'), card: 'blog-8361ed67.webp', hero: 'blog-930fde00.webp',
    nav: L('Ripartitore di coppia (4×4)', 'Transfer case (4×4)'),
    short: L('Manutenzione e riparazione del ripartitore xDrive per trazione e stabilità impeccabili.', 'xDrive transfer case maintenance and repair for flawless traction and stability.'),
    title: L('Manutenzione e riparazione ripartitore di coppia 4×4 BMW e MINI | BMWorks', 'BMW and MINI 4×4 transfer case maintenance and repair | BMWorks'),
    desc: L('Diagnosi, manutenzione e riparazione del ripartitore di coppia 4×4 (xDrive) per BMW e MINI a Milano.', 'Diagnosis, maintenance and repair of the 4×4 (xDrive) transfer case for BMW and MINI in Milan.'),
    h1: L('Manutenzione e riparazione del ripartitore di coppia 4×4', 'Transfer case (4×4) maintenance and repair'),
    lead: L('Un componente fondamentale per l’equilibrio e la stabilità delle BMW e MINI a trazione integrale.', 'A fundamental component for the balance and stability of all-wheel-drive BMWs and MINIs.'),
    body: L(
      `Nel mondo delle auto di lusso, la manutenzione e riparazione dei componenti vitali è cruciale per garantire prestazioni ottimali e una guida sicura. Il ripartitore di coppia 4×4, un componente fondamentale per le vetture BMW e MINI, non fa eccezione. La corretta manutenzione e riparazione di questo dispositivo è essenziale per mantenere l’equilibrio e la stabilità del veicolo durante la guida.

### Importanza del ripartitore di coppia 4×4

Il ripartitore di coppia 4×4 è un componente essenziale per la trazione e la maneggevolezza delle vetture BMW e MINI. La sua corretta manutenzione e riparazione è fondamentale per garantire prestazioni ottimali e una guida sicura.

### Segni di guasto del ripartitore di coppia 4×4 BMW

Identificare tempestivamente i segnali di un potenziale guasto è fondamentale. Alcuni sintomi includono **rumori insoliti, problemi di trazione o spie di avvertimento sul cruscotto**. In presenza di questi sintomi è consigliato rivolgersi a un esperto come BMWorks Performance.

### Manutenzione e diagnosi

La manutenzione del ripartitore di coppia 4×4 include controlli regolari, diagnosi computerizzata e interventi professionali. Identificare tempestivamente i segni di guasto e affrontarli prontamente è cruciale per evitare danni maggiori.

### Scelta del servizio specializzato

Affidarsi a un servizio specializzato come BMWorks Performance garantisce competenze specifiche e l’utilizzo di attrezzature avanzate per la manutenzione e riparazione di veicoli BMW e MINI. L’esperienza e la conoscenza approfondita dei tecnici assicurano interventi di alta qualità.

### Consigli per la manutenzione preventiva

Per mantenere il vostro ripartitore di coppia 4×4 in condizioni ottimali, seguite questi consigli:

- Effettuate controlli periodici, anche in assenza di segni evidenti di malfunzionamento.
- Affrontate tempestivamente qualsiasi segnale di guasto per evitare danni maggiori.
- Affidatevi a tecnici specializzati per manutenzioni regolari e riparazioni.

### Vantaggi della manutenzione professionale

- **Competenza specifica**: tecnici esperti in BMW e MINI, con conoscenze approfondite e specialistiche.
- **Attrezzature avanzate**: strumenti diagnostici all’avanguardia per identificare e risolvere problemi complessi.
- **Garanzia di qualità**: l’utilizzo di parti originali e la conformità agli standard del produttore assicurano riparazioni di alta qualità.

### Benefici a lungo termine e valore di rivendita

Una manutenzione regolare e professionale non solo garantisce prestazioni ottimali, ma contribuisce anche a mantenere alto il valore di rivendita del veicolo. Auto ben mantenute sono più attraenti per i potenziali acquirenti e tendono a mantenere un valore di mercato superiore.

### Esperienza di guida migliorata

Una manutenzione adeguata si traduce in una migliore esperienza di guida. Veicoli con un ripartitore di coppia 4×4 ben mantenuto offrono maggiore stabilità, trazione e un controllo generale più affidabile, elementi essenziali per una guida sicura e piacevole.`,
      `In the world of premium cars, maintaining and repairing vital components is crucial to optimum performance and safe driving. The 4×4 transfer case, a fundamental component of BMW and MINI cars, is no exception. Correct maintenance and repair of this unit is essential to keep the vehicle balanced and stable on the road.

### Why the 4×4 transfer case matters

The transfer case is essential to the traction and handling of BMW and MINI cars. Maintaining and repairing it properly is fundamental to optimum performance and safe driving.

### Signs of a failing BMW transfer case

Spotting the signs of a potential failure early is essential. Symptoms include **unusual noises, traction problems or warning lights on the dashboard**. If you notice any of these, it is best to consult a specialist such as BMWorks Performance.

### Maintenance and diagnosis

Transfer case maintenance includes regular checks, computer diagnostics and professional intervention. Identifying faults early and dealing with them promptly is crucial to avoiding greater damage.

### Choosing a specialist

Relying on a specialist such as BMWorks Performance guarantees specific expertise and advanced equipment for maintaining and repairing BMW and MINI vehicles. Our technicians’ experience and in-depth knowledge ensure high-quality work.

### Preventive maintenance tips

To keep your transfer case in optimum condition, follow these tips:

- Have it checked periodically, even when there are no obvious signs of a fault.
- Deal with any sign of failure promptly to avoid greater damage.
- Use specialist technicians for regular maintenance and repairs.

### The advantages of professional maintenance

- **Specific expertise**: technicians experienced in BMW and MINI, with in-depth specialist knowledge.
- **Advanced equipment**: state-of-the-art diagnostic tools to identify and solve complex problems.
- **Quality guarantee**: genuine parts and compliance with manufacturer standards ensure high-quality repairs.

### Long-term benefits and resale value

Regular, professional maintenance not only guarantees optimum performance but also helps keep the vehicle’s resale value high. Well-maintained cars are more attractive to buyers and tend to hold a higher market value.

### A better driving experience

Proper maintenance means a better drive. Vehicles with a well-maintained transfer case offer greater stability, traction and more dependable control overall — essential for safe, enjoyable driving.`),
  },
  {
    key: 'svc-coding', slug: L('bmw-e-mini-codifica-programmazione-e-aggiornamento-software', 'coding-programming-software-updates'), card: 'blog-6b6a3418.webp', videos: ['x6', 'mini'],
    nav: L('Codifica, programmazione e aggiornamento software', 'Coding, programming and software updates'),
    short: L('Sblocca le funzioni nascoste della tua BMW o MINI e aggiorna il software di bordo.', 'Unlock your BMW or MINI’s hidden features and update its on-board software.'),
    title: L('Codifica e aggiornamento software BMW e MINI | BMWorks Performance', 'BMW and MINI coding and software updates | BMWorks Performance'),
    desc: L('Sblocca tutte le funzioni della tua BMW o MINI con i servizi di codifica, programmazione e aggiornamento software di BMWorks Performance.', 'Unlock every feature of your BMW or MINI with coding, programming and software updates from BMWorks Performance.'),
    h1: L('Codifica, programmazione e aggiornamento software BMW e MINI', 'BMW and MINI coding, programming and software updates'),
    lead: L('Sblocca tutte le funzioni della tua BMW o MINI con attrezzature all’avanguardia.', 'Unlock every feature of your BMW or MINI with state-of-the-art equipment.'),
    body: L(
      `BMWorks Performance è specializzata nei servizi di codifica, programmazione e aggiornamento software per veicoli BMW e MINI. Grazie alla nostra esperienza e alle attrezzature all’avanguardia, siamo in grado di sbloccare tutte le funzioni nascoste della tua auto, migliorandone le prestazioni e la comodità d’uso.

## Cosa si intende per codifica e programmazione?

La codifica consiste nell’attivazione di funzioni già presenti nell’elettronica di bordo della vettura ma non abilitate di default dalla casa madre. Tra queste ci sono ad esempio:

- Welcome lights (luci di benvenuto)
- Specchietti ripiegabili elettricamente
- Chiusura automatica delle portiere
- Chiusura comfort (finestrini e tetto dal telecomando)
- Lettura digitale della velocità sul quadro
- Video in movimento
- E molto altro ancora

Attraverso una programmazione dedicata, andiamo a modificare i parametri del software per attivare queste utili funzionalità, personalizzando la tua BMW o MINI secondo le tue esigenze.

## Presso BMWorks Performance possiamo abilitarle

I veicoli BMW sono ricchi di funzioni utili che potrebbero non essere attivate dalla fabbrica:

- Bluetooth migliorato
- Video in movimento
- Start/Stop disattivato per impostazione predefinita
- Visualizzazione sportiva nell’iDrive
- Luci di benvenuto soft: si accendono gradualmente allo sblocco e si attenuano alla chiusura
- Segnale acustico di conferma alla chiusura/apertura del veicolo
- Riproduzione video da USB con attivazione dei codec aggiuntivi (unità principali NBT)
- Specchietti retrovisori elettrici ripiegabili con la chiusura centralizzata a distanza
- Tachimetro digitale sul quadro strumenti
- Logo di avvio M Performance sul quadro strumenti
- Logo di avvio M Performance sull’iDrive (solo veicoli NBT)
- Visualizzazione dell’intero messaggio SMS su iDrive anziché solo tre righe (richiede il sistema NBT)

## Aggiornamenti software ufficiali BMW e MINI

Oltre alla codifica, ci occupiamo anche di installare gli ultimi aggiornamenti software rilasciati da BMW e MINI. Questi update correggono eventuali bug, migliorano le prestazioni e talvolta introducono nuove funzioni. Mantenere il software della tua auto sempre aggiornato è fondamentale per garantirne l’affidabilità e l’efficienza.

### Vantaggi della codifica e degli aggiornamenti

- Sbloccare funzioni comfort e multimediali avanzate
- Personalizzare l’elettronica secondo i tuoi gusti
- Migliorare la sicurezza e le prestazioni del veicolo
- Risolvere eventuali problematiche software
- Aumentare il valore della tua BMW o MINI

## Programmazione e riparazione di centraline e moduli

Alcuni dei nostri servizi:

- Riparazione e programmazione della centralina, comprese centraline di seconda mano
- Riparazione moduli FRM
- Riparazione moduli luce
- Sblocco BDC/FEM per lettura dati, ISN o modifica del VIN
- Allineamento al VIN del veicolo di moduli donatori e centraline di seconda mano
- Programmazione del cambio automatico BMW a 8 rapporti quando sostituito con uno di seconda mano
- Spegnimento spia airbag
- Spegnimento spia protezione pedoni
- Spegnimento spia bloccasterzo
- Sostituzione e programmazione del cluster digitale 6WB
- Ultimo aggiornamento del software BMW

Affidati all’esperienza di BMWorks Performance per portare la tua auto al massimo delle sue potenzialità. [Contattaci](@contact) per richiedere maggiori informazioni o prenotare il tuo servizio di codifica e aggiornamento software, e scopri anche i nostri [servizi di tuning](@remap) per incrementare le prestazioni della tua BMW o MINI.`,
      `BMWorks Performance specialises in coding, programming and software updates for BMW and MINI vehicles. Thanks to our experience and state-of-the-art equipment, we can unlock all your car’s hidden features, improving performance and everyday convenience.

## What do coding and programming mean?

Coding means activating functions that are already present in the car’s on-board electronics but not enabled by default by the manufacturer. Examples include:

- Welcome lights
- Electrically folding mirrors
- Automatic door locking
- Comfort closing (windows and roof from the key fob)
- Digital speed readout on the instrument cluster
- Video in motion
- And much more

Through dedicated programming, we modify the software parameters to activate these useful functions, personalising your BMW or MINI to suit you.

## At BMWorks Performance we can enable them

BMWs are packed with useful functions that may not have been activated at the factory:

- Enhanced Bluetooth
- Video in motion
- Start/Stop off by default
- Sport displays in iDrive
- Soft welcome lights: fading up on unlocking and down on locking
- Audible confirmation when locking/unlocking the vehicle
- USB video playback with additional codec activation (NBT head units)
- Electric mirrors folding with the remote central locking
- Digital speedometer on the instrument cluster
- M Performance start-up logo on the instrument cluster
- M Performance start-up logo in iDrive (NBT vehicles only)
- Full SMS message display in iDrive instead of just three lines (requires the NBT system)

## Official BMW and MINI software updates

As well as coding, we install the latest software updates released by BMW and MINI. These updates fix bugs, improve performance and sometimes add new features. Keeping your car’s software up to date is fundamental to its reliability and efficiency.

### The benefits of coding and updates

- Unlock advanced comfort and multimedia features
- Personalise the electronics to your taste
- Improve the vehicle’s safety and performance
- Resolve software issues
- Increase the value of your BMW or MINI

## ECU and module programming and repair

Some of our services:

- ECU repair and programming, including second-hand ECUs
- FRM module repair
- Light module repair
- BDC/FEM unlocking to read data, ISN or change the VIN
- Matching donor modules and second-hand ECUs to the vehicle’s VIN
- Programming the BMW 8-speed automatic gearbox when replaced with a second-hand unit
- Airbag warning light off
- Pedestrian protection warning light off
- Steering lock warning light off
- 6WB digital cluster replacement and programming
- Latest BMW software update

Trust the experience of BMWorks Performance to get the very most from your car. [Contact us](@contact) for more information or to book your coding and software update, and discover our [tuning services](@remap) to boost the performance of your BMW or MINI.`),
  },
  {
    key: 'svc-diag', slug: L('diagnosi-computerizzata-bmw-e-mini', 'computer-diagnostics'), card: 'blog-8af30e42.webp',
    nav: L('Diagnosi computerizzata', 'Computer diagnostics'),
    short: L('Diagnosi a livello di concessionaria su tutti i moduli elettronici, a una frazione del prezzo.', 'Dealer-level diagnostics across every electronic module, at a fraction of the price.'),
    title: L('Diagnosi computerizzata BMW e MINI a Milano | BMWorks Performance', 'BMW and MINI computer diagnostics in Milan | BMWorks Performance'),
    desc: L('Diagnosi computerizzata completa per BMW e MINI, equivalente a quella delle concessionarie ufficiali ma a una frazione del prezzo.', 'Full computer diagnostics for BMW and MINI, equivalent to official dealers but at a fraction of the price.'),
    h1: L('Diagnosi computerizzata BMW e MINI a livello di concessionaria', 'Dealer-level computer diagnostics for BMW and MINI'),
    lead: L('Un servizio equivalente a quello delle concessionarie ufficiali, ma a una frazione del prezzo.', 'A service equivalent to official dealers, at a fraction of the price.'),
    body: L(
      `BMWorks Performance offre un servizio di diagnosi computerizzata completa per veicoli BMW e MINI. Grazie alle nostre apparecchiature all’avanguardia e al nostro team di esperti, siamo in grado di analizzare approfonditamente tutti i moduli elettronici della vostra auto, individuando eventuali problemi e guasti.

## Un processo di diagnosi avanzato

Durante il processo di diagnosi, il nostro team di tecnici specializzati collega le apparecchiature diagnostiche dedicate a ciascuna unità di controllo del veicolo. BMW collabora con i produttori di centraline per sviluppare unità di controllo sempre più avanzate: queste non si limitano a gestire un singolo componente, ma possono anche monitorare, regolare e registrare i guasti contemporaneamente.

Il nostro team connette le apparecchiature diagnostiche a unità come la centralina del motore (DME o DDE), il sistema di frenata ABS e l’airbag. Così facendo, accediamo a informazioni dettagliate sullo stato di ogni componente e individuiamo eventuali anomalie.

## I vantaggi della diagnosi computerizzata

Sottoponendo regolarmente la vostra BMW o MINI alla diagnosi computerizzata presso BMWorks Performance, potrete godere di numerosi vantaggi:

- Identifichiamo precocemente i problemi, prima che si trasformino in guasti più gravi e costosi.
- Ottimizziamo le prestazioni del veicolo grazie alla corretta calibrazione delle unità di controllo.
- Risparmiate sui costi di manutenzione e riparazione a lungo termine, con maggiore sicurezza e affidabilità.

Non affidate la diagnosi della vostra BMW o MINI a officine generiche con strumenti universali: scegliete l’esperienza e la professionalità di BMWorks. Per prenotare il servizio di diagnosi elettronica avanzata, visitate la nostra [pagina contatti](@contact).

## L’importanza della manutenzione regolare

Oltre al check-up computerizzato, è fondamentale sottoporre la vostra BMW o MINI a una manutenzione regolare, che garantisce prestazioni, sicurezza e longevità del veicolo. BMWorks Performance offre [pacchetti di manutenzione completi](@svc-service), che includono il cambio dell’olio, la sostituzione dei filtri e il controllo dei freni. Affidatevi a BMWorks Performance per mantenere la vostra BMW o MINI in perfette condizioni.`,
      `BMWorks Performance offers full computer diagnostics for BMW and MINI vehicles. With our state-of-the-art equipment and expert team, we can analyse every electronic module in your car in depth, identifying any problems and faults.

## An advanced diagnostic process

During diagnosis, our specialist technicians connect dedicated diagnostic equipment to each of the vehicle’s control units. BMW works with ECU manufacturers to develop ever more advanced control units: these do not simply run a single component, but can also monitor, adjust and log faults at the same time.

Our team connects the diagnostic equipment to units such as the engine ECU (DME or DDE), the ABS braking system and the airbag. This gives us detailed information on the state of each component and reveals any anomalies.

## The benefits of computer diagnostics

Having your BMW or MINI regularly checked at BMWorks Performance brings many benefits:

- We identify problems early, before they turn into more serious and costly failures.
- We optimise vehicle performance through correct calibration of the control units.
- You save on long-term maintenance and repair costs, with greater safety and reliability.

Do not entrust your BMW or MINI’s diagnosis to general garages with universal tools: choose the experience and professionalism of BMWorks. To book advanced electronic diagnostics, visit our [contact page](@contact).

## The importance of regular maintenance

Alongside the computer check-up, it is essential to service your BMW or MINI regularly to safeguard performance, safety and longevity. BMWorks Performance offers [complete service packages](@svc-service), including oil changes, filter replacement and brake checks. Trust BMWorks Performance to keep your BMW or MINI in perfect condition.`),
  },
];

export const REMAP = {
  title: L('Rimappatura centraline a Milano | BMWorks Performance', 'ECU remapping in Milan | BMWorks Performance'),
  desc: L('Rimappatura centralina di alta qualità per auto, moto, camper e veicoli commerciali. Cerca il tuo veicolo e scopri i guadagni di potenza.', 'High-quality ECU remapping for cars, bikes, motorhomes and commercial vehicles. Look up your vehicle and see the power gains.'),
  kicker: L('Servizio rimappatura', 'Remapping service'),
  h1: L('Rimappatura centraline di alta qualità', 'High-quality ECU remapping'),
  lead: L('Più potenza, più coppia, consumi ridotti: una mappa ottimizzata su misura per il tuo veicolo, entro limiti sicuri.', 'More power, more torque, lower consumption: a map optimised for your vehicle, within safe limits.'),
  toolKicker: L('Cerca il tuo veicolo', 'Look up your vehicle'),
  toolTitle: L('Scopri quanto può guadagnare il tuo veicolo', 'See how much your vehicle can gain'),
  toolText: L('Seleziona tipo, marca, modello, carburante e motore per vedere potenza e coppia prima e dopo la rimappatura.', 'Choose the type, make, model, fuel and engine to see power and torque before and after remapping.'),
  toolOff: L('La ricerca veicolo si attiva sul sito ufficiale bmworks.it. Nel frattempo chiedici un preventivo qui sotto.', 'The vehicle look-up works on the live bmworks.it site. In the meantime, request a quote below.'),
  toolNote: L('Strumento fornito dal nostro partner Quantum Tuning. Non trovi il tuo veicolo? Chiedici un preventivo qui sotto.', 'Tool provided by our partner Quantum Tuning. Can’t find your vehicle? Request a quote below.'),
  lookKicker: L('Preventivo rimappatura', 'Remap quote'),
  lookTitle: L('Quanto può guadagnare il tuo veicolo?', 'How much can your vehicle gain?'),
  lookText: L('Indicaci il veicolo: ti rispondiamo con i guadagni di potenza e coppia previsti e il prezzo, di solito in giornata.', 'Tell us about your vehicle: we will reply with the expected power and torque gains and the price, usually the same day.'),
  q: {
    make: L('Marca', 'Make'), makePh: L('Es. BMW', 'E.g. BMW'),
    model: L('Modello', 'Model'), modelPh: L('Es. 320d F30', 'E.g. 320d F30'),
    engine: L('Motore / potenza', 'Engine / power'), enginePh: L('Es. 2.0 diesel 190 CV', 'E.g. 2.0 diesel 190 hp'),
    year: L('Anno', 'Year'), fuel: L('Alimentazione', 'Fuel'),
    fuels: L(['Diesel', 'Benzina', 'Ibrida'], ['Diesel', 'Petrol', 'Hybrid']),
    type: L('Tipo di veicolo', 'Vehicle type'),
    types: L(['Auto', 'Moto', 'Camper', 'Veicolo commerciale'], ['Car', 'Motorbike', 'Motorhome', 'Commercial vehicle']),
    level: L('Livello', 'Level'),
    levels: L(['Non so, consigliatemi', 'Performance Green (economia)', 'Performance Blue (potenza + economia)', 'Performance Red (massima potenza)'], ['Not sure, advise me', 'Performance Green (economy)', 'Performance Blue (power + economy)', 'Performance Red (maximum power)']),
    notes: L('Note (facoltative)', 'Notes (optional)'),
    subject: L('Preventivo rimappatura', 'Remap quote'),
  },
  steps: L([['Ci scrivi', 'Mandaci i dati del veicolo con il modulo o su WhatsApp.'], ['Ti rispondiamo', 'Guadagni previsti, livello consigliato e prezzo, senza impegno.'], ['Rimappatura', 'Circa 2 ore in officina, con prova al banco prima e dopo.']],
    [['You message us', 'Send your vehicle details with the form or on WhatsApp.'], ['We reply', 'Expected gains, the recommended level and the price, with no obligation.'], ['Remap', 'Around 2 hours in the workshop, dyno-tested before and after.']]),
  body: L(
    `## Come funziona

I nostri tecnici si collegano alla centralina del veicolo tramite la presa diagnostica, leggono il file originale di gestione del motore e lo ottimizzano su misura per il tuo veicolo. La nuova mappa viene poi programmata in centralina: di solito basta meno di un’ora.

- Mappa personalizzata, non una centralina aggiuntiva
- File originale conservato in un archivio sicuro: il ritorno all’originale è sempre possibile
- Tutte le funzioni di sicurezza del motore restano attive
- Disponibile per BMW e MINI e per tutti gli altri marchi

Hai dubbi? Leggi le [domande frequenti sulla rimappatura](@faq) oppure [contattaci](@contact).`,
    `## How it works

Our technicians connect to the vehicle’s ECU through the diagnostic socket, read the original engine management file and optimise it specifically for your vehicle. The new map is then programmed into the ECU: it usually takes less than an hour.

- A custom map, not a tuning box
- Original file kept in a secure archive: you can always return to stock
- All engine safety functions remain active
- Available for BMW and MINI and for all other makes

Any doubts? Read the [remapping FAQ](@faq) or [contact us](@contact).`),
};

export const OPTIONS = {
  title: L('Rimappatura centralina auto BMW | Chip tuning BMW | BMWorks', 'BMW ECU remapping | BMW chip tuning | BMWorks'),
  desc: L('Scopri le opzioni di rimappatura centralina e chip tuning BMW di BMWorks: Performance Green, Blue e Red. Aumenta potenza e prestazioni.', 'Discover BMWorks’ ECU remapping and BMW chip tuning options: Performance Green, Blue and Red. Increase power and performance.'),
  h1: L('Rimappatura centralina auto e chip tuning BMW', 'Car ECU remapping and BMW chip tuning'),
  lead: L('Tre livelli di rimappatura — Performance Green, Blue e Red — per aumentare potenza, coppia e reattività in modo sicuro e affidabile.', 'Three remap levels — Performance Green, Blue and Red — to increase power, torque and responsiveness safely and reliably.'),
  intro: L(
    `BMWorks offre tre livelli di rimappatura della centralina e chip tuning per ottimizzare le performance della tua auto BMW: **Performance Green, Blue e Red**. Queste soluzioni permettono di aumentare potenza, coppia e reattività del motore in modo sicuro e affidabile.

## Cos’è la rimappatura della centralina?

La rimappatura agisce sul software che gestisce il funzionamento del propulsore, modificando parametri come la pressione del turbo, i tempi di iniezione, il limitatore di coppia e la quantità di carburante. Questo “libera” la potenza extra presente di serie nei motori BMW, migliorando l’erogazione e la risposta dell’acceleratore.

## I vantaggi del chip tuning

Il chip tuning BMW di BMWorks offre numerosi benefici:

- Incrementi di potenza dal 15% al 25%
- Aumenti di coppia su tutto l’arco di erogazione
- Riduzione dei consumi fino all’8%
- Migliore accelerazione e ripresa
- Erogazione più fluida e progressiva
- Maggiore piacere di guida

Grazie alla nostra esperienza, realizziamo rimappature sicure che rispettano i parametri originali senza compromettere l’affidabilità del motore. Ogni auto viene testata al banco prima e dopo l’intervento per verificare i risultati.`,
    `BMWorks offers three levels of ECU remapping and chip tuning to optimise the performance of your BMW: **Performance Green, Blue and Red**. These solutions increase engine power, torque and responsiveness safely and reliably.

## What is ECU remapping?

Remapping works on the software that manages the engine, changing parameters such as turbo pressure, injection timing, the torque limiter and fuel quantity. This “releases” the extra power built into BMW engines as standard, improving delivery and throttle response.

## The benefits of chip tuning

BMW chip tuning from BMWorks offers many benefits:

- Power increases of 15% to 25%
- Torque gains across the whole rev range
- Fuel consumption reduced by up to 8%
- Better acceleration and in-gear pick-up
- Smoother, more progressive delivery
- Greater driving pleasure

Thanks to our experience, we produce safe remaps that respect the original parameters without compromising engine reliability. Every car is tested on the dyno before and after the work to verify the results.`),
  tiersKicker: L('Tre livelli', 'Three levels'),
  tiersTitle: L('Opzioni di rimappatura centralina BMW', 'BMW ECU remapping options'),
  tiers: [
    { color: 'green', name: 'Green', tag: L('Buona potenza e massima economia', 'Good power and maximum economy'),
      points: L([
        'Progettato per restituire una migliore economia nei motori turbodiesel.',
        'Ricalibrando i limiti di coppia del motore, ai regimi più bassi beneficerai di prestazioni aggiuntive e di una maggiore economia.',
        'Ai regimi più elevati il software incoraggia il passaggio alla marcia superiore, per mantenere il motore nella sua finestra ottimale.',
        'Una scelta molto popolare tra i proprietari di grandi flotte, dove il risparmio di carburante incide sul profitto finale.'],
      [
        'Designed to deliver better economy in turbo-diesel engines.',
        'By re-characterising the engine’s torque limits, you gain extra performance and better economy at lower revs.',
        'At higher revs the software encourages upshifts, keeping the engine in its optimum window.',
        'A very popular choice with large fleet owners, where the extra fuel saving counts on the bottom line.']) },
    { color: 'blue', name: 'Blue', tag: L('Ibrido potenza / economia', 'Blended power / economy'),
      points: L([
        'La scelta di rimappatura più popolare: il miglior mix di potenza ed economia praticamente in tutti i motori turbodiesel.',
        'Progettato per liberare il motore e ampliare la gamma reale di coppia e potenza.',
        'Offre una migliore esperienza di guida restituendo al contempo un miglioramento del consumo di carburante.',
        'I parametri sono gestiti attentamente per ottimizzare i tempi di combustione e ottenere pressioni ottimali nel cilindro.'],
      [
        'The most popular remap: the best mix of power and economy in practically every turbo-diesel engine.',
        'Designed to free up the engine and widen the usable range of torque and power.',
        'Delivers a better drive while also returning improved fuel consumption.',
        'Parameters are carefully managed to optimise combustion timing and achieve ideal cylinder pressures.']) },
    { color: 'red', name: 'Red', tag: L('Elevata potenza e prestazioni eccezionali', 'High power and exceptional performance'),
      points: L([
        'Progettato per liberare tutto il potenziale del tuo motore.',
        'Può essere installato sia su veicoli a benzina che diesel.',
        'Ideale quando sono richieste potenza e coppia extra, con un’accelerazione ottimizzata e una fascia di coppia massima più ampia — o semplicemente per godersi il proprio veicolo.'],
      [
        'Designed to release the full potential of your engine.',
        'Can be installed on both petrol and diesel vehicles.',
        'Ideal where extra power and torque are needed, with optimised acceleration and a wider peak-torque band — or simply to enjoy your vehicle.']) },
  ],
  outro: L(
    `## Vantaggi della rimappatura centralina

Grazie all’esperienza di BMWorks Performance, le nostre rimappature sono sicure e affidabili e rispettano i parametri originali. I benefici comprendono aumenti di potenza dal 15% al 25% e riduzioni dei consumi fino all’8%, a seconda del motore e del livello di rimappatura scelto. Ogni auto viene testata al banco prima e dopo l’intervento per verificare i risultati.

La procedura richiede **circa 2 ore** ed è **totalmente reversibile**, senza modifiche fisiche alla centralina. Per informazioni o per [prenotare un appuntamento](@contact), contattaci o vieni a trovarci a Milano.`,
    `## The benefits of ECU remapping

Thanks to the experience of BMWorks Performance, our remaps are safe and reliable and respect the original parameters. Benefits include power increases of 15% to 25% and fuel savings of up to 8%, depending on the engine and the remap level chosen. Every car is dyno-tested before and after the work to verify the results.

The procedure takes **around 2 hours** and is **fully reversible**, with no physical changes to the ECU. For information or to [book an appointment](@contact), get in touch or visit us in Milan.`),
  cta: L('Richiedi un preventivo', 'Request a quote'),
};

export const ABOUT = {
  title: L('Chi siamo | BMWorks Performance — officina BMW e MINI a Milano', 'About us | BMWorks Performance — BMW & MINI workshop in Milan'),
  desc: L('BMWorks Performance è l’officina specializzata BMW e MINI a Milano: rimappatura centraline, riparazione e manutenzione di alta qualità.', 'BMWorks Performance is the specialist BMW and MINI workshop in Milan: high-quality ECU remapping, repair and servicing.'),
  kicker: L('Chi siamo', 'About us'),
  h1: L('La vostra officina specializzata BMW e MINI a Milano', 'Your specialist BMW and MINI workshop in Milan'),
  lead: L('Fondata da un team di appassionati esperti di automobili, per offrire la qualità della concessionaria a una frazione del prezzo.', 'Founded by a team of passionate car experts, to offer main-dealer quality at a fraction of the price.'),
  body: L(
    `Benvenuti in **BMWorks Performance**, la vostra officina specializzata per BMW e MINI a Milano. Fondata da un team di appassionati esperti di automobili, BMWorks si impegna a fornire servizi di rimappatura centraline, riparazione e manutenzione di alta qualità per tutti i modelli BMW e MINI.

## La nostra missione

Offrire un servizio eccezionale e personalizzato. Siamo guidati dalla passione per l’automobilismo e dalla soddisfazione dei nostri clienti. Il nostro obiettivo è massimizzare le prestazioni e l’efficienza del vostro veicolo, garantendo un’esperienza di guida senza pari.

## Il nostro team

Composto da meccanici esperti e tecnici elettronici, specializzati nella risoluzione di problemi complessi. Con una profonda conoscenza dei veicoli BMW e MINI, ci assicuriamo che ogni intervento sia eseguito con la massima precisione e attenzione ai dettagli.

## I servizi della nostra officina BMW a Milano

- **Rimappatura centraline**: ottimizziamo le prestazioni del vostro veicolo per una guida più potente ed efficiente.
- **Riparazione e manutenzione**: un servizio completo che spazia dalla diagnostica avanzata alle riparazioni meccaniche ed elettriche, utilizzando esclusivamente ricambi di alta qualità.
- **Manutenzione BMW e MINI**: controllo regolare, diagnosi e manutenzione ordinaria con ricambi originali.
- **Servizi specializzati**: dal servizio cambio automatico BMW alla sostituzione della catena di distribuzione, ci occupiamo di ogni aspetto del vostro veicolo con competenza e cura.

## La nostra promessa

Essere la vostra alternativa affidabile alle concessionarie. Offriamo la stessa qualità di servizio a una frazione del prezzo, assicurandovi trasparenza, onestà e un lavoro di qualità.`,
    `Welcome to **BMWorks Performance**, your specialist BMW and MINI workshop in Milan. Founded by a team of passionate car experts, BMWorks is committed to providing high-quality ECU remapping, repair and servicing for every BMW and MINI model.

## Our mission

To deliver exceptional, personal service. We are driven by a passion for cars and by our customers’ satisfaction. Our goal is to maximise your vehicle’s performance and efficiency, for an unrivalled driving experience.

## Our team

Made up of experienced mechanics and electronics technicians who specialise in solving complex problems. With in-depth knowledge of BMW and MINI vehicles, we make sure every job is done with the utmost precision and attention to detail.

## What our BMW workshop in Milan offers

- **ECU remapping**: we optimise your vehicle’s performance for a more powerful, efficient drive.
- **Repair and maintenance**: a complete service ranging from advanced diagnostics to mechanical and electrical repairs, using only high-quality parts.
- **BMW and MINI servicing**: regular checks, diagnosis and routine maintenance with genuine parts.
- **Specialist services**: from BMW automatic gearbox servicing to timing chain replacement, we look after every aspect of your vehicle with skill and care.

## Our promise

To be your reliable alternative to main dealers. We offer the same quality of service at a fraction of the price, with transparency, honesty and quality workmanship.`),
  quote: L('Da BMWorks eleviamo ogni BMW e MINI con passione e maestria. La vostra soddisfazione, la nostra missione.', 'At BMWorks we elevate every BMW and MINI with passion and craftsmanship. Your satisfaction is our mission.'),
  founderRole: L('Fondatore e titolare, BMWorks Performance', 'Founder and owner, BMWorks Performance'),
  pillars: [
    { title: L('4,8 ★ su Google', '4.8 ★ on Google'), text: L('Valutazione media su 27 recensioni dei nostri clienti.', 'Average rating from 27 customer reviews.') },
    { title: L('Trasparenza', 'Transparency'), text: L('Preventivi chiari e spiegazione dettagliata di ogni intervento.', 'Clear quotes and a detailed explanation of every job.') },
    { title: L('Ricambi originali', 'Genuine parts'), text: L('Per garantire prestazioni e sicurezza.', 'For guaranteed performance and safety.') },
    { title: L('Lavori garantiti', 'Guaranteed work'), text: L('Garanzia sui lavori eseguiti; dettagli su richiesta.', 'Warranty on the work we do; details on request.') },
  ],
  stats: [
    { n: 15, label: L('Anni di esperienza', 'Years of experience') },
    { n: 1580, label: L('Rimappature', 'Remaps') },
    { n: 6128, label: L('Auto riparate', 'Cars repaired') },
    { n: 7862, label: L('Clienti serviti', 'Customers served') },
  ],
  faq: [
    { q: L('Quali servizi offre BMWorks?', 'What services does BMWorks offer?'), a: L('BMWorks offre servizi di rimappatura centraline, riparazione e manutenzione completa per veicoli BMW e MINI, inclusa la diagnosi avanzata e l’uso di pezzi di ricambio di alta qualità.', 'BMWorks offers ECU remapping, repair and complete servicing for BMW and MINI vehicles, including advanced diagnostics and high-quality parts.') },
    { q: L('BMWorks è specializzato solo in BMW e MINI?', 'Does BMWorks specialise only in BMW and MINI?'), a: L('Sì, BMWorks è specializzato nella riparazione e manutenzione di veicoli BMW e MINI, fornendo servizi personalizzati per questi marchi.', 'Yes, BMWorks specialises in repairing and servicing BMW and MINI vehicles, providing services tailored to these brands.') },
    { q: L('Posso aspettarmi risparmi rispetto alle concessionarie ufficiali?', 'Can I expect savings compared with official dealers?'), a: L('BMWorks offre servizi di qualità comparabile a quelli delle concessionarie ufficiali, ma a una frazione del prezzo.', 'BMWorks offers service of comparable quality to official dealers, but at a fraction of the price.') },
    { q: L('Utilizzate ricambi originali?', 'Do you use genuine parts?'), a: L('Sì, per garantire le migliori prestazioni e sicurezza utilizziamo solo ricambi originali BMW e MINI.', 'Yes, to guarantee the best performance and safety we use only genuine BMW and MINI parts.') },
    { q: L('Offrite garanzia sui lavori eseguiti?', 'Do you guarantee your work?'), a: L('BMWorks si impegna a fornire servizi di alta qualità e offre una garanzia sui lavori eseguiti. I dettagli specifici possono essere forniti su richiesta.', 'BMWorks is committed to high-quality service and offers a warranty on the work carried out. Specific details are available on request.') },
    { q: L('Come posso prenotare un appuntamento?', 'How can I book an appointment?'), a: L('Gli appuntamenti possono essere prenotati contattando direttamente BMWorks tramite telefono, email, WhatsApp o attraverso il nostro sito web.', 'Appointments can be booked by contacting BMWorks directly by phone, email, WhatsApp or through our website.') },
    { q: L('Effettuate rimappature per altri marchi di auto?', 'Do you remap other makes of car?'), a: L('La nostra specializzazione è focalizzata su BMW e MINI; tuttavia effettuiamo servizi di rimappatura centraline per tutti gli altri marchi. Vi consigliamo di contattarci direttamente.', 'Our specialisation is BMW and MINI; however, we carry out ECU remapping for all other makes. We recommend contacting us directly.') },
    { q: L('Quanto tempo richiede una tipica riparazione o manutenzione?', 'How long does a typical repair or service take?'), a: L('Il tempo necessario varia a seconda del tipo di servizio richiesto. Forniamo stime accurate al momento della prenotazione o della diagnosi iniziale.', 'The time needed varies with the type of work. We provide accurate estimates when you book or at the initial diagnosis.') },
  ],
  ctaTitle: L('Chiamaci per un preventivo', 'Call us for a quote'),
};

export const CONTACT = {
  title: L('Contatti | BMWorks Performance — San Giuliano Milanese', 'Contact | BMWorks Performance — San Giuliano Milanese'),
  desc: L('Contatta BMWorks Performance: telefono, WhatsApp, email e indirizzo dell’officina BMW e MINI a San Giuliano Milanese (Milano).', 'Contact BMWorks Performance: phone, WhatsApp, email and address of the BMW and MINI workshop in San Giuliano Milanese (Milan).'),
  kicker: L('Siamo qui per assisterti', 'We are here to help'),
  h1: L('Contatti', 'Contact us'),
  lead: L('Qui trovi tutte le informazioni per metterti in contatto con noi e ricevere assistenza.', 'Everything you need to get in touch with us and get help.'),
  phoneT: L('Telefono', 'Phone'),
  phoneP: L('Dal lunedì al venerdì dalle 9:00 alle 18:00. Il nostro team sarà lieto di rispondere a tutte le tue domande.', 'Monday to Friday, 9:00 to 18:00. Our team will be happy to answer all your questions.'),
  waP: L('Scrivici quando vuoi: operatori disponibili dalle 08:00 alle 17:00.', 'Message us any time: agents available 08:00 to 17:00.'),
  mailP: L('Rispondiamo a tutte le richieste entro 24 ore nei giorni lavorativi.', 'We reply to all enquiries within 24 hours on working days.'),
  addrT: L('Officina', 'Workshop'),
  addrP: L('Apri il percorso in Google Maps.', 'Open directions in Google Maps.'),
  socialT: L('Social media', 'Social media'),
  socialP: L('Seguici sui nostri canali social per rimanere aggiornato sulle ultime novità e offerte. Puoi anche contattarci tramite messaggio privato.', 'Follow us on social media to keep up with the latest news and offers. You can also reach us by direct message.'),
  formT: L('Modulo di contatto', 'Contact form'),
  formP: L('Compila il modulo per inviarci un messaggio. Fornisci tutte le informazioni necessarie in modo che possiamo assisterti al meglio.', 'Fill in the form to send us a message. Give us all the relevant details so we can help you as well as possible.'),
  nextT: L('Cosa succede dopo?', 'What happens next?'),
  nextP: L('Una volta che ci avrai contattato, il nostro team valuterà attentamente la tua richiesta e ti risponderà nel più breve tempo possibile, di solito entro 1–2 giorni lavorativi. Se la tua richiesta richiede un’azione da parte nostra, ti forniremo una tempistica realistica e ti terremo aggiornato durante tutto il processo.', 'Once you have contacted us, our team will carefully assess your request and reply as soon as possible, usually within 1–2 working days. If your request needs action on our part, we will give you a realistic timescale and keep you updated throughout.'),
};

const seq = (pfx, nums) => nums.map(n => `${pfx}${n}.webp`);
export const CARS_PAGE = {
  title: L('Le nostre auto in vendita | BMWorks Performance', 'Cars for sale | BMWorks Performance'),
  desc: L('Una selezione di auto usate testate e tagliandate da BMWorks Performance, con garanzia sull’acquisto.', 'A selection of used cars tested and serviced by BMWorks Performance, sold with a warranty.'),
  kicker: L('Scelte con cura', 'Hand-picked'),
  h1: L('Le nostre auto', 'Cars for sale'),
  lead: L('Una selezione esclusiva di auto in vendita, scelte per offrire il massimo in termini di qualità, prestazioni e stile.', 'An exclusive selection of cars for sale, chosen for quality, performance and style.'),
  featKicker: L('A portata di mano', 'Ready to drive'), featTitle: L('Auto in vetrina', 'Featured cars'),
  featured: L('In vetrina', 'Featured'), photos: L('foto', 'photos'),
  outro: L(
    `Non ci limitiamo a vendere automobili: offriamo esperienze uniche per chi cerca qualcosa di speciale. Le nostre auto sono tutte **testate e sottoposte a un tagliando completo**, garantendo affidabilità e tranquillità. Acquistando da noi, hai la certezza di portare a casa un veicolo che non ti deluderà.

Offriamo garanzia sull’acquisto e ci occupiamo di tutte le pratiche burocratiche. Valutiamo il tuo usato in permuta e offriamo consegna in tutta Italia, oltre a finanziamenti su misura.`,
    `We do not just sell cars: we offer something special for those looking for it. All our cars are **tested and given a full service**, for reliability and peace of mind. When you buy from us, you can be sure you are taking home a vehicle that will not let you down.

We provide a warranty with every purchase and handle all the paperwork. We take part-exchanges and offer delivery throughout Italy, as well as tailored finance.`),
  ctaTitle: L('Vuoi vedere un’auto o fare un test drive?', 'Want to view a car or take a test drive?'),
  ctaText: L('Auto visionabili su appuntamento e disponibili per qualsiasi prova dal tuo meccanico di fiducia.', 'Cars can be viewed by appointment and are available for inspection by your own mechanic.'),
  price: L('Prezzo', 'Price'), prev: L('Foto precedente', 'Previous photo'), next: L('Foto successiva', 'Next photo'), photo: L('Foto', 'Photo'),
  descT: L('Descrizione', 'Description'), specsT: L('Scheda tecnica', 'Specifications'),
  waCar: L('Ciao, sono interessato alla {car} in vendita.', 'Hi, I am interested in the {car} you have for sale.'),
  autoscout: L('Vedi l’annuncio su AutoScout24', 'View the listing on AutoScout24'),
  calcT: L('Calcola la tua rata', 'Calculate your payments'),
  calcP: L('Modifica acconto, tasso e durata per stimare la rata mensile.', 'Adjust the deposit, rate and term to estimate the monthly payment.'),
  down: L('Acconto', 'Deposit'), rate: L('Tasso di interesse', 'Interest rate'), months: L('Periodo (mesi)', 'Term (months)'),
  monthly: L('Pagamento mensile', 'Monthly payment'), interest: L('Interessi totali', 'Total interest'), total: L('Pagamenti totali', 'Total payments'),
  calcNote: L('Tasse, commissioni e incentivi non sono inclusi in questo calcolo, che è solo una stima a scopo informativo e non rappresenta un’offerta di finanziamento.', 'Taxes, fees and incentives are not included in this calculation, which is an estimate for information only and not an offer of finance.'),
  askT: L('Chiedi informazioni su quest’auto', 'Ask about this car'),
  askP: L('Per informazioni o per un test drive scrivici su WhatsApp, chiamaci o usa il modulo.', 'For information or a test drive, message us on WhatsApp, call us or use the form.'),
};

export const CARS = [
  {
    slug: 'skoda-octavia-vrs', name: 'Skoda Octavia vRS 2.0 TDI', price: L('€ 7.150', '€7,150'), priceNum: 7150,
    sub: L('Sportività, stile e comfort', 'Sportiness, style and comfort'),
    chips: [L('10/2008', '10/2008'), L('73.000 km', '73,000 km'), L('Diesel', 'Diesel'), L('Automatico', 'Automatic')],
    photos: ['skoda-Frame-4.webp', ...seq('skoda-photo_', [27, 26, 25, 24, 23, 22, 21, 20, 19, 17, 16, 15, 14, 13, 11, 10, 9, 8, 7, 6, 5, 3, 2, 1])],
    autoscout: 'https://www.autoscout24.it/annunci/skoda-octavia-vrs-diesel-blu-azzurro-a7172695-4a40-48d0-b3e1-da34973c2113',
    specs: [
      [L('Condizioni', 'Condition'), L('Usato', 'Used')], [L('Immatricolazione', 'First registered'), '10/2008'],
      [L('Chilometraggio', 'Mileage'), L('73.000 km', '73,000 km')], [L('Alimentazione', 'Fuel'), 'Diesel'],
      [L('Cilindrata', 'Engine size'), L('1.968 cm³', '1,968 cc')], [L('Potenza', 'Power'), L('125 kW / 170 CV', '125 kW / 170 hp')],
      [L('Cambio', 'Gearbox'), L('Automatico (6 marce)', 'Automatic (6-speed)')], [L('Colore esterno', 'Exterior colour'), L('Blu/azzurro metallizzato', 'Metallic blue')],
      [L('Interni', 'Interior'), L('Tessuto nero', 'Black cloth')], [L('Posti', 'Seats'), '5'],
      [L('Peso', 'Weight'), '1.400 kg'], [L('Classe emissioni', 'Emissions class'), 'Euro 4'], [L('Trazione', 'Drive'), L('Anteriore', 'Front-wheel drive')],
      [L('Revisione', 'Roadworthiness test due'), '09/2026'], [L('Ultimo tagliando', 'Last service'), '09/2024'], [L('Cambio cinghia distribuzione', 'Timing belt changed'), '09/2023'],
    ],
    body: L(
      `Stai cercando un’auto che unisca sportività, eleganza e praticità? Questa Skoda Octavia vRS è la scelta giusta per te! Prestazioni eccellenti, condizioni impeccabili e dotazioni ricche rendono questa vettura un’occasione imperdibile.

### Caratteristiche principali

- **Motore**: 2.0 TDI con consumi contenuti e prestazioni elevate.
- **Colore**: blu/azzurro metallizzato, per un look sportivo e sofisticato.
- **Chilometraggio**: 73.000 km — tagliandi eseguiti regolarmente, cinghia di distribuzione sostituita.
- **Cambio**: automatico, per una guida fluida e piacevole.
- **Interni**: sedili sportivi in tessuto/Alcantara con cuciture rosse, auto sempre custodita in box e in ottime condizioni.
- **Dotazioni di sicurezza**: ABS, ESP, airbag frontali e laterali e altri sistemi di assistenza alla guida.
- **Optional e accessori**: allestimento completo, con navigatore satellitare, infotainment touchscreen, climatizzatore automatico bi-zona, sensori di parcheggio, cerchi in lega da 18″, vetri posteriori oscurati e molto altro.
- **Condizioni**: carrozzeria e interni in ottime condizioni, sempre tenuta con cura e regolarmente tagliandata. Gomme 4 stagioni in dotazione.

### Perché scegliere questa vettura?

La Skoda Octavia vRS è perfetta per chi cerca un’auto versatile: sportiva, comoda nei viaggi e con uno spazio interno davvero generoso, con la dotazione completa dell’allestimento top di gamma.

Auto visionabile su appuntamento e disponibile per qualsiasi prova dal tuo meccanico di fiducia. Offriamo garanzia sull’acquisto e ci occupiamo di tutte le pratiche burocratiche. Valutiamo il tuo usato in permuta e offriamo consegna in tutta Italia, oltre a finanziamenti su misura.`,
      `Looking for a car that combines sportiness, elegance and practicality? This Skoda Octavia vRS is the right choice. Excellent performance, immaculate condition and a rich specification make this car an opportunity not to be missed.

### Key features

- **Engine**: 2.0 TDI with low fuel consumption and strong performance.
- **Colour**: metallic blue, for a sporty, sophisticated look.
- **Mileage**: 73,000 km — regularly serviced, timing belt replaced.
- **Gearbox**: automatic, for a smooth and enjoyable drive.
- **Interior**: cloth/Alcantara sports seats with red stitching; always garaged and in excellent condition.
- **Safety equipment**: ABS, ESP, front and side airbags and other driver-assistance systems.
- **Options and accessories**: full specification, with sat-nav, touchscreen infotainment, dual-zone automatic climate control, parking sensors, 18″ alloy wheels, tinted rear windows and much more.
- **Condition**: bodywork and interior in excellent condition, always carefully looked after and regularly serviced. All-season tyres fitted.

### Why choose this car?

The Skoda Octavia vRS is perfect for anyone looking for a versatile car: sporty, comfortable on long trips and with genuinely generous interior space, with the full top-of-the-range specification.

The car can be viewed by appointment and is available for inspection by your own mechanic. We provide a warranty and handle all the paperwork. We take part-exchanges and offer delivery throughout Italy, as well as tailored finance.`),
  },
  {
    slug: 'mini-one-clubman', name: 'MINI One Clubman 1.5', price: L('€ 15.990', '€15,990'), priceNum: 15990,
    sub: L('Stile e versatilità in un’auto compatta', 'Style and versatility in a compact car'),
    chips: [L('03/2019', '03/2019'), L('66.466 km', '66,466 km'), L('Benzina', 'Petrol'), L('Manuale', 'Manual')],
    photos: seq('mini-photo_', [15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16]),
    specs: [
      [L('Condizioni', 'Condition'), L('Usato', 'Used')], [L('Immatricolazione', 'First registered'), '03/2019'],
      [L('Chilometraggio', 'Mileage'), L('66.466 km', '66,466 km')], [L('Alimentazione', 'Fuel'), L('Benzina', 'Petrol')],
      [L('Cilindrata', 'Engine size'), L('1.499 cm³', '1,499 cc')], [L('Potenza', 'Power'), L('75 kW / 102 CV', '75 kW / 102 hp')],
      [L('Cambio', 'Gearbox'), L('Manuale', 'Manual')], [L('Colore esterno', 'Exterior colour'), L('Beige metallizzato', 'Metallic beige')],
      [L('Interni', 'Interior'), L('Stoffa nera', 'Black cloth')], [L('Posti', 'Seats'), '5'],
      [L('Peso', 'Weight'), '1.370 kg'], [L('Classe emissioni', 'Emissions class'), 'Euro 6d'], [L('Trazione', 'Drive'), L('Anteriore', 'Front-wheel drive')],
      [L('Ultimo tagliando', 'Last service'), '08/2024'],
    ],
    body: L(
      `Stai cercando un’auto che combini eleganza, praticità e comfort? La MINI One Clubman è l’opzione ideale per te! Questa vettura offre un’esperienza di guida unica, con prestazioni brillanti e un design distintivo che la rende perfetta per la vita di tutti i giorni.

### Caratteristiche principali

- **Motore**: 1.5 benzina da 102 CV, con un’ottima efficienza nei consumi senza compromettere le prestazioni.
- **Anno**: 2019.
- **Chilometraggio**: 66.466 km, sempre tenuta con cura e tagliandi regolarmente eseguiti.
- **Cambio**: manuale, per un controllo completo durante la guida.
- **Interni**: spaziosi e ben rifiniti, con il design tipico MINI e materiali di alta qualità.
- **Dotazioni di sicurezza**: ABS, ESP, airbag frontali e laterali e sistemi avanzati di assistenza alla guida.
- **Optional e accessori**: navigatore satellitare, climatizzatore automatico, sensori di parcheggio e cerchi in lega.
- **Condizioni**: carrozzeria e interni in ottimo stato. Unico proprietario, sempre custodita in garage e regolarmente tagliandata. Gomme in buono stato, pronta per qualsiasi viaggio.

### Perché scegliere questa vettura?

La MINI One Clubman è perfetta per chi cerca un’auto che unisca stile e funzionalità: comoda per i viaggi e con un’ottima capienza per le esigenze quotidiane. Non perdere questa occasione!

Auto visionabile su appuntamento.`,
      `Looking for a car that combines elegance, practicality and comfort? The MINI One Clubman is the ideal option. It offers a unique driving experience, with lively performance and a distinctive design that makes it perfect for everyday life.

### Key features

- **Engine**: 1.5 petrol with 102 hp, delivering excellent fuel efficiency without compromising performance.
- **Year**: 2019.
- **Mileage**: 66,466 km, always well looked after and regularly serviced.
- **Gearbox**: manual, for full control at the wheel.
- **Interior**: spacious and well finished, with typical MINI design and high-quality materials.
- **Safety equipment**: ABS, ESP, front and side airbags and advanced driver-assistance systems.
- **Options and accessories**: sat-nav, automatic climate control, parking sensors and alloy wheels.
- **Condition**: bodywork and interior in excellent condition. One owner, always garaged and regularly serviced. Tyres in good condition, ready for any journey.

### Why choose this car?

The MINI One Clubman is perfect for anyone who wants style and practicality: comfortable on long trips and with plenty of room for everyday needs. Do not miss this opportunity!

The car can be viewed by appointment.`),
  },
];

export const BLOG = {
  title: L('Blog | BMWorks Performance', 'Blog | BMWorks Performance'),
  desc: L('Casi reali dall’officina, guide e approfondimenti su BMW, MINI e rimappatura centraline.', 'Real workshop cases, guides and insights on BMW, MINI and ECU remapping.'),
  h1: L('Le nostre ultime notizie', 'Our latest news'),
  lead: L('Casi reali dalla nostra officina, guide tecniche e approfondimenti su BMW, MINI e rimappature.', 'Real cases from our workshop, technical guides and insights on BMW, MINI and remapping.'),
  author: L('Fondatore e proprietario di BMWorks Performance, società specializzata in BMW e MINI che offre servizi di rimappatura centraline, riparazione e manutenzione di alta qualità.', 'Founder and owner of BMWorks Performance, a BMW and MINI specialist offering high-quality ECU remapping, repair and servicing.'),
};

export const FAQ_PAGE = {
  title: L('FAQ sulla rimappatura: è sicura? Coppia, BHP, Nm | BMWorks', 'Remapping FAQ: is it safe? Torque, BHP, Nm | BMWorks'),
  desc: L('Risposte alle domande più frequenti sulla rimappatura centralina: sicurezza, garanzia, assicurazione, file originale, coppia e potenza.', 'Answers to the most common ECU remapping questions: safety, warranty, insurance, original file, torque and power.'),
  h1: L('Domande frequenti sulla rimappatura', 'Remapping: frequently asked questions'),
  lead: L('È sicura? Cosa succede alla garanzia? Cosa sono coppia, BHP e Nm? Qui trovi le risposte.', 'Is it safe? What about the warranty? What are torque, BHP and Nm? Find the answers here.'),
  note: L('Non trovi la risposta che cerchi? [Contattaci](@contact): ti rispondiamo volentieri.', 'Cannot find the answer you need? [Contact us](@contact): we are happy to help.'),
};

export const PRIVACY = {
  title: L('Informativa privacy | BMWorks Performance', 'Privacy notice | BMWorks Performance'),
  desc: L('Come questo sito tratta i tuoi dati.', 'How this website handles your data.'),
  h1: L('Informativa privacy', 'Privacy notice'),
  body: L(
    `**Bozza da far verificare al titolare e al suo consulente prima della pubblicazione.**

## Titolare del trattamento

BMWorks Performance — Via G. M. Serrati, 60 BIS, 20098 San Giuliano Milanese (MI) — info@bmworks.it

## Quali dati raccoglie questo sito

Questo sito non usa cookie di profilazione e non memorizza i dati inseriti nei moduli. Quando compili il modulo di contatto, il messaggio viene aperto già compilato in WhatsApp o nella tua app di posta: sei tu a inviarlo, e da quel momento i dati (nome, telefono, email, veicolo, messaggio) vengono trattati da BMWorks Performance al solo scopo di rispondere alla tua richiesta.

## Servizi di terze parti

Alcune pagine incorporano contenuti di terzi che possono ricevere dati tecnici (ad esempio l’indirizzo IP) quando vengono caricati:

- Google Maps, per la mappa dell’officina
- Quantum Tuning, per lo strumento di ricerca veicolo nella pagina rimappatura
- WhatsApp (Meta), quando scegli di scriverci tramite WhatsApp

## I tuoi diritti

Puoi chiedere in qualsiasi momento l’accesso, la rettifica o la cancellazione dei tuoi dati scrivendo a info@bmworks.it.`,
    `**Draft to be reviewed by the business owner and their adviser before publication.**

## Data controller

BMWorks Performance — Via G. M. Serrati, 60 BIS, 20098 San Giuliano Milanese (MI), Italy — info@bmworks.it

## What data this site collects

This site uses no profiling cookies and does not store the data entered in its forms. When you fill in the contact form, your message opens pre-filled in WhatsApp or your email app: you send it yourself, and from then on the data (name, phone, email, vehicle, message) is processed by BMWorks Performance solely to reply to your request.

## Third-party services

Some pages embed third-party content that may receive technical data (such as your IP address) when loaded:

- Google Maps, for the workshop map
- Quantum Tuning, for the vehicle look-up tool on the remapping page
- WhatsApp (Meta), when you choose to message us via WhatsApp

## Your rights

You can ask to access, correct or delete your data at any time by writing to info@bmworks.it.`),
};
