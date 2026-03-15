# UniSim CLI Reference

The UniSim command-line interface (CLI) is the primary way to manage and run your projects.

### Core Commands

| Command | Description |
| :--- | :--- |
| `unisim init <name>` | Scaffolds a new project with the correct folder structure. |
| `unisim dev` | Launches the interactive simulator UI and starts the code. |
| `unisim lint` | Checks your `circuit.json` for wiring errors and safety violations. |
| `unisim compile` | Pre-processes your code for optimal performance in the browser. |
| `unisim list` | Lists all available virtual components and their types. |

### Development Workflow
Most users will interact with the CLI via npm scripts in `package.json`:

```json
"scripts": {
  "dev": "unisim dev"
}
```

Simply running `npm run dev` in your project folder will:
1. Validate your `unisim.config.json`.
2. Parse your `.unisim/circuit.json`.
3. Start the local server.
4. Open your default browser to the simulator dashboard.

### Expert Flags
- `--verbose`: Includes detailed communication logs between the UI and simulation core.
- `--no-cache`: Forces a re-load of all assets (useful after manual file modifications).
