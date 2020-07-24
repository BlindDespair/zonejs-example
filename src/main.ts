declare const Zone: any;

const myFirstZone = Zone.current.fork({
  name: 'my first zone',
  onInvoke(parentZoneDelegate, _, targetZone, delegate, applyThis, applyArgs, source) {
    console.log('we called `run` somewhere');

    return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
  },
});

myFirstZone.run(() => {
  console.log('hi from callback');
});
