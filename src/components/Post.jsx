function Post({ post, like, eliminarPost }) {
  const { id, titulo, img, descripcion, likes } = post;

  return (
   
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm border-0 bg-light">
        
        {/* Contenedor de la foto  para evitar deformaciones */}
        <div style={{ height: "150px", overflow: "hidden" }}>
          <img 
            className="card-img-top" 
            src={img} 
            alt={titulo} 
            style={{ 
              height: "100%", 
              width: "100%", 
              objectFit: "cover" 
            }}
          />
        </div>
        
        {/* Cuerpo de la tarjeta compacto */}
        <div className="card-body d-flex flex-column justify-content-between p-3">
          
          <div className="text-center mb-2">
            <h5 className="card-title text-uppercase fw-bold m-0 mb-1" style={{ fontSize: "1.1rem" }}>
              {titulo}
            </h5>
            <p className="card-text text-muted small m-0">{descripcion}</p>
          </div>
          
          
          <div className="d-flex justify-content-between align-items-center mt-2">
            
            
            <div className="d-flex align-items-center">
              <span 
                onClick={() => like(id)} 
                style={{ cursor: "pointer", fontSize: "1.3rem" }}
              >
                🤍
              </span>
              <span className="ms-2 fw-bold">{likes}</span>
            </div>
            
            {/* Botón de la X roja para eliminar */}
            <span 
              onClick={() => eliminarPost(id)} 
              className="text-danger fw-bold" 
              style={{ cursor: "pointer", fontSize: "1.2rem" }}
            >
              ✕
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Post;