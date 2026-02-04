import { Container } from "react-bootstrap";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { PaintingCards } from "./PaintingCards";
import LoversEmbrace from '../assets/images/paintings/lovers_embrace.png';
import LoversEmbrace2 from '../assets/images/paintings/lovers_embrace.png';
import Cannoness from '../assets/images/paintings/cannoness.png';
import Cannoness2 from '../assets/images/paintings/cannoness.png';
import Horus from '../assets/images/paintings/horus.png';
import LordKashaol from '../assets/images/paintings/lord_kashaol.png';
import Lei from '../assets/images/paintings/lei.png';
import Dorf from '../assets/images/paintings/dorf.png';
import colorSharpRight from '../assets/images/backgrounds/color-sharp2.png';

export const Painting = () => {
  const [index, setIndex] = useState(-1);
  const [currentSlides, setCurrentSlides] = useState([]);

  const paintJobs = [
    {
      title: "Lover's Embrace",
      preview: "I'm so proud of this piece...",
      description: "I'm so proud of this piece as I've been working on this model with a sculptor for the past 2 years now. I've tried to capture as much emotion and warmth in this paint job as I could.",
      images: [LoversEmbrace, LoversEmbrace2]
    },
    {
      title: "Cannoness Veridyan",
      preview: "A commission piece where the...",
      description: "A commission piece where the commissioner wanted a paint job that represented the old John Blanche artwork this model was based on. Whilst I couldn't fully paint in the ecclesiarchy in the backdrop, I hope I came close enough with the rest of it!",
      images: [Cannoness, Cannoness2]
    },
    {
      title: "Horus Ascended",
      preview: "Another commission piece...",
      description: "Another commission piece. I'm not the biggest fan of painting this model unfortunately, whilst nice looking and all, waaaay too much trim. A quick way to burn out.",
      images: [Horus]
    },
    {
      title: "Lord Kashaol",
      preview: "A piece I painted for Crimson Brush 2024...",
      description: "A piece I painted for Crimson Brush 2024 masters category. While I didn't bring anything home with this piece, I'm still pretty happy with it, being the first full bust I've painted and all.",
      images: [LordKashaol]
    },
    {
      title: "Lei",
      preview: "Winning Gold in the masters category...",
      description: "Winning Gold in the masters category for Crimson Brush 2024, I was very pleased with this model, having successfully integrated canvas backdrop painting with miniatures. Glad I could finally do this model justice after staring at it for years XD.",
      images: [Lei]
    },
    {
      title: "Dorf & His Companion",
      preview: "Went for a strong sunset vibe with this one...",
      description: "Went for a strong sunset vibe with this one, and managed to snag a bronze at Crimson Brush 2024. It was also the first time I've attempted actually painting a backdrop with a miniature. Glad the judges loved the backdrop for a piece I pumped out in a couple days haha.",
      images: [Dorf]
    }
  ];

  return (
    <section className="painting" id="paintings">
      <Container>
        <div>
          <h2>Paint Jobs</h2>
          <p>
            Here are some of my paint works. I've been painting for the past 6-7 years now with the dream of becoming a great display painter. Enjoy!
          </p>
          <div className="painting-grid">
            {paintJobs.map((job, i) => (
              <div
                key={i}
                className="painting-thumb"
                onClick={() => {
                  setCurrentSlides(
                    job.images.map(img => ({
                      src: img,
                      title: job.title,
                      description: job.description
                    }))
                  );
                  setIndex(0);
                }}
              >
                <PaintingCards
                  title={job.title}
                  description={job.preview}
                  imgUrl={job.images[0]}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={currentSlides}
        plugins={[Captions]}
      />

      <img
        className="background-image-right"
        src={colorSharpRight}
        alt=""
      />
    </section>
  );
};
