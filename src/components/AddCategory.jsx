import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputvalue] = useState("");

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setInputvalue(inputValue.trim());
    /** Se llama un callback donde se llama la funcion que viene en los prps
     */
    if (inputValue.length <= 1) return;
    onAddCategory(inputValue);
    setInputvalue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        /*
         * Esto se puede simplificar en la linea de abajo
         * siempre que la funcion reciba el mismo parametro
         * se puede dejar de la siguiente manera
         *onChange={(event) => onInputChange(event)
         */
        onChange={onInputChange}
      />
    </form>
  );
};
