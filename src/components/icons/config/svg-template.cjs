// src/components/icons/svg-template.js

const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
`;
const template = (variables, { tpl }) => {
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};

interface Props extends SVGProps<any> {
  primarycolor?: string;
  secondarycolor?: string;
}

const ${variables.componentName} = ({primarycolor, secondarycolor, ...props}: Props) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;
