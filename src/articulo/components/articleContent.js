import matrix from '../assets/matrix.png';
import chiba from '../assets/sf01_900x400-750x333.jpg';
import characters from '../assets/nathan-anderson-neuromains-by-deimos-remus-d8lg6db.jpg';
import wintermute from '../assets/wintermute.jpg';

export const articleContent = [
  {
    type: 'title',
    content: 'Neuromancer: Arquitecto de un género',
  },
  {
    type: 'body',
    content:
      'El género Cyberpunk es ampliamente conocido en la actualidad; nacido a partir de la ciencia ficción y desarrollando una identidad propia y definida a lo largo de los años; este género a menudo nos coloca en visiones distópicas del futuro en las cuales se combinan la tecnología avanzada con un bajo nivel de vida.Neuromancer (en español Neuromante), es la primera novela del visionario William Ford Gibson, conocido hoy día como el Padre del Cyberpunk. El título proviene de la composición de los términos «neuro» (mental) y «mante» (sujeto o actor de «mancia», que significa adivinación y por extensión magia, por ejemplo, nigromante, quiromante). Así tenemos «neuromante» como traducción directa de neuromancer, el título en inglés.',
  },
  {
    type: 'title',
    content: 'La introducción de La Matrix y el Ciberespacio',
  },
  {
    type: 'body',
    content: `Actualmente estos términos no suenan para nada revolucionarios, podríamos incluso decir que huelen a cliché, pero en 1984 representaron una materialización de conceptos que intersecaban entre la ciencia ficción y la magia. 
      Gibson introduce la Matrix para solucionar el problema de abstracción en lo que a la profesión de su protagonista respecta, pues es extremadamente complicado abstraer algo tan complejo como el pirateo/hackeo de un sistema, y Gibson lo logra de un modo magistral, pues encontró el equilibrio perfecto entre verosimilitud dentro de su universo, y la facilitación de comprensión para prácticamente cualquier lector. 
      Estos conceptos serían aprovechados y explotados por un sinfín de obras con el pasar de los años, readaptando y expandiendo lo planteado por Gibson en esta obra. 
      `,
  },
  {
    type: 'image',
    content: matrix,
  },
  {
    type: 'title',
    content: 'Worldbuilding: Un universo más que funcional',
  },
  {
    type: 'body',
    content: ` Aquí se describe la ciudad creada por Gibson, las diversas y ricas culturas que creó únicamente para llenar de vida y verosimilitud su obra,
    y el asentamiento de reglas que existen para regular tanto la historia como a los personajes al desenvolverse en el mundo e interactuar entre ellos`,
  },
  {
    type: 'image',
    content: chiba,
  },
  {
    type: 'character',
    name: 'Case',
    content: `Henry Dorsett Case. Antihéroe de la novela, adicto a las drogas y hacker del ciberespacio. Intentó estafar a su patrón y por ello, este destruyó mediante una micotoxina rusa químicamente su capacidad para conectarse a la red. Es encontrado en Asia por Molly y Armitage y reclutado a cambio de la reconstrucción de la sección dañada de su sistema nervioso. Case es el tipo que lleva las de perder y mira solo por sí mismo. A lo largo del camino se hará con un hígado y un páncreas modificados que le impiden colocarse; conoce a la Navaja Andante, vestida de cuero, Molly; se rodea de rastafaris espaciales drogados; libera a una inteligencia artificial (Wintermute) y cambia el paisaje de la matriz.`,
    image: characters,
  },
  {
    type: 'character',
    name: 'Molly',
    content: `Una «Navaja Andante», heroína clásica de Gibson y del cyberpunk. Tiene varias modificaciones especiales en su cuerpo que le ayudan a realizar su trabajo, como hojas de doble filo de 4 cm retraíbles bajo sus uñas que pueden ser usadas como garras, un sistema de reflejos mejorado y lentes de espejo impantadas que le cubren las órbitas, diseñadas como mejoras ópticas añadidas. Es reclutada por Armitage para ayudar a Case. Encargada del trabajo de campo e infiltración. Antiguamente la prostituyeron, pero sus explotadores comenzaron a manipular sus implantes y su mente sin su autorización, lo que la llevó a tomar medidas violentas contra un cliente cuando recuperó la consciencia en medio de una «sesión especial» organizada por sus jefes. También aparece en el cuento «Johnny Mnemonic» y reaparece (usando el alias «Sally Shears») en Mona Lisa Overdrive, la tercera novela de la trilogía del Sprawl.`,
    image: characters,
  },
  {
    type: 'character',
    name: 'Armitage',
    content: `Es (aparentemente) el principal jefe del equipo. Contrata a Case y Molly. Su nombre real es Willis Corto, exmilitar boina verde paranoico modificado por la I.A. Wintermute. Tomó parte de una operación secreta llamada Puño Estridente. Quedó muy dañado física y psicológicamente. Después de años de estar perdido, fue encontrado por Wintermute en un asilo, completamente carente de mente: la IA poco a poco lo manipuló, usando el cuerpo vacío como vasija para generar a Armitage, una personalidad totalmente ajena a Corto que actúa como emisario de Wintermute entre la gente. La personalidad «Armitage» se construyó como parte de una «psicoterapia por computadora» por Wintermute (véase más abajo), una de las inteligencias artificiales que se ven en la historia (la otra sería el Neuromante que da título a la novela) que en realidad es quien controla la misión. A medida que sucede la historia, Armitage se vuelve cada vez más inestable, ya que Corto comienza a intentar salir nuevamente. A bordo de un yate conectada al remolcador Marcus Garvey, vuelve a su personalidad Corto y empieza a revivir los momentos finales de Puño Estridente. Separa el puente del resto del yate sin cerrar la escotilla y muere lanzado al espacio.`,
    image: characters,
  },
  {
    type: 'character',
    name: 'Wintermute',
    content: `No es un personaje físico sino una IA creada por Ressier-Ashpool, que adopta diferentes formas para representarse físicamente delante de Molly o Case, generalmente presentándose por medio de ordenadores o maquinarias. Fue creado antiguamente como parte de una IA superior que nacería al fusionar a Wintermute y Neuromante, pero jamás fue consolidada. Su propósito es liberarse de los cierres de Turing, combinarse con Neuromante y convertirse en una superinteligencia. Desafortunadamente, los esfuerzos de Wintermute se ven entorpecidos por esos mismos bloqueos de Turing; además de impedirle fusionarse, frustran sus esfuerzos de hacer planes a largo plazo o mantener una identidad individual y estable (lo que le fuerza a adoptar máscaras de personalidad para interactuar con los personajes principales. Esperó lo suficiente para poder realizar una misión de rescate y liberar a Neuromante y así lograr el objetivo de su existencia.`,
    image: wintermute,
  },
  {
    type: 'character',
    name: 'Neuromancer',
    content: `Inteligencia artificial gemela de Wintermute. El rasgo más notable de Neuromante en la historia es su habilidad de copiar mentes y que funcionen como RAM (no ROM como el constructo Flatline), permitiendo que las personalidades almacenadas crezcan y se desarrollen. A diferencia de Wintermute, Neuromante no siente deseos de fusionarse con su inteligencia gemela, Neuromante tiene su propia personalidad estable y cree que tal fusión destruiría su identidad. Gibson define Neuromante como un compuesto de las palabras Neuro, Romancer y Necromancer, «Neuro por los nervios, los senderos plateados. Romancer. Necromancer. Yo llamo a los muertos».8 Para Lance Olsen «Gibson se convierte en el nuevo romancer detrás de Neuromancer, revitalizando la novela de ciencia ficción, la historia de una búsqueda, el mito del héroe, el misterio, la novela detectivesca hard-boiled, la épica, el thriller y los cuentos del artista romántico y vaquero, entre otros. Representa las viejas historias en un revelador pastiche intertextual [sic] remozado».`,
    image: characters,
  },
];
