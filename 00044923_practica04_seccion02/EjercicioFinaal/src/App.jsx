import Avatar from './Avatar.jsx';
import './App.css';
import curieImagen from './maria.jpg';

function CientificoCard({ cientifico }) { 
  return (
    <div className="cientifico-card">
      
      <div className="avatar-container">
        {cientifico.usarAvatar ? (
          <Avatar 
            person={{ 
              name: cientifico.nombre, 
              imageId: cientifico.imageId 
            }} 
            size={100} 
          />
        ) : (
          <img 
            className="avatar"
            src={cientifico.imagen}
            alt={cientifico.nombre}
            width={100}
            height={100}
          />
        )}
        
      </div>
      <div className="info-container">
        <h2>{cientifico.nombre}</h2>
        <p><strong>•Profesión:</strong> {cientifico.profesion}</p>
        <p><strong>•Descubrimiento:</strong> {cientifico.descubrimiento}</p>
        <p><strong>•Premios:</strong> {cientifico.premios}</p>
        <div className="premios-lista">
          <strong>Premios detallados:</strong>
          <ul>
            {cientifico.premiosDetalle.map((premio, index) => (
              <li key={index}>{premio}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const cientificos = [ 
    {
      id: 1,
      nombre: "Maria Skłodowska-Curie",  
      profesion: "Física y química",     
      premios: 4,
      descubrimiento: "Polonio (elemento químico)",  
      imagen: curieImagen,
      premiosDetalle: [
        "Premio Nobel de Física", 
        "Premio Nobel de Química", 
        "Medalla Davy", 
        "Medalla Matteucci"
      ]
    },
    {
      id: 2,
      nombre: "Katsuko Saruhashi",
      profesion: "Geoquímica",
      premios: 2,
      descubrimiento: "Un método para medir el dióxido de carbono en el agua de mar",
      imageId: 'YfeOqp2',
      usarAvatar: true,
      premiosDetalle: [
        "Premio Miyake de geoquímica", 
        "Premio Tanaka"
      ]
    }
  ];

  return (
    <div className="App">
        <h2 className='app-header'>Científicos Notables</h2>
      <main className="cientificos-container">
        {cientificos.map(cientifico => (
          <CientificoCard key={cientifico.id} cientifico={cientifico} />
        ))}
      </main>
    </div>
  );
}