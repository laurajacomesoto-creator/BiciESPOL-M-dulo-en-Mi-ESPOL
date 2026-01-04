
import React from 'react';

interface InstructionDetailViewProps {
  onBack: () => void;
}

const InstructionDetailView: React.FC<InstructionDetailViewProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-white text-black animate-in slide-in-from-bottom duration-300">
      <div className="flex-1 overflow-y-auto px-8 py-10">
        <div className="flex flex-col gap-2 mb-10 text-center">
          <h3 className="text-sm font-black leading-tight uppercase tracking-tight">
            Instructivo para uso de Bicicletas provistas por ESPOL
          </h3>
          <p className="text-[11px] font-bold text-gray-700">
            Estudiantes, Profesores, Personal Administrativo y Trabajadores:
          </p>
        </div>

        <div className="space-y-5 text-[12px] text-justify leading-relaxed font-medium">
          <p>
            <span className="font-black">1.-</span> La administración del Servicio de préstamo de bicicletas, estará a cargo de la Unidad de Bienestar Estudiantil y Politécnico. Podrán utilizar este servicio: los estudiantes regulares, profesores, servidores o trabajadores de Espol.
          </p>
          <p>
            <span className="font-black">2.-</span> Las bicicletas son para uso exclusivo del traslado entre las estaciones que forman parte de la Ciclovía en el Campus Gustavo Galindo.
          </p>
          <p>
            <span className="font-black">3.-</span> El horario de uso de las bicicletas será establecido por la Dirección de Bienestar Estudiantil y Politécnico y será publicado en las estaciones de la Ciclovía.
          </p>
          <p>
            <span className="font-black">4.-</span> El uso de las bicicletas es gratuito durante los primeros quince (15) minutos, y para el préstamo se deberá presentar el carné de Espol vigente, en una de las estaciones de la ciclovía.
          </p>
          <p>
            <span className="font-black">5.-</span> Para que los usuarios puedan acceder al préstamo de bicicletas deberán presentar, por una sola vez, en la Dirección de Bienestar Estudiantil y Politécnico el <span className="font-bold">“Formulario de Uso de Bicicletas”</span>, firmado; que podrá descargarse desde el sitio web de la Unidad de Bienestar Estudiantil y Politécnico.
          </p>
          <p>
            <span className="font-black">6.-</span> Se recomienda utilizar la bicicleta con la marcha (cambio de velocidad) posicionado en número 4 y para el caso de subir pendientes, en número 2. Adicionalmente se recomienda que para frenar, se realice primero con la rueda trasera que típicamente se manipula desde el manubrio derecho.
          </p>
          <p>
            <span className="font-black">7.-</span> Para prestar una bicicleta en una de las estaciones habilitadas en el Campus Gustavo Galindo, deberá presentar el carné de ESPOL vigente. A partir de ese instante, tiene quince (15) minutos para devolver la bicicleta en la estación más cercana. No existe límite de préstamos durante el día, salvo la disponibilidad física de las bicicletas y en cada préstamo los primeros quince (15) minutos son gratuitos.
          </p>
          <p className="italic">
            Se recuerda que el préstamo es a título personal y no es transferible; el usuario será responsable por el buen uso de la bicicleta. <span className="font-black">La bicicleta es unipersonal, no se permite cargar a otra persona adicional al conductor.</span>
          </p>
          <p>
            <span className="font-black">8.-</span> En el caso de no devolver la bicicleta dentro de los primeros quince (15) minutos, se aplicará una multa equivalente a $0.50 (cincuenta centavos de USD dólar) por cada quince minutos adicionales o fracción de ese tiempo. Podrá seguir prestando bicicletas hasta acumular una multa con valor máximo de $5 (cinco dólares), a partir de ese monto y si no cancela lo adeudado, no podrá volver a prestar bicicletas.
          </p>
          <p>
            Si luego de 24 horas no ha devuelto la bicicleta, se recuerda que el valor a pagar será equivalente a la multiplicación de $0.50 centavos de dólar por cada 15 minutos (dos dólares por hora o 48 dólares por día), sin exceder el costo de adquisición del bien. En caso de pérdida, se le imputará el costo total de adquisición de la bicicleta, al último usuario que realizó préstamo de la misma.
          </p>
          <p>
            <span className="font-black">9.-</span> Para la devolución, deberá presentar la bicicleta en las mismas condiciones en que la recibió, en la estación más cercana y se liberará el préstamo. En la estación se le indicará si tiene alguna multa por exceder los quince (15) minutos gratuitos. De presentarse inconvenientes técnicos con la bicicleta, el usuario deberá reportar lo sucedido en la estación de recepción.
          </p>
          <p>
            <span className="font-black">10.-</span> Las multas se cargarán automáticamente desde el Sistema de Control de Uso de Bicicletas hacia los sistemas: Académico y Financiero de la Institución, según corresponda; por tal razón, los valores deben ser cancelados en la Tesorería o en los medios de pago autorizados por la ESPOL. Para el caso de profesores, servidores y trabajadores, se considerará como alternativa a los medios de pago antes indicadas, el descuento a través del Rol de Remuneración; para lo cual a la firma del <span className="font-bold">“Formulario de Uso de Bicicletas”</span>, se autoriza de manera expresa el descuento pertinente.
          </p>
        </div>
        
        <button 
          onClick={onBack}
          className="mt-12 mb-8 w-full py-4 bg-black text-white font-black rounded-xl active:scale-95 transition-transform uppercase tracking-widest text-xs"
        >
          Cerrar Instructivo
        </button>
      </div>
    </div>
  );
};

export default InstructionDetailView;
