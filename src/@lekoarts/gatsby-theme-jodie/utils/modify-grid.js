import {
    onlyPages,
    filterBySlug,
    onlyProjects,
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

  const modifyGrid = (data) => filterBySlug(data, ['/about','/experience','/wearest',"/chatpit",'/roomlelo']);
// const modifyGrid = (data) => onlyProjects(data);

export default modifyGrid;