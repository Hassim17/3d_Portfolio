import React, { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { quotes } from "../utils/quotes";

const RandomQuotesComponent = () => {
	const [typedWords, setTypedWords] = useState([]);
	const [baseTextArr, setBaseTextArr] = useState([]);
	const [author, setAuthor] = useState("");

	const componentRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [quoteRefreshKey, setQuoteRefreshKey] = useState(0);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 1, // adjust based on how much of the component should be visible
			}
		);

		if (componentRef.current) {
			observer.observe(componentRef.current);
		}

		return () => {
			if (componentRef.current) {
				observer.unobserve(componentRef.current);
			}
		};
	}, []);

	const splitSentence = (sentence, maxLen = 27) => {
		const words = sentence.split(" ");
		const result = [];
		let currentLine = "";

		for (let word of words) {
			if (
				(currentLine + (currentLine ? " " : "") + word).length > maxLen
			) {
				result.push(currentLine);
				currentLine = word;
			} else {
				currentLine += (currentLine ? " " : "") + word;
			}
		}

		if (currentLine) {
			result.push(currentLine);
		}

		return result;
	};

	useEffect(() => {
		if (!isVisible) return;

		setTypedWords([]);
		const charLength = window.innerWidth <= 425 ? 27 : 40;
		const randomIndex = Math.floor(Math.random() * quotes.length);
		const splittedQuote = splitSentence(
			quotes[randomIndex].quote,
			charLength
		);
		setAuthor("- " + quotes[randomIndex].author);
		setBaseTextArr(splittedQuote);
	}, [quoteRefreshKey, isVisible]);

	const TypeWritter = ({ text, setTypedWords, setBaseTextArr }) => {
		const baseText = text;

		const count = useMotionValue(0);
		const rounded = useTransform(count, (latest) => Math.round(latest));

		const displayText = useTransform(rounded, (latest) =>
			baseText.slice(0, latest)
		);

		useEffect(() => {
			const controls = animate(count, baseText.length, {
				type: "tween",
				delay: 0,
				duration: 2,
				ease: "linear",
				onComplete: () => {
					setTypedWords((prev) => [...prev, text]);
					setBaseTextArr && setBaseTextArr((prev) => prev.slice(1));
				},
			});
			return controls.stop;
		}, []);

		return (
			<span className="flex mt-4">
				<motion.span className="!font-mono white-text-gradient text-xl block ">
					{displayText}
				</motion.span>
				<span class="inline-block w-[1px] h-8 bg-white animate-blink"></span>
			</span>
		);
	};

	const handleReType = () => {
		if (!typedWords.includes(author)) return;

		setTypedWords([]);
		setBaseTextArr([]);
		setAuthor("");
		setQuoteRefreshKey((prev) => prev + 1); // trigger new quote
	};

	return (
		<div
			className="flex items-center justify-center h-[20rem] flex-wrap max-w-[800px] min-w-[320px] mx-auto"
			ref={componentRef}
		>
			<div
				className="flex items-end h-fit cursor-pointer"
				onDoubleClick={handleReType}
			>
				<span className="flex flex-col items-start ">
					{typedWords.map((line, index) => (
						<span
							key={index}
							className={`!font-mono white-text-gradient text-xl flex ${
								index + 1 != typedWords.length ? "mb-4" : "mb-0"
							} ${
								line == author
									? "w-full justify-end"
									: "justify-start"
							}`}
						>
							{line}
							<span
								class={`inline-block w-[1px] h-8 bg-white animate-blink ${
									(index == typedWords.length &&
										baseTextArr.length == 0) ||
									line == author
										? "inline-block"
										: "hidden"
								}`}
							></span>
						</span>
					))}
					{!!baseTextArr.length && isVisible && (
						<TypeWritter
							text={baseTextArr[0]}
							setBaseTextArr={setBaseTextArr}
							setTypedWords={setTypedWords}
						/>
					)}
					{baseTextArr.length == 0 &&
						typedWords.length &&
						!typedWords.includes(author) && (
							<div className="w-full flex justify-end">
								<TypeWritter
									text={author}
									setTypedWords={setTypedWords}
								/>
							</div>
						)}
				</span>
			</div>
		</div>
	);
};

export default SectionWrapper(RandomQuotesComponent, "");
