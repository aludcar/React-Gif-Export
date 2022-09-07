import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  /*******Custom Hook********/
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        /*este if permite evuluar al isLoading
         * si es true, retorna al h2 cargando
         * && if corto con una sola condicion
         */
        isLoading && <h2>Cargando..</h2>
      }

      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
