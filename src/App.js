import { Button, ToolkitProvider } from "@jpmorganchase/uitk-core";
import { SearchIcon } from "@jpmorganchase/uitk-icons";

import "./App.css";

function App() {
  return (
    <ToolkitProvider theme="light">
      <div className="App">
        <Button>
           {"No icon here ->"}
          <SearchIcon size={12} />
        </Button>
      </div>
    </ToolkitProvider>
  );
}

export default App;
