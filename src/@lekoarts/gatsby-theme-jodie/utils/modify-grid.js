import {
    onlyPages,
    filterBySlug,
    onlyProjects,
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

  const modifyGrid = data => filterBySlug(data, ["/about", "/experience", "/rgb-led-remote", "/chatpit", "/roomlelo", "/wearest"])
// const modifyGrid = (data) => onlyProjects(data);

export default modifyGrid;