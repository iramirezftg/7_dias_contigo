import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, MailOpen, MapPin, CalendarHeart } from 'lucide-react';
import { surprises, isUnlocked, getTimeRemaining, userData } from '../utils/data';

export default function Dashboard() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState(null);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(userData.targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(userData.targetDate));
    }, 60000); // update every minute
    return () => clearInterval(timer);
  }, []);

  const handleEnvelopeClick = (surprise) => {
    if (isUnlocked(surprise.unlockAt)) {
      navigate(`/dia/${surprise.day}`);
    } else {
      const remaining = getTimeRemaining(surprise.unlockAt);
      if (remaining) {
        setToastMessage(`Faltan ${remaining.days} días, ${remaining.hours} horas y ${remaining.minutes} minutos.`);
        setTimeout(() => setToastMessage(null), 3500);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 max-w-4xl mx-auto relative">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-red-500/90 text-white px-6 py-3 rounded-full shadow-lg border border-red-400 backdrop-blur-md text-sm md:text-base font-medium"
          >
            <span className="font-bold mr-2">Tramposa 😏</span> 
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <header className="text-center mt-8 mb-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-serif text-white mb-2"
        >
          7 días contigo
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-1 w-20 bg-gold-500 mx-auto rounded-full"
        />
      </header>

      {/* The 7 Envelopes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
        {surprises.map((surprise, index) => {
          const unlocked = isUnlocked(surprise.unlockAt);
          return (
            <motion.div
              key={surprise.day}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleEnvelopeClick(surprise)}
              className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden group
                ${unlocked 
                  ? 'bg-gradient-to-br from-gold-600 to-gold-800 shadow-[0_0_15px_rgba(236,170,33,0.3)] hover:scale-105' 
                  : 'glass-panel hover:bg-white/10'
                }`}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
              
              {unlocked ? (
                <MailOpen className="w-10 h-10 text-gold-100 mb-2 drop-shadow-md" />
              ) : (
                <Lock className="w-8 h-8 text-gray-400 mb-2" />
              )}
              
              <span className={`font-semibold ${unlocked ? 'text-white' : 'text-gray-400'}`}>
                Día {surprise.day}
              </span>
              
              {unlocked && (
                <span className="text-xs text-gold-200 mt-1 px-4 text-center">
                  {surprise.title}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Stats Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-auto glass-panel rounded-3xl p-6 flex flex-col md:flex-row justify-around items-center gap-6"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <CalendarHeart className="w-5 h-5 text-gold-400" />
            <span className="text-3xl font-serif text-white">
              {timeLeft?.days || 0}
            </span>
          </div>
          <span className="text-sm text-gray-400 uppercase tracking-wider">Días para volver a verte</span>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/10"></div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <MapPin className="w-5 h-5 text-gold-400" />
            <span className="text-3xl font-serif text-white">
              {userData.distance} <span className="text-xl">km</span>
            </span>
          </div>
          <span className="text-sm text-gray-400 uppercase tracking-wider">Que no nos separan</span>
        </div>
      </motion.div>
      
      <p className="text-center text-xs text-gray-500 mt-6 pb-4 font-light">
        Te extraño una distancia que Google Maps sabe medir, pero yo no.
      </p>
    </div>
  );
}
