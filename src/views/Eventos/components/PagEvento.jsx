import React from 'react';

import womakers from '../image/womakers.jpg';

import '../css/style.css';

const PagEvento = () => (
  <div id="pag-evento">
    <div className="section">
      <div className="container">
        <div align="center" className="columns is-centered">
          <div className="column">
            <img className="image" src={womakers} alt="" />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10 title">
            <h1 className="titulo">EVENTO</h1>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor magna eu fermentum egestas. Maecenas est arcu, gravida ultrices tincidunt ac, bibendum sit amet erat. Quisque gravida eros vel diam lobortis, in euismod nunc volutpat. Aliquam erat volutpat. Nullam blandit venenatis elit, vitae lacinia turpis consequat a. Duis bibendum, metus vel rhoncus aliquam, neque massa malesuada lectus, at scelerisque diam nulla vel mauris. Donec vitae vehicula nisi, vel sodales magna. Cras ut sem vel diam faucibus dapibus imperdiet a ante. Praesent dictum vel turpis eu varius. Integer elementum nisi ac posuere rutrum. Donec est sapien, ullamcorper vel arcu eget, accumsan mollis nulla. Donec maximus fermentum rutrum.
              <br/>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fringilla purus placerat enim bibendum, id vulputate odio mattis. Donec lacinia nec elit egestas iaculis. Sed sit amet lacus dui. Maecenas tincidunt lacus eget arcu lobortis tempor. Quisque dapibus eros et vehicula efficitur. Integer eu neque a ante mollis commodo pulvinar ut purus. Cras mi metus, sollicitudin nec tincidunt cursus, faucibus in lorem. Mauris varius lacinia leo, vitae lobortis lacus ornare ut. Duis hendrerit sem id mi laoreet, vitae elementum ante porttitor. Proin aliquet ornare tellus. Fusce efficitur at mauris id porta. Pellentesque eleifend purus dictum quam faucibus, eget rutrum nulla molestie. Ut tortor quam, scelerisque nec tortor vehicula, sodales mattis nulla. Sed scelerisque turpis metus, viverra tincidunt magna elementum sit amet. Quisque sodales nunc nec urna fermentum tempus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PagEvento;