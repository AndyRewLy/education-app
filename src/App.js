import MarkdownWrapper from "./components/markdown-wrapper";
import { Tabs, Tab } from "./components/tabs";
import React from "react";
import { markdowns } from "./data/markdown";

function App() {
  return (
    <div className="App">
      <Tabs vertical>
        {markdowns.map(({ title, content }) => (
          <Tab value={title}>
            <MarkdownWrapper content={content} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default App;
