import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-emerald-600 py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Parents Section - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-parents-groom">
              <h3 className="font-display italic text-sm text-white mb-2">Parents of the Groom</h3>
              <p className="text-white font-normal italic text-xs">Mr. Romeo Salazar Dimaiwat</p>
              <p className="text-white font-normal italic text-xs">Mrs. Elena Babia Dimaiwat</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-white mb-2">Parents of the Bride</h3>
              <p className="text-white font-normal italic text-xs">Mr. Victor Biag Boaqueña</p>
              <p className="text-white font-normal italic text-xs">Mrs. Myrna Peñones Boaqueña</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-white mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-white font-normal italic text-xs">Hon. Jose Awa</p>
              <p className="text-white font-normal italic text-xs">Dr. Josephine Doron</p>
              <p className="text-white font-normal italic text-xs">Mr. Ronnie Andoy</p>
              <p className="text-white font-normal italic text-xs">Mrs. Alma Parcero</p>
              <p className="text-white font-normal italic text-xs">Mr. Ruselle Reyel</p>
              <p className="text-white font-normal italic text-xs">Mrs. Cheeryl Biag</p>
              <p className="text-white font-normal italic text-xs">Mr. Manuel Grospe</p>
              <p className="text-white font-normal italic text-xs">Mrs. Cerila Pajenago</p>
              <p className="text-white font-normal italic text-xs">Mr. Vicente Monte</p>
              <p className="text-white font-normal italic text-xs">Mrs. Nemia Dacara</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-white mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-cord">
                <h4 className="font-normal italic text-xs text-white mb-1">Cord</h4>
                <p className="text-white font-normal italic text-xs">Mr. Randie Fuentes</p>
                <p className="text-white font-normal italic text-xs">Engr. Maria Concepcion Regalado</p>
              </div>
              <div data-testid="section-candle">
                <h4 className="font-normal italic text-xs text-white mb-1">Candle</h4>
                <p className="text-white font-normal italic text-xs">Mr. Nilo Bombita</p>
                <p className="text-white font-normal italic text-xs">Engr. Christine Joy Calote</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-normal italic text-xs text-white mb-1">Veil</h4>
                <p className="text-white font-normal italic text-xs">Mr. John Christopher Fidelson</p>
                <p className="text-white font-normal italic text-xs">Ms. Gina Barra</p>
              </div>
            </div>
          </div>

          {/* Ribbon Sponsors */}
          <div>
            <h4 className="font-display italic text-sm text-white mb-2" data-testid="heading-ribbon">Ribbon</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <p className="text-white font-normal italic text-xs">Mr. Karem Babia</p>
              <p className="text-white font-normal italic text-xs">Ms. Annie Dimaiwat</p>
            </div>
          </div>

          {/* Wedding Party - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-best-man">
              <h4 className="font-display italic text-sm text-white mb-2">Best Man</h4>
              <p className="text-white font-normal italic text-xs">Mr. Jins Dimaiwat</p>
            </div>
            <div data-testid="section-maid-honor">
              <h4 className="font-display italic text-sm text-white mb-2">Maid of Honor</h4>
              <p className="text-white font-normal italic text-xs">Ms. Jenelyn Boaqueña</p>
            </div>
          </div>

          {/* Bridesmaids and Groomsmen */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-white mb-2">Groom's Men</h4>
              <p className="text-white font-normal italic text-xs">Mr. Mervin Boaqueña</p>
              <p className="text-white font-normal italic text-xs">Mr. Rudy Dimaiwat</p>
            </div>
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-white mb-2">Bridesmaids</h4>
              <p className="text-white font-normal italic text-xs">Engr. Jovelyn Naldo</p>
              <p className="text-white font-normal italic text-xs">Ms. Mary Rose Soliman</p>
            </div>
          </div>

          {/* Ushers and Usherettes - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-ushers">
              <h4 className="font-display italic text-sm text-white mb-2">Ushers</h4>
              <p className="text-white font-normal italic text-xs">Aljhun Compuesto</p>
              <p className="text-white font-normal italic text-xs">Khrizphey Dela Torre</p>
              <p className="text-white font-normal italic text-xs">John Mher Boaqueña</p>
              <p className="text-white font-normal italic text-xs">John Vic Boaqueña</p>
              <p className="text-white font-normal italic text-xs">Jayson Contreras</p>
              <p className="text-white font-normal italic text-xs">Mark Angelo Babia</p>
              <p className="text-white font-normal italic text-xs">Jay-r Dimaiwat</p>
              <p className="text-white font-normal italic text-xs">Nico Elaine Balisi</p>
              <p className="text-white font-normal italic text-xs">Shyan Michael Bondoc</p>
            </div>
            <div data-testid="section-usherettes">
              <h4 className="font-display italic text-sm text-white mb-2">Usherettes</h4>
              <p className="text-white font-normal italic text-xs">Edinisa Salvadora</p>
              <p className="text-white font-normal italic text-xs">Charlene Bustenerc</p>
              <p className="text-white font-normal italic text-xs">Rochelle Sandrino</p>
              <p className="text-white font-normal italic text-xs">Jessa Mae Boaqueña</p>
              <p className="text-white font-normal italic text-xs">Nica Sheam Boaqueña</p>
              <p className="text-white font-normal italic text-xs">Mylene Dar</p>
              <p className="text-white font-normal italic text-xs">Cindy Belaro</p>
              <p className="text-white font-normal italic text-xs">Raiza Dimaiwat</p>
              <p className="text-white font-normal italic text-xs">Princess Dimaiwat</p>
            </div>
          </div>

          {/* Ring Bearers */}
          <div data-testid="section-ring-bearers">
            <h4 className="font-display italic text-sm text-white mb-2">Ring Bearers</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <p className="text-white font-normal italic text-xs">John Mark Dimaiwat</p>
              <p className="text-white font-normal italic text-xs">John Lee Gend Dimaiwat</p>
              <p className="text-white font-normal italic text-xs">Mark Leo Dar</p>
              <p className="text-white font-normal italic text-xs">Xian Lee Bacal</p>
              <p className="text-white font-normal italic text-xs">Khyr Bryce Filio</p>
            </div>
          </div>

          {/* Flower Girls - 2 COLUMNS */}
          <div data-testid="section-flower-girls">
            <h4 className="font-display italic text-sm text-white mb-2">Flower Girls</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <p className="text-white font-normal italic text-xs">Princess Haleina Belaro</p>
              <p className="text-white font-normal italic text-xs">Princess Kate Natalie Luib</p>
              <p className="text-white font-normal italic text-xs">Xiah Shamaine Bacal</p>
              <p className="text-white font-normal italic text-xs">Maria Claire Parza</p>
              <p className="text-white font-normal italic text-xs">Rheane Gonzales</p>
            </div>
          </div>

          {/* Little Bride and Groom - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-little-groom">
              <h4 className="font-display italic text-sm text-white mb-2">Little Groom</h4>
              <p className="text-white font-normal italic text-xs">Syrus Maverick Cabalfin</p>
            </div>
            <div data-testid="section-little-bride">
              <h4 className="font-display italic text-sm text-white mb-2">Little Bride</h4>
              <p className="text-white font-normal italic text-xs">Viyana Arabell Boaqueña</p>
            </div>
          </div>

          {/* Wedding Officiant - Single column */}
          <div data-testid="section-officiant">
            <p className="text-white font-normal italic text-xs">Rev. Fr. Jayvee P. Rosero</p>
            <h4 className="font-display italic text-sm text-white mt-1">Wedding Officiant</h4>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
