import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Pause, Heart, Gift, Camera, Clock, Music } from 'lucide-react';
import { surprises, isUnlocked } from '../utils/data';
import { useEffect, useState, useRef } from 'react';

export default function DayView() {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const dayNum = parseInt(dayId, 10);
  
  const surprise = surprises.find(s => s.day === dayNum);
  
  useEffect(() => {
    if (!surprise || !isUnlocked(surprise.unlockAt)) {
      navigate('/home');
    }
  }, [surprise, navigate]);

  if (!surprise) return null;

  return (
    <div className="min-h-screen flex flex-col p-6 max-w-2xl mx-auto">
      <button 
        onClick={() => navigate('/home')}
        className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 w-fit"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1"
      >
        <div className="mb-8">
          <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">Día {surprise.day}</span>
          <h2 className="text-3xl font-serif text-white mt-2">{surprise.title}</h2>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Specific content for each day */}
          {surprise.day === 1 && <DayOneContent />}
          {surprise.day === 2 && <DayTwoContent />}
          {surprise.day === 3 && <DayThreeContent />}
          {surprise.day === 4 && <DayFourContent />}
          {surprise.day === 5 && <DayFiveContent />}
          {surprise.day === 6 && <DaySixContent />}
          {surprise.day === 7 && <DaySevenContent />}
        </div>
      </motion.div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Day Components (With placeholders)
// ----------------------------------------------------------------------

function DayOneContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-6 text-center">
      <div className="aspect-[4/3] rounded-2xl bg-gray-800 overflow-hidden relative border border-gold-500/20">
        <img 
          src="/dia1-foto.jpg" 
          alt="Nosotros" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
      </div>
      
      <div className="bg-dark-800/80 p-4 rounded-xl flex items-center gap-4 border border-white/5">
        <audio 
          ref={audioRef} 
          src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/48/39/2e483976-eeb1-d0c3-475b-68749f4d7d89/mzaf_16131090060610919964.plus.aac.p.m4a"
          onEnded={() => setIsPlaying(false)}
        />
        <button 
          onClick={togglePlay}
          className="w-12 h-12 bg-gold-500 hover:bg-gold-400 rounded-full flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(236,170,33,0.3)] shrink-0"
        >
          {isPlaying ? <Pause className="w-6 h-6 text-dark-900" /> : <Play className="w-6 h-6 text-dark-900 ml-1" />}
        </button>
        <div className="text-left flex-1">
          <p className="text-sm font-bold text-white">SOLO CON VERTE</p>
          <p className="text-xs text-gold-300">Banda MS</p>
        </div>
        <a 
          href="https://open.spotify.com/search/Solo%20Con%20Verte%20Banda%20MS"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-2 shrink-0"
        >
          Abrir en Spotify
        </a>
      </div>

      <p className="text-gray-300 font-light leading-relaxed italic">
        "Sé que estos días sin vernos se sienten largos, pero quiero que sepas que siempre te llevo conmigo. Hoy es solo el primer día de sorpresas, mi niña hermosa. Eres mi Aries favorita, y a tus 24 años sigues iluminando cada espacio en el que estás..."
      </p>
    </div>
  );
}

function DayTwoContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-8">
      <Heart className="w-16 h-16 text-gold-500 drop-shadow-[0_0_20px_rgba(236,170,33,0.4)]" />
      <h3 className="text-xl text-center text-white font-medium">🎧 Ponte audífonos, cierra los ojos y dale play.</h3>
      
      <audio 
        ref={audioRef} 
        src="/dia2-audio.webm"
        onEnded={() => setIsPlaying(false)}
      />

      <button 
        onClick={togglePlay}
        className="w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(236,170,33,0.3)] hover:scale-105 transition-transform"
      >
        {isPlaying ? <Pause className="w-10 h-10 text-dark-900" /> : <Play className="w-10 h-10 text-dark-900 ml-2" />}
      </button>
      <p className="text-xs text-gold-300">Mensaje de voz de Mi Niño</p>
    </div>
  );
}

function DayThreeContent() {
  const reasons = [
    "Amo escuchar el sonido de tu voz contándome cualquier detalle de tu día.",
    "La manera tan única que tienes de ver la vida.",
    "Esa energía y pasión tan tuya de Aries que ilumina hasta los días más grises.",
    "Cómo te brillan los ojos cuando hablas de las cosas que realmente te emocionan.",
    "Tu lado un poquito fastidioso que, aunque no lo admitas, me parece lo más tierno del mundo.",
    "El calor de tus abrazos y cómo logras que todo lo demás desaparezca en ese instante.",
    "Ese pequeño gesto que haces al reír.",
    "La seguridad con la que caminas a tus 24 años, lista para comerte al mundo entero.",
    "Que me llames 'Mi Niño' y cómo esas dos simples palabras me hacen sentir en casa.",
    "La forma en la que me tratas, porque me confirma que soy el hombre más afortunado por tenerte a mi lado."
  ];

  return (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
      {reasons.map((reason, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.4 }}
          className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex shrink-0 items-center justify-center font-serif text-sm">
            {idx + 1}
          </div>
          <p className="text-gray-200 text-sm md:text-base leading-snug">{reason}</p>
        </motion.div>
      ))}
    </div>
  );
}

function DayFourContent() {
  const timeline = [
    { title: "El Live de TikTok", desc: "Te conocí por azares del destino mientras hacías un en vivo. Fue el momento en el que todo empezó." },
    { title: "El primer mensaje", desc: "Me animé a escribirte por ahí mismo y, para mi suerte, me respondiste." },
    { title: "De TikTok a Instagram", desc: "Me agregaste a Instagram y las pláticas empezaron a fluir." },
    { title: "WhatsApp", desc: "Me pasaste tu número y hablar contigo se volvió mi parte favorita del día." },
    { title: "Flores y Starbucks", desc: "Quería sorprenderte y sacarte una sonrisa a la distancia." },
    { title: "¿Quieres ser mi novia?", desc: "El momento en el que te lo pedí. Sin duda, la mejor decisión de mi vida." },
    { title: "Hoy", desc: "A un paso de volver a verte y seguir escribiendo nuestra historia." }
  ];

  return (
    <div className="relative border-l-2 border-gold-500/30 ml-4 space-y-6 py-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
      {timeline.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.3 }}
          className="pl-6 relative"
        >
          <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(236,170,33,0.5)]"></div>
          <h4 className="text-white font-medium text-lg">{item.title}</h4>
          <p className="text-gray-400 text-sm md:text-base leading-snug mt-1">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function DayFiveContent() {
  return (
    <div className="text-center py-12 space-y-6">
      <Clock className="w-16 h-16 text-gold-500 mx-auto" />
      <h3 className="text-2xl font-serif text-white">Hoy no hagas planes a las 10pm.</h3>
      <p className="text-gray-300">
        Ponte cómoda, prepara tu bebida favorita y espera mi llamada. Tenemos una cita virtual.
      </p>
    </div>
  );
}

function DaySixContent() {
  return (
    <div className="text-center py-12 space-y-6">
      <Gift className="w-16 h-16 text-gold-500 mx-auto" />
      <h3 className="text-2xl font-serif text-white">Tengo algo para ti...</h3>
      <p className="text-gray-300 text-lg">
        Revisa la puerta en <span className="text-gold-400 font-bold">3... 2... 1...</span>
      </p>
    </div>
  );
}

function DaySevenContent() {
  return (
    <div className="space-y-8 text-center py-6">
      <div className="aspect-video bg-black rounded-xl border border-gold-500/30 flex items-center justify-center relative overflow-hidden">
        <Camera className="w-12 h-12 text-gray-700" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity">
          <Play className="w-16 h-16 text-gold-500" />
        </div>
        <p className="absolute bottom-4 text-xs text-gray-500">(Video placeholder)</p>
      </div>

      <div className="space-y-2">
        <p className="text-xl font-serif text-white">La página termina aquí.</p>
        <p className="text-gold-400 font-medium">Nosotros no.</p>
      </div>
    </div>
  );
}
