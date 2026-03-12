import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// https://vike.dev/config
export default {
  // https://vike.dev/head-tags
  title: "My Vike App",
  description: "Demo showcasing Vike",

  favicon: "/logo.svg",

  // https://vike.dev/prerendering
  prerender: true,
  ssr: false,

  extends: [vikeReact],
} satisfies Config;
