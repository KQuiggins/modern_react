import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development services" },
  ];
}

export default function Home() {
  return <>My App</>;
}
