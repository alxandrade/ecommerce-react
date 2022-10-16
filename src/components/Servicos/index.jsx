import React from 'react'
import './styles.css';

const Servicios = () => {
  return (
    <main className="container-fluid my-5">     
      <section className="row p-3 my-5">
        <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
                <img src="../images/mantenimiento.png" className="card-img-top img_secundarias" alt="..."/>
                <div className="card-body">
                    <h3>Mantenimiento</h3>
                    <p className="card-text">Un equipo de profesionales visitarán tu huerto ya sea semanal, quincenal o mensualmente para hacerlo más productivo. Podemos ayudarte a ponerte al día con trabajos de mantenimiento después de tus vacaciones, o echarte una mano de vez en cuando, para que la tarea en tu huerto no te abrume y esté siempre bello y productivo.</p>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
                <img src="../images/asesoria.jpg" className="card-img-top img_secundarias" alt="..."/>
                <div className="card-body">
                    <h3>Asesoría</h3>
                    <p className="card-text">En El Rincón Verde te llevamos paso a paso para que logres tu proyecto sin importar el tamaño. Te asesoramos desde el primer día, definiendo la ubicación y diseño del huerto hasta los alcances de producción.</p>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
                <img src="../images/cursos.jpeg" className="card-img-top img_secundarias" alt="..."/>
                <div className="card-body">
                    <h3>Cursos</h3>
                    <p className="card-text">Sabemos lo importante de la capacitación constante, por eso tenemos diseñados Cursos y Talleres que fomentan la cultura de Alimentación Sostenible. </p>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Servicios