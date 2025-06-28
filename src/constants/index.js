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
	carrent,
	jobit,
	tripguide,
	expressjs,
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
	// {
	// 	name: "Next.js",
	// 	icon: nextjs,
	// },
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
	{
		name: "Express.js",
		icon: expressjs,
	},

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
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
