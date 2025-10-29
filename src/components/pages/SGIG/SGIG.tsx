import styled from "styled-components";
import {
  StyledBody1,
  StyledH2,
  StyledH3,
  StyledOverline,
} from "../../../tokens/CustomText";
import { CustomImg } from "../../molecules/CustomImg";
import Logo_sgig from "/images/Logo_sgig.png";
import { DocumentLink } from "../../atoms/Buttons/DocumentLink";
import { COLOR_VARIANT } from "../../../types/GlobalTypes";
import { AllHeaders } from "../../organisms/AllHeaders";
import { BaseTitle } from "../../atoms/BaseTitle/BaseTitle";
import { SidebarLayout } from "../../organisms/SidebarLayout";
import { TecFooter } from "../../molecules/TecFooter";
import { GobFooter } from "../../molecules/GobFooter";
import { StyledTable } from "../../../tokens/CustomTable";
import { headerTecItems } from "../../../data/headerTecItems";

const defaultItemIndex = 0;

const content = [
  {
    label: "Subcomité",
    noTitle: true,
    content: (
      <div id="sec_3">
        <StyledH2>Subcomité</StyledH2>
        <h2>Información del Subcomité de Ética</h2>
        <h3>Objetivo</h3>
        <p>
          Contar con un marco normativo que regule la integración, organización
          y funcionamiento de los Subcomités de Ética y de Prevención de
          Conflictos de Interés de los Institutos Tecnológicos y Centros que
          conforman el Tecnológico Nacional de México conforme al ACUERDO por el
          que se emite los Lineamientos Generales para la integración y
          funcionamiento de los Comités de Ética (D.O.F. 28/12/2020).
        </p>
        <h3>Funcionarios</h3>

        <StyledTable>
          <thead>
            <tr>
              <th scope="col">FIGURA&nbsp;</th>
              <th scope="col">PROPIETARIO&nbsp;</th>
              <th scope="col">SUPLENTE&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Presidencia</td>
              <td>
                <p>Eduardo Rafael Poblano Ojinaga&nbsp;</p>
                <p>Subdirector de Servicios Administrativos</p>
              </td>
              <td>
                <p>Mara Dennise Salcido Celada&nbsp;</p>
                <p>Subdirectora de Planeación y Vinculación&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>Secretaría Ejecutiva&nbsp;</td>
              <td>
                <p>Mahelet Ruiz&nbsp;</p>
                <p>Coordinadora de Género&nbsp;</p>
              </td>
              <td>
                <p>Martín Falcón Ramírez&nbsp;</p>
                <p>Jefe del Centro de Información&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>Secretaría Técnica</td>
              <td>
                <p>Rosa Silvana Cera Gaytán&nbsp;</p>
                <p>Jefa de Ciencias Básicas&nbsp;</p>
              </td>
              <td>
                <p>Martín David Arroyo Lechuga&nbsp;</p>
                <p>Docente del Instituto&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>Miembros Propuestos</td>
              <td>
                <p>
                  Irving Bruno López Santos Jefe de Eléctrica y
                  Electrónica&nbsp;
                </p>
                <hr />
                <p>
                  Viridiana Reyes Uribe&nbsp; Jefa de Planeación, Programación y
                  Presupuestación&nbsp;
                </p>
                <hr />
                <p>
                  Hortensia Susana Sánchez Rangel&nbsp; Coordinadora de
                  Extensión Ciudad del Conocimiento&nbsp;
                </p>
              </td>
              <td>
                <p>
                  Genoveva Cruz Hernández&nbsp; Jefa de Recursos
                  Financieros&nbsp;
                </p>
                <hr />
                <p>Judith Gallegos Padilla&nbsp; Docente del Instituto</p>
                <hr />
                <p>
                  &nbsp;Aztlán Elohim Bastarrachea Almodóvar&nbsp; Docente del
                  Instituto&nbsp;
                </p>
              </td>
            </tr>
          </tbody>
        </StyledTable>
        <br />
        <StyledTable>
          <thead>
            <tr>
              <th scope="col">PERSONAS CONSEJERAS&nbsp;</th>
              <th scope="col">PERSONAS ASESORAS&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Anilú Flores Regalado&nbsp;</p>
                <p>Jefa de Centro de Cómputo&nbsp;</p>
              </td>
              <td>
                <p>Elizabeth Gutiérrez Anaya&nbsp;</p>
                <p>Jefa de Desarrollo Académico&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Gustavo Alan Velazco Rodríguez&nbsp;</p>
                <p>Encargado de Archivo de Trámite&nbsp;</p>
              </td>
              <td>
                <p>Norberto López Garza&nbsp;</p>
                <p>Jefe de Comunicación y Difusión&nbsp;</p>
              </td>
            </tr>
          </tbody>
        </StyledTable>
        <h2>Funciones del Subcomité&nbsp;</h2>
        <p>
          Difundir el Código de Ética de las Personas Servidoras Públicas del
          Gobierno Federal, el Conducta del Tecnológico Nacional de México y en
          su caso, los lineamientos estatales que se hayan publicado en su
          estado;
        </p>
        <p>
          Difundir el “Procedimiento para la prevención, atención y sanción del
          hostigamiento sexual y acoso sexual en el Tecnológico Nacional de
          México”, así como el “Procedimiento para la prevención, atención de
          denuncias sobre actos u omisiones cometidos por servidoras y
          servidores públicos en contra de las normas éticas que rigen su
          actuación en el Tecnológico Nacional de México”;
        </p>
        <p>
          Difundir y promover los contenidos del Código de Ética y del Código de
          Conducta, privilegiando la prevención de actos de corrupción y de
          conflictos de interés, así como la austeridad como valor en el
          ejercicio del servicio público;
        </p>
        <p>
          Coadyuvar en la identificación de áreas de riesgo éticos que, en
          situaciones específicas pudieran afectar el desempeño de un empleo,
          cargo o comisión, a efecto de brindar acompañamiento y asesoría;
        </p>
        <p>
          Monitorear el porcentaje de denuncias y elaborar un análisis con los
          datos obtenidos para poder sustentar acciones que fortalezcan una
          cultura organizacional libre de discriminación, de acoso y
          hostigamiento sexual así como de incumplimiento a las normas éticas y
          de conducta;
        </p>
        <p>
          Dar seguimiento a las denuncias presentadas ante dicho subcomité
          conforme a los procedimientos establecidos y en caso de ser procedente
          dar vista al órgano externo correspondiente;
        </p>
        <p>
          Dar seguimiento a los acuerdos y acciones comprometidos en las
          mediaciones;
        </p>
        <p>
          Elaborar durante el primer trimestre de cada año un Programa Anual de
          Trabajo (PAT) que contenga objetivos, meta a alcanzar para cada
          objetivo y las actividades que se plantean llevar a cabo para el logro
          de cada meta;
        </p>
        <p>
          Durante la última Sesión ordinaria anual del SEPCI se deberá realizar
          la calendarización de las cuatro sesiones ordinarias correspondientes
          al año subsecuente;
        </p>
        <p>
          Elaborar y aprobar a más tardar el 31 de enero de cada año, un Informe
          Anual de Actividades (IAA) donde se presente los resultados obtenidos
          para cada actividad comprometida en el PAT del año que concluyo y
          conforme a lo establecido en el Apartado XI. de los presentes
          lineamientos;
        </p>
        <p>
          Establecer mecanismos a fin de promover y difundir los Principios,
          Valores y Reglas de Integridad que dan forma al Código de Ética y al
          Conducta del TecNM;
        </p>
        <p>
          Promover programas de capacitación y sensibilización en materia de
          ética pública, integridad, prevención de conflictos de Interés, acoso
          y hostigamiento sexual, discriminación, Derechos Humanos y austeridad
          en el ejercicio del servicio público;
        </p>
        <p>
          Llevar a cabo mecanismos que verificar la aplicación y cumplimiento
          del Código de Ética y el Código de Conducta.
        </p>
      </div>
    ),
  },
  {
    label: "Código de Ética",
    noTitle: true,
    content: (
      <>
        <StyledH2>Código de Ética</StyledH2>
        <StyledH3>Códigos de Ética</StyledH3>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          SFP CE 2022 Codigo de Etica
        </DocumentLink>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          SFP CE 2022 Codigo de Etica imprimible
        </DocumentLink>
        <StyledH3>Codigo de Conducta</StyledH3>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          M00 CC 01 Codigo de Conducta del TecNM
        </DocumentLink>
        <StyledH3>Reglamento estudiantes del TecNM</StyledH3>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          Reglamento de Estudiantes del TecNM
        </DocumentLink>
      </>
    ),
  },
  {
    label: "Mecanismos de denuncia",
    noTitle: true,
    content: (
      <>
        <StyledH2>Mecanismos de denuncia</StyledH2>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          Manual de atencion de denuncias en los CE
        </DocumentLink>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          ANEXO 1 Protocolo HSyAS
        </DocumentLink>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          M00 SC AC 026 A01 Form Denuncia
        </DocumentLink>
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          M00 SC AC 026 PROC
        </DocumentLink>{" "}
        <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
          TecNM GIG AHS 02 Form Denuncia
        </DocumentLink>
      </>
    ),
  },
  // {
  //   label: "Plan de Trabajo",
  //   noTitle: true,
  //   content: <></>,
  // },
];

export const SGIG = () => {
  return (
    <StyledSGIG>
      <AllHeaders headerTecItems={headerTecItems} />
      <StyledContent>
        <StyledMainTitle>
          Sistema de Gestión de Igualdad de Género y No Discriminación (SGIG)
        </StyledMainTitle>
        <StyledHeadContent>
          <StyledHeaderCard style={{ gridArea: "card" }}>
            <StyledHeaderImg src={Logo_sgig} alt="Logo SGIG" noBorder />

            <StyledBody1>Correo oficial del subcomité de ética:</StyledBody1>
            {/* TODO: Copy wrapper */}
            <StyledOverline>subcomite.etica@cdjuarez.tecnm.mx</StyledOverline>
          </StyledHeaderCard>
          <StyledHeaderTitle style={{ gridArea: "dTitle" }}>
            Documentos
          </StyledHeaderTitle>
          <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
            Pronunciamiento hostigamiento sexual vc
          </DocumentLink>
          <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
            Política de igualdad laboral
          </DocumentLink>
          <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
            Lineamientos lenguaje incluyente TecNM-GIG-LI-01
          </DocumentLink>
          <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
            Prontuario lenguaje incluyente
          </DocumentLink>
          <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
            Reglamento de estudiantes del TecNM
          </DocumentLink>
          <DocumentLink colorVariant={COLOR_VARIANT.neutral}>
            Pronunciamiento hostigamiento sexual
          </DocumentLink>
        </StyledHeadContent>
        <BaseTitle>Sobre el SGIG</BaseTitle>
        <SidebarLayout
          content={content}
          defaultItemIndex={defaultItemIndex}
          noHeaders
        />
      </StyledContent>

      <TecFooter />
      <GobFooter />
    </StyledSGIG>
  );
};

const StyledSGIG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledMainTitle = styled(StyledH2)`
  margin: var(--size-margin-small) 0;
  text-align: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--size-margin-body);
`;

const StyledHeadContent = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 5fr);
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-areas: "card dTitle dTitle dTitle" "card . . ." "card . . .";
  width: 100%;
  gap: var(--size-gap-medium);
  padding: var(--size-padding-medium);
`;

const StyledHeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min-content;
  gap: var(--size-gap-small);
  border: 1px solid var(--colors-app-primary-300);
  background-color: var(--colors-app-primary-50);
  padding: var(--size-padding-medium);
  text-align: center;
`;

const StyledHeaderImg = styled(CustomImg)`
  padding: var(--size-padding-medium);
`;

const StyledHeaderTitle = styled(BaseTitle)`
  display: flex;
  align-items: center;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;
