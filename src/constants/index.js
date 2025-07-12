import {
	design,
	backend,
	cloud,
	web,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	iamneo,
	gyanmatrix,
	prodraft,
	horizon,
	figmaClone,
	// expressjs,
	nextjs,
	firebase,
	gcp,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "Full-Stack Developer",
		icon: backend,
	},
	{
		title: "UI Engineer",
		icon: design,
	},
	{
		title: "DevOps-aware Developer",
		icon: cloud,
	},
];

// const technologies = [
// 	{
// 		name: "HTML 5",
// 		icon: html,
// 	},
// 	{
// 		name: "CSS 3",
// 		icon: css,
// 	},
// 	{
// 		name: "JavaScript",
// 		icon: javascript,
// 	},
// 	{
// 		name: "TypeScript",
// 		icon: typescript,
// 	},
// 	{
// 		name: "React JS",
// 		icon: reactjs,
// 	},
// 	{
// 		name: "Redux Toolkit",
// 		icon: redux,
// 	},
// 	{
// 		name: "Tailwind CSS",
// 		icon: tailwind,
// 	},
// 	{
// 		name: "Node JS",
// 		icon: nodejs,
// 	},
// 	{
// 		name: "MongoDB",
// 		icon: mongodb,
// 	},
// 	{
// 		name: "Three JS",
// 		icon: threejs,
// 	},
// 	{
// 		name: "git",
// 		icon: git,
// 	},
// 	{
// 		name: "figma",
// 		icon: figma,
// 	},
// 	{
// 		name: "docker",
// 		icon: docker,
// 	},
// ];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	// {
	// 	name: "JavaScript",
	// 	icon: javascript,
	// },
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next.js",
		icon: nextjs,
	},
	// {
	// 	name: "Angular",
	// 	icon: angular,
	// },
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	// {
	// 	name: "Ant Design",
	// 	icon: antd,
	// },
	{
		name: "Figma",
		icon: figma,
	},

	// Backend
	{
		name: "Node.js",
		icon: nodejs,
	},
	// {
	// 	name: "Express.js",
	// 	icon: expressjs,
	// },

	// Database
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Firestore",
		icon: firebase,
	},

	// DevOps & Cloud
	{
		name: "Docker",
		icon: docker,
	},
	{
		name: "Google Cloud Platform",
		icon: gcp,
	},
	// {
	// 	name: "AWS S3", // Not available
	// 	icon: aws,
	// },

	// Tools
	{
		name: "Git",
		icon: git,
	},
	// {
	// 	name: "Postman",
	// 	icon: postman,
	// },
	// {
	// 	name: "NPM",
	// 	icon: npm,
	// },
];

const experiences = [
	{
		title: "Frontend Engineer - Intern",
		company_name: "Iamneo",
		icon: iamneo, // Replace with your iamneo icon/image reference
		iconBg: "#1E2A38",
		date: "June 2022 - August 2022",
		points: [
			"Built responsive user interfaces using Angular and internal UI libraries.",
			"Worked closely with the design team to implement pixel-perfect components.",
			"Contributed to the Neo Hire platform’s UI foundation and layout systems.",
			"Improved usability and onboarding workflows through dynamic form development.",
		],
	},
	{
		title: "Software Engineer (Full-Stack)",
		company_name: "Iamneo",
		icon: iamneo,
		iconBg: "#1E2A38",
		date: "August 2022 - March 2024",
		points: [
			"Led full-stack development for the Neo Hire platform, including frontend architecture and backend integrations.",
			"Developed features such as workflow automation, MS Teams integration, and secure FTP-based file transfers.",
			"Managed production deployments and ensured system stability post-release.",
			"Delivered scalable applications using Angular, Node.js, Express, and Firebase.",
		],
	},
	{
		title: "Software Engineer (Full-Stack)",
		company_name: "GyanMatrix",
		icon: gyanmatrix,
		iconBg: "#2B2E4A",
		date: "March 2024 - Present",
		points: [
			"Contributed to the development of digri.ai, focusing on scalable architecture and seamless UX.",
			"Led the creation of an AI-assisted assessment platform with code evaluation and MCQ generation.",
			"Owned the Placement ERP module, building systems for drive management, tracking, and automation.",
			"Handled deployments using Docker, GCP, S3, and CI/CD pipelines with GitHub Actions and Cloud Build.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Hassim have showcased exceptional skills in cross technology learning and developing high queslity UI screens for Neo Hire.",
		name: "Suresh Shanmugam",
		designation: "Product Engineering and Delivery",
		company: "Iamneo.ai",
		image: "https://media.licdn.com/dms/image/v2/C4E03AQHdz3o3UltcvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517746955242?e=1757548800&v=beta&t=wHH6p-drCUaVwDYMH1vGo9Mqcmf3c2hUIClyBwep8og",
	},
	{
		testimonial:
			"Hassim delivered a clean, pixel-perfect UI screen that immediately impressed the client. It added a noticeable layer of quality to the final product.",
		name: "Rajan Parasuraman",
		designation: "CEO & Co-Founder",
		company: "GyanMatrix Technologies",
		image: "https://media.licdn.com/dms/image/v2/D5603AQEBfxdqQjhckQ/profile-displayphoto-shrink_400_400/B56ZOYKKtNGgAk-/0/1733424624119?e=1757548800&v=beta&t=SSjIHyQABOX0qyJ058f1vrBtEKHIWBBCeNzmDxLKBIQ",
	},
	{
		testimonial:
			"Hassim’s one of those developers you can hand anything to without worry. He picks things up fast, works responsibly, and delivers clean, solid code. Definitely someone I trust on the team.",
		name: "Veeranaveen Sethuraman",
		designation: "Solution Architect",
		company: "GyanMatrix Technologies",
		image: "https://media.licdn.com/dms/image/v2/C5603AQG-gpCSg_jb1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652634602661?e=1757548800&v=beta&t=78JMt3aV1v8-DJAVec6KfgaWnjO3MCS4IKecbaRtNrU",
	},
];

const projects = [
	{
		name: "ProDraft",
		description:
			"A real-time collaborative document editor built with Next.js, Liveblocks, Lexical Editor, and ShadCN UI. Supports multiplayer editing, rich text formatting, and presence indicators — designed for speed, simplicity, and seamless collaboration",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "liveblocks",
				color: "white-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: prodraft,
		source_code_link: "https://github.com/Hassim17/ProDraft",
	},
	{
		name: "Figma Clone",
		description:
			"A simplified Figma-style collaborative design tool built with Next.js, Liveblocks, and fabric.js. Supports real-time multiplayer editing, cursor presence, comment threads, and basic shape drawing — built purely for learning and experimentation.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "liveblocks",
				color: "white-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "fabricjs",
				color: "green-text-gradient",
			},
		],
		image: figmaClone,
		source_code_link: "https://github.com/Hassim17/figma-clone",
	},
	{
		name: "HorizonX-Gaming-Website",
		description:
			"A stunning award-gaming website clone with ultimate animations powered by GSAP and seamless smooth transitions for an immersive user experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "gsap",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: horizon,
		source_code_link: "https://github.com/Hassim17/HorizonX-Gaming-Website",
	},
];

export { services, technologies, experiences, testimonials, projects };
