declare const Zone: any;

const myFirstZone = Zone.current.fork({
  name: 'my first zone',

  onInvoke(parentZoneDelegate, _, targetZone, delegate, applyThis, applyArgs, source) {
    console.log('we called run somewhere...');

    return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
  },

  onScheduleTask(parentZoneDelegate, _, targetZone, task) {
    console.log('We called an async task somewhere and its callback will be called later in our zone...');

    return parentZoneDelegate.scheduleTask(targetZone, task);
  },

  onInvokeTask(parentZoneDelegate, _, targetZone, task, applyThis, applyArgs) {
    console.log('Async callback was called somewhere...');

    return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
  },
});

myFirstZone.run(() => {
  setTimeout(() => {
    console.log('hi in 2 seconds');
  }, 2000);
});
