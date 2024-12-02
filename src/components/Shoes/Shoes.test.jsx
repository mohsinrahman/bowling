import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, beforeEach, vi} from 'vitest';
import Shoes from "./Shoes";
import { nanoid } from 'nanoid';
import { useState } from 'react';
describe('Shoes Component', () => {
    const mockUpdateSize = vi.fn();
    const mockAddShoe = vi.fn();
    const mockRemoveShoe = vi.fn();
    const initialShoes = [ 
        { id: nanoid(), size: ""},
        { id: nanoid(), size: ""},
    ];
    //State Management
    const ShoeState = () => {
        const [shoes, setShoes] = useState(initialShoes);
        const addShoe = () => {
            const newShoe = { id: nanoid(), size: ""};
            setShoes([...shoes, newShoe]);
            mockAddShoe();
        };
        const removeShoe = (id) => {
            setShoes(shoes.filter(shoe => shoe.id !== id));
            mockRemoveShoe();
    };
    const updateSize = (id, size) => {
        setShoes(shoes.map(shoe => shoe.id === id ? {...shoe, size} : shoe));
        mockUpdateSize();
    };
    return (
        <Shoes 
        updateSize={updateSize}
        addShoe={addShoe}
        removeShoe={removeShoe}
        shoes={shoes}
        />
    );
    }
    beforeEach(() => {
        render(<ShoeState />);
    });

    it('Render the correct number of shoe inputs', () => {
        const shoeSizeInputs = screen.getAllByLabelText(/shoe size \/ person \d+/i);
    });
    it("Render call addShoe when button is clicked", () => {
        const addButton = screen.getByText('+');
        fireEvent.click(addButton);
        const shoeSizeInputs = screen.getAllByLabelText(/shoe size \/ person \d+/i);     
    });
    it("Render call removeShoe when button is clicked", () => {
        const removeButton = screen.getAllByText("-")[0];
        fireEvent.click(removeButton);
        const shoeSizeInputs = screen.getAllByLabelText(/shoe size \/ person \d+/i);      
    });
    it("Render updateSize when the shoe size input is changed", () => {
        const shoeSizeInput = screen.getAllByLabelText(/shoe size \/ person \d+/i)[0];
        fireEvent.change(shoeSizeInput, {target : {value: '30'}});
    });

});




