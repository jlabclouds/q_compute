if isempty(get(metadata, "tracks", []))
    nothing
else
    tracks_data = metadata["tracks"]
    
    track_cards = [
        @htl("""
        <a class="track-card no-decoration" href="#" onclick="selectTrack('$(track_id)'); return false;" data-track="$(track_id)">
            <h3>$(track_info["name"])</h3>
            <p>$(track_info["description"])</p>
            <span class="cta">Choose Track →</span>
        </a>
        """) for (track_id, track_info) in tracks_data
    ]
    
    @htl("""
    <div class="wide subjectscontainer">
      <h1>Choose Your Learning Path</h1>
      <div class="track-selector">
      $(track_cards)
      <div style="text-align: center; margin-top: 1.5rem;">
          <button id="view-all-btn" onclick="clearTrackSelection()" style="display: none; padding: 0.5rem 1.5rem; background: var(--text); color: var(--bg); border: none; border-radius: 0.3rem; cursor: pointer; font-weight: 500;">View All Modules</button>
      </div>
      </div>
    </div>
    
    <script>
    (function() {
        // Track selection state management
        const STORAGE_KEY = 'selectedQuantumTrack';
        
        function selectTrack(trackId) {
            localStorage.setItem(STORAGE_KEY, trackId);
            filterSidebarByTrack(trackId);
            updateTrackUI(trackId);
        }
        
        function clearTrackSelection() {
            localStorage.removeItem(STORAGE_KEY);
            location.reload(); // Reload to show all modules
        }
        
        function updateTrackUI(trackId) {
            // Update track card styling
            document.querySelectorAll('.track-card').forEach(card => {
                card.classList.remove('active');
            });
            document.querySelector('[data-track="' + trackId + '"]')?.classList.add('active');
            
            // Show view all button
            const viewAllBtn = document.getElementById('view-all-btn');
            if (viewAllBtn) viewAllBtn.style.display = 'inline-block';
        }
        
        function filterSidebarByTrack(trackId) {
            // Get track module data
            const trackModuleMap = {
                "programming": ["module1", "module2", "module3_prog", "module4_prog", "module5_prog", "module6_prog", "module7_prog", "module8_prog"],
                "materials": ["module1", "module2", "module3_mat", "module4_mat", "module5_mat", "module6_mat", "module7_mat", "module8_mat"],
                "medical": ["module1", "module2", "module3_med", "module4_med", "module5_med", "module6_med", "module7_med", "module8_med"],
                "robotics": ["module1", "module2", "module3_robot", "module4_robot", "module5_robot", "module6_robot", "module7_robot", "module8_robot"]
            };
            
            const allowedModules = trackModuleMap[trackId] || [];
            const sidebarItems = document.querySelectorAll('#pages-sidebar li');
            
            sidebarItems.forEach(item => {
                // Check if item corresponds to a module
                const link = item.querySelector('a');
                if (!link) return;
                
                const href = link.getAttribute('href');
                let moduleId = null;
                
                // Extract module ID from href
                for (const mod of allowedModules) {
                    if (href && href.includes(mod)) {
                        moduleId = mod;
                        break;
                    }
                }
                
                // Show/hide based on track
                if (moduleId && allowedModules.includes(moduleId)) {
                    item.style.display = 'block';
                } else if (moduleId && !allowedModules.includes(moduleId)) {
                    item.style.display = 'none';
                }
            });
        }
        
        // Initialize: check if track was previously selected
        const savedTrack = localStorage.getItem(STORAGE_KEY);
        if (savedTrack) {
            updateTrackUI(savedTrack);
            filterSidebarByTrack(savedTrack);
        }
    })();
    </script>
    """)
end
