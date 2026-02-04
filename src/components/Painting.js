import { Container } from "react-bootstrap";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { PaintingCards } from "./PaintingCards";
import Cannoness from '../assets/images/paintings/cannoness.png';
import Horus from '../assets/images/paintings/horus.png';
import LordKashaol from '../assets/images/paintings/lord_kashaol.png';
import Lei from '../assets/images/paintings/lei.png';
import Dorf from '../assets/images/paintings/dorf.png';
import Cannoness2 from '../assets/images/paintings/Cannoness_alt.jpg';
import Cannoness3 from '../assets/images/paintings/Cannoness_side.jpg';
import ClearSight4 from '../assets/images/paintings/Clear_sight_close.jpg';
import ClearSight2 from '../assets/images/paintings/Clear_sight_left.jpg';
import ClearSight from '../assets/images/paintings/Clear_sight_main.jpg';
import ClearSight3 from '../assets/images/paintings/Clear_sight_right.jpg';
import ClearSight5 from '../assets/images/paintings/clear_sight_wip.jpg';
import Daruma from '../assets/images/paintings/daruma_front__sized.jpg';
import Daruma2 from '../assets/images/paintings/daruma_left__sized.jpg';
import Daruma3 from '../assets/images/paintings/daruma_right__sized.jpg';
import Dorf2 from '../assets/images/paintings/dorf_side.jpg';
import Dorf3 from '../assets/images/paintings/dorf_alt.jpg';
import Horus2 from '../assets/images/paintings/Horus_side.jpg';
import Janny from '../assets/images/paintings/Janny_main.jpg';
import Janny2 from '../assets/images/paintings/Janny_back.jpg';
import Janny3 from '../assets/images/paintings/Janny_side.jpg';
import Janny4 from '../assets/images/paintings/Janny_alt.jpg';
import LordKashaol2 from '../assets/images/paintings/Kashaol_alt.jpg';
import LordKashaol3 from '../assets/images/paintings/Kashaol_back.jpg';
import LordKashaol4 from '../assets/images/paintings/Kashaol_side.jpg';
import Lei2 from '../assets/images/paintings/Lei_close.jpg';
import Lei3 from '../assets/images/paintings/Lei_left.jpg';
import Lei4 from '../assets/images/paintings/Lei_right.jpg';
import LoversEmbrace2 from '../assets/images/paintings/lovers_embrace_close.jpg';
import LoversEmbrace from '../assets/images/paintings/lovers_embrace_new.jpg';
import LoversEmbrace3 from '../assets/images/paintings/Lovers_embrace_top.jpg';
import Pilgrim2 from '../assets/images/paintings/Pilgrim_alt.jpg';
import Pilgrim from '../assets/images/paintings/Pilgrim_main.jpg';
import Pilgrim3 from '../assets/images/paintings/Pilgrim_side.jpg';
import Serenity7 from '../assets/images/paintings/Serenity_close.jpg';
import Serenity6 from '../assets/images/paintings/Serenity_close_left.jpg';
import Serenity5 from '../assets/images/paintings/Serenity_close_right.jpg';
import Serenity2 from '../assets/images/paintings/Serenity_left.jpg';
import Serenity from '../assets/images/paintings/Serenity_main.jpg';
import Serenity3 from '../assets/images/paintings/Serenity_right.jpg';
import Serenity4 from '../assets/images/paintings/Serenity_top.jpg';
import Loathing from '../assets/images/paintings/Loating_main.jpg';
import Loathing2 from '../assets/images/paintings/Loathing_alt.jpg';
import Loathing3 from '../assets/images/paintings/Loating_close.jpg';


import colorSharpRight from '../assets/images/backgrounds/color-sharp2.png';


export const Painting = () => {
  const [index, setIndex] = useState(-1);
  const [currentSlides, setCurrentSlides] = useState([]);

  const paintJobs = [
    {
      title: "Serenity",
      preview: "My current magnum opus...",
      description: "My current magnum opus, this piece means a ton to me as with all my major projects I try to place in as much emotion into scene from the moment I thought of it. My inspiration came again from spirited away, the sixth station scene stayed with me for since I was a kid. A couple minutes of just calm and serenity after a big chase hit imparted the idea for this piece. Inspired by many artists like Mark Maggiori and Mcblizzyb!",
      images: [Serenity, Serenity2, Serenity3, Serenity4, Serenity5, Serenity6, Serenity7]
    },		
    {
      title: "Loathing",
      preview: "A BustWorkshop collaboration...",
      description: "A BustWorkshop collaboration with the Adelaide Guild. This piece was really fun to work on, partially cause I designed it! Discussing it with the rest of the admin, we came to with the idea to create our own unique academic bust to help our members learn their basics. I really loved the whole process of working on this, I went for an angle not often seen in busts out there, which is the intense expression of disgust in her face. I'm so glad it blew up bigger than I'd hoped!",
      images: [Loathing, Loathing2, Loathing3]
    },		
    {
      title: "Trench Crusade Pilgrim",
      preview: "Yet another small gaming piece...",
      description: "Yet another small gaming piece, but not exactly for an army I was building. Just thought he was a neat lil guy :D plus it was fun doing tiny freehand on the religious paintings. ",
      images: [Pilgrim, Pilgrim2, Pilgrim3]
    },		
		{
      title: "Iron Sultanate Jannisary",
      preview: "Just a gaming piece for...",
      description: "Just a gaming piece for my Iron Sultanate army with the palette in inspiration of their official artwork. He was a fun little guy to work on honestly, thought it'd be neat to try out some damascus steel effect on his blade. Though I think at this scale it's pushing it a little.",
      images: [Janny, Janny2, Janny3, Janny4]
    },
    {
      title: "Lover's Embrace",
      preview: "I'm so proud of this piece...",
      description: "I'm so proud of this piece as I've been working on this model with a sculptor for the past 2 years now. I've tried to capture as much emotion and warmth in this paint job as I could.",
      images: [LoversEmbrace, LoversEmbrace2, LoversEmbrace3]
    },
    {
      title: "Cannoness Veridyan",
      preview: "A commission piece where the...",
      description: "A commission piece where the commissioner wanted a paint job that represented the old John Blanche artwork this model was based on. Whilst I couldn't fully paint in the ecclesiarchy in the backdrop, I hope I came close enough with the rest of it!",
      images: [Cannoness, Cannoness2, Cannoness3]
    },
    {
      title: "Horus Ascended",
      preview: "Another commission piece...",
      description: "Another commission piece. I'm not the biggest fan of painting this model unfortunately, whilst nice looking and all, waaaay too much trim. A quick way to burn out.",
      images: [Horus, Horus2]
    },
    {
      title: "Lord Kashaol",
      preview: "A piece I painted for Crimson Brush 2024...",
      description: "A piece I painted for Crimson Brush 2024 masters category. While I didn't bring anything home with this piece, I'm still pretty happy with it, being the first full bust I've painted and all.",
      images: [LordKashaol, LordKashaol2, LordKashaol3, LordKashaol4]
    },
    {
      title: "Lei",
      preview: "Winning Gold in the masters category...",
      description: "Winning Gold in the masters category for Crimson Brush 2024, I was very pleased with this model, having successfully integrated canvas backdrop painting with miniatures. Glad I could finally do this model justice after staring at it for years XD.",
      images: [Lei, Lei2, Lei3, Lei4]
    },
    {
      title: "Dorf & His Companion",
      preview: "Went for a strong sunset vibe with this one...",
      description: "Went for a strong sunset vibe with this one, and managed to snag a bronze at Crimson Brush 2024. It was also the first time I've attempted actually painting a backdrop with a miniature. Glad the judges loved the backdrop for a piece I pumped out in a couple days haha.",
      images: [Dorf, Dorf2, Dorf3]
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
