import type { Route } from "./+types/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development services" },
  ];
}

export default function Home() {

  const time = new Date().toISOString()

  if (typeof window === 'undefined') {
    console.log(`Server rendered at ${time}`);

  } else {
    console.log(`Client hydration at ${time}`);
    
  }

  return <section>My App</section>;
}
