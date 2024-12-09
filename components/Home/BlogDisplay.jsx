import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const BlogDisplay = () => {
  const categories = [
    "All",
    "Destination",
    "Culinary",
    "Lifestyle",
    "Tips & Hacks",
  ];

  const posts = [
    {
      id: 1,
      title: "Unveiling the Secrets Beyond the Tourist Trails",
      description:
        "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
      category: "Destination",
      date: "30 Jan 2024",
      readTime: "10 mins read",
      image: "/demothumb.png",
      author: {
        name: "Seraphina Isabella",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 2,
      title: "A Fashionista's Guide to Wanderlust",
      description:
        "Explore the intersection of fashion and travel as we delve into the wardrobes of globetrotters. Fr...",
      category: "Lifestyle",
      date: "29 Jan 2024",
      readTime: "5 mins read",
      image: "/demothumb.png",
      author: {
        name: "Maximilian Bartholomew",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 3,
      title: "Top 5 Apps and Gadgets That Will Transform Your Journeys",
      description:
        "Explore the latest in travel technology with our guide to must-have apps and gadgets. From nav...",
      category: "Tips & Hacks",
      date: "26 Jan 2024",
      readTime: "15 mins read",
      image: "/demothumb.png",
      author: {
        name: "Anastasia Evangeline",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ];

  return (
    <div className="bg-[#111827] px-4 py-8 text-white ">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-white">
          Here, we share travel tips, destination guides, and stories that
          inspire your next adventure.
        </p>
      </div>

      <div className="flex justify-between items-center mb-8">
        <nav className="flex gap-6">
          {categories.map((category) => (
            <button
              key={category}
              className="text-white hover:text-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-white">
          <span className="text-sm">Sort by:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[100px] text-black">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-black">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href="#" className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute left-4 top-4">{post.category}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold leading-tight">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;
