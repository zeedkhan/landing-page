"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { serviceColumn, services } from "@/lib/mock-service";
import { Table, Theme } from "@radix-ui/themes";
import {useState} from "react";

const helperRender = (type: any): any => {
	if (Array.isArray(type)) {
		return type.join(", ")
	}
	return type
}


const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleSlideChange = (index : number) => {
		setCurrentSlide(index);
	}

	return (
		<>
			<Carousel
				showArrows={true}
				showIndicators={true}
				infiniteLoop={true}
				dynamicHeight={false}
				autoPlay={true}
				
				onChange={handleSlideChange}
				className="z-10"
			>
				<div className=" w-full max-h-[800px] ">
					<img
						src="/service-1.jpg"
						alt="image1"
					/>
					<p className="legend">20ft Standard Container</p>
				</div>

				<div className=" w-full max-h-[800px] ">
					<img
						src="/service-2.jpg"
						alt="image2"
					/>
					<div className="legend">
						<p>40ft Standard Container</p>
						<p>40ft Standard Container</p>
						<p>40ft Standard Container</p>
						<p>40ft Standard Container</p>
					</div>
				</div>

				<div className=" w-full max-h-[800px]">
					<img
						src="/service-1.jpg"
						alt="image3"
					/>
					<p className="legend">40ft High Cube Container</p>
				</div>

				<div className=" w-full max-h-[800px]">
					<img
						src="/service-2.jpg"
						alt="image3"
					/>
					<p className="legend">Refrigerated Container</p>
				</div>
				<div className=" w-full max-h-[800px]">
					<img
						src="/service-3.jpg"
						alt="image3"
					/>
					<p className="legend">Flat Rack Container	</p>
				</div>
			</Carousel>

			<Theme
				className="mt-20"
				accentColor="sky" panelBackground="solid" radius="large"
			>

				<Table.Root variant="surface">
					<Table.Header>
						<Table.Row>
							{serviceColumn.map((item) => (
								<Table.ColumnHeaderCell key={item}>
									{item}
								</Table.ColumnHeaderCell>
							))}
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{services.map((service, rowIdx) => (
							<Table.Row key={service.type} className={`${currentSlide === rowIdx ? "bg-sky-100" : ""} transition-all duration-500`}>
								{Object.values(service).map((item, index) => (
									<>
										{<Table.Cell key={index}>{helperRender(item)}</Table.Cell>}
									</>
								))}
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>

			</Theme>



		</>

	)
}


export default Slider;