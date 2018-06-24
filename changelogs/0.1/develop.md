# Create Skeleton #1
A basic skeleton is setup for big-movie-zoo SPA using React for Web.

# Setup CI/CD #2
CI setup using Travis CI.

# Support for gh-pages #4
gh-pages support for build. See the live demo -> https://applylab-io.github.io/big-movie-zoo/

# Setup multiple deployment paths #6
- `develop` branch build released as gh-pages.
- `master` branch build released to AWS S3 bucket.

# Fix Responsiveness of Player #5 
- Themes were updated.
- Made the player more responsive
- Handle the width and height as state of Player component.

# Video does not play if clicked from Stream page #10
- State management done better at VideoPlayer component
- Added dynamic paths to form new URLs when a movie poster is clicked
- Component life cycle handled in a better way

# Add responsive menu for small screens. A popup with just icons #12
- Updated CSS
- Used Component state
- Added Click handle to Menu component
- Also shipped npm bump version scripts with this. Use `npm version <patch|minor|major` command instead of `git push` going forward.