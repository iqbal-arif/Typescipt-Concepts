https://github.com/angular-university/typescript-bootcamp
Installation:

1. Typescript installation: npm install -g typescript
2. TS Compiling : tsc [filename]
3. No JS Emitting on Error: tsc --noEmitOnError 01_why_typescript.ts
4. Server Setup : npm init
5. Lite Server : npm install lite-server
6. Auto Compile no Emit on error: tsc --w --noEmitOnError [filename]
7. tsc --noImplicitAny [filename] can be used to check for variable type.
8. tsc --strictNullChecks [filename]
9. tsc --sourceMap [filename] :for debugging
   10.Debugging with NodeJS
   1. Run tsc --sourceMap 01_why_typescript.ts
   2. node --inspect 01_why_typescript.js
   3. To go step by step in debugger for node process
   4. node --inspect-brk 01_why_typescript.js
   5. Ctrl+Shift+P => Debug:Attached to Node Process
   6. The debugger will open
   7. Once the process is complete it will exit out.

**\*\*\*** Typescript Compiler Options **\*\*\***

1. tsconfig.json
   1. target: to set the js compiler version for older to newer version
2. Multiple Projects with different browser requirement for js
   1. Use custom-tsconfig.json
      1. Execute all files in folder: tsc --project custom-tsconfig.json
      2. Execute single file : tsc --project custom-tsconfig.json [filename]
      3. File with specific target: : tsc --p custom-tsconfig.json --target es5 [filename]
3. To Compile Specific files in the folder or project
   1. "files": ["25_tuples.ts", "28_never_type.ts"]
   2. For Multiple files enter the file [index.ts] that has all imports
      "files": ["./14_module_reexports/index.ts"]
4.
