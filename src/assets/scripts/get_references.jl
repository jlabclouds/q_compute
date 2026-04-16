if isempty(get(metadata["homepage"], "references", []))
    nothing
else
    references = [
      @htl("""
      <a href="$(x["url"])" class="reference-card" target="_blank">
          <h3>$(x["name"])</h3>
          <p>$(x["description"])</p>
      </a>
      """) for x in metadata["homepage"]["references"]
    ]

    @htl("""
    <div class="subjectscontainer wide">
      <h1>References</h1>
      <div class="references-grid">
      $(references)      
      </div>
    </div>
    """)
end
