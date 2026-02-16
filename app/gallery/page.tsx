import { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Bhardwaj International School",
  description:
    "View our photo gallery capturing moments of learning, joy, and achievement from campus life, events, sports, and academic activities.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
