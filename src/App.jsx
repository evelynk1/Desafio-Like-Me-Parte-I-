import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState(""); 
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(urlBaseServer + "/posts");
      setPosts(data);
    } catch (error) {
      console.error("Error al obtener los posts:", error);
    }
  };

  const agregarPost = async () => {
    try {
      const post = { titulo, img: imgSrc, descripcion }; 
      await axios.post(urlBaseServer + "/posts", post);
      getPosts();
      
      setTitulo("");
      setImgSRC("");
      setDescripcion("");
    } catch (error) {
      console.error("Error al agregar el post:", error);
    }
  };

  const like = async (id) => {
    console.log("Like:", id);
  };

  const eliminarPost = async (id) => {
    console.log("Eliminar:", id);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="text-center py-5">📷 Like Me 📷</h2>
      <div className="container">
        {/* AGREGADO: "align-items-start" para que el formulario y las tarjetas inicien alineados arriba */}
        <div className="row g-4 align-items-start"> 
          
          {/* Columna del Formulario */}
          <div className="col-12 col-md-4">
            <Form
              setTitulo={setTitulo}
              setImgSRC={setImgSRC}
              setDescripcion={setDescripcion}
              agregarPost={agregarPost}
              titulo={titulo}
              imgSrc={imgSrc}
              descripcion={descripcion}
            />
          </div>
          
          {/* Columna de los Posts */}
          <div className="col-12 col-md-8">
            <div className="row g-3"> {/* Separación un poquito más pequeña entre tarjetas */}
              {posts.map((post, i) => (
                <Post
                  key={i}
                  post={post}
                  like={like}
                  eliminarPost={eliminarPost}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;