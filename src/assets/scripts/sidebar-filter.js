/**
 * Quantum Course Track Selector
 * Manages track selection and sidebar filtering
 */

;(function () {
    "use strict"

    // Configuration: Track to modules mapping
    // Each track explicitly lists all its modules (no "core" or "specific" distinction)
    const TRACK_MODULE_MAP = {
        programming: ["module1_foundations", "module2_gates", "module3_prog", "module4_prog", "module5_prog", "module6_prog", "module7_prog", "module8_prog"],
        materials: ["module1_foundations", "module2_gates", "module3_mat", "module4_mat", "module5_mat", "module6_mat", "module7_mat", "module8_mat"],
        medical: ["module1_foundations", "module2_gates", "module3_med", "module4_med", "module5_med", "module6_med", "module7_med", "module8_med"],
        robotics: [
            "module1_foundations",
            "module2_gates",
            "module3_robot",
            "module4_robot",
            "module5_robot",
            "module6_robot",
            "module7_robot",
            "module8_robot",
        ],
    }

    const STORAGE_KEY = "selectedQuantumTrack"

    /**
     * Extract module ID from href or link text
     */
    function getModuleIdFromLink(link) {
        const href = link.getAttribute("href") || ""
        const text = link.textContent || ""

        // Try to find module ID in href
        for (const track in TRACK_MODULE_MAP) {
            for (const moduleId of TRACK_MODULE_MAP[track]) {
                if (href.includes(moduleId)) return moduleId
                if (text.includes(moduleId)) return moduleId
            }
        }
        return null
    }

    /**
     * Filter sidebar to show only modules for selected track
     */
    function filterSidebarByTrack(trackId) {
        if (!trackId || !TRACK_MODULE_MAP[trackId]) return

        const allowedModules = TRACK_MODULE_MAP[trackId]
        const sidebar = document.querySelector("#pages-sidebar")

        if (!sidebar) return

        // Find all sidebar list items with links
        const sidebarItems = sidebar.querySelectorAll("li")

        sidebarItems.forEach((item) => {
            const link = item.querySelector("a")
            if (!link) return

            const moduleId = getModuleIdFromLink(link)

            if (moduleId && !allowedModules.includes(moduleId)) {
                // Hide modules not in this track
                item.style.display = "none"
            } else if (moduleId && allowedModules.includes(moduleId)) {
                // Show modules in this track
                item.style.display = ""
            }
            // Leave non-module items (headers, etc.) visible
        })
    }

    /**
     * Show all modules (clear track filter)
     */
    function showAllModules() {
        const sidebar = document.querySelector("#pages-sidebar")
        if (!sidebar) return

        const sidebarItems = sidebar.querySelectorAll("li")
        sidebarItems.forEach((item) => {
            item.style.display = ""
        })
    }

    /**
     * Update track card UI (add active class)
     */
    function updateTrackCardUI(trackId) {
        document.querySelectorAll(".track-card").forEach((card) => {
            card.classList.remove("active")
        })

        if (trackId) {
            const activeCard = document.querySelector('[data-track="' + trackId + '"]')
            if (activeCard) activeCard.classList.add("active")
        }

        // Show/hide view all button
        const viewAllBtn = document.getElementById("view-all-btn")
        if (viewAllBtn) {
            viewAllBtn.style.display = trackId ? "inline-block" : "none"
        }
    }

    /**
     * Global function to select a track
     */
    window.selectTrack = function (trackId) {
        localStorage.setItem(STORAGE_KEY, trackId)
        filterSidebarByTrack(trackId)
        updateTrackCardUI(trackId)
    }

    /**
     * Global function to clear track selection
     */
    window.clearTrackSelection = function () {
        localStorage.removeItem(STORAGE_KEY)
        showAllModules()
        updateTrackCardUI(null)
    }

    /**
     * Initialize: check if track was previously selected
     */
    function initializeTrackSelection() {
        const savedTrack = localStorage.getItem(STORAGE_KEY)

        if (savedTrack && TRACK_MODULE_MAP[savedTrack]) {
            filterSidebarByTrack(savedTrack)
            updateTrackCardUI(savedTrack)
        }
    }

    // Run initialization when DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeTrackSelection)
    } else {
        initializeTrackSelection()
    }

    // Also run after a short delay to catch dynamically loaded content
    setTimeout(initializeTrackSelection, 500)
})()
