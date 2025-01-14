import { Meta, StoryObj } from "@storybook/react";
import { DiagramTimeline, DiagramTimelineProps } from "./";
import { ExampleContainer } from "../../atoms/ExampleContainer";

export default {
  title: "Organisms/Diagrams/DiagramTimeline",
  component: DiagramTimeline,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 2,
        max: 15,
      },
    },
    firstCentered: {
      control: {
        type: "boolean",
      },
    },
    lastCentered: {
      control: {
        type: "boolean",
      },
    },
  },
};

type CustomStory = StoryObj<
  Omit<DiagramTimelineProps, "items"> & { items: number }
>;

type Story = StoryObj<CustomStory>;

export const Base: Story = {
  args: {
    items: 5,
    firstCentered: true,
    lastCentered: true,
  },
  render: (args) => {
    // const exampleItems = Array.from({ length: args.items }, (_, idx) => (
    //   <ExampleContainer key={idx}>item: {idx}</ExampleContainer>
    // ));

    const exampleItems = [
      <div>
        <p>1 Ingresa</p>
        <p>
          Ingresa a http://www.sii.cdjuarez.tecnm.mx Selecciona la opción
          aspirantes.
        </p>
      </div>,
      <div>
        <p>2 Autentificación</p>
        <p>
          En No. de solicitud teclea 0 y el NIP teclea 0 Importante Tener a la
          mano tu clave única de registro de población (CURP), si no cuentas con
          ella, puedes obtenerla en https://www.gob.mx/curp/
        </p>
      </div>,
      <div>
        <p>3 Nuevo aspirante</p>
        <p>
          Aparecen recomendaciones antes de iniciar, después de leer presiona
          continuar. En la pantalla Nuevo Aspirante, llena los campos con tu
          nombre completo como se encuentra en tu acta de nacimiento.
          Posteriormente, debes dar clic en el recuadro NIP GENERADO para
          obtener tu NIP.
        </p>
      </div>,
      <div>
        <p>4 Accesos</p>
        <p>
          Aparecerá una nota con los No. de solicitud y NIP, debes de guardar
          estos datos, ya que serán tu acceso al SII como aspirante.
        </p>
      </div>,
    ];
    return <DiagramTimeline {...args} items={exampleItems} />;
  },
};
