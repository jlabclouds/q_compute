# Computational thinking template

<p align="center">
<a href="https://juliapluto.github.io/computational-thinking-template"> <b>Go to template website</b> :balloon:</a> </br>
template includes instructions for how to start editing to shape to your own needs :rocket:
</p>

This repository is a template to build a website like the [Computational thinking course](https://computationalthinking.mit.edu/) tought at MIT.

**Note**: This is an early experiment and very WIP; use at your own risk.

```
rm pluto-deployment-environment/Manifest.toml && julia << 'EOF'
using Pkg

Pkg.activate(".")

# Remove all incorrect packages first
packages_to_remove = keys(Pkg.project().dependencies)
for pkg in packages_to_remove
    try
        Pkg.rm(pkg; mode=Pkg.PKGMODE_PROJECT)
    catch e
        println("Skipping $pkg: $e")
    end
end

# Now add all packages fresh - Pkg will resolve to correct UUIDs from registry
packages = [
    "BetterFileWatching",
    "CommonMark",
    "Deno_jll",
    "Gumbo",
    "HypertextLiteral",
    "JSON",
    "LRUCache",
    "Logging",
    "MarkdownLiteral",
    "Memoize",
    "Pluto",
    "PlutoHooks",
    "PlutoLinks",
    "PlutoPages",
    "PlutoSliderServer",
    "PlutoUI",
    "ProgressLogging",
    "ThreadsX",
    "URIs",
    "Unicode",
    "YAML"
]

for pkg in packages
    println("Adding $pkg...")
    Pkg.add(pkg)
end

Pkg.instantiate()
println("✓ Build completed successfully!")
EOF
```