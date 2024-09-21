import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import kevinImage from "../assets/images/kevin_header.svg"

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState("")
	const period = 500
	const [delta, setDelta] = useState(100 - Math.random() * 100)
	const rotatingText = ["Web Developer", "Painter", "Tallboy"]

	const tick = () => {
		let i = loopNum % rotatingText.length
		let fullText = rotatingText[i]
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
		setText(updatedText)

		if(isDeleting) {
			setDelta(prevDelta => prevDelta / 2)
		}

		if(!isDeleting && updatedText === fullText){
			setIsDeleting(true)
			setDelta(period)
		}
		else if(isDeleting && updatedText === "") {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(500)
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

	const nudgeKevinHandler = () => {
		const element = document.querySelector('#kevin')
		element.classList.add('animate__bounce')
		element.addEventListener('animationend', () => {
			element.classList.remove('animate__bounce')
		}, {once: true})
	}

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
						<p>Hey guys! I'm Kang and I've been a full stack developer for the last 3+ years now working for Good Dog Design. As I'm just getting started in my web development career, I would love to learn and experience more as the opportunities come along! I'm also an avid painter during my spare time, which hopefully some of the skills cross over to web dev. Here's just a few of the things I'd love to display! </p>
						<button onClick={nudgeKevinHandler}>Poke me<ArrowRightCircle size={25}/></button>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<div className="image-cropper">
							<img src={kevinImage} id="kevin" alt="Header Image" className="animate__animated animate__fadeInLeft"></img>
						</div>
					</Col>
				</Row>
      </Container>
    </section>
  )
}