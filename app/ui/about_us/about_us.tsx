import about_us_styles from "@/app/ui/about_us/about_us.module.css";
import Image from "next/image";
import {roboto, montserrat, gowun_batang} from "@/app/ui/fonts";
import Link from "next/link";

export default function AboutUS(){
	return(<div className = {`${about_us_styles.about_us} ${roboto.className}`}>
		you&apos;re free
		<div>
			<Image
				src = "/about_us/about_us_banner_desktop_image.jpg"
				width = "1915"
				height = "840"
				className = "hidden sm:block"
				alt = "about us banner desktop image"
			/>
			<Image
				src = "/about_us/about_us_banner_mobile_image.jpg"
				width = "1279"
				height = "720"
				className = "sm:hidden"
				alt = "about us banner mobile image"
			/>
		</div>
		<div>
			<h1>About Us</h1>
			<p>At MHTICON, we believe a strong HR foundation is essential for success. Our solutions address your challenges, improve processes, and boost productivity. Partner with us to transform your HR operations.</p>
			<div />
			<hr />
		</div>
		<div className = {montserrat.className}>
			<div>
				<div>
					<h1>Welcome to MHTICON</h1>
					<hr />
				</div>
				<div>
					<h1>Our Focus is on Delivering Superior Value to our Clients for Company Modification.</h1>
					<div>
						<Link href="/contact">Lets Develop together</Link>
						<Link href="/services">view all services</Link>
					</div>
				</div>
			</div>
			<div>
				<div>
					<h1>Our mission</h1>
					<hr />
					<p>At MHTICON, we are dedicated to revolutionizing HR consulting with innovative, tailored solutions that drive business growth, enhance employee engagement, and foster a culture of excellence. Our mission is to transform the way organizations manage their most valuable asset </p>
				</div>
				<div>
					<h1>Our Vision</h1>
					<hr />
					<p>Empowering organizations to thrive by unlocking the full potential of their people. At MHTICON, we deliver innovative HR consulting solutions that drive growth, foster inclusive cultures, and enhance employee engagement. Together, we build resilient and dynamic workplaces for a brighter future.</p>
				</div>
			</div>
		</div>
		<div>
			<Image
				src = "/about_us/about_us_desktop_image_2.jpg"
				width = {1918}
				height = {719}
				className = "hidden sm:block"
				alt = "about us desktop image 2"
			/>
			<Image
				src = "/about_us/about_us_mobile_image_2.jpg"
				width = {1918}
				height = {719}
				className = "sm:hidden"
				alt = "about us mobile image 2"
			/>
		</div>
		<div>
			<h1 className = {gowun_batang.className}>“Empowering people, transforming organizations.”</h1>
		</div>
		<div>
			<div>
				<Image
				src = "/about_us/about_us_desktop_image_3.jpg"
				width = {1920}
				height = {2880}
				alt = "about us desktop and mobile image 3"
				/>
			</div>
			<div className = {montserrat.className}>
				<span>Why Choose MHTICON</span>
				<h1>We See SolutionsGrowing for your Business</h1>
				<p>Our Consultants provide the highest quality advice and technical support and will assist your organization by thoroughly assessing your IT infrastructure and recommending the best long-term approach given your unique resource requirements.</p>
				<div className = {gowun_batang.className}>
					<div>
						<span>Strategic Analysis</span>
						<span>80%</span>
					</div>
					<div>
						<hr />
						<hr />
					</div>
					<div>
						<span>Development Experience</span>
						<span>90%</span>
					</div>
					<div>
						<hr />
						<hr />
					</div>
					<div>
						<span>Enterprise Solutions</span>
						<span>95%</span>
					</div>
					<div>
						<hr />
						<hr />
					</div>
					<Link href = "/services">Discover More</Link>
				</div>
			</div>
		</div>
		<div>
			<Image
			src = "/about_us/about_us_desktop_image_4.jpg"
			width = {1918}
			height = {719}
			className = "hidden sm:block"
			alt = "about us desktop image 4"
			/>
			<Image
			src = "/about_us/about_us_mobile_image_4.jpg"
			width = {1918}
			height = {719}
			className = "sm:hidden"
			alt = "about us mobile image 4"
			/>
		</div>
		<div className = {montserrat.className}>
			<h1>Lets Connect Together</h1>
			<Link href = "/contact">Contact Us</Link>
		</div>
	</div>);
}