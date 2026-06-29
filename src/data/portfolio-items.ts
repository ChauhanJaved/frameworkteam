import { JPGtoPDFConverterWeb } from "@/data/jpg-to-pdf-converter-web";
import { PNGtoPDFConverterWeb } from "@/data/png-to-pdf-converter-web";
import { TIFFtoPDFConverterWeb } from "@/data/tiff-to-pdf-converter-web";
import { TIFFSplitterWeb } from "@/data/tiff-splitter-web";
import { TIFFMergerWeb } from "@/data/tiff-merger-web";
import { JPGtoPDFConverterDesktop } from "@/data/jpg-to-pdf-converter-desktop";
import { TIFFtoPDFConverterDesktop } from "@/data/tiff-to-pdf-converter-desktop";
import { PNGtoPDFConverterDesktop } from "@/data/png-to-pdf-converter-desktop";
import { PDFtoJPGConverter } from "@/data/pdf-to-jpg-converter";
import { PDFtoTIFFConverter } from "@/data/pdf-to-tiff-converter";
import { PDFtoPNGConverter } from "@/data/pdf-to-png-converter";
import { PDFtoImageConverter } from "@/data/pdf-to-image-converter";
import { TIFFSplitterDesktop } from "@/data/tiff-splitter-desktop";
import { TIFFCombiner } from "@/data/tiff-combiner";
import { TIFFSplitMerge } from "@/data/tiff-split-merge";
import { PDFSplitter } from "@/data/pdf-splitter";
import { PDFCombiner } from "@/data/pdf-combiner";
import { PDFSplitMerge } from "@/data/pdf-split-merge";
import { WebpageThumbnailer } from "@/data/webpage-thumbnailer";
import { ConvertHTMLtoImage } from "@/data/convert-html-to-image";
import { WebsitesScreenshotDLL } from "@/data/websites-screenshot-dll";
import { FTQR } from "@/data/ftqr";
import { portfolioItem } from "@/data/website-data";

export const portfolioItems: portfolioItem[] = [
  FTQR,

  JPGtoPDFConverterWeb,
  PNGtoPDFConverterWeb,
  TIFFtoPDFConverterWeb,
  TIFFSplitterWeb,
  TIFFMergerWeb,

  JPGtoPDFConverterDesktop,
  PNGtoPDFConverterDesktop,
  TIFFtoPDFConverterDesktop,

  PDFtoJPGConverter,
  PDFtoTIFFConverter,
  PDFtoPNGConverter,
  PDFtoImageConverter,

  TIFFSplitterDesktop,
  TIFFCombiner,
  TIFFSplitMerge,

  PDFSplitter,
  PDFCombiner,
  PDFSplitMerge,

  WebpageThumbnailer,
  ConvertHTMLtoImage,
  WebsitesScreenshotDLL,
];
