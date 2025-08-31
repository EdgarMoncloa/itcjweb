import { StyledUl } from "../../../tokens/CustomHTMLElements";
import { StyledImg } from "../../../tokens/CustomImg";
import { StyledTable } from "../../../tokens/CustomTable";
import { StyledH6 } from "../../../tokens/CustomText";
import { InfoHub } from "../../templates/InfoHub";
import ORGANIGRAMA from "/tempImages/ORGANIGRAMA.jpg";
const content = [
  {
    label: "Misión",
    content: (
      <p>
        Formar profesionistas en educación superior tecnológica de calidad,
        capaces de contribuir a la ciencia, tecnología e investigación con un
        enfoque creativo e innovador, mediante una educación integral basada en
        competencias para el desarrollo sustentable de una sociedad incluyente,
        globalizada, equitativa y humana.
      </p>
    ),
  },
  {
    label: "Visión",
    content: (
      <>
        <p>
          Ser una institución de alto desempeño en educación superior
          tecnológica, que forme profesionales e investigadores que contribuyan
          al desarrollo sostenido, sustentable y equitativo de la sociedad.
        </p>
        <p>
          Ser una institución que promueva la innovación, la creatividad y la
          excelencia en la educación, la tecnología y la investigación.Con esta
          visión el Tecnológico Nacional de México / Instituto Tecnológico de
          Ciudad Juárez busca contribuir a la transformación educativa en
          México, orientando sus esfuerzos hacia el desarrollo humano
          sustentable y la competitividad.
        </p>
      </>
    ),
  },
  {
    label: "Calidad",
    content: (
      <p>
        El Instituto Tecnológico de Ciudad Juárez establece el compromiso de
        implementar sus procesos con eficacia, orientados hacia la satisfacción
        de sus clientes, sustentada en la calidad del proceso educativo,
        promoviendo la protección del medio ambiente y previniendo la
        contaminación por impactos ambientales de sus actividades y servicios,
        este compromiso se refleja a través del sistema de gestión integral,
        cumpliendo los objetivos ambientales, requisitos legales aplicables y
        otros requisitos mediante la mejora continua, conforme a las normas ISO
        9001:2015 e ISO 14001:2015. Rev. 3
      </p>
    ),
  },
  {
    label: "Escudo",
    content: (
      <div>
        <StyledH6>Significado del Escudo</StyledH6>
        <p>
          <StyledUl>
            <li>El águila: representa a la patria.</li>
            <li>
              La chimenea humeante y el edificio: a la industria en nuestra urbe
              fronteriza.
            </li>
            <li>
              El libro, la ciencia y el tubo de ensayo: a la fusión del
              conocimiento logrado a través de la perseverancia y la
              investigación.
            </li>
            <li>
              El yunque: al trabajo donde se forja a los hombres de bien del
              mañana.
            </li>
            <li>
              El engrane, la mecánica: los pasos a seguir en la formación
              profesional.
            </li>
            <li>El rayo: a la fuerza del saber.</li>
          </StyledUl>
          <p>
            Todo lo anterior está contenido en un vaso de precipitado,
            significando el recurso humano altamente calificado entregado a la
            sociedad, misma que se representa en el contorno del estado de
            Chihuahua y el punto de la parte superior refiere a Ciudad Juárez.
          </p>
          <p>
            Solo dos transformaciones ha sufrido el escudo a lo largo de su
            existencia, se omitió la R luego del IT desaparecida desde
            septiembre de 1981, al dejar de ser regional. Se suprimió el fondo
            oscuro detrás de la chimenea.
          </p>
          <p>A la fecha el lema Patria, Trabajo, Técnica continua vigente.</p>
        </p>
      </div>
    ),
  },
  {
    label: "Valores",
    content: (
      <div>
        <StyledUl>
          <li>Ser humano</li>
          <li>Espíritu de servicio</li>
          <li>Liderazgo</li>
          <li>Desarrollo sostenido y sustentable</li>
          <li>Alto desempeño</li>
          <li>Calidad</li>
          <li>Trabajo en equipo</li>
        </StyledUl>
      </div>
    ),
  },
  {
    label: "Código de Ética",
    content: (
      <div>
        <StyledH6>Bien Común:</StyledH6>
        <p>
          Asumo un compromiso irrenunciable con el bien común, entendiendo que
          el servicio público es patrimonio de todos los mexicanos y de todas
          las mexicanas, que sólo se justifica legítima cuando se procura ese
          bien común, por encima de los intereses particulares.
        </p>
        <StyledH6>Integridad:</StyledH6>
        <p>
          Ceñiré mi conducta pública y privada, de modo tal que mis acciones y
          mis palabras sean honestas y dignas de credibilidad, fomentando una
          cultura de confianza y de verdad.
        </p>
        <StyledH6>Honradez:</StyledH6>
        <p>
          Nunca usaré mi cargo público para ganancia personal, ni aceptaré
          prestación o compensación de ninguna persona u organización que me
          pueda llevar a actuar con falta de ética en mis responsabilidades y
          obligaciones.
        </p>
        <StyledH6>Imparcialidad:</StyledH6>
        <p>
          Actuaré siempre en forma imparcial, sin conceder preferencias o
          privilegios indebidos a persona alguna.
        </p>
        <StyledH6>Justicia:</StyledH6>
        <p>
          Ceñiré mis actos a la estricta observancia de la ley, impulsando una
          cultura de procuración efectiva de justicia y de respeto al estado de
          derecho.
        </p>
        <StyledH6>Transparencia:</StyledH6>
        <p>
          Garantizaré el acceso a la información gubernamental. Sin mas límite
          que el que imponga interés público y los derechos de privacidad de
          particulares, establecidos por la ley así como el uso y aplicación
          transparente de los recursos públicos, fomentando su manejo
          responsable y eliminando su debida discrecionalidad.
        </p>
        <StyledH6>Rendición de Cuentas:</StyledH6>
        <p>
          Proveeré la eficiencia y la calidad en la gestión de la administración
          pública contribuyendo a su mejora continua y a su modernización ,
          teniendo como principios fundamentales la optimización de sus recursos
          y la rendición de cuentas.
        </p>
        <StyledH6>Entorno Cultural y Ecológico:</StyledH6>
        <p>
          Adoptaré una clara voluntad de comprensión, respeto y defensa por la
          preservación del entorno cultural y ecológico en nuestro país.
        </p>
        <StyledH6>Generosidad:</StyledH6>
        <p>
          Actuaré con generosidad especial , sensibilidad y solidaridad,
          particularmente frente a los menores, las personas de la tercera edad,
          nuestras etnias y las personas con discapacidad y en especial a todas
          aquellas personas que menos tienen.
        </p>
        <StyledH6>Igualdad:</StyledH6>
        <p>
          Haré regla invariable de mis actos y decisiones el procurar igualdad
          de oportunidades para todos los mexicanos y mexicanas, sin distingo de
          sexo, edad, raza, credo, religión o preferencia política.
        </p>
        <StyledH6>Respeto:</StyledH6>
        <p>
          Respetaré sin excepción alguna la dignidad de la persona humana y los
          derechos y libertades que les son inherentes, siempre con trato amable
          y tolerancia para todos y todas las mexicanas.
        </p>
        <StyledH6>Liderazgo:</StyledH6>
        <p>
          Promoveré y apoyaré estos compromisos con mi ejemplo personal, apegado
          a los principios morales que son base y sustento de una sociedad
          exitosa en una patria ordenada y generosa.
        </p>
        <StyledUl>
          <li>
            Las reglas de Buen Gobierno y autogobierno se determinan hoy primero
            por la cultura , después por la estructura organizacional.
          </li>
          <li>
            Los valores son los principios a partir de los cuáles edificamos
            todos nuestros proyectos.
          </li>
          <li>
            Buscamos cambiar de una administración de recursos a una
            administración de valores
          </li>
          <li>
            Cuando todo cambia alrededor de rostros necesitamos algo inmutable
            en lo cual sostenernos y cambiar los nervios. Los valores son
            nuestro instrumento de navegación ética. Nos sirve de brújula.
          </li>
          <li>
            Un gobierno que no se fundamente en valores de orden superior y
            universales compartidos por la mayoría de los servidores públicos ,
            están destinados a no trascender.
          </li>
        </StyledUl>
      </div>
    ),
  },
  {
    label: "Infraestructura",
    content: (
      <div>
        <StyledH6>Infraestructura Académica y Tecnológica</StyledH6>
        <StyledUl>
          <li>
            Planta de 512 maestros altamente calificados y vinculados con la
            práctica profesional.
          </li>
          <li>Red local con más de 1,200 computadoras con internet.</li>
          <li>
            Laboratorios de Manufactura Automatizada, Electrónica, Mecatrónica
            (Robótica, Neumática, Materiales y Energías Alternas), Metal
            Mecánica, Eléctrica, Simulación, Diseño Mecánica, Sistemas
            Computacionales (Salas de Cómputo y Laboratorios de Redes CISCO),
            Multimedia, Contabilidad, Laboratorios de Ciencias Básicas, Química
            y Física.
          </li>
        </StyledUl>

        <StyledH6>Infraestructura deportiva</StyledH6>
        <StyledUl>
          <li>Campos de beisbol, futbol soccer y americano, </li>
          <li>Pista de atletismo </li>
          <li>Alberca techada</li>
          <li>Gimnasio equipado para basquetbol, voleibol, pesas y judo.</li>
        </StyledUl>
      </div>
    ),
  },
  {
    label: "Historia",
    content: (
      <>
        <p>
          La Educación Tecnológica en el antiguo Paso del Norte se remonta a la
          fundación de la Escuela Técnica Industrial número 5 en 1935 a
          iniciativa del Profr. Alberto Álvarez y Álvarez.
        </p>

        <p>
          Posteriormente, cambió su nombre por el de Escuela de Enseñanzas
          Especiales número 21 y ya, en su cuarta y última etapa, se transformó
          en la Escuela Técnica Industrial y Comercial.
        </p>

        <p>
          Con el impulso de un grupo de visionarios liderados por el Profr.
          Ramón Rivera Lara y el Lic. Filiberto Terrazas Sánchez, en 1960 el C.
          Presidente de México Lic. Adolfo López Mateos prometió crear el
          Instituto Tecnológico tomando en consideración que la ciudad requería
          de técnicos cada vez más especializados para su incipiente industria.
          Además, la población urbana se había incrementado a 276,995
          habitantes.
        </p>

        <p>
          Resuelta favorablemente la solicitud, el H. Ayuntamiento de Cd. Juárez
          cedió a la Federación el edificio del reformatorio infantil, mismo que
          fue ocupado por el naciente Instituto Tecnológico Regional número 11
          en Ciudad Juárez el <strong>3 de octubre de 1964</strong>.
        </p>

        <p>
          A 3 días de que finalizara el sexenio del Presidente Adolfo López
          Mateos cumplió su palabra, un alto funcionario de la SEP inauguró el
          plantel.
        </p>

        <p>
          Mil 508 alumnos fundadores estuvieron agrupados de acuerdo con su
          nivel educativo: 1,193 de la Secundaria Técnica; 84 de la Preparación
          Elemental, 47 de la Especialización Técnica y 184 de la Preparatoria
          Técnica.
        </p>

        <p>
          La primera ocasión que el Instituto Tecnológico Regional (ITR) No. 11
          tomó parte activa en un evento deportivo fue en los IX Juegos
          Intertecnológicos celebrados en la capital estatal en 1965, siendo el
          comienzo de los triunfos en este tipo de justas, provocando que el
          instituto fuera Sede de tres eventos nacionales de esta naturaleza
          (1968, 1982 y 2007).
        </p>

        <p>
          El año de 1966 fué trascendente para este plantel, impartiéndose por
          primera vez la primera carrera profesional:Contador Público y Auditor,
          seguida un año después por la carrera de Ingeniería Industrial, con 53
          estudiantes.
        </p>

        <p>
          En Septiembre de 1967 el Tecnológico oferta la carrera de Ingeniería
          Industrial, con especialidades en Mecánica, Eléctrica, Electrónica y
          Producción.
        </p>

        <p>
          En la década de los 70`s se implemeta el sistema semestral el cual
          sustituyó los programas anuales, con la tercera carrera profesional
          Licenciatura en Administración de Empresas y con la primera generación
          de egresados a nivel licenciatura.
        </p>

        <p>
          La buena estrella proseguiría, al ser el primer Tecnológico del
          Sistema en contar con un edificio propio para la Biblioteca;
          incrementó su predio y fundó la oficina "Escuela-Empresa" como vínculo
          con el sector productivo.
        </p>

        <p>
          En 1973 se estableció el sistema de créditos que sustituyó el plan
          semestral y se abrieron al público los edificios administrativo,
          laboratorio de producción y cafetería. Dos años más tarde, dio inicio
          los programas académicos de nivel posgrado, inaugurándose a la par el
          edificio del Centro de Graduados.
        </p>

        <p>
          En la década de los 80's el ITCJ, participó en el proyecto de
          Educación para el Trabajo, auspiciado por la Organización de Estados
          Americanos y estableció los Simposiums Internacionales de Ingeniería
          Industrial en los que participan reconocidos conferencistas e
          investigadores. En la misma década la institución fue Sede de la
          Jornada de Ciencia, Tecnología y Cultura del Japón en México, además
          de contar con maestros invitados egresados deuniversidades de Rumania
          y Polonia.
        </p>

        <p>
          Para orgullo de la Casa de las Liebres catedráticos del ITCJ, crearon
          un computador parlante bajo la denominación de Tecnología Automatizada
          y Computarizada (TACO).
        </p>

        <p>
          En este período catedráticos de ignotas procedencias impartieron aquí
          sus conocimientos:Kapadia Zuber, Burke, Targowski, De Jong Davis ...
          toda una gama de transculturación.
        </p>

        <p>
          En el rubro artístico y cultural, 1983 fue un buen año para la Casa de
          las Liebres: Se estrenaron los estudios de Teletec para producir
          programas de televisión y el grupo de las Guitarras Clásicas del
          maestro Aquiles Valdez lanzó su primer disco de larga duración.
        </p>

        <p>
          En su etapa de expansión el ITCJ proyectó su presencia, mediante el
          Sistema Abierto de Enseñanza dentro del Estado de Chihuahua en Nuevo
          Casas Grandes y Ciudad Cuauhtémoc, lo efectuó también por medio de
          suplementos dominicales y planas enteras en los diarios locales y a
          través de un programa radiofónico transmitido desde El Paso, Texas.
        </p>

        <p>
          Orgullo de ésta institución fue laasignación de uno de nuestros
          directores, el Dr. Esteban Hernández Pérez, quien asumió el cargo de
          Director General del Sistema Nacional de Institutos Tecnológicos
          motivo que le valió para que en el año 2014 le fuera otorgada la
          Cátedra Patrimonial de Ciencia y Tecnología "Alejandro Guillot" por
          parte de esta institución.
        </p>

        <p>
          Considerando que es imperativa la actualización de sus egresados, el
          plantel fundó nuevas maestrías en enero de 1979 y un doctorado, este
          último iniciado en 1995.
        </p>

        <p>
          A la fecha la institución imparte 12 carreras a nivel licenciatura,
          tres maestrías, un doctorado y programa de educación abierta y a
          distancia, visionando la ciencia, tecnología con enfoque humano.
        </p>

        <p>
          Posteriormente, por Decreto Presidencial el 23 de julio de 2014 se
          creó el Tecnológico Nacional de México publicado en el Diario Oficial
          de la Federación que aglutinó 254 campus en todo el país.
        </p>

        <p>
          Entre los beneficios que tuvo la unión fue constituirlocomo un órgano
          administrativo desconcentrado de la Secretaría de Educación Pública,
          con autonomía técnica, académica y de gestión.
        </p>

        <p>
          Así mismo para desarrollar un nuevo modelo de educación superior
          tecnológica sustentado en competencias específicas, que propicie una
          sólida preparación científica, tecnológica y humanística se requiere
          de una institución que diseñe e impulse planes y programas de estudio
          innovadores, asuma proyectos de investigación aplicada en ciencia y
          tecnología y divulgue los conocimientos y experiencias generados de
          las actividades que lleve a cabo;
        </p>

        <p>
          Lo anterior dado que la educación superior tecnológica debe ser
          impartida por una institución que establezca y mantenga una estrecha
          vinculación con el sector productivo de bienes y servicios y con los
          centros dedicados a la investigación científica y tecnológica, de
          manera tal que se favorezca un modelo de educación dual que fortalezca
          la formación, actualización y capacitación del capital humano que el
          desarrollo nacional y regional exige y se permita a los egresados,
          acceder a empleos dignos y trayectorias exitosas.
        </p>

        <p>
          En 2023 se incrementó la oferta educativa con la incorporación de la
          ingeniería en semi-conductores para estar a la altura de las
          exigencias de la industria mundial.
        </p>

        <p>
          Por todo lo anterior somos el{" "}
          <strong>Tecnológico Nacional de México</strong> campus{" "}
          <strong>Instituto Tecnológico de Ciudad Juárez.</strong>
        </p>

        <p>
          <strong>#OrgulloTecNM</strong>
        </p>
      </>
    ),
  },
  {
    label: "Directorio",
    content: (
      <>
        <StyledTable>
          <thead>
            <tr>
              <td>Conmutador</td>
              <td>688 25 00</td>
            </tr>
          </thead>
        </StyledTable>
        <StyledTable>
          <thead>
            <tr>
              <th>Departamento</th>
              <th>Extension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dirección</td>
              <td>2001</td>
            </tr>
            <tr>
              <td>Subdirección Académica</td>
              <td>2141</td>
            </tr>
            <tr>
              <td>Subdirección de Servicios Administrativos</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Subdirección de Planeación y Vinculación</td>
              <td>2141</td>
            </tr>
            <tr>
              <td>División de Estudios de Posgrado e Investigación</td>
              <td>2341</td>
            </tr>
            <tr>
              <td>Departamento de Recursos Humanos</td>
              <td>2081</td>
            </tr>
            <tr>
              <td>Departamento de Comunicación y Difusión</td>
              <td>2242</td>
            </tr>
            <tr>
              <td>Departamento de Desarrollo Académico</td>
              <td>2301</td>
            </tr>
            <tr>
              <td>Departamento de Sistemas Computacionales</td>
              <td>2461</td>
            </tr>
            <tr>
              <td>División de Estudios Profesionales</td>
              <td>2321</td>
            </tr>
            <tr>
              <td>Centro de Cómputo</td>
              <td>2040</td>
            </tr>
            <tr>
              <td>Departamento de Recursos Financieros</td>
              <td>2061</td>
            </tr>
            <tr>
              <td>Departamento de Recursos Materiales y Servicios</td>
              <td>2101</td>
            </tr>
            <tr>
              <td>Area de Compras</td>
              <td>2102</td>
            </tr>
            <tr>
              <td>Departamento de Mantenimiento y Equipo</td>
              <td>2121</td>
            </tr>
            <tr>
              <td>
                Departamento de Planeación, Programación y Presupuestación
              </td>
              <td>2221</td>
            </tr>
            <tr>
              <td>Departamento de Servicios Escolares</td>
              <td>2261</td>
            </tr>
            <tr>
              <td>Centro de Incubación e Innovación Empresarial</td>
              <td>2142</td>
            </tr>
            <tr>
              <td>Trámite de Título</td>
              <td>2262</td>
            </tr>
            <tr>
              <td>Titulación</td>
              <td>2322</td>
            </tr>
            <tr>
              <td>Departamento de Ciencias Básicas</td>
              <td>2361</td>
            </tr>
            <tr>
              <td>Departamento de Ciencias Económico Administrativas</td>
              <td>2381</td>
            </tr>
            <tr>
              <td>Departamento de Eléctrica y Electrónica</td>
              <td>2401</td>
            </tr>
            <tr>
              <td>Departamento de Actividades Extraescolares</td>
              <td>2161</td>
            </tr>
            <tr>
              <td>Centro de Información (Biblioteca)</td>
              <td>2181</td>
            </tr>
            <tr>
              <td>Departamento de Gestión Tecnológica y Vinculación</td>
              <td>2201</td>
            </tr>
            <tr>
              <td>Departamento de Ingeniería Industrial</td>
              <td>2421</td>
            </tr>
            <tr>
              <td>Departamento de Metal Mecánica</td>
              <td>2441</td>
            </tr>
            <tr>
              <td>Educación a Distancia</td>
              <td>2480</td>
            </tr>
            <tr>
              <td>Delegación Sindical</td>
              <td>2520</td>
            </tr>
            <tr>
              <td>CAMPUS II</td>
              <td>2500</td>
            </tr>
          </tbody>
        </StyledTable>
      </>
    ),
  },
  {
    label: "Organigrama",
    content: (
      <div>
        <StyledImg src={ORGANIGRAMA} alt="ORGANIGRAMA" />
      </div>
    ),
  },
];
const defaultItemIndex = 0;
const title = "Identidad institucional";
export const NosotrosPage = () => {
  return (
    <InfoHub
      title={title}
      content={content}
      defaultItemIndex={defaultItemIndex}
    />
  );
};
