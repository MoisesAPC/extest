
import ismayoredad from '../utils/ismayoredad'

describe('ismayoredad', () => {
    it('Retorna un booleano', () =>
    {
            const result = ismayoredad(20);
            expect(typeof result).toBe('boolean')
    })

    it('Si la entrada es 18, retorna true', () =>
    {
            const result = ismayoredad(18);
            expect(result).toBe(true);
    })

    it('Si la entrada es un número mayor que 18, retorna true', () => 
    {
        const result = ismayoredad(32);
        expect(result).toBe(true);
    
    })

    it('Si la entrada es un número menor que 18, devuelve false', () => 
    {
        const result = ismayoredad(9);
        expect(result).toBe(false);
    })

    it('Si la entrada es un número negativo, devuelve null', () => 
    {
        const result = ismayoredad(-10);
        expect(result).toBe(null);
    })
});
