if isempty(get(metadata, "tracks", []))
    nothing
else
    let
        tracks_data = metadata["tracks"]
        track_cards = []
        
        # Iterate through each track and build cards
        for (track_id, track_info) in pairs(tracks_data)
            card = @htl("""
            <a class="track-card no-decoration" href="#" onclick="selectTrack('$(track_id)'); return false;" data-track="$(track_id)">
                <h3>$(track_info["name"])</h3>
                <p>$(track_info["description"])</p>
                <span class="cta">Choose Track →</span>
            </a>
            """)
            push!(track_cards, card)
        end
        
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
        """)
    end
end
