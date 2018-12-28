
class LightItem
{
    constructor(node, color, timeout)
    {
        this.node = node;
        this.color = color;
        this.timeout = timeout;
    }

    turnOn()
    {
        this.node.classList.add(this.color);
    }

    turnOff()
    {
        this.node.classList.remove(this.color);
    }
}
