import { render, screen } from "@testing-library/react";
import Formulario from "../components/Formulario";
import userEvent from "@testing-library/user-event";

describe('Componente formulario', () => {

    let cabecera;
    let imagen;
    let campo_texto_nombre;
    let campo_texto_edad;
    let boton;

    let cabecera_nivel_6;

    beforeEach(() => {
        render(<Formulario />);
        cabecera = screen.getByRole('heading', { name: 'Rellena el formulario' });
        imagen = screen.getByRole('img');
        campo_texto_nombre = screen.getByLabelText('Nombre');
        campo_texto_edad = screen.getByLabelText('Edad');
        boton = screen.getByRole('button', { name: 'Enviar' });
    });

    it('Se renderizan los siguientes elementos: cabecera, imagen, campo nombre, campo edad, boton', () => {
        expect(cabecera).toBeInTheDocument();
        expect(imagen).toBeInTheDocument();
        expect(campo_texto_nombre).toBeInTheDocument();
        expect(campo_texto_edad).toBeInTheDocument();
        expect(boton).toBeInTheDocument();
    });

    it('Comprobar que cuando el usuario rellena el formulario aparece una cabecera de nivel 6', async () => {
        // Usamos el userEvent. Lo primero que debemos hacer es inicializarlo:
        const user = userEvent.setup()

        // El usuario borra el contenido de ambos campos de texto
        await user.clear(campo_texto_nombre)
        await user.clear(campo_texto_edad)

        // El usuario rellena ambos campos de texto
        await user.type(campo_texto_nombre, 'Moises')
        await user.type(campo_texto_edad, '25')

        // El usuario hace click en el botón.
        await user.click(boton)

        // Comprobamos que, tras pulsar el botón, ahora se ha renderizado una cabecera de nivel 6
        cabecera_nivel_6 = screen.getByRole('heading', {level : 6});
        expect(cabecera_nivel_6).toBeInTheDocument();
    });
});
