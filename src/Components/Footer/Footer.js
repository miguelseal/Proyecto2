import React from 'react';

const style = {
  backgroundColor: 'rgb(240,240,240)'
};

const footer = () => {
  return(
    <div style={style} className="fixed-bottom text-center mt-4 mb-0">
      <p className="p-2 m-0">&copy; Todos los derechos reservados</p>
    </div>
  );
}

export default footer;