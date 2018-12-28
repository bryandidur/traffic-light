
class TrafficLight
{
    constructor(items)
    {
        this.items = items;
        this.timeout = null;
        this.currentItem = 0;
    }

    init()
    {
        this.handle();
    }

    stop()
    {
        this.clearTimeout();
    }

    handle()
    {
        this.clearTimeout();

        this.items.forEach((item) => item.turnOff());

        this.items[this.currentItem].turnOn();

        this.timeout = window.setTimeout(() => {
            if (this.currentItem == this.items.length - 1) {
                this.currentItem = 0;
            } else {
                this.currentItem++;
            }

            this.handle();
        }, this.items[this.currentItem].timeout * 1000);
    }

    clearTimeout()
    {
        window.clearTimeout(this.timeout);
    }
}
