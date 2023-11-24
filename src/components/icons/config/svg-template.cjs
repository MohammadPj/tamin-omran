// src/_components/icons/svg-template.js

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
  isRtl?: boolean
  style?:  React.CSSProperties
}

const ${variables.componentName} = ({primarycolor, secondarycolor, isRtl, style, ...props}: Props) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;
