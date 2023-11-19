"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Service } from "@/lib/mock-service";
import { Table, Theme } from "@radix-ui/themes";
import { useState } from "react";
import Image from "next/image";

const helperRender = (type: any): any => {
	if (Array.isArray(type)) {
		return type.join(", ")
	}
	return type
}

const Slider = ({ products }: {
	products: {
		productColumnKey: string[],
		productsDetail: Service[]
	}
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleSlideChange = (index: number) => {
		setCurrentSlide(index);
	}

	const { productColumnKey, productsDetail } = products;
	const details = productsDetail.map((item) => {
		return {
			type: item.type,
			capacity: item.capacity,
			destination_countries: item.destination_countries,
			transit_time: item.transit_time,
			features: item.features,
		}
	});

	const images = productsDetail.map((item) => {
		return {
			url: item.url,
			alt: item.alt,
			legend: item.legend
		}
	})

	return (
		<>
			<Carousel
				showArrows={true}
				showIndicators={true}
				infiniteLoop={true}
				dynamicHeight={false}
				autoPlay={true}
				swipeable={true}
				renderThumbs={() => (
					images.map((img) => (
						<div key={img.alt} className="w-full h-20 relative">
							<Image
								src={img.url}
								fill
								style={{ objectFit: "contain" }}
								alt={img.alt}
							></Image>
						</div>
					)))
				}
				onChange={handleSlideChange}
				className="z-10"
			>

				{images.map((img, index) => (
					<div key={img.url + "-" + index} className="relative w-full max-h-[800px]">
						<Image
							width={500}
							height={500}
							src={img.url}
							alt={img.alt}
						/>
						<div className="legend">
							{
								img.legend.map((item, subIndex) => (
									<p key={"legend-" + index + "-" + subIndex}>{item}</p>
								))
							}
						</div>
					</div>
				))}

			</Carousel>

			<Theme
				className="mt-20"
				accentColor="sky" panelBackground="solid" radius="large"
			>
				<Table.Root variant="surface">
					<Table.Header>
						<Table.Row key="head-col">
							{productColumnKey.map((item, key) => (
								<Table.ColumnHeaderCell key={item + "-" + key}>
									{item}
								</Table.ColumnHeaderCell>
							))}
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{details.map((service, rowIdx) => (
							<Table.Row key={"container-row-" + rowIdx} className={`${currentSlide === rowIdx ? "bg-sky-100" : ""} transition-all duration-500`}>
								{Object.values(service).map((item, index) => (
									<Table.Cell key={"row-" + index}>{helperRender(item)}</Table.Cell>
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