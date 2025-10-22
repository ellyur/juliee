import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-black mb-12 md:mb-16"
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
              <h3 className="font-display italic text-sm text-black mb-2">Parents of the Groom</h3>
              <p className="text-black font-normal italic text-xs">Ricardo M. Santos</p>
              <p className="text-black font-normal italic text-xs">Maria Elena T. Santos</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-black mb-2">Parents of the Bride</h3>
              <p className="text-black font-normal italic text-xs">Antonio L. Reyes</p>
              <p className="text-black font-normal italic text-xs">Carmela P. Reyes</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-black mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-black font-normal italic text-xs">Hon. Roberto Villanueva</p>
              <p className="text-black font-normal italic text-xs">Hon. Sofia Villanueva</p>
              <p className="text-black font-normal italic text-xs">Atty. Miguel Fernandez</p>
              <p className="text-black font-normal italic text-xs">Mrs. Isabella Cruz</p>
              <p className="text-black font-normal italic text-xs">Dr. Benjamin Morales</p>
              <p className="text-black font-normal italic text-xs">Mrs. Victoria Tan</p>
              <p className="text-black font-normal italic text-xs">Engr. Carlos Mendoza</p>
              <p className="text-black font-normal italic text-xs">Mrs. Angelica Lopez</p>
              <p className="text-black font-normal italic text-xs">Dr. Felipe Ramos</p>
              <p className="text-black font-normal italic text-xs">Mrs. Catherine Velasco</p>
              <p className="text-black font-normal italic text-xs">Atty. Francisco Torres</p>
              <p className="text-black font-normal italic text-xs">Dr. Natalie Flores</p>
              <p className="text-black font-normal italic text-xs">Mr. Eduardo Castillo</p>
              <p className="text-black font-normal italic text-xs">Dr. Veronica Aquino</p>
              <p className="text-black font-normal italic text-xs">Engr. Samuel Rivera</p>
              <p className="text-black font-normal italic text-xs">Mrs. Diana Martinez</p>
              <p className="text-black font-normal italic text-xs">Judge Alfonso Domingo</p>
              <p className="text-black font-normal italic text-xs">Mrs. Rebecca Santiago</p>
              <p className="text-black font-normal italic text-xs">Atty. Gabriel Romero</p>
              <p className="text-black font-normal italic text-xs">Mrs. Melissa Lim</p>
              <p className="text-black font-normal italic text-xs">Dr. Vincent Gonzales</p>
              <p className="text-black font-normal italic text-xs">Mrs. Stephanie Cruz</p>
              <p className="text-black font-normal italic text-xs">Mr. Antonio Valdez</p>
              <p className="text-black font-normal italic text-xs">Mrs. Christine Bautista</p>
              <p className="text-black font-normal italic text-xs">Atty. Manuel Aguilar</p>
              <p className="text-black font-normal italic text-xs">Mrs. Gloria Navarro</p>
              <p className="text-black font-normal italic text-xs">Dr. Leonardo Santos</p>
              <p className="text-black font-normal italic text-xs">Mrs. Rosario Ocampo</p>
              <p className="text-black font-normal italic text-xs">Engr. Rodrigo Silva</p>
              <p className="text-black font-normal italic text-xs">Mrs. Olivia Mendez</p>
              <p className="text-black font-normal italic text-xs">Atty. Ernesto Cruz</p>
              <p className="text-black font-normal italic text-xs">Mrs. Jennifer Pascual</p>
              <p className="text-black font-normal italic text-xs">Dr. Marco Antonio</p>
              <p className="text-black font-normal italic text-xs">Mrs. Clarissa Jimenez</p>
              <p className="text-black font-normal italic text-xs">Mr. Julian Herrera</p>
              <p className="text-black font-normal italic text-xs">Mrs. Amanda Delgado</p>
              <p className="text-black font-normal italic text-xs">Atty. Rafael Salazar</p>
              <p className="text-black font-normal italic text-xs">Mrs. Beatriz Campos</p>
              <p className="text-black font-normal italic text-xs">Dr. Lorenzo Gutierrez</p>
              <p className="text-black font-normal italic text-xs">Mrs. Monica Estrada</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-black mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-normal italic text-xs text-black mb-1">Candle</h4>
                <p className="text-black font-normal italic text-xs">Sebastian Cruz</p>
                <p className="text-black font-normal italic text-xs">Jr.</p>
                <p className="text-black font-normal italic text-xs">Marina Isabel</p>
                <p className="text-black font-normal italic text-xs">Cruz</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-normal italic text-xs text-black mb-1">Veil</h4>
                <p className="text-black font-normal italic text-xs">Adrian Morales</p>
                <p className="text-black font-normal italic text-xs">Lucia Morales</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-normal italic text-xs text-black mb-1">Cord</h4>
                <p className="text-black font-normal italic text-xs">Marcus Santos</p>
                <p className="text-black font-normal italic text-xs">Elena Grace</p>
                <p className="text-black font-normal italic text-xs">Villanueva</p>
              </div>
            </div>
          </div>

          {/* Wedding Party - 3 COLUMNS always */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-matron-honor">
              <h4 className="font-normal italic text-xs text-black mb-1">Matron of Honor</h4>
              <p className="text-black font-normal italic text-xs">Isabela Marie</p>
              <p className="text-black font-normal italic text-xs">Fernandez</p>
            </div>
            <div data-testid="section-best-man">
              <h4 className="font-normal italic text-xs text-black mb-1">Best Man</h4>
              <p className="text-black font-normal italic text-xs">Cristian James</p>
              <p className="text-black font-normal italic text-xs">Velasco</p>
            </div>
            <div data-testid="section-maid-honor">
              <h4 className="font-normal italic text-xs text-black mb-1">Maid of Honor</h4>
              <p className="text-black font-normal italic text-xs">Sofia Angelica Reyes</p>
            </div>
          </div>

          {/* Senior Members - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-senior-groomsmen">
              <h4 className="font-display italic text-sm text-black mb-2">Senior Groomsmen</h4>
              <p className="text-black font-normal italic text-xs">Gabriel Antonio Mendez</p>
              <p className="text-black font-normal italic text-xs">Lucas Santiago</p>
              <p className="text-black font-normal italic text-xs">Diego Alexander Cruz</p>
              <p className="text-black font-normal italic text-xs">Rafael Vicente Flores</p>
              <p className="text-black font-normal italic text-xs">Nicolas Emmanuel</p>
              <p className="text-black font-normal italic text-xs">Marco Sebastian Torres</p>
            </div>
            <div data-testid="section-senior-bridesmaids">
              <h4 className="font-display italic text-sm text-black mb-2">Senior Bridesmaids</h4>
              <p className="text-black font-normal italic text-xs">Valentina Castillo</p>
              <p className="text-black font-normal italic text-xs">Camila Rivera</p>
              <p className="text-black font-normal italic text-xs">Andrea Michelle Lopez</p>
              <p className="text-black font-normal italic text-xs">Victoria Anne Santos</p>
              <p className="text-black font-normal italic text-xs">Natalia Grace Martinez</p>
              <p className="text-black font-normal italic text-xs">Daniela Sofia Gomez</p>
            </div>
          </div>

          {/* Junior Members - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-junior-groomsmen">
              <h4 className="font-display italic text-sm text-black mb-2">Junior Groomsmen</h4>
              <p className="text-black font-normal italic text-xs">Mateo Francisco Reyes</p>
              <p className="text-black font-normal italic text-xs">Leonardo Jose Cruz</p>
              <p className="text-black font-normal italic text-xs">Julian Miguel Ramos</p>
              <p className="text-black font-normal italic text-xs">Andres Felipe Santos</p>
              <p className="text-black font-normal italic text-xs">Santiago Luis Morales</p>
            </div>
            <div data-testid="section-junior-bridesmaids">
              <h4 className="font-display italic text-sm text-black mb-2">Junior Bridesmaids</h4>
              <p className="text-black font-normal italic text-xs">Isabella Rose Delgado</p>
              <p className="text-black font-normal italic text-xs">Gabriela Faith Torres</p>
              <p className="text-black font-normal italic text-xs">Adriana Nicole Mendoza</p>
              <p className="text-black font-normal italic text-xs">Carolina Joy Flores</p>
              <p className="text-black font-normal italic text-xs">Mariana Hope Velasco</p>
            </div>
          </div>

          {/* Bearers - 3 COLUMNS always */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-ring-bearer">
              <h4 className="font-normal italic text-xs text-black mb-1">Ring Bearer</h4>
              <p className="text-black font-normal italic text-xs">Ethan Gabriel</p>
              <p className="text-black font-normal italic text-xs">Martinez</p>
            </div>
            <div data-testid="section-coin-bearer">
              <h4 className="font-normal italic text-xs text-black mb-1">Coin Bearer</h4>
              <p className="text-black font-normal italic text-xs">Liam Alexander Cruz</p>
            </div>
            <div data-testid="section-bible-bearer">
              <h4 className="font-normal italic text-xs text-black mb-1">Bible Bearer</h4>
              <p className="text-black font-normal italic text-xs">Noah Benjamin</p>
              <p className="text-black font-normal italic text-xs">Valdez</p>
            </div>
          </div>

          {/* Flower Girls - 2 COLUMNS always */}
          <div data-testid="section-flower-girls">
            <h4 className="font-display italic text-sm text-black mb-2">Flower Girls</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <p className="text-black font-normal italic text-xs">Sophia Grace Navarro</p>
              <p className="text-black font-normal italic text-xs">Emma Victoria Pascual</p>
              <p className="text-black font-normal italic text-xs">Olivia Marie Gutierrez</p>
              <p className="text-black font-normal italic text-xs">Mia Angelina Campos</p>
            </div>
          </div>

          {/* Banner Bearers - Single column */}
          <div data-testid="section-banner-bearers">
            <h4 className="font-display italic text-sm text-black mb-2">Banner Bearers</h4>
            <p className="text-black font-normal italic text-xs">Lucas Emmanuel Rivera</p>
            <p className="text-black font-normal italic text-xs">Matias Antonio Rivera</p>
          </div>

          {/* Little Bride and Groom - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-little-groom">
              <h4 className="font-normal italic text-xs text-black mb-1">Little Groom</h4>
              <p className="text-black font-normal italic text-xs">Sebastian Cruz</p>
            </div>
            <div data-testid="section-little-bride">
              <h4 className="font-normal italic text-xs text-black mb-1">Little Bride</h4>
              <p className="text-black font-normal italic text-xs">Isabella Sofia Morales</p>
            </div>
          </div>

          {/* Wedding Officiant - Single column */}
          <div data-testid="section-officiant">
            <p className="text-black font-normal italic text-xs">Rev. Father Miguel A. Santillan</p>
            <h4 className="font-display italic text-sm text-black mt-1">Wedding Officiant</h4>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
