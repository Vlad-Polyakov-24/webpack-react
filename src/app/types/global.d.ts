declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare const __IS_DEV__: boolean;
