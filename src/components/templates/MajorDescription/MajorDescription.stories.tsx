import { StoryObj, Meta } from "@storybook/react";
import { MajorDescription } from "./";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";
import { StyledOl, StyledUl } from "../../../tokens/CustomHTMLElements";
import { StyledBody1, StyledH5, StyledH6 } from "../../../tokens/CustomText";

export default {
  title: "templates/MajorDescription",
  component: MajorDescription,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
  },
};

type MyStoryProps = {
  temp: string;
};
type Story = StoryObj<MyStoryProps>;
const objetive = (
  <p>
    Formar profesionales competentes en Ingeniería Eléctrica con capacidad
    creativa, emprendedora, analítica, de liderazgo y trabajo en equipo, que
    realicen actividades de diseño, innovación, adaptación y transferencia de
    tecnologías para resolver problemas de su área, atendiendo las necesidades
    del entorno globalizado, con una conciencia ética y social, asumiendo un
    compromiso con el desarrollo tecnológico y sustentable.
  </p>
);
const professionalField = (
  <>
    <p>
      El ingeniero eléctrico egresado del ITCJ posee las habilidades y
      conocimientos necesarios para insertarse exitosamente en los sectores
      público o privado.
    </p>
    <p>
      Puede trabajar en plantas de generación, transmisión y distribución de
      energía eléctrica.
    </p>
    <p>Fabricación de máquinas eléctricas.</p>
    <p>Diseño, construcción y mantenimiento de sistemas de medición.</p>
    <p>Sistemas de transporte público.</p>
    <p>Fabricación de equipos e instrumentos eléctricos.</p>
    <p>Instalaciones eléctricas en general.</p>
    <p>Bufetes de ingeniería, diseño y desarrollo de sistemas eléctricos.</p>
  </>
);
const ingressProfile = (
  <>
    <p>
      Los aspirantes a ingresar a la Licenciatura de Ingeniería Eléctrica deben
      poseer:
    </p>
    <StyledUl>
      <li>Haber cursado el Bachillerato.</li>
      <li>Habilidad en operaciones matemáticas.</li>
      <li>Habilidad en pensamiento analítico.</li>
      <li>Habilidad en comunicación oral y escrita.</li>
      <li>Habilidad de lectura.</li>
    </StyledUl>
  </>
);
const egressProfile = (
  <>
    <p>Los egresados de la carrera en Ingeniería Eléctrica son capaces de:</p>
    <StyledOl>
      <li>
        Planea, diseña, instala y opera sistemas eléctricos, conforme a la
        normatividad para el desarrollo de proyectos eléctricos eficientes y
        sustentables.
      </li>

      <li>
        Planea, diseña, instala y opera sistemas de control y automatización,
        utilizando tecnología de punta, para el desarrollo de proyectos
        eléctricos.
      </li>

      <li>
        Participa en la administración y toma de decisiones de los recursos
        humanos, económicos y materiales para la realización de proyectos y
        obras eléctricas.
      </li>

      <li>
        Promueve y aplica las acciones necesarias relacionadas con el desarrollo
        sustentable de manera responsable, legal y ética, para la preservación
        del medio ambiente.
      </li>

      <li>
        Promueve y realiza proyectos de investigación y desarrollo tecnológico
        para contribuir al progreso regional y nacional.
      </li>

      <li>
        Incorpora nuevas tecnologías para la mejora de los procesos
        industriales, equipos y obras eléctricas.
      </li>

      <li>
        Analiza y realiza mantenimiento de equipos e instalaciones eléctricas
        para que las condiciones de operación sean seguras, eficientes y
        económicas.
      </li>

      <li>
        Utiliza las nuevas tecnologías de la información y comunicación para
        contribuir a la productividad y el logro de objetivos estratégicos de
        las organizaciones.
      </li>

      <li>
        Desarrolla una visión emprendedora realizando actividades profesionales
        para que establezca su propia empresa y contribuya al desarrollo de su
        entorno.
      </li>

      <li>
        Participa en equipos interdisciplinarios y multidisciplinarios para el
        desarrollo de proyectos integrales.
      </li>

      <li>
        Aplica la comunicación oral y escrita para elaborar reportes, informes
        técnicos y proyectos de investigación, con apoyo de medios gráficos y/o
        audiovisuales.
      </li>

      <li>
        Participa en su entorno político, económico, social y cultural para el
        desarrollo de su comunidad.
      </li>

      <li>
        Aplica sus habilidades de liderazgo para coadyuvar en su ámbito
        personal, social y laboral.
      </li>

      <li>
        Crece personalmente en todas sus dimensiones, adquiriendo conciencia de
        su propia identidad, para el logro de sus aspiraciones y desarrollo de
        sus potencialidades.
      </li>
    </StyledOl>
  </>
);
const specificCompetences = (
  <>
    <StyledUl>
      <li>
        Diseñar e implementar estrategias y programas para el control y/o
        automatización de los procesos productivos y los dispositivos en los
        sistemas electromecánicos.
      </li>
      <li>
        Aplicar herramientas computacionales de acuerdo a las tecnologías de
        vanguardia, para el diseño, simulación y operación de sistemas
        electromecánicos acordes a la demanda del sector industrial.
      </li>
      <li>
        Formular administrar y supervisar programas de mantenimiento para la
        continuidad y optimización de procesos productivos, considerando el
        cuidado del medio ambiente.
      </li>
    </StyledUl>
  </>
);
const genericCompetences = (
  <>
    <StyledUl>
      <li>
        Colaborar en proyectos de investigación para el desarrollo tecnológico,
        en el área de electromecánica.
      </li>
      <li>
        Ejercer actitudes de liderazgo y de trabajo en grupo para la toma de
        decisiones a partir de un sentido ético profesional.
      </li>
      <li>
        Desarrollar la actitud emprendedora mediante la creación e incubación de
        empresas, innovando en productos y servicios del sector electromecánico.
      </li>
      <li>
        Interpretar comprender y comunicar ideas, textos y documentos de
        distinta índole en un segundo idioma.
      </li>
    </StyledUl>
  </>
);
const planOfStudy = (
  <>
    <StyledH6>1er. Semestre</StyledH6>

    <StyledUl>
      <li>Química</li>
      <li>Cálculo Diferencial</li>
      <li>Álgebra Lineal</li>
      <li>Taller de Ética</li>
      <li>Introducción a la Programación</li>
      <li>Fundamentos de Investigación</li>
    </StyledUl>

    <StyledH6>2º. Semestre</StyledH6>

    <StyledUl>
      <li>Estática</li>
      <li>Cálculo Integral</li>
      <li>Desarrollo Sustentable</li>
      <li>Mediciones Mecánicas y Eléctricas</li>
      <li>Tecnología de los Materiales</li>
      <li>Probabilidad y Estadística</li>
    </StyledUl>

    <StyledH6>3er. Semestre</StyledH6>

    <StyledUl>
      <li>Dinámica</li>
      <li>Cálculo Vectorial</li>
      <li>Electricidad y Magnetismo</li>
      <li>Dibujo Electromecánico</li>
      <li>Procesos de Manufactura</li>
    </StyledUl>

    <StyledH6>4º. Semestre</StyledH6>

    <StyledUl>
      <li>Análisis y Síntesis de Mecanismos</li>
      <li>Ecuaciones Diferenciales y Transformada de Laplace</li>
      <li>Análisis de Circuitos en CD</li>
      <li>Termodinámica</li>
      <li>Mecánica de Materiales</li>
      <li>Eléctronica Analógica</li>
    </StyledUl>

    <StyledH6>5º. Semestre</StyledH6>

    <StyledUl>
      <li>Diseño de Elementos de Maquinas</li>
      <li>Mecánica de Fluidos</li>
      <li>Análisis de Circuitos de CA</li>
      <li>Transferencia de Calor</li>
      <li>Electrónica Digital</li>
    </StyledUl>

    <StyledH6>6º. Semestre</StyledH6>

    <StyledUl>
      <li>Máquinas y Equipos Térmicos I</li>
      <li>Sistemas y Máquinas de Fluidos</li>
      <li>Máquinas Eléctricas</li>
      <li>Instalaciones Eléctricas</li>
      <li>Taller de Investigación I</li>
      <li>Diseño e Ingeniería Asistido por Computadora</li>
    </StyledUl>

    <StyledH6>7º. Semestre</StyledH6>

    <StyledUl>
      <li>Maquinas y Equipos Térmicos II</li>
      <li>Sistemas Eléctricos de Potencia</li>
      <li>Controles Eléctricos</li>
      <li>Taller de Investigación II</li>
      <li>Administración y Técnica de Mantenimiento</li>
    </StyledUl>

    <StyledH6>8º. Semestre</StyledH6>

    <StyledUl>
      <li>Refrigeración y Aire Acondicionado</li>
      <li>Sistemas Hidráulicos y Neumáticos de Potencia</li>
      <li>Ahorro de Energía</li>
      <li>Ingeniería de Control Clásico</li>
      <li>Subestaciones Eléctricas</li>
      <li>Evaluación y Formulación de Proyectos</li>
    </StyledUl>

    <StyledH6>9º. Semestre</StyledH6>

    <StyledUl>
      <li>Asignaturas de Especialidad</li>
      <li>Residencia Profesional</li>
    </StyledUl>
  </>
);
const specialities = (
  <>
    <StyledUl>
      <li>Automatización industrial y robótica</li>
      <li>Diseño de Sistemas Eléctricos</li>
      <li>Tecnología de Montaje Superficial (SMT)</li>
    </StyledUl>
  </>
);
export const Base: Story = {
  render: ({ ...args }) => {
    return (
      <MajorDescription title="Titulo de la carrera">
        <StyledH5>Objetivo de la Carrera</StyledH5>
        <StyledBody1>{objetive}</StyledBody1>
        <StyledH5>Campo Profesional</StyledH5>
        <StyledBody1>{professionalField}</StyledBody1>
        <StyledH5>Perfil de Ingreso</StyledH5>
        <StyledBody1>{ingressProfile}</StyledBody1>
        <StyledH5>Perfil de Egreso de la Carrera:</StyledH5>
        <StyledBody1>{egressProfile}</StyledBody1>
        <StyledH5>Competencias Específicas</StyledH5>
        <StyledBody1>{specificCompetences}</StyledBody1>
        <StyledH5>Competencias Genéricas</StyledH5>
        <StyledBody1>{genericCompetences}</StyledBody1>
        <StyledH5>Plan de Estudios</StyledH5>
        <StyledBody1>{planOfStudy}</StyledBody1>
        <StyledH5>Especialidades:</StyledH5>
        <StyledBody1>{specialities}</StyledBody1>
      </MajorDescription>
    );
  },
};
