# Quick Start: Adding Images to Your Portfolio

## ✅ Step-by-Step Guide

### Step 1: Create Folders (Already Done!)
```
assets/
└── images/
```

### Step 2: Add Your Images

**Option A - Drag & Drop:**
1. Open `assets/images/` folder in File Explorer
2. Drag your photos/screenshots into this folder

**Option B - Copy/Paste:**
1. Copy your image files
2. Navigate to: `c:\Users\linga\lingaraja-07.github.io\assets\images`
3. Paste them there

### Step 3: Recommended Images to Add

📷 **profile.jpg** - Your professional headshot (400x400px)
🖥️ **risc-processor.jpg** - Block diagram or circuit schematic
💾 **memory-controller.jpg** - Architecture diagram or layout

### Step 4: Already Configured!
Your `images-config.js` is already set up with these paths:
- `assets/images/profile.jpg`
- `assets/images/risc-processor.jpg`
- `assets/images/memory-controller.jpg`

Just make sure your image filenames match these names!

## 🎨 Quick Image Tips

**Create Placeholder Images:**
If you don't have images yet, you can use:
- Free stock photos from [Unsplash](https://unsplash.com)
- Circuit diagram generators
- Screenshot your Verilog code/simulations
- Use online tools like [Canva](https://canva.com) to create placeholders

**Image Formats:**
- ✅ `.jpg` - For photos (smaller file size)
- ✅ `.png` - For diagrams with transparency
- ✅ `.webp` - Modern format (smaller + better quality)

**File Size:**
- Keep images under 500KB for fast loading
- Use online compressors if needed: [TinyPNG](https://tinypng.com)

## 🚀 After Adding Images

1. **Refresh your browser** to see the new images
2. Press `Ctrl + F5` (hard refresh) if images don't update
3. Check browser console (F12) for any errors

## 📝 Example Commands (PowerShell)

```powershell
# Navigate to your project
cd c:\Users\linga\lingaraja-07.github.io

# Create folders (already done)
mkdir assets\images -Force

# Copy an image from Downloads
copy "$env:USERPROFILE\Downloads\my-photo.jpg" "assets\images\profile.jpg"

# View your images
dir assets\images
```

---

**Need placeholder images right now?** I can help you generate some using AI or find free resources!
