import React, { useState } from 'react';

function VehiculoFrm() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <div className="vehiculo-form">
      <h1>Seguro de Vehículo</h1>
      <form>
        <label>
          Selecciona un tipo de seguro:
          <select value={selectedPlan} onChange={handlePlanChange}>
            <option value="">Seleccionar...</option>
            <option value="SOAT">SOAT (Seguro Obligatorio de Accidentes de Tránsito)</option>
            <option value="ContraTodoRiesgo">Seguro Contra Todo Riesgo</option>
            <option value="ResponsabilidadCivil">Seguro de Responsabilidad Civil</option>
          </select>
        </label>

        {selectedPlan === 'SOAT' && (
          <div className="plan-details">
            <h2>SOAT</h2>
            <p>El SOAT es obligatorio para todos los vehículos en Perú y cubre los daños a las personas involucradas en un accidente.</p>
            <ul>
              <li>Atención médica para heridos.</li>
              <li>Gastos funerarios.</li>
              <li>Indemnización por invalidez y muerte.</li>
            </ul>
          </div>
        )}

        {selectedPlan === 'ContraTodoRiesgo' && (
          <div className="plan-details">
            <h2>Seguro Contra Todo Riesgo</h2>
            <p>Cubre daños al propio vehículo en caso de accidente, robo, vandalismo, y fenómenos naturales.</p>
            <ul>
              <li>Daños al propio vehículo en accidentes.</li>
              <li>Robo o pérdida del vehículo.</li>
              <li>Daños por vandalismo.</li>
              <li>Daños causados por fenómenos naturales (inundaciones, terremotos).</li>
            </ul>
          </div>
        )}

        {selectedPlan === 'ResponsabilidadCivil' && (
          <div className="plan-details">
            <h2>Seguro de Responsabilidad Civil</h2>
            <p>Cubre los daños que el conductor cause a terceros en caso de accidente.</p>
            <ul>
              <li>Daños materiales a terceros.</li>
              <li>Lesiones corporales a terceros.</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default VehiculoFrm;
