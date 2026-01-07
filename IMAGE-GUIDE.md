# 📸 How to Change Images in Your Portfolio

This portfolio uses a centralized image configuration system. All image paths are managed in one file for easy updates!

## 📁 File Structure

```
lingaraja-07.github.io/
├── index.html
├── style.css
├── images-config.js          ← EDIT THIS FILE TO CHANGE IMAGES
└── assets/
    └── images/
        ├── profile.jpg         ← Your profile photo
        ├── risc-processor.jpg  ← Project screenshot
        └── memory-controller.jpg ← Project screenshot
```

## 🔧 How to Change Images

### Step 1: Add Your New Images
1. Place your new image files in the `assets/images/` folder
2. Use descriptive filenames (e.g., `my-awesome-project.jpg`)

### Step 2: Update the Config File
Open `images-config.js` and update the paths:

```javascript
const ImageConfig = {
    // Profile Photo
    profile: "assets/images/YOUR-NEW-PHOTO.jpg",
    
    // Project Images
    projects: {
        riscProcessor: "assets/images/YOUR-RISC-IMAGE.jpg",
        memoryController: "assets/images/YOUR-MEMORY-IMAGE.jpg",
    }
};
```

### Step 3: That's It!
Refresh your browser - the images will automatically update! 🎉

## ✨ Adding More Project Images

If you want to add more project images:

1. **Add the image to the config:**
```javascript
projects: {
    riscProcessor: "assets/images/risc-processor.jpg",
    memoryController: "assets/images/memory-controller.jpg",
    myNewProject: "assets/images/my-new-project.jpg"  // Add this
}
```

2. **Add the image to HTML with an ID:**
```html
<img id="my-new-project-img" src="" alt="My New Project">
```

3. **Update the auto-apply section in `images-config.js`:**
```javascript
const projectImages = {
    'risc-processor-img': ImageConfig.projects.riscProcessor,
    'memory-controller-img': ImageConfig.projects.memoryController,
    'my-new-project-img': ImageConfig.projects.myNewProject  // Add this
};
```

## 🖼️ Recommended Image Specifications

| Image Type | Recommended Size | Aspect Ratio |
|------------|------------------|--------------|
| Profile Photo | 400x400px | 1:1 (Square) |
| Large Project Images | 1200x600px | 2:1 (Wide) |
| Small Project Images | 800x600px | 4:3 |

## 💡 Tips

- ✅ Use `.jpg` for photographs
- ✅ Use `.png` for diagrams/screenshots with transparency
- ✅ Keep file sizes under 500KB for fast loading
- ✅ Use descriptive alt text in HTML for accessibility

## 🚀 Quick Test

After changing images:
1. Save `images-config.js`
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Images should update automatically!

---

**Need help?** All image paths are relative to `index.html`
