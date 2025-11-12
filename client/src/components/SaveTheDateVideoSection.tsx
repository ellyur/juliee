import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SaveTheDateVideoSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const SaveTheDateVideoSection = ({ audioRef }: SaveTheDateVideoSectionProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wasMusicPlayingRef = useRef(false);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!(window as any).YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
    };

    loadYouTubeAPI();

    (window as any).onYouTubeIframeAPIReady = () => {
      if (iframeRef.current) {
        new (window as any).YT.Player(iframeRef.current, {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.PLAYING) {
                if (audioRef.current && !audioRef.current.paused) {
                  wasMusicPlayingRef.current = true;
                  audioRef.current.pause();
                }
              } else if (
                event.data === (window as any).YT.PlayerState.PAUSED ||
                event.data === (window as any).YT.PlayerState.ENDED
              ) {
                if (audioRef.current && wasMusicPlayingRef.current) {
                  audioRef.current.play().catch(() => {});
                  wasMusicPlayingRef.current = false;
                }
              }
            },
          },
        });
      }
    };
  }, [audioRef]);

  return (
    <motion.section 
      className="relative w-full overflow-hidden bg-background py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-display italic text-gold text-[48px]" data-testid="text-save-date-title">
            Save the Date Video
          </h2>
        </motion.div>

        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/sC_iOld6cts?enablejsapi=1&controls=1&modestbranding=1&rel=0"
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
