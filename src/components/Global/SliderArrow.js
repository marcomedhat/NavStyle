import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ className, to, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className={`button button--text button--icon ${className}`}
		aria-label={to}
	/>
);
