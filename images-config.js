// ============================================
// IMAGE CONFIGURATION FILE
// ============================================
// Update image paths here to change images across the entire portfolio
// All paths are relative to the index.html file

const ImageConfig = {
    // Profile Photo (circular image in header)
    profile: "assets/images/profile.png",

    // Project Images
    projects: {
        riscProcessor: "assets/images/risc-processor.jpg",
        memoryController: "assets/images/memory-controller.jpg",
        // Add more project images here as needed
        // example: "assets/images/your-project.jpg"
    }
};

// ============================================
// AUTO-APPLY IMAGES (Don't modify below)
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Apply profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.src = ImageConfig.profile;
    }

    // Apply project images
    const projectImages = {
        'risc-processor-img': ImageConfig.projects.riscProcessor,
        'memory-controller-img': ImageConfig.projects.memoryController
    };

    Object.keys(projectImages).forEach(id => {
        const img = document.getElementById(id);
        if (img) {
            img.src = projectImages[id];
        }
    });
});
