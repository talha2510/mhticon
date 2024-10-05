import our_client_styles from "@/app/ui/our_client/our_client.module.css";
import Link from "next/link";
import {lora , montserrat , gowun_batang } from "@/app/ui/fonts";
import Image from "next/image";

export default function OurClient(){
	return(<div className = {our_client_styles.our_client}>
		you&apos;re free
		<div>
			<h1 className = {lora.className}>Empowering Your Workforce with Expert HR Solution</h1>
			<p className = {montserrat.className}>Unlock the full potential of your team with our tailored HR solutions. We provide expert guidance and innovative strategies to help you build a dynamic and efficient workforce</p>
			<Link className = {gowun_batang.className} href = "#">Connect with us</Link>
		</div>
		<div>
			<div>
				<Image
				src = "/our_client/our_client_desktop_1.jpg"
				width = {1919}
				height = {2302}
				className="hidden sm:block"
				alt = "our client desktop imahe 1"
				/>
				<Image
				src = "/our_client/our_client_mobile_1.jpg"
				width = {270}
				height = {420}
				className="block sm:hidden"
				alt = "our client mobile imahe 1"
				/>
			</div>
			<div>
				<h1 className = {lora.className}>Trusted by Industry Leaders</h1>
				<p className = {montserrat}>Our esteemed clients include some of the biggest names across various sectors. We specialize in providing top-tier manpower and HR consultancy services tailored to meet the unique needs of each organization.</p>
				<Link href = "#">lets go</Link>
			</div>
		</div>
		<div>
			<div>
				<Image src = "/atlantic_exports_ltd.png" width = {200} height = {100} alt="atlantic_exports_ltd"/>
				<Image src = "/kazema.png" width = {200} height = {100} alt="kazema"/>
				<Image src = "/KCCEC.png" width = {200} height = {100} alt="KCCEC"/>
				<Image src = "/rigid_industries.png" width = {200} height = {100} alt="rigid_industries"/>
			</div>
			<div>
				<Image src = "/mais_alghanim.png" width = {200} height = {100} alt="mais_alghanim"/>
				<Image src = "/therra_wood.png" width = {200} height = {100} alt="therra_wood"/>
				<Image src = "/sun_metal_group.png" width = {200} height = {100} alt="sun_metal_group"/>
				<Image src = "/otmost_dubai.png" width = {200} height = {100} alt="otmost_dubai"/>
			</div>
		</div>
		<div>
			<Image
			src = "/our_client/our_client_desktop_2.jpg"
			width = {4365}
			height = {1367}
			className="hidden sm:block"
			alt="our_client_desktop_2.jpg"
			/>
			<Image
			src = "/our_client/our_client_mobile_2.jpg"
			width = {360}
			height = {640}
			className="block sm:hidden"
			alt="our_client_mobile_2"
			/>
		</div>
		<div>
			<h1 className = {gowun_batang.className}>You Are One Click Away To Become Bull</h1>
			<Link className = {montserrat.className} href = "#">Enroll Now</Link>
		</div>
	</div>);
}