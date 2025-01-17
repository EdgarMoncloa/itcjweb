import { Meta, StoryObj } from "@storybook/react";
import {
  DiagramTimelineBento,
  DiagramTimelineBentoProps,
} from "./DiagramTimelineBento";
import { ExampleContainer } from "../../atoms/Examples/ExampleContainer";
import { CKEditorRenderer } from "../CKEditorRenderer";

export default {
  title: "Organisms/Diagrams/DiagramTimelineBento",
  component: DiagramTimelineBento,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 2,
        max: 15,
      },
    },
  },
};
type MyComponentStoryProps = {
  items: number;
};

type Story = StoryObj<MyComponentStoryProps>;

const timeLineContents = [
  `<h1 style=\"text-align:center;\">1 Ingresa</h1><p style=\"text-align:center;\">Ingresa a <a href=\"http://www.sii.cdjuarez.tecnm.mx/\">http://www.sii.cdjuarez.tecnm.mx</a> Selecciona la opción aspirantes.</p>`,
  `<h1 style=\"text-align:center;\">2 Autentificación</h1><p style=\"text-align:center;\">En No. de solicitud teclea 0 y el NIP teclea 0 <strong>Importante</strong> Tener a la mano tu clave única de registro de población (CURP), si no cuentas con ella, puedes obtenerla en <a href=\"https://www.gob.mx/curp/\">https://www.gob.mx/curp/</a></p>`,
  `<h1 style=\"text-align:center;\">3 Nuevo aspirante</h1><p style=\"text-align:center;\">Aparecen recomendaciones antes de iniciar, después de leer presiona <strong>continuar</strong>. En la pantalla Nuevo Aspirante, llena los campos con tu nombre completo como se encuentra en tu acta de nacimiento. Posteriormente, debes dar clic en el recuadro NIP GENERADO para obtener tu NIP.</p>`,
  `<h1 style=\"text-align:center;\">4 Accesos</h1><p style=\"text-align:center;\">Aparecerá una nota con los No. de solicitud y NIP, debes de guardar estos datos, ya que serán tu acceso al SII como aspirante.</p>`,
  `<h1 style=\"text-align:center;\">5 Formularios</h1><p style=\"text-align:center;\">El proceso de llenado de la solicitud consta de dos formularios</p><ol><li><p style=\"text-align:center;\">La solicitud de ficha de examen de selección</p></li><li><p style=\"text-align:center;\">El formulario de datos socioeconómicos del aspirante</p></li></ol><p style=\"text-align:center;\">Es importante que llenes ambos en su totalidad.</p>`,
  `<h1 style=\"text-align:center;\">6 Descargas</h1><ul><li><p style=\"text-align:center;\">Descarga e imprime tu acceso al examen</p><ul><li><p style=\"text-align:center;\">FORMATOS IMPRESOS I</p></li><li><p style=\"text-align:center;\">MODALIDAD ESCOLARIZADA I</p></li><li><p style=\"text-align:center;\">FORMATO UBICACIÓN AULA PARA EXAMEN</p></li></ul></li><li><p style=\"text-align:center;\">Descarga tu guía de estudios para el examen de admisión</p><ul><li><p style=\"text-align:center;\">FORMATOS IMPRESOS I</p></li><li><p style=\"text-align:center;\">GUIA DE ESTUDIO PARA EXAMEN DE SELECCIÓN</p></li></ul></li></ul>`,
];

const timelineItems = timeLineContents.map((item, idx) => ({
  content: <CKEditorRenderer content={item} />,
}));

export const Base: Story = {
  args: {
    items: 3,
  },
  render: (args) => {
    return (
      <DiagramTimelineBento
        items={timelineItems}
        haveIcons={false}
        title="Proceso de admisión"
      />
    );
  },
};
