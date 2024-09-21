import { Col } from "react-bootstrap"

export const PaintingCards = ({title, description, imgUrl}) => {
  return(
		<Col sm={6} md={4}>
			<div className="pnt-imgbx">
				<img src={imgUrl} alt={title}/>
				<div className="pnt-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
				</div>
			</div>
		</Col>
  )
}