import fs from 'fs';
import path from 'path';
import GalleryGrid from "@/components/GalleryGrid";

// Utility to recursively get all files in a directory
function getAllFiles(dirPath: string, arrayOfFiles: string[] = [], basePublicPath: string = '') {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    // Ignore logos folder
    if (file === 'logos') return;

    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, path.join(basePublicPath, file));
    } else {
      // Filter for image extensions
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        // Construct public URL. Note: Windows paths need to be converted to forward slashes for URLs
        const publicUrl = `/${basePublicPath ? basePublicPath.replace(/\\/g, '/') + '/' : ''}${file}`;
        arrayOfFiles.push(publicUrl);
      }
    }
  });

  return arrayOfFiles;
}

export default function GalleryPage() {
  const publicDir = path.join(process.cwd(), 'public');
  // Get all images recursively from public folder
  const allImages = getAllFiles(publicDir);

  // Shuffle images for a more "pinterest" random feel
  const shuffledImages = allImages.sort(() => 0.5 - Math.random());

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">Gallery</h1>
          <p className="font-poppins text-[#1a1a1a]/60">A visual journey through The Avanya</p>
        </div>

        <GalleryGrid images={shuffledImages} />
      </div>
    </div>
  );
}
