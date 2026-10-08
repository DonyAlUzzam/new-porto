const variations = {
	primary:
		"bg-neutral-950 border-neutral-950 text-white hover:bg-neutral-700 hover:border-neutral-700",
	secondary:
		"bg-white border-neutral-300 text-neutral-950 hover:border-neutral-950",
	light: "bg-white border-white text-neutral-950 hover:bg-neutral-200",
	ghost: "bg-transparent border-white/25 text-white hover:bg-white/10",
};

const Button = ({
	children,
	variation = "primary",
	href,
	className = "",
	...props
}) => {
	const classes = `inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${variations[variation]} ${className}`;

	if (href) {
		return (
			<a href={href} className={classes} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
};

export default Button;
