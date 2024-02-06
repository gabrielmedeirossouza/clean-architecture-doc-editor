import { VStack } from "@chakra-ui/react";
import React from "react";
import { createPortal } from "react-dom";

function isClickedOutside(mouseEvent: MouseEvent, target: HTMLElement) {
	return !target.contains(mouseEvent.target as Node);
}

const getGlobalMousePosition = (function() {
	let [mouseX, mouseY] = [0, 0];

	const handleMouseMove = (event: MouseEvent) => {
		mouseX = event.clientX;
		mouseY = event.clientY;
	};

	window.addEventListener("mousemove", handleMouseMove);

	return () => [mouseX, mouseY] as const;
})();

interface IProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose?: () => void;
}

export function ContextMenuComponent({ children, isOpen, onClose }: IProps) {
	const contextMenuRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const contextMenu = contextMenuRef.current;
		if (!contextMenu) return;

		const handleClickOutsideContextMenu = (e: MouseEvent) => {
			if (isClickedOutside(e, contextMenu)) {
				onClose?.();
			}
		};

		window.addEventListener("mousedown", handleClickOutsideContextMenu);
		return () => {
			window.removeEventListener("mousedown", handleClickOutsideContextMenu);
		};
	}, [onClose]);

	React.useEffect(() => {
		const contextMenu = contextMenuRef.current;
		if (!contextMenu || !isOpen) return;

		const [mouseX, mouseY] = getGlobalMousePosition();
		contextMenu.style.left = `${mouseX}px`;
		contextMenu.style.top = `${mouseY}px`;
	}, [isOpen]);

	return (
		<>
			{createPortal(
				<VStack
					ref={contextMenuRef}
					position="absolute"
					display={isOpen ? "block" : "none"}
					w="fit-content"
					h="fit-content"
					boxShadow="lg"
					p="12px"
					borderRadius="8px"
				>
					{children}
				</VStack>,
				document.body
			)}
			
		</>
	);
}