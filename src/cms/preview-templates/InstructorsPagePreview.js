import React from "react";
import PropTypes from "prop-types";
import { InstructorsPageTemplate } from "../../templates/instructors-page";

const InstructorsPagePreview = ({ entry, widgetFor }) => (
  <InstructorsPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

InstructorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default InstructorsPagePreview;
