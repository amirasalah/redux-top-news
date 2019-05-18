import React from "react";
import SourceList from "./sourceList";
import SourcesFilters from "./sourcesFilters";
import { SourcesWrapper } from "./sources.styles";

const SourcesContainer = () => <SourcesWrapper><SourcesFilters /><SourceList /></SourcesWrapper>
export default SourcesContainer;

