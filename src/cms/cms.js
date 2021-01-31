import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import InstructorsPagePreview from "./preview-templates/InstructorsPagePreview";
import ClassesPagePreview from "./preview-templates/ClassesPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import SchedulePagePreview from "./preview-templates/SchedulePagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("instructors", InstructorsPagePreview);
CMS.registerPreviewTemplate("classes", ClassesPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("schedule", SchedulePagePreview);
