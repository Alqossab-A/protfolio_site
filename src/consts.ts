import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
	NAME: "Ahmed Al-Qossab",
	EMAIL: "AlqossabA@gmail.com",
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_WORKS_ON_HOMEPAGE: 2,
	NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION: "A portfolio of Ahmed Al-Qossab's work and experience.",
};

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "A collection of articles on topic of interest.",
};

export const WORK: Metadata = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [
	{
		NAME: "twitter-x",
		HREF: "https://twitter.com/leeg0go",
	},
	{
		NAME: "github",
		HREF: "https://github.com/AlQossab-A"
	},
	{
		NAME: "linkedin",
		HREF: "https://www.linkedin.com/in/Ahmed-Al-Qossab",
	}
];
