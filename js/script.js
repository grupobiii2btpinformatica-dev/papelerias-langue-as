/**
 * PAPELERÍAS LANGUEÑAS - MOTOR JAVASCRIPT GLOBAL
 * Integración estricta de productos oficiales e imposición de carrito exclusivo para 1 sola papelería.
 */

// 1. CONFIGURACIÓN COMPLETA DE LAS CUATRO PAPELERÍAS
const BRANCHES_CONFIG = {
  yannet: {
    id: "yannet",
    name: "Papelería Yannet",
    barrio: "Barrio El Centro",
    location: "Barrio El Centro, Langue, Valle",
    owner: "Yannet Rodríguez",
    phone: "50432826211",
    phoneDisplay: "+504 3282-6211",
    email: "yannet@papeleriaslanguenas.hn",
    color: "#008080",
    themeClass: "card-yannet",
    descriptionBanner: "Catálogo oficial de Papelería Yannet. Especialistas en papel tapiz, resmas bond, materiales de oficina y manualidades."
  },
  alejandrina: {
    id: "alejandrina",
    name: "Papelería Alejandrina",
    barrio: "Barrio El Centro",
    location: "Barrio El Centro (Frente al Parque), Langue, Valle",
    owner: "Alejandrina Canales",
    phone: "50498765432",
    phoneDisplay: "+504 9876-5432",
    email: "alejandrina@papeleriaslanguenas.hn",
    color: "#1A365D",
    themeClass: "card-alejandrina",
    descriptionBanner: "Catálogo oficial de Papelería Alejandrina. Referentes en dibujo técnico, manualidades, libros contables, bellas artes y proyectos cívicos."
  },
  sanantonio: {
    id: "sanantonio",
    name: "Papelería San Antonio",
    barrio: "Barrio El Calvario",
    location: "Barrio El Calvario, Langue, Valle",
    owner: "Marco Antonio Bonilla",
    phone: "50487654321",
    phoneDisplay: "+504 8765-4321",
    email: "sanantonio@papeleriaslanguenas.hn",
    color: "#A9744F",
    themeClass: "card-sanantonio",
    descriptionBanner: "Catálogo oficial de Papelería San Antonio. Suministros escolares, maquetas didácticas, cuadernos resistentes y papelería comunitaria."
  },
  patty: {
    id: "patty",
    name: "Papelería Patty",
    barrio: "Barrio El Polivalente",
    location: "Barrio El Polivalente, Langue, Valle",
    owner: "Patricia Santos",
    phone: "50495123456",
    phoneDisplay: "+504 9512-3456",
    email: "patty@papeleriaslanguenas.hn",
    color: "#C41E3A",
    themeClass: "card-patty",
    descriptionBanner: "Catálogo oficial de Papelería Patty. Todo para el estudiante técnico, cuadernos universitarios de gran volumen y suministros para talleres."
  }
};

// 2. CATÁLOGO CON PRODUCTOS EXACTOS DEL DOCUMENTO
const CATALOG_ITEMS = [
  // --- PAPELERÍA YANNET ---
  { id: 'yan-01', branch: 'yannet', name: 'Papel tapiz', img: 'papel-tapiz.png', desc: 'Viene con estampados ( flores,personajes infantiles o textura,permitiendo transformar el cuaderno u otro objeto en un solo paso' },
  { id: 'yan-02', branch: 'yannet', name: 'Cinta de saten', img: 'cinta-de-saten.png', desc: 'Ideal para decorar regalos,hacer moños y manualidades.' },
  { id: 'yan-03', branch: 'yannet', name: 'Pliego de Cartulina', img: 'pliego-de-cartulina.png', desc: 'Ideal para hacer carteles,maquetas,tarjetas y trabajos escolares y de oficinas.' },
  { id: 'yan-04', branch: 'yannet', name: 'Pliego de foami escarchado', img: 'Pliego-de-foami-escarchado.png', desc: 'Utlizado para trabajos escolares,manualidades,y Decoraciones (disponible en diversos colores)' },
  { id: 'yan-05', branch: 'yannet', name: 'Colores Maped', img: 'colores-maped.png', desc: 'Colores con buena calidad diseñados para dibujar y colorear,ofrecen colores variados.' },
  { id: 'yan-06', branch: 'yannet', name: 'Marcadores de doble punta', img: 'Marcadores-de-punta-fina.png', desc: 'Ideal para trazos finos,gruesos,y decoraciones' },
  { id: 'yan-07', branch: 'yannet', name: 'Temperas amigo', img: 'Temperas-amigo.png', desc: 'Ideales para trabajos escolares , actividades artísticas,diversos colores' },
  { id: 'yan-08', branch: 'yannet', name: 'Lapiz graffito maped', img: 'Lapiz-graffito-maped.png', desc: 'Ideal para bocetos,para buena escritura' },
  { id: 'yan-09', branch: 'yannet', name: 'sacapunta', img: 'Sacapunta.png', desc: 'Ideal para afilar lápices de color o de graffito' },
  { id: 'yan-10', branch: 'yannet', name: 'Pistola de silicona', img: 'Pistola-de-silicona.png', desc: 'Para realizar trabajos de pegado,manualidades,y reparacion de forma eficaz' },
  { id: 'yan-11', branch: 'yannet', name: 'Libro de Paquito', img: 'Libro-de-paquito.png', desc: 'Diseñado para aprender a escribir,y practicar valores.' },
  { id: 'yan-12', branch: 'yannet', name: 'Tijera zigzag', img: 'Tijera-zigzag.png', desc: 'Ideal para cortar telas dejando bordes de zigazg,que evite que deshilachen' },
  { id: 'yan-13', branch: 'yannet', name: 'Libreta de Espiral', img: 'Libreta-de-espiral.png', desc: 'Sirve para apuntes y trabajar de forma organizada.' },
  { id: 'yan-14', branch: 'yannet', name: 'Grapadora pequeña', img: 'Grapadora-pequeña.png', desc: 'Ideal para sujetar hojas y documentos de forma rápida y ordenada' },
  { id: 'yan-15', branch: 'yannet', name: 'Adhesivos de foami', img: 'Adhesivos-de-foami.png', desc: 'Sirven para decorar cuadernos ,trabajos escolares,tarjetas y manualidades' },
  { id: 'yan-16', branch: 'yannet', name: 'Hilo chino o hilo de raton', img: 'Hilo-chino-u-hilo de ratón.png', desc: 'Utilizado para cocer y trabajos de precisión y manualidades' },
  { id: 'yan-17', branch: 'yannet', name: 'Libro Unico del grande', img: 'Libro-unico-de-grande.png', desc: 'Ideal para escribir realizar tareas,tomar apuntes y desarrollar trabajos o de oficinas' },
  { id: 'yan-18', branch: 'yannet', name: 'Calculadora cientifica', img: 'Calculadora-cientifica.png', desc: 'Permite realizar operaciones avanzadas como potencias,fracciones,raíz cuadrada,etc' },
  { id: 'yan-19', branch: 'yannet', name: 'Cortinas de Cumpleaños', img: 'Cortinas-de-cumpleaños.png', desc: 'Decoraciones para crear un ambiente alegre y festivo' },
  { id: 'yan-20', branch: 'yannet', name: 'Almohadilla para sellos', img: 'Almohadillas-para-sellos.png', desc: 'Ideal para impregnar tinta en el sello,y dejar impresiones claras u otro material' },
  { id: 'yan-21', branch: 'yannet', name: 'Lapiz tinta rojo,negro,azul', img: 'Lapiz-tinta-azul-negro-rojo.png', desc: 'Boligafro de escritura practica,para facilitar la organización corrección y resultado de informacion' },
  { id: 'yan-22', branch: 'yannet', name: 'Lapiz tinta de colores', img: 'Lápiz-tinta-de-colores.png', desc: 'Permite escribir de manera fina y suave, permitiendo tambien subrayar y decorar' },
  { id: 'yan-23', branch: 'yannet', name: 'Esferas de durapack', img: 'Esferas-de-durapack.png', desc: 'Ideales para manualidades,adornos,proyectos escolares,' },
  { id: 'yan-24', branch: 'yannet', name: 'Papel crepe', img: 'Papel-crepe.png', desc: 'Idea para utilizar,manualidades,decoraciones,flores de papel y trabajos escolares' },
  { id: 'yan-25', branch: 'yannet', name: 'Bote de silicon', img: 'Bote-de-silicon.png', desc: 'Un material flexible y resistente utilizado para sellar , pegar o aislar diferentes superficies' },
  { id: 'yan-26', branch: 'yannet', name: 'Marcador de pizarra', img: 'Marcador-de-pizarra..png', desc: 'Ideal para escribir en pizarra y dibujar sobre superficies no porosas' },
  { id: 'yan-27', branch: 'yannet', name: 'Tijera normal', img: 'Tijera-normal.png', desc: 'Se utiliza principalmente para cortar telas ,cartón y papel con precision' },
  { id: 'yan-28', branch: 'yannet', name: 'Juego de reglas', img: 'Juego-de-reglas.png', desc: 'Sirve para medir longitudes y trazar líneas rectas' },
  { id: 'yan-29', branch: 'yannet', name: 'Tarjetas de cumpleaños', img: 'Tarjetas-de-cumpleaños.png', desc: 'Para fiestas de cumpleaños' },
  { id: 'yan-30', branch: 'yannet', name: 'Juguetes educativos infantiiles', img: 'Juguetes-educativos-infantiles.png', desc: 'Ideal para el mejor aprendizaje de los niños' },

  // --- PAPELERÍA ALEJANDRINA ---
  { id: 'ale-01', branch: 'alejandrina', name: 'Papel crepe', img: 'papel-crepe.png', desc: 'Idea para utilizar, manualidades, decoraciones, flores de papel y trabajos escolares' },
  { id: 'ale-02', branch: 'alejandrina', name: 'Lana o cola de ratón', img: 'lana-cola-raton.png', desc: 'Utilizado para cocer y trabajos de precisión y manualidades' },
  { id: 'ale-03', branch: 'alejandrina', name: 'Masquintey', img: 'masquintey.png', desc: 'Cinta que se utiliza para pegar proteger superficies, marcar y realizar trabajos.' },
  { id: 'ale-04', branch: 'alejandrina', name: 'Temperas amigo', img: 'temperas-amigos.png', desc: 'Ideales para trabajos escolares, actividades artísticas, diversos colores' },
  { id: 'ale-05', branch: 'alejandrina', name: 'Colores maped', img: 'colores-maped.png', desc: 'Colores con buena calidad diseñados para dibujar y colorear, ofrecen colores variados.' },
  { id: 'ale-06', branch: 'alejandrina', name: 'Calculadora cientifica', img: 'calculadora-cientifica.png', desc: 'Instrumento electrónico utilizado para realizar operaciones y cálculos realizados.' },
  { id: 'ale-07', branch: 'alejandrina', name: 'Calculadora Executive', img: 'calculadora-executice.png', desc: 'Instrumento electrónico utilizado para realizar operaciones matemáticas básica de manera rápida y sencilla.' },
  { id: 'ale-08', branch: 'alejandrina', name: 'Marcadores maped', img: 'marcadores-maped.png', desc: 'Marcadores de colores utilizados para escribir, dibuja, colorear y resaltar textos en trabajos escolares o manuales.' },
  { id: 'ale-09', branch: 'alejandrina', name: 'Yesos en barra (tizas)', img: 'tizas-barra.png', desc: 'Utilizada para dibujar, colorear, realizar trabajos artísticos en distintas especies.' },
  { id: 'ale-10', branch: 'alejandrina', name: 'Juegos de Reglas', img: 'juego-reglas.png', desc: 'Ideal para trazar y medir longitudes.' },
  { id: 'ale-11', branch: 'alejandrina', name: 'Tabla periodica', img: 'tabla-periodica.png', desc: 'Material educativo que organiza los elementos químicos según sus propiedades y características' },
  { id: 'ale-12', branch: 'alejandrina', name: 'Saca punta', img: 'saca-punta.png', desc: 'Utensilio utilizado para afilar las puntas de los lápices.' },
  { id: 'ale-13', branch: 'alejandrina', name: 'Pliego de Cartulina', img: 'pliego-cartulina.png', desc: 'Ideal para hacer carteles, maquetas, tarjetas y trabajos escolares y de oficinas' },
  { id: 'ale-14', branch: 'alejandrina', name: 'Pliego de foami escarchado', img: 'pliego-foami-escarchado.png', desc: 'Lamina de material suave y flexible con brillo.' },
  { id: 'ale-15', branch: 'alejandrina', name: 'Cuaderno grande de resorte Quick', img: 'cuaderno-grande-quick.png', desc: 'Este cuaderno de tamaño grande con hojas sujetas por un espiral, ideal para tomar apuntes.' },
  { id: 'ale-16', branch: 'alejandrina', name: 'Cuaderno de resorte grande vivo', img: 'cuaderno-vivo.png', desc: 'Cuaderno de tamaño grande por un espiral, ideal para tomar apuntes.' },
  { id: 'ale-17', branch: 'alejandrina', name: 'Diccionario', img: 'diccionario.png', desc: 'Libro de consultas que contiene sus palabras y sus significados, útil para aprender vocabulario y mejorar la escritura.' },
  { id: 'ale-18', branch: 'alejandrina', name: 'Cinta adhesiva decorativa', img: 'cinta-adhesiva-decorativa.png', desc: 'Cinta con diseño y colores vareados utilizados para pegar y personalizar manuales.' },
  { id: 'ale-19', branch: 'alejandrina', name: 'Cortinas de cumpleaños', img: 'cortinas-cumpleaños.png', desc: 'Decoración brillante utilizada como fondo para fiesta y fotografías y celebraciones para cumpleaños.' },
  { id: 'ale-20', branch: 'alejandrina', name: 'Globo metálico', img: 'globo-metalico.png', desc: 'Globo brillante de material resistente, utilizado para decorar fiesta cumpleaños fiestas y celebraciones.' },
  { id: 'ale-21', branch: 'alejandrina', name: 'Engrapadora metálica', img: 'engrapadora-metalica.png', desc: 'Ideal para sujetar hojas y documentos de forma rápida y ordenada.' },
  { id: 'ale-22', branch: 'alejandrina', name: 'Natural bristle Brush N.12', img: 'natural-bristle-brush.png', desc: 'Cepillo con cerdas naturales utilizadas para pintar y aplicar productos artisticos.' },
  { id: 'ale-23', branch: 'alejandrina', name: 'Perforadora Metalica', img: 'perforadora-metalia.png', desc: 'Herramienta de metal utilizada para hacer agujeros en hojas de papel y facilitar su archivo.' },
  { id: 'ale-24', branch: 'alejandrina', name: 'Colores Acuarelables Artesco', img: 'colores-acuarelables-artesco.png', desc: 'Lápices de colores que se pueden mezclar con agua para crear efectos de acuarela en dibujos y trabajos artísticos.' },
  { id: 'ale-25', branch: 'alejandrina', name: 'Colores Pasteles maped', img: 'colores-pasteles-maped.png', desc: 'Lápices de colores utilizados para colorear y realizar trabajos escolares.' },
  { id: 'ale-26', branch: 'alejandrina', name: 'Regla de 12 pulg. 30cm de metal', img: 'regla-de-metal.png', desc: 'Ideal para trazar y medir longitudes.' },
  { id: 'ale-27', branch: 'alejandrina', name: 'Libreta para apuntes', img: 'libretas-para-apuntes.png', desc: 'Ideal para trabajar de manera ordenada y limpia' },
  { id: 'ale-28', branch: 'alejandrina', name: 'Flautas', img: 'Flautas.png', desc: 'Un instrumento utilizado para cantar notas de voz' },
  { id: 'ale-29', branch: 'alejandrina', name: 'Masquintey del transparente', img: 'masquintey-del-transparente.png', desc: 'Ideal para pegar trabajos manuales, utilizado en cartón, papel, plástico.' },
  { id: 'ale-30', branch: 'alejandrina', name: 'Silicon', img: 'Silicon.png', desc: 'Un material flexible y resistente utilizado para sellar, pegar o aislar diferentes superficies' },

  // --- PAPELERÍA SAN ANTONIO ---
  { id: 'san-01', branch: 'sanantonio', name: 'Durapack', img: 'durapack.png', desc: 'Ideal para trabajos manuales' },
  { id: 'san-02', branch: 'sanantonio', name: 'Papel Tapiz', img: 'papel-tapiz.png', desc: 'Papel diseñado para forrar cualquier superficie,varios diseños y colores' },
  { id: 'san-03', branch: 'sanantonio', name: 'Corrector', img: 'corrector.png', desc: 'Sirve para borrar la tinta cuando los equivocamos' },
  { id: 'san-04', branch: 'sanantonio', name: 'Marcador expo', img: 'marcador-expo.png', desc: 'Ideal para escribir en pizarra,papel,carton' },
  { id: 'san-05', branch: 'sanantonio', name: 'Cinta de saten', img: 'Cinta-de-saten.png', desc: 'Para trabajos manuales,hacer moños de regalo,diferentes colore' },
  { id: 'san-06', branch: 'sanantonio', name: 'Papel bom', img: 'papel-boom.png', desc: 'Ideal para la escuela o oficina' },
  { id: 'san-07', branch: 'sanantonio', name: 'Lapiz tinta', img: 'lápiz-tinta.png', desc: 'Ideal para escribir apuntes sobre papel,carton etc..' },
  { id: 'san-08', branch: 'sanantonio', name: 'Lapiz carbon maped', img: 'lápiz-carbon-maped.png', desc: 'Sirve para escribir, con punta fina y buena calidad' },
  { id: 'san-09', branch: 'sanantonio', name: 'Folder grande de plastico', img: 'folder-grande-de-plastico.png', desc: 'Para meter cualquier documento' },
  { id: 'san-10', branch: 'sanantonio', name: 'Papel construccion', img: 'papel-costruccion.png', desc: 'Ideal para trabajos manuales y decorar' },
  { id: 'san-11', branch: 'sanantonio', name: 'Papel foami escarchado', img: 'papel-foami-escarchado.png', desc: 'Ideal para decoraciones' },
  { id: 'san-12', branch: 'sanantonio', name: 'Cuaderno grande de resorte, amigo', img: 'cuaderno-grande-de-resorte.png', desc: 'Para escribir de forma organizada' },
  { id: 'san-13', branch: 'sanantonio', name: 'Silicon', img: 'silicon.png', desc: 'Un material flexible y resistente utilizado para sellar, pegar o aislar diferentes superficies' },
  { id: 'san-14', branch: 'sanantonio', name: 'Regla', img: 'regla-png.png', desc: 'Ideal para trazar líneas rectas,y medir longitudes' },
  { id: 'san-15', branch: 'sanantonio', name: 'Papel crepe', img: 'papel-crepe.png', desc: 'Ideal para decoraciones' },
  { id: 'san-16', branch: 'sanantonio', name: 'Temperas amigo', img: 'temperas-amigo.png', desc: 'Para pintar cualquier superficie' },
  { id: 'san-17', branch: 'sanantonio', name: 'Engrapadora', img: 'engrapadora.png', desc: 'Para ajustar las hojas y mantenerlas organizadas' },
  { id: 'san-18', branch: 'sanantonio', name: 'Masquintey del grande', img: 'masquintey-del-grande.png', desc: 'Para pegar cualquier superficie de cartón ,papel y etc' },
  { id: 'san-19', branch: 'sanantonio', name: 'Tinta para sello', img: 'tinta-para-sello.png', desc: 'Sirve para ponerle tinta al sello y el sello salga mejor' },
  { id: 'san-20', branch: 'sanantonio', name: 'almohadilla', img: 'almohadilla.png', desc: 'Sirve para el sello' },
  { id: 'san-21', branch: 'sanantonio', name: 'Cuter', img: 'cuter.png', desc: 'Ideal para cortar,cartón,durapack,papel grueso etc' },
  { id: 'san-22', branch: 'sanantonio', name: 'Set de pinceles', img: 'Set-de-pinceles.png', desc: 'Pinceles de varios tamaños,para realizar diseños y pintar' },
  { id: 'san-23', branch: 'sanantonio', name: 'Folder', img: 'folder.png', desc: 'Para meter documentos' },
  { id: 'san-24', branch: 'sanantonio', name: 'Colores de maped', img: 'colores-maped.png', desc: 'Para pintar en papel,cartón,y otras supercies' },
  { id: 'san-25', branch: 'sanantonio', name: 'Pliego de foami escarchado', img: 'pliego-de-foami-escarchado.png', desc: 'Ideal para todo tipo de decoraciones llamativa' },
  { id: 'san-26', branch: 'sanantonio', name: 'Foami pequeño', img: 'foami-pequeño.png', desc: '4ta parte ideal si tu trabajo es pequeño o deseas decorar algo pequeño' },
  { id: 'san-27', branch: 'sanantonio', name: 'Pliego de cartulina', img: 'pliego-de-cartulina.png', desc: 'Ideal para carteles, tarjetas ,decoraciones ,trabajos manuales' },
  { id: 'san-28', branch: 'sanantonio', name: 'Cuaderno grande Unico', img: 'cuaderno-grande-pequeño.png', desc: 'Ideal para oficinas ,cooperativas ,locales, colegio para organizar lo que tu deseas' },
  { id: 'san-29', branch: 'sanantonio', name: 'Cuaderno grande mas de una materia', img: 'cuaderno-grande-varias-mterias.png', desc: 'Ideal para llevar mas de una materia contigo ,resorte resistente, variedad a tu gusto' },
  { id: 'san-30', branch: 'sanantonio', name: 'Cuaderno pequeño', img: 'cuadernos-pequeño.png', desc: 'Para, kínder ,primer o segundo grado ,ideal para apuntes' },

  // --- PAPELERÍA PATTY ---
  { id: 'pat-01', branch: 'patty', name: 'Plastilina', img: 'plastilina.png', desc: 'Barra de plastilina de colores para modelar, ideal para manualidades y trabajos escolares.' },
  { id: 'pat-02', branch: 'patty', name: 'Crayolas', img: 'crayolas.png', desc: 'Caja de crayolas de colores brillantes, no tóxicas, ideales para dibujar y colorear.' },
  { id: 'pat-03', branch: 'patty', name: 'Marcadores maped', img: 'marcadores-maped.png', desc: 'Marcadores Maped de colores intensos, ideales para escribir, dibujar y colorear en trabajos escolares.' },
  { id: 'pat-04', branch: 'patty', name: 'Sacapunta', img: 'sacapunta.png', desc: 'Utensilio utilizado para afilar las puntas de los lápices de carbón y de colores.' },
  { id: 'pat-05', branch: 'patty', name: 'Folder de plastico', img: 'folder-de-plastico.png', desc: 'Folder de plástico resistente, ideal para guardar y organizar documentos.' },
  { id: 'pat-06', branch: 'patty', name: 'Regla de 30cm', img: 'regla-de-30cm.png', desc: 'Regla de 30 cm ideal para trazar líneas rectas y medir longitudes.' },
  { id: 'pat-07', branch: 'patty', name: 'Pinceles', img: 'pinceles.png', desc: 'Pinceles de varios tamaños para pintar y realizar diseños en trabajos artísticos y escolares.' },
  { id: 'pat-08', branch: 'patty', name: 'Collar para gafetes', img: 'collar-para-gafetes.png', desc: 'Cordón utilizado para portar gafetes de identificación de forma práctica y segura.' },
  { id: 'pat-09', branch: 'patty', name: 'Borradores', img: 'borradores.png', desc: 'Borrador suave ideal para borrar lápiz de carbón sin dañar el papel.' },
  { id: 'pat-10', branch: 'patty', name: 'Lapiz de carbon', img: 'lapiz-de-carbon.png', desc: 'Lápiz de carbón ideal para escribir, dibujar y realizar tareas escolares.' },
  { id: 'pat-11', branch: 'patty', name: 'Marcador para subrayar fosforecente', img: 'marcador-para-subrayar-fosforecente.png', desc: 'Marcador resaltador fosforescente ideal para subrayar y destacar textos importantes.' },
  { id: 'pat-12', branch: 'patty', name: 'Lapiz de punta mina', img: 'lapiz-de-punta-mina.png', desc: 'Lápiz de punta mina ideal para escritura fina, dibujo técnico y trabajos de precisión.' },
  { id: 'pat-13', branch: 'patty', name: 'Marcador permanente', img: 'marcador-permanente.png', desc: 'Marcador permanente de tinta resistente, ideal para escribir en papel, cartón y otras superficies.' },
  { id: 'pat-14', branch: 'patty', name: 'Lapiz de gel brilloso', img: 'lapiz-de-gel-brilloso.png', desc: 'Lápiz de gel brilloso ideal para escribir, subrayar y decorar trabajos y tarjetas.' },
  { id: 'pat-15', branch: 'patty', name: 'Corrector', img: 'corrector.png', desc: 'Corrector utilizado para cubrir errores de tinta y corregir escritos de forma limpia.' },
  { id: 'pat-16', branch: 'patty', name: 'Tijera zigzag', img: 'tijera-zigzag.png', desc: 'Tijera con corte en zigzag ideal para manualidades, decoraciones y cortes en papel y tela.' },
  { id: 'pat-17', branch: 'patty', name: 'Temperas lavable', img: 'temperas-lavable.png', desc: 'Témperas lavables de diversos colores, ideales para trabajos escolares y actividades artísticas.' },
  { id: 'pat-18', branch: 'patty', name: 'Grapas estandar', img: 'grapas-estandar.png', desc: 'Grapas estándar para engrapadora, ideales para sujetar hojas y documentos.' },
  { id: 'pat-19', branch: 'patty', name: 'Engrapadora', img: 'engrapadora.png', desc: 'Engrapadora ideal para sujetar hojas y documentos de forma rápida y ordenada.' },
  { id: 'pat-20', branch: 'patty', name: 'Cuaderno unico grande', img: 'cuaderno-unico-grande.png', desc: 'Cuaderno único grande ideal para escribir, tomar apuntes y organizar tareas y trabajos.' },
  { id: 'pat-21', branch: 'patty', name: 'Esferas de durapack', img: 'esferas-de-durapack.png', desc: 'Esferas de durapack ideales para manualidades, adornos y proyectos escolares.' },
  { id: 'pat-22', branch: 'patty', name: 'Folder de colores', img: 'folder-de-colores.png', desc: 'Folder de colores ideal para guardar, clasificar y organizar documentos.' },
  { id: 'pat-23', branch: 'patty', name: 'Aprende conmigo 2Grado,5Grado', img: 'aprende-conmigo-2grado-5grado.png', desc: 'Libro educativo Aprende Conmigo para 2do y 5to grado, ideal para el aprendizaje escolar.' },
  { id: 'pat-24', branch: 'patty', name: 'Papel construccion', img: 'papel-construccion.png', desc: 'Papel construcción de colores ideal para trabajos manuales, decoraciones y trabajos escolares.' },
  { id: 'pat-25', branch: 'patty', name: 'Cuaderno de hilo', img: 'cuaderno-de-hilo.png', desc: 'Cuaderno de hilo ideal para escribir de forma organizada y realizar tareas escolares.' },
  { id: 'pat-26', branch: 'patty', name: 'Cuestionario civica', img: 'cuestionario-civica.png', desc: 'Cuestionario de cívica, material educativo ideal para estudio y repaso escolar.' },
  { id: 'pat-27', branch: 'patty', name: 'Cuaderno de raya pequeño', img: 'cuaderno-de-raya-pequeno.png', desc: 'Cuaderno de raya pequeño ideal para escribir, tomar apuntes y realizar tareas.' },
  { id: 'pat-28', branch: 'patty', name: 'Cuaderno de resorte grande', img: 'cuaderno-de-resorte-grande.png', desc: 'Cuaderno de resorte grande ideal para tomar apuntes y trabajar de forma organizada.' }
];

// 3. CARRITO EXCLUSIVO DE UNA SOLA PAPELERÍA
let cart = JSON.parse(localStorage.getItem('pl_cart')) || [];
let currentCartBranch = localStorage.getItem('pl_cart_branch') || null;

function saveCart() {
  localStorage.setItem('pl_cart', JSON.stringify(cart));
  localStorage.setItem('pl_cart_branch', currentCartBranch || '');
  updateCartUI();
}

function clearCart() {
  cart = [];
  currentCartBranch = null;
  saveCart();
}

function updateCartUI() {
  const counter = document.getElementById('cartCounter');
  const cartList = document.getElementById('cartItemsList');
  const emptyNotice = document.getElementById('cartEmptyNotice');
  const cartFooter = document.getElementById('cartFooter');
  const branchIndicator = document.getElementById('cartExclusiveBranchBox');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (counter) counter.textContent = totalItems;

  if (!cartList) return;
  cartList.innerHTML = '';

  if (cart.length === 0) {
    if (emptyNotice) emptyNotice.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    if (emptyNotice) emptyNotice.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    const branchInfo = BRANCHES_CONFIG[currentCartBranch];
    if (branchIndicator && branchInfo) {
      branchIndicator.style.borderLeftColor = branchInfo.color;
      branchIndicator.innerHTML = `
        <span class="branch-status-title">Papelería Seleccionada:</span>
        <span class="branch-status-name">${branchInfo.name}</span>
        <span class="branch-status-phone">📍 ${branchInfo.location} | WhatsApp: ${branchInfo.phoneDisplay}</span>
      `;
    }

    cart.forEach((item, index) => {
      const bInfo = BRANCHES_CONFIG[item.branch];
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <div class="cart-item-thumb ${bInfo.id}">
          <img src="img/${item.img}" alt="${item.name}" loading="lazy">
        </div>
        <div class="cart-item-details">
          <span class="cart-item-branch" style="color: ${bInfo.color}">${bInfo.name}</span>
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-qty">Cantidad: <strong>${item.quantity}</strong></p>
          <button class="btn-remove-item" onclick="removeFromCart(${index})" aria-label="Eliminar ${item.name}">🗑️ Quitar</button>
        </div>
      `;
      cartList.appendChild(li);
    });
  }
}

// RESTRICCIÓN ESTRICTA: SOLO 1 PAPELERÍA PUEDE ESTAR EN EL CARRITO
function addToCart(productId, quantity = 1) {
  const product = CATALOG_ITEMS.find(p => p.id === productId);
  if (!product) return;

  if (cart.length > 0 && currentCartBranch && currentCartBranch !== product.branch) {
    const currentName = BRANCHES_CONFIG[currentCartBranch].name;
    const incomingName = BRANCHES_CONFIG[product.branch].name;
    alert(`¡Atención!\n\nTu lista de compras actual pertenece exclusivamente a "${currentName}".\n\nNo puedes combinar productos de distintas papelerías en un mismo pedido. Debes enviar o vaciar tu pedido de "${currentName}" antes de comprar en "${incomingName}".`);
    return;
  }

  currentCartBranch = product.branch;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += parseInt(quantity, 10);
  } else {
    cart.push({ ...product, quantity: parseInt(quantity, 10) });
  }

  saveCart();
  openCartDrawer();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  if (cart.length === 0) {
    currentCartBranch = null;
  }
  saveCart();
}

// 4. ENVÍO DE PEDIDO A WHATSAPP AL NÚMERO OFICIAL DE LA SUCURSAL
function sendOrderToWhatsApp() {
  if (cart.length === 0 || !currentCartBranch) return;

  const branch = BRANCHES_CONFIG[currentCartBranch];

  let message = `¡Hola, qué tal, estimados de *${branch.name}*! 😊\n\n`;
  message += `Espero que se encuentren muy bien. Me he comunicado desde el portal de *Papelerías Langueñas* para consultar la disponibilidad y cotización de los siguientes artículos de su catálogo:\n\n`;

  cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}* — Cantidad: *${item.quantity}*\n`;
  });

  message += `\n¿Serían tan amables de confirmarme si los tienen listos en su local de ${branch.location} y el costo total? Muchas gracias por su atención. 🙏`;

  const encodedUrl = `https://wa.me/${branch.phone}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// 5. DETECCIÓN Y FALLBACK DE IMÁGENES
function initImageFallback() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      const src = this.getAttribute('src') || '';
      const filename = src.split('/').pop() || 'imagen.png';

      const placeholder = document.createElement('div');
      placeholder.className = 'img-fallback-placeholder';
      placeholder.innerHTML = `
        <span class="icon" aria-hidden="true">📁</span>
        <span class="filename">${filename}</span>
      `;

      if (this.parentNode) {
        this.parentNode.replaceChild(placeholder, this);
      }
    });
  });
}

// 6. MODAL DE PRODUCTO RÁPIDO
let currentModalProduct = null;

function openProductModal(productId) {
  const product = CATALOG_ITEMS.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  const branchInfo = BRANCHES_CONFIG[product.branch];

  const modal = document.getElementById('productQuickModal');
  const modalDialog = modal.querySelector('.modal-dialog');
  const branchTag = document.getElementById('modalBranchTag');
  const addBtn = document.getElementById('btnModalAddToCart');

  modalDialog.style.borderTopColor = branchInfo.color;
  branchTag.textContent = `${branchInfo.name} (${branchInfo.barrio})`;
  branchTag.style.color = branchInfo.color;
  addBtn.style.backgroundColor = branchInfo.color;

  document.getElementById('modalProductTitle').textContent = product.name;
  document.getElementById('modalProductDesc').textContent = product.desc;
  document.getElementById('modalQtyInput').value = 1;

  const modalImgWrap = document.getElementById('modalImgWrapper');
  modalImgWrap.style.backgroundColor = branchInfo.color + '1A';
  modalImgWrap.innerHTML = `<img src="img/${product.img}" alt="${product.name}" id="modalProductImage">`;

  const imgElem = document.getElementById('modalProductImage');
  imgElem.addEventListener('error', function() {
    this.parentNode.innerHTML = `
      <div class="img-fallback-placeholder">
        <span class="icon">📁</span>
        <span class="filename">${product.img}</span>
      </div>`;
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productQuickModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// 7. RENDERIZADO DEL CATÁLOGO
function renderCatalog(branchKey = 'all', searchQuery = '') {
  const grid = document.getElementById('productsGrid');
  const banner = document.getElementById('catalogBranchBanner');
  if (!grid) return;

  grid.innerHTML = '';

  if (banner) {
    banner.className = `catalog-branch-header-banner theme-${branchKey}`;
    if (branchKey === 'all') {
      banner.innerHTML = `
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 0.25rem;">Catálogo General de Productos</h2>
          <p style="font-size: 0.95rem; opacity: 0.95;">Explorando los artículos disponibles en las papelerías de Langue.</p>
        </div>
      `;
    } else {
      const bInfo = BRANCHES_CONFIG[branchKey];
      banner.innerHTML = `
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.55rem; margin-bottom: 0.25rem;">${bInfo.name} — ${bInfo.barrio}</h2>
          <p style="font-size: 0.95rem; opacity: 0.95;">${bInfo.descriptionBanner}</p>
        </div>
        <a href="https://wa.me/${bInfo.phone}?text=Hola%20${encodeURIComponent(bInfo.name)},%20quisiera%20consultar%20por%20un%20producto" 
           class="btn-branch btn-branch-whatsapp" target="_blank" rel="noopener">
          WhatsApp Oficial: ${bInfo.phoneDisplay}
        </a>
      `;
    }
  }

  const filtered = CATALOG_ITEMS.filter(item => {
    const matchBranch = (branchKey === 'all') || (item.branch === branchKey);
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchBranch && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #fff; border-radius: 14px; box-shadow: var(--shadow-sm);">
        <p style="font-size: 1.15rem; color: #6b7280;">No se encontraron artículos con ese criterio de búsqueda.</p>
      </div>`;
    return;
  }

  filtered.forEach(prod => {
    const branchInfo = BRANCHES_CONFIG[prod.branch];
    const card = document.createElement('article');
    card.className = `product-card ${branchInfo.themeClass}`;
    card.innerHTML = `
      <div class="product-card-thumb" onclick="openProductModal('${prod.id}')">
        <img src="img/${prod.img}" alt="${prod.name}" width="200" height="200" loading="lazy">
      </div>
      <div class="product-card-body">
        <span class="product-card-tag">${branchInfo.name}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <p class="product-card-desc">${prod.desc}</p>
        <div class="price-note-box">
          Precios sujetos a variación — Consulta en tienda
        </div>
        <button class="btn-card-add" onclick="openProductModal('${prod.id}')" aria-label="Ver y solicitar ${prod.name}">
          Seleccionar Producto
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  initImageFallback();
}

// 8. CONTROL DEL PANEL LATERAL
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
  }
}

// 9. CARRUSEL EN EL INICIO
function initCarousel() {
  const track = document.getElementById('featuredCarouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const cards = track.children;
  const totalCards = cards.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  }, 5000);
}

// 10. INICIALIZACIÓN Y DETECCIÓN ESTRICTA DE URL
document.addEventListener('DOMContentLoaded', () => {
  const yearElem = document.getElementById('currentYear');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // Menú hamburguesa responsivo
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navList.classList.toggle('active');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navList.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        closeProductModal();
        closeCartDrawer();
      }
    });

    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navList.contains(e.target) && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Eventos del Carrito y Modal
  const cartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  const clearCartBtn = document.getElementById('clearCartBtn');
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

  const sendOrderBtn = document.getElementById('sendWhatsAppOrderBtn');
  if (sendOrderBtn) sendOrderBtn.addEventListener('click', sendOrderToWhatsApp);

  const closeModalBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('productQuickModal');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeProductModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }

  const btnIncrease = document.getElementById('modalQtyIncrease');
  const btnDecrease = document.getElementById('modalQtyDecrease');
  const inputQty = document.getElementById('modalQtyInput');

  if (btnIncrease && btnDecrease && inputQty) {
    btnIncrease.addEventListener('click', () => {
      inputQty.value = parseInt(inputQty.value || 1, 10) + 1;
    });
    btnDecrease.addEventListener('click', () => {
      const current = parseInt(inputQty.value || 1, 10);
      if (current > 1) inputQty.value = current - 1;
    });
  }

  const btnModalAddToCart = document.getElementById('btnModalAddToCart');
  if (btnModalAddToCart) {
    btnModalAddToCart.addEventListener('click', () => {
      if (currentModalProduct) {
        const qty = parseInt(inputQty.value || 1, 10);
        addToCart(currentModalProduct.id, qty);
        closeProductModal();
      }
    });
  }

  // DETECCIÓN DE PARÁMETROS URL (?sucursal=...)
  const filterTabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('catalogSearch');

  if (filterTabs.length > 0) {
    const urlParams = new URLSearchParams(window.location.search);
    const branchParam = urlParams.get('sucursal'); // 'yannet', 'alejandrina', 'sanantonio', 'patty'

    let activeFilter = 'all';

    if (branchParam && BRANCHES_CONFIG[branchParam]) {
      activeFilter = branchParam;
      filterTabs.forEach(tab => {
        if (tab.getAttribute('data-branch') === branchParam) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }

    renderCatalog(activeFilter, searchInput ? searchInput.value : '');

    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const selectedBranch = this.getAttribute('data-branch');
        renderCatalog(selectedBranch, searchInput ? searchInput.value : '');
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const activeTab = document.querySelector('.filter-tab.active');
        const activeBranch = activeTab ? activeTab.getAttribute('data-branch') : 'all';
        renderCatalog(activeBranch, this.value);
      });
    }
  }

  initImageFallback();
  initCarousel();
  updateCartUI();
});