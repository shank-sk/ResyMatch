// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or set default
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update the icon based on current theme
    if (currentTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Toggle the icon
        themeIcon.classList.toggle('fa-moon');
        themeIcon.classList.toggle('fa-sun');
    });
    
    // Display selected files
    document.getElementById('resumes').addEventListener('change', function(e) {
        const fileList = document.getElementById('fileList');
        fileList.innerHTML = '';
        
        if (this.files.length > 0) {
            const list = document.createElement('ul');
            list.className = 'list-group';
            
            for (let i = 0; i < this.files.length; i++) {
                const item = document.createElement('li');
                item.className = 'list-group-item d-flex justify-content-between align-items-center';
                
                const fileName = document.createElement('span');
                fileName.textContent = this.files[i].name;
                
                const fileSize = document.createElement('span');
                fileSize.className = 'badge badge-primary badge-pill';
                fileSize.textContent = formatFileSize(this.files[i].size);
                
                item.appendChild(fileName);
                item.appendChild(fileSize);
                list.appendChild(item);
            }
            
            fileList.appendChild(list);
            
            // Update the file input label
            document.querySelector('.custom-file-label').textContent = 
                this.files.length > 1 ? `${this.files.length} files selected` : this.files[0].name;
        } else {
            document.querySelector('.custom-file-label').textContent = 'Choose files';
        }
    });
    
    // Show loading overlay when form is submitted
    document.getElementById('resumeForm').addEventListener('submit', function() {
        document.getElementById('loadingOverlay').style.display = 'flex';
    });
});

// Format file size
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}