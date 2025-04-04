import { PageProps } from "$fresh/server.ts";
import Page from "../components/home.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      < Page/>
    </div>
  );
}