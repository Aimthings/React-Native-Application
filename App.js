import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

//It is good practice to use stylesheet.create because validations happens for javacript when we do like this rather than writing style properties
//directly inside the brace
