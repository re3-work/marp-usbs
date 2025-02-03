# Marp Engine

Custom marp engine

Additional features:

- Custom containers via markdown-it-container
- Highlighting via markdown-it-mark
- Variables via markdown-it-variable

## Build Image

`docker buildx build --platform linux/amd64,linux/arm64 -t julianprester/marp-usbs:latest --push .`