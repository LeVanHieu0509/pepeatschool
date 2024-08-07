import { createGlobalStyle, css } from "styled-components";
import { liemDevCss } from "./liem-dev";
import { customCss } from "./custom";

function renderSpace(type: "margin" | "padding", prefix = "") {
  return [12, 16, 20, 24, 30, 36, 40, 60, 70, 80]
    .map((size) =>
      ["", "-top", "-left", "-bottom", "-right"]
        .map((dir) => {
          return `.${prefix}${type.slice(0, 1)}${dir.slice(
            1,
            2
          )}-${size} { ${type}${dir}: ${size}px !important; }`;
        })
        .join("\n")
    )
    .join("\n");
}

const style = css`
  ${renderSpace("margin")}
  ${renderSpace("padding")}

  ::-webkit-scrollbar {
    border-radius: 0;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.15);
  }
  ::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0);
  }

  .Toastify__toast-container--bottom-center {
    width: 80vw;
  }
  .Toastify__close-button {
    padding: 12px;
  }
  .Toastify__close-button > svg {
    height: 20px;
    width: 20px;
  }
  .Toastify__toast {
    display: flex;
    align-items: center;
    z-index: 100000;
    background: #183028;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    font-weight: 450;
    font-size: 16px;
    line-height: 150%;

    color: white;
  }
  .Toastify__close-button {
  }

  :root {
    --nextra-primary-saturation: 84%;

    --shiki-color-text: green;
    --shiki-token-constant: lab(48.3994% 0.649333 -55.5719);
    --shiki-token-string: lab(49.1367% -42.0409 31.8582);
    --shiki-token-comment: lab(69.608% -0.0000298023 0);
    --shiki-token-keyword: lab(47.8876% 63.025 42.31);
    --shiki-token-parameter: lab(72.7377% 33.9074 77.3632);
    --shiki-token-function: green;
    --shiki-token-punctuation: lab(12.7448% 0 0);
  }

  nav a {
    color: #4c9540;
  }

  html,
  body {
    font-family: Inter, -apple-system, BlinkMacSystemFont, avenir next, avenir,
      segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,
      arial, sans-serif;
    color: #111;
    background: #fff;
    font-variant-numeric: tabular-nums;
  }

  #hero {
    background: linear-gradient(to bottom, #fff 50%, #9e88d648 100%),
      url(https://grainy-gradients.vercel.app/noise.svg);
  }

  html[class~="dark"] {
    background: #111;
  }

  html[class~="dark"] #hero {
    background: linear-gradient(to bottom, #111 50%, #2a2044af 100%),
      url(https://grainy-gradients.vercel.app/noise.svg);
  }

  .gradient-bg {
    background: linear-gradient(#39e667, #026c0d);
  }

  .gradient-text {
    --bg-size: 400%;
    background: linear-gradient(90deg, #166815, #33925d, #166815) 0 0 /
      var(--bg-size) 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0px 3.5px #c0beea8f);
  }

  @media (prefers-reduced-motion: no-preference) {
    .gradient-text {
      animation: move-bg 16s linear infinite;
    }
    @keyframes move-bg {
      to {
        background-position: var(--bg-size) 0;
      }
    }
  }

  html[class~="dark"] .gradient-text {
    filter: drop-shadow(0px 3.5px #54527b9f);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .animate-once {
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  .animate-ping {
    -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  article p a,
  article li a,
  article td a {
    color: #4c9540 !important;
    transition: color 0.2s ease;
  }

  article p a:hover,
  article li a:hover,
  article td a:hover {
    color: #4c9540 !important;
  }

  html.dark p a:hover,
  html.dark li a:hover {
    color: #4c9540 !important;
  }

  li > a {
    white-space: nowrap;
  }

  .svg {
    width: 100%;
    height: 100%;
  }

  .fix-safari-tilt {
    -webkit-transform: translateZ(0);
  }

  .fix-safari-blur {
    transform: translate3d(0, 0, 0);
  }

  #carbonads * {
    margin: initial;
    padding: initial;
    line-height: initial;
  }

  #carbonads {
    --carbon-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    --carbon-font-size: 14px;
    --carbon-padding: 1.5ch;
    --carbon-max-char: 20ch;
    --carbon-bg-primary: hsl(0, 0%, 98%);
    --carbon-bg-secondary: hsl(0, 0%, 92%);
    --carbon-text-color: hsl(0, 0%, 20%);
    z-index: 10;
    font-size: var(--carbon-font-size);
    font-family: var(--carbon-font-family);
  }

  #carbonads > span {
    display: flex;
    flex-direction: column;
    min-inline-size: 130px;
    max-inline-size: calc(130px + var(--carbon-max-char) + 8ch);
    padding: var(--carbon-padding);
    gap: var(--carbon-padding);
    background-color: var(--carbon-bg-primary);
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.085), 0 0 2px hsl(0deg 0% 0% / 0.085),
      0 0 4px hsl(0deg 0% 0% / 0.085), 0 0 8px hsl(0deg 0% 0% / 0.085);
  }

  #carbonads a {
    color: var(--carbon-text-color);
    text-decoration: none;
  }

  #carbonads a:hover {
    color: var(--carbon-text-color);
  }

  #carbonads .carbon-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5ex;
  }

  #carbonads .carbon-img {
    flex: 0 0 130px;
  }

  #carbonads .carbon-img img {
    display: block;
  }

  #carbonads .carbon-text {
    flex-grow: 1;
    flex-basis: var(--carbon-max-char);
    line-height: 1.4;
    text-align: left;
  }

  #carbonads .carbon-poweredby {
    padding: 6px 8px;
    background: var(--carbon-bg-secondary);
    color: var(--carbon-text-color);
    font-weight: 600;
    font-size: 0.6em;
    line-height: 1.4;
    letter-spacing: 0.2ch;
    text-align: center;
    text-transform: uppercase;
  }

  .dark #carbonads {
    --carbon-bg-primary: hsl(0, 0%, 12%);
    --carbon-bg-secondary: hsl(0, 0%, 15%);
    --carbon-text-color: hsl(0, 0%, 90%);
  }

  @keyframes scroll-5 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-12rem * 5));
    }
  }
  .slider {
    position: relative;
    overflow: hidden;
  }
  .slider::before,
  .slider::after {
    background: linear-gradient(to right, #fff 0%, #ffffff00 100%);
    content: "";
    z-index: 2;
    position: absolute;
    height: 100%;
    width: 10rem;
    pointer-events: none;
  }
  .dark .slider::before,
  .dark .slider::after {
    background: linear-gradient(to right, #111 0%, #11111100 50%);
    content: "";
    z-index: 2;
    position: absolute;
    height: 100%;
    width: 10rem;
    pointer-events: none;
    /* background:transparent; */
  }
  .slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  .slider::before {
    left: 0;
    top: 0;
  }
  .slider .slide-track-5 {
    animation: scroll-5 30s linear infinite;
    display: flex;
    width: calc(12rem * 5 * 2);
  }
  .slider .slide-track-10 {
    animation: scroll-5 30s linear infinite;
    display: flex;
    width: calc(12rem * 10 * 2);
  }

  .gw-mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .gw-my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .gw-my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .gw-mb-4 {
    margin-bottom: 1rem;
  }
  .gw-mb-2 {
    margin-bottom: 0.5rem;
  }
  .gw-mt-2 {
    margin-top: 0.5rem;
  }
  .gw-mt-1 {
    margin-top: 0.25rem;
  }
  .gw-mr-3 {
    margin-right: 0.75rem;
  }
  .gw-mt-3 {
    margin-top: 0.75rem;
  }
  .gw-mr-2 {
    margin-right: 0.5rem;
  }
  .gw-mt-4 {
    margin-top: 1rem;
  }
  .gw-mb-3 {
    margin-bottom: 0.75rem;
  }
  .gw-mr-4 {
    margin-right: 1rem;
  }
  .gw-ml-1 {
    margin-left: 0.25rem;
  }
  .gw-mr-1 {
    margin-right: 0.25rem;
  }
  .gw-mb-1 {
    margin-bottom: 0.25rem;
  }
  .gw-flex {
    display: flex;
  }
  .gw-h-3 {
    height: 0.75rem;
  }
  .gw-w-full {
    width: 100%;
  }
  .gw-w-1\/2 {
    width: 50%;
  }
  .gw-w-1\/3 {
    width: 33.333333%;
  }
  .gw-w-1\/4 {
    width: 25%;
  }
  .gw-w-3 {
    width: 0.75rem;
  }
  .gw-w-6 {
    width: 1.5rem;
  }
  .gw-max-w-\[600px\] {
    max-width: 600px;
  }
  .gw-flex-row {
    flex-direction: row;
  }
  .gw-flex-col {
    flex-direction: column;
  }
  .gw-items-center {
    align-items: center;
  }
  .gw-justify-center {
    justify-content: center;
  }
  .gw-justify-between {
    justify-content: space-between;
  }
  .gw-space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }
  .gw-self-center {
    align-self: center;
  }
  .gw-overflow-hidden {
    overflow: hidden;
  }
  .gw-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .gw-rounded-md {
    border-radius: 0.375rem;
  }
  .gw-rounded {
    border-radius: 0.25rem;
  }
  .gw-rounded-3xl {
    border-radius: 1.5rem;
  }
  .gw-border {
    border-width: 1px;
  }
  .gw-border-x {
    border-left-width: 1px;
    border-right-width: 1px;
  }
  .gw-border-r {
    border-right-width: 1px;
  }
  .gw-border-solid {
    border-style: solid;
  }
  .gw-border-transparent {
    border-color: transparent;
  }
  .gw-bg-transparent {
    background-color: transparent;
  }
  .gw-bg-red-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 242 242 / var(--tw-bg-opacity));
  }
  .gw-p-7 {
    padding: 1.75rem;
  }
  .gw-p-4 {
    padding: 1rem;
  }
  .gw-p-2 {
    padding: 0.5rem;
  }
  .gw-py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .gw-px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .gw-px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .gw-py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .gw-py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .gw-pb-2 {
    padding-bottom: 0.5rem;
  }
  .gw-pr-2 {
    padding-right: 0.5rem;
  }
  .gw-pt-1 {
    padding-top: 0.25rem;
  }
  .gw-pl-2 {
    padding-left: 0.5rem;
  }
  .gw-pr-4 {
    padding-right: 1rem;
  }
  .gw-text-left {
    text-align: left;
  }
  .gw-text-center {
    text-align: center;
  }
  .gw-text-right {
    text-align: right;
  }
  .gw-align-middle {
    vertical-align: middle;
  }
  .gw-text-2xl {
    font-size: 1.5rem;
  }
  .gw-text-sm {
    font-size: 0.875rem;
  }
  .gw-text-base {
    font-size: 1rem;
  }
  .gw-text-3xl {
    font-size: 1.875rem;
  }
  .gw-text-xs {
    font-size: 0.75rem;
  }
  .gw-text-xl {
    font-size: 1.25rem;
  }
  .gw-font-bold {
    font-weight: 700;
  }
  .gw-font-semibold {
    font-weight: 600;
  }
  .gw-font-medium {
    font-weight: 500;
  }
  .gw-text-red-800 {
    --tw-text-opacity: 1;
    color: rgb(153 27 27 / var(--tw-text-opacity));
  }
  .gw-transition {
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .gw-duration-300 {
    transition-duration: 0.3s;
  }
  #getWaitlistContainer {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-feature-settings: normal;
    width: 100%;
    display: flex;
    align-items: center;
  }
  #getWaitlistContainer svg {
    display: block;
    vertical-align: middle;
  }
  #getWaitlistContainer a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }
  #getWaitlistContainer input {
    padding: 0.5rem 0.75rem;
    line-height: 1.5rem;
  }
  #getWaitlistContainer select {
    padding: 0.5rem 0.75rem;
    line-height: 1.5rem;
    text-transform: none;
  }
  #getWaitlistContainer :-moz-focusring {
    outline: auto;
  }
  #getWaitlistContainer input::-moz-placeholder,
  #getWaitlistContainer textarea::-moz-placeholder {
    opacity: 0.5;
    color: inherit;
  }
  #getWaitlistContainer input::placeholder,
  #getWaitlistContainer textarea::placeholder {
    opacity: 0.5;
    color: inherit;
  }
  #getWaitlistContainer [role="button"],
  #getWaitlistContainer [type="button"],
  #getWaitlistContainer button {
    white-space: nowrap;
    cursor: pointer;
    text-transform: none;
  }
  #getWaitlistContainer button,
  #getWaitlistContainer input,
  #getWaitlistContainer optgroup,
  #getWaitlistContainer select,
  #getWaitlistContainer textarea {
    font-family: Inter, -apple-system, BlinkMacSystemFont, avenir next, avenir,
      segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,
      arial, sans-serif;
    font-weight: semibold;
    line-height: inherit;
    color: inherit;
  }
  #getWaitlistContainer h1,
  #getWaitlistContainer h2,
  #getWaitlistContainer h3,
  #getWaitlistContainer h4,
  #getWaitlistContainer h5,
  #getWaitlistContainer h6 {
    font-weight: inherit;
    margin: 0;
  }
  #getWaitlistContainer dd {
    margin: 0;
  }
  #getWaitlistContainer :disabled {
    opacity: 0.8;
    cursor: default;
  }
  #getWaitlistContainer .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  #getWaitlistContainer .danger_select {
    border: 1px solid #991b1b !important;
  }
  #getWaitlistContainer input:-webkit-autofill,
  #getWaitlistContainer input:-webkit-autofill:active,
  #getWaitlistContainer input:-webkit-autofill:focus,
  #getWaitlistContainer input:-webkit-autofill:hover {
    -webkit-transition: background-color 9999s ease-in-out,
      color 9999s ease-in-out;
    transition: background-color 9999s ease-in-out, color 9999s ease-in-out;
  }
  #getWaitlistContainer .app-loading-spinner-svg {
    color: #000;
    transform-origin: 50% 50%;
    transition-timing-function: ease;
    transition-property: opacity, transform;
    animation: 250ms AppLoadingSpinnerShow,
      0.6s linear infinite SpinnerAnimationRotation;
  }
  @keyframes AppLoadingSpinnerShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes SpinnerAnimationRotation {
    100% {
      transform: rotate(360deg);
    }
  }
  .hover\:gw-cursor-pointer:hover {
    cursor: pointer;
  }
  .hover\:gw-opacity-80:hover {
    opacity: 0.8;
  }
  .focus\:gw-ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  @media (min-width: 640px) {
    .sm\:gw-mt-4 {
      margin-top: 1rem;
    }
    .sm\:gw-mt-0 {
      margin-top: 0;
    }
    .sm\:gw-w-1\/2 {
      width: 50%;
    }
    .sm\:gw-flex-row {
      flex-direction: row;
    }
    .sm\:gw-space-x-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1rem * var(--tw-space-x-reverse));
      margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }
    .sm\:gw-p-6 {
      padding: 1.5rem;
    }
  }

  .gw-text-xs {
    display: none !important;
    visibility: hidden !important;
  }

  .gw-flex {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .gw-max-w-\[600px\] {
    max-width: 400px;
  }

  .youtubeContainer {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .youtubeContainer iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .circle {
    line-height: 0; /* remove line-height */
    display: inline-block; /* circle wraps image */
    margin: 5px;
    border: 4px solid rgba(200, 200, 200, 0.4);
    border-radius: 50%; /* relative value */
    /*box-shadow: 0px 0px 5px rgba(0,0,0,0.4);*/
    transition: linear 0.25s;
    height: 40px;
    width: 40px;
  }
  .cir-plus {
    height: 80px;
    width: 80px;
  }
  .cir-plus:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(19, 231, 12, 0.2);
    -webkit-transition: ease-out 0.2s;
  }
  .circle img {
    border-radius: 50%; /* relative value for
				   adjustable image size */
  }
  .circle:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(0, 0, 0, 0.2);
    -webkit-transition: ease-out 0.2s;
  }
  a.circle {
    color: transparent;
  } /* IE fix: removes blue border */
  article {
    padding-left: max(env(safe-area-inset-right), 0rem) !important;
    padding-right: max(env(safe-area-inset-right), 0rem) !important;
  }
  .nx-max-w-90rem {
    max-width: 100rem !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${style}
  ${liemDevCss}
  ${customCss}
`;
