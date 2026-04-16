# Advanced Quantum Computing Course: Track System Redesign

## Executive Summary
Restructure the course to support four specialized learning paths (Programming, Materials, Medical, Robotics), where selecting a track dynamically filters modules in the sidebar to prevent congestion and provide focused learning experiences.

---

## 1. Track Architecture

### 1.1 Programming Track 🖥️
**Description:** Learn quantum computing through multiple programming languages and build unified understanding across paradigms.

**Goal:** Master quantum circuit implementation and algorithm development across diverse language ecosystems.

**Languages Covered:**
- Q# (Microsoft Quantum Development Kit)
- Python (Qiskit, Cirq, PennyLane)
- Rust (quantum circuit optimizations)
- C++ (high-performance simulators)
- Java (quantum frameworks)
- Julia (numerical quantum computing)

**Modules:**
- Module 1: Quantum Foundations (core concepts, universal)
- Module 2: Quantum Gates & Circuits (core concepts, universal)
- Module 3: Q# Fundamentals & Circuit Design
- Module 4: Python Quantum Ecosystem (Qiskit, Cirq, PennyLane)
- Module 5: Algorithms I - Deutsch, Grover (multi-language implementations)
- Module 6: Algorithms II - Shor, VQE (multi-language implementations)
- Module 7: High-Performance Computing - Rust & C++ Optimizations
- Module 8: Language Interoperability & Unified Frameworks

---

### 1.2 Materials Track 🔬
**Description:** Apply quantum computing to materials science and discovery using Materials Project ecosystem.

**Goal:** Understand quantum simulations for material properties, drug discovery, and molecular design.

**Resources:** [Materials Project](https://materialsproject.org/) | [PyMatGen](https://pymatgen.org/) | [ASE](https://wiki.fysik.dtu.dk/ase/)

**Modules:**
- Module 1: Quantum Foundations (core concepts, universal)
- Module 2: Quantum Gates & Circuits (core concepts, universal)
- Module 3: Introduction to Materials Science & Quantum Mechanics
- Module 4: Materials Project Platform Fundamentals
- Module 5: Quantum Simulations for Crystal Structures
- Module 6: Density Functional Theory (DFT) & Quantum Computing
- Module 7: Drug Discovery & Molecular Quantum Simulation
- Module 8: Advanced Materials Applications & Research Frontiers

---

### 1.3 Medical Track 🏥
**Description:** Explore quantum computing applications in medical imaging, diagnostics, and neuroscience data management.

**Goal:** Understand how quantum algorithms accelerate medical imaging analysis and neuroimaging research.

**Resources:** [DANDI](https://dandiarchive.org/) (Distributed Archives for Neurophysiology Data Integration) | [BIDS](https://bids-standard.github.io/) | [OpenNeuro](https://openneuro.org/)

**Modules:**
- Module 1: Quantum Foundations (core concepts, universal)
- Module 2: Quantum Gates & Circuits (core concepts, universal)
- Module 3: Medical Imaging Fundamentals & Signal Processing
- Module 4: Quantum Machine Learning for Image Analysis
- Module 5: Diagnostic Algorithms & Pattern Recognition
- Module 6: Neuroimaging Data Standards (BIDS, DANDI Integration)
- Module 7: Quantum-Accelerated Diagnostic Systems
- Module 8: Clinical Applications & Research Case Studies

---

### 1.4 Robotics Track 🤖
**Description:** Apply quantum computing to robotics, control systems, satellite technologies, and real-time sensing.

**Goal:** Integrate quantum algorithms into robot control, sensor fusion, and satellite command systems.

**Resources:** [ROS (Robot Operating System)](https://www.ros.org/) | [NASA Quantum Initiative](https://www.nasa.gov/quantum/) | [IEEE Robotics](https://www.ieee.org/robotics)

**Modules:**
- Module 1: Quantum Foundations (core concepts, universal)
- Module 2: Quantum Gates & Circuits (core concepts, universal)
- Module 3: Robotics & Control Systems Fundamentals
- Module 4: Quantum Optimization for Robot Path Planning
- Module 5: Sensor Fusion & Quantum-Enhanced Sensing
- Module 6: Satellite Command & Control Systems
- Module 7: Real-Time Quantum Algorithms for Embedded Systems
- Module 8: Space & Robotics Applications - Advanced Frontiers

---

## 2. Module Classification Scheme

### Core Modules (Universal - Always Visible)
- Module 1: Quantum Foundations
- Module 2: Quantum Gates & Circuits

### Track-Specific Modules
Each module beyond Module 2 maps to one or more tracks:

```
Track Mapping:
┌─ Programming Track: [M3, M4, M5, M6, M7, M8_prog]
├─ Materials Track:   [M3, M4, M5, M6, M7, M8_mat]
├─ Medical Track:     [M3, M4, M5, M6, M7, M8_med]
└─ Robotics Track:    [M3, M4, M5, M6, M7, M8_robot]
```

### Implementation in Code

**tracks.jl** - Updated structure:
```julia
[
    "programming" => Dict(
        "name" => "💻 Programming Fundamentals",
        "description" => "Master quantum computing through Q#, Python, Rust, C++, Java, and Julia",
        "modules" => ["module1", "module2", "module3_prog", "module4_prog", "module5_prog", "module6_prog", "module7_prog", "module8_prog"]
    ),
    "materials" => Dict(
        "name" => "🔬 Materials Science",
        "description" => "Apply quantum computing to materials discovery with Materials Project",
        "modules" => ["module1", "module2", "module3_mat", "module4_mat", "module5_mat", "module6_mat", "module7_mat", "module8_mat"]
    ),
    "medical" => Dict(
        "name" => "🏥 Medical & Neuroscience",
        "description" => "Quantum algorithms for medical imaging, diagnostics, and DANDI",
        "modules" => ["module1", "module2", "module3_med", "module4_med", "module5_med", "module6_med", "module7_med", "module8_med"]
    ),
    "robotics" => Dict(
        "name" => "🤖 Robotics & Control",
        "description" => "Quantum computing for robot control, sensing, and satellite systems",
        "modules" => ["module1", "module2", "module3_robot", "module4_robot", "module5_robot", "module6_robot", "module7_robot", "module8_robot"]
    )
]
```

**sidebar.jl** - Updated structure:
```julia
[
    # Track metadata (for sidebar rendering logic)
    "_tracks" => ["programming", "materials", "medical", "robotics"],
    
    # Core modules (always visible)
    "module1" => "Module 1: Quantum Foundations",
    "module2" => "Module 2: Quantum Gates & Circuits",
    
    # Programming Track Modules
    "module3_prog" => "Module 3: Q# & Circuit Design",
    "module4_prog" => "Module 4: Python Ecosystem",
    "module5_prog" => "Module 5: Algorithms I",
    "module6_prog" => "Module 6: Algorithms II",
    "module7_prog" => "Module 7: High-Performance Computing",
    "module8_prog" => "Module 8: Language Interoperability",
    
    # Materials Track Modules
    "module3_mat" => "Module 3: Materials Science Fundamentals",
    "module4_mat" => "Module 4: Materials Project Platform",
    # ... etc
]
```

---

## 3. UI/UX Implementation Strategy

### 3.1 Track Selection Component
**Location:** Sidebar (replace existing "Choose your track" select box)

**Design Changes:**
1. **Visual Track Cards** in homepage with:
   - Track emoji/icon
   - Track name and description
   - "Choose Track" button
   
2. **Persistent Track Selection:**
   - Store selected track in browser localStorage
   - Add visual indicator (highlight/border) on selected track
   - "Clear Selection" option to show all modules again

### 3.2 Sidebar Filtering Logic

**When Track is Selected:**
- Show: All core modules (Module 1-2)
- Show: Only modules matching selected track
- Hide: Modules for other tracks (completely, not greyed out)

**When No Track is Selected:**
- Show: All core modules (Module 1-2)
- Show: All track-specific modules (condensed view with section headers)

**Example Sidebar Rendering (Programming Track Selected):**
```
Welcome
  └─ Welcome & Getting Started

Module 1: Quantum Foundations
Module 2: Quantum Gates & Circuits

Programming & Languages
  ├─ Module 3: Q# & Circuit Design
  ├─ Module 4: Python Ecosystem
  ├─ Module 5: Algorithms I
  ├─ Module 6: Algorithms II
  ├─ Module 7: High-Performance Computing
  └─ Module 8: Language Interoperability

[Change Track] [View All]
```

---

## 4. Technical Implementation Checklist

### Phase 1: Data Structure Updates
- [ ] Update `tracks.jl` with new track format including module mappings
- [ ] Update `sidebar.jl` with track-specific module names
- [ ] Create `track_modules.jl` for centralized track-to-module mapping

### Phase 2: Frontend Filtering Logic
- [ ] Update `layout.jlhtml` or create `track_selector.jl` component
- [ ] Implement localStorage for track selection persistence
- [ ] Add JavaScript to handle track switching and sidebar filtering
- [ ] Create CSS for track selection cards and sidebar filtering

### Phase 3: Sidebar Rendering
- [ ] Modify sidebar rendering in `layout.jlhtml` to filter modules based on selected track
- [ ] Add "Track-specific section headers" when filtering by track
- [ ] Implement "Change Track" and "View All" buttons

### Phase 4: Homepage Updates
- [ ] Add track selection cards to homepage (between highlights and references)
- [ ] Update `homepage.jl` with track descriptions
- [ ] Create `get_tracks.jl` rendering script

### Phase 5: Module Organization
- [ ] Rename/reorganize existing modules to follow track naming convention
- [ ] Add frontmatter metadata to each module (track tags)
- [ ] Create track-specific landing pages (overview of track modules)

---

## 5. Module File Structure Example

**Current:**
```
src/
├─ mod2_quantum_gates/
│  ├─ lesson_2_1_...jl
│  └─ module_overview.md
└─ ...
```

**Proposed (with track separation):**
```
src/
├─ mod1_foundations/
│  ├─ lesson_1_1_...jl
│  └─ module_overview.md
├─ mod2_gates/
│  ├─ lesson_2_1_...jl
│  └─ module_overview.md
├─ mod3_programming/         # Programming Track
│  ├─ lesson_3_1_qsharp.jl
│  ├─ module_overview.md
├─ mod3_materials/           # Materials Track
│  ├─ lesson_3_1_matsci.jl
│  ├─ module_overview.md
├─ mod3_medical/             # Medical Track
│  ├─ lesson_3_1_imaging.jl
│  └─ module_overview.md
├─ mod3_robotics/            # Robotics Track
│  ├─ lesson_3_1_control.jl
│  └─ module_overview.md
└─ ...
```

---

## 6. Learning Paths by Track

### Programming Track Path
1. **Foundation** → Quantum concepts & basics (M1-M2)
2. **Intro to Quantum Computing** → Q# fundamentals (M3)
3. **Ecosystem** → Python libraries and frameworks (M4)
4. **Core Algorithms** → Deutsch, Grover algorithms (M5)
5. **Advanced Algorithms** → Shor, VQE (M6)
6. **Performance** → Rust & C++ optimizations (M7)
7. **Capstone** → Multi-language project (M8)

### Materials Track Path
1. **Foundation** → Quantum concepts & basics (M1-M2)
2. **Domain Knowledge** → Materials science + QM (M3)
3. **Tools** → Materials Project platform (M4)
4. **Simulation** → Crystal structures & DFT (M5-M6)
5. **Applications** → Drug discovery, molecular design (M7)
6. **Capstone** → Real materials research project (M8)

### Medical Track Path
1. **Foundation** → Quantum concepts & basics (M1-M2)
2. **Domain Knowledge** → Medical imaging & signals (M3)
3. **QML** → Machine learning for images (M4)
4. **Algorithms** → Diagnostics & pattern recognition (M5)
5. **Data Standards** → BIDS, DANDI integration (M6)
6. **Systems** → Quantum-accelerated diagnostics (M7)
7. **Capstone** → Clinical case study (M8)

### Robotics Track Path
1. **Foundation** → Quantum concepts & basics (M1-M2)
2. **Domain Knowledge** → Robotics & control theory (M3)
3. **Optimization** → Path planning & QOA (M4)
4. **Sensing** → Sensor fusion & quantum sensing (M5)
5. **Satellites** → Command & control systems (M6)
6. **Embedded** → Real-time quantum algorithms (M7)
7. **Capstone** → Satellite/robot control project (M8)

---

## 7. Additional Considerations

### 7.1 Cross-Track Content
- **Modules 1-2** are mandatory for all tracks (core quantum knowledge)
- Consider **elective "bridge" modules** that connect tracks (e.g., "QML Fundamentals" useful for all)

### 7.2 Project-Based Learning
- Each track culminates in a capstone project (Module 8)
- Projects leverage domain-specific resources (Materials Project, DANDI, ROS, NASA)

### 7.3 Progress Tracking
- Add progress indicators per track
- Allow students to save progress and switch tracks mid-course

### 7.4 Instructor Notes
- Include track context in module frontmatter for filtering
- Tag modules with difficulty level + track for better recommendations

---

## 8. Success Metrics

✅ Students can select a focused learning path without seeing unrelated content  
✅ Sidebar remains uncluttered regardless of total module count  
✅ Core quantum concepts are universal across all tracks  
✅ Each track provides domain-specific depth and realistic applications  
✅ Clear progression from fundamentals → specialized → capstone project  

---

## Next Steps

1. **Approval:** Confirm this architecture meets your goals
2. **Implementation Priority:** Start with Phase 1 (data) or Phase 2 (UI)?
3. **Module Development:** Which track modules should be created first?
4. **Testing:** Define test matrices for track switching and sidebar filtering

---

**Document Version:** 1.0  
**Created:** April 15, 2026  
**Status:** Ready for Review & Implementation Planning
