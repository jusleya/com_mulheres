import React from 'react';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Grupo = () => (
  <div id="grupo">
    <div className="container">
      <p className="titulo">
        Nosso grupo
      </p>
      <div className="columns is-centered">
        <div className="column is-centered">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam vulputate tristique vehicula. Curabitur egestas ultrices 
            scelerisque. Donec id malesuada ligula, eget vestibulum leo. 
            Curabitur et mattis turpis. Vestibulum efficitur, nunc vel 
            porta volutpat, quam augue lacinia tellus, ut tincidunt mauris 
            augue vitae massa. Morbi aliquam, turpis eget sollicitudin 
            malesuada, neque sapien ultricies est, sit amet auctor leo mi 
            ac nisi. Aenean convallis sapien nisi, nec bibendum odio iaculis
            vitae. Praesent volutpat ultricies finibus. Integer turpis nunc, 
            aliquam et lobortis id, suscipit vitae augue. Proin mollis euismod 
            mollis. Fusce viverra nisl augue, eu malesuada eros varius in. 
            Integer non porttitor massa. Praesent sit amet risus massa. 
            Donec vel leo quis tortor aliquam mollis eget in nisl. 
            Mauris felis turpis, commodo in sapien eu, finibus consequat 
            odio. Quisque et interdum ex.
            Fusce quam erat, accumsan ut tellus in, mattis ultrices lacus. 
            Nulla aliquet, nisl vestibulum lobortis ullamcorper, mauris metus 
            sollicitudin diam, pellentesque posuere quam dolor vitae metus. 
            Phasellus vel metus enim. Etiam pellentesque imperdiet mauris, et 
            porttitor dui dapibus sit amet. Vestibulum sed ullamcorper nunc. 
            Suspendisse potenti. Proin cursus lorem nibh. Aliquam cursus nisl 
            lorem, sed mattis erat feugiat id. Ut eleifend, lectus sed semper 
            cursus, augue urna auctor urna, quis lacinia mauris eros at turpis. 
            Pellentesque laoreet aliquet maximus.
          </p>
        </div>
      </div>
      <hr style={hr} />
    </div>
  </div>
);

export default Grupo;