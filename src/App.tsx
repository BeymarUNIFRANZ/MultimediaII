import React, { useState } from 'react';
import './App.css';
import SumInput from './Componentes/SumInput';
import SumResult from './Componentes/SumResult';

interface Values {
  num1: number;
  num2: number;
}

const App: React.FC = () => {
  // Estado para suma
  const [values, setValues] = useState<Values>({ num1: 0, num2: 0 });

  // Estado para búsqueda binaria
  const [palabra, setPalabra] = useState('');
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const handleChange = (name: string, value: number) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Solo letras, sin espacios ni números
  const handlePalabraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setPalabra(value.toLowerCase());
    }
  };

  // Limpia, separa y ordena las palabras del texto
  const prepararTexto = (text: string): string[] => {
    return text
      .toLowerCase()
      .replace(/[.,!?¿¡;:()"]/g, '')
      .split(/\s+/)
      .sort();
  };

  // Búsqueda binaria
  const busquedaBinaria = (lista: string[], objetivo: string): boolean => {
    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2);
      if (lista[medio] === objetivo) return true;
      if (lista[medio] < objetivo) inicio = medio + 1;
      else fin = medio - 1;
    }

    return false;
  };

  const handleBuscar = () => {
    const lista = prepararTexto(texto);
    const encontrado = busquedaBinaria(lista, palabra);
    setResultado(encontrado ? 'SI' : 'NO');
  };

  const suma = values.num1 + values.num2;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Suma:</h1>
      <SumInput num1={values.num1} num2={values.num2} onChange={handleChange} />
      <SumResult result={suma} />

      <hr style={{ margin: '2rem 0' }} />

      <h2>Búsqueda Binaria:</h2>
      <div>
        <label>Palabra:</label><br />
        <input type="text" value={palabra} onChange={handlePalabraChange} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Texto (oraciones):</label><br />
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={5}
          cols={40}
        
        />
      </div>

      <button onClick={handleBuscar} style={{ marginTop: '1rem' }}>
        Enviar
      </button>

      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        RESULTADO: {resultado}
      </div>
    </div>
  );
};

export default App;
