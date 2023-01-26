// Defining Logging Levels
export enum LoggingLevel {
  ERROR,
  INFO,
  WARN,
  DEBUG,
  TRACE,
}
// Logging Maximum Level Enum to INFO :means getting all the messages from INFO to ERROR
// Logging Maximum Level Enum to DEBUG means getting all the messages from DEBUG to ERROR excluding TRACE
const appMaxLoggingLevel = LoggingLevel.INFO;

export function Log(level: LoggingLevel): MethodDecorator {
  console.log(`Applying @Log Decorator`);

  //   return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  //     console.log('target', target);
  //     console.log('propertyKey', propertyKey);
  //     console.log('descriptor', descriptor);
  //   };
}
/*
    const originalFunction = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (level <= appMaxLoggingLevel) {
        console.log(`>> Log: ${propertyKey}, ${JSON.stringify(args)}`);
      }

      originalFunction.apply(this, args);
    };
  };
}

export function Perf(): MethodDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction: Function = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`started at ${new Date().getTime()}`);

      originalFunction.apply(this, args);

      console.log(`ended at ${new Date().getTime()}`);
    };
  };
}
*/
