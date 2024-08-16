import React from 'react';

function Contacto() {
  return (
    <section className="contact">
      <h2>Contáctanos</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
