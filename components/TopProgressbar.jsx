"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

export default function TopProgressbar() {
	const pathname = usePathname();
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		NProgress.start();
		const timer = setTimeout(() => NProgress.done(), 400);

		return () => {
			clearTimeout(timer);
			NProgress.done();
		};
	}, [pathname]);

	return null;
}
