import { Container, Row, Col} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/images/backgrounds/color-sharp.png'

export const Experience = () => {
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
	/* In the future should create a database model of all my experience works */
	return(
		<section className="experience" id="experiences">
			<Container>
				<Row>
					<Col>
						<h2 className="d-flex justify-content-center pt-5 pb-5">Experience</h2>
						<h5 className="d-flex justify-content-center text-center pb-5">Since graduating from the University of South Australia in 2020, I've been working as a full stack web developer, though I'd love to have a look further into front-end where I can! Here are the list of my experiences and skills/technologies.</h5>
						<Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true} className="experience-slider pt-5">
							<div className="item-work">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										University<br></br>of South Australia<br></br>
										<p>Bachelors of Software Engineering Honours</p>
										<hr/>
										<p>Jan 2017 - Dec 2020</p>
									</h5>
								</div>
							</div>
							<div className="item-work">
								<div className="justify-content-center text-center">
										<h5 className="mt-2">
											University<br></br>of South Australia<br></br>
											<p>Research Assistant</p>
											<hr/>
											<p>Dec 2020 - Jan 2021</p>
										</h5>
									</div>
							</div>
							<div className="item-work">
								<div className="justify-content-center text-center">
										<h5 className="mt-2">
											Good Dog<br></br>Design<br></br>
											<p>Full Stack Developer</p>
											<hr/>
											<p>Jan 2021 - Sep 2024</p>
										</h5>
									</div>
							</div>
						</Carousel>
					</Col>
				</Row>
				<Row>
					<Col>
						<Carousel arrows={false} autoPlay={true} autoPlaySpeed={1000} responsive={responsive} infinite={true} className="experience-slider pt-5">
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										HTML/HAML
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										CSS
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										JAVASCRIPT
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										TYPESCRIPT
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										RUBY ON RAILS
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										PHP
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										C#
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										JAVA
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										SQL
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										CRAFT 5 CMS
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										DOCKER
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										UIPATH
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										POSTGRESQL
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										REACT
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										JIRA
									</h5>
								</div>
							</div>
							<div className="item-skill">
								<div className="justify-content-center text-center">
									<h5 className="mt-2">
										GIT
									</h5>
								</div>
							</div>
						</Carousel>
					</Col>
				</Row>
			</Container>
			<img className="background-image-left" src={colorSharp}/>
		</section>
	)
}