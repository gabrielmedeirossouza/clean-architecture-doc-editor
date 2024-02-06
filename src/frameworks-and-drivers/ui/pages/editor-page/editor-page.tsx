import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { ContextMenuComponent } from "../../components/context-menu";

interface ISmartChip {
	id: string;
	name: string;
	prefix: string;
	value: number;
	children: ISmartChip[];
}

const CHIPS: ISmartChip[] = [
	{
		id: "page",
		name: "Página",
		prefix: "PG",
		value: 1,
		children: [
			{
				id: "modal",
				name: "Modal",
				prefix: "MD",
				value: 1,
				children: []
			},
			{
				id: "modal",
				name: "Modal",
				prefix: "MD",
				value: 2,
				children: [
					{
						id: "in-place",
						name: "In Place",
						prefix: "IP",
						value: 1,
						children: []
					},
				]
			},
		]
	},
	{
		id: "modal",
		name: "Modal",
		prefix: "MD",
		value: 1,
		children: []
	},
	{
		id: "in-place",
		name: "In Place",
		prefix: "IP",
		value: 1,
		children: []
	},
	{
		id: "data",
		name: "Dado",
		prefix: "DT",
		value: 1,
		children: []
	}
] as const;

function Editor() {
	const [isContextMenuOpen, setIsContextMenuOpen] = React.useState(false);
	const editorRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const editor = editorRef.current;
		if (!editor) return;

		editor.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			setIsContextMenuOpen(true);
		});

		editor.addEventListener("input", (e) => {
			console.log(e);
		});
	}, [editorRef]);
	return (
		<>
			<VStack gap="20px">
				<Heading>Editor Page</Heading>
				<Box ref={editorRef} w="100%" h="500px" contentEditable />
			</VStack>

			<ContextMenuComponent isOpen={isContextMenuOpen} onClose={() => setIsContextMenuOpen(false)}>
				<Box>Context Menu</Box>
				<Divider/>
			</ContextMenuComponent>
		</>
	);
}

export const EditorPage = React.memo(Editor);