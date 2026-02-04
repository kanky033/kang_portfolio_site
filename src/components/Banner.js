import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import kevinImage from "../assets/images/kevin_header.svg"

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState("")
	const [delta, setDelta] = useState(100 - Math.random() * 100)
	const rotatingText = ["Web Developer", "Software Dev", "Painter"]
	const typingSpeed = 200
	const deletingSpeed = 80

	const tick = () => {
		let i = loopNum % rotatingText.length;
		let fullText = rotatingText[i];
		let updatedText = isDeleting 
			? fullText.substring(0, text.length - 1) 
			: fullText.substring(0, text.length + 1);
		
		setText(updatedText);
		
		// Set delta based on typing or deleting
		setDelta(isDeleting ? deletingSpeed : typingSpeed);
		
		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
		}
	}

	useEffect(() => {
		let ticker = setInterval(()=>{
			tick()
		}, delta)
		return () => {clearInterval(ticker)} 
	}, [text])

	useEffect(() => {
		const element = document.querySelector('#kevin')
		element.addEventListener('animationend', () => {
			element.classList.remove('animate__fadeInLeft')
		}, {once: true})

		return () => {
			element.removeEventListener('animationend', () => {
				element.classList.remove('animate__fadeInLeft')
			})
		}
	}, [])

  return(
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Hey Guys!</span>
						<h1>
							{"I'm a "}
							<span className="wrap">{text}</span>
						</h1>
						<p>Hey guys! I'm Kang and I've been a full stack developer for the last 4 years now. I'm also an avid painter during my spare time and one of the founders of Adelaide's Painters Guild. While I'm not at work you'll find me painting away or teaching classes! Here's just a few of the things I'd love to display! </p>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<div className="image-cropper">
							<img src={kevinImage} id="kevin" alt="Kevin Pic" className="animate__animated animate__fadeInLeft"></img>
						</div>
					</Col>
				</Row>
      </Container>
    </section>
  )
}