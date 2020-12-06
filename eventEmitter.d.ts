type eventEmitter = () => Readonly<{
  on: (name: string, fn: Function) => () => boolean;
  emit: (name: string, data: unknown) => false | void;
}>;

export = eventEmitter;
