import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { userData } from '../utils/data';

export default function Intro({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normalize string to ignore accents, case, and extra spaces
    const normalizedInput = password.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const normalizedExpected = userData.password.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    
    if (normalizedInput === normalizedExpected) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-md w-full"
      >
        <Heart className="w-12 h-12 text-gold-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(236,170,33,0.5)]" />
        
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
          Tengo algo para ti <span className="text-gold-500">Valeria</span>
        </h1>
        
        <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
          No puedo estar ahí todos los días, así que hice algo para estar un poquito más cerca.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gold-300 mb-2 font-medium">
              ¿Cómo me dices desde que empezamos?
            </label>
            <motion.div
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-white/5 border ${
                  error ? 'border-red-500' : 'border-gold-500/30 focus:border-gold-500'
                } rounded-xl px-4 py-3 text-white text-center placeholder:text-gray-500 outline-none transition-colors shadow-inner backdrop-blur-sm`}
                placeholder="Escribe aquí..."
              />
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-medium py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(236,170,33,0.3)]"
          >
            Abrir mi regalo
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
