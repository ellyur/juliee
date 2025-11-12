import { motion } from 'framer-motion';

const SaveTheDateVideoSection = () => {
  return (
    <motion.section 
      className="relative w-full overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/sC_iOld6cts?controls=1&modestbranding=1&rel=0"
            title="Save the Date Video"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="video-save-the-date"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              margin: 0,
              padding: 0
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
