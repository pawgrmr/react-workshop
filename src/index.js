import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ChatClient } from "meetup-chat-client";

const chatClient = ChatClient.connect(
  "https://serene-basin-84996.herokuapp.com/"
);

render(<App client={chatClient} />, document.getElementById("root"));
//curly braces mean it is an object not static
