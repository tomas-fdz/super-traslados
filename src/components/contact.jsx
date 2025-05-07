import React from "react";
// Ya no necesitas importar useState si no lo usas para otra cosa
// Ya no necesitas importar emailjs si no usas el formulario

export const Contact = (props) => {
  // Ya no necesitas el estado inicial ni la lógica de estado para el formulario
  // Ya no necesitas las funciones handleChange ni clearState
  // Ya no necesitas la función handleSubmit

  return (
    <div>
      {/* La sección principal de contacto */}
      <div id="contact">
        <div className="container">
          {/* Aquí estaba la columna col-md-8 con el formulario, ahora eliminada */}

          {/* Columna con la información de contacto */}
          {/* Considera ajustar las clases de columna aquí (ej: col-md-12, col-md-8, etc.)
              si quieres que la información de contacto ocupe más espacio o cambie de posición
              ahora que el formulario no está */}
          <div className="col-md-3 col-md-offset-1 contact-info">
             <div className="contact-item">
               {/* Título de información de contacto, si lo quieres mantener */}
               <h3>Contacto</h3>
             </div>
             <div className="contact-item">
               <p>
                 <span>
                   <i className="fa fa-phone"></i> WhatsApp
                 </span>{" "}
                 {/* Muestra el teléfono desde los datos */}
                 {props.data ? props.data.phone : "loading"}
               </p>
             </div>
             <div className="contact-item">
               <p>
                 <span>
                   <i className="fa fa-envelope-o"></i> Email
                 </span>{" "}
                 {/* Muestra el email desde los datos */}
                 {props.data ? props.data.email : "loading"}
               </p>
             </div>
          </div>

          {/* Columna con las redes sociales */}
           {/* También puedes ajustar la clase col-md-12 si quieres cambiar su layout */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    {/* Enlace a Facebook */}
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    {/* Enlace a Twitter */}
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    {/* Enlace a YouTube */}
                    <a href={props.data ? props.data.whatsapp : "/"}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                   {/* Añade más enlaces de redes sociales si los tienes en data.json */}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* La sección del footer se mantiene igual */}
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Todos los derechos reservados. {" "}
            <a href="" rel="nofollow">
              Super Traslados
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};