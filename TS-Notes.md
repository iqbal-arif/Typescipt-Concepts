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
