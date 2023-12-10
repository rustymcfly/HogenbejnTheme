import Plugin from 'src/plugin-system/plugin.class';

/**
 * @property HTMLElement el
 */
export default class ValentinesDayPlugin extends Plugin {
  init () {
    let main = document.createElement('div');
    main.style.top = 0;
    main.style.left = 0;
    main.style.zIndex = -1;
    main.style.position = 'fixed';
    main.style.height = '100%';
    main.style.width = '100%';

    (Array.apply(null, { length: 500 }).map(Number.call, Number))
      .reduce((last, item) => {
        return last.then(() => {
          const duration = (Math.random() * 10) * Math.PI * 100;
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              let element = document.createElement('span');
              element.classList.add('heart');
              element.textContent = '❤️';
              element.style.animationDuration = Math.max(duration * 10, 5000) + 'ms';
              element.style.animationIterationCount = 'infinite';
              element.style.animationTimingFunction = 'ease-in';
              element.style.position = 'absolute';
              element.style.left = (Math.random() > 0.5 ? this.getRandomInt(2, 20) : this.getRandomInt(80, 98))+ '%';
              element.style.display = 'inline-block';
              element.style.filter = `blur(${duration / 1000 * 2  }px)`;
              element.style.transform = `scale(${3 - (duration / 1000)})`;
              element.style.animationName = 'shine';

              main.appendChild(element);
              resolve();
            }, duration);
          });
        });
      } , Promise.resolve());

    this.el.appendChild(main);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
