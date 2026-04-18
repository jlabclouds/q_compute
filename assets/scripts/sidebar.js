const sidebar = document.querySelector("#pages-sidebar")
const layout = document.querySelector("#pages-layout")
const navtoggle = document.querySelector("#toggle-nav")

document.querySelector("#toggle-nav").addEventListener("click", function (e) {
    console.log(e)
    layout.classList.toggle("pages_show_sidebar")
    e.stopPropagation()
})

window.addEventListener("click", function (e) {
    if (!sidebar.contains(e.target) && !navtoggle.contains(e.target)) {
        layout.classList.remove("pages_show_sidebar")
    }
})

// Dropdown toggle functionality
document.querySelectorAll("h3.dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
        e.preventDefault()
        const section = this.closest("li.dropdown-section")
        section.classList.toggle("collapsed")

        // Save dropdown state to localStorage
        const sectionId = this.textContent.trim()
        const isCollapsed = section.classList.contains("collapsed")
        const dropdownStates = JSON.parse(localStorage.getItem("dropdown_states") || "{}")
        dropdownStates[sectionId] = isCollapsed
        localStorage.setItem("dropdown_states", JSON.stringify(dropdownStates))
    })
})

// Restore dropdown states from localStorage
const dropdownStates = JSON.parse(localStorage.getItem("dropdown_states") || "{}")
document.querySelectorAll("h3.dropdown-toggle").forEach((toggle) => {
    const sectionId = toggle.textContent.trim()
    if (dropdownStates[sectionId]) {
        toggle.closest("li.dropdown-section").classList.add("collapsed")
    }
})

document.querySelectorAll(".track-chooser select").forEach((trackSelect) => {
    const ontrack = () => {
        let track = trackSelect.value

        localStorage.setItem("chosen track", track)

        let lectures_homeworks = Array.from(sidebar.querySelectorAll(".lecture,.homework"))

        lectures_homeworks.forEach((el) => {
            let intrack = track === "" || el.classList.contains(`tag_track_${track}`) || el.classList.contains(`tag_welcome`)
            el.classList.toggle("not_in_track", !intrack)
        })
    }

    trackSelect.value = localStorage.getItem("chosen track")
    ontrack()
    trackSelect.addEventListener("change", ontrack)
})
