type pubsub = () => Readonly<{
  pub: (data: unknown) => void;
  sub: (fn: Function) => () => boolean;
}>;

export = pubsub;
