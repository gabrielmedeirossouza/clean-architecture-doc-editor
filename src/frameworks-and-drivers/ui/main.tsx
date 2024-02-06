import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { EditorPage } from "./pages/editor-page";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ChakraProvider>
		<EditorPage />
	</ChakraProvider>
);
