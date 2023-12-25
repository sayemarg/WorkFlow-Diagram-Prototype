import Diagram from "./Diagram/Diagram";
import PropertyPanel from "./PropertyPanel/PropertyPanel";
import SelectContextProvider from "./SelectContextProvider/SelectContextProvider";
import Toolbar from "./Toolbar/Toolbar";

function App() {
	return (
		<div className="container">
			<Toolbar />

			<SelectContextProvider>
				<Diagram />

				<PropertyPanel />
			</SelectContextProvider>
		</div>
	);
}

export default App;
