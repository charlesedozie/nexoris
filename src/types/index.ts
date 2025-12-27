import {
LayoutDashboard, TableOfContents, Users, HelpCircle, BookOpen, Trophy, NotebookPen,
BookCheck, LogOut, Gamepad2, School, CalendarHeart, BookText } from "lucide-react";

export interface FProps {
number1?: number;
number2?: number;
number3?: number;
number4?: number;
number5?: number;
string1?: string;
string2?: string;
string3?: string;
string4?: string;
string5?: string;
string6?: string;
string7?: string;
string8?: string;
string9?: string;
string10?: string;
}


export interface Category {
  id: number;
  documentId?: string;
  name: string;
  slug?: string;
  description?: string;
}

export interface StrapiImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface StrapiMedia {
  id: number
  documentId: string
  name: string
  alternativeText?: string | null
  caption?: string | null
  width: number
  height: number
  formats?: {
    thumbnail?: StrapiImageFormat
    small?: StrapiImageFormat
    medium?: StrapiImageFormat
    large?: StrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string | null
  provider: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
}


export interface Article {
  id: number;
  documentId: string;
  headline: string;
  slug: string;
  publishedDate?: string;
  richText?: string;
  short_title?: string;
  tldr_summary?: string;
  excerpt?: string;

  category?: Category | null
  author?: Author;  

  createdAt?: string
  updatedAt?: string
  publishedAt?: string

  
  coverImage: StrapiMedia | null

  /*
  author?: {
    id: number
    name: string | null
    bio?: string | null
    profileImage?: StrapiMedia | null
  } | null
  */
}





interface AuthorSchema {
  id: number;
  name: string;
  jobTitle?: string;
  linkedInUrl?: string;
  documentId?: string;
  authorUrl?: string;
  worksForOrganization?: string;
  worksForUrl?: string;
  profileImage?: ProfileImage;
}


export interface Author {
  id: number
  documentId: string
  name: string
  slug: string
  shortBio?: string
  richText?: string
  role?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  authorSchema?: AuthorSchema;
}



interface ImageFormat {
  url: string;
  width: number;
  height: number;
}


interface ProfileImage {
  id: number;
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}
