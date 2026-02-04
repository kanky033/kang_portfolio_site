import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PaintingCards } from "./PaintingCards";
import LoversEmbrace from '../assets/images/paintings/lovers_embrace.png';
import Cannoness from '../assets/images/paintings/cannoness.png';
import Horus from '../assets/images/paintings/horus.png';
import Lei from '../assets/images/paintings/lei.png';
import LordKashaol from '../assets/images/paintings/lord_kashaol.png';
import Dorf from '../assets/images/paintings/dorf.png';
import colorSharpRight from '../assets/images/backgrounds/color-sharp2.png';

export const Painting = () => {

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	const paintJobs = [
		{
			title: "Lover's Embrace",
			description: "I'm so proud of this piece as I've been working on this model with a sculptor for the past 2 years now. I've tried to capture as much emotion and warmth in this paint job as I could.",
			imgUrl: LoversEmbrace
		},
		{
			title: "Cannoness Veridyan",
			description: "A commission piece where the commissioner wanted a paint job that represented the old John Blanche artwork this model was based on. Whilst I couldn't fully paint in the ecclesiarchy in the backdrop, I hope I came close enough with the rest of it!",
			imgUrl: Cannoness
		},
		{
			title: "Horus Ascended",
			description: "Another commission piece. I'm not the biggest fan of painting this model unfortunately, whilst nice looking and all, waaaay too much trim. A quick way to burn out.",
			imgUrl: Horus
		},
		{
			title: "Lord Kashaol",
			description: "A piece I painted for Crimson Brush 2024 masters category. While I didn't bring anything home with this piece, I'm still pretty happy with it, being the first full bust I've painted and all.",
			imgUrl: LordKashaol
		},
		{
			title: "Lei",
			description: "Winning Gold in the masters category for Crimson Brush 2024, I was very please with this model, having successfully integrated canvas backdrop painting with miniatures. Glad I could finally do this model justice after staring at it for years XD.",
			imgUrl: Lei
		},
		{
			title: "Dorf & His Companion",
			description: "Went for a strong sunset vibe with this one, and managed to snag a bronze at Crimson Brush 2024. It was also the first time I've attempted actually painting a backdrop with a miniature. Glad the judges loved the backdrop for a piece I pumped out in a couple days haha.",
			imgUrl: Dorf
		}
	]
	return(
		<section className="painting" id="paintings">
			<Container>
				<div>
					<h2>Paint Jobs</h2>
					<p>Here are some of my paint works. I've been painting for the past 6-7 years now with the dream of becoming a great display painter. Enjoy!</p>
					<div className="flex">
						<Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true}>
							{paintJobs.map((paintJob, index)=>{
								return <PaintingCards key={index} {...paintJob}/>
							})}
						</Carousel>
					</div>
				</div>
				
			</Container>
			<img className="background-image-right" src={colorSharpRight}/>
		</section>
	)
}