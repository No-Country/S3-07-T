import{ render, screen } from "@testing-library/react";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import {Landing} from "../pages/landing/index";
import {Link,BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';



describe("Debe existir una landing page que cumpla con:", ()=>{
    
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                </Routes>
            </BrowserRouter>
                , container);
            });

    });

    it('contiene una imagen de fondo (vinculada al proyecto)', ()=>{
        
        const el = screen.getByText(/ingresar/i);
        screen.debug();
        expect(el.parentElement).not.toHaveStyle('background: none');
    });
    it('renderiza un botón', ()=>{

    
        expect( screen.getByText(/ingresar/i)).toBeInTheDocument()
    });
    
});